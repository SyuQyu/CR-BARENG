# SEO Setup Guide

This document explains how the SEO system is set up and how to extend it for future use with backend integration.

## Overview

The SEO system is designed to be:
- **Centralized**: All SEO configuration is in `src/constants/seo.ts`
- **Scalable**: Easy to extend with backend data
- **Type-safe**: Full TypeScript support
- **Comprehensive**: Includes Open Graph, Twitter Cards, and standard meta tags

## Architecture

### 1. Core Configuration (`src/constants/seo.ts`)

This file contains:
- `SITE_CONFIG`: Site-wide configuration (name, URL, default images, etc.)
- `defaultMetadata`: Default metadata used across all pages
- `PAGE_SEO_CONFIG`: Page-specific SEO configurations (currently static, ready for backend)
- `generateMetadata()`: Helper function to generate metadata objects
- `generatePageMetadata()`: Helper to generate metadata from page pathname

### 2. Root Layout (`src/app/layout.tsx`)

The root layout uses `defaultMetadata` to provide base SEO for all pages. Individual page layouts can override this.

### 3. Page Layouts

For pages that are client components (using `"use client"`), create a `layout.tsx` file in the same directory to export metadata:

```tsx
// src/app/(pages)/services/my-service/layout.tsx
import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/services/my-service');

export default function MyServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

## Adding SEO to a New Page

### For Static Pages (Client Components)

1. **Create a layout file** in the same directory as your `page.tsx`:

```tsx
// src/app/(pages)/your-page/layout.tsx
import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/your-page');

export default function YourPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

2. **Add page configuration** to `PAGE_SEO_CONFIG` in `src/constants/seo.ts`:

```ts
'/your-page': {
  title: 'Your Page Title',
  description: 'Your page description for SEO',
  keywords: ['keyword1', 'keyword2'],
  image: '/image/your-page-og.jpg', // Optional: custom OG image
},
```

### For Server Components

If your page is a server component (no `"use client"`), you can export metadata directly:

```tsx
// src/app/(pages)/your-page/page.tsx
import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/your-page');

export default function YourPage() {
  // Your component code
}
```

### For Dynamic Routes

For dynamic routes like `[id]` or `[slug]`, use `generateMetadata` function:

```tsx
// src/app/(pages)/blogs/[slug]/page.tsx
import { generateMetadata as generateMetadataHelper } from '@/constants/seo';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // TODO: When backend is connected, fetch blog post data
  // const blogPost = await fetchBlogPost(params.slug);
  
  // For now, use static config
  return generateMetadataHelper({
    title: `Blog Post - ${params.slug}`,
    description: 'Blog post description',
    url: `/blogs/${params.slug}`,
    type: 'article',
    openGraph: {
      type: 'article',
      // publishedTime: blogPost.publishedAt,
      // modifiedTime: blogPost.updatedAt,
    },
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Your component code
}
```

## Extending with Backend Integration

### Option 1: Fetch in `generateMetadata` (Recommended for Dynamic Content)

Update your page's `generateMetadata` function:

```tsx
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // Fetch SEO data from your backend
  const seoData = await fetch(`${process.env.API_URL}/seo/pages/${params.id}`)
    .then(res => res.json());
  
  return generateMetadataHelper({
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    image: seoData.ogImage,
    url: `/page/${params.id}`,
    openGraph: {
      type: 'article',
      publishedTime: seoData.publishedAt,
      modifiedTime: seoData.updatedAt,
    },
  });
}
```

### Option 2: Update `PAGE_SEO_CONFIG` to Fetch from Backend

Modify `getPageSEOConfig` in `src/constants/seo.ts`:

```ts
export async function getPageSEOConfig(pathname: string) {
  // Fetch from backend
  try {
    const response = await fetch(`${process.env.API_URL}/seo${pathname}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Failed to fetch SEO data:', error);
  }
  
  // Fallback to static config
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return PAGE_SEO_CONFIG[normalizedPath] || {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  };
}
```

### Option 3: Use a CMS

If using a headless CMS (Contentful, Strapi, etc.), create a utility function:

```ts
// src/lib/cms-seo.ts
export async function getCMSSEOData(pathname: string) {
  const query = `
    query {
      page(where: { slug: "${pathname}" }) {
        seo {
          title
          description
          keywords
          ogImage {
            url
          }
        }
      }
    }
  `;
  
  const response = await fetch(process.env.CMS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  
  const data = await response.json();
  return data.data.page.seo;
}
```

## SEO Features Included

✅ **Meta Tags**
- Title and description
- Keywords
- Canonical URLs
- Robots directives

✅ **Open Graph** (Facebook, LinkedIn, etc.)
- Title, description, image
- Type (website/article)
- Published/modified dates
- Author information
- Section and tags

✅ **Twitter Cards**
- Summary and summary_large_image
- Title, description, image

✅ **Structured Data Ready**
- Easy to add JSON-LD when needed

## Best Practices

1. **Always provide unique titles and descriptions** for each page
2. **Use descriptive keywords** relevant to the page content
3. **Include high-quality OG images** (1200x630px recommended)
4. **Keep descriptions under 160 characters** for optimal display
5. **Use canonical URLs** to avoid duplicate content issues
6. **Set `noindex` for pages** that shouldn't be indexed (privacy policy, terms, etc.)

## Environment Variables

Make sure to set these in your `.env` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This is used for generating absolute URLs for OG images and canonical URLs.

## Generating Layout Files

To quickly add SEO to multiple pages, you can create a script. Here's an example:

```bash
# scripts/generate-seo-layouts.sh
#!/bin/bash

# This script generates layout.tsx files for pages that need SEO
# Usage: ./scripts/generate-seo-layouts.sh

# Example: Generate layout for all service pages
for dir in src/app/\(pages\)/services/*/; do
  if [ ! -f "${dir}layout.tsx" ] && [ -f "${dir}page.tsx" ]; then
    page_path=$(echo $dir | sed 's|src/app/(pages)||' | sed 's|/$||')
    echo "Generating layout for ${page_path}"
    # Create layout.tsx file
  fi
done
```

## Troubleshooting

### Metadata not appearing
- Ensure you're using a server component or have a `layout.tsx` file
- Check that `generatePageMetadata` is being called with the correct pathname
- Verify the pathname matches a key in `PAGE_SEO_CONFIG`

### OG images not showing
- Ensure images are absolute URLs (starting with `http://` or `https://`)
- Check that images are accessible publicly
- Verify image dimensions (1200x630px recommended)

### Dynamic metadata not updating
- If using `generateMetadata`, ensure it's an async function
- Check that you're fetching data correctly from the backend
- Verify the metadata is being returned correctly

## Future Enhancements

- [ ] Add JSON-LD structured data generator
- [ ] Add sitemap.xml generator
- [ ] Add robots.txt handler
- [ ] Add automatic OG image generation
- [ ] Add analytics integration helpers
- [ ] Add multilingual SEO support


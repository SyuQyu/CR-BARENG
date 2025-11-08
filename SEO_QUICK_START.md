# SEO Setup - Quick Start

## ✅ What's Been Set Up

1. **Centralized SEO Configuration** (`src/constants/seo.ts`)
   - Site-wide settings
   - Page-specific SEO configs for all major pages
   - Helper functions for generating metadata

2. **Root Layout Updated** (`src/app/layout.tsx`)
   - Comprehensive default metadata
   - Open Graph and Twitter Card support
   - Proper meta tags structure

3. **Example Layout Files Created**
   - `/services/rating-and-accreditation/layout.tsx`
   - `/about-us/layout.tsx`
   - `/services/crescentrating-academy/layout.tsx`
   - `/resources/cr-member-directory/layout.tsx`
   - `/services/research-and-consultancy/layout.tsx`
   - `/insights/blogs/layout.tsx`
   - `/events/our-events/layout.tsx`

## 🚀 Adding SEO to a New Page

### For Client Component Pages (Most of your pages)

1. Create a `layout.tsx` file in the page directory:

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

2. Add the page config to `PAGE_SEO_CONFIG` in `src/constants/seo.ts`:

```ts
'/your-page': {
  title: 'Your Page Title',
  description: 'Your page description',
  keywords: ['keyword1', 'keyword2'],
  image: '/image/your-og-image.jpg', // Optional
},
```

## 📝 For Dynamic Routes

Use `generateMetadata` function:

```tsx
// src/app/(pages)/blogs/[slug]/page.tsx
import { generateMetadata as generateMetadataHelper } from '@/constants/seo';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // TODO: Fetch from backend when connected
  // const post = await fetchPost(params.slug);
  
  return generateMetadataHelper({
    title: `Blog: ${params.slug}`,
    description: 'Blog post description',
    url: `/blogs/${params.slug}`,
    type: 'article',
  });
}
```

## 🔌 Backend Integration (When Ready)

Simply update `generateMetadata` functions to fetch from your API:

```tsx
export async function generateMetadata({ params }) {
  const seoData = await fetch(`${API_URL}/seo/${params.id}`).then(r => r.json());
  
  return generateMetadataHelper({
    title: seoData.title,
    description: seoData.description,
    // ... other fields from backend
  });
}
```

## 📚 Full Documentation

See `SEO_SETUP.md` for comprehensive documentation including:
- Architecture details
- Best practices
- Troubleshooting
- Future enhancements

## 🎯 Next Steps

1. **Add layout files** for remaining pages (copy the pattern from existing ones)
2. **Update SEO configs** in `src/constants/seo.ts` with actual content
3. **Add OG images** for important pages
4. **Set environment variable**: `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
5. **Test** using tools like:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [Google Rich Results Test](https://search.google.com/test/rich-results)

## 📦 Files Created/Modified

- ✅ `src/constants/seo.ts` - SEO configuration
- ✅ `src/lib/seo-utils.ts` - SEO utilities
- ✅ `src/app/layout.tsx` - Updated with default metadata
- ✅ `src/app/(pages)/layout.tsx` - Updated
- ✅ Multiple layout files for key pages
- ✅ `SEO_SETUP.md` - Full documentation
- ✅ `scripts/generate-seo-layouts.js` - Helper script


import type { Metadata } from 'next';

/**
 * Site-wide SEO configuration
 * This can be easily extended to fetch from backend in the future
 */
export const SITE_CONFIG = {
  name: 'CrescentRating',
  description: 'Global leader in Muslim-friendly travel ratings and accreditation services. Helping destinations and businesses serve Muslim travelers worldwide.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://crescentrating.com',
  ogImage: '/image/og-default.jpg', // Default OG image - update with actual image
  twitterHandle: '@crescentrating', // Update with actual handle
  locale: 'en_US',
  type: 'website',
} as const;

/**
 * Default metadata that will be used across all pages
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Muslim travel',
    'Halal travel',
    'Crescent Rating',
    'Muslim-friendly hotels',
    'Halal tourism',
    'Travel rating',
    'Accreditation',
    'Muslim travelers',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: SITE_CONFIG.type,
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: SITE_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

/**
 * Helper function to generate page-specific metadata
 * This makes it easy to extend with backend data in the future
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical,
  openGraph,
  twitter,
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  openGraph?: {
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    title?: string;
    description?: string;
    image?: string;
  };
}): Metadata {
  const pageUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;
  const ogImage = image || SITE_CONFIG.ogImage;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.url}${ogImage}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? [...defaultMetadata.keywords as string[], ...keywords] : defaultMetadata.keywords,
    alternates: {
      canonical: canonical || pageUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url: pageUrl,
      type: openGraph?.type || type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(openGraph?.publishedTime && { publishedTime: openGraph.publishedTime }),
      ...(openGraph?.modifiedTime && { modifiedTime: openGraph.modifiedTime }),
      ...(openGraph?.authors && { authors: openGraph.authors }),
      ...(openGraph?.section && { section: openGraph.section }),
      ...(openGraph?.tags && { tags: openGraph.tags }),
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: twitter?.title || title,
      description: twitter?.description || description,
      images: twitter?.image ? [twitter.image] : [fullImageUrl],
      card: twitter?.card || 'summary_large_image',
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Page-specific SEO configurations
 * These can be easily replaced with API calls in the future
 * 
 * TODO: When backend is connected, fetch this data from:
 * - CMS API
 * - Database
 * - Headless CMS
 * 
 * Example future implementation:
 * ```ts
 * export async function getPageMetadata(pageSlug: string) {
 *   const response = await fetch(`${API_URL}/seo/${pageSlug}`);
 *   return response.json();
 * }
 * ```
 */
export const PAGE_SEO_CONFIG: Record<string, {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}> = {
  // Home page
  '/': {
    title: 'Home',
    description: 'Welcome to CrescentRating - The global leader in Muslim-friendly travel ratings and accreditation services.',
    keywords: ['Muslim travel', 'Halal tourism', 'Travel accreditation'],
  },

  // About Us pages
  '/about-us': {
    title: 'About Us',
    description: 'Learn about CrescentRating, our mission, vision, and commitment to making travel more inclusive for Muslim travelers worldwide.',
    keywords: ['About CrescentRating', 'Company information', 'Muslim travel organization'],
  },
  '/about-us/what-we-do': {
    title: 'What We Do',
    description: 'Discover the comprehensive services and solutions CrescentRating offers to destinations and businesses serving Muslim travelers.',
  },
  '/about-us/our-services': {
    title: 'Our Services',
    description: 'Explore CrescentRating\'s range of services including ratings, accreditation, research, and consultancy for Muslim-friendly travel.',
  },
  '/about-us/contact-us': {
    title: 'Contact Us',
    description: 'Get in touch with CrescentRating. Contact our team for inquiries about our services, partnerships, or support.',
    keywords: ['Contact CrescentRating', 'Customer support', 'Inquiries'],
  },
  '/about-us/careers': {
    title: 'Careers',
    description: 'Join the CrescentRating team. Explore career opportunities and help shape the future of Muslim-friendly travel.',
    keywords: ['Careers', 'Jobs', 'Employment opportunities'],
  },
  '/about-us/newsroom': {
    title: 'Newsroom',
    description: 'Stay updated with the latest news, press releases, and announcements from CrescentRating.',
  },
  '/about-us/press-releases': {
    title: 'Press Releases',
    description: 'Read official press releases and media announcements from CrescentRating.',
  },
  '/about-us/in-the-media': {
    title: 'In The Media',
    description: 'See where CrescentRating has been featured in the media and press coverage.',
  },

  // Services pages
  '/services/rating-and-accreditation': {
    title: 'Rating and Accreditation',
    description: 'Get your establishment Crescent Rated to gain a competitive edge and demonstrate your commitment to serving Muslim travelers.',
    keywords: ['Crescent Rating', 'Accreditation', 'Establishment rating'],
    image: '/image/rating-accreditation/main.webp',
  },
  '/services/rating-and-accreditation/hotels': {
    title: 'Hotel Rating and Accreditation',
    description: 'Get your hotel Crescent Rated to attract Muslim travelers and showcase your Muslim-friendly amenities and services.',
    keywords: ['Hotel rating', 'Muslim-friendly hotels', 'Halal hotel accreditation'],
  },
  '/services/rating-and-accreditation/restaurants': {
    title: 'Restaurant Rating and Accreditation',
    description: 'Become a Crescent Rated restaurant and serve Muslim travelers with confidence through halal certification and Muslim-friendly practices.',
    keywords: ['Restaurant rating', 'Halal restaurants', 'Muslim-friendly dining'],
  },
  '/services/rating-and-accreditation/attractions': {
    title: 'Attraction Rating and Accreditation',
    description: 'Get your tourist attraction Crescent Rated to welcome and serve Muslim travelers with appropriate facilities and services.',
    keywords: ['Attraction rating', 'Muslim-friendly attractions', 'Tourist attractions'],
  },
  '/services/rating-and-accreditation/mice': {
    title: 'MICE Rating and Accreditation',
    description: 'Crescent Rate your MICE facilities to host Muslim travelers and events with appropriate accommodations and services.',
    keywords: ['MICE rating', 'Conference facilities', 'Meeting venues'],
  },
  '/services/rating-and-accreditation/shopping-mall': {
    title: 'Shopping Mall Rating and Accreditation',
    description: 'Get your shopping mall Crescent Rated to serve Muslim travelers with halal shopping options and prayer facilities.',
    keywords: ['Shopping mall rating', 'Halal shopping', 'Retail accreditation'],
  },
  '/services/rating-and-accreditation/beach': {
    title: 'Beach Rating and Accreditation',
    description: 'Crescent Rate your beach destination to provide Muslim travelers with appropriate facilities and privacy options.',
    keywords: ['Beach rating', 'Muslim-friendly beaches', 'Halal beach destinations'],
  },
  '/services/rating-and-accreditation/cruise-ship': {
    title: 'Cruise Ship Rating and Accreditation',
    description: 'Get your cruise ship Crescent Rated to serve Muslim travelers with halal dining and prayer facilities.',
    keywords: ['Cruise ship rating', 'Halal cruises', 'Muslim-friendly cruises'],
  },
  '/services/rating-and-accreditation/hospital': {
    title: 'Hospital Rating and Accreditation',
    description: 'Crescent Rate your hospital to serve Muslim patients with halal food options and prayer facilities.',
    keywords: ['Hospital rating', 'Muslim-friendly healthcare', 'Halal healthcare'],
  },
  '/services/rating-and-accreditation/travel-agent': {
    title: 'Travel Agent Rating and Accreditation',
    description: 'Get your travel agency Crescent Rated to specialize in Muslim-friendly travel services and packages.',
    keywords: ['Travel agent rating', 'Halal travel agents', 'Muslim travel services'],
  },
  '/services/rating-and-accreditation/tour-packages': {
    title: 'Tour Package Rating and Accreditation',
    description: 'Crescent Rate your tour packages to offer Muslim travelers halal-certified tours and appropriate accommodations.',
    keywords: ['Tour package rating', 'Halal tours', 'Muslim-friendly travel packages'],
  },
  '/services/rating-and-accreditation/activities': {
    title: 'Activity Rating and Accreditation',
    description: 'Get your activities Crescent Rated to provide Muslim travelers with appropriate and respectful experiences.',
    keywords: ['Activity rating', 'Muslim-friendly activities', 'Halal tourism activities'],
  },
  '/services/crescentrating-academy': {
    title: 'CrescentRating Academy',
    description: 'Professional training and education programs to help businesses and destinations better serve Muslim travelers.',
    keywords: ['Travel education', 'Muslim travel training', 'Professional development'],
  },
  '/services/crescentrating-academy/executive-education': {
    title: 'Executive Education',
    description: 'Executive education programs for tourism professionals to understand and serve the Muslim travel market.',
  },
  '/services/crescentrating-academy/sector-immersion': {
    title: 'Sector Immersion',
    description: 'Deep-dive sector immersion programs for tourism professionals.',
  },
  '/services/crescentrating-academy/halalchefworld': {
    title: 'HalalChefWorld',
    description: 'Professional training for chefs and culinary professionals in halal cooking and Muslim-friendly food service.',
  },
  '/services/research-and-consultancy': {
    title: 'Research and Consultancy',
    description: 'Comprehensive research and consultancy services to help destinations and businesses understand the Muslim travel market.',
    keywords: ['Travel research', 'Market analysis', 'Consulting services'],
  },
  '/services/destination-marketing': {
    title: 'Destination Marketing',
    description: 'Strategic destination marketing services to help destinations attract and serve Muslim travelers effectively.',
    keywords: ['Destination marketing', 'Tourism marketing', 'Muslim travel promotion'],
  },
  '/services/muslim-travel-intent-tracker': {
    title: 'Muslim Travel Intent Tracker',
    description: 'Track and analyze Muslim travel intent data to understand market trends and opportunities.',
    keywords: ['Travel analytics', 'Market intelligence', 'Travel intent data'],
  },

  // Resources pages
  '/resources/cr-member-directory': {
    title: 'CR Member Directory',
    description: 'Explore the directory of Crescent Rated establishments including hotels, restaurants, and attractions.',
    keywords: ['Member directory', 'Crescent Rated establishments', 'Halal travel directory'],
  },
  '/resources/certified-professionals-directory': {
    title: 'Certified Professionals Directory',
    description: 'Find certified professionals trained in Muslim-friendly travel and hospitality services.',
    keywords: ['Certified professionals', 'Travel experts', 'Hospitality professionals'],
  },
  '/resources/glossary': {
    title: 'Glossary',
    description: 'Comprehensive glossary of terms related to Muslim travel, halal tourism, and CrescentRating services.',
    keywords: ['Travel glossary', 'Halal terminology', 'Muslim travel terms'],
  },
  '/resources/halal-certification-bodies': {
    title: 'Halal Certification Bodies',
    description: 'Directory of recognized halal certification bodies worldwide.',
    keywords: ['Halal certification', 'Certification bodies', 'Halal authorities'],
  },

  // Insights pages
  '/insights/blogs': {
    title: 'Blogs',
    description: 'Read the latest blog posts and articles about Muslim travel, halal tourism, and industry insights.',
    keywords: ['Travel blog', 'Muslim travel articles', 'Industry insights'],
  },
  '/insights/cr-insight-series': {
    title: 'CR Insight Series',
    description: 'In-depth insights and analysis series on Muslim travel trends and market opportunities.',
  },
  '/insights/halal-muslim-travel-market-reports': {
    title: 'Halal Muslim Travel Market Reports',
    description: 'Comprehensive market reports on the halal and Muslim travel industry trends and opportunities.',
    keywords: ['Market reports', 'Travel industry reports', 'Market analysis'],
  },
  '/insights/gmti': {
    title: 'Global Muslim Travel Index (GMTI)',
    description: 'Explore the Global Muslim Travel Index ranking destinations and their Muslim-friendly travel readiness.',
    keywords: ['GMTI', 'Travel index', 'Destination ranking'],
  },
  '/insights/cr-maps': {
    title: 'CR Maps',
    description: 'Interactive maps and visualizations of Crescent Rated establishments and destinations.',
    keywords: ['Travel maps', 'Interactive maps', 'Destination visualization'],
  },

  // Events pages
  '/events/our-events': {
    title: 'Our Events',
    description: 'Discover upcoming events, conferences, and summits organized by CrescentRating.',
    keywords: ['Travel events', 'Conferences', 'Summits'],
  },
  '/events/halal-in-travel-global-summit': {
    title: 'Halal In Travel Global Summit',
    description: 'Join the premier global summit for the halal and Muslim travel industry.',
    keywords: ['Travel summit', 'Halal travel conference', 'Global summit'],
  },
  '/events/hit-awards': {
    title: 'HIT Awards',
    description: 'Celebrate excellence in the halal and Muslim travel industry at the HIT Awards.',
    keywords: ['Travel awards', 'Industry recognition', 'Excellence awards'],
  },

  // Other pages
  '/faq': {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about CrescentRating services, ratings, and accreditation.',
    keywords: ['FAQs', 'Help', 'Support'],
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    description: 'Read CrescentRating\'s privacy policy and learn how we protect and handle your personal information.',
    noindex: true,
  },
  '/terms-condition': {
    title: 'Terms and Conditions',
    description: 'Review CrescentRating\'s terms and conditions for using our services and website.',
    noindex: true,
  },
};

/**
 * Helper to get SEO config for a specific page
 * This function can be easily modified to fetch from backend
 */
export function getPageSEOConfig(pathname: string) {
  // Normalize pathname (remove trailing slash, handle root)
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  
  return PAGE_SEO_CONFIG[normalizedPath] || {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  };
}

/**
 * Generate metadata for a specific page
 * Usage in page.tsx files:
 * 
 * ```ts
 * import { generatePageMetadata } from '@/constants/seo';
 * 
 * export const metadata = generatePageMetadata('/services/rating-and-accreditation');
 * ```
 */
export function generatePageMetadata(pathname: string, overrides?: Partial<ReturnType<typeof getPageSEOConfig>>) {
  const config = getPageSEOConfig(pathname);
  const finalConfig = { ...config, ...overrides };
  
  return generateMetadata({
    title: finalConfig.title,
    description: finalConfig.description,
    keywords: finalConfig.keywords,
    image: finalConfig.image,
    url: pathname,
    noindex: (finalConfig as { noindex?: boolean }).noindex,
    nofollow: (finalConfig as { nofollow?: boolean }).nofollow,
  });
}


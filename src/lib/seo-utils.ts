/**
 * SEO Utility Functions
 * 
 * This file provides utilities to help generate metadata for pages.
 * When backend is connected, these functions can be extended to fetch
 * dynamic SEO data from your CMS or API.
 */

import type { Metadata } from 'next';

import { generatePageMetadata, getPageSEOConfig, type PAGE_SEO_CONFIG } from '@/constants/seo';

/**
 * Generate metadata for a static page
 * Usage in layout.tsx:
 * 
 * ```ts
 * import { getStaticPageMetadata } from '@/lib/seo-utils';
 * 
 * export const metadata = getStaticPageMetadata('/services/rating-and-accreditation');
 * ```
 */
export function getStaticPageMetadata(pathname: string): Metadata {
  return generatePageMetadata(pathname);
}

/**
 * Generate metadata with custom overrides
 * Usage:
 * 
 * ```ts
 * import { getCustomPageMetadata } from '@/lib/seo-utils';
 * 
 * export const metadata = getCustomPageMetadata('/about-us', {
 *   title: 'Custom Title',
 *   description: 'Custom description',
 * });
 * ```
 */
export function getCustomPageMetadata(
  pathname: string,
  overrides: Partial<typeof PAGE_SEO_CONFIG extends Record<string, infer T> ? T : never>
): Metadata {
  return generatePageMetadata(pathname, overrides);
}

/**
 * Generate metadata for dynamic routes
 * This function can be extended to fetch data from backend
 * 
 * Example future implementation:
 * ```ts
 * export async function getDynamicPageMetadata(
 *   pathname: string,
 *   params: Record<string, string>
 * ): Promise<Metadata> {
 *   // Fetch SEO data from backend
 *   const seoData = await fetch(`${API_URL}/seo/${pathname}`, {
 *     params,
 *   }).then(res => res.json());
 *   
 *   return generateMetadata({
 *     title: seoData.title,
 *     description: seoData.description,
 *     // ... other fields
 *   });
 * }
 * ```
 */
export async function getDynamicPageMetadata(
  pathname: string,
  params?: Record<string, string | string[]>
): Promise<Metadata> {
  // For now, use static config
  // TODO: When backend is connected, fetch dynamic data here
  const config = getPageSEOConfig(pathname);
  
  // You can extend this to handle dynamic params
  // For example, if pathname is '/blogs/[slug]', you could:
  // const slug = params?.slug;
  // const blogPost = await fetchBlogPost(slug);
  // return generateMetadata({ ...config, ...blogPost.seo });
  
  return generatePageMetadata(pathname);
}

/**
 * Helper to get canonical URL for a page
 */
export function getCanonicalUrl(pathname: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crescentrating.com';
  return `${baseUrl}${pathname}`;
}


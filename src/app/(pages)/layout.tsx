import DefaultLayout from '@/components/layouts/default-layouts';

/**
 * Pages Layout
 * 
 * Individual page layouts can export metadata to override the root layout.
 * This layout just wraps pages with the DefaultLayout component.
 * 
 * For pages that need SEO, create a layout.tsx file in the page directory:
 * 
 * ```tsx
 * import { generatePageMetadata } from '@/constants/seo';
 * 
 * export const metadata = generatePageMetadata('/your-page-path');
 * 
 * export default function YourPageLayout({ children }) {
 *   return <>{children}</>;
 * }
 * ```
 */

export default function RootLayout({ children }: Props) {
  return (
    <DefaultLayout>{children}</DefaultLayout>
  );
}

type Props = {
  children: React.ReactNode;
};

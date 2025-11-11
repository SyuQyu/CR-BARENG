import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/resources/glossary/browse-by-category/[categoryId]');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

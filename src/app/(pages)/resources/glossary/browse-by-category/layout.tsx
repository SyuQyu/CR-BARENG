import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/resources/glossary/browse-by-category');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

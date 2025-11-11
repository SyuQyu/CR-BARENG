import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/resources/glossary/term-detail/[termDetailId]');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

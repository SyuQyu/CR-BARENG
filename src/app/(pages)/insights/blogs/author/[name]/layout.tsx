import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/insights/blogs/author/[name]');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

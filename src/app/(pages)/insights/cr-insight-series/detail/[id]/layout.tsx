import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/insights/cr-insight-series/detail/[id]');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

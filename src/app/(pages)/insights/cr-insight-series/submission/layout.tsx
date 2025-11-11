import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/insights/cr-insight-series/submission');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

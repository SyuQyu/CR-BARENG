import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/insights/halal-muslim-travel-market-reports');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

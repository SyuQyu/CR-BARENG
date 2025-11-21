import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/terms-condition');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

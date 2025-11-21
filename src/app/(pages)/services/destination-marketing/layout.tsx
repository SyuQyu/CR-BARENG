import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/services/destination-marketing');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

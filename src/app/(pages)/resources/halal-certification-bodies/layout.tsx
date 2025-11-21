import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/resources/halal-certification-bodies');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

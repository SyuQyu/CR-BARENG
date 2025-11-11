import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/events/hit-awards');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

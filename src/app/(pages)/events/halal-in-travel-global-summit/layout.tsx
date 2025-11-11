import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/events/halal-in-travel-global-summit');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

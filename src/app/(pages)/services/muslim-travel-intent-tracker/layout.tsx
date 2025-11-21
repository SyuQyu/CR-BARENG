import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/services/muslim-travel-intent-tracker');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

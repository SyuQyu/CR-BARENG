import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/services/rating-and-accreditation/shopping-mall');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

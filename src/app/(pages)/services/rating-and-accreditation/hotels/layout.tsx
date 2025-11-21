import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/services/rating-and-accreditation/hotels');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

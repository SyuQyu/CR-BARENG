import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/services/rating-and-accreditation');

export default function RatingAndAccreditationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


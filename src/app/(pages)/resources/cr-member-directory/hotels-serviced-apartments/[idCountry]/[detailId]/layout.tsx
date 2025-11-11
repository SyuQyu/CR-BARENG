import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/resources/cr-member-directory/hotels-serviced-apartments/[idCountry]/[detailId]');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

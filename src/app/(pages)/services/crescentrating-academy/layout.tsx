import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/services/crescentrating-academy');

export default function CrescentRatingAcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


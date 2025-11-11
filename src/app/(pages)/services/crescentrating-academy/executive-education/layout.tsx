import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/services/crescentrating-academy/executive-education');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

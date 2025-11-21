import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/about-us/what-we-do');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

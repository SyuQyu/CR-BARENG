import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/about-us/press-releases');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

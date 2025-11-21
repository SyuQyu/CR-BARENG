import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/about-us/careers/[id]');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

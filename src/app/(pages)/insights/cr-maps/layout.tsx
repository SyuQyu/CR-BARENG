import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/insights/cr-maps');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/resources/certified-professionals-directory');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

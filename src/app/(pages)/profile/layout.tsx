import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/profile');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

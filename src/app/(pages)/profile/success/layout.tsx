import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/profile/success');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

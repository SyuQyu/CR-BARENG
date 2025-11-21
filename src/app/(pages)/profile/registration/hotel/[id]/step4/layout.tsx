import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/profile/registration/hotel/[id]/step4');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

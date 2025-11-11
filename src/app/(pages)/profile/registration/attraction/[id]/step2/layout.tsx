import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/profile/registration/attraction/[id]/step2');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

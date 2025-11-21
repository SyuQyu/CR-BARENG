import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/profile/registration/mice/[id]/step1');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/about-us/contact-us');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

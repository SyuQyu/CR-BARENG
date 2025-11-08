import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/about-us');

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


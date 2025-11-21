import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/services/research-and-consultancy/detail/[id]');

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

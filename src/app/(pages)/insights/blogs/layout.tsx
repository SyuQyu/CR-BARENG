import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/insights/blogs');

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


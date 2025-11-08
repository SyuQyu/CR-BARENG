import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/resources/cr-member-directory');

export default function CRMemberDirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


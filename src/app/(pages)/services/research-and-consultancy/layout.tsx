import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/services/research-and-consultancy');

export default function ResearchAndConsultancyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


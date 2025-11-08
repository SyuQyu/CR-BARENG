import { generatePageMetadata } from '@/constants/seo';

export const metadata = generatePageMetadata('/events/our-events');

export default function OurEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


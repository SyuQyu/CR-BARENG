import DefaultLayout from '@/components/layouts/default-layouts';

export const metadata = {
  title: {
    default: 'CRHT WEB TEST',
    template: '%s | CRHT WEB TEST',
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <DefaultLayout>{children}</DefaultLayout>
  );
}

type Props = {
  children: React.ReactNode;
};

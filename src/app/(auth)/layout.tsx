import AuthLayout from '@/components/layouts/auth-layouts';
export const metadata = {
  title: {
    default: 'CRHT WEB TEST',
    template: '%s | CRHT WEB TEST',
  },
};

export default function AuthLayouts({ children }: Props) {
  return (
    <AuthLayout>
      <div className='bg-white'>
        {children}
      </div>
    </AuthLayout>
  );
}

type Props = {
  children: React.ReactNode;
};

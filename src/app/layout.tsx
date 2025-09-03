import '@/styles/index.scss';

import clsx from 'clsx';

import { NProgress } from '@/components/common';
import { Toaster } from "@/components/ui/sonner"
import { INTER } from '@/constants/fonts';

export const metadata = {
    title: {
        default: 'CRHT WEB TEST',
        template: '%s | CRHT WEB TEST',
    },
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang='en' className={clsx('scroll-smooth', INTER.variable)}>
            <body>
                <NProgress />
                {children}
                <Toaster />
            </body>
        </html>
    );
}

type Props = {
    children: React.ReactNode;
};

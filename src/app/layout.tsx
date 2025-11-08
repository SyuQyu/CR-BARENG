import '@/styles/index.scss';

import clsx from 'clsx';

import {NProgress } from '@/components/common';
import { Toaster } from "@/components/ui/sonner"
import { INTER } from '@/constants/fonts';
import { defaultMetadata } from '@/constants/seo';

export const metadata = defaultMetadata;

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

'use client';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation'

const Header = dynamic(() => import('./header/header'));
const NewFooter = dynamic(() => import('./footer/newFooter'))

export default function DefaultLayout({ children }: Props) {
    const pathname = usePathname()
    const isProfileRegistration = pathname.includes('/profile/registration');

    return (
        <div id='layout-default'>
            {!isProfileRegistration && <Header className='header' />}
            <main className='main'>{children}</main>
            {!isProfileRegistration && <NewFooter className='newFooter' />}
        </div>
    );
}

type Props = {
    children: React.ReactNode;
};

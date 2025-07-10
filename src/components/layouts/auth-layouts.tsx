import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./header/header'));
const Footer = dynamic(() => import('./footer/footer'));

export default function AuthLayout({ children }: Props) {

    return (
        <div id='layout-default'>
            <Header className='header' />
            <main className='main'>{children}</main>
        </div>
    );
}

type Props = {
    children: React.ReactNode;
};

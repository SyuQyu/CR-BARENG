import clsx from 'clsx';
import { Input } from "@/components/common";

export const metadata = {
    title: {
        default: 'CRHT WEB TEST',
        template: '%s | CRHT WEB TEST',
    },
};

export default function RootLayout({ children }: Props) {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full h-[390px] bg-blue-100 md:p-32 p-4 flex justify-center items-center flex-col bg-center"
                style={{ backgroundImage: "url('/image/book.jpg')", backgroundSize: "cover" }}
            >
                <div className="absolute inset-0 bg-[#0F205C] opacity-80 z-10"></div>
                <h1 className="text-mobile-heading-3 sm:text-desktop-heading-1 font-bold mb-4 bg-clip-text text-white relative z-20 text-center">
                    Halal Travel Glossary
                </h1>
                <p className="text-white text-center text-mobile-body-3 sm:text-desktop-body-2 mb-10 relative z-20 max-w-4xl">
                    Explore the essential glossary for the Muslim/Halal travel market. This comprehensive guide offers clear explanations of key terms, helping you better serve and connect with this growing segment of travelers.
                </p>
                <Input placeholder="Search" className="z-20 text-mobile-body-2 max-w-xl" />
            </section>
            <div className='mt-7 sm:mt-14 w-full'>
                {children}
            </div>
        </div>
    );
}

type Props = {
    children: React.ReactNode;
};

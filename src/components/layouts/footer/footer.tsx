'use client';
import clsx from 'clsx';
import Link from 'next/link';

export default function Footer({ className }: Props) {
    // const [language, setLanguage] = useState('en');

    // const toggleLanguage = () => {
    //     const newLanguage = language === 'en' ? 'ind' : 'en';
    //     setLanguage(newLanguage);
    // };
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    return (
        <footer className={clsx(className)}>
            <div className='w-[50%] flex flex-col justify-center items-center p-10 gap-8 text-white'>
                <p className='text-3xl font-bold'>
                    Subscribe to our newsletters
                </p>
                <form className="rounded-full w-full max-w-[700px] flex flex-row">
                    <input placeholder="email@example.com" className="rounded-l-full !text-black text-inherit w-full px-4 py-4 mr-[-1px] border-0 transition-all duration-200 focus:outline-none" />
                    <button type="button" className="rounded-r-full text-inherit float-right px-4 py-4 ml-[-1px] bg-[#f4a01c] transition-all duration-200 border-0 hover:cursor-pointer hover:px-6">
                        Submit
                    </button>
                </form>
                <div className="flex flex-row items-center justify-start">
                    <input type="checkbox" className="mr-2" />
                    <p className="text-sm">I have read and agree to CrescentRating <span className='text-custom-blue font-bold'>Privacy Policy</span> & <span className='text-custom-blue font-bold'>Terms and Conditions</span></p>
                </div>
                <div className='grid grid-cols-4 gap-12 border-t-[0.5px] border-b-[0.5px] border-gray-500/50 my-5 py-10'>
                    <div className='flex flex-col gap-2 justify-start items-start'>
                        <p className='text-lg font-bold'>Company</p>
                        <p className='text-sm'>About Us</p>
                        <p className='text-sm'>Event Participation</p>
                        <p className='text-sm'>Contact Us</p>
                        <p className='text-sm'>Press Releases</p>
                        <p className='text-sm'>Careers with CrescentRating</p>
                        <p className='text-sm'>Follow Us</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-start items-start'>
                        <p className='text-lg font-bold'>Resources</p>
                        <p className='text-sm'>Crescent Rated Halal/Muslim Friendly Hotels</p>
                        <p className='text-sm'>Crescent Rated Halal/Muslim Friendly Restaurants</p>
                        <p className='text-sm'>Global Muslim Travel Index</p>
                        <p className='text-sm'>GMTI 2018 Launch Coverage</p>
                        <p className='text-sm'>GMTI 2017 Launch Coverage</p>
                        <p className='text-sm'>GMTI 2016 Launch Coverage</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-start items-start'>
                        <p className='text-lg font-bold'>Site</p>
                        <p className='text-sm'>FAQs</p>
                        <p className='text-sm'>Privacy Policy</p>
                        <p className='text-sm'>Terms & Conditions</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-start items-start'>
                        <p className='text-lg font-bold'>Partner With Us</p>
                        <p className='text-sm'>Auditor Registration</p>
                        <p className='text-sm'>Channel Partners</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

type Props = {
    className?: string;
};

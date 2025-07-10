'use client';
import { Button, ImageWithFallback, Input } from '@/components/common';
import clsx from 'clsx';
import Link from 'next/link';
import { footerData } from '@/constants/dummyData'
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ProductSection {
    title: string;
    links: string[];
}

export default function Footer({ className }: Props) {
    return (
        <footer className={clsx(className)}>
            <div className="w-full mb-10 flex flex-col justify-start items-start max-w-[1440px] gap-8 px-6 lg:px-8">
                {/* Newsletter Section */}
                <div className="w-full lg:px-0 flex md:flex-row flex-col justify-start md:justify-between items-start md:items-start md:gap-0 gap-4">
                    <div className="flex flex-col md:justify-start justify-center md:items-start items-center gap-2">
                        <p className="md:text-desktop-heading-5 text-mobile-heading-4 font-semibold md:text-left text-center">Subscribe to our newsletter</p>
                        <p className="md:text-desktop-caption-l text-desktop-caption-s w-full md:w-[70%] text-neutral-500 md:text-left text-center">Let us bring you the very latest Halal/Muslim travel market news and updates straight to your inbox.</p>
                    </div>
                    <div className='w-full max-w-[500px] flex flex-col gap-3'>
                        <div className="flex md:w-auto w-full flex-col md:flex-row gap-4 md:gap-2 justify-end items-center">
                            <Input
                                placeholder="Enter your email here"
                                containerInputClasses="sm:h-[57px] bg-white"
                                className=''
                                button={
                                    <Button className="flex flex-row justify-center items-center gap-2 text-white bg-[#453CFF] h-full px-4">
                                        Search
                                    </Button>
                                }
                            />
                        </div>
                        <div className="flex flex-row justify-start items-center space-x-2">
                            <Checkbox
                                id="terms1"
                                className="h-4 w-4 rounded-none border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label
                                htmlFor="terms1"
                                className="font-semibold md:text-desktop-label-l text-desktop-label-s text-gray-600 leading-none"
                            >
                                I have read and agree to CrescentRating{" "}
                                <a
                                    href="#"
                                    className="text-blue-600 font-semibold underline hover:text-blue-800"
                                >
                                    Privacy Policy
                                </a>{" "}
                                &{" "}
                                <a
                                    href="#"
                                    className="text-blue-600 font-semibold underline hover:text-blue-800"
                                >
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="w-full flex sm:flex-row flex-col-reverse justify-between items-start border-t border-b border-slate-500/20 py-8 gap-6 sm:gap-20">
                    <div className='w-full sm:max-w-[320px] flex flex-col sm:justify-start justify-center items-start gap-8'>
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full object-contain rounded-lg"
                            priority={false}
                            src="/image/inner-logo.svg"
                            alt="logo"
                        />
                        <div className="w-full flex flex-row sm:justify-start justify-center items-center gap-3">
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center border border-[#E3E2E6]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M12.2174 1.26929H14.4663L9.55298 6.88495L15.3332 14.5266H10.8073L7.26253 9.89198L3.20647 14.5266H0.956125L6.21146 8.52002L0.666504 1.26929H5.30724L8.51143 5.50551L12.2174 1.26929ZM11.428 13.1805H12.6742L4.6301 2.54471H3.29281L11.428 13.1805Z" fill="#453CFF" />
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center border border-[#E3E2E6]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_4842_8226)">
                                        <path d="M14.8189 0H1.18111C0.867861 0 0.567441 0.124438 0.34594 0.34594C0.124438 0.567441 0 0.867861 0 1.18111V14.8189C0 15.1321 0.124438 15.4326 0.34594 15.6541C0.567441 15.8756 0.867861 16 1.18111 16H14.8189C15.1321 16 15.4326 15.8756 15.6541 15.6541C15.8756 15.4326 16 15.1321 16 14.8189V1.18111C16 0.867861 15.8756 0.567441 15.6541 0.34594C15.4326 0.124438 15.1321 0 14.8189 0ZM4.76889 13.63H2.36333V5.98889H4.76889V13.63ZM3.56445 4.93C3.29158 4.92846 3.02528 4.84613 2.79916 4.69339C2.57304 4.54065 2.39723 4.32435 2.29392 4.07179C2.19061 3.81923 2.16443 3.54173 2.21869 3.2743C2.27294 3.00688 2.4052 2.76152 2.59877 2.56919C2.79234 2.37686 3.03854 2.24618 3.30631 2.19364C3.57408 2.1411 3.85141 2.16906 4.1033 2.27399C4.35519 2.37892 4.57036 2.55611 4.72164 2.78321C4.87293 3.01031 4.95355 3.27713 4.95333 3.55C4.95591 3.73269 4.92167 3.91403 4.85267 4.0832C4.78368 4.25238 4.68132 4.40593 4.55171 4.53471C4.42211 4.66349 4.2679 4.76486 4.09828 4.83277C3.92867 4.90068 3.74711 4.93375 3.56445 4.93ZM13.6356 13.6367H11.2311V9.46222C11.2311 8.23111 10.7078 7.85111 10.0322 7.85111C9.31889 7.85111 8.61889 8.38889 8.61889 9.49333V13.6367H6.21333V5.99445H8.52667V7.05333H8.55778C8.79 6.58333 9.60333 5.78 10.8444 5.78C12.1867 5.78 13.6367 6.57667 13.6367 8.91L13.6356 13.6367Z" fill="#453CFF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4842_8226">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center border border-[#E3E2E6]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_4842_8231)">
                                        <path d="M16 8C16 3.58176 12.4182 0 8 0C3.58176 0 0 3.58176 0 8C0 11.7517 2.58304 14.8998 6.06752 15.7645V10.4448H4.41792V8H6.06752V6.94656C6.06752 4.22368 7.29984 2.9616 9.97312 2.9616C10.48 2.9616 11.3546 3.06112 11.7123 3.16032V5.37632C11.5235 5.35648 11.1955 5.34656 10.7882 5.34656C9.47648 5.34656 8.9696 5.84352 8.9696 7.13536V8H11.5827L11.1338 10.4448H8.9696V15.9414C12.9309 15.463 16.0003 12.0902 16.0003 8H16Z" fill="#453CFF" />
                                        <path d="M11.1333 10.4449L11.5823 8.00007H8.96916V7.13543C8.96916 5.84359 9.47604 5.34663 10.7877 5.34663C11.1951 5.34663 11.5231 5.35655 11.7119 5.37639V3.16039C11.3541 3.06087 10.4796 2.96167 9.97268 2.96167C7.2994 2.96167 6.06708 4.22375 6.06708 6.94663V8.00007H4.41748V10.4449H6.06708V15.7646C6.68596 15.9181 7.33332 16.0001 7.99956 16.0001C8.32756 16.0001 8.65108 15.9799 8.96884 15.9415V10.4449H11.133H11.1333Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4842_8231">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center border border-[#E3E2E6]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_4842_8237)">
                                        <path d="M15.6811 4.12353C15.5906 3.78313 15.4123 3.47247 15.1641 3.22263C14.9159 2.97279 14.6063 2.79253 14.2665 2.69989C13.0156 2.36353 8.01562 2.36353 8.01562 2.36353C8.01562 2.36353 3.01563 2.36353 1.76472 2.69989C1.42491 2.79253 1.1154 2.97279 0.86715 3.22263C0.618902 3.47247 0.440629 3.78313 0.35017 4.12353C0.015625 5.37989 0.015625 7.99989 0.015625 7.99989C0.015625 7.99989 0.015625 10.6199 0.35017 11.8763C0.440629 12.2166 0.618902 12.5273 0.86715 12.7771C1.1154 13.027 1.42491 13.2073 1.76472 13.2999C3.01563 13.6363 8.01562 13.6363 8.01562 13.6363C8.01562 13.6363 13.0156 13.6363 14.2665 13.2999C14.6063 13.2073 14.9159 13.027 15.1641 12.7771C15.4123 12.5273 15.5906 12.2166 15.6811 11.8763C16.0156 10.6199 16.0156 7.99989 16.0156 7.99989C16.0156 7.99989 16.0156 5.37989 15.6811 4.12353Z" fill="#453CFF" />
                                        <path d="M6.37939 10.379V5.62085L10.5612 7.99994L6.37939 10.379Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4842_8237">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center border border-[#E3E2E6]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_4842_8243)">
                                        <path d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35938C13.9156 2.64062 14.0875 2.90625 14.2313 3.27813C14.3406 3.55938 14.4719 3.98438 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1313 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9063 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 12.0031 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60313 1.49375 4.7625C1.52813 3.98125 1.65938 3.55938 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35938C2.64688 2.07812 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82812 0 8C0 10.1719 0.009375 10.4438 0.046875 11.2969C0.084375 12.1469 0.221875 12.7313 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6562C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6562C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7313 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55938 15.9438 4.70625C15.9063 3.85625 15.7688 3.27188 15.5719 2.76562C15.375 2.23438 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z" fill="#453CFF" />
                                        <path d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52813 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52813 5.33437 8 5.33437C9.47188 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47188 10.6656 8 10.6656Z" fill="#453CFF" />
                                        <path d="M13.2312 3.72818C13.2312 4.25943 12.8 4.68755 12.2719 4.68755C11.7406 4.68755 11.3125 4.2563 11.3125 3.72818C11.3125 3.19692 11.7438 2.7688 12.2719 2.7688C12.8 2.7688 13.2312 3.20005 13.2312 3.72818Z" fill="#453CFF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4842_8243">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:grid-cols-4 min-[400px]:grid-cols-2 grid-cols-1 items-start gap-1 hidden sm:grid">
                        {footerData?.map((product: any, index: number) => (
                            <div key={index} className="flex flex-col gap-1.5 min-[400px]:justify-start justify-center items-center min-[400px]:items-start">
                                <p className="font-semibold text-desktop-body-2 min-[400px]:text-left text-center">{product.title}</p>
                                {product.links.map((link: any, idx: number) => (
                                    <Link key={idx} className="text-neutral-500 text-desktop-label-l min-[400px]:text-left text-center" href={''}>{link}</Link>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Accordion for mobile */}
                    <div className="w-full flex flex-col gap-2 sm:hidden">
                        <Accordion type="single" collapsible className="w-full">
                            {footerData?.map((product: any, index: number) => (
                                <AccordionItem value={`item-${index}`} key={index} className="!border-none gap-2">
                                    <AccordionTrigger className="no-underline text-left !py-2 md:text-desktop-body-1 text-mobile-body-2 font-semibold">
                                        {product.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                                        {product.links.map((link: any, idx: number) => (
                                            <Link key={idx} className="text-neutral-500 text-desktop-label-l" href={''}>{link}</Link>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="w-full flex flex-col sm:flex-row gap-4 justify-center sm:justify-between items-center">
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full sm:max-w-[320px] object-contain rounded-lg"
                        priority={false}
                        src="/image/mastercard.png"
                        alt="logo"
                    />
                    <p className="md:text-desktop-body-2 text-desktop-body-3 text-neutral-500 font-semibold">© 2025, <span className='underline text-primary-cr-500 font-bold'>CrescentRating</span>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

type Props = {
    className?: string;
};

import { truncateTo100Chars } from "@/utils";
import { ImageWithFallback } from "..";
import { Linkedin } from "lucide-react";

import Link from "next/link";

interface CardReportsProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    about: string;
    linkedinUrl: string;
}

export default function CardProfile({
    id,
    title,
    description,
    imageUrl,
    about,
    linkedinUrl,
}: CardReportsProps) {
    return (
        <div className="w-full border-gray-500/20 border-2 p-4 flex flex-col h-full">
            <div className="flex flex-col w-full justify-center items-center gap-4 flex-grow mb-4">
                {/* Image container with hover effect */}
                <div className="group w-full flex flex-col justify-center items-center relative">
                    {/* Image */}
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full max-w-[142px] max-h-[142px] block transition-opacity duration-500 group-hover:opacity-0"
                        priority={false}
                        src={imageUrl}
                        alt={title}
                    />
                    <div className="duration-500 flex flex-col w-full mt-4 justify-center gap-1 items-center text-center flex-grow group-hover:opacity-0">
                        <p className="font-bold lg:text-desktop-body-1 text-mobile-body-1">
                            {title}
                        </p>
                        <p className="lg:text-desktop-body-2 text-mobile-body-2 text-secondary-foreground/50">
                            {description}
                        </p>
                    </div>
                    {/* Text on hover */}
                    <div className="absolute inset-0 flex justify-start items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-gray-500 md:text-sm text-mobile-caption-l text-left">
                            {about}
                        </p>
                    </div>
                </div>
            </div>
            {/* Tombol LinkedIn dipaksa ke bawah */}
            <div className="mt-auto w-full">
                <Link
                    href={linkedinUrl}
                    className="flex flex-row w-full justify-center items-center gap-2 font-bold text-blue-600 border border-gray-500/20 p-3"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <g clip-path="url(#clip0_3908_1216)">
                            <path d="M18.5195 0.5H1.47656C0.660156 0.5 0 1.14453 0 1.94141V19.0547C0 19.8516 0.660156 20.5 1.47656 20.5H18.5195C19.3359 20.5 20 19.8516 20 19.0586V1.94141C20 1.14453 19.3359 0.5 18.5195 0.5ZM5.93359 17.543H2.96484V7.99609H5.93359V17.543ZM4.44922 6.69531C3.49609 6.69531 2.72656 5.92578 2.72656 4.97656C2.72656 4.02734 3.49609 3.25781 4.44922 3.25781C5.39844 3.25781 6.16797 4.02734 6.16797 4.97656C6.16797 5.92188 5.39844 6.69531 4.44922 6.69531ZM17.043 17.543H14.0781V12.9023C14.0781 11.7969 14.0586 10.3711 12.5352 10.3711C10.9922 10.3711 10.7578 11.5781 10.7578 12.8242V17.543H7.79688V7.99609H10.6406V9.30078H10.6797C11.0742 8.55078 12.043 7.75781 13.4844 7.75781C16.4883 7.75781 17.043 9.73438 17.043 12.3047V17.543Z" fill="#453CFF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3908_1216">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg> LinkedIn Profile
                </Link>
            </div>
        </div>
    );
}

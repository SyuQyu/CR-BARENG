import Link from "next/link";

import { ImageWithFallback } from "@/components/common";

interface TestimonialCardProps {
    text: string;
    name: string;
    location: string;
    imageSrc: string;
    imageAlt: string;
    onText?: string;
    onLink?: string;
    onLinkText?: string;
}

export default function TestimonialCard({
    text,
    name,
    location,
    imageSrc,
    imageAlt,
    onText,
    onLink,
    onLinkText
}: TestimonialCardProps) {
    return (
        <div className="border md:px-8 px-6 py-4 flex flex-col justify-between items-start gap-4 w-full">
            <p className="lg:text-desktop-body-2 text-mobile-body-2 text-left">
                {text}
            </p>
            <div className="flex flex-row w-full justify-start items-center gap-4">
                <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="1000vw"
                    className="w-[48px] object-contain"
                    priority={false}
                    src={imageSrc}
                    alt={imageAlt}
                />
                <div className="flex flex-col justify-between items-start gap-1">
                    <div className="flex flex-row items-center gap-1">
                        <p className="text-desktop-body-2 font-bold">{name}</p>
                        {onLinkText && onLink && (
                            <>
                                {onText && <span className="text-desktop-body-2">{onText}</span>}
                                <Link 
                                    href={onLink} 
                                    className="text-primary-cr-600 hover:text-primary-cr-800 text-desktop-body-2 font-semibold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {onLinkText}
                                </Link>
                            </>
                        )}
                    </div>
                    <p className="text-neutral-500 text-desktop-caption-l">
                        {location}
                    </p>
                </div>
            </div>
        </div>
    );
}

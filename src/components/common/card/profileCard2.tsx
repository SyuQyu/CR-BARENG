'use client'
import { useState } from "react";
import { Button, ImageWithFallback } from "..";
import clsx from "clsx";

export default function ProfileCard({
    name,
    location,
    description,
    image,
    tags,
    linkedin,
    className = "shadow-md rounded-lg"
}: {
    name: string,
    location: string,
    description: string,
    image: string,
    tags: string[],
    linkedin: string
    className?: string
}) {
    const [expanded, setExpanded] = useState(false);
    const previewText = description.slice(0, 305) + (description.length > 305 ? "..." : "");

    return (
        <div className={clsx("flex flex-col items-start border p-8", className)}>
            <div className="flex flex-row justify-between items-center w-full">
                <div className="w-1/2 flex flex-row items-center justify-start gap-4">
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-24 h-24 rounded-full object-cover"
                        src={image}
                        alt={name}
                    />
                    <div className="flex flex-col gap-2">
                        <h3 className="md:text-desktop-heading-6 text-mobile-heading-4 font-bold">{name}</h3>
                        <p className="md:text-desktop-caption-l text-mobile-caption-l text-gray-500">{location}</p>
                    </div>
                </div>
                <Button className="font-semibold sm:flex hidden text-mobile-body-2 gap-2 border text-custom-blue py-2 sm:py-3 px-4 sm:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#clip0_3180_2122)">
                            <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="#453CFF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3180_2122">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg> Connect on LinkedIn
                </Button>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 mt-6">
                <p className="md:text-desktop-body-2 text-mobile-body-2">{expanded ? description : previewText}</p>
                {description.length > 150 && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-custom-blue text-desktop-body-2 font-semibold"
                    >
                        {expanded ? "View Less" : "View More"}
                    </button>
                )}
            </div>
            <Button className="font-semibold sm:hidden flex mt-4 text-mobile-body-2 gap-2 border text-custom-blue py-2 sm:py-3 px-4 sm:px-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_3180_2122)">
                        <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="#453CFF" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3180_2122">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg> Connect on LinkedIn
            </Button>
            <div className="flex sm:flex-row flex-wrap gap-2  mt-6">
                {tags.map((tag: any, idx: number) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 text-desktop-label-s px-2 py-1 rounded">{tag}</span>
                ))}
            </div>
        </div>
    );
}
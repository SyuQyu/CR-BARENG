import React from "react";
import { Button, ImageWithFallback } from "..";

interface HITGSCardProps {
    imageUrl: string;
    imageAlt: string;
    date: string;
    title: string;
    description: string;
    button: string
}

const HITGSCard: React.FC<HITGSCardProps> = ({ imageUrl, imageAlt, date, title, description, button }) => {
    return (
        <div className="w-full flex flex-col justify-between gap-5 p-7 bg-white rounded-md">
            <div className="flex sm:flex-row flex-col justify-between items-start gap-5">
                <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full sm:max-w-[230px] object-cover h-full md:block hidden"
                    priority={false}
                    src={imageUrl}
                    alt={imageAlt}
                />
                <div className="flex flex-col md:gap-1 gap-2 justify-start items-start">
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-[#453CFF]">{date}</p>
                    <p className="sm:text-desktop-heading-5 text-mobile-heading-3 font-bold">{title}</p>
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full max-h-[300px] object-cover h-full md:hidden block"
                        priority={false}
                        src={imageUrl}
                        alt={imageAlt}
                    />
                    <p className="sm:text-desktop-body-2 text-mobile-body-2">{description}</p>
                </div>
            </div>
            <Button
                className="w-full text-desktop-body-3 bg-custom-blue text-white"
                type="button"
            >{button} </Button>
        </div>
    );
};

export default HITGSCard;

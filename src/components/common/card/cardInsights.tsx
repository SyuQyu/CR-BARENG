import { ImageWithFallback } from "..";

type CardInsightsProps = {
    number: string;
    title: string;
    description: string;
    iconSrc: string;
};

export default function CardInsights({ number, title, description, iconSrc }: CardInsightsProps) {
    return (
        <div className="w-full bg-neutral-100 p-6 flex flex-col gap-4">
            <div className="w-full flex flex-row justify-between items-center gap-4">
                <div className="p-2 bg-primary-cr-200/50">
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="size-6 object-contain"
                        priority={false}
                        src={iconSrc}
                        alt="icon"
                    />
                </div>
                <p className="text-desktop-heading-6 font-bold text-neutral-300">{number}</p>
            </div>
            <div className="w-full flex flex-col gap-2">
                <p className="md:text-desktop-body-1 text-mobile-body-1 font-bold">{title}</p>
                <p className="md:text-desktop-body-2 text-mobile-body-2 font-thin">{description}</p>
            </div>
        </div>
    );
}

'use client';
import { Button, ImageWithFallback } from "..";
import Link from "next/link";

type HotelCardProps = {
    mainImage: string;
    badgeImage: string;
    location: string;
    category: string;
    title: string;
    description: string;
    onSeeDetail?: () => void;
    onExploreMore?: () => void;
    detailButtonText?: string | React.ReactNode;
    exploreMoreButtonText?: string | React.ReactNode;
    detailUrl?: string; // New prop for detail page URL
    exploreMoreUrl?: string; // New prop for explore more URL
    clickable?: boolean; // Optional prop to make entire card clickable
    cardUrl?: string; // URL for when the entire card is clicked
};

export default function HotelCard({
    mainImage,
    badgeImage,
    location,
    category,
    title,
    description,
    onSeeDetail,
    onExploreMore,
    detailButtonText = "See Detail",
    exploreMoreButtonText = "Explore More Hotel & Serviced Apartments",
    detailUrl,
    exploreMoreUrl,
    clickable = false,
    cardUrl,
}: HotelCardProps) {
    const CardWrapper = ({ children }: { children: React.ReactNode }) => {
        if (clickable && cardUrl) {
            return (
                <Link href={cardUrl} className="cursor-pointer w-full">
                    <div className="w-full border rounded-lg shadow p-4 bg-white flex flex-col gap-3 transition hover:shadow-md">
                        {children}
                    </div>
                </Link>
            );
        }
        return (
            <div className="w-full border rounded-lg shadow p-4 bg-white flex flex-col gap-3">
                {children}
            </div>
        );
    };

    const renderContent = () => (
        <>
            {/* Image Section */}
            <div className="relative w-full flex justify-center items-center flex-row bg-center">
                <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full object-cover rounded-lg"
                    priority={false}
                    src={mainImage}
                    alt="Main Image"
                />
                <div className="absolute bottom-2 right-2 rounded-lg">
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full object-cover rounded"
                        priority={false}
                        src={badgeImage}
                        alt="Badge Image"
                    />
                </div>
            </div>

            {/* Location Tags */}
            <div className="flex gap-3 text-sm flex-wrap">
                <span className="text-desktop-label-s bg-gray-100 font-semibold text-black px-2 py-1 rounded">
                    {location}
                </span>
                <span className="text-desktop-label-s bg-primary-cr-950 font-semibold text-white px-2 py-1 rounded">
                    {category}
                </span>
            </div>

            {/* Icon Features */}
            <div className="flex gap-4 text-xl">
                {/* SVG Icons - You can also extract these into separate components */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" stroke="#E3E2E6" strokeWidth="2" />
                    <path d="M16 13L22.0622 16.5V23.5L16 27L9.93782 23.5V16.5L16 13Z" stroke="#453CFF" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M22.0622 19.5L16 17L9.93787 19.5" stroke="#453CFF" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M16 9L12.5 10.5L16 5L19.5 10.5L16 9Z" stroke="#453CFF" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" stroke="#E3E2E6" strokeWidth="2" />
                    <path d="M18 14.5C18 15.6046 17.1046 17.5 16 17.5C14.8954 17.5 14 15.6046 14 14.5C14 13.3954 14.8954 12.5 16 12.5C17.1046 12.5 18 13.3954 18 14.5Z" stroke="#453CFF" strokeWidth="2" />
                    <path d="M23 9.5C23 10.3284 22.3284 11.5 21.5 11.5C20.6716 11.5 20 10.3284 20 9.5C20 8.67157 20.6716 8 21.5 8C22.3284 8 23 8.67157 23 9.5Z" stroke="#453CFF" strokeWidth="2" />
                    <path d="M9.00061 9.5C9.00061 10.3284 9.67218 11.5 10.5006 11.5C11.329 11.5 12.0006 10.3284 12.0006 9.5C12.0006 8.67157 11.329 8 10.5006 8C9.67218 8 9.00061 8.67157 9.00061 9.5Z" stroke="#453CFF" strokeWidth="2" />
                    <path d="M20.6743 25H11.3257C10.6614 25 10.1817 24.3641 10.3642 23.7253L10.6995 22.5519C10.8867 21.8964 11.3949 21.3815 12.0478 21.1857L14.8506 20.3448C15.6004 20.1199 16.3996 20.1199 17.1494 20.3448L19.9522 21.1857C20.6051 21.3815 21.1133 21.8964 21.3005 22.5519L21.6358 23.7253C21.8183 24.3641 21.3386 25 20.6743 25Z" stroke="#453CFF" strokeWidth="2" />
                    <path d="M19.3409 18H25.159C25.828 18 26.3083 17.3559 26.1175 16.7148L25.9787 16.2486C25.7843 15.5952 25.2704 15.0859 24.6153 14.8972L22.607 14.3188C21.8837 14.1105 21.1163 14.1105 20.393 14.3188" stroke="#453CFF" strokeWidth="2" />
                    <path d="M12.6597 18H6.8416C6.17265 18 5.69233 17.3559 5.88315 16.7148L6.02189 16.2486C6.21634 15.5952 6.73021 15.0859 7.38529 14.8972L9.39363 14.3188C10.1169 14.1105 10.8843 14.1105 11.6076 14.3188" stroke="#453CFF" strokeWidth="2" />
                </svg>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-3">
                <h2 className="text-mobile-heading-5 sm:text-desktop-heading-6 font-bold">{title}</h2>
                <p className="text-mobile-body-3 sm:text-desktop-body-3 text-gray-600">{description}</p>
            </div>

            {/* Buttons - Only render these if the entire card isn't clickable */}
            {!clickable && (
                <>
                    {detailUrl ? (
                        <Link href={detailUrl} className="w-full">
                            <Button
                                className="w-full text-desktop-body-3 sm:text-desktop-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 text-white !py-2 !px-4 !rounded-sm"
                                onClick={onSeeDetail}
                            >
                                {detailButtonText}
                            </Button>
                        </Link>
                    ) : (
                        <Button
                            className="w-full text-desktop-body-3 sm:text-desktop-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 text-white !py-2 !px-4 !rounded-sm"
                            onClick={onSeeDetail}
                        >
                            {detailButtonText}
                        </Button>
                    )}

                    {exploreMoreUrl ? (
                        <Link href={exploreMoreUrl} className="w-full">
                            <Button
                                className="w-full text-desktop-body-3 sm:text-desktop-body-2 border border-primary-cr-700 text-primary-cr-700 hover:bg-purple-50 !py-2 !px-4 !rounded-sm"
                                onClick={onExploreMore}
                            >
                                {exploreMoreButtonText}
                            </Button>
                        </Link>
                    ) : (
                        <Button
                            className="w-full text-desktop-body-3 sm:text-desktop-body-2 border border-primary-cr-700 text-primary-cr-700 hover:bg-purple-50 !py-2 !px-4 !rounded-sm"
                            onClick={onExploreMore}
                        >
                            {exploreMoreButtonText}
                        </Button>
                    )}
                </>
            )}
        </>
    );

    return <CardWrapper>{renderContent()}</CardWrapper>;
}
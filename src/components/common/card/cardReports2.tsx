import { ImageWithFallback } from "..";

interface CardReports2Props {
    headline: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function CardReports2({ 
    headline, 
    description, 
    imageSrc, 
    imageAlt, 
    buttonText = "View Report",
    buttonLink = "#"
}: CardReports2Props) {
    return (
        <div className="flex sm:flex-row flex-col-reverse gap-10 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-100 pt-6 sm:pl-6 sm:px-0 px-6 w-full">
            {/* Left Side */}
            <div className="sm:w-[80%] w-full flex flex-col mb-6 justify-between items-start">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {headline}
                    </h2>
                    <p className="text-gray-600 mb-4">
                        {description}
                    </p>
                </div>
                <a
                    href={buttonLink}
                    className="inline-block p-3 text-blue-600 text-center font-bold bg-white border border-gray-500/20 w-full"
                >
                    {buttonText}
                </a>
            </div>

            {/* Right Side */}
            <div className="sm:w-[45%] pt-10 h-auto w-full">
                <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-fill"
                    priority={false}
                    src={imageSrc}
                    alt={imageAlt}
                />
            </div>
        </div>
    );
}

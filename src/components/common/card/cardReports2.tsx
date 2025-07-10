import { ImageWithFallback } from "..";

export default function CardReports2() {
    return (
        <div className="flex sm:flex-row flex-col-reverse  gap-10 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-100 pt-6 sm:pl-6 sm:px-0 px-6 w-full">
            {/* Left Side */}
            <div className="sm:w-[80%] w-full flex flex-col mb-6 justify-between items-start">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Global Muslim Travel Index Report
                    </h2>
                    <p className="text-gray-600 mb-4">
                        A comprehensive benchmark that ranks destinations based on their
                        Muslim-friendly travel and tourism offerings in aspects of access,
                        communication, environment, and services.
                    </p>
                </div>
                <a
                    href="#"
                    className="inline-block p-3 text-blue-600 text-center font-bold bg-white border border-gray-500/20 w-full"
                >
                    View Report
                </a>
            </div>

            {/* Right Side */}
            <div className="sm:w-[30%] w-full">
                <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full object-fill"
                    priority={false}
                    src={'/image/halal-muslim-travel-market-reports/image-cover-1.webp'}
                    alt={'test'}
                />
            </div>
        </div>
    );
}

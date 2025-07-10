'use client'
import { ReactNode, useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons
import { ImageWithFallback } from '@/components/common';
import { usePathname } from 'next/navigation';
interface Props {
    children: ReactNode;
}

export default function UserRegistrationLayout({ children }: Props) {
    const pathname = usePathname();
    // Current active step (1-4)
    let currentStep = 1; // Change this based on your actual current step logic

    // State to track if sidebar is open on mobile
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Steps data
    const steps = [
        { number: 1, title: "Hotel Information" },
        { number: 2, title: "Halal Friendly Services and Facilities" },
        { number: 3, title: "Basic facilities and Image gallery" },
        { number: 4, title: "Terms and conditions" }
    ];

    const match = pathname.match(/step(\d+)$/);
    if (match) {
        currentStep = parseInt(match[1], 10);
        if (isNaN(currentStep) || currentStep < 1 || currentStep > steps.length) {
            currentStep = 1;
        }
    }

    return (
        <div className="w-full flex md:flex-row md:gap-10 relative ">
            {/* Mobile toggle button - only visible on small screens */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 right-4 z-50 md:hidden bg-[#1502cd] text-white p-2 rounded-full shadow-lg"
                aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar - hidden by default on mobile, shown when toggled */}
            <div
                className={`
                    bg-[#1502cd] min-h-screen flex flex-col items-center py-10 px-6
                    fixed md:static top-0 left-0 z-40 transition-all duration-300 ease-in-out
                    md:w-[30%] w-[50%] 
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    shadow-2xl md:shadow-none
                `}
            >
                {/* Title */}
                <h2 className="text-white text-2xl font-semibold mb-12">Profile Steps</h2>

                {/* Steps */}
                <div className="flex flex-col items-center w-full sticky top-8">
                    {steps.map((step, index) => {
                        // Determine step status
                        const isCompleted = step.number < currentStep;
                        const isActive = step.number === currentStep;
                        const isLast = index === steps.length - 1;

                        return (
                            <div key={step.number} className="flex flex-col items-center w-full">
                                <div className="relative">
                                    {/* Step Circle */}
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${isCompleted || isActive
                                        ? "bg-white text-[#1502cd]"
                                        : "border-2 border-white text-white"
                                        } z-10 relative`}>
                                        {step.number}
                                    </div>

                                    {/* Arrow Indicator (only for completed or active steps) */}
                                    {(isCompleted || isActive) && (
                                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full h-6 w-6 flex items-center justify-center text-[#1502cd]">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 12L10 8L6 4" stroke="#1502cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Step Title */}
                                <p className="text-white text-sm mt-2 text-center">{step.title}</p>

                                {/* Connecting Line (except for the last item) */}
                                {!isLast && (
                                    <div className="h-16 border-dashed border-l-2 border-white/30 my-1"></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Save and Continue Button */}
                <div className="mt-auto">
                    <button
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded"
                        onClick={() => setIsSidebarOpen(false)} // Close sidebar on mobile when clicked
                    >
                        Save and Continue Later
                    </button>
                </div>
            </div>

            {/* Overlay to close sidebar when clicking outside (mobile only) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                    aria-hidden="true"
                ></div>
            )}

            {/* Content Area - takes full width on mobile */}
            <div className="md:w-[90%] w-full px-8 md:px-0 py-6 md:py-12 overflow-auto">
                {children}
            </div>
            <div className='w-[40%] min-h-screen px-10 py-12 md:block hidden border-l'>
                <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-h-[74px] object-contain sticky top-8"
                    priority={false}
                    src={"/image/user-registration-accomondation/cr-logo.jpg"}
                    alt={"bronze"}
                />
            </div>
        </div>
    );
}

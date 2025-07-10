'use client'
import { CardInsights, CardProfile, CardReports, ImageWithFallback, Pagination } from "@/components/common";
import { Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cardDataInsightSeries, reportsInsightSeries, CardProfile1InsightSeries, CardProfile2InsightSeries } from "@/constants/dummyData";
export default function CardInsightsSeries() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Fetch data or update UI based on the new page
    };

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
                style={{ backgroundImage: "url('/image/halal-muslim-travel-market-reports/hero.webp')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-start items-start">
                        <h1 className="text-mobile-heading-3 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text text-white relative z-20 text-left">
                            MC-CR Muslim-Friendly Cruise Report 2024
                        </h1>
                        <p className="text-white text-left md:text-mobile-caption-l lg:text-mobile-body-3 sm:text-desktop-body-2 relative z-20 max-w-4xl">
                            16 August, 2024
                        </p>
                        <p className="text-white text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                            The Mastercard-CrescentRating Muslim-Friendly Cruise Report 2024 offers a comprehensive analysis aimed at enhancing the Halal Tourism experience and meeting the evolving needs of Muslim travelers. This report reflects a commitment to inclusivity, diversity, and responsible cruising, drawing on extensive research and analysis of Muslim consumer preferences. It addresses the cruise industry’s imperative for diversity, inclusivity, and sustainability, providing insights and recommendations based on CrescentRating’s RIDA framework to help cruise operators cater to Muslim travelers and promote a respectful and culturally diverse environment.
                        </p>
                        <button className="flex flex-row gap-2 lg:text-mobile-body-1 text-mobile-body-3 text-white">
                            <Download className="lg:size-6 size-5" /> Download PDF
                        </button>
                    </div>
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:w-[400px] xl:max-w-[400px] object-contain"
                        priority={false}
                        src="/image/cr-insight-series/Image.png"
                        alt="logo"
                    />
                </div>
            </section>
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full">
                    <div className="w-full flex md:flex-row flex-col justify-between items-center gap-6 md:gap-12">
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="md:max-w-[260px] w-full max-h-[300px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] lg:w-[400px] xl:max-w-[400px] object-contain"
                            priority={false}
                            src="/image/cr-insight-series/Images-1.png"
                            alt="logo"
                        />
                        <div className="flex flex-col gap-5 w-full">
                            <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold text-left">
                                Crescentrating Insights Series Guiding the Halal Economy Forward
                            </p>
                            <p className="lg:text-desktop-body-2 text-mobile-body-2 text-gray-600 text-left">
                                The Crescentrating Insights Series Publication invites academics and students to contribute thought-provoking essays on trends, challenges, and opportunities in the global Halal economy, with a special focus on Halal travel. This publication series aims to bridge academia and industry, fostering insights that inspire actionable recommendations and shape the future of these sectors.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full">
                    <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">All Publications</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500">Delve into in-depth insights and research from industry experts in our CrescentRating Insight Series.</p>
                    <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
                            {reportsInsightSeries.map((report, index) => (
                                <CardReports
                                    id={report.id}
                                    key={index}
                                    title={report.title}
                                    date={report.date}
                                    description={report.description}
                                    imageUrl={report.imageUrl}
                                    downloadUrl={report.downloadUrl}
                                />
                            ))}
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
                <div className="max-w-[1440px] w-full px-6 lg:px-8">
                    <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left">Share Your Insights with CrescentRating</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-left lg:w-[40%] w-full text-neutral-500">Do you have valuable research or perspectives on the Muslim-friendly travel industry? Publishing with CrescentRating Insight Series is simple and impactful.</p>
                    <div className="flex flex-col w-full mt-10 gap-8">
                        {/* Bagian Atas: 3 Kartu */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {cardDataInsightSeries.slice(0, 3).map((card, index) => (
                                <CardInsights
                                    key={index}
                                    number={card.number}
                                    title={card.title}
                                    description={card.description}
                                    iconSrc={card.iconSrc}
                                />
                            ))}
                        </div>

                        {/* Bagian Bawah: 2 Kartu Full-Width */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {cardDataInsightSeries.slice(3).map((card, index) => (
                                <CardInsights
                                    key={index + 3}
                                    number={card.number}
                                    title={card.title}
                                    description={card.description}
                                    iconSrc={card.iconSrc}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Academic Council</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center w-[80%] text-neutral-500">Our Academic Council, composed of leading scholars, ensures every publication meets high standards for quality and relevance in the Muslim travel sector.</p>
                    <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
                            {CardProfile1InsightSeries.map((data, index) => (
                                <CardProfile
                                    id={data.id}
                                    key={index}
                                    title={data.title}
                                    linkedinUrl={data.linkedinUrl}
                                    description={data.description}
                                    imageUrl={data.imageUrl}
                                    about={data.about}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Redaction Team </p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center w-[80%] text-neutral-500">Our Academic Council, composed of leading scholars, ensures every publication meets high standards for quality and relevance in the Muslim travel sector.</p>
                    <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
                            {CardProfile2InsightSeries.map((data, index) => (
                                <CardProfile
                                    id={data.id}
                                    key={index}
                                    title={data.title}
                                    linkedinUrl={data.linkedinUrl}
                                    description={data.description}
                                    imageUrl={data.imageUrl}
                                    about={data.about}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col bg-gradient-to-r from-blue-600 to-navy-blue-600 justify-center items-center">
                    <div className="max-w-[1440px] px-6 lg:px-8 w-full sm:py-16 py-12 flex sm:flex-row flex-col gap-5 justify-between items-end">
                        <div className="sm:w-[80%] w-full flex flex-col gap-4">
                            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-white">Publish with Us!</p>
                            <p className="text-white sm:text-desktop-body-2 text-mobile-body-2">Have insights to share? Publish your report with CrescentRating Insight Series and make a difference in the Muslim travel industry. Start by submitting your proposal today!</p>
                        </div>
                        <Link href="/resources/cr-insight-series/submission" className="inline-block p-3 text-blue-600 text-center font-bold bg-white border border-gray-500/20 w-full sm:w-[20%]">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
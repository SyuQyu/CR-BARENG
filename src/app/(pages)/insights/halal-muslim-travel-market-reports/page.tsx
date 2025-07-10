'use client'
import { CardReports, CardReports2, ImageWithFallback, Input, Pagination } from "@/components/common";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import { useState } from "react";
import { reports } from "@/constants/dummyData"
import Link from "next/link";
export default function HalalMusimTravelMarketReports() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    // Function to handle letter button click

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
                        src="/image/halal-muslim-travel-market-reports/image-cover-1.webp"
                        alt="logo"
                    />
                </div>
            </section>
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full">
                    <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Our Publications</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500">Access CrescentRating&apos;s full range of reports and publications to stay ahead in the muslim travel and halal food sectors</p>
                    <div className="mt-10 flex justify-center items-center w-full">
                        <Tabs defaultValue="all" className="w-full">
                            <TabsList className="w-full border-none">
                                <TabsTrigger className="w-full" value="all">All</TabsTrigger>
                                <TabsTrigger className="w-full" value="mc-cr-reports">MC-CR Reports</TabsTrigger>
                                <TabsTrigger className="w-full" value="other">Other Reports/Publication</TabsTrigger>
                            </TabsList>
                            <TabsContent key={'all'} value={'all'} activeValue={'all'} className="flex gap-6 flex-col">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 pt-10">
                                    {reports.map((report, index) => (
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
                            </TabsContent>
                            <TabsContent key={'mc-cr-reports'} value={'mc-cr-reports'} activeValue={'mc-cr-reports'} className="flex gap-6 flex-col">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 pt-10">
                                    {reports.map((report, index) => (
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
                            </TabsContent>
                            <TabsContent key={'other'} value={'other'} activeValue={'other'} className="flex gap-6 flex-col">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 pt-10">
                                    {reports.map((report, index) => (
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
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className="max-w-[1440px] w-full px-6 lg:px-8">
                    <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left">Essential Reports for the Industry</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2  text-left lg:w-[40%] w-full text-neutral-500">Explore the Global Muslim Travel Index (GMTI) and CrescentRating Insight Series for key data and trends</p>
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-9 w-full mt-10">
                        <CardReports2 />
                        <CardReports2 />
                    </div>
                </div>
                <div className="w-full flex flex-col bg-gradient-to-r from-blue-600 to-navy-blue-600 justify-center items-center">
                    <div className="max-w-[1440px] px-6 lg:px-8 w-full sm:py-16 py-12 flex sm:flex-row flex-col gap-5 justify-between items-end">
                        <div className="sm:w-[80%] w-full flex flex-col gap-4">
                            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-white">Let’s Connect</p>
                            <p className="text-white sm:text-desktop-body-2 text-mobile-body-2">Let’s start a conversation! Reach out to discuss how CrescentRating can support your journey in catering to Muslim travelers worldwide.</p>
                        </div>
                        <Link href="#" className="inline-block p-3 text-blue-600 text-center font-bold bg-white border border-gray-500/20 w-full sm:w-[20%]">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
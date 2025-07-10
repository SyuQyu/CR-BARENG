"use client"
import { Pagination, ImageWithFallback, HeroCard } from "@/components/common";
import { blogsTabsData } from "@/constants/dummyData";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { formatParams } from "@/utils";

export default function BlogsProfile() {
    const params = useParams<{ name: string }>();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-col justify-center items-center gap-6">
                        <span className="px-4 py-1 rounded-lg bg-indigo-100 text-indigo-600 font-medium text-desktop-label-l w-auto cursor-pointer hover:bg-indigo-200 transition">
                            Author Profile
                        </span>
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-[150px] h-[150px] object-cover rounded-full shadow-xl mb-4"
                            priority={false}
                            src={"/image/landing-page/img.webp"}
                            alt={"hero"}
                        />
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold sm:text-desktop-heading-6 text-mobile-heading-4">{formatParams(params.name)}</p>
                            <p className="sm:text-desktop-body-2 text-mobile-body-2">Founder & CEO, CrescentRating</p>
                        </div>
                        <p className="sm:text-desktop-body-2 text-mobile-body-2 sm:w-[60%] w-[80%] text-center ">
                            After 20 years in the corporate world as a telecom executive, Fazal became an entrepreneur in 2007. He founded CrescentRating in 2008 to enhance Muslim travel, later launching HalalTrip and Muslim Travel Warehouse.
                        </p>
                        <div className="flex items-center w-full">
                            <div className="flex-1 border-t border-gray-300"></div>
                            <p className="mx-4 text-gray-600 sm:text-desktop-body-2 text-mobile-body-2">Articles by <span className="font-semibold text-black">{formatParams(params.name)}</span></p>
                            <div className="flex-1 border-t border-gray-300"></div>
                        </div>
                        <div>
                            <div className="grid md:grid-cols-3 gap-14 w-full mb-12">
                                {blogsTabsData.flatMap(tab =>
                                    tab.media.filter((card: any) => card.author === formatParams(params.name)).map((filteredCard: any, index: number) => (
                                        <HeroCard
                                            imagePosition="top"
                                            key={index}
                                            border={true}
                                            dateTextColor="text-custom-purple-cr"
                                            titleTextColor="text-black"
                                            descriptionTextColor="text-gray-500"
                                            imageUrl={filteredCard.imageUrl}
                                            imageAlt={filteredCard.imageAlt}
                                            date={filteredCard.date}
                                            title={filteredCard.title}
                                            description={filteredCard.description}
                                        />
                                    ))
                                )}
                            </div>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

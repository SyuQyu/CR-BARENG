"use client"
import { Pagination, BreadCrumb } from "@/components/common";
import { DUMMY_DATA_CATEGORY } from "@/constants/dummyData";
import React, { useState } from "react";
import Link from "next/link";
export default function GlossaryCategoriesMain() {
    const [selectedLetter, setSelectedLetter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    // Function to handle letter button click
    const handleLetterClick = (letter: string) => {
        setSelectedLetter(letter);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Fetch data or update UI based on the new page
    };

    return (
        <div className="w-full gap-32 flex flex-col justify-center items-center">
            <div className="w-full max-w-[1440px] px-6 lg:px-8 flex flex-col md:gap-14 mb-12">
                <BreadCrumb excludeSegment="glossary" />
                <div className="w-full px-5 lg:p-10 lg:mt-0 my-5 flex justify-center items-center">
                    <div className="max-w-[1440px]">
                        <p className="sm:text-desktop-heading-5 text-mobile-heading-3 font-bold mb-4 bg-clip-text text-black text-center">Browse by Category</p>
                        <p className="text-mobile-body-3 sm:text-desktop-body-1 text-center">Explore our glossary&apos;s clear and concise definitions by browsing through various categories, making it easy to find the information you need.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  w-full mt-10">
                            {DUMMY_DATA_CATEGORY?.map((item, index) => (
                                <Link href={`/glossary/browse-by-category/[letter]`} as={`/glossary/browse-by-category/${item.categories.toLowerCase()}`} key={index}>
                                    <div key={index} className="relative w-full max-h-[266px] bg-blue-100 md:p-32 p-4 flex justify-center items-center flex-col bg-center !rounded-lg" style={{ backgroundImage: "url('/image/book.jpg')", backgroundSize: "cover" }}>
                                        <div className="absolute inset-0 bg-black opacity-80 z-10 rounded-lg"></div>
                                        <h1 className="text-desktop-heading-6 font-bold bg-clip-text text-white relative z-20 text-center">
                                            {item.categories}
                                        </h1>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

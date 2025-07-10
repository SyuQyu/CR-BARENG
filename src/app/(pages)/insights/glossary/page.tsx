"use client"
import { BasicCard, Button, Pagination } from "@/components/common";
import { DUMMY_DATA_CATEGORY, DUMMY_DATA_GLOSSARY, alfabet } from "@/constants/dummyData";
import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
export default function Glossary() {
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

  // Filter glossary data based on selected letter
  const filteredGlossary = DUMMY_DATA_GLOSSARY.filter(item =>
    item.title.toLowerCase().startsWith(selectedLetter.toLowerCase())
  );

  return (
    <div className="w-full gap-10 sm:gap-32 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-14">
        <div className="w-full px-6 lg:px-8 relative overflow-hidden">
          {/* Overlay untuk efek putih transparan di bagian bawah */}
          <div className="absolute sm:hidden block bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/50 via-white/70 to-transparent pointer-events-none"></div>
          <div className="flex flex-row w-full sm:pb-0 pb-8 gap-5 justify-center items-center flex-wrap max-h-[150px] sm:max-h-full sm:overflow-hidden overflow-x-scroll">
            <Button
              onClick={() => handleLetterClick('')}
              className={clsx(
                'min-w-[46px] min-h-[32px] flex text-mobile-body-3 sm:text-desktop-body-2 justify-center items-center !border-none',
                selectedLetter === ''
                  ? 'bg-info-950 text-white'
                  : 'bg-info-50 text-black'
              )}
            >
              <p className="text-mobile-body-3 sm:text-desktop-body-2 ">All</p>
            </Button>
            {alfabet.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleLetterClick(item)}
                className={clsx(
                  'min-w-[46px] min-h-[32px] flex justify-center items-center !border-none',
                  selectedLetter === item
                    ? 'bg-info-950 text-white'
                    : 'bg-info-50 text-black'
                )}
              >
                <p className="text-mobile-body-3 sm:text-desktop-body-2 ">{item}</p>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-between w-full items-center">
          <div className="bg-custom-white-cr rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 w-full p-4 sm:p-8">
            {filteredGlossary.map((item, index) => (
              <BasicCard key={index} title={item.title} description={item.description} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <div className="w-full px-5 bg-[#F1F3FF] p-4 sm:p-10 flex justify-center items-center">
        <div className="max-w-[1440px]">
          <p className="text-desktop-heading-5 font-bold mb-4 bg-clip-text text-black text-center">Browse by Category</p>
          <p className="text-body-1 text-center">Explore our glossary&apos;s clear and concise definitions by browsing through various categories, making it easy to find the information you need.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full mt-10">
            {DUMMY_DATA_CATEGORY.slice(0, 5).map((item, index) => (
              <Link href={`/insights/glossary/browse-by-category/[letter]`} as={`/insights/glossary/browse-by-category/${item.categories.toLowerCase()}`} key={index}>
                <div key={index} className="relative w-full max-h-[266px] bg-blue-100 md:p-32 p-4 flex justify-center items-center flex-col bg-center !rounded-lg" style={{ backgroundImage: "url('/image/book.jpg')", backgroundSize: "cover" }}>
                  <div className="absolute inset-0 bg-black opacity-80 z-10 rounded-lg"></div>
                  <h1 className="text-desktop-heading-6 font-bold bg-clip-text text-white relative z-20 text-center">
                    {item.categories}
                  </h1>
                </div>
              </Link>
            ))}
            <Link href={`/insights/glossary/browse-by-category`} as={`/insights/glossary/browse-by-category`}>
              <div className="relative w-full max-h-[266px] bg-blue-100 md:p-32 p-4 flex justify-center items-center flex-col bg-center !rounded-lg" style={{ backgroundImage: "url('/image/book.jpg')", backgroundSize: "cover" }}>
                <div className="absolute inset-0 bg-black opacity-80 z-10 rounded-lg"></div>
                <h1 className="text-desktop-heading-6 font-bold bg-clip-text text-white relative z-20 text-center">
                  See All
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

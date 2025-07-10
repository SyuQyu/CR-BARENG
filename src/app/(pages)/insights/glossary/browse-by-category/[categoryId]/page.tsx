"use client"
import { BasicCard, Button, Pagination, BreadCrumb } from "@/components/common";
import { DUMMY_DATA_GLOSSARY, alfabet } from "@/constants/dummyData";
import React, { useState } from "react";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { formatParams } from "@/utils";
export default function GlossaryCategories() {
  const params = useParams<{ categoryId: string }>();
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
    <div className="w-full gap-32 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1440px] flex flex-col px-6 lg:px-8 gap-14 mb-12 bg-custom-white-cr">
        <BreadCrumb excludeSegment="glossary" />

        <div className="w-full">
          <div className="bg-navy-blue-950 rounded-t-lg p-3 mb-10">
            <p className="text-white text-mobile-heading-3 sm:text-desktop-heading-3 font-bold text-center">{formatParams(params.categoryId)}</p>
          </div>
          <div className="w-full relative overflow-hidden">
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
        </div>

        <div className="flex flex-col gap-6 justify-between w-full items-center">
          <div className="bg-custom-white-cr rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 w-full p-2 sm:p-4 md:p-8">
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
    </div>
  );
}

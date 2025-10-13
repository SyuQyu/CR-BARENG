"use client";
import { Search } from "lucide-react";
import { useState } from "react";

import {
  Button,
  CardReports,
  Input,
  PageHero,
  Pagination,
} from "@/components/common";
import { pressRelease } from "@/constants/dummyData";

export default function PressReleasePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PageHero
        title="Press Releases"
        description="Get the latest updates, partnerships, and announcements from CrescentRating and HalalTrip."
        subtitle="Insights"
        backgroundImage="/image/press-release/hero.jpg"
        alignment="left"
        variant="image"
      />
      <div className="mt-16 lg:px-40 sm:px-20 px-8 w-full flex flex-col gap-24 justify-center items-center">
        <section className="max-w-[1440px] w-full">
          <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start w-full">
            <div className="flex flex-col justify-start items-start">
              <p className="lg:text-desktop-heading-6 text-mobile-heading-4 font-bold bg-clip-text text-black text-start">
                All Releases
              </p>
            </div>
            <div className="flex md:flex-row flex-col-reverse justify-end items-center gap-4 w-full sm:w-[50%]">
              <div className="flex flex-row justify-start items-center w-full">
                <Input
                  placeholder="Search an Article..."
                  containerInputClasses="rounded-none !border-r-0 h-12"
                  className="w-full h-12"
                  iconLeft={<Search className="size-4 text-gray-500" />}
                  // value={searchQuery}
                  // onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="flex flex-row justify-center items-center gap-2 text-white bg-[#453CFF] h-12 px-4">
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
              {pressRelease.map((report, index) => (
                <CardReports
                  key={index}
                  title={report.title}
                  description={report.description}
                  imageUrl={report.imageUrl}
                  badgeDate="Jan 2025"
                  imgType="2"
                  imageBorder={false}
                  customImgHeight="lg:h-[300px] sm:h-[200px]  h-[150px]"
                />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

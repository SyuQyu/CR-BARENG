"use client";
import { Search } from "lucide-react";
import { useState } from "react";

import { CardReports, Input, PageHero,Pagination } from "@/components/common";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { halalCertificationBodies } from "@/constants/dummyData";

export default function HalalCertificationBodiesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data or update UI based on the new page
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PageHero
        title="Halal Certification Bodies"
        description="At CrescentRating, we collaborate closely with Halal Certification Bodies to ensure you receive the highest standards of quality and assurance."
        subtitle="Resources"
        backgroundImage="/image/halal-certification-bodies/hero.jpg"
        alignment="left"
        variant="image"
      />
      <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full">
          <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start w-full">
            <div className="flex flex-col justify-start items-start">
              <p className="sm:text-desktop-label-l text-mobile-caption-l text-start text-neutral-500">Resources</p>
              <p className="lg:text-desktop-heading-6 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-start">Halal Certification Bodies</p>
            </div>
            <div className="flex md:flex-row flex-col-reverse justify-end items-center gap-4 w-full sm:w-[50%]">
              <Select>
                <SelectTrigger className="md:w-[50%] w-full">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent className="!rounded-none">
                  <SelectItem value="ind">Indonesia</SelectItem>
                  <SelectItem value="sg">Singapore</SelectItem>
                  <SelectItem value="malay">Malaysia</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Search Halal Certification Bodies" className="w-full" iconRight={<Search className="size-4 text-gray-500" />} />
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
              {halalCertificationBodies.map((report, index) => (
                <CardReports
                  id={report.id}
                  key={index}
                  title={report.title}
                  description={report.description}
                  imageUrl={report.imageUrl}
                  downloadUrl={report.websiteUrl}
                  downloadWithDialog={true}
                  country={report.country}
                  countryCode={report.countryCode}
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

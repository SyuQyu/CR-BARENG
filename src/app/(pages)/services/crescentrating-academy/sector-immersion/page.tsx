"use client";
import Link from "next/link";

import {
  CardAcademyPrograms,
  CardProfile,
  ImageWithFallback,
} from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  crAcademySectorImmersionPrograms,
  crAcademySectorImmersionProgramsCardProfile,
} from "@/constants/dummyData";

export default function sectorImmersion() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section
        className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
        style={{
          backgroundImage: "url('/image/crescentrating-academy/hero.webp')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col gap-5 ">
          <div className="flex w-full flex-col gap-5 text-center justify-center items-center sm:mt-20 mt-10">
            <ImageWithFallback
              src="/image/crescentrating-academy/cr-academy-logo.webp"
              alt="CrescentRating Academy Logo"
              sizes="100vw"
              width={154}
              height={40}
              className="w-40 sm:w-52 object-cover"
            />
            <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 w-full sm:w-[70%] text-primary-cr-800">
              Sector Immersion Training & Accreditation Program
            </h1>
            <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full text-custom-gray-cr">
              Create service excellence for your Muslim visitors & guests
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full sm:w-[80%]">
              <Link
                href="#"
                className="w-fit inline-block p-3 text-white text-center font-semibold bg-primary-cr-600 border-gray-500/20 sm:w-[20%]"
              >
                Learn More
              </Link>
              <Link
                href="#"
                className="w-fit inline-block p-3 text-primary-cr-600 text-center font-semibold bg-white border border-gray-500/20 sm:w-[20%]"
              >
                Explore Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex max-w-[1440px] justify-between items-center flex-col relative">
        <div className="max-w-[1216px] pt-7 sm:pt-14 w-full flex flex-col gap-24 justify-center items-center bg-white">
          <div className="flex flex-col px-8 lg:px-10 md:py-14 w-full md:gap-8 gap-6 border border-[#E3E2E6]">
            <div className="md:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-primary-cr-800 text-center">
              Welcome to Sector Immersion Training & Accreditation Program
            </div>
            <p className="md:text-desktop-body-2 text-mobile-body-2 text-center text-black">
              Customer service is key for all brands in the travel industry to
              differentiate and build loyal customers.  Whether you are a
              manager of a hotel, restaurant, tour agency or attraction, CR
              Academy has designed a unique range of sector immersion training
              programs which will enable your service staff to better understand
              and cater to the unique service needs of Muslim travelers.
            </p>
          </div>
        </div>
        <div className="max-w-[1440px] lg:px-28 px-14 lg:py-20 py-9 w-full flex flex-col justify-stretch items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-full md:max-w-[628px]">
            Our Programs
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-full md:max-w-[628px]">
            Discover our innovative Sector Immersion Training & Accreditation
            programs.
          </p>
          <div className="w-full flex md:flex-row flex-col justify-center items-center text-center gap-8 mt-10">
            {crAcademySectorImmersionPrograms.map((program, index) => (
              <CardAcademyPrograms
                key={index}
                pricing={program.pricing}
                program={program.program}
                market={program.market}
                description={program.description}
                imageUrl={program.imageUrl}
                role={program.role}
              />
            ))}
          </div>
        </div>
        <div className="max-w-[1440px] lg:px-28 px-14 lg:py-20 py-9 w-full flex flex-col justify-center items-center gap-4">
          <div>
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-full md:max-w-[628px]">
              Training Faculty
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-full md:max-w-[628px]">
              Meet the experts leading the way in halal travel and marketing.
            </p>
          </div>
          <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-9 grayscale">
              {crAcademySectorImmersionProgramsCardProfile.map((data, index) => (
                <CardProfile
                  id={data.id}
                  key={index}
                  title={data.title}
                  description={data.description}
                  imageUrl={data.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col md:flex-row gap-12 justify-start items-start">
          <div className="w-full flex flex-col gap-1 justify-start items-start">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left">
              Frequently Asked Questions
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-left text-gray-500">
              Explore Our Training and Certification Services at Crescent Rating
              Academy
            </p>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-center items-start md:gap-24 gap-12 ">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                  I am already a customer service professional. Will the Sector
                  Immersion programs benefit me?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-mobile-body-2 sm:text-desktop-body-2">
                    Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                    faucibus id urna quis nisl egestas. Ultrices aenean metus
                    duis mi nisi viverra nulla diam.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                  Are the Sector Immersion programs open to public?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-mobile-body-2 sm:text-desktop-body-2">
                    Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                    faucibus id urna quis nisl egestas. Ultrices aenean metus
                    duis mi nisi viverra nulla diam.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                  Can I become an Accredited Trainer for your Sector Immersion
                  programs?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-mobile-body-2 sm:text-desktop-body-2">
                    Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                    faucibus id urna quis nisl egestas. Ultrices aenean metus
                    duis mi nisi viverra nulla diam.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </section>
    </div>
  );
}

"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  BasicCard,
  Button,
  ImageWithFallback,
  PageHero,
  TestimonialCard,
} from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from "@/components/ui/defaultCarousel";
import {
  cardData,
  faqsRatingAndAccreditation,
  ratingItemsSubPages,
  testimonialLogoRatingAndAccreditation,
  testimonialsRatingAndAccreditation,
} from "@/constants/dummyData";

export default function RatingAndAccreditation() {
  function Roadmap() {
    const firstSteps = [
      {
        label: "Sign Up",
        description: "Register & create an account on CrescentRating",
        dot: "bg-yellow-900",
        bg: "bg-yellow-100 text-yellow-900 hover:bg-yellow-200",
      },
      {
        label: "Apply",
        description: "Submit Application Online",
        dot: "bg-yellow-900",
        bg: "bg-yellow-100 text-yellow-900 hover:bg-yellow-200",
      },
      {
        label: "Review",
        description:
          "CrescentRating will review the application & issue a tentative rating",
        dot: "bg-indigo-800",
        bg: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
      },
      {
        label: "Audit",
        description: "Conduct in-person/virtual audit of the establishment",
        dot: "bg-indigo-800",
        bg: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
      },
    ];

    const secondSteps = [
      {
        label: "Pay",
        description: "Make payment for the annual rating services",
        dot: "bg-yellow-900",
        bg: "bg-yellow-100 text-yellow-900 hover:bg-yellow-200",
      },
      {
        label: "Display",
        description:
          "Download the rating collaterals and display them in the marketing channels",
        dot: "bg-yellow-900",
        bg: "bg-yellow-100 text-yellow-900 hover:bg-yellow-200",
      },
      {
        label: "Publish",
        description: (
          <>
            The establishment will be published and listed on:
            <br />
            1. CrescentRating Member Directory Listing
            <br />
            2. HalalTrip Member Directory Listing
          </>
        ),
        dot: "bg-indigo-800",
        bg: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
      },
      {
        label: "Confirm",
        description:
          "CrescentRating will review audit report & award the final rating",
        dot: "bg-indigo-800",
        bg: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
      },
    ];

    const thirdStep = {
      label: "Promote",
      description: "HalalTrip will begin the promotion campaigns",
      dot: "bg-green-800",
      bg: "bg-green-100 text-green-800 hover:bg-green-200",
    };

    return (
      <div className="w-full px-32">
        <div className="hidden lg:block relative w-full ">
          <div className="flex justify-between -mb-1.5 z-10 relative">
            {firstSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <Button
                  className={`text-lg w-32 h-7 rounded ${step.bg} text-[0.75rem] text-center flex items-center justify-center`}
                >
                  <p className="text-lg">{step.label}</p>
                </Button>
                <div
                  className={`w-3 h-3 mt-1 rounded-full border-2 ${step.dot}`}
                />
              </div>
            ))}
          </div>

          <div className="w-full rounded-tr-[5rem] rounded-br-[5rem] h-[15rem] border-r-2 border-t-2 border-b relative translate-x-14 px-32" />

          <div className="absolute top-[15rem] left-0 w-full flex justify-between z-10">
            {secondSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <Button
                  className={`text-lg w-32 h-7 rounded ${step.bg} text-[0.75rem] text-center flex items-center justify-center`}
                >
                  <p className="text-lg">{step.label}</p>
                </Button>
                <div
                  className={`w-3 h-3 mt-1 rounded-full border-2 ${step.dot}`}
                />
              </div>
            ))}
          </div>

          <div className="w-[46.5rem] rounded-bl-[5rem] rounded-tl-[5rem] h-[15rem] border-dashed border-l-2 border-t border-b-2 relative -translate-x-14" />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center z-10">
            <Button
              className={`text-lg w-32 h-7 rounded ${thirdStep.bg} text-[0.75rem] text-center flex items-center justify-center`}
            >
              <p className="text-lg">{thirdStep.label}</p>
            </Button>
            <div
              className={`w-3 h-3 mb-1 rounded-full border-2 ${thirdStep.dot}`}
            />
          </div>
        </div>

        <div className="lg:hidden flex flex-col mt-6 justify-center items-center">
          {[...firstSteps, ...secondSteps, thirdStep].map((step, i, arr) => (
            <div key={i} className="relative flex items-center mb-6">
              {i < arr.length - 1 && (
                <div className="absolute left-[0.3rem] top-[5rem] h-full w-px bg-gray-300 z-0" />
              )}
              <div
                className={`w-3 h-3 rounded-full border-2 ${step.dot} bg-white z-10`}
              />
              <div
                className={`flex ml-4 text-sm w-20 h-8 rounded items-center justify-center ${step.bg} font-semibold`}
              >
                {step.label}
              </div>
              <div
                className={`flex ml-4 text-sm w-52 min-h-[10rem] px-4 rounded items-center justify-center ${step.bg} font-semibold`}
              >
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function RatingAndAccreditationSection() {
    return (
      <section id="rating-section" className="w-full max-w-[1440px] px-6 lg:px-8 flex flex-col justify-center items-center mt-16">
        <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 text-black text-center w-[90%] lg:w-[50%]">
          Get your Establishment Crescent Rated
        </p>
        <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 text-center mb-10 w-[90%] lg:w-[60%]">
          Become a Crescent Rated establishment to gain a competitive edge and
          demonstrate your commitment to inclusivity.
        </p>

        <div className="lg:mt-12 md:mt-5 mt-3 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-12 w-full">
          {ratingItemsSubPages.map((item) => (
            <div
              key={item.key}
              className="flex flex-col transition overflow-hidden "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={280}
                height={190}
                className="w-full h-40 object-cover"
              />
              <div className="flex flex-col py-4 justify-between h-full">
                <p className="font-semibold text-black mb-2">{item.title}</p>
                <Link
                  href={item.url}
                  className="text-primary-cr-700 text-sm flex items-center"
                >
                  Learn More <MoveRight className="ml-1 size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PageHero
        title="Rating and Accreditation"
        description="Our globally recognized rating system helps destinations and businesses align with the growing needs of Muslim travelers."
        subtitle="Our Service"
        backgroundImage="/image/rating-accreditation/main.webp"
        alignment="left"
        variant="image"
        useBreadCrumbLinks={false}
      />
      <div className="mt-7 sm:mt-14 px:8 lg:px-32 w-full flex flex-col gap-24 justify-center items-center">
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-full gap-4 justify-start items-start">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold lg:w-[60%] w-full">
              Why you Should Become a Member of the Crescent Rated Services
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 lg:w-[60%] w-full">
              Gain global recognition, trust, and strategic insights to attract
              Muslim travelers while upholding high industry standards.
            </p>
          </div>
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 w-full mt-10 ">
            {cardData.map((card, index) => (
              <BasicCard
                key={index}
                useButton={false}
                className="bg-neutral-100 !rounded-none"
              >
                <div className="w-full flex flex-col gap-4 justify-start items-start">
                  <div className="bg-[#F1F3FF] p-2">{card.icon}</div>
                  <div className="flex flex-col gap-1">
                    <p className="lg:text-desktop-body-1 text-mobile-body-1 font-bold text-black">
                      {card.title}
                    </p>
                    <p className="lg:text-desktop-body-2 text-mobile-body-2 text-neutral-500">
                      {card.description}
                    </p>
                  </div>
                </div>
              </BasicCard>
            ))}
          </div>
        </section>
        <section className="max-w-[1440px] px-2 lg:px-6 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[40%]">
            How to get Crescent Rated
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">
            Step-by-step guide to achieving CrescentRating&apos;s accreditation
          </p>
          <div className="w-full flex flex-col justify-center items-center gap-8">
            <div className="w-auto flex min-[400px]:flex-row flex-col justify-center items-center  gap-4 mt-12">
              <div className="bg-neutral-100 p-4 flex flex-row justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="3"
                    fill="#7A3F0D"
                    stroke="#7A3F0D"
                    strokeWidth="2"
                  />
                </svg>
                <p className="pl-2 lg:text-desktop-body-2 font-semibold text-mobile-body-2 text-black">
                  Establishment
                </p>
              </div>
              <div className="bg-neutral-100 p-4 flex flex-row justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="3"
                    fill="#1504AE"
                    stroke="#1504AE"
                    strokeWidth="2"
                  />
                </svg>
                <p className="pl-2 lg:text-desktop-body-2 font-semibold text-mobile-body-2 text-black">
                  CrescentRating
                </p>
              </div>
              <div className="bg-neutral-100 p-4 flex flex-row justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="3"
                    fill="#094B31"
                    stroke="#094B31"
                    strokeWidth="2"
                  />
                </svg>
                <p className="pl-2 lg:text-desktop-body-2 font-semibold text-mobile-body-2 text-black">
                  HalalTrip
                </p>
              </div>
            </div>
            <Roadmap />
          </div>
        </section>
        <RatingAndAccreditationSection />
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[40%]">
            Trusted by Many Establishments Around the World
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">
            Years of Experience, Countless Mentions Across Industries, and a
            Reputation Built on Global Trust and Reliability
          </p>
          <div className="mt-10 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 justify-center items-start md:p-8 p-6 w-full gap-10">
            {testimonialLogoRatingAndAccreditation.map((item, index) => (
              <ImageWithFallback
                key={index}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain max-h-[50px] rounded-lg"
                priority={false}
                src={item.imageSrc}
                alt={item.imageAlt}
              />
            ))}
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start w-full">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left w-[70%] lg:w-[35%]">
              Accredited with Purpose, Recognized for Results
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-left text-gray-500 w-[70%] lg:w-[45%]">
              Discover how CrescentRating&apos;s trusted standards are empowering
              businesses—from attractions to accommodations—to better serve
              Muslim travelers and grow with confidence.
            </p>
          </div>
          <Carousel className="w-full mt-12">
            <CarouselContent>
              {testimonialsRatingAndAccreditation.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/3 flex justify-center items-center gap-12"
                >
                  <TestimonialCard
                    key={index}
                    text={testimonial.text}
                    name={testimonial.name}
                    location={testimonial.location}
                    imageSrc={testimonial.imageSrc}
                    imageAlt={testimonial.imageAlt}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute flex items-center justify-center -top-[84px] right-0 gap-4">
              <CarouselPreviousCustom className="!rounded-none text-primary-cr-700 !shadow-none" />
              <CarouselNextCustom className="!rounded-none text-primary-cr-700 !shadow-none" />
            </div>
          </Carousel>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col gap-12 justify-start items-start">
          <div className="w-full flex flex-col gap-1 justify-center items-center">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left">
              Frequently Asked Questions
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 w-[70%] lg:w-[45%] text-center">
            Find answers to your questions about CrescentRating’s services, programs, and how we can help your business thrive.
            </p>
          </div>
          <div className="w-full md:px-24">
            <Accordion type="single" collapsible className="w-full">
              {faqsRatingAndAccreditation.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b last:border-b-0 py-3"
                >
                  <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                    <p className="text-mobile-body-2 sm:text-desktop-body-2 text-gray-600">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
      <section className="w-full flex flex-col bg-gradient-to-r from-blue-600 to-navy-blue-600 justify-center items-center lg:mt-10 mt-5">
          <div className="max-w-[1440px] px-8 lg:px-32 w-full sm:py-16 py-12 flex sm:flex-row flex-col gap-5 justify-between items-end">
            <div className="sm:w-[80%] w-full flex flex-col gap-4">
              <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-white">
                Ready to Get CrescentRated?
              </p>
              <p className="text-white sm:text-desktop-body-2 text-mobile-body-2">
                Join leading establishments around the world in setting the standard for Muslim-friendly travel.
              </p>
            </div>
             <Button 
               variant="secondary" 
               className="w-full sm:w-[20%] whitespace-normal"
               onClick={() => {
                 const element = document.getElementById('rating-section');
                 if (element) {
                   element.scrollIntoView({ behavior: 'smooth' });
                 }
               }}
             >
               Explore Eligible Establishments
             </Button>
          </div>
        </section>
    </div>
  );
}

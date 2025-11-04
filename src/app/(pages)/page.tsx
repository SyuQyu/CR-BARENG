/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { Award, ChevronLeft, ChevronRight, CircleCheckBig, Globe, Map, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

import {
  Button,
  CardLandingPage,
  HeroCard,
  ImageWithFallback,
} from "@/components/common";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from "@/components/ui/defaultCarousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  heroCardsData,
  medpart,
  servicesDataHomePage,
  testimonials,
} from "@/constants/dummyData";

export default function Home() {
  const [selectedService, setSelectedService] = useState("rating");
  const [activeTab, setActiveTab] = useState("");

  const services = [
    {
      id: 1,
      key: "rating",
      label: "Rating and Accreditation",
      icon: <CircleCheckBig className="sm:size-20 size-16" />,
    },
    {
      id: 2,
      key: "conference",
      label: "Halal-In-Travel Conferences",
      icon: <Globe className="sm:size-20 size-16" />,
    },
    {
      id: 3,
      key: "destination",
      label: "Destination Marketing",
      icon: <Map className="sm:size-20 size-16" />,
    },
    {
      id: 4,
      key: "report",
      label: "Reports, Research and Consultancy",
      icon: <Search className="sm:size-20 size-16" />,
    },
    {
      id: 5,
      key: "training",
      label: "Training and Certification",
      icon: <Award className="sm:size-20 size-16" />,
    },
  ];

  useEffect(() => {
    if (selectedService && servicesDataHomePage[selectedService]) {
      setActiveTab(servicesDataHomePage[selectedService].tabs[0].key);
    }
  }, [selectedService]);

  if (!servicesDataHomePage[selectedService]) return null;
  const service = servicesDataHomePage[selectedService];

  return (
    <div className="w-full gap-24 flex flex-col justify-center items-center">
      <section className="max-w-[1440px] lg:px-32 px-4 w-full">
        <div className="w-full flex md:flex-row flex-col lg:mt-0 mt-12 justify-between items-center">
          <div className="flex flex-col justify-center md:items-start items-center gap-5 max-w-[540px]">
            <p className="md:text-left text-center sm:text-desktop-body-2 text-mobile-body-2  font-bold">
              SUPERCHARGE YOUR{" "}
              <span className="text-custom-purple-cr">BUSINESS</span>
            </p>
            <p className="md:text-left text-center sm:text-desktop-heading-2 text-mobile-heading-2 font-bold text-primary-cr-600">
              Unlock the Potential of{" "}
              <span className="bg-[#FAB80585]">USD 225 Billion</span> Muslim
              Travel Market
            </p>

            <p className="md:text-left text-center sm:text-desktop-body-2 text-mobile-body-2  leading-6 text-[#3A3A3A]">
              By 2028, the Muslim Traveler expenditure will reach $225 billion.
              Tap into this Halal travel market with CrescentRating. Our
              industry expertise and innovative insights help you offer
              world-class travel experiences for Muslim travelers worldwide.
            </p>
            {/* <Button className="bg-primary-cr-600 sm:!text-desktop-body-2 !text-mobile-body-3 font-bold hover:bg-[#faf205]">
              DOWNLOAD REPORT
            </Button> */}
            <Button className="px-10 py-8">DOWNLOAD REPORT</Button>
          </div>
          <ImageWithFallback
            width={0}
            height={0}
            sizes="100vw"
            className="md:max-w-[500px] w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] lg:w-[600px] xl:max-w-[600px] object-contain"
            priority={true}
            src={"/image/landing-page/main.png"}
            alt={"hero"}
          />
        </div>
      </section>
      <section className="max-w-[1440px] lg:px-32 px-4 w-full">
        <div className="w-full flex flex-col justify-center items-center gap-12">
          <p className="sm:text-desktop-body-2 text-mobile-body-2 font-bold text-[#434343]">
            FEATURED MEDIA PARTNERS AND CLIENTS
          </p>
          <Carousel className="w-full">
            <CarouselContent>
              {medpart.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/5 sm:basis-1/4 basis-1/3 flex justify-center items-center"
                >
                  <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="10vw"
                    className="w-[50%] object-contain"
                    priority={false}
                    src={item.img}
                    alt={item.alt}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="max-w-[1440px] lg:px-32 px-4 w-full">
        <div className="w-full flex flex-col justify-center items-center gap-12">
          <p className="sm:text-desktop-body-2 text-mobile-body-2  font-bold text-[#434343]">
            HALAL TRAVEL TRENDS AND INSIGHTS
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-start gap-12">
            <div className="flex flex-col justify-start items-start">
              <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover rounded-xl shadow-xl mb-4"
                priority={false}
                src={"/image/landing-page/img.webp"}
                alt={"hero"}
              />
              <p className="text-desktop-caption-l text-custom-gray-cr font-bold">
                MAY 27, 2022
              </p>
              <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-primary-cr-600">
                CR Nominated as ‘2022 Most Innovative Company In the World’
              </p>
            </div>
            <div className="w-full h-full flex flex-col justify-between items-start gap-5">
              {heroCardsData.map((card, index) => (
                <HeroCard
                  key={index}
                  imageUrl={card.imageUrl}
                  imageAlt={card.imageAlt}
                  date={card.date}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
          {/* <Button className="!rounded-full text-custom-purple-cr sm:!text-desktop-body-2 !text-mobile-body-3 px-10 font-bold border-custom-purple-cr">
            SEE MORE
          </Button> */}
          <Button variant="secondary" className="px-12 py-6">
            See More
          </Button>
        </div>
      </section>
      <section className="max-w-[1440px] lg:px-32 px-4 w-full">
        <div className="w-full flex flex-col justify-start items-center gap-12 relative">
          <div className="flex flex-col gap-3 text-center md:text-left w-full">
            <p className="sm:text-desktop-body-2 text-mobile-body-2 font-bold text-[#434343]">
              WHAT WE DO
            </p>
            <p className="sm:text-desktop-heading-3 text-mobile-heading-2 font-bold text-[#434343]">
              Our Services
            </p>
          </div>

          <div className="w-full flex lg:flex-row flex-col-reverse justify-between items-start lg:gap-44 gap-10">
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 w-full justify-items-center">
              {services.map((service) => (
                <div
                  key={service.key}
                  className={`w-full flex flex-col p-10 justify-center items-center gap-5 rounded-[16px] shadow-[0px_2px_10px_0px_rgba(118,118,118,0.25)] backdrop-blur-[12.5px] cursor-pointer ${
                    selectedService === service.key
                      ? "bg-gradient-to-b from-[#1502CD] to-[#5705CD] text-white"
                      : "text-neutral-400 bg-white"
                  }`}
                  onClick={() => setSelectedService(service.key)}
                >
                  {service.icon}
                  <p className="sm:text-desktop-body-1 text-mobile-body-1 font-bold text-center">
                    {service.label}
                  </p>
                </div>
              ))}
            </div>
          </div> 
        </div>
      </section>
      <section className="max-w-[1440px] lg:px-32 px-4 w-full">
        <div className="w-full flex flex-col justify-start items-start gap-12 relative">
          <svg
            width="350"
            height="350"
            viewBox="0 0 782 702"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-z-[-2] justify-center items-center select-none absolute -top-36 -left-40"
          >
            <g opacity="0.15" filter="url(#filter0_f_1235_5287)">
              <path
                d="M682 390.62C682 551.126 551.715 602 391 602C230.285 602 100 551.126 100 390.62C100 230.115 230.285 100 391 100C551.715 100 682 230.115 682 390.62Z"
                fill="url(#paint0_radial_1235_5287)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1235_5287"
                x="0"
                y="0"
                width="782"
                height="702"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="50"
                  result="effect1_foregroundBlur_1235_5287"
                />
              </filter>
              <radialGradient
                id="paint0_radial_1235_5287"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(391 390.62) rotate(90) scale(290.62 291)"
              >
                <stop offset="0.59375" stopColor="#1502CD" />
                <stop offset="1" stopColor="#1502CD40" stopOpacity="0.5" />
                <stop offset="1" stopColor="#1502CD40" stopOpacity="0.5" />
              </radialGradient>
            </defs>
          </svg>

          {selectedService && (
            <>
              <p className="sm:text-desktop-heading-3 text-mobile-heading-2 text-primary-cr-600 font-bold">
                {service.title}
              </p>

              {/* 🔁 Image on top for mobile/tablet, right side for desktop */}
              <div className="w-full flex lg:flex-row flex-col-reverse justify-between items-start lg:gap-44 gap-10">
                {/* Tabs and content */}
                <Tabs
                  key={`${selectedService}-${activeTab}`}
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="lg:w-[70%] w-full z-10"
                >
                  <TabsList className="w-full">
                    {service.tabs.map((tab) => (
                      <TabsTrigger
                        key={tab.key}
                        value={tab.key}
                        className="w-full"
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {service.tabs.map((tab) => (
                    <TabsContent key={tab.key} value={tab.key} forceMount>
                      {activeTab === tab.key && (
                        <div className="flex gap-6 flex-col p-6">
                          <div className="flex flex-col justify-start items-start gap-6 text-[#484848]">
                            {tab.content}
                            <Button variant="secondary" className="px-12 py-6">
                              Find out How
                            </Button>

                            {/* 🧭 Mobile navigation buttons under “Find out how” */}
                            <div className="flex md:hidden justify-center items-center gap-6 mt-4 w-full">
                              <Button
                                variant="primary"
                                size="icon"
                                onClick={() => {
                                  const currentIndex = services.findIndex(
                                    (s) => s.key === selectedService
                                  );
                                  const prevIndex =
                                    (currentIndex - 1 + services.length) %
                                    services.length;
                                  setSelectedService(services[prevIndex].key);
                                }}
                              >
                                <ChevronLeft className="w-5 h-5" />
                              </Button>
                              <Button
                                variant="primary"
                                size="icon"
                                onClick={() => {
                                  const currentIndex = services.findIndex(
                                    (s) => s.key === selectedService
                                  );
                                  const nextIndex =
                                    (currentIndex + 1) % services.length;
                                  setSelectedService(services[nextIndex].key);
                                }}
                              >
                                <ChevronRight className="w-5 h-5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>

                {/* Image — hidden on mobile/tablet duplicate */}
                <ImageWithFallback
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full lg:w-[500px] xl:max-w-[500px] max-h-[200px] lg:max-h-[500px] object-cover border-r-[15px] border-r-primary-cr-700 rounded-2xl"
                  priority={false}
                  src={service.image}
                  alt="service-image"
                />
              </div>
            </>
          )}
        </div>
      </section>
      <section className="max-w-[1440px] lg:px-32 px-4 w-full">
        <div className="w-full flex flex-col justify-start items-start gap-12">
          <div className="flex lg:flex-row flex-col justify-between items-start lg:gap-44 gap-10">
            <div className="border-r-[15px] border-r-[#6666D3] rounded-2xl lg:w-auto w-full">
              <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-l-2xl grayscale w-full max-h-[200px] lg:max-h-[500px] lg:w-[700px] xl:max-w-[500px] object-cover"
                priority={false}
                src={"/image/landing-page/img3.jpeg"}
                alt={"hero"}
              />
            </div>
            <div className="flex flex-col gap-1 justify-start items-start">
              <div className="flex flex-col">
                <p className="sm:text-desktop-body-2 text-mobile-body-2  font-bold text-[#434343] m-0">
                  WHO WE ARE
                </p>
                <p className="sm:text-desktop-heading-3 text-mobile-heading-2 font-bold text-[#6666D3] m-0">
                  Since 2008
                </p>
              </div>
              <p className="sm:text-desktop-body-2 text-mobile-body-2">
                We have used extensive insights, industry intelligence,
                lifestyle behaviour and research on the needs of the Muslim
                traveller to deliver authoritative guidance on all aspects of
                the market to destinations, organisations and businesses
                worldwide.
              </p>
              {/* <Button className="sm:!text-desktop-body-2 !text-mobile-body-3 mt-4 !rounded-full !py-5 !px-6 border-primary-cr-700 text-primary-cr-700">
                ABOUT US
              </Button> */}
              <Button variant="secondary" className="mt-8 px-12 py-6">
                About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] lg:px-32 px-4 w-full">
        <div className="w-full flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="sm:text-desktop-body-2 text-mobile-body-2  font-bold text-[#434343]">
                AWARDS
              </p>
              <p className="sm:text-desktop-heading-3 text-mobile-heading-2 font-bold text-[#6666D3]">
                Our Recognitions
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:px-52 px-0 w-full gap-6 mt-16">
              <div className="flex flex-col gap-4 justify-center items-center">
                <ImageWithFallback
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full sm:max-w-[120px] sm:min-h-[120px] max-w-[100px] min-h-[100px] object-contain"
                  priority={false}
                  src={"/image/landing-page/silver-winner.png"}
                  alt={"hero"}
                />
                <p className="text-center sm:text-desktop-body-2 text-mobile-body-2">
                  CrescentRating wins Silver in &quot;Increasing Diversity in
                  Tourism&quot; category at World Responsible Tourism Awards
                  2021, recognized for sustainable and responsible tourism.
                </p>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <ImageWithFallback
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full sm:max-w-[120px] sm:min-h-[120px] max-w-[100px] min-h-[100px] object-contain"
                  priority={false}
                  src={"/image/landing-page/award-winner.png"}
                  alt={"hero"}
                />
                <p className="text-center sm:text-desktop-body-2 text-mobile-body-2">
                  CrescentRating wins Silver in Govt. category at Meaningful
                  Tourism Award 2022 for innovative tourism approach, recognized
                  as tomorrow&apos;s tourism leader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-24 justify-center items-center bg-gradient-to-b from-[#FBFBFE] to-[#F3F3FF]">
        <div className="max-w-[1440px] px-6 lg:px-8 w-full min-h-[350px] pt-14">
          <div className="w-full flex flex-col justify-center items-center gap-12 relative">
            <ImageWithFallback
              width={0}
              height={0}
              sizes="100vw"
              className="w-full max-w-[700px] -top-7 object-contain absolute -z-[-2]"
              priority={false}
              src={"/image/landing-page/continents.png"}
              alt={"hero"}
            />
            <div className="flex flex-col justify-center items-center gap-4 z-10">
              <p className="sm:text-desktop-body-1 text-mobile-body-1 font-bold text-[#434343]">
                WORK WITH US
              </p>
              <p className="sm:text-desktop-body-1 text-mobile-body-1 text-[#484848] lg:w-[50%] w-full text-center">
                More than 50+ business, hotels, attractions, and clients around
                the world have tapped into the potential of the underserved
                Muslim market
              </p>
              {/* <Button className="sm:!text-desktop-body-2 !text-mobile-body-3 mt-4 !rounded-full !py-5 !px-6 border-primary-cr-700 text-primary-cr-700">
                CONTACT US
              </Button> */}
              <Button variant="secondary" className="px-12 py-6">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] px-6 lg:px-8 w-full min-h-[350px] mb-28">
          <div className="w-full flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col justify-center items-center gap-4 z-10">
              <p className="sm:text-desktop-body-1 text-mobile-body-1 font-bold text-[#434343]">
                WHAT THEY SAY
              </p>
              <p className="sm:text-desktop-body-1 text-mobile-body-1 text-[#484848] w-[80%] text-center">
                {" "}
                Hear about us from our{" "}
                <span className="font-bold text-primary-cr-700">
                  clients
                </span>{" "}
                that have benefited from our solutions
              </p>
            </div>
            <Carousel className="w-full">
              <CarouselContent className="mb-8">
                {testimonials.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="lg:basis-1/3 md:basis-1/2"
                  >
                    <CardLandingPage data={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute flex items-center justify-center -bottom-12 left-1/2 -translate-x-1/2 gap-4">
                <CarouselPreviousCustom />
                <CarouselNextCustom />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import {
  ImageWithFallback,
  Button,
  CardPodcasts,
  CardTestimonials,
} from "@/components/common";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  crAcademyPodcasts,
  crAcademyTestimonials,
  tabsDataCrescentRatingAcademy,
} from "@/constants/dummyData";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItemPodcasts,
  CarouselItemTestimonials,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from "@/components/ui/carouselCustom2";
import { CarouselItem } from "@/components/ui/defaultCarousel";
// If the path is different, adjust it to the correct location of Carousel2 in your project.
export default function HalalMusimTravelMarketReports() {
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
              CrescentRating Academy
            </h1>
            <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full text-custom-gray-cr">
              Advance your career & expertise in the Halal Travel market
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
                Join Our Webinar
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex max-w-[1440px] justify-between items-center flex-col relative top-[-32px]">
        <div className="max-w-[1216px] w-full flex justify-center md:flex-row gap-10 bg-primary-cr-50 px-6 lg:px-8 py-4 rounded-[20px]">
          <div className="lg:min-w-64 w-full px-4 py-2 inline-flex flex-col justify-start items-center gap-1">
            <div className="text-center justify-start text-black md:text-desktop-heading-5 text-mobile-heading-5 font-bold leading-[48px]">
              1073+
            </div>
            <div className="text-center justify-start text-black md:text-desktop-body-1 text-mobile-body-1 font-normal leading-loose">
              Participants
            </div>
          </div>
          <div className="w-px h-20 relative bg-primary-cr-300 rounded-[100px]" />
          <div className="lg:min-w-64  w-full px-4 py-2 inline-flex flex-col justify-center items-center gap-1">
            <div className="text-center justify-start text-black md:text-desktop-heading-5 text-mobile-heading-5 font-bold leading-[48px]">
              29+
            </div>
            <div className="text-center justify-start text-black md:text-desktop-body-1 text-mobile-body-1 font-normal leading-loose">
              Citites
            </div>
          </div>
          <div className="w-px h-20 relative bg-primary-cr-300 rounded-[100px]" />
          <div className="lg:min-w-64  w-full px-4 py-2 inline-flex flex-col justify-start items-center gap-1">
            <div className="text-center justify-start text-black md:text-desktop-heading-5 text-mobile-heading-5 font-bold leading-[48px]">
              17+
            </div>
            <div className="text-center justify-start text-black md:text-desktop-body-1 text-mobile-body-1 font-normal leading-loose">
              Countries
            </div>
          </div>
        </div>
        <div className="max-w-[1216px] pt-7 sm:pt-14 w-full flex flex-col gap-24 justify-center items-center bg-white">
          <div className="flex flex-col px-8 lg:px-10 md:py-14 w-full md:gap-8 gap-6 border border-[#E3E2E6]">
            <div className="md:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-primary-cr-800 text-center">
              Welcome to CrescentRating Academy
            </div>
            <p className="md:text-desktop-body-2 text-mobile-body-2 text-center text-black">
              For All Professionals looking to better target the growing Muslim
              Travel Market and be certified by the world’s leading authority on
              Halal Travel, CR Academy provides you with quality training and
              accreditation programs to better understand and serve the growing
              Muslim Travel Market.
            </p>
            <p className="md:text-desktop-body-2 text-mobile-body-2 text-center text-black">
              Join our global experts in our comprehensive online and offline
              programs that will provide you with leading insights and
              accreditation on Halal Travel for all professional levels. 
            </p>
            <p className="md:text-desktop-body-2 text-mobile-body-2 text-center text-black">
              Whether you are a professional looking to advance your career, a
              manager targeting to increase customer growth and retention
              through service excellence, or aiming to improve your national
              competitiveness in new growth economies, CR Academy will enhance
              your knowledge and skills to better target Muslim travelers.
            </p>
            <div className="flex flex-row justify-around items-center w-full ">
              <div className="md:max-w-56 md:py-6 flex flex-col gap-5 justify-around text-center items-center bg-custom-white-cr">
                <div className="p-2 bg-navy-blue-50 flex flex-col justify-start items-center">
                  <div
                    data-style="Outlined"
                    className="w-6 h-6 relative overflow-hidden"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.5 3C5.67157 3 5 3.67157 5 4.5C5 5.32843 5.67157 6 6.5 6C7.32843 6 8 5.32843 8 4.5C8 3.67157 7.32843 3 6.5 3ZM3 4.5C3 2.567 4.567 1 6.5 1C8.433 1 10 2.567 10 4.5C10 6.433 8.433 8 6.5 8C4.567 8 3 6.433 3 4.5ZM14 4.5C14 2.567 15.567 1 17.5 1C19.433 1 21 2.567 21 4.5C21 6.433 19.433 8 17.5 8C15.567 8 14 6.433 14 4.5ZM17.5 3C16.6716 3 16 3.67157 16 4.5C16 5.32843 16.6716 6 17.5 6C18.3284 6 19 5.32843 19 4.5C19 3.67157 18.3284 3 17.5 3ZM12 10C11.1716 10 10.5 10.6716 10.5 11.5C10.5 12.3284 11.1716 13 12 13C12.8284 13 13.5 12.3284 13.5 11.5C13.5 10.6716 12.8284 10 12 10ZM8.5 11.5C8.5 9.567 10.067 8 12 8C13.933 8 15.5 9.567 15.5 11.5C15.5 13.433 13.933 15 12 15C10.067 15 8.5 13.433 8.5 11.5ZM1 13C1 10.7909 2.79086 9 5 9H7V11H5C3.89543 11 3 11.8954 3 13C3 13.5523 3.44772 14 4 14H7.5V16H4C2.34315 16 1 14.6569 1 13ZM17 9H19C21.2091 9 23 10.7909 23 13C23 14.6569 21.6569 16 20 16H16.5V14H20C20.5523 14 21 13.5523 21 13C21 11.8954 20.1046 11 19 11H17V9ZM6.5 20C6.5 17.7909 8.29086 16 10.5 16H13.5C15.7091 16 17.5 17.7909 17.5 20C17.5 21.6569 16.1569 23 14.5 23H9.5C7.84315 23 6.5 21.6569 6.5 20ZM10.5 18C9.39543 18 8.5 18.8954 8.5 20C8.5 20.5523 8.94772 21 9.5 21H14.5C15.0523 21 15.5 20.5523 15.5 20C15.5 18.8954 14.6046 18 13.5 18H10.5Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-black md:text-desktop-body-2 text-mobile-body-2 font-bold text-center">
                  Learn from industry & academics experts
                </p>
              </div>
              <div className="md:max-w-56 md:py-6 flex flex-col gap-5 justify-around text-center items-center bg-custom-white-cr">
                <div className="p-2 bg-navy-blue-50 flex flex-col justify-start items-center">
                  <div
                    data-style="Outlined"
                    className="w-6 h-6 relative overflow-hidden"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.3946 3.06431C19.9321 3.00213 19.3044 3 18.3333 3H15.3333C14.8537 3 14.5441 3.00055 14.3071 3.01672C14.0791 3.03227 13.9923 3.05889 13.9507 3.07613C13.7056 3.17762 13.511 3.37229 13.4095 3.61732C13.3922 3.65894 13.3656 3.74577 13.3501 3.97376C13.3339 4.21074 13.3333 4.52038 13.3333 5H11.3333V4.96802C11.3333 4.52939 11.3333 4.15087 11.3547 3.83762C11.3772 3.50779 11.4267 3.17788 11.5617 2.85195C11.8662 2.11687 12.4502 1.53285 13.1853 1.22837C13.5112 1.09336 13.8411 1.04386 14.171 1.02135C14.4842 0.999981 14.8627 0.999992 15.3013 1L18.3992 1C19.2857 0.999953 20.0495 0.99991 20.6611 1.08215C21.3167 1.17028 21.945 1.36902 22.4547 1.87868C22.9643 2.38835 23.1631 3.0167 23.2512 3.67221C23.3334 4.28387 23.3334 5.04769 23.3333 5.93417V18.0658C23.3334 18.9523 23.3334 19.7161 23.2512 20.3278C23.1631 20.9833 22.9643 21.6117 22.4547 22.1213C21.945 22.631 21.3167 22.8297 20.6611 22.9179C20.0495 23.0001 19.2856 23.0001 18.3992 23L15.3333 23V21H18.3333C19.3044 21 19.9321 20.9979 20.3946 20.9357C20.8284 20.8774 20.9643 20.7832 21.0405 20.7071C21.1166 20.631 21.2107 20.495 21.269 20.0613C21.3312 19.5988 21.3333 18.9711 21.3333 18V6C21.3333 5.02893 21.3312 4.40122 21.269 3.93871C21.2107 3.50497 21.1166 3.36902 21.0405 3.2929C20.9643 3.21677 20.8284 3.12263 20.3946 3.06431Z"
                        fill="#2D15FF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.26752 7H12.3992C13.2857 6.99995 14.0495 6.99991 14.6611 7.08215C15.3167 7.17028 15.945 7.36902 16.4547 7.87868C16.9643 8.38835 17.1631 9.0167 17.2512 9.67221C17.3334 10.2839 17.3334 11.0477 17.3334 11.9342V14.0658C17.3334 14.9523 17.3334 15.7161 17.2512 16.3278C17.1631 16.9833 16.9643 17.6117 16.4547 18.1213C15.945 18.631 15.3167 18.8297 14.6611 18.9179C14.0495 19.0001 13.2857 19.0001 12.3992 19H10.3333V21H12.3333V23H6.33334V21H8.33334V19H6.26752C5.38103 19.0001 4.61722 19.0001 4.00556 18.9179C3.35004 18.8297 2.72169 18.631 2.21203 18.1213C1.70237 17.6117 1.50362 16.9833 1.41549 16.3278C1.33325 15.7161 1.3333 14.9523 1.33335 14.0658V11.9342C1.3333 11.0477 1.33325 10.2839 1.41549 9.67221C1.50362 9.0167 1.70237 8.38835 2.21203 7.87868C2.72169 7.36902 3.35004 7.17028 4.00556 7.08215C4.61721 6.99991 5.38104 6.99995 6.26752 7ZM4.27205 9.06431C3.83831 9.12263 3.70237 9.21677 3.62624 9.2929C3.55012 9.36902 3.45597 9.50497 3.39765 9.93871C3.33547 10.4012 3.33335 11.0289 3.33335 12V14C3.33335 14.9711 3.33547 15.5988 3.39765 16.0613C3.45597 16.495 3.55012 16.631 3.62624 16.7071C3.70237 16.7832 3.83831 16.8774 4.27205 16.9357C4.73456 16.9979 5.36227 17 6.33335 17H12.3333C13.3044 17 13.9321 16.9979 14.3946 16.9357C14.8284 16.8774 14.9643 16.7832 15.0405 16.7071C15.1166 16.631 15.2107 16.495 15.269 16.0613C15.3312 15.5988 15.3333 14.9711 15.3333 14V12C15.3333 11.0289 15.3312 10.4012 15.269 9.93871C15.2107 9.50497 15.1166 9.36902 15.0405 9.2929C14.9643 9.21677 14.8284 9.12263 14.3946 9.06431C13.9321 9.00213 13.3044 9 12.3333 9H6.33335C5.36227 9 4.73456 9.00213 4.27205 9.06431Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-black md:text-desktop-body-2 text-mobile-body-2 font-bold text-center">
                  Access online & offline learning programs
                </p>
              </div>
              <div className="md:max-w-56 md:py-6 flex flex-col gap-5 justify-around text-center items-center bg-custom-white-cr">
                <div className="p-2 bg-navy-blue-50 flex flex-col justify-start items-center">
                  <div
                    data-style="Outlined"
                    className="w-6 h-6 relative overflow-hidden"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.6667 12C23.6667 18.0751 18.7418 23 12.6667 23C6.59155 23 1.66669 18.0751 1.66669 12C1.66669 5.92487 6.59155 1 12.6667 1C18.7418 1 23.6667 5.92487 23.6667 12ZM11.8363 3.47296C12.197 3.0915 12.478 3 12.6667 3C12.8554 3 13.1364 3.0915 13.4971 3.47296C13.8599 3.85653 14.2326 4.46523 14.5666 5.30032C15.148 6.75372 15.5528 8.74349 15.6461 11H9.68725C9.78062 8.74349 10.1854 6.75372 10.7667 5.30032C11.1008 4.46523 11.4735 3.85653 11.8363 3.47296ZM7.68569 11C7.77989 8.53283 8.2201 6.28175 8.90978 4.55754C9.03768 4.23779 9.17628 3.93083 9.32578 3.64049C6.30518 4.84877 4.0923 7.64677 3.72162 11H7.68569ZM3.72162 13H7.68569C7.77989 15.4672 8.2201 17.7182 8.90978 19.4425C9.03768 19.7622 9.17628 20.0692 9.32578 20.3595C6.30518 19.1512 4.0923 16.3532 3.72162 13ZM9.68725 13H15.6461C15.5528 15.2565 15.148 17.2463 14.5666 18.6997C14.2326 19.5348 13.8599 20.1435 13.4971 20.527C13.1364 20.9085 12.8554 21 12.6667 21C12.478 21 12.197 20.9085 11.8363 20.527C11.4735 20.1435 11.1008 19.5348 10.7667 18.6997C10.1854 17.2463 9.78062 15.2565 9.68725 13ZM17.6477 13C17.5535 15.4672 17.1133 17.7182 16.4236 19.4425C16.2957 19.7622 16.1571 20.0692 16.0076 20.3595C19.0282 19.1512 21.2411 16.3532 21.6118 13H17.6477ZM21.6118 11C21.2411 7.64677 19.0282 4.84877 16.0076 3.64049C16.1571 3.93083 16.2957 4.23779 16.4236 4.55754C17.1133 6.28175 17.5535 8.53283 17.6477 11H21.6118Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-black md:text-desktop-body-2 text-mobile-body-2 font-bold text-center">
                  Get holistic & executive insights
                </p>
              </div>
              <div className="md:max-w-56 md:py-6 flex flex-col gap-5 justify-around text-center items-center bg-custom-white-cr">
                <div className="p-2 bg-navy-blue-50 flex flex-col justify-start items-center">
                  <div
                    data-style="Outlined"
                    className="w-6 h-6 relative overflow-hidden"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.69291 1H14.3071C15.0801 0.999965 15.7466 0.999934 16.2857 1.06367C16.8602 1.13157 17.4189 1.28353 17.9032 1.68097C18.0551 1.80564 18.1944 1.94492 18.319 2.09683C18.7165 2.58111 18.8684 3.13977 18.9363 3.71426C18.9473 3.80723 18.9564 3.90399 18.964 4.00442C19.3416 4.01035 19.6813 4.02422 19.9801 4.05665C20.5307 4.1164 21.0725 4.24965 21.5473 4.60971C21.8649 4.85065 22.1314 5.1525 22.3311 5.49761C22.6295 6.01336 22.6945 6.56755 22.6855 7.12122C22.677 7.64672 22.5966 8.28927 22.5027 9.0403L22.3592 10.1886C22.2912 10.7325 22.2322 11.2048 22.1483 11.5909C22.059 12.0019 21.9251 12.4017 21.6584 12.7675C21.4011 13.1205 21.0697 13.413 20.6875 13.6246C20.2915 13.8438 19.8782 13.9271 19.4593 13.9647C19.1356 13.9938 18.756 13.9989 18.3265 13.9998C17.3396 16.0773 15.3596 17.5916 13 17.9291V21H17V23H7V21H11V17.9291C8.64039 17.5916 6.66038 16.0773 5.67355 13.9998C5.24398 13.9989 4.86442 13.9938 4.54074 13.9647C4.12182 13.9271 3.70849 13.8438 3.31247 13.6246C2.93029 13.413 2.59893 13.1205 2.34155 12.7675C2.07487 12.4017 1.94099 12.0019 1.8517 11.5909C1.76783 11.2048 1.7088 10.7325 1.64084 10.1886L1.49731 9.04032C1.4034 8.28928 1.32305 7.64672 1.31451 7.12122C1.30551 6.56755 1.37052 6.01336 1.66892 5.49761C1.8686 5.1525 2.13506 4.85065 2.45275 4.60971C2.9275 4.24965 3.46934 4.1164 4.01986 4.05665C4.31867 4.02422 4.65838 4.01035 5.03606 4.00442C5.04358 3.90399 5.05268 3.80723 5.06366 3.71426C5.13157 3.13977 5.28353 2.58111 5.68097 2.09683C5.80564 1.94492 5.94492 1.80564 6.09682 1.68097C6.58111 1.28353 7.13977 1.13157 7.71426 1.06367C8.25344 0.999934 8.91988 0.999965 9.69291 1ZM18.9302 11.9922C19.062 11.9881 19.1769 11.982 19.2804 11.9727C19.5582 11.9478 19.6627 11.9059 19.7188 11.8749C19.8462 11.8043 19.9566 11.7068 20.0424 11.5892C20.0801 11.5374 20.1347 11.4389 20.1939 11.1663C20.2564 10.8785 20.3051 10.4963 20.3798 9.89914L20.5115 8.84508C20.6139 8.02653 20.6792 7.49266 20.6858 7.08872C20.6921 6.70068 20.6384 6.56568 20.5999 6.49921C20.5334 6.38417 20.4446 6.28355 20.3387 6.20324C20.2775 6.15683 20.1502 6.08685 19.7644 6.04498C19.5541 6.02216 19.3065 6.01091 19 6.00536L19 11C19 11.3368 18.9762 11.6681 18.9302 11.9922ZM5 11C5 11.3368 5.02379 11.6681 5.06978 11.9922C4.93797 11.9881 4.82308 11.982 4.71963 11.9727C4.44182 11.9478 4.33727 11.9059 4.28123 11.8749C4.15384 11.8043 4.04339 11.7068 3.9576 11.5892C3.91986 11.5374 3.86532 11.4389 3.80611 11.1663C3.74359 10.8785 3.69487 10.4963 3.62023 9.89914L3.48847 8.84508C3.38615 8.02653 3.32081 7.49266 3.31424 7.08872C3.30794 6.70068 3.36159 6.56568 3.40005 6.49921C3.46661 6.38417 3.55543 6.28355 3.66133 6.20324C3.72252 6.15683 3.84982 6.08685 4.23564 6.04498C4.44589 6.02216 4.69346 6.01091 5 6.00536V11ZM7.94903 3.04984C7.56336 3.09543 7.4345 3.17046 7.36561 3.22699C7.31498 3.26855 7.26855 3.31498 7.22699 3.36561C7.17046 3.4345 7.09543 3.56336 7.04984 3.94904C7.00164 4.35678 7 4.90364 7 5.75001V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V5.75001C17 4.90364 16.9984 4.35678 16.9502 3.94904C16.9046 3.56336 16.8296 3.4345 16.773 3.36561C16.7315 3.31498 16.685 3.26855 16.6344 3.22699C16.5655 3.17046 16.4366 3.09543 16.051 3.04984C15.6432 3.00164 15.0964 3.00001 14.25 3.00001H9.75C8.90364 3.00001 8.35678 3.00164 7.94903 3.04984Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-black md:text-desktop-body-2 text-mobile-body-2 font-bold text-center text-wrap">
                  Earn certification & accreditation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] lg:px-28 px-14 lg:py-20 py-9 w-full flex flex-col justify-stretch items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-full md:max-w-[628px]">
            Our Programs
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-full md:max-w-[628px]">
            Explore our programs to gain the skills and knowledge needed for
            success in the halal travel industry, offering comprehensive
            education and practical insights.
          </p>
          <div className="w-full flex flex-col justify-center items-center gap-8 mt-10">
            <Tabs
              defaultValue="market-readiness"
              align="start"
              className=" w-full z-10"
              responsiveTabPosition="top"
              desktopTabPosition="left"
              mobileMode="select"
            >
              {/* Tabs List */}
              <TabsList className="!border-none w-[20%]">
                {tabsDataCrescentRatingAcademy.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    className="w-full !bg-none !justify-start !items-start !border-none px-4 py-2"
                    customColorActive="data-[state=active]:border-primary-cr-700 data-[state=active]:text-primary-cr-700 data-[state=active]:!bg-[#F1F3FF]"
                    value={tab.value}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tabs Content */}
              {tabsDataCrescentRatingAcademy.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  activeValue={tab.value}
                  className="w-full flex flex-col gap-4 px-6"
                >
                  <div className="flex sm:flex-row flex-col justify-start items-center gap-8">
                    <ImageWithFallback
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="sm:w-[40%] w-full object-contain"
                      priority={false}
                      src={tab.image}
                      alt={`img-${tab.value}`}
                    />
                    <div className="flex md:gap-4 gap-2 flex-col justify-start">
                      <p className="md:text-desktop-heading-6 font-bold text-mobile-heading-5">
                        {tab.title}
                      </p>
                      <p className="md:text-desktop-body-2 text-mobile-body-2 text-gray-500">
                        {tab.description}
                      </p>
                      <Link
                        href={tab.url}
                        className="!px-0 text-primary-cr-700 justify-start flex flex-row !border-none items-center"
                      >
                        View More <MoveRight className="ml-2 mt-1 size-5" />
                      </Link>
                    </div>
                  </div>
                  {tab.value === "market-readiness"}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
        <div className="max-w-[1440px] lg:px-28 px-14 lg:py-20 py-9 w-full flex xl:flex-row flex-col justify-center items-center gap-4">
          <div className="xl:max-w-[700px] w-full flex flex-col justify-center self-stretch items-stretch bg-indigo-800 rounded-md md:py-10 md:px-14 gap-6">
            <p className="md:text-desktop-heading-6 text-mobile-heading-6 text-white">
              Join Our Free Webinars
            </p>
            <div className="inline-flex justify-start items-center w-full gap-2">
              <div className="inline-flex justify-center items-center content-center bg-red-500 text-white h-8 px-3 py-1 rounded-[100px] gap-1 overflow-hidden">
                <div className="flex text-center w-3.5 h-3.5 bg-white rounded-full" />
                <div className="flex text-center md:text-desktop-body-2 text-mobile-body-2 font-semibold">
                  LIVE
                </div>
              </div>
              <div className="inline-flex justify-center items-center content-center bg-white/40 text-white h-8 px-3 py-1 rounded-[100px] gap-1 overflow-hidden">
                <div className="flex text-center md:text-desktop-body-2 text-mobile-body-2 font-semibold">
                  HALAL TOURISM 101
                </div>
              </div>
            </div>
            <p className="md:text-desktop-heading-4 text-mobile-heading-4 font-bold text-white">
              How to Tap into the Growing Muslim Travel Market
            </p>
            <div className="flex flex-col md:flex-row max-w-max w-max justify-between items-center md:items-start lg:gap-15 gap-8">
              <div className="flex flex-col gap-3 justify-between items-stretch">
                <div className="w-20 px-2 py-1 bg-colors-secondary-navy-blue-50 inline-flex justify-start items-end gap-2 bg-navy-blue-50">
                  <div
                    data-style="Outlined"
                    className="w-4 h-4 relative overflow-hidden"
                  >
                    <div className="min-w-fit left-[0.97px] top-[0.75px] absolute ">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.6654 3.72602C10.4014 4.17266 10.25 4.69364 10.25 5.25C10.25 6.90685 11.5931 8.25 13.25 8.25C13.8064 8.25 14.3273 8.09855 14.774 7.83464L10.6654 3.72602ZM11.726 2.66536L15.8346 6.77398C16.0985 6.32734 16.25 5.80636 16.25 5.25C16.25 3.59315 14.9068 2.25 13.25 2.25C12.6936 2.25 12.1727 2.40145 11.726 2.66536ZM8.75756 4.98691C8.89377 2.62408 10.853 0.75 13.25 0.75C15.7353 0.75 17.75 2.76472 17.75 5.25C17.75 7.64697 15.8759 9.60622 13.5131 9.74244L6.87228 14.8021C6.18051 15.3292 5.2701 15.3986 4.52454 15.0361L2.53033 17.0303L1.46967 15.9697L3.46388 13.9755C3.10143 13.2299 3.17084 12.3195 3.6979 11.6277L8.75756 4.98691ZM9.10531 7.00557L4.89105 12.5368C4.66354 12.8354 4.69185 13.2562 4.95729 13.5216L4.97835 13.5427C5.24379 13.8081 5.66462 13.8365 5.96322 13.6089L11.4944 9.39469C10.4209 8.93939 9.56061 8.07914 9.10531 7.00557Z"
                          fill="#453CFF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="justify-start text-navy-blue-600 md:ext-desktop-label-l text-mobile-label-l font-normal leading-tight">
                    Speaker
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <ImageWithFallback
                    width={100}
                    height={100}
                    sizes="100vw"
                    className="w-16 h-16 rounded-full object-cover"
                    priority={false}
                    src="/image/crescentrating-academy/fazal.webp"
                    alt="speaker"
                  />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-white md:text-desktop-body-2 text-mobile-body-2 font-semibold">
                    Fazal Bahardeen
                  </p>
                  <p className="text-white md:text-desktop-body-2 text-mobile-body-2 font-normal">
                    Founder & CEO, CrescentRating
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-between items-stretch">
                <div className="flex flex-row justify-between items-stretch gap-2">
                  <div className="h-28 px-3.5 py-3 bg-green-600/80 rounded-md outline outline-1 outline-offset-[-1px] outline-white inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
                    <div data-style="Outlined" className="w-5 h-5 relative">
                      <div className="w-5 h-5 bg-icon-color-icon-white">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.0833 14.6668V16.5002H17.9167V14.6668H16.0833Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.83332 3.66683L15.1667 3.66683V1.8335H17V3.66683H17.0603C17.873 3.66679 18.5731 3.66675 19.1338 3.74213C19.7347 3.82292 20.3107 4.0051 20.7779 4.47229C21.2451 4.93948 21.4272 5.51547 21.508 6.11636C21.5834 6.67705 21.5834 7.37722 21.5833 8.18984V15.6438C21.5834 16.4564 21.5834 17.1566 21.508 17.7173C21.4272 18.3182 21.2451 18.8942 20.7779 19.3614C20.3107 19.8286 19.7347 20.0107 19.1338 20.0915C18.5731 20.1669 17.8729 20.1669 17.0603 20.1668H5.93967C5.12705 20.1669 4.42688 20.1669 3.86619 20.0915C3.2653 20.0107 2.68931 19.8286 2.22212 19.3614C1.75493 18.8942 1.57274 18.3182 1.49196 17.7173C1.41657 17.1566 1.41661 16.4565 1.41666 15.6438V8.18982C1.41661 7.37721 1.41657 6.67705 1.49196 6.11636C1.57274 5.51547 1.75493 4.93948 2.22212 4.47229C2.68931 4.0051 3.2653 3.82292 3.86619 3.74213C4.42687 3.66675 5.12704 3.66679 5.93965 3.66683L5.99999 3.66683V1.8335H7.83332V3.66683ZM19.75 8.25017V9.16683H3.24999V8.25017C3.24999 7.36001 3.25194 6.78461 3.30894 6.36065C3.3624 5.96305 3.4487 5.83843 3.51848 5.76865C3.58826 5.69887 3.71288 5.61257 4.11047 5.55911C4.53444 5.50211 5.10984 5.50017 5.99999 5.50017H17C17.8902 5.50017 18.4656 5.50211 18.8895 5.55911C19.2871 5.61257 19.4117 5.69887 19.4815 5.76865C19.5513 5.83843 19.6376 5.96305 19.691 6.36065C19.748 6.78461 19.75 7.36001 19.75 8.25017ZM19.75 11.0002H3.24999V15.5835C3.24999 16.4737 3.25194 17.0491 3.30894 17.473C3.3624 17.8706 3.4487 17.9952 3.51848 18.065C3.58826 18.1348 3.71288 18.2211 4.11047 18.2746C4.53444 18.3316 5.10984 18.3335 5.99999 18.3335H17C17.8902 18.3335 18.4656 18.3316 18.8895 18.2746C19.2871 18.2211 19.4117 18.1348 19.4815 18.065C19.5513 17.9952 19.6376 17.8706 19.691 17.473C19.748 17.0491 19.75 16.4737 19.75 15.5835V11.0002Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-center justify-start text-white md:text-desktop-body-3 text-mobile-body-3 font-semibold leading-tight">
                        Thursday
                      </div>
                      <div className="text-center justify-start text-white md:text-desktop-body-2 text-mobile-body-3 font-bold leading-normal">
                        April 10th, 2025
                      </div>
                    </div>
                  </div>
                  <div className="h-28 px-3.5 py-3 bg-green-600/80 rounded-md outline outline-1 outline-offset-[-1px] outline-white inline-flex flex-col justify-center items-center gap-1 overflow-hidden">
                    <div data-style="Outlined" className="w-5 h-5 relative">
                      <div className="w-5 h-5 bg-icon-color-icon-white">
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.4167 5.95817V10.5415H16.0834V12.3748H11.5C10.9938 12.3748 10.5834 11.9644 10.5834 11.4582V5.95817H12.4167Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.5 0.916504C5.93115 0.916504 1.41669 5.43097 1.41669 10.9998C1.41669 16.5687 5.93115 21.0832 11.5 21.0832C17.0689 21.0832 21.5834 16.5687 21.5834 10.9998C21.5834 5.43097 17.0689 0.916504 11.5 0.916504ZM3.25002 10.9998C3.25002 6.44349 6.94367 2.74984 11.5 2.74984C16.0564 2.74984 19.75 6.44349 19.75 10.9998C19.75 15.5562 16.0564 19.2498 11.5 19.2498C6.94367 19.2498 3.25002 15.5562 3.25002 10.9998Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-center justify-start text-white md:text-desktop-body-3 text-mobile-body-3 font-semibold leading-tight">
                        Time
                      </div>
                      <div className="text-center justify-start text-white md:text-desktop-body-2 text-mobile-body-3 font-bold leading-normal">
                        15.00 - 16.00 SGT
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-stretch gap-2">
                  <div className="self-stretch w-full h-12 px-3.5 py-3 bg-green-600/80 rounded-md outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2.5 overflow-hidden">
                    <div data-style="Outlined" className="w-5 h-5 relative">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.41666 10.5832C1.41666 5.4321 6.02435 1.4165 11.5 1.4165C16.9756 1.4165 21.5833 5.4321 21.5833 10.5832C21.5833 12.8622 20.7226 15.3442 19.1631 17.0614C19.0128 17.2269 18.9228 17.3264 18.861 17.4016C18.852 17.4125 18.8445 17.4218 18.8385 17.4296C18.8383 17.4324 18.8381 17.4353 18.8379 17.4385C18.8337 17.5105 18.8333 17.6097 18.8333 17.7942L18.8333 17.8566C18.8334 18.5875 18.8334 19.227 18.7675 19.7215C18.6999 20.228 18.5352 20.8324 17.9855 21.2233C17.8582 21.3139 17.7208 21.3893 17.5761 21.4481C16.9512 21.7022 16.3529 21.5168 15.8892 21.302C15.4366 21.0923 14.8969 20.749 14.2802 20.3567L13.4478 19.8273C13.2943 19.7297 13.2141 19.6792 13.1538 19.6459C13.1519 19.6449 13.1501 19.6438 13.1483 19.6429C13.1418 19.6431 13.1344 19.6434 13.1259 19.6439C13.0417 19.6484 12.9264 19.6607 12.7225 19.6831C12.3214 19.7272 11.9134 19.7498 11.5 19.7498C6.02435 19.7498 1.41666 15.7342 1.41666 10.5832ZM11.5 3.24984C6.8504 3.24984 3.24999 6.62154 3.24999 10.5832C3.24999 14.5448 6.8504 17.9165 11.5 17.9165C11.8465 17.9165 12.1876 17.8975 12.5222 17.8608L12.543 17.8585C12.7186 17.8392 12.886 17.8208 13.0278 17.8132C13.1789 17.8051 13.3644 17.8046 13.563 17.8507C13.8749 17.9233 14.1505 18.1001 14.3706 18.2413C14.3915 18.2547 14.4118 18.2677 14.4317 18.2803L15.2115 18.7763C15.8966 19.212 16.3319 19.4866 16.6598 19.6385C16.78 19.6942 16.8557 19.7187 16.8987 19.7293C16.9128 19.6873 16.9327 19.6103 16.9502 19.479C16.998 19.1208 17 18.6061 17 17.7942C17 17.7699 16.9999 17.7449 16.9998 17.7193C16.9988 17.455 16.9975 17.1277 17.0981 16.8329C17.1152 16.7827 17.1299 16.7446 17.151 16.696C17.2331 16.5064 17.3501 16.3525 17.445 16.237C17.5391 16.1227 17.66 15.9895 17.7925 15.8437L17.8059 15.8289C19.0288 14.4823 19.75 12.4535 19.75 10.5832C19.75 6.62154 16.1496 3.24984 11.5 3.24984ZM6.45832 8.74984C6.45832 7.73732 7.27914 6.9165 8.29166 6.9165H11.9583C12.7873 6.9165 13.4878 7.46672 13.7145 8.22189L15.215 7.47161C15.4992 7.32953 15.8367 7.34472 16.1069 7.51174C16.3772 7.67876 16.5417 7.97381 16.5417 8.2915V12.8748C16.5417 13.1925 16.3772 13.4876 16.1069 13.6546C15.8367 13.8216 15.4992 13.8368 15.215 13.6947L13.7145 12.9445C13.4878 13.6996 12.7873 14.2498 11.9583 14.2498H8.29166C7.27914 14.2498 6.45832 13.429 6.45832 12.4165V8.74984ZM11.9583 8.74984H8.29166V12.4165H11.9583V12.2414C11.9583 11.2193 13.034 10.5545 13.9482 11.0116L14.7083 11.3916V9.7747L13.9482 10.1547C13.034 10.6119 11.9583 9.94706 11.9583 8.9249V8.74984Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="justify-start text-white md:text-desktop-body-2 text-mobile-2 font-bold leading-normal">
                        Online via Zoom
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch h-14 justify-between gap-3 w-full">
              <div className="w-max h-14 px-3 py-[3px] bg-white/40 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-start items-center gap-3">
                <div className="justify-center text-white md:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                  FREE
                </div>
                <div className="w-4 h-0 rotate-90 outline outline-1 outline-white"></div>
                <div className="w-max justify-center text-white md:text-desktop-body-1 text-mobile-body-1 font-normal leading-loose">
                  Limited Slots
                </div>
              </div>
              <Button className="h-14 w-full !py-5 !px-6 bg-white text-primary-cr-700">
                Take the Test
              </Button>
            </div>
          </div>
          <div className="relative w-full flex flex-col self-stretch items-stretch bg-custom-white-cr rounded-md md:py-10 md:px-6 gap-6 overflow-hidden">
            <div className="z-0 w-[472px] h-[480px] left-[185px] top-[342px] absolute opacity-80 bg-gradient-to-l from-violet-400/5 to-violet-400/30 rounded-full blur-lg" />
            <div className="z-10 inline-flex flex-col justify-center items-start gap-2">
              <div className="self-stretch justify-start text-black md:text-desktop-heading-5 text-mobile-heading-5 font-semibold leading-10">
                Are you missing out on our previous webinars?{" "}
              </div>
              <div className="justify-start text-gray-500 md:text-desktop-body-2 text-mobile-body-2 font-normal leading-normal">
                No worries — you can still get full access to the webinar
                recording.
              </div>
            </div>
            <div className="z-10 w-full h-fit inline-flex justify-start items-start xl:gap-8 lg:gap-36 md:gap-3">
              <div className="self-stretch px-3 py-2.5 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="flex flex-col justify-center items-center gap-1.5">
                  <div className="justify-start text-black md:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                    How to Tap into the Growing Muslim Travel Market
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-3">
                  <div className="w-11 h-11 relative bg-white">
                    <img
                      className="w-11 h-11 rounded-[100px]"
                      src="/image/crescentrating-academy/fazal.webp"
                    />
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-black md:text-desktop-body-2 text-mobile-body-2 font-semibold leading-normal">
                      Fazal Bahardeen
                    </div>
                    <div className="self-stretch justify-start text-gray-500 md:text-desktop-label-s text-mobile-label-s font-normal leading-tight">
                      CEO of CrescentRating and HalalTrip
                    </div>
                  </div>
                </div>
                <Button className="w-full h-12 !py-5 !px-6 bg-white text-primary-cr-700">
                  Get Access
                </Button>
              </div>
              <div className="self-stretch px-3 py-2.5 bg-white rounded-lg inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="flex flex-col justify-center items-center gap-1.5">
                  <div className="justify-start text-black md:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                    How to Tap into the Growing Muslim Travel Market
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-3">
                  <div className="w-11 h-11 relative bg-white">
                    <img
                      className="w-11 h-11 rounded-[100px]"
                      src="/image/crescentrating-academy/fazal.webp"
                    />
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-black md:text-desktop-body-2 text-mobile-body-2 font-semibold leading-normal">
                      Fazal Bahardeen
                    </div>
                    <div className="self-stretch justify-start text-gray-500 md:text-desktop-label-s text-mobile-label-s font-normal leading-tight">
                      CEO of CrescentRating and HalalTrip
                    </div>
                  </div>
                </div>
                <Button className="w-full h-12 !py-5 !px-6 bg-white text-primary-cr-700">
                  Get Access
                </Button>
              </div>
            </div>
            <div className="z-10 w-full h-14 inline-flex justify-start items-start ">
              <Button className="w-full h-14 !py-5 !px-6 bg-primary-cr-700 text-white gap-3 ">
                <div>See all previous webinars</div>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.77228 0.333497H8.66659V2.00016H7.83325C6.23835 2.00016 5.126 2.00193 4.28672 2.11477C3.47141 2.22439 3.03967 2.42488 2.73215 2.7324C2.42464 3.03991 2.22414 3.47166 2.11453 4.28696C2.00169 5.12624 1.99992 6.23859 1.99992 7.8335V11.1668C1.99992 12.7617 2.00169 13.8741 2.11453 14.7134C2.22414 15.5287 2.42464 15.9604 2.73215 16.2679C3.03967 16.5754 3.47141 16.7759 4.28672 16.8856C5.126 16.9984 6.23835 17.0002 7.83325 17.0002H11.1666C12.7615 17.0002 13.8738 16.9984 14.7131 16.8856C15.5284 16.7759 15.9602 16.5754 16.2677 16.2679C16.5752 15.9604 16.7757 15.5287 16.8853 14.7134C16.9982 13.8741 16.9999 12.7617 16.9999 11.1668V10.3335H18.6666V11.2278C18.6666 12.7473 18.6666 13.9721 18.5371 14.9354C18.4027 15.9356 18.115 16.7776 17.4462 17.4464C16.7774 18.1152 15.9353 18.4029 14.9352 18.5374C13.9719 18.6669 12.7471 18.6669 11.2275 18.6668H7.77231C6.25275 18.6669 5.02794 18.6669 4.06464 18.5374C3.06452 18.4029 2.22244 18.1152 1.55364 17.4464C0.884846 16.7776 0.597186 15.9356 0.462724 14.9354C0.333212 13.9721 0.33323 12.7474 0.333253 11.2278V7.77253C0.33323 6.25299 0.333212 5.02818 0.462724 4.06489C0.597186 3.06477 0.884846 2.22268 1.55364 1.55389C2.22244 0.88509 3.06452 0.59743 4.06464 0.462968C5.02793 0.333456 6.25275 0.333474 7.77228 0.333497Z"
                    fill="white"
                  />
                  <path
                    d="M16.9999 3.17882V7.00018H18.6666L18.6666 2.78817C18.6666 2.43478 18.6667 2.09134 18.6286 1.80808C18.5857 1.48874 18.4811 1.12434 18.1784 0.821664C17.8757 0.518984 17.5113 0.414383 17.192 0.371449C16.9087 0.333366 16.5653 0.333433 16.2119 0.333503L11.9999 0.333509V2.00018H15.8215L8.91073 8.91097L10.0892 10.0895L16.9999 3.17882Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] lg:px-28 px-14 lg:py-20 py-9 w-full flex flex-col justify-center items-center">
          <img
            className="w-72 h-72 z-0 xl:top-[2450px] lg:top-[3000px] md:top-[2800px] absolute left-[5%] opacity-25"
            src="/image/crescentrating-academy/microphone.webp"
          />
          <img
            className="w-72 h-72 z-0 xl:top-[2250px] lg:top-[2700px] md:top-[2500px] absolute right-[9%] opacity-25"
            src="/image/crescentrating-academy/headphone.webp"
          />
          <div className="lg:max-w-[929px] flex flex-col justify-center items-start gap-1 z-10">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black w-full md:max-w-[628px]">
              Listen to Our Podcast
            </p>
            <div className="flex flex-row w-full items-stretch justify-between">
              <p className="sm:text-desktop-body-2 text-mobile-body-2 text-start text-gray-500 w-full md:max-w-[628px]">
                Insightful conversations on halal travel, culture, and
                innovation—tune in now.
              </p>
              <Link
                href="/crescentrating-academy/podcasts"
                className="text-primary-cr-700 sm:text-desktop-label-l text-mobile-label-l font-semibold text-center"
              >
                See all podcasts
              </Link>
            </div>

            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <div className="mt-10 flex flex-row justify-center items-start w-full gap-6 overflow-visible">
                <Carousel
                  className="w-full flex flex-col lg:gap-8 gap-2 overflow-visible justify-stretch"
                  showDots={false}
                  slideCount={6}
                >
                  <CarouselContent className="w-full flex flex-row gap-2 items-center justify-stretch overflow-visible">
                    {crAcademyPodcasts.map((blog, index) => (
                      <CarouselItemPodcasts
                        key={index}
                        index={index}
                        className={
                          index === 0 ? " lg:ml-2 md:ml-2 content-stretch" : ""
                        }
                        visibleSlides={3}
                      >
                        <CardPodcasts
                          id={blog.id}
                          title={blog.title}
                          imageUrl={blog.imageUrl}
                          podcastUrl={blog.podcastUrl}
                          date={blog.date}
                        />
                      </CarouselItemPodcasts>
                    ))}
                  </CarouselContent>
                  <CarouselPreviousCustom />
                  <CarouselNextCustom />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] lg:px-28 px-14 lg:py-20 py-9 w-full flex flex-col justify-center items-center gap-8">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black w-full md:max-w-[628px] text-center">
              Testimonials
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-full md:max-w-[628px]">
              See what our clients have said about our programs
            </p>
          </div>
          <div className="flex flex-col w-full items-center justify-between">
            <div className="max-w-[95%] w-full h-[520px] flex flex-col justify-center items-center gap-1 z-0 bg-gray-100 rounded-lg shadow-md">
              {/* Background goes here! */}
            </div>
            <div className="mt-10 mb-10 flex justify-center items-center w-full z-10 absolute">
              <div className="mt-10 flex flex-row justify-center items-start w-full gap-6 overflow-visible">
                <Carousel
                  className="w-full flex flex-col lg:gap-8 gap-2 overflow-visible justify-stretch"
                  showDots={false}
                  slideCount={3}
                >
                  <CarouselContent className="w-full flex flex-row gap-2 items-center justify-stretch overflow-visible">
                    {crAcademyTestimonials.map((blog, index) => (
                        <CarouselItemTestimonials
                        key={index}
                        index={index}
                        className={
                          index === 0 ? "lg:ml-2 md:ml-6  content-stretch" : ""
                        }
                        visibleSlides={
                          typeof window !== "undefined" && window.innerWidth < 640
                          ? 1
                          : 3
                        }
                        >
                        <CardTestimonials
                          id={blog.id}
                          testimonials={blog.testimonials}
                          person={blog.person}
                          event={blog.event}
                          company={blog.company}
                          imageUrl={blog.imageUrl}
                        />
                        </CarouselItemTestimonials>
                    ))}
                  </CarouselContent>
                  <CarouselPreviousCustom />
                  <CarouselNextCustom />
                </Carousel>
              </div>
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
                  When are the various training programs available?
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
                  What are the various training modes available?
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
                  Do all programs come with certifications?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-mobile-body-2 sm:text-desktop-body-2">
                    Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                    faucibus id urna quis nisl egestas. Ultrices aenean metus
                    duis mi nisi viverra nulla diam.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                  I am a professional aspiring to build my skills and expertise in the travel space. Which training program should I register?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-mobile-body-2 sm:text-desktop-body-2">
                    Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                    faucibus id urna quis nisl egestas. Ultrices aenean metus
                    duis mi nisi viverra nulla diam.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                  Is the Sector Immersion program similar to other customer service courses?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-mobile-body-2 sm:text-desktop-body-2">
                    Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                    faucibus id urna quis nisl egestas. Ultrices aenean metus
                    duis mi nisi viverra nulla diam.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                  I am a senior manager. Can I also take the Market Readiness and Sector Immersion Programs?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-mobile-body-2 sm:text-desktop-body-2">
                    Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                    faucibus id urna quis nisl egestas. Ultrices aenean metus
                    duis mi nisi viverra nulla diam.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                  I require customized training for my organization. Which training program should I register?
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

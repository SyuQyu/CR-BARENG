"use client";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import { Button,ImageWithFallback } from "@/components/common";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function HalalChefWorld() {
  const today = new Date();

  const [selectedLocation, setSelectedLocation] = useState<string>(
    "Select Your Training Location"
  );
  const locations = ["Singapore", "Malaysia", "Indonesia"];

  const [openFrom, setOpenFrom] = React.useState(false);
  const [openTo, setOpenTo] = React.useState(false);

  const [dateFrom, setDateFrom] = React.useState<Date | undefined>(undefined);
  const [dateTo, setDateTo] = React.useState<Date | undefined>(undefined);

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
              Halal Tourism Executive Program
            </h1>
            <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full text-custom-gray-cr">
              Transform your organization & the tourism world
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
      <section className="w-full flex py-5 sm:py-12 px-7 sm:px-14 bg-[#FAF9FA]">
        <div className="max-w-[1216px] w-full flex flex-col gap-3 justify-center items-center mx-auto">
          <p className="md:text-desktop-body-1 text-mobile-body-1 text-start text-[#69687A]">
            <span className="font-bold text-primary-cr-700">Give</span> your
            Muslim diners a higher level of Halal assurance,{" "}
            <span className="font-bold text-primary-cr-700">Get</span> Chefs
            trained and accredited by CrescentRating. HalalChefWorld is a
            comprehensive program designed to be a capability building
            experience and learning journey with structured content over the
            course of two days.
          </p>
        </div>
      </section>
      <section className="w-full flex max-w-[1440px] justify-between items-center flex-col relative gap-12">
        <div className="max-w-[1216px] pt-7 sm:pt-14 w-full flex flex-col justify-center items-center bg-white">
          <div className="flex flex-col px-8 lg:px-5 md:py-20 py-10 w-full md:gap-14 border border-[#E3E2E6]">
            <div className="flex flex-col gap-2">
              <div className="md:text-desktop-heading-5 text-mobile-heading-5 font-bold bg-clip-text text-black text-center">
                Hear from the Winners
              </div>
              <p className="md:text-desktop-body-2 text-mobile-body-2 text-center text-[#69687A]">
                Explore inspiring stories from the HalalChefWorld champions and
                discover what drives their success in the halal industry.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <iframe
                width="901"
                height="506"
                src="https://www.youtube.com/embed/7YDgU3Fac-Y?si=e2tYakoJDFiBasV4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex mt-12 bg-[#FAF9FA] py-6 md:py-10 p-5">
        <div className="max-w-[1216px] w-full flex flex-col gap-10 justify-center items-center mx-auto ">
          <div className="lg:px-0 sm:px-20 px-10 ">
            <p className="md:text-desktop-heading-5 text-mobile-heading-5 text-center text-black font-bold ">
              Value Proposition
            </p>
            <p className="md:text-desktop-body-2 text-mobile-body-2 text-center text-[#797979]">
              Enhance your halal culinary capabilities and brand credibility
              with targeted program benefits.
            </p>
          </div>
          <div className="w-full grid lg:grid-cols-2 py-2 lg:px-0 sm:px-20 px-10 gap-6">
            <div className="w-full flex flex-col bg-white py-8 px-6 gap-7">
              <div className="md:text-desktop-heading-6 text-mobile-heading-6 text-center text-black font-bold ">
                For Chefs
              </div>
              <div className="max-w-[425px] w-full flex flex-col gap-7 mx-auto">
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-10 h-10 p-2 bg-navy-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.59704 3.8189C3.23449 4.44333 3 5.29056 3 6.08333C3 6.85706 3.22106 7.32318 3.46526 7.58634C3.70641 7.84621 4.05369 8 4.5 8C4.94631 8 5.29359 7.84621 5.53474 7.58634C5.77894 7.32318 6 6.85706 6 6.08333C6 5.29056 5.76551 4.44333 5.40296 3.8189C5.0115 3.14466 4.64897 3 4.5 3C4.35103 3 3.9885 3.14466 3.59704 3.8189ZM1.86743 2.81468C2.38079 1.93051 3.26826 1 4.5 1C5.73174 1 6.61922 1.93051 7.13257 2.81468C7.67485 3.74867 8 4.9431 8 6.08333C8 7.2426 7.66142 8.23482 7.00079 8.94674C6.57925 9.40102 6.06128 9.70313 5.5 9.86311V23H3.5V9.86311C2.93872 9.70313 2.42075 9.40102 1.99921 8.94674C1.33858 8.23482 1 7.2426 1 6.08333C1 4.9431 1.32515 3.74867 1.86743 2.81468ZM8.5 5.5V1H10.5V5.5C10.5 6.24028 10.9022 6.88663 11.5 7.23244V1H13.5V7.23244C14.0978 6.88663 14.5 6.24028 14.5 5.5V1H16.5V5.5C16.5 7.36384 15.2252 8.92994 13.5 9.37398V23H11.5V9.37398C9.77477 8.92994 8.5 7.36384 8.5 5.5ZM17 1H18.5C20.9853 1 23 3.01472 23 5.5V13.8394C23 14.9159 22.4231 15.91 21.4884 16.4441L19 17.866V23H17V1ZM19 15.5625L20.4961 14.7076C20.8077 14.5296 21 14.1982 21 13.8394V5.5C21 4.29052 20.1411 3.28164 19 3.05001V15.5625Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                  <p className="flex md:text-desktop-body-2 text-mobile-body-2 text-start text-black font-semibold items-center">
                    Learn the best practices in Halal culinary
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-10 h-10 p-2 bg-navy-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.5 2C16.567 2 15 3.567 15 5.5C15 7.433 16.567 9 18.5 9C19.1028 9 19.6699 8.84763 20.1651 8.57931L21.2929 9.70711L22.7071 8.29289L21.5793 7.1651C21.8476 6.66993 22 6.10276 22 5.5C22 3.567 20.433 2 18.5 2ZM17 5.5C17 4.67157 17.6716 4 18.5 4C19.3284 4 20 4.67157 20 5.5C20 6.32843 19.3284 7 18.5 7C17.6716 7 17 6.32843 17 5.5Z"
                        fill="#2D15FF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23 19H21.9506C21.4816 14.2756 17.7244 10.5184 13 10.0494V9H11V10.0494C6.27558 10.5184 2.51844 14.2756 2.04938 19H1V21H23V19ZM12 12C16.0796 12 19.446 15.0537 19.9381 19H4.06189C4.55399 15.0537 7.92038 12 12 12Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                  <p className="flex md:text-desktop-body-2 text-mobile-body-2 text-start text-black font-semibold items-center">
                    Identify Halal ingredients and Halal substitutes
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-10 h-10 p-2 bg-navy-blue-50">
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
                        d="M19 12.4C19 10.9972 17.8891 9.85389 16.499 9.80185C16.4923 9.79759 16.4847 9.79246 16.4766 9.78638C16.4674 9.7796 16.4596 9.77318 16.4531 9.76747C16.1118 8.78992 15.1797 8.00001 14 8.00001C12.8203 8.00001 11.8883 8.78989 11.547 9.76741C11.5405 9.77313 11.5326 9.77956 11.5235 9.78636C11.5153 9.79244 11.5077 9.79758 11.501 9.80185C10.1109 9.85388 9 10.9972 9 12.4C9 13.6467 9.88773 14.6482 11 14.9234V16.1C11 16.6523 11.4477 17.1 12 17.1H16C16.5523 17.1 17 16.6523 17 16.1V14.9234C18.1123 14.6482 19 13.6467 19 12.4ZM13.4285 10.4472C13.5116 10.1774 13.7521 10 14 10C14.248 10 14.4884 10.1774 14.5716 10.4472C14.7075 10.8882 15.0377 11.209 15.2841 11.392C15.5297 11.5745 15.9346 11.8 16.4 11.8C16.7314 11.8 17 12.0686 17 12.4C17 12.7721 16.6098 13.0739 16.2493 12.9812C15.9499 12.9041 15.6317 12.9698 15.3873 13.1593C15.143 13.3487 15 13.6404 15 13.9496V15.1H13V13.9496C13 13.6404 12.857 13.3487 12.6127 13.1593C12.3683 12.9698 12.0501 12.9041 11.7507 12.9812C11.3902 13.0739 11 12.7721 11 12.4C11 12.0686 11.2686 11.8 11.6 11.8C12.0654 11.8 12.4703 11.5744 12.716 11.392C12.9623 11.209 13.2926 10.8882 13.4285 10.4472Z"
                        fill="#2D15FF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.93417 1H17.0658C17.9523 0.999953 18.7161 0.99991 19.3278 1.08215C19.9833 1.17028 20.6117 1.36902 21.1213 1.87868C21.631 2.38835 21.8297 3.0167 21.9179 3.67221C22.0001 4.28388 22.0001 5.0477 22 5.9342V18.0658C22.0001 18.9523 22.0001 19.7161 21.9179 20.3278C21.8297 20.9833 21.631 21.6117 21.1213 22.1213C20.6117 22.631 19.9833 22.8297 19.3278 22.9179C18.7161 23.0001 17.9523 23.0001 17.0658 23H6.9342C6.0477 23.0001 5.28388 23.0001 4.67221 22.9179C4.0167 22.8297 3.38835 22.631 2.87868 22.1213C2.36902 21.6117 2.17028 20.9833 2.08215 20.3278C1.99991 19.7161 1.99995 18.9523 2 18.0658V5.93417C1.99995 5.04769 1.99991 4.28387 2.08215 3.67221C2.17028 3.0167 2.36902 2.38835 2.87868 1.87868C3.38835 1.36902 4.0167 1.17028 4.67221 1.08215C5.28387 0.99991 6.04769 0.999953 6.93417 1ZM4.93871 3.06431C4.50497 3.12263 4.36902 3.21677 4.2929 3.2929C4.21677 3.36902 4.12263 3.50497 4.06431 3.93871C4.00213 4.40122 4 5.02893 4 6V18C4 18.9711 4.00213 19.5988 4.06431 20.0613C4.12263 20.495 4.21677 20.631 4.2929 20.7071C4.36902 20.7832 4.50497 20.8774 4.93871 20.9357C5.21873 20.9733 5.55932 20.989 6 20.9955V3.00455C5.55932 3.01103 5.21873 3.02666 4.93871 3.06431ZM17 21H8V3H17C17.9711 3 18.5988 3.00213 19.0613 3.06431C19.495 3.12263 19.631 3.21677 19.7071 3.2929C19.7832 3.36902 19.8774 3.50497 19.9357 3.93871C19.9979 4.40122 20 5.02893 20 6V18C20 18.9711 19.9979 19.5988 19.9357 20.0613C19.8774 20.495 19.7832 20.631 19.7071 20.7071C19.631 20.7832 19.495 20.8774 19.0613 20.9357C18.5988 20.9979 17.9711 21 17 21Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                  <p className="flex md:text-desktop-body-2 text-mobile-body-2 text-start text-black font-semibold items-center">
                    Share & incorporate recipes from renowned International
                    chefs
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-10 h-10 p-2 bg-navy-blue-50">
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
                        d="M9.69267 1H14.3069C15.0799 0.999965 15.7463 0.999934 16.2855 1.06367C16.86 1.13157 17.4187 1.28353 17.9029 1.68097C18.0548 1.80564 18.1941 1.94492 18.3188 2.09683C18.7162 2.58111 18.8682 3.13977 18.9361 3.71426C18.9471 3.80723 18.9562 3.90399 18.9637 4.00442C19.3414 4.01035 19.6811 4.02422 19.9799 4.05665C20.5304 4.1164 21.0723 4.24965 21.547 4.60971C21.8647 4.85065 22.1312 5.1525 22.3308 5.49761C22.6292 6.01336 22.6942 6.56755 22.6852 7.12122C22.6767 7.64672 22.5964 8.28927 22.5024 9.0403L22.3589 10.1886C22.291 10.7325 22.2319 11.2048 22.1481 11.5909C22.0588 12.0019 21.9249 12.4017 21.6582 12.7675C21.4008 13.1205 21.0695 13.413 20.6873 13.6246C20.2913 13.8438 19.8779 13.9271 19.459 13.9647C19.1353 13.9938 18.7558 13.9989 18.3262 13.9998C17.3394 16.0773 15.3594 17.5916 12.9998 17.9291V21H16.9998V23H6.99976V21H10.9998V17.9291C8.64014 17.5916 6.66014 16.0773 5.6733 13.9998C5.24373 13.9989 4.86418 13.9938 4.54049 13.9647C4.12158 13.9271 3.70824 13.8438 3.31223 13.6246C2.93004 13.413 2.59868 13.1205 2.34131 12.7675C2.07462 12.4017 1.94074 12.0019 1.85145 11.5909C1.76758 11.2048 1.70856 10.7325 1.6406 10.1886L1.49706 9.04032C1.40315 8.28928 1.32281 7.64672 1.31426 7.12122C1.30527 6.56755 1.37028 6.01336 1.66868 5.49761C1.86835 5.1525 2.13482 4.85065 2.4525 4.60971C2.92725 4.24965 3.4691 4.1164 4.01961 4.05665C4.31843 4.02422 4.65814 4.01035 5.03581 4.00442C5.04334 3.90399 5.05243 3.80723 5.06342 3.71426C5.13133 3.13977 5.28329 2.58111 5.68073 2.09683C5.80539 1.94492 5.94468 1.80564 6.09658 1.68097C6.58086 1.28353 7.13953 1.13157 7.71402 1.06367C8.25319 0.999934 8.91963 0.999965 9.69267 1ZM18.93 11.9922C19.0618 11.9881 19.1767 11.982 19.2801 11.9727C19.5579 11.9478 19.6625 11.9059 19.7185 11.8749C19.8459 11.8043 19.9564 11.7068 20.0422 11.5892C20.0799 11.5374 20.1344 11.4389 20.1936 11.1663C20.2562 10.8785 20.3049 10.4963 20.3795 9.89914L20.5113 8.84508C20.6136 8.02653 20.6789 7.49266 20.6855 7.08872C20.6918 6.70068 20.6382 6.56568 20.5997 6.49921C20.5331 6.38417 20.4443 6.28355 20.3384 6.20324C20.2772 6.15683 20.1499 6.08685 19.7641 6.04498C19.5539 6.02216 19.3063 6.01091 18.9998 6.00536L18.9998 11C18.9998 11.3368 18.976 11.6681 18.93 11.9922ZM4.99976 11C4.99976 11.3368 5.02355 11.6681 5.06953 11.9922C4.93773 11.9881 4.82283 11.982 4.71939 11.9727C4.44157 11.9478 4.33702 11.9059 4.28099 11.8749C4.1536 11.8043 4.04314 11.7068 3.95735 11.5892C3.91962 11.5374 3.86508 11.4389 3.80586 11.1663C3.74335 10.8785 3.69462 10.4963 3.61998 9.89914L3.48822 8.84508C3.3859 8.02653 3.32057 7.49266 3.314 7.08872C3.30769 6.70068 3.36135 6.56568 3.39981 6.49921C3.46637 6.38417 3.55519 6.28355 3.66108 6.20324C3.72227 6.15683 3.84958 6.08685 4.2354 6.04498C4.44565 6.02216 4.69322 6.01091 4.99976 6.00536V11ZM7.94879 3.04984C7.56312 3.09543 7.43426 3.17046 7.36537 3.22699C7.31473 3.26855 7.2683 3.31498 7.22675 3.36561C7.17021 3.4345 7.09518 3.56336 7.04959 3.94904C7.0014 4.35678 6.99976 4.90364 6.99976 5.75001V11C6.99976 13.7614 9.23834 16 11.9998 16C14.7612 16 16.9998 13.7614 16.9998 11V5.75001C16.9998 4.90364 16.9981 4.35678 16.9499 3.94904C16.9043 3.56336 16.8293 3.4345 16.7728 3.36561C16.7312 3.31498 16.6848 3.26855 16.6342 3.22699C16.5653 3.17046 16.4364 3.09543 16.0507 3.04984C15.643 3.00164 15.0961 3.00001 14.2498 3.00001H9.74976C8.90339 3.00001 8.35654 3.00164 7.94879 3.04984Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                  <p className="flex md:text-desktop-body-2 text-mobile-body-2 text-start text-black font-semibold items-center">
                    Achieve accreditation endorsed by CrescentRating
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-white py-8 px-6 gap-7">
              <div className="md:text-desktop-heading-6 text-mobile-heading-6 text-center text-black font-bold ">
                For Hotels & Restaurants
              </div>
              <div className="max-w-[425px] w-full flex flex-col gap-7 mx-auto">
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-10 h-10 p-2 bg-navy-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM11.1696 3.47296C11.5303 3.0915 11.8113 3 12 3C12.1887 3 12.4697 3.0915 12.8304 3.47296C13.1932 3.85653 13.5659 4.46523 13.9 5.30032C14.4813 6.75372 14.8861 8.74349 14.9794 11H9.02056C9.11393 8.74349 9.51869 6.75372 10.1 5.30032C10.4341 4.46523 10.8068 3.85653 11.1696 3.47296ZM7.019 11C7.11321 8.53283 7.55341 6.28175 8.2431 4.55754C8.371 4.23779 8.50959 3.93083 8.65909 3.64049C5.6385 4.84877 3.42561 7.64677 3.05493 11H7.019ZM3.05493 13H7.019C7.11321 15.4672 7.55341 17.7182 8.2431 19.4425C8.371 19.7622 8.50959 20.0692 8.65909 20.3595C5.6385 19.1512 3.42561 16.3532 3.05493 13ZM9.02056 13H14.9794C14.8861 15.2565 14.4813 17.2463 13.9 18.6997C13.5659 19.5348 13.1932 20.1435 12.8304 20.527C12.4697 20.9085 12.1887 21 12 21C11.8113 21 11.5303 20.9085 11.1696 20.527C10.8068 20.1435 10.4341 19.5348 10.1 18.6997C9.51869 17.2463 9.11393 15.2565 9.02056 13ZM16.981 13C16.8868 15.4672 16.4466 17.7182 15.7569 19.4425C15.629 19.7622 15.4904 20.0692 15.3409 20.3595C18.3615 19.1512 20.5744 16.3532 20.9451 13H16.981ZM20.9451 11C20.5744 7.64677 18.3615 4.84877 15.3409 3.64049C15.4904 3.93083 15.629 4.23779 15.7569 4.55754C16.4466 6.28175 16.8868 8.53283 16.981 11H20.9451Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                  <p className="flex md:text-desktop-body-2 text-mobile-body-2 text-start text-black font-semibold items-center">
                    Maximize your reach to Muslim travelers globally
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-10 h-10 p-2 bg-navy-blue-50">
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
                        d="M19 12.4C19 10.9972 17.8891 9.85389 16.499 9.80185C16.4923 9.79759 16.4847 9.79246 16.4766 9.78638C16.4674 9.7796 16.4596 9.77318 16.4531 9.76747C16.1118 8.78992 15.1797 8.00001 14 8.00001C12.8203 8.00001 11.8883 8.78989 11.547 9.76741C11.5405 9.77313 11.5326 9.77956 11.5235 9.78636C11.5153 9.79244 11.5077 9.79758 11.501 9.80185C10.1109 9.85388 9 10.9972 9 12.4C9 13.6467 9.88773 14.6482 11 14.9234V16.1C11 16.6523 11.4477 17.1 12 17.1H16C16.5523 17.1 17 16.6523 17 16.1V14.9234C18.1123 14.6482 19 13.6467 19 12.4ZM13.4285 10.4472C13.5116 10.1774 13.7521 10 14 10C14.248 10 14.4884 10.1774 14.5716 10.4472C14.7075 10.8882 15.0377 11.209 15.2841 11.392C15.5297 11.5745 15.9346 11.8 16.4 11.8C16.7314 11.8 17 12.0686 17 12.4C17 12.7721 16.6098 13.0739 16.2493 12.9812C15.9499 12.9041 15.6317 12.9698 15.3873 13.1593C15.143 13.3487 15 13.6404 15 13.9496V15.1H13V13.9496C13 13.6404 12.857 13.3487 12.6127 13.1593C12.3683 12.9698 12.0501 12.9041 11.7507 12.9812C11.3902 13.0739 11 12.7721 11 12.4C11 12.0686 11.2686 11.8 11.6 11.8C12.0654 11.8 12.4703 11.5744 12.716 11.392C12.9623 11.209 13.2926 10.8882 13.4285 10.4472Z"
                        fill="#2D15FF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.93417 1H17.0658C17.9523 0.999953 18.7161 0.99991 19.3278 1.08215C19.9833 1.17028 20.6117 1.36902 21.1213 1.87868C21.631 2.38835 21.8297 3.0167 21.9179 3.67221C22.0001 4.28388 22.0001 5.0477 22 5.9342V18.0658C22.0001 18.9523 22.0001 19.7161 21.9179 20.3278C21.8297 20.9833 21.631 21.6117 21.1213 22.1213C20.6117 22.631 19.9833 22.8297 19.3278 22.9179C18.7161 23.0001 17.9523 23.0001 17.0658 23H6.9342C6.0477 23.0001 5.28388 23.0001 4.67221 22.9179C4.0167 22.8297 3.38835 22.631 2.87868 22.1213C2.36902 21.6117 2.17028 20.9833 2.08215 20.3278C1.99991 19.7161 1.99995 18.9523 2 18.0658V5.93417C1.99995 5.04769 1.99991 4.28387 2.08215 3.67221C2.17028 3.0167 2.36902 2.38835 2.87868 1.87868C3.38835 1.36902 4.0167 1.17028 4.67221 1.08215C5.28387 0.99991 6.04769 0.999953 6.93417 1ZM4.93871 3.06431C4.50497 3.12263 4.36902 3.21677 4.2929 3.2929C4.21677 3.36902 4.12263 3.50497 4.06431 3.93871C4.00213 4.40122 4 5.02893 4 6V18C4 18.9711 4.00213 19.5988 4.06431 20.0613C4.12263 20.495 4.21677 20.631 4.2929 20.7071C4.36902 20.7832 4.50497 20.8774 4.93871 20.9357C5.21873 20.9733 5.55932 20.989 6 20.9955V3.00455C5.55932 3.01103 5.21873 3.02666 4.93871 3.06431ZM17 21H8V3H17C17.9711 3 18.5988 3.00213 19.0613 3.06431C19.495 3.12263 19.631 3.21677 19.7071 3.2929C19.7832 3.36902 19.8774 3.50497 19.9357 3.93871C19.9979 4.40122 20 5.02893 20 6V18C20 18.9711 19.9979 19.5988 19.9357 20.0613C19.8774 20.495 19.7832 20.631 19.7071 20.7071C19.631 20.7832 19.495 20.8774 19.0613 20.9357C18.5988 20.9979 17.9711 21 17 21Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                  <p className="flex md:text-desktop-body-2 text-mobile-body-2 text-start text-black font-semibold items-center">
                    Equip your Chefs with the right knowledge to better cater to
                    Muslim diners
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-10 h-10 p-2 bg-navy-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9998 3C11.4476 3 10.9998 3.44772 10.9998 4C10.9998 4.55228 11.4476 5 11.9998 5C12.5521 5 12.9998 4.55228 12.9998 4C12.9998 3.44772 12.5521 3 11.9998 3ZM8.99985 4C8.99985 2.34315 10.343 1 11.9998 1C13.6567 1 14.9998 2.34315 14.9998 4C14.9998 5.65685 13.6567 7 11.9998 7C10.343 7 8.99985 5.65685 8.99985 4ZM7.62532 6.53488C6.1293 7.73413 5.13852 9.53138 5.01332 11.5616L3.01712 11.4384C3.17835 8.82382 4.45568 6.51247 6.37438 4.97438L7.62532 6.53488ZM18.9864 11.5616C18.8612 9.53138 17.8704 7.73413 16.3744 6.53488L17.6253 4.97438C19.544 6.51247 20.8213 8.82382 20.9826 11.4384L18.9864 11.5616ZM8.7915 10.0996C9.33068 8.86559 10.5631 8 11.9998 8C13.4366 8 14.669 8.86559 15.2082 10.0996L13.3755 10.9004C13.1431 10.3685 12.6134 10 11.9998 10C11.3863 10 10.8566 10.3685 10.6242 10.9004L8.7915 10.0996ZM4.49985 15C3.94756 15 3.49985 15.4477 3.49985 16C3.49985 16.5523 3.94756 17 4.49985 17C5.05213 17 5.49985 16.5523 5.49985 16C5.49985 15.4477 5.05213 15 4.49985 15ZM1.49985 16C1.49985 14.3431 2.84299 13 4.49985 13C6.1567 13 7.49985 14.3431 7.49985 16C7.49985 17.6569 6.1567 19 4.49985 19C2.84299 19 1.49985 17.6569 1.49985 16ZM19.4998 15C18.9476 15 18.4998 15.4477 18.4998 16C18.4998 16.5523 18.9476 17 19.4998 17C20.0521 17 20.4998 16.5523 20.4998 16C20.4998 15.4477 20.0521 15 19.4998 15ZM16.4998 16C16.4998 14.3431 17.843 13 19.4998 13C21.1567 13 22.4998 14.3431 22.4998 16C22.4998 17.6569 21.1567 19 19.4998 19C17.843 19 16.4998 17.6569 16.4998 16ZM8.50057 18.0641C9.52916 18.6591 10.7232 19 11.9998 19C13.2765 19 14.4705 18.6591 15.4991 18.0641L16.5006 19.7953C15.1758 20.5617 13.6375 21 11.9998 21C10.3622 21 8.82392 20.5617 7.49912 19.7953L8.50057 18.0641ZM1.2915 22.0996C1.83068 20.8656 3.06306 20 4.49984 20C5.93661 20 7.16899 20.8656 7.70817 22.0996L5.87546 22.9004C5.64308 22.3685 5.11338 22 4.49984 22C3.88629 22 3.35659 22.3685 3.12421 22.9004L1.2915 22.0996ZM16.2915 22.0996C16.8307 20.8656 18.0631 20 19.4998 20C20.9366 20 22.169 20.8656 22.7082 22.0996L20.8755 22.9004C20.6431 22.3685 20.1134 22 19.4998 22C18.8863 22 18.3566 22.3685 18.1242 22.9004L16.2915 22.0996Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                  <p className="flex md:text-desktop-body-2 text-mobile-body-2 text-start text-black font-semibold items-center">
                    Strengthen customer relations & loyalty with Muslim diners
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-10 h-10 p-2 bg-navy-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.4746 2.816C20.2762 2.702 21.0891 2.74119 21.7973 3.27112C22.5055 3.80104 22.7725 4.56985 22.8893 5.37105C23.0001 6.13089 23.0001 7.11013 23 8.26941V13.731C23.0001 14.8903 23.0001 15.8695 22.8893 16.6293C22.7725 17.4305 22.5055 18.1994 21.7973 18.7293C21.0891 19.2592 20.2762 19.2984 19.4746 19.1844C18.7143 19.0763 17.7749 18.7999 16.6628 18.4728L12.2553 17.1765L12.4501 18.1504C12.8484 20.1421 11.325 22.0003 9.29389 22.0003C7.77615 22.0003 6.46465 20.9401 6.14664 19.456L5.1594 14.8489C4.95309 14.7005 4.76354 14.5223 4.59797 14.301C4.25395 13.8412 4.11765 13.3341 4.05654 12.8091C3.99993 12.3228 3.99996 11.731 4 11.0541V10.9463C3.99996 10.2694 3.99993 9.67763 4.05654 9.19128C4.11765 8.66627 4.25395 8.15917 4.59797 7.69938C4.94168 7.24004 5.38872 6.96628 5.87449 6.75961C6.32412 6.56832 6.89035 6.40182 7.53743 6.21154L16.6628 3.52762C17.7749 3.20046 18.7143 2.92411 19.4746 2.816ZM19.7561 4.79608C19.1576 4.8812 18.3592 5.11338 17.1535 5.468L8.15351 8.11505C7.43947 8.32506 6.9869 8.45982 6.65747 8.59998C6.35222 8.72984 6.25427 8.82415 6.19933 8.89758C6.14471 8.97058 6.08168 9.09135 6.04313 9.42252C6.00158 9.77948 6 10.2536 6 11.0002C6 11.7468 6.00158 12.2209 6.04313 12.5779C6.08168 12.909 6.14471 13.0298 6.19933 13.1028C6.25427 13.1763 6.35222 13.2706 6.65747 13.4004C6.9869 13.5406 7.43947 13.6753 8.15351 13.8853L17.1535 16.5324C18.3592 16.887 19.1576 17.1192 19.7561 17.2043C20.33 17.2859 20.5055 17.198 20.5991 17.1279C20.6927 17.0579 20.8266 16.9144 20.9102 16.3408C20.9975 15.7425 21 14.9111 21 13.6543V8.34609C21 7.08934 20.9975 6.25785 20.9102 5.65961C20.8266 5.08604 20.6927 4.94249 20.5991 4.87247C20.5055 4.80245 20.33 4.71447 19.7561 4.79608ZM7.3974 15.7477L8.10225 19.037C8.22266 19.5989 8.71923 20.0003 9.29389 20.0003C10.0629 20.0003 10.6397 19.2967 10.4889 18.5426L10.0882 16.5391L7.53744 15.7889C7.49033 15.775 7.44364 15.7613 7.3974 15.7477Z"
                        fill="#2D15FF"
                      />
                      <path
                        d="M1 13.5002V8.50024H3V13.5002H1Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                  <p className="flex md:text-desktop-body-2 text-mobile-body-2 text-start text-black font-semibold items-center">
                    Generate brand exposure & increase awareness
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto gap-2 items-center">
            <div className="md:text-desktop-body-2 text-mobile-body-2 text-center text-[#797979]">
              Kindly click the button below to register your interest
            </div>
            <Dialog modal={false}>
              <form>
                <DialogTrigger asChild>
                  <Button className="md:w-[280px] w-full md:h-14 h-8 inline-block px-10 text-white text-center font-semibold bg-primary-cr-600 hover:bg-white hover:text-primary-cr-600 border-gray-500/20 rounded-none">
                    Enquire Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[75vh] sm:max-w-[425px] md:max-w-[768px] lg:max-w-[850px] overflow-scroll">
                  <DialogHeader className="gap-1 flex-col">
                    <DialogDescription className="text-center">
                      Registration form
                    </DialogDescription>
                    <DialogTitle className="text-center">
                      <ImageWithFallback
                        src="/image/crescentrating-academy/sector-immersion/halalchefworld.webp"
                        width={280}
                        height={144}
                        sizes="100vw"
                        alt="Halal Chef World"
                        className="mx-auto"
                      />
                    </DialogTitle>
                  </DialogHeader>
                  <div className="border border-[#D0D0D7] p-6">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-2">
                      <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <Input
                          className="border border-[#D0D0D7]"
                          id="name-1"
                          name="name"
                          placeholder="Enter your Name"
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="email-1">Email</Label>
                        <Input
                          className="border border-[#D0D0D7]"
                          id="email-1"
                          name="email"
                          type="email"
                          placeholder="Enter your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 py-2">
                      <div className="grid gap-3">
                        <Label htmlFor="company-1">Company</Label>
                        <Input
                          className="border border-[#D0D0D7]"
                          id="company-1"
                          name="company"
                          placeholder="Enter your Company"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-2">
                      <div className="grid gap-3">
                        <Label htmlFor="location-1">Location</Label>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Button
                              className="w-full"
                              variant="outline"
                              type="button"
                            >
                              {selectedLocation}
                              <DropdownMenuShortcut>
                                <ChevronDownIcon className="w-4 h-4" />
                              </DropdownMenuShortcut>
                            </Button>
                          </DropdownMenuTrigger>
                          <input
                            type="hidden"
                            name="location"
                            value={
                              selectedLocation ===
                              "Select Your Training Location"
                                ? ""
                                : selectedLocation
                            }
                            required
                          />
                          <DropdownMenuContent className="w-[54vh]">
                            {locations.map((loc) => (
                              <DropdownMenuItem
                                key={loc}
                                className="hover:bg-gray-100"
                                onClick={() => setSelectedLocation(loc)}
                              >
                                {loc}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="participant-1">
                          No. of Participant
                        </Label>
                        <Input
                          id="participant-1"
                          name="participants"
                          type="number"
                          min={1}
                          max={20}
                          defaultValue={1}
                        />
                      </div>
                    </div>
                    <Separator
                      className="my-6"
                      style={{ backgroundColor: "#DEDEDE", height: "1px" }}
                    />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <div className="grid gap-3">
                        <Label htmlFor="date-from">Training Date From</Label>
                        <Popover open={openFrom} onOpenChange={setOpenFrom}>
                          <PopoverTrigger>
                            <Button
                              variant="outline"
                              id="date-from"
                              className="w-full justify-between font-normal"
                              type="button"
                              onClick={() => setOpenFrom((prev) => !prev)}
                            >
                              {dateFrom
                                ? dateFrom.toLocaleDateString()
                                : "Select date"}
                              <CalendarIcon />
                            </Button>
                          </PopoverTrigger>

                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                            onInteractOutside={(e) => e.preventDefault()} // ✅ Keeps popover clickable
                          >
                            <Calendar
                              className="w-[53vh] h-[50vh] overflow-y-scroll"
                              mode="single"
                              selected={dateFrom}
                              captionLayout="dropdown"
                              disabled={(date) => date < today}
                              onSelect={(selectedDate) => {
                                setDateFrom(selectedDate);
                                if (
                                  dateTo &&
                                  selectedDate &&
                                  dateTo < selectedDate
                                ) {
                                  setDateTo(undefined);
                                }
                                setOpenFrom(false);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="date-to">Training Date To</Label>
                        <Popover open={openTo} onOpenChange={setOpenTo}>
                          <PopoverTrigger>
                            <Button
                              variant="outline"
                              id="date-to"
                              className="w-full justify-between font-normal"
                              type="button"
                              onClick={() => setOpenTo((prev) => !prev)}
                            >
                              {dateTo
                                ? dateTo.toLocaleDateString()
                                : "Select date"}
                              <CalendarIcon />
                            </Button>
                          </PopoverTrigger>

                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                            onInteractOutside={(e) => e.preventDefault()}
                          >
                            <Calendar
                              className="w-[53vh] h-[50vh] overflow-y-scroll"
                              mode="single"
                              selected={dateTo}
                              captionLayout="dropdown"
                              disabled={(date) => {
                                if (dateFrom) {
                                  return date < dateFrom;
                                }
                                return date < today;
                              }}
                              onSelect={(selectedDate) => {
                                setDateTo(selectedDate);
                                setOpenTo(false);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 py-2">
                      <div className="grid gap-3">
                        <Label htmlFor="proposed-title">
                          Proposed Training Program Title
                        </Label>
                        <textarea
                          className="h-16 rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="proposed-title"
                          name="proposedTitle"
                          placeholder="Enter your Proposed Training Program Title"
                          rows={2}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="target-participants">
                          Target Participants
                        </Label>
                        <textarea
                          className="h-16 rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="target-participants"
                          name="targetParticipants"
                          placeholder="Describe your Target Participants"
                          rows={6}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="training-objectives">
                          Training Objectives
                        </Label>
                        <textarea
                          className="h-16 rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="training-objectives"
                          name="trainingObjectives"
                          placeholder="Enter your Training Objectives here"
                          rows={2}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="training-activities">
                          Training Activities & Requirements
                        </Label>
                        <textarea
                          className="h-16 rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="training-activities"
                          name="trainingActivities"
                          placeholder="Enter your Training Activities & Requirements"
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 py-2">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="terms-conditions"
                          name="termsConditions"
                          value="terms-conditions"
                        />
                        <Label htmlFor="terms-conditions">
                          I have read and agree to CrescentRating Privacy Policy
                          & Terms and Conditions
                        </Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="subscribes"
                          name="subscribes"
                          value="subscribes"
                        />
                        <Label htmlFor="subscribes">
                          I hereby give consent to CrescentRating to contact me
                          for future marketing purposes.
                        </Label>
                      </div>
                    </div>

                    <DialogFooter className="flex w-[100vh] pt-3">
                      <Button
                        className="w-full bg-primary-cr-500"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </DialogFooter>
                  </div>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </div>
      </section>
      <section className="w-full flex max-w-[1440px] justify-between items-center flex-col relative gap-12">
        <div className="max-w-[1216px] py-10 sm:py-20 w-full lg:px-0 sm:px-20 px-10 flex flex-col justify-center items-center bg-white gap-2.5">
          <div className="inline-flex flex-col max-w-[700px] w-full justify-start items-center gap-2">
            <div className="inline-flex flex-col justify-start items-center gap-2">
              <p className="md:text-desktop-heading-5 text-mobile-heading-5 font-bold bg-clip-text text-black text-center">
                Program Schedule
              </p>
            </div>
            <div className="md:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500">
              Explore the structured 3-day program designed to elevate halal
              culinary skills.
            </div>
          </div>
          <div className="px-3 py-2.5 bg-white grid grid-cols-1 lg:grid-cols-3 justify-start items-start gap-3 overflow-hidden">
            <div className="flex-1 px-3 py-6 min-h-[316px] border border-[#E3E2E6] inline-flex flex-col items-center gap-4 overflow-hidden">
              <div className="w-20 h-20 px-3 py-0.5 bg-navy-blue-50 rounded-xl flex flex-col justify-start items-center">
                <div className="text-center justify-start text-black md:text-desktop-body-2 text-mobile-body-2 leading-normal">
                  Day
                </div>
                <div className="w-12 h-12 text-center text-primary-cr-600 justify-start md:text-desktop-heading-5 text-mobile-heading-5 font-bold leading-[57.60px]">
                  01
                </div>
              </div>
              <div className="self-stretch text-center justify-start text-black md:text-desktop-body-1 text-mobile-body-1 font-semibold leading-loose">
                CLASSROOM COMPETENCY TRAINING
              </div>
              <div className="self-stretch text-center justify-start text-black md:text-desktop-body-2 text-mobile-body-2  leading-normal">
                Understanding Halal dining gourmet from Halal dining
                preparations, meat, substitutions, storage to practical
                applications.
                <br />
              </div>
            </div>
            <div className="flex-1 px-3 py-6 min-h-[316px] border border-[#E3E2E6] inline-flex flex-col items-center gap-4 overflow-hidden">
              <div className="w-20 h-20 px-3 py-0.5 bg-navy-blue-50 rounded-xl flex flex-col justify-start items-center">
                <div className="text-center justify-start text-black md:text-desktop-body-2 text-mobile-body-2 leading-normal">
                  Day
                </div>
                <div className="w-12 h-12 text-center text-primary-cr-600 justify-start md:text-desktop-heading-5 text-mobile-heading-5 font-bold leading-[57.60px]">
                  02
                </div>
              </div>
              <div className="self-stretch text-center justify-start text-black md:text-desktop-body-1 text-mobile-body-1 font-semibold leading-loose">
                KITCHEN COOK-OFF
              </div>
              <div className="self-stretch text-center justify-start text-black md:text-desktop-body-2 text-mobile-body-2  leading-normal">
                Chefs to prepare a 3 course Halal gourmet menu and present to a
                panel of judges
                <br />
              </div>
            </div>
            <div className="flex-1 px-3 py-6 min-h-[316px] border border-[#E3E2E6] inline-flex flex-col items-center gap-4 overflow-hidden">
              <div className="w-20 h-20 px-3 py-0.5 bg-navy-blue-50 rounded-xl flex flex-col justify-start items-center">
                <div className="text-center justify-start text-black md:text-desktop-body-2 text-mobile-body-2 leading-normal">
                  Day
                </div>
                <div className="w-12 h-12 text-center text-primary-cr-600 justify-start md:text-desktop-heading-5 text-mobile-heading-5 font-bold leading-[57.60px]">
                  03
                </div>
              </div>
              <div className="self-stretch text-center justify-start text-black md:text-desktop-body-1 text-mobile-body-1 font-semibold leading-loose">
                GALA DINNER
              </div>
              <div className="self-stretch text-center justify-start text-black md:text-desktop-body-2 text-mobile-body-2  leading-normal">
                Gala dinner with media and industry holders. Presentation of
                accreditation and announcement of winners followed by 3 course
                Halal dinner by invited Chefs
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1216px] w-full py-10 xl:px-0 lg:px-4 sm:px-20 px-10 sm:py-20 flex lg:flex-row flex-col justify-center items-center bg-white lg:gap-8 sm:gap-12 gap-6">
          <div className="max-w-[600px] w-full flex-1 inline-flex flex-col justify-center items-start gap-2">
            <div className="self-stretch justify-start md:text-desktop-heading-2 text-mobile-heading-2 font-bold bg-clip-text text-black">
              The Training
            </div>
            <div className="self-stretch justify-start md:text-desktop-body-2 text-mobile-body-2 leading-normal text-[#69687A]">
              Watch how we’re shaping the future of halal dining through chef
              education, practical workshops, and global certification.
            </div>
          </div>
          <div className="w-[100vh] flex-1 inline-flex flex-col justify-center items-start gap-2">
            <iframe
              width="100%"
              height="400"
              style={{
                maxWidth: "700px",
                width: "100%",
                height: "400px",
              }}
              className="lg:max-w-[700px] md:max-w-[600px] max-w-[300px] w-full h-[300px] md:h-[380px] lg:h-[380px]"
              src={`https://www.youtube.com/embed/7YDgU3Fac-Y?si=e2tYakoJDFiBasV4`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="max-w-[1216px] w-full py-10 lg:px-0 sm:px-20 px-10 sm:py-20 flex flex-col justify-center items-center bg-white lg:gap-2.5 sm:gap-4 gap-6">
          <div className="max-w-[800px] w-full flex-1 inline-flex flex-col justify-center items-start gap-2">
            <div className="self-stretch text-center justify-start md:text-desktop-heading-5 text-mobile-heading-5 font-bold bg-clip-text text-black">
              Participant Profile
            </div>
            <div className="self-stretch text-center justify-start md:text-desktop-body-2 text-mobile-body-2 leading-normal text-[#69687A]">
              The HalalChefWorld program is tailored for professionals, whether
              they are Muslims or non-Muslims, who are:
            </div>
          </div>
          <div className="self-stretch px-4 xl:px-0 py-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start items-center gap-6 mx-auto">
            <div className="flex-1 min-h-[208px] self-stretch px-3 py-6 bg-[#FAF9FA] backdrop-blur-xl inline-flex flex-col justify-start items-center gap-5">
              <div className="p-2 bg-navy-blue-50 inline-flex justify-start items-center">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 5H3.5V10H21.5V8H23.5V19H21.5V17H3.5V19H1.5V5ZM3.5 15H21.5V12H3.5V15ZM4.5 7H8.5V9H4.5V7Z"
                      fill="#2D15FF"
                    />
                  </svg>
                </div>
              </div>
              <div className="self-stretch text-center justify-start text-black md:text-desktop-body-2 text-mobile-body-2 font-bold leading-normal">
                Associated with the hospitality-culinary industry
              </div>
            </div>
            <div className="flex-1 min-h-[208px] self-stretch px-3 py-6 bg-[#FAF9FA] backdrop-blur-xl inline-flex flex-col justify-start items-center gap-5">
              <div className="p-2 bg-navy-blue-50 inline-flex justify-start items-center">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.7885 2.38492C19.599 2.14201 19.3081 2 19 2C18.6919 2 18.4011 2.14201 18.2116 2.38492L17.0718 3.846L15.33 4.47849C15.0404 4.58365 14.8155 4.81642 14.7203 5.10942C14.6251 5.40243 14.6702 5.72296 14.8427 5.97825L15.8801 7.51374L15.9434 9.36572C15.9539 9.67362 16.1057 9.95949 16.355 10.1406C16.6042 10.3217 16.923 10.3778 17.2191 10.2926L19 9.78052L20.7809 10.2926C21.077 10.3778 21.3958 10.3217 21.6451 10.1406C21.8943 9.95949 22.0462 9.67362 22.0567 9.36572L22.12 7.51374L23.1573 5.97825C23.3298 5.72296 23.375 5.40243 23.2798 5.10942C23.1846 4.81642 22.9596 4.58365 22.67 4.47849L20.9283 3.846L19.7885 2.38492ZM18.4719 5.30288L19 4.62581L19.5282 5.30288C19.6438 5.45103 19.7987 5.56362 19.9753 5.62775L20.7825 5.92084L20.3018 6.63239C20.1966 6.78808 20.1374 6.97026 20.131 7.15804L20.1016 8.01625L19.2764 7.77894C19.0958 7.72702 18.9043 7.72702 18.7237 7.77894L17.8984 8.01625L17.8691 7.15804C17.8627 6.97026 17.8035 6.78808 17.6983 6.63239L17.2176 5.92084L18.0247 5.62775C18.2013 5.56362 18.3563 5.45103 18.4719 5.30288Z"
                      fill="#2D15FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5 10V11.0494C18.2244 11.5184 21.9816 15.2756 22.4506 20H23.5V22H1.5V20H2.54938C3.01844 15.2756 6.77558 11.5184 11.5 11.0494V10H13.5ZM4.56189 20C5.05399 16.0537 8.42038 13 12.5 13C16.5796 13 19.946 16.0537 20.4381 20H4.56189Z"
                      fill="#2D15FF"
                    />
                  </svg>
                </div>
              </div>
              <div className="self-stretch text-center justify-start text-black md:text-desktop-body-2 text-mobile-body-2 font-bold leading-normal">
                Keen to join the Halal food & beverage industry
              </div>
            </div>
            <div className="flex-1 min-h-[208px] self-stretch px-3 py-6 bg-[#FAF9FA] backdrop-blur-xl inline-flex flex-col justify-start items-center gap-5">
              <div className="p-2 bg-navy-blue-50 inline-flex justify-start items-center">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5 8C17.5 6.89543 18.3954 6 19.5 6H21.5C22.6046 6 23.5 6.89543 23.5 8V21C23.5 22.1046 22.6046 23 21.5 23H19.5C18.3954 23 17.5 22.1046 17.5 21V8ZM21.5 8H19.5V21H21.5V8ZM9.5 12C9.5 10.8954 10.3954 10 11.5 10H13.5C14.6046 10 15.5 10.8954 15.5 12V21C15.5 22.1046 14.6046 23 13.5 23H11.5C10.3954 23 9.5 22.1046 9.5 21V12ZM1.5 16.5C1.5 15.3954 2.39543 14.5 3.5 14.5H5.5C6.60457 14.5 7.5 15.3954 7.5 16.5V21C7.5 22.1046 6.60457 23 5.5 23H3.5C2.39543 23 1.5 22.1046 1.5 21V16.5ZM5.5 16.5H3.5V21H5.5V16.5ZM13.5 12H11.5V21H13.5V12Z"
                      fill="#2D15FF"
                    />
                    <path
                      d="M12.5 3H14.0858L10.5 6.58579L8.56066 4.64645C7.97487 4.06066 7.02513 4.06066 6.43934 4.64645L1.79289 9.29289L3.20711 10.7071L7.5 6.41421L9.43934 8.35355C10.0251 8.93934 10.9749 8.93934 11.5607 8.35355L15.5 4.41421V6H17.5V2C17.5 1.44772 17.0523 1 16.5 1H12.5V3Z"
                      fill="#2D15FF"
                    />
                  </svg>
                </div>
              </div>
              <div className="self-stretch text-center justify-start text-black md:text-desktop-body-2 text-mobile-body-2 font-bold leading-normal">
                Want to improve existing Halal production & other infrastructure
              </div>
            </div>
            <div className="flex-1 min-h-[208px] self-stretch px-3 py-6 bg-[#FAF9FA] backdrop-blur-xl inline-flex flex-col justify-start items-center gap-5">
              <div className="p-2 bg-navy-blue-50 inline-flex justify-start items-center">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.2929 3.20701C21.1311 3.04525 20.8689 3.04525 20.7071 3.20701L18.2071 5.70701C18.0453 5.86877 18.0453 6.13104 18.2071 6.2928C18.3689 6.45456 18.6311 6.45456 18.7929 6.2928L21.2929 3.7928C21.4547 3.63104 21.4547 3.36877 21.2929 3.20701ZM19.2929 1.7928C20.2357 0.84999 21.7643 0.849993 22.7071 1.7928C23.6499 2.73561 23.6499 4.26421 22.7071 5.20701L20.2071 7.70702C19.5165 8.39761 18.5116 8.58235 17.6529 8.26125L15.8199 10.0943C16.8729 11.4489 17.5 13.1512 17.5 14.9999C17.5 19.4182 13.9183 22.9999 9.5 22.9999C5.08172 22.9999 1.5 19.4182 1.5 14.9999C1.5 10.5816 5.08172 6.99991 9.5 6.99991C11.3487 6.99991 13.051 7.62699 14.4056 8.68005L16.2387 6.84703C15.9176 5.98828 16.1023 4.98339 16.7929 4.2928L19.2929 1.7928ZM9.5 8.99991C6.18629 8.99991 3.5 11.6862 3.5 14.9999C3.5 18.3136 6.18629 20.9999 9.5 20.9999C12.8137 20.9999 15.5 18.3136 15.5 14.9999C15.5 11.6862 12.8137 8.99991 9.5 8.99991ZM12 14.9999C12 13.6192 10.8807 12.4999 9.5 12.4999V10.4999C11.9853 10.4999 14 12.5146 14 14.9999H12ZM7 14.9999C7 16.3806 8.11929 17.4999 9.5 17.4999V19.4999C7.01472 19.4999 5 17.4852 5 14.9999H7Z"
                      fill="#2D15FF"
                    />
                  </svg>
                </div>
              </div>
              <div className="self-stretch text-center justify-start text-black md:text-desktop-body-2 text-mobile-body-2 font-bold leading-normal">
                From various levels, expertise and backgrounds who are keen to
                build & showcase their Halal gourmet competency skills
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

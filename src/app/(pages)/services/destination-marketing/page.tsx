"use client";
import { useState } from "react";

import {
  Button,
  CardBlogs,
  ImageWithFallback,
  PageHero,
} from "@/components/common";
import CardYoutubeEmbed from "@/components/common/card/cardYouTubeEmbed";
import {
  Carousel,
  CarouselContent,
  CarouselItemBlogs,
  CarouselItemYoutube,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from "@/components/ui/carouselCustom2";
import {
  Carousel as DefaultCarousel,
  CarouselContent as DefaultCarouselContent,
  CarouselItem as DefaultCarouselItem,
} from "@/components/ui/defaultCarousel";
import {
  crDestinationMarketingBlogs,
  crDestinationMarketingVideos,
} from "@/constants/dummyData";

export default function HalalMusimTravelMarketReports() {
  const [activeLang, setActiveLang] = useState("united-kingdom");

  const languages = [
    {
      key: "united-kingdom",
      label: "English",
      icon: "/image/destination-marketing/united-kingdom.svg",
    },
    {
      key: "bahasa-melayu",
      label: "Bahasa Melayu",
      icon: "/image/destination-marketing/bahasa-melayu.svg",
    },
    {
      key: "bahasa-indonesia",
      label: "Bahasa Indonesia",
      icon: "/image/destination-marketing/bahasa-indonesia.svg",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PageHero
        title="Destination Marketing"
        subtitle="Services"
        description="Strategic marketing solutions to help you connect meaningfully with the fast-growing global Muslim travel market."
        backgroundImage="/image/destination-marketing/hero-new.webp"
        variant="image"
        alignment="left"
      />
      <div className="pt-7 sm:pt-14 px-8 lg:px-16 w-full flex flex-col justify-center items-center bg-white">
        <div className="flex flex-col max-w-[600px] items-center gap-4">
          <h1 className="text-mobile-heading-3 lg:text-desktop-heading-3 text-center font-bold">
            Reach and Resonate with Muslim Travelers
          </h1>
          <p className="text-mobile-body-1 lg:text-desktop-body-1 text-center">
            We combine strategy and cultural insight to build stronger
            connections between your destination and Muslim travelers worldwide.
          </p>
        </div>
        <div className="max-w-[1440px] md:gap-12 gap-8 flex lg:flex-row flex-col py-3 md:py-20 px-6 lg:px-8 w-full">
          <div className="md:w-[65%] w-full self-stretch overflow-visible lg:pl-14 lg:pb-9 lg:pr-5  mx-auto">
            <ImageWithFallback
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-contain"
              priority={false}
              src="/image/destination-marketing/hijabi_1.webp"
              alt="Destination Marketing Hero Image"
            />
          </div>
          <div className="lg:w-[50%] w-full inline-flex flex-col justify-start items-center gap-12 mx-auto">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="p-2 bg-navy-blue-50 flex justify-start items-center">
                  <div
                    data-style="Outlined"
                    className="w-6 h-6 relative overflow-hidden"
                  >
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
                        d="M12.001 3C9.23953 3 7.00096 5.23858 7.00096 8V11C7.00096 11.2034 6.93891 11.402 6.8231 11.5693L3.41219 16.4952C3.22739 16.762 3.34193 17.1315 3.64527 17.2471L7.43836 18.6919L12.4892 16.3349C13.4545 15.8844 14.3493 15.2961 15.1454 14.5884L17.6981 12.3193L17.1788 11.5692C17.063 11.402 17.001 11.2034 17.001 11V8C17.001 5.23858 14.7624 3 12.001 3ZM18.8449 13.9759L16.4742 16.0832C15.5332 16.9196 14.4758 17.6149 13.335 18.1472L10.0423 19.6838L10.577 19.8875C11.4942 20.2369 12.5077 20.2368 13.4249 19.8875L20.356 17.247C20.6593 17.1315 20.7738 16.7621 20.5891 16.4952L18.8449 13.9759ZM7.37757 20.809L7.42294 20.9062L7.51726 20.8622L9.86507 21.7565C11.2408 22.2805 12.7611 22.2805 14.1369 21.7564L21.068 19.116C22.5845 18.5383 23.1572 16.6911 22.2334 15.3568L19.001 10.6876V8C19.001 4.13401 15.867 1 12.001 1C8.13496 1 5.00096 4.13401 5.00096 8V10.6876L1.76791 15.3566L2.57516 15.9156L1.76791 15.3566C0.843938 16.691 1.41661 18.5383 2.93333 19.1161L7.37757 20.809ZM8.50006 8C8.50006 6.067 10.0671 4.5 12.0001 4.5C13.9331 4.5 15.5001 6.067 15.5001 8V8.5C15.5001 10.433 13.9331 12 12.0001 12C10.0671 12 8.50006 10.433 8.50006 8.5V8ZM12.0001 6.5C11.1716 6.5 10.5001 7.17157 10.5001 8V8.5C10.5001 9.32843 11.1716 10 12.0001 10C12.8285 10 13.5001 9.32843 13.5001 8.5V8C13.5001 7.17157 12.8285 6.5 12.0001 6.5Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-black sm:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                    Targeted Muslim Visitor Market Segments
                  </div>
                  <div className="self-stretch justify-start text-[#69687A] sm:text-desktop-body-2 text-mobile-body-2 font-normal leading-normal">
                    Aligning destination attractions with Muslim traveler
                    preferences and values for better targeting.
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="p-2 bg-navy-blue-50 flex justify-start items-center">
                  <div
                    data-style="Outlined"
                    className="w-6 h-6 relative overflow-hidden"
                  >
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
                        d="M12.0097 3C10.3645 3 8.94794 4.16128 8.62528 5.77457L8.11534 8.32429L7.47176 8.64608C7.45327 8.62578 7.43411 8.60568 7.41423 8.5858C7.05101 8.22259 6.61374 8.09706 6.23053 8.04554C5.89062 7.99984 5.47849 7.99992 5.05442 8.00001H3.94561C3.52154 7.99992 3.10941 7.99984 2.76949 8.04554C2.38629 8.09706 1.94902 8.22259 1.5858 8.5858C1.22259 8.94902 1.09706 9.38629 1.04554 9.7695C0.999843 10.1094 0.999924 10.5215 1.00001 10.9456V18.0544C0.999924 18.4785 0.999843 18.8906 1.04554 19.2305C1.09706 19.6137 1.22259 20.051 1.5858 20.4142C1.94902 20.7774 2.38629 20.903 2.76949 20.9545C3.10939 21.0002 3.52149 21.0001 3.94554 21H5.05442C5.47847 21.0001 5.89064 21.0002 6.23053 20.9545C6.61374 20.903 7.05101 20.7774 7.41423 20.4142C7.4699 20.3586 7.51999 20.3011 7.56508 20.2424L9.68378 20.9487C9.78574 20.9827 9.89252 21 10 21H14.727C16.2395 21 17.4591 21 18.4317 20.8904C19.4374 20.777 20.3021 20.5359 21.0438 19.9668C21.3905 19.7008 21.7008 19.3905 21.9668 19.0438C22.5359 18.3021 22.777 17.4374 22.8904 16.4317C23 15.459 23 14.2395 23 12.7269V12.6124C23 11.8769 23.0001 11.2428 22.942 10.7282C22.8803 10.1807 22.7426 9.64615 22.3801 9.17375C22.2205 8.96575 22.0343 8.77956 21.8263 8.61996C21.3539 8.25747 20.8193 8.1197 20.2719 8.05798C19.7572 7.99996 19.1231 7.99999 18.3876 8.00002L15.2198 8.00002L15.3941 7.12833C15.8213 4.9926 14.1877 3 12.0097 3ZM6 10.935V18.065C5.99978 18.5238 5.99676 18.7823 5.97232 18.964L5.97132 18.9713L5.96404 18.9723C5.77385 18.9979 5.49969 19 5.00001 19H4.00001C3.50034 19 3.22618 18.9979 3.03599 18.9723L3.02871 18.9713L3.02771 18.964C3.00214 18.7738 3.00001 18.4997 3.00001 18V11C3.00001 10.5003 3.00214 10.2262 3.02771 10.036L3.02871 10.0287L3.03599 10.0277C3.22618 10.0021 3.50034 10 4.00001 10H5.00001C5.49969 10 5.77385 10.0021 5.96404 10.0277L5.97132 10.0287L5.97232 10.036C5.99676 10.2178 5.99978 10.4763 6 10.935ZM8 18.1814V18.2792L10.1623 19H14.6667C16.2537 19 17.3602 18.9985 18.2077 18.903C19.035 18.8097 19.4908 18.6375 19.8263 18.3801C20.0343 18.2205 20.2205 18.0343 20.3801 17.8263C20.6375 17.4907 20.8097 17.035 20.903 16.2076C20.9985 15.3602 21 14.2536 21 12.6667C21 11.8616 20.9985 11.3414 20.9546 10.9522C20.913 10.5831 20.8442 10.4575 20.7934 10.3913C20.7402 10.3219 20.6781 10.2599 20.6088 10.2067C20.5425 10.1559 20.4169 10.087 20.0478 10.0454C19.6586 10.0015 19.1385 10 18.3333 10H14C13.7004 10 13.4166 9.8657 13.2267 9.63401C13.0367 9.40233 12.9607 9.09768 13.0194 8.80391L13.433 6.7361C13.6126 5.83796 12.9256 5 12.0097 5C11.3178 5 10.7221 5.48836 10.5864 6.1668L9.98058 9.19611C9.92006 9.49871 9.72322 9.75642 9.44721 9.89442L8 10.618V10.8186C8.00004 10.8608 8.00003 10.9031 8.00002 10.9456V18.0544C8.00003 18.0969 8.00004 18.1393 8 18.1814Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-black sm:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                    Unique Positioning for Muslim Travelers
                  </div>
                  <div className="self-stretch justify-start text-[#69687A] sm:text-desktop-body-2 text-mobile-body-2 font-normal leading-normal">
                    Build Muslim-friendly brand awareness to attract travelers
                    from key target markets.
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="p-2 bg-navy-blue-50 flex justify-start items-center">
                  <div
                    data-style="Outlined"
                    className="w-6 h-6 relative overflow-hidden"
                  >
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
                        d="M12 1C7.02944 1 3 5.02944 3 10C3 13.5337 5.03656 16.5918 8 18.0645V19C8 21.2091 9.79086 23 12 23C14.2091 23 16 21.2091 16 19V18.0645C18.9634 16.5918 21 13.5337 21 10C21 5.02944 16.9706 1 12 1ZM5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10C19 13.5265 16.3923 16.4439 13 16.9291V12.3028L14.8321 9.55471L13.168 8.44531L12 10.1972L10.8321 8.44531L9.16797 9.55471L11 12.3028V16.9291C7.60772 16.4439 5 13.5265 5 10ZM14 18.777C13.3568 18.9229 12.6874 19 12 19C11.3126 19 10.6432 18.9229 10 18.777V19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19V18.777Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-black sm:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                    Marketing Plan for Target Audience
                  </div>
                  <div className="self-stretch justify-start text-[#69687A] sm:text-desktop-body-2 text-mobile-body-2 font-normal leading-normal">
                    Create a tailored marketing strategy to offer unforgettable
                    experiences and boost Muslim traveler spending.
                  </div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="p-2 bg-navy-blue-50 flex justify-start items-center">
                  <div
                    data-style="Outlined"
                    className="w-6 h-6 relative overflow-hidden"
                  >
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
                        d="M8 1V3.03425C8.85234 2.99997 9.82502 2.99998 10.9268 3H11V1H13V3H13.9842C14.7314 2.99999 15.401 2.99998 16 3.01447V1H18V3.17637C18.6791 3.29573 19.2866 3.50384 19.8356 3.88182C20.3377 4.22758 20.7724 4.66226 21.1182 5.16441C21.6047 5.87105 21.8098 6.67481 21.9064 7.60323C22 8.50237 22 9.62438 22 11.0158L22 11.2169C22.0004 12.3293 22.0007 13.1003 21.7745 13.8279C21.6841 14.1184 21.5675 14.4 21.4259 14.6693C21.0714 15.3438 20.526 15.8888 19.7392 16.6751L15.6751 20.7392C14.8888 21.526 14.3438 22.0714 13.6693 22.4259C13.4 22.5675 13.1184 22.6841 12.8279 22.7745C12.1003 23.0007 11.3293 23.0004 10.217 23L10.0158 23C8.62438 23 7.50237 23 6.60323 22.9064C5.67481 22.8098 4.87105 22.6047 4.16441 22.1182C3.66226 21.7724 3.22758 21.3377 2.88182 20.8356C2.39526 20.129 2.19019 19.3252 2.09356 18.3968C1.99997 17.4976 1.99999 16.3756 2 14.9843V11.9268C1.99997 10.1034 1.99995 8.63362 2.15537 7.47767C2.31672 6.27752 2.66191 5.26702 3.46447 4.46447C4.15821 3.77073 5.00733 3.41874 6 3.23182V1H8ZM6.74416 5.13753C5.7658 5.26907 5.2477 5.50966 4.87868 5.87868C4.50966 6.2477 4.26907 6.76579 4.13753 7.74416C4.00213 8.7513 4 10.0861 4 12V14.9289C4 16.3886 4.00127 17.4063 4.08281 18.1897C4.16254 18.9558 4.3102 19.3834 4.52909 19.7014C4.73655 20.0026 4.99736 20.2635 5.29865 20.4709C5.61656 20.6898 6.04423 20.8375 6.81028 20.9172C7.59373 20.9987 8.61141 21 10.0711 21C10.4444 21 10.7478 20.9992 11 20.9951V16C11 13.7909 12.7909 12 15 12H19.9951C19.9992 11.7478 20 11.4444 20 11.0711C20 9.61141 19.9987 8.59373 19.9172 7.81028C19.8375 7.04423 19.6898 6.61655 19.4709 6.29865C19.2635 5.99736 19.0026 5.73655 18.7014 5.52909C18.3834 5.3102 17.9558 5.16254 17.1897 5.08281C16.4063 5.00127 15.3886 5 13.9289 5H11C9.08611 5 7.7513 5.00213 6.74416 5.13753ZM19.4935 14H15C13.8954 14 13 14.8954 13 16V20.4935C13.2951 20.2819 13.6515 19.9343 14.364 19.2218L18.2218 15.364C18.9343 14.6515 19.2819 14.2951 19.4935 14Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-black sm:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                    Execute the Marketing Plan
                  </div>
                  <div className="self-stretch justify-start text-[#69687A] sm:text-desktop-body-2 text-mobile-body-2 font-normal leading-normal">
                    Implement engaging marketing initiatives to shape
                    perceptions and influence destination choices.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] px-5 md:px-28 py-3 md:py-20 w-full">
          <div className="mt-10 flex w-full flex-col justify-start gap-16 ">
            <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-8">
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold bg-clip-text text-black text-center">
                  Halal Travel Guides Tailored to Your Destination
                </p>
                <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-[#69687A] line-clamp-2">
                  We create customized halal travel guides that highlight your
                  destination’s Muslim-friendly offerings.
                </p>
              </div>
              <div className="flex flex-col w-full justify-center items-center gap-3">
                <div className="self-stretch inline-flex flex-col justify-center gap-8">
                  <div className="h-[805px] w-full">
                    <iframe
                      className="relative border-none w-full h-full left-0 top-0"
                      src="https://online.fliphtml5.com/mxvdc/wddl/"
                      seamless
                      scrolling="no"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
                <Button variant="primary" className="px-12 py-6 mt-7">
                  Discover More Halal Travel Guides
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-24 justify-center items-center bg-white md:pt-0 pt-10">
          <div className="max-w-[1440px] py-3 md:py-20 w-full items-center">
            <p className="px-5 md:px-28  lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
              Native Advertorial Content
            </p>
            <p className="px-5 max-w-[768px] sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 mx-auto">
              Research and development of unique content focused on various
              aspects of a destination. With informative posts, to keep the
              consumers and readers informed about new products, special offers
              and culture behind the destination targeted at specific consumers
              taking into consideration the nature of the campaign. All
              creatives and advertisements designed are carefully curated to
              expose consumers to content that is relevant to their needs
            </p>
            <div className="flex flex-row text-center justify-center items-center gap-2 mt-10 mb-10">
              {languages.map((lang) => (
                <div
                  key={lang.key}
                  onClick={() => setActiveLang(lang.key)}
                  className={`cursor-pointer pl-3 pr-4 py-2 outline outline-1 -outline-offset-1 flex justify-center items-center gap-2 transition-colors
              ${
                activeLang === lang.key
                  ? "bg-navy-blue-50 text-navy-blue-500 outline-navy-blue-500"
                  : "bg-white text-[#69687A] outline-[#E3E2E6]"
              }`}
                >
                  <div
                    data-property={lang.key}
                    className="w-6 h-6 relative overflow-hidden"
                  >
                    <ImageWithFallback
                      width={24}
                      height={24}
                      sizes="24px"
                      className="object-cover"
                      priority={false}
                      src={lang.icon}
                      alt={lang.label}
                    />
                  </div>
                  <span>{lang.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <div className="mt-10 flex flex-row justify-center items-start w-full gap-6 overflow-visible">
                <Carousel
                  className="w-full flex flex-col lg:gap-2 gap-2 overflow-visible"
                  showDots={false}
                  slideCount={6}
                >
                  <CarouselContent className="w-full flex flex-row gap-2 items-center">
                    {crDestinationMarketingBlogs.map((blog, index) => (
                      <CarouselItemBlogs
                        key={index}
                        index={index}
                        className={index === 0 ? " lg:ml-2 md:ml-2" : ""}
                        visibleSlides={5}
                      >
                        <CardBlogs
                          id={blog.id}
                          title={blog.title}
                          imageUrl={blog.imageUrl}
                          description={blog.description}
                          blogUrl={blog.blogUrl}
                        />
                      </CarouselItemBlogs>
                    ))}
                  </CarouselContent>

                  <CarouselPreviousCustom className="rounded-none" />
                  <CarouselNextCustom className="rounded-none" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] w-full flex flex-col-reverse lg:flex-row px-5 md:px-28 py-3 md:py-20 md:gap-12 md:pt-0 pt-10 justify-start items-center bg-white mx-auto">
          <div className="w-full items-center">
            <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black md:text-left text-center">
              Social Media Marketing
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-neutral-500 mx-auto md:text-left text-center">
              We know how to deliver the right content to the right audience.
              Through our global community, we inspire audiences with strategic
              social content and work with influencers, creators, clients and
              partners to meet your marketing needs.
            </p>
            <Button variant="primary" className="px-10 py-4 mt-4">
              Enquire Now
            </Button>
          </div>
          <div className="w-full items-center">
            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <ImageWithFallback
                src="/image/destination-marketing/phone.webp"
                alt="Social Media Marketing Image"
                width={592}
                height={442}
                sizes="(max-width: 600px) 100vw, 592px"
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mt-12 flex flex-col gap-12 justify-center items-center bg-white md:px-28 md:py-20">
          <div className="py-3 w-full items-center">
            <p className="px-5 md:px-28  lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
              Authentic Promotion via <br /> Muslim Travel Influencers
            </p>
            <p className="px-5 max-w-[768px] sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 mx-auto">
              We partner with Muslim travel influencers to promote your
              destination through authentic, high-reach content.
            </p>
          </div>
          <div className="max-w-[1440px] flex justify-center items-center gap-8 overflow-hidden">
            <DefaultCarousel className="w-full mt-12">
              <DefaultCarouselContent>
                {[
                  "/image/destination-marketing/instagram-mockup-1.webp",
                  "/image/destination-marketing/instagram-mockup-2.webp",
                  "/image/destination-marketing/instagram-mockup-3.webp",
                  "/image/destination-marketing/instagram-mockup-4.webp",
                  "/image/destination-marketing/instagram-mockup-5.webp",
                  "/image/destination-marketing/instagram-mockup-6.webp",
                ].map((src, idx) => (
                  <DefaultCarouselItem
                    key={idx}
                    className="md:basis-1/5 flex justify-center items-center gap-12"
                  >
                    <div
                      key={src}
                      className="relative h-full lg:w-72 flex items-center justify-center"
                      style={{ clipPath: "inset(0 round 24px)" }}
                    >
                      <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="h-full w-full object-cover"
                        priority={false}
                        src={src}
                        alt={`Influencer ${idx + 1}`}
                        style={{ borderRadius: "24px" }}
                      />
                    </div>
                  </DefaultCarouselItem>
                ))}
              </DefaultCarouselContent>
            </DefaultCarousel>
          </div>
        </div>
        <div className="max-w-[1440px] w-full flex flex-col-reverse lg:flex-row px-5 md:px-28 py-3 md:py-20 md:gap-12 md:pt-0 pt-10 justify-start items-center bg-white mx-auto">
          <div className="w-full items-center">
            <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black md:text-left text-center">
              Partner with the HalalTrip Content Creator Tank
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-neutral-500 mx-auto md:text-left text-center">
              The HalalTrip Content Creator Tank aims to empower content
              creators in the Muslim lifestyle space to pitch. As a destination
              or brand partner, you'll gain exclusive exposure, access to
              creator talent, and the opportunity to spotlight your destination
              through real, relatable narratives.
            </p>
            <Button variant="primary" className="px-10 py-4 mt-4">
              Enquire Now
            </Button>
          </div>
          <div className="w-full items-center">
            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <ImageWithFallback
                width={592}
                height={442}
                sizes="(max-width: 600px) 100vw, 592px"
                className="object-contain"
                priority={false}
                src="/image/destination-marketing/collage_1.webp"
                alt="Social Media Marketing Image"
                style={{ width: "592px", height: "442px" }}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] w-full flex flex-col lg:flex-row px-5 md:px-28 py-3 md:py-20 lg:gap-12 lg:pt-0 pt-10 justify-start items-center bg-white mx-auto">
          <div className="w-full items-center">
            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <ImageWithFallback
                width={592}
                height={442}
                sizes="(max-width: 600px) 100vw, 592px"
                className="object-contain"
                priority={false}
                src="/image/destination-marketing/desktop_1.webp"
                alt="Social Media Marketing Image"
                style={{ width: "592px", height: "442px" }}
              />
            </div>
          </div>
          <div className="w-full items-center">
            <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black md:text-left text-center">
              Destination Microsite
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-neutral-500 mx-auto md:text-left text-center">
              Having a dedicated microsite allows you to create focused content
              and optimize that content to drive traffic to your page. We ensure
              that the design of the microsite structures your content in an
              informative way and ultimately, aligns with your brand.
            </p>
            <Button variant="primary" className="px-10 py-4 mt-4">
              Enquire Now
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-24 justify-center items-center bg-white md:pt-0 pt-10">
          <div className="max-w-[1440px] py-3 md:py-20 w-full items-center">
            <p className="md:max-w-[768px] px-5 md:px-28 mx-auto lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
              Present Your Destination Through Your Eyes
            </p>
            <p className="px-5 max-w-[450px] sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 mx-auto">
              We develop targeted content that highlights your destination’s
              culture, offerings, and campaigns.
            </p>
            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <div className="mt-10 flex flex-row justify-center items-start w-full gap-6 overflow-visible">
                <Carousel
                  className="w-full flex flex-col lg:gap-8 gap-2 overflow-visible"
                  showDots={false}
                  slideCount={5}
                >
                  <CarouselContent className="w-full flex flex-row gap-2 items-center">
                    {crDestinationMarketingVideos.map((video, index) => (
                      <CarouselItemYoutube key={index} index={index}>
                        <CardYoutubeEmbed
                          id={video.id}
                          title={video.title}
                          videoUrl={video.videoUrl}
                          embedUrl={video.embedUrl}
                        />
                      </CarouselItemYoutube>
                    ))}
                  </CarouselContent>
                  <CarouselPreviousCustom className="rounded-none" />
                  <CarouselNextCustom className="rounded-none" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] w-full flex flex-col-reverse lg:flex-row px-5 md:px-28 py-3 md:py-20 md:gap-12 md:pt-0 pt-10 justify-start items-center bg-white max-auto">
          <div className="w-full items-center">
            <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black md:text-left text-center">
              The Halal Travel Podcast
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-neutral-500 mx-auto md:text-left text-center mb-6">
              Hosted by colleagues, friends and ‘tea’ buddies Hazirah, Nurul and
              Raudha, The Halal Travel Podcast is a space to let out their heart
              and soul as Muslim millennials. The trio invites inspiring Muslims
              from different walks of life to share the stories that made them
              who they are today. Tune in to the podcast on the way to school,
              at work or while cooking for a lighthearted listen.
            </p>
            <div className="flex flex-row align-middle items-center gap-4">
              <ImageWithFallback
                width={0}
                height={0}
                sizes="30px"
                className="h-7 w-7"
                priority={false}
                src="/image/destination-marketing/logo-spotify.webp"
                alt="Spotify Logo"
              />
              <ImageWithFallback
                width={0}
                height={0}
                sizes="80px"
                className="h-11 w-20"
                priority={false}
                src="/image/destination-marketing/logo-apple-podcast.webp"
                alt="Apple Podcast Logo"
              />
              <ImageWithFallback
                width={0}
                height={0}
                sizes="44px"
                className="h-11 w-9"
                priority={false}
                src="/image/destination-marketing/logo-google-podcasts.webp"
                alt="Google Podcasts Logo"
              />
              <ImageWithFallback
                width={0}
                height={0}
                sizes="96px"
                className="h-7 w-24"
                priority={false}
                src="/image/destination-marketing/logo-anchor-podcast.webp"
                alt="Anchor Podcast Logo"
              />
              <ImageWithFallback
                width={0}
                height={0}
                sizes="44px"
                className="h-11 w-11"
                priority={false}
                src="/image/destination-marketing/logo-youtube.webp"
                alt="Youtube Logo"
              />
            </div>
          </div>
          <div className="w-full items-center">
            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <ImageWithFallback
                width={600}
                height={533}
                sizes="(max-width: 600px) 100vw, 592px"
                className="object-cover"
                priority={false}
                src="/image/destination-marketing/podcast.webp"
                alt="Social Media Marketing Image"
                style={{ width: "600px", height: "533px" }}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col bg-gradient-to-r from-blue-600 to-navy-blue-600 justify-center items-center">
          <div className="max-w-[1440px] px-6 lg:px-8 w-full sm:py-16 py-12 flex flex-col gap-5 justify-between items-center">
            <div className="sm:w-[80%] w-full flex flex-col gap-4 mx-auto items-center">
              <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-white">
                Ready to Engage Muslim Travelers?
              </p>
              <p className="sm:w-[50%] text-white sm:text-desktop-body-2 text-mobile-body-2 text-center">
                Reach out to learn how we can support your destination with
                tailored marketing services.
              </p>
            </div>
            <Button variant="secondary" className="px-16 py-6">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

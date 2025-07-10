"use client";
import { CardBlogs, ImageWithFallback, Pagination } from "@/components/common";
import {
  Carousel as Carousel2,
  CarouselContent as CarouselContent2,
  CarouselItemBlogs as CarouselItem2,
  CarouselNextCustom as CarouselNext2,
  CarouselPreviousCustom as CarouselPrevious2,
  CarouselDots as CarouselDots2,
} from "@/components/ui/carouselCustom2";
import { Car, Download } from "lucide-react";
import { useState } from "react";
import { crDestinationMarketingBlogs } from "@/constants/dummyData";
import Link from "next/link";
export default function HalalMusimTravelMarketReports() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  // Function to handle letter button click

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data or update UI based on the new page
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section
        className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
        style={{
          backgroundImage: "url('/image/destination-marketing/hero.webp')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
          <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
            <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
              Our Service
            </p>
            <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
              Destination Marketing
            </h1>
            <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
              Connecting you to Muslims globally
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-custom-white-cr px-6 py-10 lg:px-8 flex justify-center items-center flex-col mb-10">
        <div className="max-w-[1440px] w-full flex flex-col gap-5">
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-left text-neutral-500">
            Since 2008, we have been offering a wide range of Destination
            Marketing services to clients in the hospitality and tourism &
            travel industry to effectively connect with the fast growing Muslim
            travel market. Our in-depth understanding of the lifestyle, behavior
            and specific needs of the Halal conscious traveler has enabled us to
            ensure our clients identify the right approach to effectively appeal
            to the hearts and minds and capture a significant share-of-wallet of
            this segment.
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-left text-neutral-500">
            We provide professional support and targeted solutions through
            customized strategic marketing plans that address the needs of the
            destination and businesses. Our dedicated team ensures that your
            destination’s attractiveness is communicated to potential Muslim
            visitors with the intended brand positioning.
          </p>
        </div>
      </section>
      <div className="pt-7 sm:pt-14 w-full flex flex-col justify-center items-center bg-white">
        <div className="max-w-[1440px] md:gap-12 gap-8 flex md:flex-row flex-col py-3 md:py-20 px-6 lg:px-8 w-full">
          <div className="md:w-[50%] w-full self-stretch relative overflow-hidden">
            <ImageWithFallback
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
              priority={false}
              src="/image/destination-marketing/set.png"
              alt="Destination Marketing Hero Image"
            />
          </div>
          <div className="md:w-[50%] w-full inline-flex flex-col justify-start items-center gap-12">
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
                        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C11.4853 3 10.9806 3.04321 10.4895 3.12621L12.7398 4.25137C14.1255 4.94421 15.0008 6.36048 15.0008 7.90973V7.9999C15.0008 10.209 13.2099 11.9999 11.0008 11.9999H10.0856C9.09383 11.9999 8.4212 13.0088 8.80266 13.9243C9.62541 15.899 8.43598 18.1327 6.33835 18.5522L5.92001 18.6359C7.32291 19.9219 9.13488 20.769 11.1383 20.9593L11.3588 19.4152C11.5111 18.3491 12.3487 17.5115 13.4148 17.3592C14.3242 17.2293 14.9997 16.4504 14.9997 15.5318V15.2996C14.9997 13.4907 16.8266 12.2538 18.5061 12.9256L20.8102 13.8473C20.9346 13.251 21 12.6332 21 12C21 7.02944 16.9706 3 12 3ZM20.1836 15.7507L17.7634 14.7826C17.3976 14.6363 16.9997 14.9057 16.9997 15.2996V15.5318C16.9997 17.4457 15.5924 19.0684 13.6976 19.3391C13.5115 19.3657 13.3653 19.5119 13.3387 19.698L13.1634 20.9255C16.2912 20.5218 18.9158 18.5124 20.1836 15.7507ZM3 12C3 8.53829 4.9544 5.53306 7.81999 4.02752L11.8454 6.04022C12.5535 6.39428 13.0008 7.11803 13.0008 7.90973V7.9999C13.0008 9.10447 12.1054 9.9999 11.0008 9.9999H10.0856C7.66668 9.9999 6.02614 12.4607 6.9565 14.6936C7.29384 15.5032 6.80616 16.419 5.94612 16.591L4.44402 16.8914C3.53052 15.4832 3 13.8036 3 12Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-text-color-text-main sm:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                    Identify and prioritize the targeted Muslim visitor market
                    segments and profiles.
                  </div>
                  <div className="self-stretch justify-start text-text-color-text-secondary sm:text-desktop-body-2 text-mobile-body-2 font-normal leading-normal">
                    Identifying visitor markets that align with destination’s
                    attractions and experieces as well as community values.
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
                        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C11.4853 3 10.9806 3.04321 10.4895 3.12621L12.7398 4.25137C14.1255 4.94421 15.0008 6.36048 15.0008 7.90973V7.9999C15.0008 10.209 13.2099 11.9999 11.0008 11.9999H10.0856C9.09383 11.9999 8.4212 13.0088 8.80266 13.9243C9.62541 15.899 8.43598 18.1327 6.33835 18.5522L5.92001 18.6359C7.32291 19.9219 9.13488 20.769 11.1383 20.9593L11.3588 19.4152C11.5111 18.3491 12.3487 17.5115 13.4148 17.3592C14.3242 17.2293 14.9997 16.4504 14.9997 15.5318V15.2996C14.9997 13.4907 16.8266 12.2538 18.5061 12.9256L20.8102 13.8473C20.9346 13.251 21 12.6332 21 12C21 7.02944 16.9706 3 12 3ZM20.1836 15.7507L17.7634 14.7826C17.3976 14.6363 16.9997 14.9057 16.9997 15.2996V15.5318C16.9997 17.4457 15.5924 19.0684 13.6976 19.3391C13.5115 19.3657 13.3653 19.5119 13.3387 19.698L13.1634 20.9255C16.2912 20.5218 18.9158 18.5124 20.1836 15.7507ZM3 12C3 8.53829 4.9544 5.53306 7.81999 4.02752L11.8454 6.04022C12.5535 6.39428 13.0008 7.11803 13.0008 7.90973V7.9999C13.0008 9.10447 12.1054 9.9999 11.0008 9.9999H10.0856C7.66668 9.9999 6.02614 12.4607 6.9565 14.6936C7.29384 15.5032 6.80616 16.419 5.94612 16.591L4.44402 16.8914C3.53052 15.4832 3 13.8036 3 12Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-text-color-text-main sm:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                    Develop unique positioning of the destination for the
                    targeted Muslim traveler segment
                  </div>
                  <div className="self-stretch justify-start text-text-color-text-secondary sm:text-desktop-body-2 text-mobile-body-2 font-normal leading-normal">
                    Fostering a Muslim-friendly brand awareness of the
                    destination to travelers from the target markets.
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
                        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C11.4853 3 10.9806 3.04321 10.4895 3.12621L12.7398 4.25137C14.1255 4.94421 15.0008 6.36048 15.0008 7.90973V7.9999C15.0008 10.209 13.2099 11.9999 11.0008 11.9999H10.0856C9.09383 11.9999 8.4212 13.0088 8.80266 13.9243C9.62541 15.899 8.43598 18.1327 6.33835 18.5522L5.92001 18.6359C7.32291 19.9219 9.13488 20.769 11.1383 20.9593L11.3588 19.4152C11.5111 18.3491 12.3487 17.5115 13.4148 17.3592C14.3242 17.2293 14.9997 16.4504 14.9997 15.5318V15.2996C14.9997 13.4907 16.8266 12.2538 18.5061 12.9256L20.8102 13.8473C20.9346 13.251 21 12.6332 21 12C21 7.02944 16.9706 3 12 3ZM20.1836 15.7507L17.7634 14.7826C17.3976 14.6363 16.9997 14.9057 16.9997 15.2996V15.5318C16.9997 17.4457 15.5924 19.0684 13.6976 19.3391C13.5115 19.3657 13.3653 19.5119 13.3387 19.698L13.1634 20.9255C16.2912 20.5218 18.9158 18.5124 20.1836 15.7507ZM3 12C3 8.53829 4.9544 5.53306 7.81999 4.02752L11.8454 6.04022C12.5535 6.39428 13.0008 7.11803 13.0008 7.90973V7.9999C13.0008 9.10447 12.1054 9.9999 11.0008 9.9999H10.0856C7.66668 9.9999 6.02614 12.4607 6.9565 14.6936C7.29384 15.5032 6.80616 16.419 5.94612 16.591L4.44402 16.8914C3.53052 15.4832 3 13.8036 3 12Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-text-color-text-main sm:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                    Develop a marketing plan to connect with the target audience
                  </div>
                  <div className="self-stretch justify-start text-text-color-text-secondary sm:text-desktop-body-2 text-mobile-body-2 font-normal leading-normal">
                    Development of a customized strategic Marketing Plan that
                    caters to destination needs in proving a unique and
                    unforgettable experience for the Muslim travelers.
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
                        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C11.4853 3 10.9806 3.04321 10.4895 3.12621L12.7398 4.25137C14.1255 4.94421 15.0008 6.36048 15.0008 7.90973V7.9999C15.0008 10.209 13.2099 11.9999 11.0008 11.9999H10.0856C9.09383 11.9999 8.4212 13.0088 8.80266 13.9243C9.62541 15.899 8.43598 18.1327 6.33835 18.5522L5.92001 18.6359C7.32291 19.9219 9.13488 20.769 11.1383 20.9593L11.3588 19.4152C11.5111 18.3491 12.3487 17.5115 13.4148 17.3592C14.3242 17.2293 14.9997 16.4504 14.9997 15.5318V15.2996C14.9997 13.4907 16.8266 12.2538 18.5061 12.9256L20.8102 13.8473C20.9346 13.251 21 12.6332 21 12C21 7.02944 16.9706 3 12 3ZM20.1836 15.7507L17.7634 14.7826C17.3976 14.6363 16.9997 14.9057 16.9997 15.2996V15.5318C16.9997 17.4457 15.5924 19.0684 13.6976 19.3391C13.5115 19.3657 13.3653 19.5119 13.3387 19.698L13.1634 20.9255C16.2912 20.5218 18.9158 18.5124 20.1836 15.7507ZM3 12C3 8.53829 4.9544 5.53306 7.81999 4.02752L11.8454 6.04022C12.5535 6.39428 13.0008 7.11803 13.0008 7.90973V7.9999C13.0008 9.10447 12.1054 9.9999 11.0008 9.9999H10.0856C7.66668 9.9999 6.02614 12.4607 6.9565 14.6936C7.29384 15.5032 6.80616 16.419 5.94612 16.591L4.44402 16.8914C3.53052 15.4832 3 13.8036 3 12Z"
                        fill="#2D15FF"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-text-color-text-main sm:text-desktop-body-1 text-mobile-body-1 font-bold leading-loose">
                    Execute the marketing plan
                  </div>
                  <div className="self-stretch justify-start text-text-color-text-secondary sm:text-desktop-body-2 text-mobile-body-2 font-normal leading-normal">
                    Facilitation of engagement process in implementing the
                    marketing plan.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="max-w-[1440px] px-5 md:px-28 py-3 md:py-20 w-full">
          <div className="mt-10 flex w-full flex-col justify-start gap-16 ">
            <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-8">
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold bg-clip-text text-black text-center">
                  More Than One Way to
                </p>
                <p
                  className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 line-clamp-2"
                >
                  Lorem ipsum dolor sit amet consectetur. Ac ipsum neque ipsum
                  nunc lacus faucibus nec. <br /> At id mi viverra commodo maecenas.
                </p>
              </div>
              <div className="flex flex-col w-full justify-center items-center gap-3">
                <div className="self-stretch inline-flex flex-col justify-center gap-8">
                  <div className="h-[805px] w-full bg-custom-gray-cr"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <div className="mt-10 flex flex-row justify-center items-start w-full gap-6 overflow-visible">
                <Carousel2
                  className="w-full flex flex-col lg:gap-8 gap-2 overflow-visible"
                  showDots={false}
                  slideCount={6}
                >
                  <CarouselContent2 className="w-full flex flex-row gap-2 items-center">
                    {crDestinationMarketingBlogs.map((blog, index) => (
                      <CarouselItem2
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
                      </CarouselItem2>
                    ))}
                  </CarouselContent2>
                  <CarouselPrevious2 />
                  <CarouselNext2 />
                </Carousel2>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] w-full flex flex-col-reverse md:flex-row px-5 md:px-28 py-3 md:py-20 md:gap-12 md:pt-0 pt-10 justify-start items-center bg-white">
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
            <Link
              href="#"
              className="inline-block px-6 py-3 text-white font-bold bg-blue-600 border border-gray-500/20 w-full md:max-w-fit items-center text-center mt-6"
            >
              Enquire Now
            </Link>
          </div>
          <div className="w-full items-center">
            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <ImageWithFallback
                width={592}
                height={442}
                sizes="(max-width: 600px) 100vw, 592px"
                className="object-cover"
                priority={false}
                src="/image/destination-marketing/phone.webp"
                alt="Social Media Marketing Image"
                style={{ width: "592px", height: "442px" }}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] w-full flex flex-col-reverse md:flex-row px-5 md:px-28 py-3 md:py-20 md:gap-12 md:pt-0 pt-10 justify-start items-center bg-white">
          <div className="w-full items-center">
            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <ImageWithFallback
                width={592}
                height={442}
                sizes="(max-width: 600px) 100vw, 592px"
                className="object-cover"
                priority={false}
                src="/image/destination-marketing/desktop.webp"
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
            <Link
              href="#"
              className="inline-block px-6 py-3 text-white font-bold bg-blue-600 border border-gray-500/20 w-full md:max-w-fit items-center text-center mt-6"
            >
              Enquire Now
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col bg-gradient-to-br from-blue-50 to-blue-200 justify-center items-center">
          <div className="max-w-[1440px] px-6 lg:px-8 w-full sm:py-16 py-12 flex sm:flex-row flex-col gap-5 justify-between items-end">
            <div className="sm:w-[80%] w-full flex flex-col gap-4">
              <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-black">
                Get Featured on HalalTrip
              </p>
              <p className="text-black sm:text-desktop-body-2 text-mobile-body-2">
                Advertising on HalalTrip is a unique opportunity to reach the
                global Muslim audience. The HalalTrip featured decal increases
                your brand's awareness to consumers while connecting them to
                your profile listing on HalalTrip.
              </p>
            </div>
            <Link
              href="#"
              className="inline-block p-3 text-blue-600 text-center font-bold bg-white border border-gray-500/20 w-full sm:w-[20%]"
            >
              Enquire Now
            </Link>
          </div>
        </div>
        <div className="max-w-[1440px] w-full flex flex-col-reverse md:flex-row px-5 md:px-28 py-3 md:py-20 md:gap-12 md:pt-0 pt-10 justify-start items-center bg-white">
          <div className="w-full items-center">
            <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black md:text-left text-center">
              The Halal Travel Podcast
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-neutral-500 mx-auto md:text-left text-center">
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
          <div className="max-w-[1440px] px-6 lg:px-8 w-full sm:py-16 py-12 flex sm:flex-row flex-col gap-5 justify-between items-end">
            <div className="sm:w-[80%] w-full flex flex-col gap-4">
              <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-white">
                Book a call with our experts
              </p>
              <p className="text-white sm:text-desktop-body-2 text-mobile-body-2">
                Discuss your needs with our specialists — from halal travel
                research insights to tailored consultancy, we’re here to support
                your goals
              </p>
            </div>
            <Link
              href="#"
              className="inline-block p-3 text-blue-600 text-center font-bold bg-white border border-gray-500/20 w-full sm:w-[20%]"
            >
              Set up call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

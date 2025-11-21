"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Button,
  CardReports,
  ImageWithFallback,
  PageHero,
  TestimonialCard,
} from "@/components/common";
import {
  teamDataAboutUs,
  testimonialsAboutUs,
} from "@/constants/dummyData";

export default function AboutUs() {
  const [openTeam, setOpenTeam] = useState(false);
  // Ambil nama anggota dari URL saat halaman dimuat
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const memberName = urlParams.get("member");
    if (memberName) {
      // Cari anggota berdasarkan nama
      const member = Object.values(
        teamDataAboutUs as Record<string, { name: string }[]>
      )
        .flat()
        .find((m) => m.name === memberName);

      if (member) {
        setOpenTeam(true);
        // Removed unsafe setActiveCategory and setActiveMember usage
      }
    }
  }, [openTeam]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PageHero
        title="What We Do"
        description="Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum non consectetur nec platea gravida ac."
        subtitle="About Us"
        backgroundImage="/image/what-we-do/hero.jpg"
        alignment="left"
        variant="image"
      />
      <div className="mt-16 lg:px-32 sm:px-16 px-8 w-full flex flex-col gap-24 justify-center items-center">
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
            Trusted by Leading Destinations and Organizations Worldwide
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">
            From strategic partners to acclaimed tourism boards, our global footprint speaks for itself.
          </p>
          <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1 px-6 py-10 bg-neutral-100">
            <div className="w-full flex flex-col justify-center items-center  gap-.5">
              <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">
                20k+
              </p>
              <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">
                Media mentions and features
              </p>
            </div>
            <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full my-2"></div>
            <div className="w-full flex flex-col justify-center items-center gap-.5">
              <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">
                300+
              </p>
              <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">
                CrescentRatings awarded globally
              </p>
            </div>
            <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full my-2"></div>
            <div className="w-full flex flex-col justify-center items-center gap-.5">
              <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">
                70k+
              </p>
              <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">
                Industry partners worldwide
              </p>
            </div>
            <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full my-2"></div>
            <div className="w-full flex flex-col justify-center items-center gap-.5">
              <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">
                20+
              </p>
              <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">
                Tourism agencies collaborations
              </p>
            </div>
          </div>
          <div className="mt-10 flex md:flex-row flex-col justify-center items-center w-full gap-6">
            <div className="w-full flex flex-col justify-center items-center gap-.5">
              <p className="lg:text-desktop-heading-6 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-center w-full">
                Global Partners
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
              {[
                {
                  src: "/image/our-services/feature/hk-fe.jpg",
                  alt: "Hong Kong Feature"
                },
                {
                  src: "/image/our-services/feature/ture-fe.jpg",
                  alt: "Turkey Feature"
                },
                {
                  src: "/image/our-services/feature/nyc-fe.png",
                  alt: "New York City Feature"
                },
                {
                  src: "/image/our-services/feature/third-fe.png",
                  alt: "Third Feature"
                },
                {
                  src: "/image/our-services/feature/germany-fe.svg",
                  alt: "Germany Feature"
                }
              ].map((item, index) => (
                <div key={index} className="flex justify-center items-center">     
                  <ImageWithFallback
                    key={index}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full object-contain"
                    priority={false}
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              ))}
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-row justify-center items-center w-full gap-6">
            <div className="w-full flex flex-col justify-center items-center gap-.5">
              <p className="lg:text-desktop-heading-6 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-center w-full">
                What They Say
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonialsAboutUs.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    text={testimonial.text}
                    name={testimonial.name}
                    location={testimonial.position}
                    imageSrc={testimonial.imageSrc}
                    imageAlt={testimonial.imageAlt}
                    onText={testimonial.onText}
                    onLink={testimonial.onLink}
                    onLinkText={testimonial.onLinkText}
                  />
                ))}
              </div>
              {/* <div className="w-full flex justify-center mt-6">
                <Button className="lg:text-mobile-body-1 text-mobile-body-3 sm:max-w-[150px] w-full flex flex-row justify-center items-center gap-2 text-blue-600 border-gray-600/20 border p-3 sm:p-4">
                  View More
                </Button>
              </div> */}
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
            Global Muslim Travel Index
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">
            Explore the Global Muslim Travel Index – your gateway to impactful
            insights and trends.
          </p>
          <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
            <div className="flex flex-col justify-center items-center w-full gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                {/* {reportsInsightSeries.slice(0, 3).map((report, index) => (
                  <CardReports
                    key={index}
                    title={report.title}
                    imageUrl={report.imageUrl}
                    downloadUrl={report.downloadUrl}
                    customImgHeight="lg:max-h-[350px] sm:max-h-[300px] max-h-[400px]"
                    buttonContent={<>View Report</>}
                  />
                ))} */}
                  <CardReports
                    title={'Global Muslim Travel Index 2024'}
                    imageUrl={'/image/what-we-do/gmti-what.webp'}
                    downloadUrl={'https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html'}
                    customImgHeight="lg:max-h-[350px] sm:max-h-[300px] max-h-[400px]"
                    buttonContent={<>View Report</>}
                  />
                  <CardReports
                    title={'Global Muslim Travel Index 2024'}
                    imageUrl={'/image/what-we-do/gmti-what.webp'}
                    downloadUrl={'https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html'}
                    customImgHeight="lg:max-h-[350px] sm:max-h-[300px] max-h-[400px]"
                    buttonContent={<>View Report</>}
                  />
                  <CardReports
                    title={'Global Muslim Travel Index 2024'}
                    imageUrl={'/image/what-we-do/gmti-what.webp'}
                    downloadUrl={'https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html'}
                    customImgHeight="lg:max-h-[350px] sm:max-h-[300px] max-h-[400px]"
                    buttonContent={<>View Report</>}
                  />
              </div>
              <div className="w-full flex justify-center mt-6">
                <Link href="/insights/gmti">
                  <Button variant="primary" className="px-8 py-6">
                    View More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
            Muslim Visitor Guides
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">
            Our Muslim Visitor Guides empower destinations and travelers alike
            with vital information.
          </p>
          <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
            <div className="flex flex-col justify-center items-center w-full gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                {/* {reportsInsightSeries.slice(0, 3).map((report, index) => (
                  <CardReports
                    key={index}
                    title={report.title}
                    imageUrl={report.imageUrl}
                    downloadUrl={report.downloadUrl}
                    customImgHeight="lg:max-h-[350px] sm:max-h-[300px] max-h-[400px]"
                    buttonContent={<>View Guide</>}
                  />
                ))} */}
                <CardReports
                    title={'Macao Halal Travel Guide'}
                    imageUrl={'/image/what-we-do/visitor-guide-what.webp'}
                    downloadUrl={'https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html'}
                    customImgHeight="lg:max-h-[400px] sm:max-h-[350px] max-h-[450px]"
                    description="The Macao Halal Travel Guide offers Muslim travelers curated insights into cultural landmarks, halal dining, prayer facilities, and seamless travel experiences, making it easy to explore Macao’s unique East-West fusion."
                    buttonContent={<>View Guide</>}
                  />
                <CardReports
                    title={'Macao Halal Travel Guide'}
                    imageUrl={'/image/what-we-do/visitor-guide-what.webp'}
                    downloadUrl={'https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html'}
                    customImgHeight="lg:max-h-[400px] sm:max-h-[350px] max-h-[450px]"
                    description="The Macao Halal Travel Guide offers Muslim travelers curated insights into cultural landmarks, halal dining, prayer facilities, and seamless travel experiences, making it easy to explore Macao’s unique East-West fusion."
                    buttonContent={<>View Guide</>}
                  />
                <CardReports
                    title={'Macao Halal Travel Guide'}
                    imageUrl={'/image/what-we-do/visitor-guide-what.webp'}
                    downloadUrl={'https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html'}
                    customImgHeight="lg:max-h-[400px] sm:max-h-[350px] max-h-[450px]"
                    description="The Macao Halal Travel Guide offers Muslim travelers curated insights into cultural landmarks, halal dining, prayer facilities, and seamless travel experiences, making it easy to explore Macao’s unique East-West fusion."
                    buttonContent={<>View Guide</>}
                  />
              </div>
              <div className="w-full flex justify-center mt-6">
                <Button variant="primary" className="px-8 py-6">
                  View More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
            Crescent Rated Services in More Than 40 Countries
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">
            Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci
            pulvinar vitae. Ultrices tempor interdum non consectetur nec platea
            gravida ac.
          </p>
          <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
            <div className="flex flex-col justify-center items-center w-full gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                <Link href="/resources/cr-member-directory/hotels-serviced-apartments/Hong%20Kong%20Sar" className="w-full relative block">
                  <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full object-cover h-full"
                    priority={false}
                    src={"/image/what-we-do/hg.jpeg"}
                    alt={"hongkong"}
                  />
                  <div className="absolute flex justify-center items-center rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border h-full border-white/[0.01] bg-black/40 rounded-none">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-semibold text-white">
                      Hong Kong Sar
                    </p>
                  </div>
                </Link>
                <Link href="/resources/cr-member-directory/hotels-serviced-apartments/Sri%20Lanka" className="w-full relative block">
                  <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full object-cover h-full"
                    priority={false}
                    src={"/image/what-we-do/sl.jpeg"}
                    alt={"sri lanka"}
                  />
                  <div className="absolute flex justify-center items-center rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border h-full border-white/[0.01] bg-black/40 rounded-none">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-semibold text-white">
                      Sri Lanka
                    </p>
                  </div>
                </Link>
                <Link href="/resources/cr-member-directory/hotels-serviced-apartments/Singapore" className="w-full relative block">
                  <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full object-cover h-full"
                    priority={false}
                    src={"/image/what-we-do/sg.jpeg"}
                    alt={"Singapore"}
                  />
                  <div className="absolute flex justify-center items-center rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border h-full border-white/[0.01] bg-black/40 rounded-none">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-semibold text-white">
                      Singapore
                    </p>
                  </div>
                </Link>
              </div>
              <div className="w-full flex justify-center mt-6">
                <Link href="/resources/cr-member-directory">
                  <Button variant="primary" className="px-8 py-6">
                    View More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
            International Conferences Attended
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">
            From destination audits to tailored advisory, see how we support
            growth and excellence.
          </p>
          <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
            <div className="flex flex-col justify-center items-center w-full gap-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
                {/* {reportsInsightSeries.slice(0, 4).map((report, index) => (
                  <CardReports
                    key={index}
                    title={"Global Labor Market Conference 2025"}
                    imageUrl={report.imageUrl}
                    downloadUrl={report.downloadUrl}
                    date={"Riyadh"}
                    customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                    buttonContent={<>View Event</>}
                  />
                ))} */}
                  <CardReports
                    title={"Global Labor Market Conference 2025"}
                    imageUrl={'/image/what-we-do/international-what.webp'}
                    downloadUrl={'https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html'}
                    customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                    date={"Riyadh"}
                    buttonContent={<>View Event</>}
                  />
                  <CardReports
                    title={"Global Labor Market Conference 2025"}
                    imageUrl={'/image/what-we-do/international-what.webp'}
                    downloadUrl={'https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html'}
                    customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                    date={"Riyadh"}
                    buttonContent={<>View Event</>}
                  />
                  <CardReports
                    title={"Global Labor Market Conference 2025"}
                    imageUrl={'/image/what-we-do/international-what.webp'}
                    downloadUrl={'https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html'}
                    customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                    date={"Riyadh"}
                    buttonContent={<>View Event</>}
                  />
                  <CardReports
                    title={"Global Labor Market Conference 2025"}
                    imageUrl={'/image/what-we-do/international-what.webp'}
                    downloadUrl={'https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html'}
                    customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                    date={"Riyadh"}
                    buttonContent={<>View Event</>}
                  />
              </div>
              <div className="w-full flex justify-center mt-6">
                <Link href="/events/our-events">
                  <Button variant="primary" className="px-8 py-6">
                    View More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
            Media Mentions
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">
            Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci
            pulvinar vitae. Ultrices tempor interdum non consectetur nec platea
            gravida ac.
          </p>
          <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
            <div className="flex flex-col justify-center items-center w-full gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                {/* {reportsInsightSeries.slice(0, 3).map((report, index) => (
                  <CardReports
                    key={index}
                    title={"Global Labor Market Conference 2025"}
                    imageUrl={report.imageUrl}
                    customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                  />
                ))} */}
                <CardReports
                    title={`Samarkand receives "Best Islamic Destination of the Year" award`}
                    imageUrl={'/image/what-we-do/media-what.webp'}
                    customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                    buttonContent={<>View Media</>}
                  />
                  <CardReports
                    title={`Samarkand receives "Best Islamic Destination of the Year" award`}
                    imageUrl={'/image/what-we-do/media-what.webp'}
                    customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                    buttonContent={<>View Media</>}
                  />
                  <CardReports
                    title={`Samarkand receives "Best Islamic Destination of the Year" award`}
                    imageUrl={'/image/what-we-do/media-what.webp'}
                    customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                    buttonContent={<>View Media</>}
                  />
              </div>
              <div className="w-full flex justify-center mt-6">
                <Link href="/about-us/in-the-media">
                  <Button variant="primary" className="px-8 py-6">
                    View More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="
                      w-screen
                      -mx-[calc((100vw-100%)/2)]
                      flex flex-col md:flex-row
                      p-6 sm:p-8 md:p-14
                      gap-6 md:gap-0
                      md:justify-between items-end
                      bg-gradient-to-br from-[#453CFF] to-[#217CFF]
                    "
        >
          <div className="need-support flex flex-col items-start text-start gap-4 w-full md:w-[40%] text-white md:self-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight md:leading-[50.40px]">
              Let&apos;s Have a Talk
            </h1>
            <p className="text-sm sm:text-base md:text-base">
              Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
              faucibus id urna quis nisl egestas. Ultrices aenean metus duis mi
              nisi viverra nulla diam.
            </p>
          </div>

          <Button
            variant="secondary"
            className="
                        w-full sm:w-full md:w-auto
                        self-end md:self-auto
                        px-8 py-4 md:px-16 md:py-6
                        font-semibold
                      "
          >
            Contact Us
          </Button>
        </section>
      </div>
    </div>
  );
}

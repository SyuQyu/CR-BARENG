"use client";
import { Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  Button,
  CardInsights,
  CardProfile,
  CardReports,
  ImageWithFallback,
  Pagination,
} from "@/components/common";
import BreadCrumb from "@/components/common/breadcrumb/breadcrumb";
import {
  cardDataInsightSeries,
  CardProfile1InsightSeries,
  CardProfile2InsightSeries,
  reportsInsightSeries,
} from "@/constants/dummyData";

export default function CardInsightsSeries() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const scrollToInsightsSection = () => {
    const element = document.getElementById('share-insights-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full overflow-x-hidden flex flex-col justify-center items-center">
      <section
        className="relative w-full px-8 sm:px-16 lg:px-32 pt-10 flex flex-col items-center"
        style={{
          backgroundImage:
            "url('/image/halal-muslim-travel-market-reports/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-[1440px] flex flex-col items-start">
          <BreadCrumb variant="dark" />

          <div className="flex justify-center items-center flex-row bg-center">
            <div className="w-full flex sm:flex-row flex-col-reverse gap-5 sm:py-16 py-8">
              {/* Left Text Section */}
              <div className="flex w-full flex-col gap-5 justify-start items-start">
                <h1 className="text-mobile-heading-3 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold text-white relative z-20 text-left">
                  MC-CR Muslim-Friendly Cruise Report 2024
                </h1>

                <p className="text-white text-left md:text-mobile-caption-l lg:text-mobile-body-3 sm:text-desktop-body-2 relative z-20 max-w-4xl">
                  16 August, 2024
                </p>

                <p className="text-white text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                  The Mastercard-CrescentRating Muslim-Friendly Cruise Report
                  2024 offers a comprehensive analysis aimed at enhancing the
                  Halal Tourism experience and meeting the evolving needs of
                  Muslim travelers. This report reflects a commitment to
                  inclusivity, diversity, and responsible cruising, drawing on
                  extensive research and analysis of Muslim consumer
                  preferences.
                </p>

                <Button variant="ghost" className="text-white">
                  <Download className="lg:size-6 size-5" />
                  Download PDF
                </Button>
              </div>

              {/* Right Image Section */}
              <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="w-full sm:w-1/2 max-w-full object-contain max-h-[300px] sm:max-h-[400px]"
                priority={false}
                src="/image/cr-insight-series/Image.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-16 w-full flex flex-col gap-24 justify-center items-center">
        <div className="max-w-[1440px] lg:px-32 sm:px-16 px-8 w-full">
          <div className="w-full flex md:flex-row flex-col justify-between items-center gap-6 md:gap-12">
            <ImageWithFallback
              width={0}
              height={0}
              sizes="100vw"
              className="md:max-w-[260px] w-full max-h-[300px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] lg:w-[400px] xl:max-w-[400px] object-contain"
              priority={false}
              src="/image/cr-insight-series/Images-1.png"
              alt="logo"
            />
            <div className="flex flex-col gap-5 w-full">
              <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold text-left">
                Crescentrating Insights Series Guiding the Halal Economy Forward
              </p>
              <p className="lg:text-desktop-body-2 text-mobile-body-2 text-gray-600 text-left">
                The Crescentrating Insights Series Publication invites academics
                and students to contribute thought-provoking essays on trends,
                challenges, and opportunities in the global Halal economy, with
                a special focus on Halal travel. This publication series aims to
                bridge academia and industry, fostering insights that inspire
                actionable recommendations and shape the future of these
                sectors.
              </p>
              <div className="hidden lg:flex gap-6">
                <Button variant="primary" className="px-6 py-4">
                  <Link href="/insights/cr-insight-series/submission">
                    Publish Now
                  </Link>
                </Button>
                <Button variant="secondary" className="px-6 py-4" onClick={scrollToInsightsSection}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] lg:px-32 md:px-16 px-8 w-full">
          <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
            All Publications
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500">
            Delve into in-depth insights and research from industry experts in
            our CrescentRating Insight Series.
          </p>
          <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
              {reportsInsightSeries.map((report, index) => (
                <CardReports
                  key={index}
                  title={report.title}
                  date={report.date}
                  description={report.description}
                  imageUrl={report.imageUrl}
                  downloadUrl={report.downloadUrl}
                />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <div id="share-insights-section" className="max-w-[1440px] w-full lg:px-32 sm:px-16 px-8">
          <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left">
            Share Your Insights with CrescentRating
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-left lg:w-[40%] w-full text-neutral-500">
            Do you have valuable research or perspectives on the Muslim-friendly
            travel industry? Publishing with CrescentRating Insight Series is
            simple and impactful.
          </p>
          <div className="flex flex-col w-full mt-10 gap-8">
            {/* Bagian Atas: 3 Kartu */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cardDataInsightSeries.slice(0, 3).map((card, index) => (
                <CardInsights
                  key={index}
                  number={card.number}
                  title={card.title}
                  description={card.description}
                  iconSrc={card.iconSrc}
                />
              ))}
            </div>

            {/* Bagian Bawah: 2 Kartu Full-Width */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cardDataInsightSeries.slice(3).map((card, index) => (
                <CardInsights
                  key={index + 3}
                  number={card.number}
                  title={card.title}
                  description={card.description}
                  iconSrc={card.iconSrc}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] lg:px-32 sm:px-16 px-8 w-full flex flex-col justify-center items-center">
          <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
            Academic Council
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center w-[80%] text-neutral-500">
            Our Academic Council, composed of leading scholars, ensures every
            publication meets high standards for quality and relevance in the
            Muslim travel sector.
          </p>
          <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
              {CardProfile1InsightSeries.map((data, index) => (
                <CardProfile
                  key={index}
                  title={data.title}
                  linkedinUrl={data.linkedinUrl}
                  description={data.description}
                  imageUrl={data.imageUrl}
                  about={data.about}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] lg:px-32 sm:px-16 px-8 w-full flex flex-col justify-center items-center">
          <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
            Redaction Team{" "}
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center w-[80%] text-neutral-500">
            Our Academic Council, composed of leading scholars, ensures every
            publication meets high standards for quality and relevance in the
            Muslim travel sector.
          </p>
          <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
              {CardProfile2InsightSeries.map((data, index) => (
                <CardProfile
                  key={index}
                  title={data.title}
                  linkedinUrl={data.linkedinUrl}
                  description={data.description}
                  imageUrl={data.imageUrl}
                  about={data.about}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className="
            w-full
            flex flex-col md:flex-row
            p-6 sm:p-8 md:p-14
            gap-6 md:gap-0
            md:justify-between items-end
            bg-gradient-to-br from-[#453CFF] to-[#217CFF]
          "
        >
          <div className="need-support flex flex-col items-start text-start gap-4 w-full md:w-[40%] text-white md:self-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight md:leading-[50.40px]">
              Publish with Us!
            </h1>
            <p className="text-sm sm:text-base md:text-base">
              Have insights to share? Publish your report with CrescentRating
              Insight Series and make a difference in the Muslim travel
              industry. Start by submitting your proposal today!
            </p>
          </div>

          <Button
            variant="secondary"
            className="
              w-full sm:w-auto
              px-8 py-4 md:px-16 md:py-6
              font-semibold
            "
          >
            Publish Now
          </Button>
        </div>
      </div>
    </div>
  );
}

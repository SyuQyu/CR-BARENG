"use client";
import { Button, GmtiCard, ImageWithFallback } from "@/components/common";
import { ChevronUp, ChevronDown, Equal, CalendarDays } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselTextLinks,
  CarouselApi,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from "@/components/ui/carouselCustom";
import Stepper from "@/components/ui/stepper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Gmti() {
  const csv2015 = "/csv/gmti-2024/2015.csv"
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2024");

  useEffect(() => {
    // Fetch data berdasarkan tahun yang dipilih
    const fetchData = async () => {
      try {
        const response = await fetch(`/csv/gmti-2024/${selectedYear}.csv`); // File CSV sesuai tahun
        const text = await response.text();

        // Parse CSV menggunakan PapaParse
        Papa.parse(text, {
          header: true, // Menganggap baris pertama sebagai header
          skipEmptyLines: true,
          complete: (results: any) => {
            setData(results?.data);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV file:", error);
      }
    };

    fetchData();
  }, [selectedYear]); // Jalankan setiap kali `selectedYear` berubah

  const handleYearChange = (value: any) => {
    setSelectedYear(value);
    // Lakukan sesuatu, seperti memuat data baru berdasarkan tahun yang dipilih
  };

  const reportSlides = useMemo(() => [
    {
      index: 0,
      years: "2024",
      description:
        "The Mastercard-Crescentrating Global Muslim Travel Index (GMTI) 2024 provides vital insights into the resilient and rapidly growing Muslim travel market. This 9th edition introduces the RIDA framework to enhance travel experiences and highlights the impressive recovery of Muslim international visitors, expected to exceed pre-pandemic levels in 2024. The report delves into Muslim demographics and offers monthly updates via the HalalTrip Muslim Travel Intent Tracker (MTIT). Partnered with Mastercard, GMTI 2024 is an indispensable resource for travel industry stakeholders, offering strategies to capitalize on Halal tourism opportunities and promote a more inclusive travel environment.",
      imageUrl: "/image/gmti/2024-book.webp",
      downloadUrl:
        "https://www.crescentrating.com/reports/global-muslim-travel-index-2024.html",
    },
    {
      index: 1,
      years: "2023",
      description:
        "Explore the highly anticipated 8th edition of the Mastercard-Crescentrating Global Muslim Travel Index (GMTI) 2023 report, offering invaluable insights into the resilient and fast-growing Muslim travel market. This year's enhanced report introduces the Muslim Travel Intent Tracker (MTIT) to gauge evolving travel preferences. Additionally, the Muslim Traveler Responsible Tourism Framework promotes sustainable practices aligned with a faith, bolstering cultural preservation and local economies",
      imageUrl: "/image/gmti/2023-book.webp",
      downloadUrl:
        "https://www.crescentrating.com/reports/global-muslim-travel-index-2023.html",
    },
    {
      index: 2,
      years: "2022",
      description:
        "As we look forward to a new beginning in the travel & tourism sector, GMTI 2022 continues to rank 138 destinations on how prepared they are to leverage the Muslim travel market to accelerate recovery. In addition, this year’s report also looks at some of the key drivers that will propel the Halal travel market forward in its next development phase.",
      imageUrl: "/image/gmti/2022-book.webp",
      downloadUrl:
        "https://www.crescentrating.com/reports/global-muslim-travel-index-2022.html",
    },
    {
      index: 3,
      years: "2021",
      description:
        "In the latest edition of the annual GMTI series, the GMTI2021 report looks at how the pandemic has inflicted a heavy toll on the travel industry. The pandemic has had a colossal impact on the travel sector. Muslim arrivals dropped to 42 million in 2020 from an all-time high of an estimated 160 million in 2019. As we start this recovery journey, we project that the Muslim travel market will return to the 2019 levels by 2023.",
      imageUrl: "/image/gmti/2021-book.webp",
      downloadUrl:
        "https://www.crescentrating.com/reports/global-muslim-travel-index-2021.html",
    },
    {
      index: 4,
      years: "2019",
      description:
        "The latest edition of the annual GMTI series, GMTI2019 report introduces Halal Travel Development Goals, an updated Faith-Based Service Needs model and a refined ACES measurement. The Muslim travel market is continuing to be one of the fastest growing sectors in the world. In 2018, there were an estimated 140 Muslim visitors worldwide - up from 131 million in 2017.",
      imageUrl: "/image/gmti/2019-book.webp",
      downloadUrl:
        "https://www.crescentrating.com/reports/global-muslim-travel-index-2019.html",
    },
    {
      index: 5,
      years: "2018",
      description:
        "The latest release of the annual report, GMTI 2018 features an updated index criteria as well as the new ‘CrescentRating Growth & Innovation Model’ to help destinations better target the growing Halal travel market. A collaboration between MasterCard and CrescentRating, GMTI 2018 is the most comprehensive research on the Halal/Muslim travel, tourism and hospitality market.",
      imageUrl: "/image/gmti/2018-book.webp",
      downloadUrl:
        "https://www.crescentrating.com/reports/mastercard-crescentrating-global-muslim-travel-index-gmti-2018.html",
    },
    {
      index: 6,
      years: "2017",
      description:
        "Mastercard-CrescentRating Global Muslim Travel Index 2017 covers a total of 130 destinations, providing comprehensive research and insights on the Muslim travel market. The Index is an invaluable tool for stakeholders in the travel and hospitality sector to help understand how Muslim travel is influencing the overall travel market. The Index provides travelers, tourism boards, economists, travel services providers, stakeholders, investors and industry specialists comprehensive benchmarks across a number of important criteria to track the health and the growth of the travel segment. These insights also let destinations benchmark the services that they offer in order to better cater to the requirements of Muslim travelers.",
      imageUrl: "/image/gmti/2017-book.webp",
      downloadUrl:
        "https://www.crescentrating.com/download/thankyou.html?file=31l2TRPE_GMTI-2017-web.pdf",
    },
    {
      index: 7,
      years: "2016",
      description:
        "The GMTI 2016 looks at in-depth data covering 130 destinations. Two new criteria – air connectivity and visa restrictions – have been added to further enhance the Index. It will continue to be an invaluable tool in understanding how Muslim travel is influencing the overall travel market. The GMTI provides every stakeholder in the travel and hospitality sector, including travelers, tourism boards, economists, travel services providers, stakeholders, investors and industry specialists with comprehensive benchmarks across a number of important criteria to track the health and the growth of this travel segment.",
      imageUrl: "/image/gmti/2016-book.webp",
      downloadUrl:
        "https://www.crescentrating.com/download/thankyou.html?file=EbpZGqie_GMTI_2016_20161109-1.pdf",
    },
    {
      index: 8,
      years: "2015",
      description:
        "The GMTI 2015 studies an enhanced set of metrics and deeper data compared with the rankings and reports released over the last four years by CrescentRating. It will help destinations and those responsible for tourism to better benchmark the services they offer and use the detailed analysis in the report to improve processes and how they attract the Muslim traveler. In addition, travelers will have the information to make educated choices when planning trips. The GMTI 2015 looks at nine criteria in three areas that contribute to the overall index score for each destination. Each of the criteria is elaborated upon further into this report.",
      imageUrl: "/image/gmti/2015-book.webp",
      downloadUrl:
        "https://www.crescentrating.com/download/thankyou.html?file=XYbSkbwG_gmti-2015.jpg",
    },
  ], []);

  const journeySteps = [
    {
      number: 1,
      label: "2011",
      description:
        "CrescentRating first introduced the Halal Friendly Travel Ranking. The inaugural ranking consisted of the top 10 halal-friendly holiday destinations and the top 2 halal-friendly shopping destinations.",
      imageUrl: "/image/gmti/miles-2011.webp",
    },
    {
      number: 2,
      label: "2012",
      description:
        "The ranking evolved into the CRaHFT (Crescentrating Halal Friendly Travel) Ranking, indicating a more inclusive and comprehensive focus on Halal-friendly services and facilities. The rankings expanded to include various categories such as halal food blogs, airports, Islamic art museums, and restaurants in specific countries.",
      imageUrl: "/image/gmti/miles-2012.webp",
    },
    {
      number: 3,
      label: "2013",
      description:
        "CRaHFT rankings covered top Halal-friendly holiday destinations, Ramadhan destinations, destinations for newlyweds, Halal food websites and Facebook pages, Airports, and Shopping destinations.",
      imageUrl: "/image/gmti/miles-2013.webp",
    },
    {
      number: 4,
      label: "2014",
      description:
        "The 4th CRaHFT Ranking consecutive year that CrescentRating announced its ranking of Halal-friendly holiday destinations. It covered 6o destinations. It also ranked in the Top 10 Halal Food Facebook Pages & Websites.",
      imageUrl: "/image/gmti/miles-2014.webp",
    },
    {
      number: 5,
      label: "2015",
      description:
        "The CRaHFT Ranking transitioned to become the Global Muslim Travel Index (GMTI). This change formalized the index's focus on benchmarking destinations in the Muslim travel market. The GMTI 2015 edition was a significant milestone as it marked the most comprehensive research conducted on halal and Muslim travel, tourism, and hospitality. The collaboration between Mastercard and CrescentRating analyzed 100 destinations worldwide to create the index.",
      imageUrl: "/image/gmti/miles-2015.webp",
    },
    {
      number: 6,
      label: "2016",
      description:
        "The number of destinations covered in the report increased to 130 from 100 in the previous year.",
      imageUrl: "/image/gmti/miles-2016.webp",
    },
    {
      number: 7,
      label: "2017",
      description:
        "The 2017 GMTI introduced the GMTI Visitor Experience Map and CrescentRating ACES Tool. These additions aimed to enhance the understanding of Muslim traveler preferences and experiences.",
      imageUrl: "/image/gmti/miles-2017.webp",
    },
    {
      number: 8,
      label: "2018",
      description:
        "The 2018 GMTI brought an updated index criteria and introduced the 'CrescentRating Growth & Innovation Model.' These changes were designed to help destinations better target and cater to the growing halal travel market.",
      imageUrl: "/image/gmti/miles-2018.webp",
    },
    {
      number: 9,
      label: "2019",
      description:
        "The report introduced Halal Travel Development Goals, an updated Faith-Based Service Needs model, and a refined ACES measurement. These enhancements reflected the evolving preferences and needs of Muslim travelers.",
      imageUrl: "/image/gmti/miles-2019.webp",
    },
    {
      number: 10,
      label: "2020",
      description:
        "Due to the global pandemic caused by COVID-19, the GMTI was not published in 2020. The unprecedented disruptions in international travel during that period necessitated a pause in the annual publication.",
      imageUrl: "/image/gmti/miles-2020.webp",
    },
    {
      number: 11,
      label: "2021",
      description:
        'The report highlighted the significant toll COVID-19 had on global travel. The report fine-tuned the "CrescentRating ACES model" to better reflect the current developments in the sector. The number of destinations ranked in the report increased to 140 from 130.',
      imageUrl: "/image/gmti/miles-2021.webp",
    },
    {
      number: 12,
      label: "2022",
      description:
        "The GMTI 2022 continued to rank 138 destinations, evaluating their preparedness to leverage the Muslim travel market for post-pandemic recovery. Additionally, the report explored key drivers that would propel the halal travel market in its next development phase.",
      imageUrl: "/image/gmti/miles-2022.webp",
    },
    {
      number: 13,
      label: "2023",
      description:
        "The 8th edition of the Mastercard-Crescentrating Global Muslim Travel Index (GMTI) 2023 report further evolved to cater to the changing landscape of Muslim travel. The report introduced the Muslim Travel Intent Tracker (MTIT) to gauge evolving travel preferences among Muslim travelers. Furthermore, it introduced the Muslim Traveler Responsible Tourism Framework, encouraging sustainable practices aligned with faith, cultural preservation, and local economies. The report includes top-ranking destinations, the revolutionary GMTI Performance Matrix (GPM), and projections of Muslim traveler arrivals and expenditures.",
      imageUrl: "/image/gmti/miles-2023.webp",
    },
    {
      number: 14,
      label: "2024",
      description: "",
      imageUrl: "/image/gmti/miles-2024.webp",
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [activeDescription, setActiveDescription] = useState(
    reportSlides[0]?.description || ""
  );
  const [activeDownloadUrl, setActiveDownloadUrl] = useState(
    reportSlides[0]?.downloadUrl || ""
  );
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (!api) return;
    const handleScroll = () => {
      const newDescription =
        reportSlides[api.selectedScrollSnap()]?.description;
      if (!newDescription) {
        console.log("Description not found");
        return;
      }
      const newDownloadUrl =
        reportSlides[api.selectedScrollSnap()]?.downloadUrl;
      if (!newDownloadUrl) {
        console.log("Description not found");
        return;
      }
      setActiveDescription(newDescription);
      setActiveDownloadUrl(newDownloadUrl);
    };
    api.on("scroll", handleScroll);
    return () => {
      api.off("scroll", handleScroll);
    };
  }, [api, reportSlides]);

  const handleNext = () => {
    if (currentStep < Math.max(...journeySteps.map((step) => step.number))) {
      setCurrentStep((prev) =>
        Math.min(prev + 1, Math.max(...journeySteps.map((step) => step.number)))
      );
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  return (
    <div className="gmti-2024 w-full flex flex-col md:gap-48 gap-8 justify-center items-center md:mt-14 mt-8 overflow-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <section className="w-full flex flex-col">
        <section className="w-full flex flex-col justify-center items-center mb-8">
          <p className="lg:text-xl md:text-lg text-base leading-[154%] font-bold text-custom-blue">
            MASTERCARD-CRESCENTRATING
          </p>
          <p className="lg:text-5xl md:text-4xl text-2xl leading-[146%] font-extrabold justify-center text-center">
            Global Muslim Travel Index
          </p>
        </section>
        <Carousel
          opts={{
            loop: true,
            breakpoints: {
              default: { align: "center" },
              "(min-width: 768px)": { align: "start" },
            },
          }}
          className="flex md:flex-row flex-col-reverse gmti-top-carousel xl:ml-20 md:ml-8"
          setApi={setApi}
        >
          <div className="flex flex-col md:flex-wrap md:mt-0 md:mx-auto lg:w-[478px] md:px-6 mt-4">
            <CarouselTextLinks
              className="gmti-top-carousel-dots lg:gap-1 flex-nowrap overflow-x-scroll overflow-y-clip justify-between md:ml-0 sm:ml-6 ml-0 scrollbar-hidden"
              labels={[
                "2024",
                "2023",
                "2022",
                "2021",
                "2019",
                "2018",
                "2017",
                "2016",
                "2015",
              ]}
            />

            <div className="flex flex-col flex-wrap md:gap-0 gap-4">
              <p className="flex justify-center lg:text-xl md:text-lg text-base text-gray-500 md:mt-6 mt-3 md:mx-0 ml-6 mr-6 md:leading-[156%] leading-[157%] ">
                {activeDescription}
              </p>
              <a
                className="w-[max-content] h-[max-content] md:px-0 px-6"
                target="_blank"
                href={`${activeDownloadUrl}`}
              >
                <Button className="flex flex-row w-full text-lg gap-2 hover:bg-custom-blue mt-6 border-custom-blue text-custom-blue font-bold rounded-full max-w-[250px] md:p-8 p-6 hover:text-white ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:stroke-white stroke-current"
                  >
                    <path
                      d="M9 11V17L11 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 17L7 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Download Report</p>
                </Button>
              </a>
            </div>
            <div className="gmti-top-carousel-button flex flex-row flex-wrap md:mt-5 mt-12 md:pl-0 pl-6">
              <CarouselPrevious className="relative shadow-lg -left-0 h-[40px] w-[40px]" />
              <CarouselNext className="relative shadow-lg -right-5 h-[40px] w-[40px]" />
            </div>
          </div>
          <div className="xl:w-[56%] md:w-[53%] w-[100%] flex flex-row flex-wrap align-baseline lg:ml-10">
            <CarouselContent className="flex flex-nowrap -ml-1">
              {Array.from(reportSlides).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-inline flex-shrink-0 lg:basis-[405px] md:basis-[305px] basis-auto pl-0"
                >
                  <div className="p-4">
                    <Card className="overflow-hidden">
                      <CardContent
                        className="gmti-top-carousel-card relative flex flex-col items-center justify-center rounded-lg shadow-lg overflow-hidden group min-[992px]:w-[294px] min-[992px]:h-[417px] md:w-[220px] md:h-[313px] w-[144px] h-[204px] transition-[width] opacity-50 duration-150"
                        style={{
                          backgroundImage: `url(${reportSlides[index].imageUrl})`,
                          backgroundSize: "contain",
                        }}
                      ></CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </section>
      <section className="lg:w-[75%] w-full md:px-0 px-4 flex justify-center items-center">
        <div className="w-full h-full bg-gradient-to-b from-salt-egg to-[#FBFBFE] rounded-xl flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 md:px-12 md:py-16">
          <div className="bg-salt-egg p-3 rounded-lg w-full">
            <ImageWithFallback
              width={0}
              height={0}
              sizes="100vw"
              className="md:w-[400px] md:h-full md:max-h-[1000px] max-h-[200px] w-full object-cover rounded-lg"
              priority={false}
              src="/image/gmti-image.webp"
              alt="gmti"
            />
          </div>
          <div className="w-full flex flex-col p-3 gap-6 h-full justify-start items-start">
            <div className="flex flex-col">
              <p className="lg:text-xl md:text-lg text-base leading-[154%] font-bold text-custom-blue">
                ABOUT US
              </p>
              <p className="lg:text-5xl md:text-4xl text-2xl leading-[146%] font-extrabold justify-center">
                What is GMTI?
              </p>
            </div>
            <div className="flex flex-col md:gap-6 gap-4 text-gray-500">
              <p className="text-base">
                The Global Muslim Travel Index (GMTI) is an annual report
                benchmarking destinations in the Muslim travel market. Developed
                through a collaboration between Mastercard and CrescentRating,
                it analyzes 100+ destinations worldwide, assessing their
                readiness to cater to halal and Muslim-friendly travelers. With
                a comprehensive approach, GMTI offers valuable insights into the
                resilient and fast-growing Muslim travel sector. GMTI&apos;s
                significance lies in shaping the future of halal and
                Muslim-friendly travel and tourism, aiding destinations, and
                businesses to target the lucrative Muslim travel market
                effectively.
              </p>
              <p className="text-base">
                As the most extensive research project in the halal and Muslim
                travel sector, GMTI sheds light on the evolving preferences and
                needs of Muslim travelers, offering valuable insights to
                destinations and businesses seeking to tap into this rapidly
                growing market. The index&apos;s importance lies in its ability
                to help stakeholders understand the diverse requirements of
                Muslim travelers and tailor their offerings accordingly. From
                halal food availability and prayer facilities to cultural
                preservation and responsible tourism practices, GMTI encompasses
                a wide range of criteria to assess destinations&apos; readiness
                to welcome Muslim visitors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[90%] flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-center">
          <p className="lg:text-xl md:text-lg text-base leading-[154%] font-bold text-custom-blue">
            MILESTONE
          </p>
          <p className="lg:text-5xl md:text-4xl text-2xl leading-[146%] font-extrabold justify-center">
            Our Journey
          </p>
        </div>
        <div className="w-full flex flex-col mx-auto pt-4 justify-center items-center">
          <Stepper
            steps={journeySteps}
            currentStep={currentStep}
            onStepClick={handleStepClick}
            variant="blank-dot"
          />
          <div className="flex flex-col justify-center items-center">
            <div className="background-component flex relative z-0 -mt-32">
              <div className="mx-auto flex justify-center z-[-2]">
                <svg
                  width="782"
                  height="702"
                  viewBox="0 0 782 702"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-z-[-2] justify-center items-center select-none -mt-8 md:w-[782px] md:h-[702px]"
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
                      <stop offset="0.59375" stopColor="#FCCD0F" />
                      <stop
                        offset="1"
                        stopColor="#AA2222"
                        stopOpacity="0.5"
                      />
                      <stop
                        offset="1"
                        stopColor="#BDA33C"
                        stopOpacity="0.5"
                      />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <p className="absolute inset-x-0 lg:bottom-10 md:bottom-40 bottom-[280px] z-[-1] text-center text-white lg:text-[320px] md:text-[280px] text-[180px] leading-[157%] font-bold select-none">
                {journeySteps[currentStep - 1].label}
              </p>
            </div>
            <div className="absolute flex flex-col justify-center items-center lg:-mt-[200px] md:-mt-[240px] -mt-[360px] select-none">
              <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="lg:w-[400px] md:w-[320px] w-[240px] object-contain rounded-lg select-none pointer-events-none"
                priority={false}
                src={journeySteps[currentStep - 1].imageUrl}
                alt="gmti"
              />
              <div className="relative flex flex-col items-center gap-4 max-w-[717px] z-0">
                <p className="absolute z-20 text-black lg:text-2xl md:text-xl text-lg leading-[157%] font-bold md:-mt-12 -mt-6">
                  {journeySteps[currentStep - 1].label}
                </p>
                <p className="absolute z-20 text-custom-gray-cr-2 lg:text-xl md:text-lg text-base leading-[156%] text-center lg:w-[717px] md:w-[640px] w-[310px] lg:-mt-4 md:-mt-0 mt-2">
                  {journeySteps[currentStep - 1].description}
                </p>
              </div>
            </div>
          </div>
          <div className="gmti-journey-button gap-4 flex justify-between pb-4">
            <Button
              onClick={handlePrev}
              className="relative shadow-lg -left-0 h-[40px] w-[40px] rounded-full"
              disabled={currentStep === 1}
              variant="outline"
              size="icon"
            >
              <ArrowLeft className="size-6" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              onClick={handleNext}
              className="relative shadow-lg -left-0 h-[40px] w-[40px] rounded-full"
              disabled={
                currentStep ===
                Math.max(...journeySteps.map((step) => step.number))
              }
              variant="outline"
              size="icon"
            >
              <ArrowRight className="size-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </section>
      <section className="lg:w-[90%] md:px-0 px-6 w-full h-[max-content] flex justify-center items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-start">
          <div className="flex flex-col justify-start items-start">
            <p className="lg:text-xl md:text-lg text-base leading-[154%] font-bold text-custom-blue">
              GMTI RANK
            </p>
            <p className="lg:text-5xl md:text-4xl text-2xl leading-10 w-[80%] font-extrabold justify-center text-left">
              Destination&apos;s Performance Over Time
            </p>
            <p className="text-gray-500 md:text-base text-mobile-body-2 text-left mt-6">
              arrow-leftarrow-rightmiles-circle-orange
              rank-circle-orange
              GMTI RANK
              Destination&apos;s Performance Over Time
              The Global Muslim Travel Index (GMTI) is committed to expanding its coverage and keeping up with the evolving landscape of Muslim-friendly travel worldwide. Over the years, the GMTI has been inclusive in its approach, continually adding new destinations to maintain a comprehensive view of travel options. This dynamic approach ensures that the index provides valuable information for travelers, destinations, and stakeholders alike. By covering a wide range of destinations, the GMTI serves as an essential resource in meeting the needs of Muslim travelers and promoting inclusivity within the travel industry.
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <div className="flex flex-row justify-start items-center gap-6 w-full">
              <p className="lg:text-xl md:text-lg text-base leading-[154%] font-bold whitespace-nowrap">
                {selectedYear} RANK
              </p>

              {/* Dropdown untuk memilih tahun */}
              <Select onValueChange={handleYearChange}>
                <SelectTrigger className="w-full border-custom-purple-cr rounded-lg">
                  <SelectValue placeholder={<div className="flex flex-row justify-start items-center gap-2 ">
                    <CalendarDays />
                    <p>2024</p>
                  </div>} />
                </SelectTrigger>
                <SelectContent className="border-custom-purple-cr">
                  <SelectItem className="py-3" value="2024">2024</SelectItem>
                  <SelectItem className="py-3" value="2023">2023</SelectItem>
                  <SelectItem className="py-3" value="2022">2022</SelectItem>
                  <SelectItem className="py-3" value="2021">2021</SelectItem>
                  <SelectItem className="py-3" value="2020">2020</SelectItem>
                  <SelectItem className="py-3" value="2019">2019</SelectItem>
                  <SelectItem className="py-3" value="2018">2018</SelectItem>
                  <SelectItem className="py-3" value="2017">2017</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full flex flex-col gap-4">
              {/* Header */}
              <div className="w-full flex flex-row justify-between items-center p-3 rounded-md">
                <p className="text-left w-1/12"></p>
                <p className="text-left w-7/12">Country</p>
                <p className="text-center w-2/12">Score</p>
                <p className="text-center w-2/12">Change</p>
              </div>
              <div className="max-h-[400px] overflow-y-scroll flex flex-col gap-4 w-full">
                {/* Data Rows */}
                {data.length > 0 ? (
                  data.map((row: any, index: number) => (
                    <div
                      key={index}
                      className="w-full flex flex-row justify-between items-center bg-white p-3 border rounded-md"
                    >
                      <p className="text-center w-1/12 flex items-center">
                        {row.Rank === "1" && (
                          <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-6 h-6"
                            priority={false}
                            src="/image/gmti/trophy-1.png"
                            alt="trophy1"
                          />
                        )}
                        {row.Rank === "2" && (
                          <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-6 h-6"
                            priority={false}
                            src="/image/gmti/trophy-2.png"
                            alt="trophy2"
                          />
                        )}
                        {row.Rank === "3" && (
                          <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-6 h-6"
                            priority={false}
                            src="/image/gmti/trophy-3.png"
                            alt="trophy3"
                          />
                        )
                        }
                        {row.Rank !== "1" && row.Rank !== "2" && row.Rank !== "3" && (row.Rank)}
                      </p>
                      <div className="flex flex-row w-7/12">
                        <ImageWithFallback
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-6 h-6 mr-4 rounded-full"
                          priority={false}
                          src={`https://flagcdn.com/w40/${row["Country Code"].toLowerCase()}.png`}
                          alt={`${row.Destination} Flag`}
                        />
                        {row.Destination}
                      </div>
                      <p className="text-center w-2/12">{row.Score}</p>
                      <p
                        className={`text-center w-2/12 flex items-center justify-center ${parseInt(row["Rank Change"], 10) > 0
                          ? "text-green-500"
                          : parseInt(row["Rank Change"], 10) < 0
                            ? "text-red-500"
                            : "text-gray-500"
                          }`}
                      >
                        {parseInt(row["Rank Change"], 10) > 0 ? (
                          <>
                            <span className="mr-1"><ChevronUp /></span>
                            {row["Rank Change"]}
                          </>
                        ) : parseInt(row["Rank Change"], 10) < 0 ? (
                          <>
                            <span className="mr-1"><ChevronDown /></span>
                            {Math.abs(row["Rank Change"])}
                          </>
                        ) : (
                          <>
                            <span className="mr-1"><Equal /></span>
                            {row["Rank Change"]}
                          </>
                        )}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center w-full">No data available for {selectedYear}.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:w-[75%] w-full h-[max-content] flex justify-center items-center">
        <div className="w-full flex flex-col gap-10 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="lg:text-xl md:text-lg text-base leading-[154%] font-bold text-custom-blue">
              TESTIMONIALS
            </p>
            <p className="lg:text-5xl md:text-4xl text-2xl leading-[146%] font-extrabold justify-center text-center">
              What They Said About Us
            </p>
          </div>
          <div className="w-full flex justify-center items-center md:px-0 px-6">
            <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-6">
              <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="md:w-[400px] w-full object-contain rounded-lg"
                priority={false}
                src="/image/testi-1.webp"
                alt="gmti"
              />
              <div className="flex flex-col h-full justify-between items-start w-full md:w-1/2">
                <p className="md:text-[32px] leading-relaxed italic">
                  <span className="md:text-5xl text-3xl text-custom-blue">&quot;</span>
                  …The GMTI reports have helped us to identify the top
                  Muslim-friendly destinations and curate better and more
                  relevant content for our audience. It provides clarity on
                  various different nuances that are expected when creating
                  travel options for Muslims...
                </p>
                <p className="md:text-lg font-bold text-mobile-body-2 md:mt-0 mt-2">Katrina Leung</p>
                <p className="text-gray-500 md:text-base text-mobile-caption-l">
                  Managing Director of Messe Berlin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="lg:text-xl md:text-lg text-base font-bold text-custom-blue">GALLERY</p>
          <p className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-relaxed">
            GMTI Over The Years
          </p>
          <p className="text-gray-500 lg:w-[65%] w-full lg:px-0 px-6 md:text-base text-mobile-body-2 text-center ">
            The Global Muslim Travel Index (GMTI) is committed to expanding its
            coverage and keeping up with the evolving.
          </p>
        </div>
        <div className="w-full flex justify-center items-center md:px-0 px-6 pb-14">
          <Carousel className="md:w-[95%] w-full">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent
                        className="relative w-full md:h-[350px] h-[200px] flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-lg group"
                        style={{
                          backgroundImage: "url('/image/gmti-image.webp')",
                          backgroundSize: "contain",
                        }}
                      >
                        <div className="absolute flex p-2 justify-center items-center top-0 left-0 bg-custom-blue h-12 w-28 rounded-br-xl">
                          <p className="text-white font-extrabold md:text-xl text-lg tracking-wide">
                            2021
                          </p>
                        </div>
                        <div className="absolute p-4 inset-0 bg-gradient-to-b from-transparent to-black/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300 flex items-end justify-start rounded-lg">
                          <p className="text-white font-bold md:text-xl text-base tracking-wide text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Global Muslim Travel Index 2016 Launch Event,
                            Jakarta
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute  flex items-center justify-center -bottom-12 left-1/2 -translate-x-1/2 gap-4">
              <CarouselPreviousCustom />
              <CarouselNextCustom />
            </div>

          </Carousel>
        </div>
      </section>
      <section className="lg:w-[75%] w-full">
        <section className="w-full flex flex-col justify-center md:gap-10 gap-6 items-center md:px-12 md:py-16">
          <div className="flex flex-col justify-center items-center">
            <p className="lg:text-xl md:text-lg text-base font-bold text-custom-blue">NEWS</p>
            <p className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-relaxed">GMTI News</p>
            <p className="text-gray-500 lg:w-[65%] w-full lg:px-0 px-6 md:text-base text-mobile-body-2 text-center">
              The Global Muslim Travel Index (GMTI) is committed to expanding
              its coverage and keeping up with the evolving.
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1">
            <GmtiCard />
            <GmtiCard />
            <GmtiCard />
          </div>
          <Button className="hover:bg-custom-blue border-custom-blue text-custom-blue font-bold rounded-full w-full max-w-[250px] md:p-8 p-2 hover:text-white">
            View All
          </Button>
        </section>
      </section>
    </div>
  );
}

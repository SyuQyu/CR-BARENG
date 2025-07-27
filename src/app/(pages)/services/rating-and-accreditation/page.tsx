import { BasicCard, Button, ImageWithFallback } from "@/components/common";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/defaultCarousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { medpart, cardData, tabsDataRatingAndAccreditation } from "@/constants/dummyData";
import { MoveRight } from "lucide-react";
import Link from "next/link";
export default function RatingAndAccreditation() {


    function Roadmap() {
    const firstSteps = [
        { label: "Sign Up", description: "Register & create an account on CrescentRating", dot: "border-yellow-900", bg: "bg-yellow-100" },
        { label: "Apply", description: "Submit Application Online", dot: "border-yellow-900", bg: "bg-yellow-100" },
        { label: "Review", description: "CrescentRating will review the application & issue a tentative rating", dot: "border-indigo-800", bg: "bg-indigo-100" },
        { label: "Audit", description: "Conduct in-person/virtual audit of the establishment", dot: "border-indigo-800", bg: "bg-indigo-100" },
    ];

    const secondSteps = [
        { label: "Pay", description: "Make payment for the annual rating services", dot: "border-yellow-900", bg: "bg-yellow-100" },
        { label: "Display", description: "Download the rating collaterals and display them in the marketing channels", dot: "border-yellow-900", bg: "bg-yellow-100" },
        { label: "Publish", description: (
      <>
        The establishment will be published and listed on:<br />
        1. CrescentRating Member Directory Listing<br />
        2. HalalTrip Member Directory Listing
      </>
    ), dot: "border-indigo-800", bg: "bg-indigo-100" },
        { label: "Confirm", description: "CrescentRating will review audit report & award the final rating", dot: "border-indigo-800", bg: "bg-indigo-100" },
    ];

    const thirdStep = { label: "Promote", description: "HalalTrip will begin the promotion campaigns", dot: "border-green-800", bg: "bg-green-100" };

    return (
        <div className="w-full">
        {/* Desktop */}
        <div className="hidden lg:block relative w-full">
            <div className="flex justify-between -mb-1.5 z-10 relative">
            {firstSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                <Button className={`text-lg w-32 h-7 rounded ${step.bg} text-[0.75rem] text-center flex items-center justify-center`}>
                    <p className="text-lg">{step.label}</p>
                </Button>
                <div className={`w-3 h-3 mt-1 rounded-full border-2 ${step.dot}`} />
                </div>
            ))}
            </div>

            <div className="w-[85rem] rounded-tr-[5rem] rounded-br-[5rem] h-[15rem] border-r-2 border-t-2 border-b relative translate-x-14" />

            <div className="absolute top-[15rem] left-0 w-full flex justify-between z-10">
            {secondSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                <Button className={`text-lg w-32 h-7 rounded ${step.bg} text-[0.75rem] text-center flex items-center justify-center`}>
                    <p className="text-lg">{step.label}</p>
                </Button>
                <div className={`w-3 h-3 mt-1 rounded-full border-2 ${step.dot}`} />
                </div>
            ))}
            </div>

            <div className="w-[46.5rem] rounded-bl-[5rem] rounded-tl-[5rem] h-[15rem] border-dashed border-l-2 border-t border-b-2 relative -translate-x-14" />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center z-10">
            <Button className={`text-lg w-32 h-7 rounded ${thirdStep.bg} text-[0.75rem] text-center flex items-center justify-center`}>
                <p className="text-lg">{thirdStep.label}</p>
            </Button>
            <div className={`w-3 h-3 mb-1 rounded-full border-2 ${thirdStep.dot}`} />
            </div>
        </div>

        <div className="lg:hidden flex flex-col items-start relative pl-6 mt-6">
        {[...firstSteps, ...secondSteps, thirdStep].map((step, i, arr) => (
            <div key={i} className="relative flex items-center mb-6">
            {i < arr.length - 1 && (
                <div className="absolute left-[0.3rem] top-[5rem] h-full w-px bg-gray-300 z-0" />
            )}
            <div className={`w-3 h-3 rounded-full border-2 ${step.dot} bg-white z-10`} />
            <div className={`flex ml-4 text-sm w-20 h-8 rounded items-center justify-center ${step.bg} font-semibold`}>
                {step.label}
            </div>
            <div className={`flex ml-4 text-sm w-52 min-h-[10rem] px-4 rounded items-center justify-center ${step.bg} font-semibold`}>
                {step.description}
            </div>
            </div>
        ))}
        </div>

        </div>
    );
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
                style={{ backgroundImage: "url('/image/rating-accreditation/main.webp')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
                        <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                            Our Service
                        </p>
                        <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
                            Rating and Accreditation
                        </h1>
                        <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
                            Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum
                            non consectetur nec platea gravida ac.
                        </p>
                    </div>
                </div>
            </section>
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col w-full gap-4 justify-start items-start">
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold sm:w-[45%] w-full">
                            Why you Should Become a Member of the Crescent Rated Services
                        </p>
                        <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 sm:w-[45%] w-full">
                            Lorem ipsum dolor sit amet consectetur. Nulla cras nunc justo morbi id curabitur. Luctus varius ipsum nisl enim tempor suspendisse fusce.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 w-full mt-10 ">
                        {cardData.map((card, index) => (
                            <BasicCard key={index} useButton={false} className="bg-neutral-100">
                                <div className="w-full flex flex-col gap-4 justify-start items-start">
                                    <div className="bg-[#F1F3FF] p-2">
                                        {card.icon}
                                    </div>
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
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[40%]">How to get Crescent Rated</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">Step-by-step guide to achieving CrescentRating&apos;s accreditation</p>
                    <div className="w-full flex flex-col justify-center items-center gap-8">
                        <div className="w-auto flex min-[400px]:flex-row flex-col justify-center items-center  gap-4 mt-12">
                            <div className="bg-neutral-100 p-4 flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                    <circle cx="4.5" cy="4.5" r="3" fill="#FFFAC6" stroke="#7A3F0D" stroke-width="2" />
                                </svg>
                                <p className="pl-2 lg:text-desktop-body-2 font-semibold text-mobile-body-2 text-black">Establishment</p>
                            </div>
                            <div className="bg-neutral-100 p-4 flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                    <circle cx="4.5" cy="4.5" r="3" fill="#F1F3FF" stroke="#1504AE" stroke-width="2" />
                                </svg>
                                <p className="pl-2 lg:text-desktop-body-2 font-semibold text-mobile-body-2 text-black">CrescentRating</p>
                            </div>
                            <div className="bg-neutral-100 p-4 flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                    <circle cx="4.5" cy="4.5" r="3" fill="#EDFCF3" stroke="#094B31" stroke-width="2" />
                                </svg>
                                <p className="pl-2 lg:text-desktop-body-2 font-semibold text-mobile-body-2 text-black">HalalTrip</p>
                            </div>
                        </div>
                            <Roadmap />

                            {/* <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-contain min-w-[1173px] md:block hidden"
                                priority={false}
                                src={"/image/rating-accreditation/roadmap-phone.svg"}
                                alt={"roadmap"}
                            /> */}
                    </div>
                </section>
                {/* <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[30%]">Get your Establishment Crescent Rated</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-1 text-center text-gray-500 w-[90%] lg:w-[50%]">Become a Crescent Rated establishment to gain a competitive edge and demonstrate your commitment to inclusivity.</p>
                    <div className="w-full flex flex-col justify-center items-center gap-8 mt-10">
                        <Tabs
                            defaultValue="hotel"
                            align="start"
                            className=" w-full z-10"
                            responsiveTabPosition="top"
                            desktopTabPosition="left"
                            mobileMode="select"
                        >
                            <TabsList className="!border-none w-[20%]">
                                {tabsDataRatingAndAccreditation.map((tab) => (
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

                            {tabsDataRatingAndAccreditation.map((tab) => (
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
                                            <Link href={tab.url} className="!px-0 text-primary-cr-700 justify-start flex flex-row !border-none items-center">
                                                View More <MoveRight className="ml-2 mt-1 size-5" />
                                            </Link>
                                        </div>
                                    </div>
                                    {
                                        tab.value === "hotel" && (
                                            <div className="bg-[linear-gradient(118deg,_#F1F3FF_15.36%,_#CED2FF_84.64%)] p-6 flex flex-col justify-start items-start gap-2">
                                                <p className="md:text-desktop-heading-6 font-bold text-mobile-heading-5">Do you have what it takes to be CrescentRated?</p>
                                                <p className="md:text-desktop-body-2 text-mobile-body-2 text-gray-500">Before you register your hotel and unlock the official Halal-Friendly rating, we offer you a unique opportunity to self-diagnose your hotel&apos;s Halal-Friendly status. Our self-diagnostic tool allows you to assess and elevate your establishment&apos;s Halal-Friendly practices to ensure a delightful experience for our discerning Muslim travelers.</p>
                                                <Button className="!py-5 !px-6 bg-white text-primary-cr-700">Take the Test</Button>
                                            </div>
                                        )
                                    }
                                </TabsContent>
                            ))}
                        </Tabs>

                    </div>
                </section> */}
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[40%]">Trusted by Many Establishments Around the World</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">Years of Experience, Countless Mentions Across Industries, and a Reputation Built on Global Trust and Reliability</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start md:p-8 p-6 w-full gap-1 bg-neutral-100">
                        <div className="w-full flex flex-col justify-center items-center  gap-.5">
                            <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">35+</p>
                            <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">Global partners & clients</p>
                        </div>
                        <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full my-2"></div>
                        <div className="w-full flex flex-col justify-center items-center gap-.5">
                            <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">10k+</p>
                            <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">Media Mentions</p>
                        </div>
                        <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full my-2"></div>
                        <div className="w-full flex flex-col justify-center items-center gap-.5">
                            <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">15+</p>
                            <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">Years of experience</p>
                        </div>
                        <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full my-2"></div>
                        <div className="w-full flex flex-col justify-center items-center gap-.5">
                            <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">25+</p>
                            <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">Destinations services provided</p>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full">
                    <div className="w-full flex flex-col justify-center items-center gap-12">
                        <p className="lg:text-desktop-body-1 text-mobile-body-2 font-bold text-[#434343]">Clients</p>
                        <Carousel className="w-full">
                            <CarouselContent>
                                {medpart.map((item, index) => (
                                    <CarouselItem key={index} className="md:basis-1/5 sm:basis-1/4 basis-1/3 flex justify-center items-center">
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
            </div>
        </div >
    )
}
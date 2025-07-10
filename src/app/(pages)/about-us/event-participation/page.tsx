'use client'
import { ImageWithFallback, Button, Pagination } from "@/components/common";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Search } from "lucide-react";
import { eventsData } from "@/constants/dummyData";
import { useState } from "react";
export default function OurEvents() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Fetch data or update UI based on the new page
    };
    return (
        <div className="w-full flex flex-col justify-center items-center ">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
                style={{ backgroundImage: "url('/image/our-events/hero.jpg')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
                        <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                            About Us
                        </p>
                        <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
                            Event Participation
                        </h1>
                        <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
                            Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum
                            non consectetur nec platea gravida ac.
                        </p>
                    </div>
                </div>
            </section>
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full">
                    <section className="mt-10 flex justify-start items-start w-full relative">
                        <Tabs defaultValue="all-events" className="w-full">
                            <TabsList className="w-full lg:overflow-hidden overflow-x-scroll !border-none">
                                <TabsTrigger className="w-full" value="all-events">All Events</TabsTrigger>
                                <TabsTrigger className="w-full" value="upcoming-events">Upcoming Events</TabsTrigger>
                                <TabsTrigger className="w-full" value="past-events">Past Events</TabsTrigger>
                            </TabsList>

                            {Object.entries(eventsData).map(([key, items]) => (
                                <TabsContent key={key} value={key} activeValue={key} className="w-full flex md:flex-row flex-col justify-between md:gap-8 gap-0 items-start">
                                    <div className="mt-8 w-full  flex flex-col gap-6">
                                        {items.map((event, index) => (
                                            <div key={index} className="border rounded-xl p-4 shadow-sm flex flex-row justify-between gap-4">
                                                <div className="flex md:flex-row flex-col gap-4 items-start justify-start w-full">
                                                    <div className="w-full h-full md:max-w-[350px] md:max-h-[250px] max-h-[200px] relative">
                                                        <ImageWithFallback
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                            className="w-full h-full rounded-lg object-cover"
                                                            src={event.image}
                                                            alt={event.title}
                                                        />
                                                        <ImageWithFallback
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                            className="size-[40px] rounded-full object-cover md:hidden block absolute bottom-3 right-3"
                                                            src={event.logo}
                                                            alt={event.title}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col h-full justify-between items-start w-full">
                                                        <div className="flex flex-col gap-.5 w-full">
                                                            <h3 className="sm:text-desktop-body-2 text-mobile-heading-4 font-semibold">{event.title}</h3>
                                                            <div className="flex flex-row gap-2 items-center justify-start mt-2">
                                                                <span className="bg-blue-100 text-blue-700 font-semibold text-desktop-label-s px-2 py-1 rounded flex flex-row gap-1"><MapPin className="size-4 mt-[1px]" />{event.location}</span>
                                                                <span className="bg-blue-100 text-blue-700 font-semibold text-desktop-label-s px-2 py-1 rounded flex flex-row gap-1"><Calendar className="size-4 mt-[1px]" />{event.date}</span>
                                                            </div>
                                                            <p className="my-3 sm:text-desktop-body-3 text-mobile-body-3 !leading-loose">{event.description}</p>
                                                        </div>
                                                        <Button className="font-semibold text-mobile-body-2 bg-custom-blue text-white py-2 sm:py-3 px-4 sm:px-5">
                                                            Register Now
                                                        </Button>
                                                    </div>
                                                </div>
                                                <ImageWithFallback
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    className="size-[60px] rounded-full object-cover md:block hidden"
                                                    src={event.logo}
                                                    alt={event.title}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </section>
                </section>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
                <section className="max-w-[1440px] w-full px-6 lg:px-8">
                    <div
                        className="w-full flex flex-col justify-center items-center rounded-lg"
                        style={{ backgroundImage: "url('/image/our-events/bg-img2.jpg')", backgroundSize: "contain" }}
                    >
                        <div className="w-full h-full min-h-[300px] px-6 text-white flex rounded-lg flex-col gap-2 sm:gap-4 justify-center items-center bg-primary-cr-700/60">
                            <p className="sm:text-desktop-heading-2 text-mobile-heading-4 font-bold mb-4 text-center w-full">
                                Request Our Participation in Your Event
                            </p>
                            <p className="sm:text-desktop-body-2 text-mobile-body-3 text-center">
                                Invite CrescentRating & HalalTrip to speak, collaborate, or contribute to meaningful discussions.
                            </p>
                            <a href="mailto:info@crescentrating.com" className="mt-4">
                                <Button className="!py-5 !px-6 bg-white sm:min-w-[280px] sm:text-desktop-body-2 text-mobile-body-3 text-primary-cr-700">
                                    Submit an Invitation
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
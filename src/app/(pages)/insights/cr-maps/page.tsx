import { BasicCard, Button, CheckBox, HeroCard, ImageWithFallback, Input } from "@/components/common";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/defaultCarousel";
import { CircleCheck, Link } from "lucide-react";
import { medpart, cardData, categoriesServices, servicesData } from "@/constants/dummyData";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export default function ContactUs() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
                style={{ backgroundImage: "url('/image/cr-maps/hero.jpg')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
                        <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                            Our Service
                        </p>
                        <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
                            CR MAPS
                        </h1>
                        <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
                            Your essential data intelligence platform for navigating and excelling in the global Muslim market.
                        </p>
                    </div>
                </div>
            </section>
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center gap-10">
                    <div className="flex md:flex-row flex-col justify-between items-center w-full px-8 py-10 bg-[#FAF9FA] gap-6">
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full max-w-[398px]"
                            src="/image/cr-maps/logo-cr-maps.png" alt="logo-hit" />
                        <div className="flex flex-col justify-start items-start gap-2">
                            <p className="md:text-desktop-heading-4 text-mobile-heading-3 font-bold">About CR MAPS</p>
                            <p className="md:text-desktop-body-2 text-mobile-body-2 text-justify text-neutral-500">CrescentRating Market Analytics Performance Solutions (CR MAPS) is your premier source for business intelligence on the global Muslim market. We&apos;re here to help you navigate and thrive in this dynamic segment. At CrescentRating, we believe in the power of data to unlock potential, and our team is committed to delivering the precise insights you need to make informed, impactful decisions. Our journey began by recognizing the Muslim market&apos;s significant and growing influence, and the challenge organizations faced in finding actionable data. We built CR MAPS to be a comprehensive platform that not only captures the latest worldwide trends but also transforms raw data into deep analytical insights crucial for strategic growth.</p>
                        </div>
                    </div>
                    <div className="w-full mb-12">
                        <iframe
                            title="CR MAPS"
                            src="https://app.powerbi.com/view?r=eyJrIjoiZGQ3NzZkODctYTUwMS00YjNlLWE4OTgtNjMyZjRlOTk5ZGMyIiwidCI6IjQzY2MwMWEwLTI2NzctNGZjNi1iNzg5LTYzMzg3NTI5YmQxOCIsImMiOjEwfQ%3D%3D"
                            frameBorder="0"
                            allowFullScreen
                            className="w-full aspect-video max-h-[600px]"
                        ></iframe>
                    </div>
                </section>
            </div>
        </div >
    )
}
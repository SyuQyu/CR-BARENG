import { BasicCard, Button, CheckBox, HeroCard, ImageWithFallback } from "@/components/common";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/defaultCarousel";
import { CircleCheck } from "lucide-react";
import { medpart, cardData, categoriesServices, servicesData } from "@/constants/dummyData";
export default function OurServices() {
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
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col w-full gap-4 justify-start items-start">
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold sm:w-[45%] w-full">
                            Why you Should Become a Member of the Crescent Rated Services
                        </p>
                        <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 sm:w-[45%] w-full">
                            Lorem ipsum dolor sit amet consectetur. Nulla cras nunc justo morbi id curabitur. Luctus varius ipsum nisl enim tempor suspendisse fusce.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 w-full ">
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
                    <Button className="text-white bg-primary-cr-700 sm:!text-desktop-body-2 !text-mobile-body-3 hover:bg-primary-cr-600">
                        See Our Member Directory
                    </Button>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[40%]">Our Services</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">Lorem ipsum dolor sit amet consectetur. Nulla cras nunc justo morbi id curabitur. Luctus varius ipsum nisl enim tempor suspendisse fusce.</p>
                    <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start gap-8 mt-10">
                        {servicesData.map((card, index) => (
                            <HeroCard
                                imagePosition="top"
                                key={index}
                                rounded={false}
                                titleTextColor="text-black"
                                descriptionTextColor="text-gray-500"
                                imageUrl={card.imageUrl}
                                imageAlt={card.imageAlt}
                                title={card.title}
                                description={card.description}
                                link="#"
                            />
                        ))}
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[35%]">Trusted by Global Clients and Countries</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">We’re proud to work with top clients and countries worldwide, supporting their journey to offer Muslim-friendly services and experiences.</p>
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
                        <p className="sm:text-desktop-body-2 text-mobile-body-2 font-bold text-[#434343]">Clients</p>
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
                <section className="w-full flex flex-col justify-center items-center gap-8 bg-[#FAF9FA]">
                    <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[35%]">Who Can Benefit from Our Expertise?</p>
                        <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">Lorem ipsum dolor sit amet consectetur. Nulla cras nunc justo morbi id curabitur. Luctus varius ipsum nisl enim tempor suspendisse fusce.</p>
                        <div className="w-full flex md:flex-row flex-col justify-center items-start md:gap-24 gap-12 mt-12">
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-cover max-h-[411px] rounded-lg"
                                priority={false}
                                src={"/image/rating-accreditation/imgrating.webp"}
                                alt={"imgrating"}
                            />
                            <div className="w-[80%] flex flex-col gap-8 justify-start items-start">
                                <div className="flex flex-col gap-2 justify-start items-start">
                                    <p className="font-bold tex sm:text-desktop-body-1">Lorem ipsum dolor sit amet consectetur.</p>
                                    <p className="text-mobile-body-2 sm:text-desktop-body-2 text-gray-500">Lorem ipsum dolor sit amet consectetur. Nulla cras nunc justo morbi id curabitur. Luctus varius ipsum nisl enim tempor suspendisse fusce.</p>
                                </div>
                                <div className="grid min-[450px]:grid-cols-2 grid-cols-1 gap-6 justify-start items-start">
                                    {categoriesServices.map((item, index) => (
                                        <div key={index} className="flex flex-row gap-6 justify-start items-start">
                                            <div><CircleCheck className="text-primary-cr-700 p-1 rounded-full size-7 font-bold" /></div> <p className="sm:text-desktop-body-2 text-mobile-body-2">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[35%]">Frequently Asked Questions</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">Lorem ipsum dolor sit amet consectetur. Nulla cras nunc justo morbi id curabitur. Luctus varius ipsum nisl enim tempor suspendisse fusce.</p>
                    <div className="w-full flex md:flex-row flex-col justify-center items-start md:gap-24 gap-12 mt-12 md:px-28">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">Find Professionals by Certification</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                                    <p className="text-mobile-body-2 sm:text-desktop-body-2">Lorem ipsum dolor sit amet consectetur. Risus vitae blandit faucibus id urna quis nisl egestas. Ultrices aenean metus duis mi nisi viverra nulla diam.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">Find Professionals by Certification</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                                    <p className="text-mobile-body-2 sm:text-desktop-body-2">Lorem ipsum dolor sit amet consectetur. Risus vitae blandit faucibus id urna quis nisl egestas. Ultrices aenean metus duis mi nisi viverra nulla diam.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">Find Professionals by Certification</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                                    <p className="text-mobile-body-2 sm:text-desktop-body-2">Lorem ipsum dolor sit amet consectetur. Risus vitae blandit faucibus id urna quis nisl egestas. Ultrices aenean metus duis mi nisi viverra nulla diam.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>
            </div>
        </div >
    )
}
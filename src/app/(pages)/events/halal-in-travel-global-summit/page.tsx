'use client'
import { Button, HeroCard, HITGSCard, ImageWithFallback, Input, Pagination } from "@/components/common";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel as Carousel2, CarouselContent as CarouselContent2, CarouselItem as CarouselItem2, CarouselNext as CarouselNext2, CarouselPrevious as CarouselPrevious2 } from "@/components/ui/carouselCustom2";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi, } from "@/components/ui/defaultCarousel";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { hitgsData, mediaHITGSData, carouselDataHITGS } from "@/constants/dummyData";
export default function HalalMusimTravelGlobalSummit() {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


    return (
        <div className="w-full gap-24 flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center  pb-24 items-center flex-row bg-center"
                style={{ backgroundImage: "url('/image/hitgs/main.webp')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center ">
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full max-h-[180px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[450px] xl:w-[450px] xl:max-w-[450px] object-contain"
                        priority={false}
                        src="/image/hitgs/hitgs-logo.png"
                        alt="logo"
                    />
                    <div className="flex w-full flex-col justify-center items-center mt-6">
                        <p className="text-white text-center sm:text-desktop-body-1 text-mobile-body-2 font-semibold relative z-20 max-w-4xl">
                            Empowering the Future of Travel: Unlocking the Billion-Dollar Halal Market
                        </p>
                        <div className="flex flex-row justify-center items-center md:gap-16 gap-6 sm:mt-12 mt-8">
                            <button className="font-semibold text-mobile-body-2 text-custom-blue bg-white py-2 sm:py-3 px-4 sm:px-5">
                                Learn More
                            </button>
                            <button className="font-semibold text-mobile-body-2 bg-custom-blue text-white py-2 sm:py-3 px-4 sm:px-5">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-7 sm:mt-14 w-full flex h-full md:pb-[150px] sm:pb-[380px] pb-[280px] flex-col gap-24 justify-center items-center relative'>
                <div className="max-w-[1440px] flex justify-center items-center px-6 lg:px-8 w-full min-h-[327px] absolute md:top-[-250px] top-[-200px]">
                    <div className="w-full flex flex-row justify-between items-start gap-12 bg-white p-4 sm:p-10 shadow-md">
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full max-w-[450px] md:w-[450px] object-contain md:block hidden"
                            priority={false}
                            src="/image/hitgs/img1.webp"
                            alt="logo"
                        />
                        <div className="flex flex-col gap-4 md:justify-start justify-center items-center md:items-start">
                            <p className="sm:text-desktop-heading-5 text-mobile-heading-5 font-bold md:text-left text-center">
                                About Halal In Travel Global Summit
                            </p>
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full max-h-[230px] object-cover md:hidden block"
                                priority={false}
                                src="/image/hitgs/img1.webp"
                                alt="logo"
                            />
                            <p className="sm:text-desktop-body-1 text-mobile-body-2 md:text-left text-center">
                                The Halal In Travel Global Summit (HITGS), established in 2016, is the leading annual event in the Halal travel industry. Held each year, it features virtual panels discussing the latest innovations and responsible tourism practices, culminating in a hybrid event in Singapore. Highlights include the Mastercard-CrescentRating Global Muslim Travel Index 2025, the Halal In Travel Awards, and the HalalTrip 40, celebrating industry excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1440px] px-6 lg:px-8 w-full">
                <div className="w-full flex flex-col justify-start items-start gap-12">
                    <div className="flex flex-col gap-3 md:justify-start md:items-start justify-center items-center">
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-5 font-bold">Our Milestone</p>
                        <div className="sm:mt-10 mt-2 flex flex-row justify-center items-start w-full gap-6">
                            <Carousel2 years={carouselDataHITGS.map(item => item.year)} className="w-full">
                                <CarouselContent2>
                                    {carouselDataHITGS.map((item, index) => (
                                        <CarouselItem2
                                            setIsMobile={true}
                                            customType="2"
                                            key={index}
                                            index={index}
                                            image={
                                                <ImageWithFallback
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    className="w-full object-cover"
                                                    priority={false}
                                                    src={item.image}
                                                    alt={`Image ${item.year}`}
                                                />
                                            }
                                        >
                                            <div className="w-full flex flex-col gap-2 md:justify-start md:items-start justify-center items-center md:pl-10">
                                                <p className="font-bold sm:text-desktop-heading-4 text-mobile-heading-2">{item.year}</p>
                                                <p className="sm:text-desktop-body-2 text-mobile-body-1 text-gray-600 text-center md:text-start">{item.description}</p>
                                            </div>
                                        </CarouselItem2>
                                    ))}
                                </CarouselContent2>
                                <div className="md:ml-4 absolute md:top-[300px] min-[400px]:top-[50%] sm:top-[calc(10%+230px)]  top-[38%] flex flex-row w-full justify-center md:justify-start items-center gap-2">
                                    <CarouselPrevious2 customType="2" />
                                    <CarouselNext2 customType="2" />
                                </div>
                            </Carousel2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1440px] lg:px-8 w-full">
                <div className="w-full flex flex-col justify-start items-start gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full gap-6">
                        <Carousel setApi={setApi} className="w-full max-w-[720px] sm:h-[578px] h-[357px] relative">
                            <CarouselContent>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <div className="w-full relative">
                                            <div className="absolute w-full sm:h-[578px] h-[357px] bg-gradient-to-t from-[#0E205C91] to-[#0E205C0F]" />
                                            <ImageWithFallback
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className="w-full object-cover sm:h-[578px] h-[357px]"
                                                priority={false}
                                                src="/image/hitgs/contact.webp"
                                                alt="logo"
                                            />
                                            <div className="absolute bottom-10 flex justify-end items-center p-3 text-white md:w-[80%] w-full border border-[rgba(14,32,92,0.06)] bg-[rgba(14,32,92,0.57)] backdrop-blur-[5.4px]">
                                                <div className="flex flex-col md:justify-start md:items-start justify-center items-center gap-1 md:w-[90%] w-full">
                                                    <p className="sm:text-desktop-body-1 text-mobile-heading-5 font-bold">H.E. Dr. Sandiaga Salahuddin Uno</p>
                                                    <p className="sm:text-desktop-caption-l text-mobile-caption-l font-semibold italic">Minister of Tourism and Creative Economy, Indonesia</p>
                                                    <p className="sm:text-desktop-caption-l text-mobile-caption-l">Republic of Indonesia (2020-2024)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="absolute bottom-4 md:right-4 w-full justify-center md:justify-end items-center md:items-end flex gap-2">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index + 1 ? "bg-white scale-125" : "bg-gray-400"
                                            }`}
                                    />
                                ))}
                            </div>
                        </Carousel>
                        <div className="w-full flex flex-col gap-4 justify-start items-start md:pl-10 lg:px-0 px-6">
                            <p className="font-bold sm:text-desktop-heading-4 text-mobile-heading-4">Meet Our Past Speakers</p>
                            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-600 text-start">Industry leaders, innovators, and cultural ambassadors that have shared expertise on Muslim-friendly travel, digital trends, and sustainable tourism in past HITGS sessions.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1440px] px-6 lg:px-8 w-full">
                <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center gap-6 sm:gap-12">
                    <div className="flex flex-col gap-4 justify-start items-start">
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold">
                            The Launch of MasterCard- CrescentRating Global Muslim Travel Index
                        </p>
                        <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500">
                            Join us for the 2025 launch of the Global Muslim Travel Index, unveiling key insights, trends, and rankings that shape the future of Muslim-friendly tourism globally.
                        </p>
                    </div>
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full max-w-[600px] md:max-h-[260px] object-contain"
                        priority={false}
                        src="/image/hitgs/gmti-img.png"
                        alt="logo"
                    />
                </div>
            </section>
            <section className="max-w-[1440px] px-6 lg:px-8 w-full">
                <div className="w-full flex flex-col-reverse lg:flex-row bg-custom-blue-cr p-6 sm:p-11 text-white justify-start items-start gap-16 rounded-xl">
                    <div className="grid grid-cols-2 gap-10 lg:w-[40%] w-full">
                        <div className="flex flex-col justify-start items-start border-r border-white pr-6">
                            <p className="sm:text-desktop-heading-1 text-mobile-heading-2 mb-2 font-bold">2200+</p>
                            <p className="sm:text-desktop-body-1 text-mobile-heading-5 font-bold">Registrations</p>
                        </div>
                        <div className="flex flex-col justify-start items-start lg:border-r lg:border-white pr-6">
                            <p className="sm:text-desktop-heading-1 text-mobile-heading-2 mb-2 font-bold">60+</p>
                            <p className="sm:text-desktop-body-1 text-mobile-heading-5 font-bold">Countries</p>
                            <p className="text-desktop-body-2 font-semibold">Attendee Represented</p>
                        </div>
                        <div className="flex flex-col justify-start items-start border-r border-white pr-6">
                            <p className="sm:text-desktop-heading-1 text-mobile-heading-2 mb-2 font-bold">100+</p>
                            <p className="sm:text-desktop-body-1 text-mobile-heading-5 font-bold">Speakers</p>
                            <p className="text-desktop-body-2 font-semibold">from <span className="font-bold">28</span> Countries</p>
                        </div>
                        <div className="flex flex-col justify-start items-start  lg:border-r lg:border-whitepr-6">
                            <p className="sm:text-desktop-heading-1 text-mobile-heading-2 mb-2 font-bold">160</p>
                            <p className="sm:text-desktop-body-1 text-mobile-heading-5 font-bold">Sessions</p>
                            <p className="text-desktop-body-2 font-semibold">across 12 days</p>
                        </div>
                    </div>
                    <div className="lg:w-[60%] w-full flex flex-col justify-start items-start gap-2">
                        <p className="font-semibold sm:text-desktop-body-1 text-mobile-body-1">Discover</p>
                        <p className="font-bold sm:text-desktop-heading-4 text-mobile-heading-3">The Impact of Halal In Travel Global Summit Events</p>
                        <p className="text-body-1">HITGS events drive growth in Muslim-friendly tourism, connecting industry experts to shape inclusive travel. These summits inspire innovation, foster partnerships, and enhance understanding of diverse traveler needs.                        </p>
                    </div>
                </div>
            </section>
            <section className=" bg-[#060077] w-full flex justify-center items-start relative lg:max-h-[1050px] lg:h-[1050px] h-auto">
                <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-w-[1600px]  object-contain absolute z-0 max-h-[1050px] top-[200px]"
                    priority={false}
                    src="/image/hitgs/city-bg.png"
                    alt="logo"
                />
                <div className="max-w-[1440px] px-6 lg:px-8 w-full z-10">
                    <div className="w-full flex flex-col justify-center items-center gap-12 py-10">
                        <div className="flex flex-col text-center w-full gap-3 text-white">
                            <p className="text-desktop-body-1 font-semibold text-[#FAB805]">Event Registration</p>
                            <p className="text-desktop-heading-4 font-bold">Join the Event</p>
                            <p className="text-desktop-body-2">Register now for HITGS 2025 to connect, learn, and shape the future of Muslim-friendly travel with industry leaders and experts!</p>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-14 w-full">
                            {hitgsData.map((item, index) => (
                                <HITGSCard
                                    key={index}
                                    imageUrl={item.imageUrl}
                                    imageAlt={item.imageAlt}
                                    date={item.date}
                                    title={item.title}
                                    description={item.description}
                                    button={item.button}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1440px] px-6 lg:px-8 w-full">
                <div className="w-full flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col gap-3 text-center w-full border-b border-gray-200 pb-12">
                        <p className="sm:text-desktop-body-1 text-mobile-body-2 font-semibold text-custom-blue">Sponsorship</p>
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-3 font-bold">Our Past Sponsors</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-14 w-full">
                        <div className="w-full max-h-[300px] sm:max-h-[450px] md:max-h-[450px] lg:max-h-[450px] flex justify-center items-center bg-white shadow-md rounded-md p-7">
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full lg:max-w-[450px] h-full object-contain"
                                priority={false}
                                src="/image/hitgs/past-sponsors-1.png"
                                alt="logo"
                            />
                        </div>
                        <div className="w-full sm:h-auto h-[220px] max-h-[300px] sm:max-h-[450px] md:max-h-[450px] lg:max-h-[450px] flex justify-center items-center bg-white shadow-md rounded-md p-7">
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full lg:max-w-[450px] h-full object-contain"
                                priority={false}
                                src="/image/hitgs/past-sponsors-2.png"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-r from-[#453CFF] py-12 to-[#292499] text-white w-full flex justify-center items-start">
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex justify-center items-center text-center">
                    <div className=" flex flex-col justify-center items-center gap-2 md:w-[60%]">
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-3 font-bold">Sponsorship Opportunities</p>
                        <p className="sm:text-desktop-body-2 text-desktop-body-3">Become a sponsor to showcase your brand, engage with key industry players, and support the growth of Muslim-friendly travel!
                            Enter your email below and we will contact you soon.</p>
                        <div className="flex flex-row justify-center items-center gap-4 w-full my-4">
                            <Input placeholder="Enter your email" className="w-full" />
                            <Button className=" bg-white text-custom-blue">Send Me</Button>
                        </div>
                        <p className="sm:text-desktop-body-2 text-desktop-body-3">By entering your email you agree to CrescentRating’s Privacy Policy & Terms & Conditions</p>
                    </div>
                </div>
            </section>
            <section className="max-w-[1440px] px-6 lg:px-8 w-full">
                <div className="w-full flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col gap-3 text-center justify-center items-center w-full">
                        <p className="sm:text-desktop-body-1 text-mobile-body-2 font-semibold text-custom-blue">Media & Press</p>
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-3 font-bold">Latest Releases</p>
                        <p className="sm:text-desktop-body-2 text-desktop-body-3 text-gray-500 sm:w-1/2">Stay updated with the latest news, press releases, and media coverage from HITGS 2025, highlighting key insights and events!</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-14 w-full">
                        {mediaHITGSData.map((card, index) => (
                            <HeroCard
                                imagePosition="top"
                                key={index}
                                titleTextColor="text-black"
                                descriptionTextColor="text-gray-500"
                                imageUrl={card.imageUrl}
                                imageAlt={card.imageAlt}
                                date={card.date}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                    <Button className=" text-custom-blue sm:!text-desktop-body-2 !text-mobile-body-3 px-10 py-3 font-bold border">
                        View All
                    </Button>
                </div>
            </section>
            <section className="max-w-[1440px] px-6 lg:px-8 w-full">
                <div className="w-full flex md:flex-row flex-col justify-between items-start gap-10">
                    <div className="flex flex-col gap-3 md:w-[30%]">
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-3 font-bold">Frequently Asked Questions</p>
                        <p className="sm:text-desktop-body-2 text-desktop-body-3 text-gray-500 ">Find answers to common questions about HITGS 2025, including registration, participation, sponsorship, and event details!</p>
                    </div>
                    <div className="md:w-[60%]">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="sm:text-desktop-body-1 text-mobile-body-1 text-left font-bold">How can I register for the event?</AccordionTrigger>
                                <AccordionContent className="text-left sm:text-desktop-body-2 text-mobile-body-3">
                                    You can register through our official website or contact our support team for assistance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="sm:text-desktop-body-1 text-mobile-body-1 text-left font-bold">When will the next Halal in Travel Global Summit (HITGS) take place?</AccordionTrigger>
                                <AccordionContent className="text-left sm:text-desktop-body-2 text-mobile-body-3">
                                    The next HITGS is scheduled for Q3 of this year. Stay tuned for the exact dates!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="sm:text-desktop-body-1 text-mobile-body-1 text-left font-bold">What can I expect from the Halal in Travel Global Summit?</AccordionTrigger>
                                <AccordionContent className="text-left sm:text-desktop-body-2 text-mobile-body-3">
                                    The summit includes keynote speeches, panel discussions, networking opportunities, and more.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="sm:text-desktop-body-1 text-mobile-body-1 text-left font-bold">How can I partner or collaborate with your team for future events?</AccordionTrigger>
                                <AccordionContent className="text-left sm:text-desktop-body-2 text-mobile-body-3">
                                    We welcome partnerships! Please reach out via our contact form for collaboration opportunities.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
            <section className="bg-[#0F205C] min-h-[100px] text-white w-full flex justify-center items-start py-10">
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex justify-center items-center text-center">
                    <div className="w-full">
                        <div className="flex flex-col gap-3 text-start justify-start items-start w-full">
                            <p className="sm:text-desktop-body-2 text-mobile-body-2 font-semibold">Media & Press</p>
                            <p className="sm:text-desktop-heading-2 text-mobile-heading-3 font-bold">Contact us</p>
                            <p className="sm:text-desktop-body-2 text-mobile-body-2">Reach out for inquiries about HITGS 2025!</p>
                        </div>
                        <div className="flex md:flex-row flex-col-reverse gap-14 w-full mt-16">
                            <div className="w-full flex flex-col gap-5 justify-between items-start">
                                <Input
                                    placeholder="Your Name"
                                    className="w-full"
                                    label="Name"
                                />
                                <Input
                                    placeholder="example@email.com"
                                    className="w-full"
                                    label="Email"
                                />
                                <Input
                                    placeholder="Type your message..."
                                    className="w-full"
                                    label="Message"
                                    multiline={true}
                                    multilineHeight="sm:min-h-[300px]"
                                />
                                <div className="w-full flex flex-row justify-start items-center gap-2">
                                    <Checkbox id="terms" className="border-white" />
                                    <label htmlFor="terms" className="font-semibold text-desktop-label-l">I Accept the Terms and Conditions</label>
                                </div>
                                <button className="w-full font-semibold text-mobile-body-2 text-custom-blue bg-white py-3 px-5">
                                    Submit
                                </button>
                            </div>
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-cover md:h-auto h-[200px]"
                                priority={false}
                                src="/image/hitgs/contact.png"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
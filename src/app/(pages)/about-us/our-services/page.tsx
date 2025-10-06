import { CircleCheck } from "lucide-react";
import Link from "next/link";

import {
  BasicCard,
  Button,
  HeroCard,
  ImageWithFallback,
  PageHero,
} from "@/components/common";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/defaultCarousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  cardData,
  categoriesServices,
  medpart,
  servicesData,
  servicesTabsConfig,
} from "@/constants/dummyData";

export default function OurServices() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PageHero
        title="Our Services"
        description="Delivering trusted solutions for the Muslim-friendly travel market, backed by global expertise and deep insights."
        subtitle="About Us"
        backgroundImage="/image/our-services/about-us-hero.png"
        alignment="left"
        variant="image"
      />
      <div className="mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center">
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col w-full gap-4 text-center items-center">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold sm:w-[45%] w-full">
              Why you Should Become a Member of the Crescent Rated Services
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 sm:w-[45%] w-full">
              Unlock valuable insights, proven strategies, and tailored
              solutions to enhance your reach and impact in the Muslim-friendly
              travel market.
            </p>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 w-full ">
            {cardData.map((card, index) => (
              <BasicCard
                key={index}
                useButton={false}
                className="bg-neutral-100"
              >
                <div className="w-full flex flex-col gap-4 justify-start items-start">
                  <div className="bg-[#F1F3FF] p-2">{card.icon}</div>
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
          <Button className="text-white md:px-[32px] md:py-[30px] rounded-none bg-[#453CFF] sm:!text-desktop-body-2 !text-mobile-body-3 hover:bg-primary-cr-600">
            See Our Member Directory
          </Button>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[40%]">
            Our Expertise, Your Success{" "}
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">
            Explore our comprehensive range of solutions designed to elevate
            your success in the global Muslim-friendly travel market.
          </p>
          <div className="w-full flex flex-col">
            <Tabs
              defaultValue="education_and_certification"
              className="w-full mt-10"
              desktopTabPosition="top"
              mobileMode="select"
              align="center"
            >
              <TabsList className="w-full justify-center border-none">
                {servicesTabsConfig.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    className="w-full"
                    value={tab.value}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {servicesTabsConfig.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  activeValue={tab.value}
                  className="p-0 mt-[18px]"
                >
                  <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start gap-8">
                    {servicesData
                      .filter((service) => service.tabs === tab.value)
                      .map((card, index) => (
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
                          link={card.cta_link}
                          linkText={card.cta_title}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[35%]">
            Trusted by Global Clients and Countries
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">
            We’re proud to work with top clients and countries worldwide,
            supporting their journey to offer Muslim-friendly services and
            experiences.
          </p>
          <div className="mt-10 flex sm:flex-row flex-col justify-center items-start md:p-8 p-6 w-full gap-1 bg-neutral-100">
            <div className="w-full flex flex-col justify-center items-center  gap-.5">
              <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">
                20K+
              </p>
              <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">
                Media mentions and features{" "}
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
                Industry partners worldwide{" "}
              </p>
            </div>
            <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full my-2"></div>
            <div className="w-full flex flex-col justify-center items-center gap-.5">
              <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">
                20+{" "}
              </p>
              <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">
                Tourism agencies collaborations{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full">
          <div className="w-full flex flex-col justify-center items-center gap-9">
            <p className="text-desktop-body-2 md:text-2xl font-bold text-[#09090B]">
              Featured Clients
            </p>
            <Carousel className="w-full">
              <CarouselContent>
                {medpart.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/5 sm:basis-1/4 basis-1/3 flex justify-center items-center"
                  >
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
        <section className="w-full flex flex-col justify-center items-center gap-8 bg-white">
          <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[35%]">
              Who Can Benefit from <br /> Our Expertise?
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">
              Our services are designed to support a wide range of businesses
              and organizations in delivering exceptional experiences for Muslim
              travelers.
            </p>
            <div className="w-full flex md:flex-row flex-col justify-center items-start md:gap-24 gap-12 mt-12">
              <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover max-h-[411px] rounded-lg"
                priority={false}
                src={"/image/our-services/our-service-benefits.png"}
                alt={"imgrating"}
              />
              <div className="w-full md:w-[80%] flex flex-col gap-8 justify-start items-start">
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="font-bold tex sm:text-desktop-body-1">
                    Serving Diverse Sectors{" "}
                  </p>
                  <p className="text-mobile-body-2 sm:text-desktop-body-2 text-gray-500">
                    From hospitality and travel to wellness and retail, we
                    partner with diverse industries to meet the needs of the
                    Muslim-friendly travel market.
                  </p>
                </div>
                <div className="grid min-[450px]:grid-cols-2 grid-cols-1 gap-6 w-full">
                  {categoriesServices.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row gap-1 justify-start items-start"
                    >
                      <div>
                        <CircleCheck className="text-primary-cr-700 p-1 rounded-full size-7 font-bold" />
                      </div>{" "}
                      <p className="sm:text-desktop-body-2 text-mobile-body-2">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full flex flex-col lg:flex-row p-6 sm:p-8 lg:p-14 gap-6 lg:gap-0 lg:justify-between items-start bg-gradient-to-br from-[#453CFF] to-[#217CFF]">
          <div className="need-support flex flex-col items-start text-start gap-4 w-full lg:w-[40%] text-white lg:self-start">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight lg:leading-[50.40px]">
              Need Support For Our Services?
            </h1>
            <p className="text-sm sm:text-base lg:text-base">
              Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
              faucibus id urna quis nisl egestas. Ultrices aenean metus duis mi
              nisi viverra nulla diam.
            </p>
          </div>
          <Link
            href="/about-us/contact-us"
            className="lg:self-end bg-white text-[#453CFF] border-2 border-white hover:bg-transparent hover:text-white hover:border-white py-3 px-6 sm:py-4 sm:px-8 lg:py-5 w-full md:w-[30%] lg:w-[20%] leading-none h-fit flex justify-center items-center text-center font-semibold cursor-pointer"
          >
            Contact Us
          </Link>
        </section>
        {/* <section className="max-w-[1440px]  px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[35%]">
            Frequently Asked Questions
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">
            Lorem ipsum dolor sit amet consectetur. Nulla cras nunc justo morbi
            id curabitur. Luctus varius ipsum nisl enim tempor suspendisse
            fusce.
          </p>
          <div className="w-full flex md:flex-row flex-col justify-center items-start md:gap-24 gap-12 mt-12 md:px-28">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                  Find Professionals by Certification
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-mobile-body-2 sm:text-desktop-body-2">
                    Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                    faucibus id urna quis nisl egestas. Ultrices aenean metus
                    duis mi nisi viverra nulla diam.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                  Find Professionals by Certification
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-mobile-body-2 sm:text-desktop-body-2">
                    Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                    faucibus id urna quis nisl egestas. Ultrices aenean metus
                    duis mi nisi viverra nulla diam.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                  Find Professionals by Certification
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-mobile-body-2 sm:text-desktop-body-2">
                    Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                    faucibus id urna quis nisl egestas. Ultrices aenean metus
                    duis mi nisi viverra nulla diam.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section> */}
      </div>
    </div>
  );
}

import { MapPin, Plane, ThumbsUp, TrendingUp } from "lucide-react";
import Link from "next/link";

import {
  BasicCard,
  Button,
  ImageWithFallback,
  PageHero,
} from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  availablePositions,
  cardData,
  templateCarrers,
  testimonialsAboutUs,
} from "@/constants/dummyData";

const iconMap: Record<string, React.ElementType> = {
  thumbsup: ThumbsUp,
  travel: Plane,
  graphup: TrendingUp,
};

export default function Carrer() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <PageHero
        title="Meet Us at Events"
        description="Meet CrescentRating and Halaltrip at Exhibitions, Conferences, Workshops and other Events."
        subtitle="Resources"
        backgroundImage="/image/careers/hero.jpg"
        alignment="left"
        variant="image"
        useBreadCrumbLinks={true}
      />
      <div className="mt-16 lg:px-32 sm:px-16 px-8 w-full flex flex-col gap-24 justify-center items-center">
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-full gap-4 justify-start items-start">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold sm:w-[45%] w-full">
              Why Work with CrescentRating?
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 sm:w-[45%] w-full">
              Be part of a dynamic, diverse team redefining the Muslim-friendly
              travel experience and building a global brand together.
            </p>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 w-full mt-10 ">
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
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 justify-center items-start gap-12 mt-12">
            <ImageWithFallback
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-cover"
              priority={false}
              src={"/image/careers/career.jpg"}
              alt={"imgrating"}
            />
            <div className=" flex flex-col gap-8 justify-start items-start">
              <div className="flex flex-col gap-2 justify-start items-start">
                <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold bg-clip-text text-black text-left">
                  Building an Inclusive and Purposeful Future
                </p>
                <p className="sm:text-desktop-body-2 text-mobile-body-2 text-left text-gray-500">
                  At the heart of our culture lies a commitment to inclusivity,
                  empowerment, and sustainability. Together, we shape a world of
                  meaningful exploration and growth.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 justify-start items-start">
                {templateCarrers.map((item, index) => {
                  const IconComponent = iconMap[item.icon] || ThumbsUp; // fallback icon

                  return (
                    <div
                      key={index}
                      className="flex flex-row justify-start gap-4 items-start"
                    >
                      <div className="w-fit">
                        <div className="flex items-center justify-center size-10 bg-primary-cr-50 mt-1 rounded-md">
                          <IconComponent className="text-primary-cr-700 size-5" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 justify-start items-start">
                        <p className="sm:text-desktop-body-1 text-mobile-body-1 font-bold">
                          {item.title}
                        </p>
                        <p className="sm:text-desktop-body-2 text-mobile-body-2 text-neutral-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center gap-.5">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
              What Our Team Say
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">
              Hear from the talented people who make CrescentRating a unique and
              rewarding workplace.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonialsAboutUs.map((testimonial, index) => (
                <div
                  key={index}
                  className="border md:px-8 px-6 py-4 flex flex-col justify-between items-start gap-4"
                >
                  <p className="lg:text-desktop-body-2 text-mobile-body-2 text-left">
                    {testimonial.text}
                  </p>
                  <div className="flex flex-row w-full justify-start items-center gap-4">
                    <ImageWithFallback
                      width={0}
                      height={0}
                      sizes="1000vw"
                      className="w-[48px] rounded-full object-cover"
                      priority={false}
                      src={testimonial.imageSrc}
                      alt={testimonial.imageAlt}
                    />
                    <div className="flex flex-col justify-between items-start gap-1">
                      <p className="text-desktop-body-2">{testimonial.name}</p>
                      <p className="text-neutral-500 text-desktop-caption-l">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center gap-.5">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
              Join Our Team
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">
              Explore current openings and start your journey with
              CrescentRating.
            </p>
            <div className="mt-10 grid grid-cols-1 w-full md:grid-cols-2 gap-6">
              {availablePositions.map((job, index) => (
                <div
                  key={index}
                  className="border w-full md:px-8 px-6 py-4 flex flex-col justify-start items-start gap-4"
                >
                  <div className="flex w-full flex-row gap-2 justify-between items-center">
                    <div className="w-auto flex flex-col gap-2 justify-start items-start">
                      <p className="sm:text-desktop-body-2 text-mobile-body-3 text-primary-cr-500">
                        {job.type}
                      </p>
                      <p className="sm:text-desktop-heading-6 text-mobile-heading-5 font-bold">
                        {job.title}
                      </p>
                      <span className="bg-blue-100 text-blue-700 font-semibold text-desktop-label-s px-2 py-1 rounded flex flex-row gap-1">
                        <MapPin className="size-4 mt-[1px]" />
                        {job.placement}
                      </span>
                    </div>
                    <Link href={`/about-us/careers/${job.id}`}>
                      <Button className="lg:text-mobile-body-1 text-mobile-body-3 flex flex-row justify-center items-center gap-2 bg-primary-cr-500 text-white border p-3 sm:p-4">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                  <p className="text-neutral-500 sm:text-desktop-body-2 text-mobile-body-2">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col md:flex-row gap-12 justify-start items-start">
          <div className="w-full flex flex-col gap-1 justify-start items-start">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left">
              Frequently Asked Questions
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-left text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Nulla cras nunc justo
              morbi id curabitur. Luctus varius ipsum nisl enim tempor
              suspendisse fusce.
            </p>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-center items-start md:gap-24 gap-12 ">
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
        </section>
      </div>
    </div>
  );
}

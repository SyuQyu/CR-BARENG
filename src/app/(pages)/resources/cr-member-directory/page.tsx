'use client';
import { BasicCard, HotelCard, ImageWithFallback } from "@/components/common";
import { cardData, crMemberDirectoryCategories } from "@/constants/dummyData";
import { Carousel as Carousel2, CarouselContent as CarouselContent2, CarouselItem as CarouselItem2, CarouselNextCustom as CarouselNext2, CarouselPreviousCustom as CarouselPrevious2, CarouselDots as CarouselDots2 } from "@/components/ui/carouselCustom2";
import Link from "next/link";
export default function CertifiedProfessionalsDirectoryPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section
        className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
        style={{
          backgroundImage:
            "url('/image/cr-member-directory/hero.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
          <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
            <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
              Resources
            </p>
            <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
              Crescentrating Member Directory
            </h1>
            <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
              Explore trusted hotels, restaurants, and travel services that meet
              CrescentRating&apos;s halal-friendly standards.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center max-w-[1440px]">
        <section className="px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-full gap-4 justify-center items-center text-center">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold sm:w-[45%] w-full">
              Featured Establishments
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 sm:w-[45%] w-full">
              Discover our top-rated establishments with exceptional halal-friendly experiences.
            </p>
          </div>
          <div className="mt-10 flex flex-row justify-center items-start w-full gap-6">
            <Carousel2
              className="w-full"
              showDots={true}
              slideCount={5}
            >
              <CarouselContent2>
                {[...Array(5)].map((_, index) => (
                  <CarouselItem2 key={index} index={index} className="my-10" visibleSlides={3}
                  >
                    <HotelCard
                      mainImage="/image/about-us/testpic.webp"
                      badgeImage="/image/cr-member-directory/rating.png"
                      location="HONG KONG- HONG KONG SAR"
                      category="HOTEL"
                      title="The Park Lane Hong Kong, Autograph Collection"
                      description="The Park Lane Hong Kong, Autograph Collection is a contemporary oasis tailored for the discerning traveler of the 21st century. With its sophisticated design, attentive service, and breathtaking views of the harbor, Victoria Park, ..."
                      onSeeDetail={() => console.log("See Detail clicked")}
                      onExploreMore={() => console.log("Explore More clicked")}
                    />

                  </CarouselItem2>
                ))}
              </CarouselContent2>
              <CarouselPrevious2 />
              <CarouselNext2 />
            </Carousel2>
          </div>
        </section>
        <section className="px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-full gap-4 justify-center items-center text-center">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold sm:w-[45%] w-full">
              Explore by Categories
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 sm:w-[45%] w-full">
              Discover all Crescent Rated establishment by the categories
            </p>
          </div>
          <div className="flex flex-wrap w-full mt-10 md:gap-8 gap-3 justify-center items-center">
            {crMemberDirectoryCategories.map((category, index) => (
              <Link href={category.url} key={index} className="md:w-[21%] w-[41%] relative box-border">
                <ImageWithFallback
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full object-cover h-full"
                  priority={false}
                  src={category.image}
                  alt={category.alt}
                />
                <div className="absolute flex justify-center items-center rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border h-full border-white/[0.01] bg-black/40 rounded-none">
                  <p className="sm:text-desktop-body-1 text-mobile-body-2 font-semibold text-white">
                    {category.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </section>
        <section className="px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-full gap-4 justify-start items-start">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold sm:w-[45%] w-full">
              Why you Should Become a Member of the Crescent Rated Services
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 sm:w-[45%] w-full">
              Gain global recognition, trust, and strategic insights to attract Muslim travelers while upholding high industry standards.
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
      </section>
    </div>
  );
}

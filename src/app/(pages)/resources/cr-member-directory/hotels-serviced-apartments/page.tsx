'use client';
import { BasicCard, Button, HotelCard, ImageWithFallback, Pagination } from "@/components/common";
import { cardData, crCountryData, crMemberDirectoryCategories } from "@/constants/dummyData";
import { Carousel as Carousel2, CarouselContent as CarouselContent2, CarouselItem as CarouselItem2, CarouselNextCustom as CarouselNext2, CarouselPreviousCustom as CarouselPrevious2, CarouselDots as CarouselDots2 } from "@/components/ui/carouselCustom2";
import { useState } from "react";
import Link from "next/link";
export default function CertifiedProfessionalsDirectoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data or update UI based on the new page
  };
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
              Crescent Rated Hotels & Serviced Apartments
            </h1>
            <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
              Explore trusted Hotels & Serviced Apartments that meet CrescentRating’s halal-friendly standards.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center max-w-[1440px]">
        <section className="px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-full gap-4 justify-center items-center text-center">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold sm:w-[45%] w-full">
              Featured Hotels & Serviced Apartments
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
              Explore by Country
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-gray-500 sm:w-[45%] w-full">
              Discover all Crescent Rated establishment by the categories
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full mt-10 md:gap-8 gap-3 justify-center items-center">
            {crCountryData.map((category, index) => {
              // index 3 (ke-4) colspan 2, others normal
              let colSpanClass = "";
              if (index === 3) colSpanClass = "sm:col-span-2";
              if (index === 6) colSpanClass = "sm:col-span-2";
              return (
                <Link
                  key={index}
                  className={`w-full relative md:h-[350px] sm:h-[250px] h-[200px] box-border ${colSpanClass}`}
                  href={`/resources/cr-member-directory/hotels-serviced-apartments/${category.title}`}
                >
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
              );
            })}
          </div>
          <div className="mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
        <section className="max-w-[1440px] w-full px-6 lg:px-8 ">
          <div className="w-full h-full min-h-[300px] p-8 text-black flex rounded-lg flex-col  gap-4 justify-center items-center bg-gradient-to-r from-[var(--colors-primary-50,#F1F3FF)] via-[var(--colors-primary-100,#E0E3FF)] to-[var(--colors-primary-200,#CED2FF)]">
            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-center w-full">Get Your Services Crescent Rated Today</p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-black text-center">Join the ranks of globally recognized halal-friendly services. Apply now for our comprehensive rating services.</p>
            <div className="flex flex-row justify-center items-center gap-4 w-full">
              <Button className="!py-5 !px-6 bg-primary-cr-700 min-w-[280px] text-white">Get Free Consultancy</Button>
              <Button className="!py-5 !px-6 bg-white min-w-[280px] text-primary-cr-700">Register Now</Button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

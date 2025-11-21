import { AlertCircle, Check } from "lucide-react";

import {
  BasicCard,
  Button,
  CrRatingBanner,
  ImageWithFallback,
} from "@/components/common";
import { cardData, hotelBenefits } from "@/constants/dummyData";

export default function RatingAndAccreditationHotels() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section
        className="relative w-full px-8 lg:px-32 flex justify-center items-center flex-row bg-center md:min-h-[380px] min-h-[200px]"
        style={{
          backgroundImage:
            "url('/image/rating-accreditation/cruise-ship/hero.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1440px] sm:py-16 py-8 sm:px-8 lg:px-32 w-full flex sm:flex-row flex-col-reverse gap-5 ">
          <div className="flex w-full flex-col gap-5 justify-center items-center sm:mt-20 mt-10 text-white">
            <h1 className="text-mobile-heading-2 md:text-mobile-heading-2 lg:text-desktop-heading-2 font-bold bg-clip-text relative z-20 text-center w-full">
              Get Your Cruise Ship’s Muslim Friendly services Rated
            </h1>
            <div className="flex flex-row justify-center items-center gap-4 mt-4">
              <Button variant="secondary" className="!py-5 !px-6">
                Learn More
              </Button>
              <Button variant="primary" className="!py-5 !px-6">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-24 w-full flex flex-col gap-24 justify-center items-center">
        <section className="max-w-[1440px] px-8 lg:px-32 w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full overflow-y-auto flex justify-center items-center bg-[#FAF9FA]">
              <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain min-w-[1216px] md:block hidden"
                priority={false}
                src={"/image/rating-accreditation/top.png"}
                alt={"cruise-ship-rating-image"}
              />
            </div>

            <div className="w-full overflow-y-auto flex justify-center items-center">
              <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain md:hidden block"
                priority={false}
                src={"/image/rating-accreditation/accrediations-phone.svg"}
                alt={"accrediations-phone"}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#FAF9FA] py-10 md:py-20 w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-full">
            What&apos;s Included in the Subscription Plan
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">
            Our comprehensive subscription plan provides you with the tools and
            recognition you need to effectively reach the growing Muslim travel
            market.
          </p>
          <div className="max-w-[1440px] px-8 lg:px-32 w-full flex md:gap-24 gap-12 flex-col mt-12 mb-12">
            <div className="flex md:flex-row flex-col-reverse justify-center items-start md:gap-24 gap-12">
              <div className="w-[80%] grid gap-6 justify-start items-start">
                {hotelBenefits.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="flex flex-row gap-6 justify-start items-start"
                  >
                    <div>
                      <Check className="text-white bg-primary-cr-700 p-1 rounded-full size-7 font-bold" />
                    </div>{" "}
                    <p className="sm:text-desktop-body-2 text-mobile-body-2">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover max-h-[310px] rounded-lg"
                priority={false}
                src={"/image/rating-accreditation/new/cruise-rating.jpg"}
                alt={"cruise-rating"}
              />
            </div>
            <div className="w-full h-full min-h-[300px] p-8 text-black flex flex-col  gap-4 justify-center items-center bg-gradient-to-r from-[var(--colors-primary-50,#F1F3FF)] via-[var(--colors-primary-100,#E0E3FF)] to-[var(--colors-primary-200,#CED2FF)]">
              <p className="sm:text-desktop-heading-6 text-mobile-heading-4 font-semibold mb-4 text-center w-full md:w-[80%]">
                We believe in tailored solutions that match your specific needs.
                Our pricing is customized based on your requirements and
                business scale.
              </p>
              <div>
                <p className="sm:text-desktop-body-2 text-mobile-body-2 text-neutral-500 text-center">
                  For more pricing information, contact us:
                </p>
                <Button variant="primary" className="!py-6 !px-24 mt-4">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] w-full px-8 lg:px-32 ">
          <CrRatingBanner buttonNameWhite="Register Now" />
        </section>
        <section className="max-w-[1440px] px-8 lg:px-32 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-full gap-4 justify-center items-center">
            <p className="sm:text-desktop-heading-4 text-center text-mobile-heading-4 font-bold sm:w-[45%] w-full">
              Why you Should Become a Member of the Crescent Rated Services
            </p>
            <p className="sm:text-desktop-body-2 text-center text-mobile-body-2 text-gray-500 sm:w-[45%] w-full">
              Gain global recognition, trust, and strategic insights to attract
              Muslim travelers while upholding high industry standards.
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
        <section className="max-w-[1440px] px-8 lg:px-32 w-full">
          <div className="w-full">
            <div className="rounded-lg border border-neutral-200 bg-[#FAF9FA] p-6 md:p-8 shadow-sm">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#F3F2FF] flex items-center justify-center border border-[#E6E6FA]">
                    <AlertCircle className="w-5 h-5 text-primary-cr-700" />
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-mobile-body-1 md:text-desktop-body-1 font-semibold text-gray-800 mb-2">
                    Disclaimer
                  </h4>
                  <p className="text-mobile-body-2 md:text-desktop-body-2 text-gray-600 leading-6">
                    The scope of our evaluation is strictly limited to the
                    availability and quality of Muslim-specific facilities and
                    services offered by the establishments. This includes, but
                    is not limited to, prayer rooms, halal food options,
                    ablution facilities, and any other amenities designed to
                    cater to the needs of Muslim individuals. It is crucial to
                    understand that our assessment does not extend to, nor
                    should it be interpreted as, an endorsement or approval of
                    the establishment’s broader perspectives or philosophies.
                    Our focus is exclusively on the facilities provided to
                    Muslim travelers, ensuring they can observe their religious
                    duties and preferences comfortably within the
                    establishment’s premises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

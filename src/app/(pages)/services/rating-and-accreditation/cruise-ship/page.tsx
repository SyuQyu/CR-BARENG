import { BasicCard, Button, CrRatingBanner, ImageWithFallback, PricingCard, RatingCard } from "@/components/common";
import { Check } from "lucide-react";
import { cardData, hotelBenefits, ratingData } from "@/constants/dummyData";
import clsx from "clsx";
export default function RatingAndAccreditationHotels() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center md:min-h-[380px] min-h-[200px]"
                style={{ backgroundImage: "url('/image/rating-accreditation/cruise-ship/hero.jpg')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-center items-center sm:mt-20 mt-10 text-white">
                        <h1 className="text-mobile-heading-2 md:text-mobile-heading-2 lg:text-desktop-heading-2 font-bold bg-clip-text relative z-20 text-center w-full">
                            Get Your Cruise Ship’s Muslim Friendly services Rated
                        </h1>
                        <div className="flex flex-row justify-center items-center gap-4 mt-4">
                            <Button className="!py-5 !px-6 bg-white text-primary-cr-700 !border-none">Learn More</Button>
                            <Button className="!py-5 !px-6 bg-[#453CFF] text-white !border-none">Register Now</Button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-24 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-col justify-center items-center gap-8">
                        <div className="w-full overflow-y-auto flex justify-center items-center">
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-contain min-w-[1216px] md:block hidden"
                                priority={false}
                                src={"/image/rating-accreditation/accrediations.svg"}
                                alt={"accrediations"}
                            />
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-contain md:hidden block"
                                priority={false}
                                src={"/image/rating-accreditation/accrediations-phone.svg"}
                                alt={"roadmap"}
                            />
                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] w-full px-6 lg:px-8 ">
                    <div className="w-full h-full min-h-[300px] p-8 text-black flex flex-col  gap-4 justify-center items-center bg-gradient-to-r from-[var(--colors-primary-50,#F1F3FF)] via-[var(--colors-primary-100,#E0E3FF)] to-[var(--colors-primary-200,#CED2FF)]">
                        <p className="sm:text-desktop-heading-6 text-mobile-heading-4 font-semibold mb-4 text-center w-full md:w-[80%]">We believe in tailored solutions that match your specific needs. Our pricing is customized based on your requirements and business scale.</p>
                        <div>
                            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-neutral-500 text-center">For more pricing information, contact us:</p>
                            <Button className="!py-5 !px-6 bg-primary-cr-700 min-w-[280px] text-white mt-4">Contact Us</Button>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[30%]">Rating Criteria</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">To ensure transparency, our rating criteria provide clear, consistent standards and detail the benefits of each level.</p>
                    <div className="w-full overflow-y-auto mt-10 pb-10">
                        <div className="w-full min-w-[1216px] grid grid-cols-4 justify-center items-center gap-8">
                            {
                                ratingData.map((rating, index) => (
                                    <RatingCard key={index} title={rating.title} desc={rating.desc}>
                                        {rating?.items.map((text, idx) => (
                                            <div key={idx} className="flex flex-row w-full items-start h-full gap-5 px-6">
                                                {/* Kolom angka & garis */}
                                                <div className="relative flex flex-col items-center h-full w-10">
                                                    {/* Garis penuh */}
                                                    {idx !== rating?.items.length - 1 && (
                                                        <div
                                                            className={clsx(
                                                                "absolute left-1/2 top-0 -translate-x-1/2",
                                                                "h-full w-0.5 border-l-2 border-dashed border-[#A6ABFF]/50 z-0",
                                                                idx === 0 ? 'h-full' : idx === rating.items.length - 1 ? 'h-1/2' : ''
                                                            )}
                                                            style={{
                                                                top: idx === 0 ? '40%' : 0,
                                                                height: idx === 0 || idx === rating.items.length - 1 ? '100%' : '100%',
                                                            }}
                                                        />
                                                    )}
                                                    {/* Lingkaran angka */}
                                                    <div className="size-10 flex justify-center items-center bg-neutral-100 p-4 rounded-full z-10">
                                                        <p className="text-primary-cr-700 font-bold text-desktop-heading-6">
                                                            {idx + 1}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Kolom teks */}
                                                <p className="w-[70%] text-desktop-body-2 mt-2 mb-8">{text}</p>
                                            </div>
                                        ))}
                                    </RatingCard>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] w-full px-6 lg:px-8 ">
                    <CrRatingBanner buttonNameWhite="Register Now" />
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col w-full gap-4 justify-center items-center">
                        <p className="sm:text-desktop-heading-4 text-center text-mobile-heading-4 font-bold sm:w-[45%] w-full">
                            Why you Should Become a Member of the Crescent Rated Services
                        </p>
                        <p className="sm:text-desktop-body-2 text-center text-mobile-body-2 text-gray-500 sm:w-[45%] w-full">
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
            </div>
        </div >
    )
}
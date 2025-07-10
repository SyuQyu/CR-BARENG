import { BasicCard, Button, CrRatingBanner, ImageWithFallback, PricingCard, RatingCard } from "@/components/common";
import { cardData, membershipTiers } from "@/constants/dummyData";
export default function RatingAndAccreditationActivites() {

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center md:min-h-[380px] min-h-[200px]"
                style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.40) 13.19%, rgba(0, 0, 0, 0.80) 56.41%), url('/image/rating-accreditation/activities.webp')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-center items-center sm:mt-20 mt-10 text-white">
                        <h1 className="text-mobile-heading-2 md:text-mobile-heading-2 lg:text-desktop-heading-2 font-bold bg-clip-text relative z-20 text-center w-full">
                            Get Your Activity’s Muslim Friendly services Rated
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
                    <div className="grid sm:grid-cols-3 grid-cols-1 items-center justify-center gap-6 w-[50%]">
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[200px] object-contain rounded-lg"
                            priority={false}
                            src={"/image/rating-accreditation/mice/bronze-2024.svg"}
                            alt={"bronze"}
                        />
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[200px] object-contain rounded-lg"
                            priority={false}
                            src={"/image/rating-accreditation/mice/silver-2024.svg"}
                            alt={"silver"}
                        />
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[200px] object-contain rounded-lg"
                            priority={false}
                            src={"/image/rating-accreditation/mice/gold-2024.svg"}
                            alt={"gold"}
                        />
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[30%]">Rating Criteria</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">To ensure transparency, our rating criteria provide clear, consistent standards and detail the benefits of each level.</p>
                    <div className="w-full overflow-y-auto mt-10 pb-10">
                        <div className="w-full min-w-[1216px] grid grid-cols-3 justify-center items-center gap-8">
                            {
                                membershipTiers.map((tiers, index) => (
                                    <RatingCard key={index} title={tiers.name} className="bg-[#3B3660] py-8">
                                        <ImageWithFallback
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full h-[150px] object-contain rounded-lg"
                                            priority={false}
                                            src={tiers.image}
                                            alt={tiers.name}
                                        />
                                        <div className="flex flex-col w-full items-center gap-6 px-9">
                                            {
                                                tiers.benefits.map((benefit, index) => (
                                                    <PricingCard key={index} title={benefit?.title} price={benefit?.description} />
                                                ))
                                            }
                                        </div>
                                    </RatingCard>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="w-full flex flex-col justify-center items-center gap-8 bg-[#F1F3FF] py-20">
                    <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-full">Annual Membership Rates</p>
                        <div className="w-full max-w-[500px] flex justify-center items-center gap-10 my-12">
                            <PricingCard title="Activites" price={250} />
                        </div>
                        <p className="sm:text-desktop-body-2 text-mobile-body-2">For more pricing information, contact us:</p>
                        <Button className="!py-5 !px-6 bg-primary-cr-700 min-w-[280px] text-white mt-4">Contact Us</Button>
                    </section>
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
            </div >
        </div >
    )
}
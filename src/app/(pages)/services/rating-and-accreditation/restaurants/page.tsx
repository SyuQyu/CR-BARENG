import { BasicCard, Button, CrRatingBanner, ImageWithFallback, PricingCard } from "@/components/common";
import { Check } from "lucide-react";
import { cardData, hotelBenefitsRestaurant } from "@/constants/dummyData";
export default function RatingAndAccreditationRestaurant() {

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center md:min-h-[380px] min-h-[200px]"
                style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.40) 13.19%, rgba(0, 0, 0, 0.80) 56.41%), url('/image/rating-accreditation/restaurants.webp')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-center items-center sm:mt-20 mt-10 text-white">
                        <h1 className="text-mobile-heading-2 md:text-mobile-heading-2 lg:text-desktop-heading-2 font-bold bg-clip-text relative z-20 text-center w-full">
                            Get Your Restaurant’s Muslim Friendly services Rated
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
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-6 w-full">
                        <div className="w-full relative lg:h-[286px] md:h-[200px] h-[150px]">
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-cover rounded-lg h-full"
                                priority={false}
                                src={"/image/rating-accreditation/restaurant-img1.webp"}
                                alt={"restaurant-img1"}
                            />
                            <div className="absolute rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border border-white/[0.01] bg-white/55 backdrop-blur-[2.4px] rounded-none">
                                <p className="text-desktop-body-2 font-semibold">NAN N KABAB RESTAURANT</p>
                            </div>
                        </div>
                        <div className="w-full relative lg:h-[286px] md:h-[200px] h-[150px]">
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-cover rounded-lg h-full"
                                priority={false}
                                src={"/image/rating-accreditation/restaurant-img2.webp"}
                                alt={"restaurant-img2"}
                            />
                            <div className="absolute rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border border-white/[0.01] bg-white/55 backdrop-blur-[2.4px] rounded-none">
                                <p className="text-desktop-body-2 font-semibold">Shashleek Eco Park</p>
                            </div>
                        </div>
                        <div className="w-full relative lg:h-[286px] md:h-[200px] h-[150px]">
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-cover rounded-lg h-full"
                                priority={false}
                                src={"/image/rating-accreditation/restaurant-img3.webp"}
                                alt={"restaurant-img3"}
                            />
                            <div className="absolute rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border border-white/[0.01] bg-white/55 backdrop-blur-[2.4px] rounded-none">
                                <p className="text-desktop-body-2 font-semibold">Maidah Cuisine Restaurant</p>
                            </div>
                        </div>
                        <div className="w-full relative lg:h-[286px] md:h-[200px] h-[150px]">
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-cover rounded-lg h-full"
                                priority={false}
                                src={"/image/rating-accreditation/restaurant-img4.webp"}
                                alt={"restaurant-img4"}
                            />
                            <div className="absolute rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border border-white/[0.01] bg-white/55 backdrop-blur-[2.4px] rounded-none">
                                <p className="text-desktop-body-2 font-semibold">Village Cafe & Resto</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <div className="grid sm:grid-cols-5 w-[70%] grid-cols-1 items-center justify-center gap-6">
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[150px] object-contain rounded-lg"
                            priority={false}
                            src={"/image/rating-accreditation/restaurant/aa.svg"}
                            alt={"bronze"}
                        />
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[150px] object-contain rounded-lg"
                            priority={false}
                            src={"/image/rating-accreditation/restaurant/aaa.svg"}
                            alt={"silver"}
                        />
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[150px] object-contain rounded-lg"
                            priority={false}
                            src={"/image/rating-accreditation/restaurant/a.svg"}
                            alt={"gold"}
                        />
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[150px] object-contain rounded-lg"
                            priority={false}
                            src={"/image/rating-accreditation/restaurant/b.svg"}
                            alt={"silver"}
                        />
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-[150px] object-contain rounded-lg"
                            priority={false}
                            src={"/image/rating-accreditation/restaurant/c.svg"}
                            alt={"gold"}
                        />
                    </div>
                </section>
                <section className="w-full flex flex-col justify-center items-center gap-8 md:gap-20 bg-[#FAF9FA] py-10 md:py-20">
                    <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                        <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-full">What&apos;s Included in the Subscription Plan</p>
                        <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">Our comprehensive subscription plan provides you with the tools and recognition you need to effectively reach the growing Muslim travel market.</p>
                        <div className="w-full flex md:flex-row flex-col-reverse justify-center items-start md:gap-24 gap-12 mt-12">
                            <div className="w-[80%] grid min-[450px]:grid-cols-2 grid-cols-1 gap-6 justify-start items-start">
                                {hotelBenefitsRestaurant.map((item: any, index: number) => (
                                    <div key={index} className="flex flex-row gap-6 justify-start items-start">
                                        <div><Check className="text-white bg-primary-cr-700 p-1 rounded-full size-7 font-bold" /></div> <p className="sm:text-desktop-body-2 text-mobile-body-2">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-cover max-h-[310px] rounded-lg"
                                priority={false}
                                src={"/image/rating-accreditation/restaurants.webp"}
                                alt={"restaurants"}
                            />
                        </div>
                    </section>
                    <div className="w-full px-5 md:px-0 flex flex-col justify-center items-center">
                        <section className="max-w-[1440px] px-6 lg:px-8 py-5 md:py-10 w-full flex flex-col justify-center items-center bg-[#F1F3FF]">
                            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-full">Annual Membership Rates</p>
                            <div className="w-full max-w-[500px] flex justify-center items-center gap-10 my-12">
                                <PricingCard title="Restaurant" price={350} />
                            </div>
                            <p className="sm:text-desktop-body-2 text-mobile-body-2">For more pricing information, contact us:</p>
                            <Button className="!py-5 !px-6 bg-primary-cr-700 min-w-[280px] text-white mt-4">Contact Us</Button>
                        </section>
                    </div>
                </section>
                <section className="max-w-[1440px] w-full px-6 lg:px-8 ">
                    <CrRatingBanner buttonNameWhite="Register Now" />
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col w-full gap-4 justify-center items-center">
                        <p className="sm:text-desktop-heading-4 text-center text-mobile-heading-4 font-bold w-full">
                            Crescent Rating Standards Overview
                        </p>
                        <p className="sm:text-desktop-body-2 text-center text-mobile-body-2 text-gray-500 w-full">
                            Restaurants that are CrescentRated offer an indication of the level of services and facilities it offers to Muslims. In addition to the availability of Halal food, several other factors are taken into consideration when determining a restaurant&apos;s rating, giving Muslim diners an idea on how well it can caters to them. CrescentRated restaurants are also be listed on our Halal Food Directory together with their facilities and services and which is visited by a large audience of Muslims from around the world.The restaurants are rated AAA, AA, A, B, C. AAA being the highest rating.
                        </p>
                    </div>
                    <div className=" gap-8 w-full mt-10 overflow-y-auto">
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full object-contain min-w-[1216px] rounded-lg"
                            priority={false}
                            src={"/image/rating-accreditation/restaurant-img-rated.jpg"}
                            alt={"restaurant-img-rated"}
                        />
                    </div>
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
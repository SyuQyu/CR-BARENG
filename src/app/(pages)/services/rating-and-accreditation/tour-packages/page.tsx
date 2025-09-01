import { BasicCard, Button, CrRatingBanner, ImageWithFallback, PricingCard, RatingCard } from "@/components/common";
import { cardData, membershipTiers } from "@/constants/dummyData";
export default function TourPackagesPage() {

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center md:min-h-[380px] min-h-[200px]"
                style={{ backgroundImage: "url('/image/rating-accreditation/tour-package/hero.jpg')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-center items-center sm:mt-20 mt-10 text-white">
                        <h1 className="text-mobile-heading-2 md:text-mobile-heading-2 lg:text-desktop-heading-2 font-bold bg-clip-text relative z-20 text-center w-full">
                            Get Your Tour Package’s Muslim Friendly services Rated
                        </h1>
                        <div className="flex flex-row justify-center items-center gap-4 mt-4">
                            <Button className="!py-5 !px-6 bg-white text-primary-cr-700 !border-none">Learn More</Button>
                            <Button className="!py-5 !px-6 bg-[#453CFF] text-white !border-none">Register Now</Button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-24 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] w-full px-6 lg:px-8 ">
                    <CrRatingBanner buttonNameBlue="Get Pricing Information" buttonNameWhite="Register Now" />
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
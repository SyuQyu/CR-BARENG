import { Button, HitAwardCard, ImageWithFallback } from "@/components/common";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/defaultCarousel";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";


export default function HitAwardsPage() {
    const categories = [
        {
            number: "1",
            title: "GMTI Awards",
            description: "The awards under this non-voting category are based on the scores of the highly-acclaimed Mastercard-CrescentRating GMTI Awards which adopts the latest set of measurements that indicate the level of Muslim-friendly travel.",
            imgSrc: "/image/hit-awards/categories-1.jpg",
            reverse: false,
        },
        {
            number: "2",
            title: "Muslim-friendly Service Provider Awards",
            description: "The awards in this category honour a variety of Halal-friendly establishments, including hotel chains and airports.",
            imgSrc: "/image/hit-awards/categories-2.jpg",
            reverse: true,
        },
        {
            number: "3",
            title: "HalalTrip Travelers Choice Awards",
            description: "The awards in this category aim to determine the best Muslim-friendly destinations from the traveler’s point of view. HalalTrip, CrescentRating’s sister company, will facilitate the Travelers Choice Awards.",
            imgSrc: "/image/hit-awards/categories-3.jpg",
            reverse: false,
        },
        {
            number: "4",
            title: "Halal Travel Personalities of the Year",
            description: "The awards in this category are intended to recognise the contributions that outstanding people have made to the growth of the travel sector that is welcoming to Muslims.",
            imgSrc: "/image/hit-awards/categories-4.jpg",
            reverse: true,
        },
    ];

    const medpart = [
        "1", "2", "3", "4", "5"
    ].map(name => ({ img: `/image/hit-awards/${name}.png`, alt: name }));

    const tabYears = ["2022", "2023", "2024"];
    const tabCategories = [
        { value: "mastercard", label: "Mastercard-CrescentRating GMTI Awards" },
        { value: "muslim", label: "Muslim-friendly Service Provider Awards" },
        { value: "halaltrip", label: "HalalTrip Travelers Choice Awards" }
    ];

    return (
        <section className='w-full flex flex-col gap-24 pt-28 justify-center items-center bg-[#312D56] text-white tracking-wider'>
            <section className="w-full flex flex-col justify-center items-center gap-8 relative">
                <div className="w-full px-6 lg:px-8 flex flex-col items-center justify-center gap-4 sm:gap-8 relative">
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full object-contain max-w-[120px] sm:max-w-[215px] z-[2]"
                        src="/image/hit-awards/logo.svg" alt="logo-hit" />
                    <p className="font-bold text-center text-mobile-body-3 sm:text-desktop-body-1 z-[2]">HONORING <span className="text-[#FF9A32]">EXCELLENCE</span> IN HALAL TRAVEL</p>
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full object-contain max-w-[1164px] z-[2]"
                        src="/image/hit-awards/hit-main.svg" alt="hit-main" />
                    <Button className="z-[2] absolute !text-desktop-body-3 bottom-[-30px] sm:bottom-[-10px] px-8 py-4 !rounded-[100px] border-[.1px] border-white bg-gradient-to-b from-[#FF9A32] to-[#E948AF] shadow-[0px_0px_50px_15px_rgba(255,214,171,0.20)]">
                        NOMINATE NOW
                    </Button>
                    <div className="rounded-[387px] bg-[rgba(255,154,50,0.5)] blur-[50px] backdrop-blur-[90.35px] size-[100px] sm:size-[280px] absolute left-0 top-24 z-[1]"></div>
                    <div className="rounded-[305px] bg-[rgba(233,72,175,0.5)] blur-[50px] backdrop-blur-[71.21px] size-[100px] sm:size-[280px] absolute right-10 top-60 z-[1]"></div>
                </div>
                <div
                    className="w-full flex flex-col items-center justify-center gap-4 sm:gap-8 mt-4 sm:mt-24 py-8 relative bg-cover bg-center bg-no-repeat min-h-[200px] sm:min-h-[400px]"
                    style={{
                        backgroundImage: `linear-gradient(180deg, #312D57 0%, rgba(39, 35, 71, 0.81) 48.96%, #312D57 98.96%), url('/image/hit-awards/hit-bg-img.jpg')`,
                    }}
                >
                    <p className="font-bold text-mobile-body-3 sm:text-desktop-body-1">AS FEATURED ON</p>
                    <div className="w-10 h-0.5 bg-white" />
                    <Carousel className="w-full">
                        <CarouselContent>
                            {medpart.map((item, index) => (
                                <CarouselItem key={index} className="md:basis-1/5 sm:basis-1/4 basis-1/3 flex justify-center items-center">
                                    <ImageWithFallback
                                        width={0}
                                        height={0}
                                        sizes="10vw"
                                        className="w-[50%] object-contain"
                                        src={item.img} alt={item.alt} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </section>
            <section className="w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#312D57] to-[#27234F] min-h-screen">
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col items-center gap-8 relative">
                    <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-8 relative ">
                        <p className="font-bold text-mobile-body-3 sm:text-desktop-body-1 z-[2]">ABOUT HIT AWARDS</p>
                        <div className="w-10 h-0.5 bg-white z-[2]" />
                        <div className="rounded-[305px] bg-[rgba(100,230,255,1)] blur-[30px] backdrop-blur-[100px] size-[50px] absolute top-0 z-[1]"></div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-8 mt-6 sm:mt-14">
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full object-cover max-w-[969px] max-h-[636px] rounded-2xl"
                            style={{
                                background: "lightgray 0px -0.147px / 100% 100.046% no-repeat",
                            }}
                            src="/image/hit-awards/about-hit-awards.jpg" alt="hit-awards" />
                        <p className="tracking-wide leading-5 sm:leading-8 max-w-[969px] text-mobile-body-3 sm:text-desktop-body-1">Halal In Travel Awards is a celebration of the travel industry players&apos; efforts to make Halal travel a seamless experience. These awards recognize destinations, organizations, companies, and individuals who have made a considerable impact on the Muslim lifestyle travel segment spanning different categories.</p>
                        <p className="tracking-wide leading-5 sm:leading-8 max-w-[969px] text-mobile-body-3 sm:text-desktop-body-1"> There are four categories of awards. Each category has a list of awards given to the top performer based on the winner selection process. Some of the awards are based on the GMTI scores and some are through a nomination process.</p>

                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col items-center gap-8">
                    <div className="w-full flex flex-col items-start justify-start gap-4 sm:gap-8 mt-14 relative">
                        <p className="font-bold text-mobile-body-3 sm:text-desktop-body-1 z-[2]">AWARD CATEGORIES</p>
                        <div className="w-10 h-0.5 bg-white z-[2]" />
                        <div className="rounded-[305px] bg-[rgba(255,154,50,1)] blur-[30px] backdrop-blur-[100px] size-[50px] absolute top-0 z-[1]"></div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start sm:gap-44 gap-14 mt-6 sm:mt-14">
                        {categories.map((category) => (
                            <HitAwardCard key={category.number} number={category.number} title={category.title} description={category.description} imgSrc={category.imgSrc} reverse={category.reverse} />
                        ))}
                    </div>
                </section>
                <section className="max-w-[1440px] mt-44 px-6 lg:px-8 w-full flex flex-col items-center gap-8">
                    <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-8 relative ">
                        <p className="font-bold text-mobile-body-3 sm:text-desktop-body-1 z-[2]">HALL OF FAME</p>
                        <div className="w-10 h-0.5 bg-white z-[2]" />
                        <div className="rounded-[305px] bg-[rgba(233,72,175,1)] blur-[30px] backdrop-blur-[100px] size-[50px] absolute top-0 z-[1]"></div>
                    </div>

                    <Tabs defaultValue="2024" mobileMode="tabs" className="z-10">
                        <TabsList className="w-full justify-center items-center !border-none">
                            {tabYears.map(year => (
                                <TabsTrigger
                                    key={year}
                                    value={year}
                                    className="!text-desktop-body-1"
                                    customColorActive="data-[state=active]:border-[#FF9A32] data-[state=active]:bg-gradient-to-b data-[state=active]:from-[#FF9A32] data-[state=active]:to-[#E948AF] data-[state=active]:text-transparent data-[state=active]:bg-clip-text"
                                >
                                    {year}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {tabYears.map(year => (
                            <TabsContent key={year} value={year} activeValue={year} className="flex gap-14 flex-col">
                                <Tabs defaultValue="mastercard" mobileMode="tabs" className="z-10" desktopTabPosition="left" responsiveTabPosition="top">
                                    <TabsList className="md:w-[20%] w-full !border-none overflow-x-scroll">
                                        {tabCategories.map(({ value, label }) => (
                                            <TabsTrigger
                                                key={value}
                                                value={value}
                                                customColorActive="data-[state=active]:bg-gradient-to-b data-[state=active]:from-[#FF9A32] data-[state=active]:to-[#E948AF] data-[state=active]:text-transparent data-[state=active]:bg-clip-text"
                                                className="w-full  uppercase text-start !justify-start !border-none !p-1 m-2 font-bold !text-desktop-body-1 !text-wrap"
                                            >
                                                {label}
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                    {tabCategories.map(({ value }) => (
                                        <TabsContent key={value} value={value} activeValue={value} className="flex w-full gap-6 flex-col p-6 md:ml-4">
                                            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                                                <Dialog>
                                                    <DialogTrigger className="w-full relative overflow-hidden border-[1px] border-white rounded-2xl p-3 min-h-[157px] flex flex-col justify-end items-end"
                                                        style={{ backgroundImage: "url('/image/hit-awards/about-hit-awards.jpg')", backgroundSize: "cover" }}>
                                                        <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none" className="z-[2] absolute top-4 right-4">
                                                            <g clipPath="url(#clip0_1_8664)">
                                                                <path d="M0 0H40V15H0V0Z" fill="#E70011" />
                                                                <path d="M0 15H40V30H0V15Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_8664">
                                                                    <rect width="40" height="30" rx="8" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        <p className="text-mobile-body-2 sm:text-desktop-body-2 font-bold z-[2] text-left">Top Muslim-friendly Destination of The Year (OIC)</p>
                                                    </DialogTrigger>
                                                    <DialogContent disableClose={true} className="sm:min-w-[600px] max-w-[400px] !bg-[linear-gradient(180deg,#312D57_0%,#191630_100%)] rounded-[30px] border-none !p-0">
                                                        <DialogClose className="absolute right-6 p-1 top-6 rounded-[56px] border border-white shadow-[0px_4px_16px_12px_rgba(213,208,255,0.05)] bg-gradient-to-b from-white/10 to-white/5" >
                                                            <X className="sm:size-5 text-white" />
                                                        </DialogClose>
                                                        <div className="w-full relative text-white overflow-hidden rounded-[30px]">
                                                            <div className="w-full z-[5] flex flex-col items-center justify-center gap-10 mt-12 sm:px-16 px-8 sm:py-14 py-7">
                                                                <p className="text-mobile-body-1 sm:text-desktop-body-1 font-bold text-center uppercase">Top Muslim-friendly Destination of The Year (OIC)</p>
                                                                <ImageWithFallback
                                                                    width={0}
                                                                    height={0}
                                                                    sizes="100vw"
                                                                    className="w-full object-cover max-w-[588px] max-h-[317px] rounded-2xl"
                                                                    style={{
                                                                        background: "lightgray 0px -0.147px / 100% 100.046% no-repeat",
                                                                    }}
                                                                    src="/image/hit-awards/about-hit-awards.jpg" alt="hit-awards" />
                                                                <div>
                                                                    <p className="text-mobile-body-2 sm:text-desktop-body-2 font-bold">INDONESIA</p>
                                                                    <p className="text-mobile-body-2 sm:text-desktop-body-2 tracking-wide !leading-8 text-justify">It is an honor to announce that Indonesia and Malaysia have jointly clinched the esteemed accolade of Top Muslim-friendly Destination of the Year. This remarkable achievement is a testament to the unwavering dedication of both destinations in catering to the diverse needs of Muslim travelers while upholding the highest standards of hospitality and cultural authenticity.</p>
                                                                </div>
                                                            </div>
                                                            <div className="rounded-[387px] bg-[rgba(255,154,50,0.5)] blur-[50px] backdrop-blur-[90.35px] size-[100px] sm:size-[280px] absolute left-0 top-24 z-[-1]"></div>
                                                            <div className="rounded-[305px] bg-[rgba(233,72,175,0.5)] blur-[50px] backdrop-blur-[71.21px] size-[100px] sm:size-[280px] absolute right-[-100px] top-[500px] z-[-1]"></div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </TabsContent>
                                    ))}
                                </Tabs>
                            </TabsContent>
                        ))}
                    </Tabs>
                </section>
            </section>
        </section>
    );
}
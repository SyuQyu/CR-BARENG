'use client';
import { BasicCard, Button, HotelCard, ImageWithFallback, Input } from "@/components/common";
import { cardData, crMemberDirectoryCategories } from "@/constants/dummyData";
import { Carousel as Carousel2, CarouselContent as CarouselContent2, CarouselItem as CarouselItem2, CarouselNextCustom as CarouselNext2, CarouselPreviousCustom as CarouselPrevious2, CarouselDots as CarouselDots2 } from "@/components/ui/carouselCustom2";
import Link from "next/link";
import { useParams } from "next/navigation";
import { formatParams } from "@/utils";
import { Search } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export default function CertifiedProfessionalsDirectoryPage() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const params = useParams<{ idCountry: string }>();

    const handleSearch = () => {
        // Implement search functionality here
        console.log("Search query:", searchQuery);
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
                            Crescent Rated Hotels & Serviced Apartments
                        </p>
                        <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
                            {formatParams(params.idCountry)}
                        </h1>
                    </div>
                </div>
            </section>
            <section className="mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center max-w-[1440px]">
                <section className="px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <div className="w-full flex sm:flex-row flex-col justify-between gap-6 items-center mb-10">
                        <div className="flex flex-row justify-center items-center w-full sm:w-[60%] gap-4">
                            <Select>
                                <SelectTrigger className="sm:w-full  h-14 w-full text-neutral-500">
                                    <SelectValue placeholder="All accomodation" />
                                </SelectTrigger>
                                <SelectContent className="!rounded-none">
                                    <SelectItem value="ind">Indonesia</SelectItem>
                                    <SelectItem value="sg">Singapore</SelectItem>
                                    <SelectItem value="malay">Malaysia</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="sm:w-full h-14 w-full text-neutral-500"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666748 1.16665C0.666748 0.982551 0.815986 0.833313 1.00008 0.833313H13.0001C13.1842 0.833313 13.3334 0.982551 13.3334 1.16665V3.16665C13.3334 3.26395 13.2909 3.3564 13.217 3.41973L8.66675 7.31996V12.5C8.66675 12.6262 8.59541 12.7417 8.48249 12.7981L5.81582 14.1315C5.71332 14.1827 5.59168 14.1777 5.49372 14.1182C5.39577 14.0587 5.33525 13.9531 5.33346 13.8385L5.2316 7.31977L0.780337 3.41729C0.708145 3.354 0.666748 3.26265 0.666748 3.16665V1.16665ZM1.33341 1.49998V3.01558L5.78233 6.916C5.85315 6.9781 5.8944 7.06726 5.89587 7.16144L5.99176 13.2981L8.00008 12.294V7.16665C8.00008 7.06934 8.0426 6.97689 8.11648 6.91356L12.6667 3.01333V1.49998H1.33341Z" fill="black" />
                                        </svg>
                                    }>
                                    <SelectValue placeholder="Filter by Rating" />
                                </SelectTrigger>
                                <SelectContent className="!rounded-none">
                                    <SelectItem value="ind">Indonesia</SelectItem>
                                    <SelectItem value="sg">Singapore</SelectItem>
                                    <SelectItem value="malay">Malaysia</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full sm:w-[40%]">
                            <Input
                                placeholder="Search Hotel & Serviced Apartments"
                                containerInputClasses="h-14 bg-white"
                                iconLeft={<Search className="size-4 text-gray-500" />}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                button={
                                    <Button className="flex flex-row justify-center items-center gap-2 text-white bg-[#453CFF] h-full px-4">
                                        Search
                                    </Button>
                                }
                                onButtonClick={handleSearch}
                            />
                            {/* <Button onClick={() => handleSearch()} className="flex flex-row justify-center items-center gap-2 text-white bg-[#453CFF] h-12 px-4">
                                Search
                            </Button> */}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {[...Array(9)].map((_, index) => (
                            <HotelCard
                                key={index}
                                mainImage="/image/about-us/testpic.webp"
                                badgeImage="/image/cr-member-directory/rating.png"
                                location="HONG KONG- HONG KONG SAR"
                                category="HOTEL"
                                title="The Park Lane Hong Kong, Autograph Collection"
                                description="The Park Lane Hong Kong, Autograph Collection is a contemporary oasis tailored for the discerning traveler of the 21st century. With its sophisticated design, attentive service, and breathtaking views of the harbor, Victoria Park, ..."
                                onSeeDetail={() => console.log("See Detail clicked")}
                                onExploreMore={() => console.log("Explore More clicked")}
                                detailButtonText={
                                    <div className="flex flex-row justify-center items-center gap-2">
                                        <p>Book now on Halal Trip</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.27228 1.33337H11.7276C13.2471 1.33335 14.4719 1.33333 15.4352 1.46284C16.4353 1.59731 17.2774 1.88497 17.9462 2.55376C18.615 3.22256 18.9027 4.06464 19.0371 5.06476C19.1666 6.02806 19.1666 7.25287 19.1666 8.77243V12.2277C19.1666 13.7472 19.1666 14.972 19.0371 15.9353C18.9027 16.9354 18.615 17.7775 17.9462 18.4463C17.2774 19.1151 16.4353 19.4028 15.4352 19.5372C14.4719 19.6667 13.2471 19.6667 11.7275 19.6667H8.27225C6.75272 19.6667 5.52793 19.6667 4.56464 19.5372C3.56452 19.4028 2.72244 19.1151 2.05364 18.4463C1.38485 17.7775 1.09719 16.9354 0.962723 15.9353C0.833211 14.972 0.83323 13.7472 0.833253 12.2277V8.7724C0.83323 7.25286 0.833211 6.02806 0.962723 5.06476C1.09719 4.06464 1.38485 3.22256 2.05364 2.55376C2.72244 1.88497 3.56452 1.59731 4.56464 1.46285C5.52794 1.33333 6.75274 1.33335 8.27228 1.33337ZM4.78672 3.11465C3.97141 3.22426 3.53967 3.42476 3.23215 3.73228C2.92464 4.03979 2.72414 4.47154 2.61453 5.28684C2.50169 6.12612 2.49992 7.23847 2.49992 8.83338V12.1667C2.49992 13.7616 2.50169 14.874 2.61453 15.7132C2.72414 16.5285 2.92464 16.9603 3.23215 17.2678C3.53967 17.5753 3.97141 17.7758 4.78672 17.8854C5.626 17.9983 6.73835 18 8.33325 18H11.6666C13.2615 18 14.3738 17.9983 15.2131 17.8854C16.0284 17.7758 16.4602 17.5753 16.7677 17.2678C17.0752 16.9603 17.2757 16.5285 17.3853 15.7132C17.4982 14.874 17.4999 13.7616 17.4999 12.1667V8.83337C17.4999 7.23847 17.4982 6.12612 17.3853 5.28684C17.2757 4.47154 17.0752 4.03979 16.7677 3.73227C16.4602 3.42476 16.0284 3.22426 15.2131 3.11465C14.3738 3.00181 13.2615 3.00004 11.6666 3.00004H8.33325C6.73835 3.00004 5.626 3.00181 4.78672 3.11465ZM10.9347 8.38701H8.33326V6.72034H11.2799C11.295 6.72034 11.3102 6.72034 11.3253 6.72033C11.6786 6.72026 12.0221 6.7202 12.3053 6.75828C12.6247 6.80121 12.9891 6.90581 13.2917 7.20848C13.5944 7.51116 13.699 7.87556 13.742 8.1949C13.7801 8.47817 13.78 8.82163 13.7799 9.17504C13.7799 9.19012 13.7799 9.20522 13.7799 9.22034V12.1666H12.1132V9.56544L7.25583 14.4226L6.07735 13.244L10.9347 8.38701Z" fill="white" />
                                        </svg>
                                    </div>
                                }
                                exploreMoreButtonText="View Website"
                                exploreMoreUrl={`/resources/cr-member-directory/hotels-serviced-apartments/${formatParams(params.idCountry)}/${'The Park Lane Hong Kong, Autograph Collection'}`}
                            />
                        ))}
                    </div>
                </section>
            </section>
        </div>
    );
}

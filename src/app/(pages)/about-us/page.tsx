'use client';
import { Button, ImageWithFallback } from "@/components/common";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/defaultCarousel";
import { Carousel as Carousel2, CarouselContent as CarouselContent2, CarouselItemCustom as CarouselItem2, CarouselNext as CarouselNext2, CarouselPrevious as CarouselPrevious2 } from "@/components/ui/carouselCustom2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { awardsAboutUs, teamDataAboutUs, testimonialsAboutUs } from "@/constants/dummyData";
export default function AboutUs() {
    const [openTeam, setOpenTeam] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>("executive-management");
    const [activeMember, setActiveMember] = useState<string | null>(null);

    const updateURL = (memberName: string | null) => {
        const url = new URL(window.location.href);
        if (memberName) {
            url.searchParams.set("member", memberName);
        } else {
            url.searchParams.delete("member");
        }
        window.history.replaceState({}, "", url); // Replace state tanpa reload
    };

    // Fungsi untuk menangani klik anggota
    const handleMemberClick = (member: any, teamName: string) => {
        setOpenTeam(true);
        setActiveCategory(teamName); // Atur kategori aktif
        setActiveMember(member.name); // Atur anggota aktif
        updateURL(member.name); // Perbarui URL
    };

    // Fungsi untuk mengurutkan data dimulai dari anggota aktif
    const sortedTeamData = () => {
        const categories = Object.keys(teamDataAboutUs);
        const activeIndex = categories.indexOf(activeCategory);

        // Prioritaskan anggota aktif di kategori saat ini
        const currentTeam = teamDataAboutUs[activeCategory] || [];
        const reorderedTeam = activeMember
            ? [
                ...currentTeam.filter((member: any) => member.name === activeMember),
                ...currentTeam.filter((member: any) => member.name !== activeMember),
            ]
            : currentTeam;

        // Gabungkan tim dengan prioritas kategori aktif
        const reorderedCategories = [
            ...categories.slice(activeIndex),
            ...categories.slice(0, activeIndex),
        ];

        return { reorderedCategories, reorderedTeam };
    };

    // Ambil nama anggota dari URL saat halaman dimuat
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const memberName = urlParams.get("member");
        if (memberName) {
            // Cari anggota berdasarkan nama
            const member: any = Object.values(teamDataAboutUs)
                .flat()
                .find((m: any) => m.name === memberName);

            if (member) {
                setOpenTeam(true);
                setActiveCategory(Object.keys(teamDataAboutUs).find((key) => teamDataAboutUs[key].includes(member)) || "");
                setActiveMember(member.name);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openTeam]);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
                style={{ backgroundImage: "url('/image/about-us/hero.webp')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10">
                        <p className="text-white text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                            About Us
                        </p>
                        <h1 className="text-mobile-heading-3 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text text-white relative z-20 text-left w-full sm:w-[70%]">
                            The world&apos;s leading authority on halal-friendly travel.
                        </h1>
                    </div>
                </div>
            </section>
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="lg:text-desktop-body-1 text-mobile-body-1 text-left w-full text-neutral-500">CrescentRating is the world&apos;s leading authority on halal-friendly travel. The company uses insight, industry intelligence, lifestyle, behavior, and research on the needs of the Muslim traveler to deliver authoritative guidance on all aspects of halal-friendly travel to organizations across the globe. The primary aim of CrescentRating is to enable Muslim travelers to explore the world with peace of mind so that it can benefit Travelers, Travel Service providers, our Stakeholders, and the Community as a whole. Our Commitment is to be the Credible, Knowledgeable, and Globally Trusted brand for Halal/Muslim friendly Travel.</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center p-8 items-start w-full gap-6 bg-neutral-100">
                        <div className="w-full flex flex-col justify-center items-center gap-2">
                            <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-primary-cr-600 text-left w-full">Our Vision</p>
                            <p className="lg:text-desktop-body-1 text-mobile-body-1 text-left w-full text-neutral-500">A world where Muslims can explore the world around them with ease while building bridges with all communities.</p>
                        </div>
                        <div className="sm:border-l border-b border-neutral-300 sm:h-44 sm:w-auto w-full my-2"></div>
                        <div className="w-full flex flex-col justify-center items-center gap-2">
                            <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-primary-cr-600 text-left w-full">Our Mission</p>
                            <p className="lg:text-desktop-body-1 text-mobile-body-1 text-left w-full text-neutral-500">Dedicated to nurturing a thriving, sustainable Halal Travel ecosystem. Our mission is to foster collaboration, and innovation in the Halal Travel industry, promote destinations & businesses, facilitate trade, and honor excellence within this dynamic sector.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="lg:text-desktop-heading-5 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">A Journey of Innovation in Halal Tourism</p>
                    <div className="mt-10 flex flex-row justify-center items-start w-full gap-6">
                        <Carousel2
                            years={[2020, 2021, 2022, 2023, 2024]} // Daftar tahun
                            className="w-full"
                        >
                            <CarouselContent2>
                                {[...Array(5)].map((_, index) => (
                                    <CarouselItem2 key={index} index={index}
                                        image={
                                            <ImageWithFallback
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                // className="md:max-w-[410px] w-full max-h-[300px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[510px] lg:w-[510px] xl:max-w-[510px] object-cover"
                                                className="w-full object-cover"
                                                priority={false}
                                                src={"/image/about-us/testpic.webp"}
                                                alt={"testpic"}
                                            />
                                        }
                                    >
                                        <div className="w-full flex flex-col gap-2 justify-center items-center">
                                            <p className="font-bold text-desktop-heading-6">Lorem Ipsum</p>
                                            <p className="text-desktop-body-2 text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt repellendus at iure eum in. Excepturi eum autem provident assumenda exercitationem deleniti sunt laboriosam. Non neque sed at perferendis delectus.</p>
                                        </div>
                                    </CarouselItem2>
                                ))}
                            </CarouselContent2>
                            <CarouselPrevious2 />
                            <CarouselNext2 />
                        </Carousel2>
                    </div>
                </div>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full">
                    {
                        openTeam ? (
                            <>
                                <div className="flex flex-row justify-between items-center gap-6">
                                    <p className="lg:text-desktop-heading-5 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left">Our Team</p>
                                    <Button
                                        onClick={() => {
                                            setOpenTeam(false);
                                            updateURL(null); // Hapus parameter dari URL
                                        }}
                                        className="mt-4 px-4 py-2 text-white border"
                                    >
                                        <X className="w-5 h-5 text-blue-700" />
                                    </Button>
                                </div>
                                <Carousel
                                    activeAutoPlay={false}
                                >
                                    <CarouselContent>
                                        {sortedTeamData().reorderedCategories.map((teamName) =>
                                            sortedTeamData().reorderedTeam.map((member: any) => (
                                                <CarouselItem key={member.name} className="md:px-16 px-4">
                                                    <div className="flex flex-col md:flex-row justify-start items-start w-full gap-6 mt-10">
                                                        <ImageWithFallback
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                            className="md:max-w-[410px] w-full max-h-[300px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] lg:w-[410px] xl:max-w-[410px] object-cover"
                                                            priority={false}
                                                            src={member.image}
                                                            alt={member.name}
                                                        />
                                                        <div className="flex flex-col justify-center items-start gap-2">
                                                            <h2 className="text-mobile-body-2 md:text-desktop-body-2 text-blue-600">{teamName.replace(/-/g, " ").toUpperCase()}</h2>
                                                            <p className="text-mobile-heading-2 md:text-desktop-heading-4 font-bold">{member.name}</p>
                                                            <p className="text-mobile-body-2 md:text-desktop-body-2 text-neutral-500">{member.role}</p>
                                                            <p className="text-mobile-body-2 md:text-desktop-body-2 text-neutral-500">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus perspiciatis labore ad quidem. Laudantium delectus officiis, veniam modi distinctio incidunt reiciendis nesciunt veritatis, voluptatibus, quasi est in iure corporis.
                                                            </p>
                                                            <a
                                                                href="#"
                                                                className="flex flex-row justify-between items-center gap-2 mt-4 px-4 py-2 text-primary-cr-600 font-semibold md:text-desktop-body-2 text-mobile-body-2 hover:bg-gray-100 border"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                                    <g clip-path="url(#clip0_3908_1216)">
                                                                        <path d="M18.5195 0.5H1.47656C0.660156 0.5 0 1.14453 0 1.94141V19.0547C0 19.8516 0.660156 20.5 1.47656 20.5H18.5195C19.3359 20.5 20 19.8516 20 19.0586V1.94141C20 1.14453 19.3359 0.5 18.5195 0.5ZM5.93359 17.543H2.96484V7.99609H5.93359V17.543ZM4.44922 6.69531C3.49609 6.69531 2.72656 5.92578 2.72656 4.97656C2.72656 4.02734 3.49609 3.25781 4.44922 3.25781C5.39844 3.25781 6.16797 4.02734 6.16797 4.97656C6.16797 5.92188 5.39844 6.69531 4.44922 6.69531ZM17.043 17.543H14.0781V12.9023C14.0781 11.7969 14.0586 10.3711 12.5352 10.3711C10.9922 10.3711 10.7578 11.5781 10.7578 12.8242V17.543H7.79688V7.99609H10.6406V9.30078H10.6797C11.0742 8.55078 12.043 7.75781 13.4844 7.75781C16.4883 7.75781 17.043 9.73438 17.043 12.3047V17.543Z" fill="#453CFF" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_3908_1216">
                                                                            <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                Connect on LinkedIn
                                                            </a>
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))
                                        )}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </>
                        ) : (
                            <>
                                <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Dedicated Experts in Halal Travel</p>
                                <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500">Our team is made up of industry specialists and passionate advocates for Muslim-friendly travel.</p>
                                <div className="mt-10 flex justify-center items-center w-full">
                                    <Tabs defaultValue="executive-management" className="w-full">
                                        <TabsList className="w-full max-w-[1440px] lg:overflow-hidden overflow-x-scroll !border-none">
                                            <TabsTrigger className="w-full" value="executive-management">Executive Management</TabsTrigger>
                                            <TabsTrigger className="w-full" value="creative-experience">Creative & Experience</TabsTrigger>
                                            <TabsTrigger className="w-full" value="service-technology">Service & Technology</TabsTrigger>
                                            <TabsTrigger className="w-full" value="data-research">Data & Research</TabsTrigger>
                                            <TabsTrigger className="w-full" value="business-events">Business & Events</TabsTrigger>
                                        </TabsList>
                                        {Object.entries(teamDataAboutUs).map(([key, members]: any) => (
                                            <TabsContent key={key} value={key} activeValue={key} className="w-full !p-0">
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-9 gap-6 pt-8 w-full">
                                                    {members.map((member: any, index: number) => (
                                                        <div key={index}
                                                            className="flex flex-col items-center cursor-pointer"
                                                            onClick={() => handleMemberClick(member, key)}
                                                        >
                                                            <ImageWithFallback
                                                                width={0}
                                                                height={0}
                                                                sizes="100vw"
                                                                className="w-full object-cover"
                                                                priority={false}
                                                                src={member.image}
                                                                alt={member.name}
                                                            />
                                                            <div className="w-full flex flex-col justify-start items-start">
                                                                <h3 className="md:text-desktop-body-1 text-mobile-body-1 font-semibold mt-4">{member.name}</h3>
                                                                <p className="text-neutral-500 md:text-desktop-caption-l text-mobile-caption-l">{member.role}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </TabsContent>
                                        ))}
                                    </Tabs>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Trusted by Leading Global Brands</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">We&apos;re proud to work with top partners and clients worldwide, supporting their journey to offer Muslim-friendly services and experiences.</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start md:p-8 p-6 w-full gap-1 bg-neutral-100">
                        <div className="w-full flex flex-col justify-center items-center  gap-.5">
                            <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">35+</p>
                            <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">Global partners & clients</p>
                        </div>
                        <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full my-2"></div>
                        <div className="w-full flex flex-col justify-center items-center gap-.5">
                            <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">10k+</p>
                            <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">Media Mentions</p>
                        </div>
                        <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full my-2"></div>
                        <div className="w-full flex flex-col justify-center items-center gap-.5">
                            <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">15+</p>
                            <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">Years of experience</p>
                        </div>
                        <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full my-2"></div>
                        <div className="w-full flex flex-col justify-center items-center gap-.5">
                            <p className="lg:text-desktop-heading-1 text-mobile-heading-1 font-bold mb-4 bg-clip-text text-primary-cr-600 text-center w-full">25+</p>
                            <p className="lg:text-desktop-body-2 text-mobile-body-2 text-center w-full text-neutral-500">Destinations services provided</p>
                        </div>
                    </div>
                    <div className="mt-10 flex md:flex-row flex-col justify-center items-center w-full gap-6">
                        <div className="w-full flex flex-col justify-center items-center gap-.5">
                            <p className="lg:text-desktop-heading-6 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-left w-full">Global Partners</p>
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-contain"
                                priority={false}
                                src='/image/about-us/g-partners.png'
                                alt='g-partners'
                            />
                        </div>
                        <div className="md:border-l border-b border-neutral-300 md:h-28 md:w-auto w-full"></div>
                        <div className="w-full flex flex-col justify-center items-center gap-.5">
                            <p className="lg:text-desktop-heading-6 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-left w-full">Clients</p>
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full object-contain"
                                priority={false}
                                src='/image/about-us/clients.png'
                                alt='client'
                            />
                        </div>
                    </div>
                    <div className="mt-10 flex flex-row justify-center items-center w-full gap-6">
                        <div className="w-full flex flex-col justify-center items-center gap-.5">
                            <p className="lg:text-desktop-heading-6 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-left w-full">What They Say</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                                className="w-[48px] object-contain"
                                                priority={false}
                                                src={testimonial.imageSrc}
                                                alt={testimonial.imageAlt}
                                            />
                                            <div className="flex flex-col justify-between items-start gap-1">
                                                <p className="text-desktop-body-2">{testimonial.name}</p>
                                                <p className="text-neutral-500 text-desktop-caption-l">
                                                    {testimonial.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* <div className="w-full flex justify-center mt-6">
                                <Button className="lg:text-mobile-body-1 text-mobile-body-3 sm:max-w-[150px] w-full flex flex-row justify-center items-center gap-2 text-blue-600 border-gray-600/20 border p-3 sm:p-4">
                                    View More
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-start">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left">Recognized for Excellence in Halal Tourism</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-left text-neutral-500 w-[80%] lg:w-[50%]">Our awards reflect CrescentRating&apos;s dedication to innovation and quality in the halal tourism sector.</p>
                    <div className="mt-10 grid md:grid-cols-4 grid-cols-2 justify-center items-center w-full h-full gap-0">
                        {awardsAboutUs.map((award: any, index: number) => (
                            <div
                                key={index}
                                className="w-full flex flex-col justify-start items-start p-8 gap-0.5 min-h-[240px] border h-full"
                            >
                                <ImageWithFallback
                                    width={0}
                                    height={0}
                                    sizes="1000vw"
                                    className="w-[80px] object-contain"
                                    priority={false}
                                    src={award.image}
                                    alt={award.title}
                                />
                                <div className="flex flex-col justify-start items-start gap-1">
                                    <p className="lg:text-desktop-body-1 text-mobile-body-1 font-bold bg-clip-text text-left w-full">
                                        {award.title}
                                    </p>
                                    <p className="lg:text-desktop-body-2 text-mobile-body-1 text-left w-full text-neutral-500">
                                        {award.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="w-full flex justify-center mt-6">
                        <Button className="lg:text-mobile-body-1 text-mobile-body-3 sm:max-w-[150px] w-full flex flex-row justify-center items-center gap-2 text-blue-600 border-gray-600/20 border p-3 sm:p-4">
                            View More
                        </Button>
                    </div> */}
                </div>
            </div>
        </div >
    )
}
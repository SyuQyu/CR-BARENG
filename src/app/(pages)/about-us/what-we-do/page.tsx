'use client';
import { Button, CardReports, ImageWithFallback } from "@/components/common";
import { useEffect, useState } from "react";
import { awardsAboutUs, reportsInsightSeries, teamDataAboutUs, testimonialsAboutUs } from "@/constants/dummyData";
import Link from "next/link";
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
                style={{ backgroundImage: "url('/image/what-we-do/hero.jpg')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
                        <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                            About Us
                        </p>
                        <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
                            What We Do
                        </h1>
                        <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
                            Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum
                            non consectetur nec platea gravida ac.
                        </p>
                    </div>
                </div>
            </section>
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">We Have Provided Services to More Than 300+ Clients</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum non consectetur nec platea gravida ac.</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1 bg-neutral-100">
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
                            <p className="lg:text-desktop-heading-6 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-center w-full">Global Partners</p>
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
                    </div>
                    <div className="mt-10 flex flex-row justify-center items-center w-full gap-6">
                        <div className="w-full flex flex-col justify-center items-center gap-.5">
                            <p className="lg:text-desktop-heading-6 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-center w-full">What They Say</p>
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
                            <div className="w-full flex justify-center mt-6">
                                <Button className="lg:text-mobile-body-1 text-mobile-body-3 sm:max-w-[150px] w-full flex flex-row justify-center items-center gap-2 text-blue-600 border-gray-600/20 border p-3 sm:p-4">
                                    View More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Global Muslim Travel Index</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum non consectetur nec platea gravida ac.</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
                        <div className="flex flex-col justify-center items-center w-full gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                                {reportsInsightSeries.slice(0, 3).map((report, index) => (
                                    <CardReports
                                        id={report.id}
                                        key={index}
                                        title={report.title}
                                        imageUrl={report.imageUrl}
                                        downloadUrl={report.downloadUrl}
                                        customImgHeight="lg:max-h-[350px] sm:max-h-[300px] max-h-[400px]"
                                    />
                                ))}
                            </div>
                            <div className="w-full flex justify-center mt-6">
                                <Button className="lg:text-mobile-body-1 text-mobile-body-3 sm:max-w-[150px] w-full flex flex-row justify-center items-center gap-2 bg-primary-cr-600 text-white  border p-3 sm:p-4">
                                    View More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Muslim Visitor Guides</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum non consectetur nec platea gravida ac.</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
                        <div className="flex flex-col justify-center items-center w-full gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                                {reportsInsightSeries.slice(0, 3).map((report, index) => (
                                    <CardReports
                                        id={report.id}
                                        key={index}
                                        title={report.title}
                                        imageUrl={report.imageUrl}
                                        downloadUrl={report.downloadUrl}
                                        customImgHeight="lg:max-h-[350px] sm:max-h-[300px] max-h-[400px]"
                                    />
                                ))}
                            </div>
                            <div className="w-full flex justify-center mt-6">
                                <Button className="lg:text-mobile-body-1 text-mobile-body-3 sm:max-w-[150px] w-full flex flex-row justify-center items-center gap-2 bg-primary-cr-600 text-white  border p-3 sm:p-4">
                                    View More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Crescent Rated Services in More Than 40 Countries</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum non consectetur nec platea gravida ac.</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
                        <div className="flex flex-col justify-center items-center w-full gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                                <div className="w-full relative">
                                    <ImageWithFallback
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-full object-cover h-full"
                                        priority={false}
                                        src={"/image/what-we-do/hg.jpeg"}
                                        alt={"hongkong"}
                                    />
                                    <div className="absolute flex justify-center items-center rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border h-full border-white/[0.01] bg-black/40 rounded-none">
                                        <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-semibold text-white">Hong Kong Sar</p>
                                    </div>
                                </div>
                                <div className="w-full relative">
                                    <ImageWithFallback
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-full object-cover h-full"
                                        priority={false}
                                        src={"/image/what-we-do/sl.jpeg"}
                                        alt={"sri lanka"}
                                    />
                                    <div className="absolute flex justify-center items-center rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border h-full border-white/[0.01] bg-black/40 rounded-none">
                                        <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-semibold text-white">Sri Lanka</p>
                                    </div>
                                </div>
                                <div className="w-full relative">
                                    <ImageWithFallback
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-full object-cover h-full"
                                        priority={false}
                                        src={"/image/what-we-do/sg.jpeg"}
                                        alt={"sg"}
                                    />
                                    <div className="absolute flex justify-center items-center rounded-bl-lg rounded-br-lg text-center bottom-0 w-full py-[10px] border h-full border-white/[0.01] bg-black/40 rounded-none">
                                        <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-semibold text-white">Singapore</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-center mt-6">
                                <Button className="lg:text-mobile-body-1 text-mobile-body-3 sm:max-w-[150px] w-full flex flex-row justify-center items-center gap-2 bg-primary-cr-600 text-white  border p-3 sm:p-4">
                                    View More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">International Conferences Attended</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum non consectetur nec platea gravida ac.</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
                        <div className="flex flex-col justify-center items-center w-full gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-9">
                                {reportsInsightSeries.slice(0, 4).map((report, index) => (
                                    <CardReports
                                        id={report.id}
                                        key={index}
                                        title={"Global Labor Market Conference 2025"}
                                        imageUrl={report.imageUrl}
                                        downloadUrl={report.downloadUrl}
                                        date={"Riyadh"}
                                        customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                                    />
                                ))}
                            </div>
                            <div className="w-full flex justify-center mt-6">
                                <Button className="lg:text-mobile-body-1 text-mobile-body-3 sm:max-w-[150px] w-full flex flex-row justify-center items-center gap-2 bg-primary-cr-600 text-white  border p-3 sm:p-4">
                                    View More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Media Mentions</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500 w-[80%] lg:w-[50%]">Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum non consectetur nec platea gravida ac.</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
                        <div className="flex flex-col justify-center items-center w-full gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                                {reportsInsightSeries.slice(0, 3).map((report, index) => (
                                    <CardReports
                                        id={report.id}
                                        key={index}
                                        title={"Global Labor Market Conference 2025"}
                                        imageUrl={report.imageUrl}
                                        customImgHeight="lg:max-h-[300px] sm:max-h-[200px] max-h-[350px]"
                                    />
                                ))}
                            </div>
                            <div className="w-full flex justify-center mt-6">
                                <Button className="lg:text-mobile-body-1 text-mobile-body-3 sm:max-w-[150px] w-full flex flex-row justify-center items-center gap-2 bg-primary-cr-600 text-white  border p-3 sm:p-4">
                                    View More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="w-full flex flex-col bg-gradient-to-r from-blue-600 to-navy-blue-600 justify-center items-center">
                    <div className="max-w-[1440px] px-6 lg:px-8 w-full sm:py-16 py-12 flex sm:flex-row flex-col gap-5 justify-between items-end">
                        <div className="sm:w-[80%] w-full flex flex-col gap-4">
                            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-white">Let’s Have a Talk</p>
                            <p className="text-white sm:text-desktop-body-2 text-mobile-body-2">Lorem ipsum dolor sit amet consectetur. Risus vitae blandit faucibus id urna quis nisl egestas. Ultrices aenean metus duis mi nisi viverra nulla diam.</p>
                        </div>
                        <Link href="#" className="inline-block p-3 text-blue-600 text-center font-bold bg-white border border-gray-500/20 w-full sm:w-[20%]">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
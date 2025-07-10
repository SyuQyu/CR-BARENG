'use client'
import { Button, HeroCard, ImageWithFallback, Input, Pagination } from "@/components/common";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogsTabsData, heroCardsData, authorsBlogs } from "@/constants/dummyData";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function BlogsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState<any[]>(blogsTabsData);


    const handleSearch = (tabs?: boolean) => {
        if (searchQuery.trim() === "" || tabs) {
            setFilteredData(blogsTabsData);
            setSearchQuery("");
            return;
        }

        const filteredResults = blogsTabsData
            .map(tab => ({
                ...tab,
                media: tab.media.filter(article =>
                    article.title.toLowerCase().includes(searchQuery.toLowerCase())
                ),
            }))
            .filter(tab => tab.media.length > 0);

        console.log(filteredResults, searchQuery);

        setFilteredData(filteredResults);

    };

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
                style={{ backgroundImage: "url('/image/blogs/hero-new.jpg')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
                        <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                            Insights
                        </p>
                        <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
                            Blogs (Magazine)
                        </h1>
                        <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
                            News, Views and Opinion on Halal Travel
                        </p>
                    </div>
                </div>
            </section>
            <section className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[35%]">Latest Releases</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">Stay Updated with the Latest Insights on Halal Travel</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
                        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-start gap-12">
                            <div className="flex flex-col justify-start items-start">
                                <ImageWithFallback
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-full object-cover rounded-xl shadow-xl mb-4"
                                    priority={false}
                                    src={"/image/landing-page/img.webp"}
                                    alt={"hero"}
                                />
                                <div className="flex flex-col gap-2 justify-start items-start w-full">
                                    <p className="text-desktop-caption-l text-custom-gray-cr font-bold">may 27, 2022</p>
                                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-primary-cr-600">CR Nominated as ‘2022 Most Innovative Company In the World’</p>
                                    <p className="sm:text-desktop-body-2 text-mobile-body-2">Lorem ipsum dolor sit amet consectetur. Molestie interdum tellus enim quis feugiat. Nisl et placerat turpis tortor nec. Egestas magnis donec varius nunc purus rutrum rutrum nisi.</p>
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col justify-between items-start gap-5">
                                {heroCardsData.map((card, index) => (
                                    <HeroCard
                                        key={index}
                                        imageUrl={card.imageUrl}
                                        imageAlt={card.imageAlt}
                                        date={card.date}
                                        title={card.title}
                                        description={card.description}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-start items-start">
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="w-full flex flex-col">
                            <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-start w-[80%] lg:w-[35%]">All Releases</p>
                            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-start text-gray-500 w-[80%] lg:w-[50%]">Explore Halal Travel Topics Tailored to Your Interests</p>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[40%]">
                            <Input
                                placeholder="Search an Article..."
                                containerInputClasses="rounded-none !border-r-0 h-12"
                                className="w-full h-12"
                                iconLeft={<Search className="size-4 text-gray-500" />}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button onClick={() => handleSearch()} className="flex flex-row justify-center items-center gap-2 text-white bg-[#453CFF] h-12 px-4">
                                Search
                            </Button>
                        </div>

                    </div>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
                        <Tabs defaultValue="all" className="w-full">
                            <TabsList className="w-full max-w-[1440px] lg:overflow-hidden overflow-x-scroll !border-none">
                                {blogsTabsData.map((tab) => (
                                    <TabsTrigger onClick={() => handleSearch(true)} key={tab.value} className="w-full" value={tab.value}>
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {filteredData.map((tab) => (
                                <TabsContent key={tab.value} value={tab.value} activeValue={tab.value}>
                                    <div className="grid md:grid-cols-3 gap-14 w-full mb-12">
                                        {tab?.media?.length > 0 ? (
                                            tab.media.map((card: any, index: number) => (
                                                <HeroCard
                                                    imagePosition="top"
                                                    key={index}
                                                    border={true}
                                                    dateTextColor="text-custom-purple-cr"
                                                    titleTextColor="text-black"
                                                    descriptionTextColor="text-gray-500"
                                                    imageUrl={card.imageUrl}
                                                    imageAlt={card.imageAlt}
                                                    date={card.date}
                                                    title={card.title}
                                                    description={card.description}
                                                />
                                            ))
                                        ) : (
                                            <p className="text-gray-500">No articles available for this category.</p>
                                        )}
                                    </div>
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </section>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-[80%] lg:w-[35%]">Meet Our Top Authors</p>
                    <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-[80%] lg:w-[50%]">Discover Insights from Our Top Authors</p>
                    <div className="mt-10 flex sm:flex-row flex-col justify-center items-start w-full gap-1">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between items-start gap-6 w-full">
                            {authorsBlogs.map((author, index) => (
                                <div key={index} className="w-full flex h-full flex-row justify-start items-stretch gap-3 border p-2">
                                    <ImageWithFallback
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="h-full w-auto object-cover max-w-[71px]"
                                        priority={false}
                                        src={author.image}
                                        alt={author.name}
                                    />
                                    <div className="w-full flex flex-col justify-start items-start">
                                        <p className="font-bold text-desktop-body-2">{author.name}</p>
                                        <p className="text-gray-500 text-desktop-caption-s mb-2">{author.articles} Articles</p>
                                        <Link href={`/insights/blogs/author/${author.name}`} className="flex flex-row justify-start items-center gap-1 text-desktop-body-3 text-primary-cr-700 font-semibold"> See All <ArrowRight className="size-4 mt-[2px]" /> </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}
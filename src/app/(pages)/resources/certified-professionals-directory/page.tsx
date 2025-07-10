import { Input, ProfileCard2, CheckBox } from "@/components/common";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { professionalsData } from "@/constants/dummyData";
export default function CertifiedProfessionalsDirectoryPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
                style={{ backgroundImage: "url('/image/certified-professionals-directory/hero-new.jpg')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
                        <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                            Resources
                        </p>
                        <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
                            CrescentRating Certified Market Readiness Professionals Directory
                        </h1>
                        <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
                            Lorem ipsum dolor sit amet consectetur. Eget mattis adipiscing orci pulvinar vitae. Ultrices tempor interdum
                            non consectetur nec platea gravida ac.
                        </p>
                    </div>
                </div>
            </section>
            <section className="max-w-[1440px] px-6 lg:px-8 w-full">
                <section className="mt-10 flex justify-start items-start w-full relative">
                    <Tabs defaultValue="certified-professionals" className="w-full">
                        <TabsList className="w-full lg:overflow-hidden overflow-x-scroll !border-none">
                            <TabsTrigger className="w-full" value="all">All</TabsTrigger>
                            <TabsTrigger className="w-full" value="certified-professionals">Certified Professionals</TabsTrigger>
                            <TabsTrigger className="w-full" value="industry-experts">Industry Experts</TabsTrigger>
                            <TabsTrigger className="w-full" value="academics">Academics</TabsTrigger>
                            <TabsTrigger className="w-full" value="postgraduate">Postgraduate</TabsTrigger>
                        </TabsList>
                        {Object.entries(professionalsData).map(([key, professionals]) => (
                            <TabsContent key={key} value={key} activeValue={key} className="w-full flex md:flex-row flex-col justify-between md:gap-8 gap-0 items-start">
                                <div className="border w-[30%] mt-8 md:flex hidden p-8 flex-col justify-start items-start gap-6 ">
                                    <Input placeholder="Search professionals" className="w-full" iconRight={<Search className="size-4 text-gray-500" />} />
                                    <hr className="w-full h-[1px] bg-gray-500" />
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1" className="!border-none gap-4">
                                            <AccordionTrigger className="no-underline text-left md:text-desktop-body-1 text-mobile-body-1">Find Professionals by Certification</AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 justify-start items-start">
                                                <CheckBox id="hotel-professionals" label="Hotel Professionals (71)" />
                                                <CheckBox id="travel-agency-professionals" label="Travel Agency Professionals (39)" />
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <hr className="w-full h-[1px] bg-gray-500" />
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-2" className="!border-none gap-4">
                                            <AccordionTrigger className="no-underline text-left md:text-desktop-body-1 text-mobile-body-1">Find Professionals by Role</AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 justify-start items-start">
                                                <CheckBox id="speaker" label="Speaker (73)" />
                                                <CheckBox id="author" label="Author (43)" />
                                                <CheckBox id="mentor" label="Mentor (39)" />
                                                <CheckBox id="investor" label="Investor (41)" />
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <hr className="w-full h-[1px] bg-gray-500" />
                                    <div className="flex flex-col gap-4 justify-start items-start w-full">
                                        <p className="text-desktop-body-1 font-semibold">Find Professionals by Location</p>
                                        <Input placeholder="Search a location" className="w-full" />
                                    </div>
                                </div>
                                <div className="md:hidden flex flex-row justify-between items-center gap-6 w-full">
                                    <Input placeholder="Search professionals" className="w-full" iconRight={<Search className="size-4 text-gray-500" />} />
                                    <Dialog>
                                        <DialogTrigger className="font-semibold flex flex-row justify-center items-center text-mobile-body-2 gap-2 border text-custom-blue py-2 sm:py-3 px-4 sm:px-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.63055 0.166692C2.64263 0.166694 2.65472 0.166697 2.66682 0.166697H13.3335C13.3456 0.166697 13.3577 0.166694 13.3698 0.166692C13.6525 0.166636 13.9272 0.166582 14.1538 0.197049C14.4093 0.231396 14.7008 0.315077 14.943 0.557221C15.1851 0.799365 15.2688 1.09088 15.3031 1.34635C15.3336 1.57296 15.3336 1.84772 15.3335 2.13044C15.3335 2.14251 15.3335 2.1546 15.3335 2.1667V3.97448C15.3335 3.99193 15.3336 4.00989 15.3336 4.02831C15.3345 4.2295 15.3356 4.48527 15.2406 4.72619C15.1456 4.96712 14.9703 5.15336 14.8324 5.29986C14.8198 5.31328 14.8075 5.32636 14.7956 5.33912L10.8461 9.5707C10.7512 9.67243 10.7042 9.72336 10.6728 9.76231C10.6722 9.76305 10.6716 9.76377 10.6711 9.76448C10.671 9.76537 10.6709 9.7663 10.6709 9.76726C10.6672 9.81713 10.6668 9.88643 10.6668 10.0256L10.6668 11.9007C10.6669 12.1079 10.6669 12.3153 10.6468 12.4916C10.6238 12.6929 10.569 12.919 10.4151 13.1325C10.2613 13.346 10.0641 13.4694 9.8804 13.5549C9.71958 13.6297 9.52279 13.6953 9.32624 13.7607C9.31725 13.7637 9.30826 13.7667 9.29928 13.7697L7.96595 14.2142C7.952 14.2188 7.93808 14.2235 7.9242 14.2281C7.55997 14.3496 7.21991 14.463 6.9364 14.5134C6.62665 14.5686 6.23909 14.577 5.88721 14.3234C5.53533 14.0698 5.4208 13.6994 5.37515 13.3881C5.33337 13.1032 5.33342 12.7447 5.33349 12.3608C5.33349 12.3462 5.33349 12.3315 5.33349 12.3168V10.0256C5.33349 9.88643 5.33309 9.81713 5.32945 9.76726C5.32938 9.7663 5.32931 9.76538 5.32924 9.76448C5.32868 9.76378 5.3281 9.76305 5.3275 9.76231C5.29612 9.72336 5.24914 9.67243 5.15419 9.5707L1.20471 5.33912C1.19281 5.32636 1.1805 5.31328 1.16787 5.29987C1.02997 5.15336 0.854672 4.96712 0.759707 4.72619C0.664741 4.48527 0.665821 4.2295 0.66667 4.02831C0.666747 4.00989 0.666823 3.99193 0.666823 3.97448V2.1667C0.666823 2.15459 0.666821 2.1425 0.666818 2.13042C0.666763 1.84771 0.666709 1.57296 0.697176 1.34635C0.731523 1.09088 0.815204 0.799365 1.05735 0.557221C1.29949 0.315077 1.59101 0.231396 1.84648 0.197049C2.07309 0.166582 2.34784 0.166636 2.63055 0.166692ZM2.01929 1.51916C2.01906 1.52074 2.01884 1.52236 2.01862 1.52401C2.00157 1.65081 2.00016 1.83358 2.00016 2.1667V3.97448C2.00016 4.11363 2.00056 4.18293 2.0042 4.2328C2.00427 4.23376 2.00434 4.23468 2.00441 4.23558C2.00497 4.23628 2.00555 4.23701 2.00615 4.23775C2.03752 4.2767 2.08451 4.32763 2.17945 4.42936L6.12893 8.66094C6.14084 8.6737 6.15315 8.68678 6.16578 8.70019C6.30368 8.8467 6.47897 9.03294 6.57394 9.27387C6.6689 9.51479 6.66783 9.77056 6.66698 9.97175C6.6669 9.99017 6.66682 10.0081 6.66682 10.0256V12.3168C6.66682 12.7604 6.66854 13.0185 6.69438 13.1947C6.69474 13.1972 6.69511 13.1996 6.69547 13.202C6.69785 13.2016 6.70028 13.2012 6.70276 13.2007C6.87808 13.1695 7.12345 13.0895 7.54431 12.9493L8.87764 12.5048C9.11222 12.4266 9.23472 12.3847 9.31801 12.346C9.31923 12.3454 9.32043 12.3448 9.3216 12.3443C9.32176 12.343 9.32191 12.3417 9.32206 12.3403C9.33248 12.2491 9.33349 12.1196 9.33349 11.8724V10.0256C9.33349 10.0081 9.33341 9.99017 9.33334 9.97175C9.33249 9.77056 9.33141 9.51479 9.42637 9.27387C9.52134 9.03294 9.69664 8.8467 9.83454 8.7002C9.84716 8.68678 9.85947 8.6737 9.87138 8.66094L13.8209 4.42936C13.9158 4.32763 13.9628 4.2767 13.9942 4.23775C13.9948 4.23701 13.9953 4.23628 13.9959 4.23558C13.996 4.23468 13.996 4.23376 13.9961 4.2328C13.9998 4.18293 14.0002 4.11363 14.0002 3.97448V2.1667C14.0002 1.83358 13.9987 1.65081 13.9817 1.52401C13.9815 1.52236 13.9812 1.52074 13.981 1.51916C13.9794 1.51894 13.9778 1.51872 13.9762 1.51849C13.8494 1.50145 13.6666 1.50003 13.3335 1.50003H2.66682C2.33371 1.50003 2.15094 1.50145 2.02414 1.51849C2.02249 1.51872 2.02087 1.51894 2.01929 1.51916Z" fill="#453CFF" />
                                            </svg> Filters
                                        </DialogTrigger>
                                        <DialogContent className="p-8">
                                            <DialogHeader className="mb-8">
                                                <DialogTitle className="text-desktop-heading-4 font-bold">Filters</DialogTitle>
                                            </DialogHeader>
                                            <div className="w-full flex flex-col justify-start items-start gap-6 ">
                                                <hr className="w-full h-[1px] bg-gray-500" />
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1" className="!border-none gap-4">
                                                        <AccordionTrigger className="no-underline text-left text-mobile-body-1">Find Professionals by Certification</AccordionTrigger>
                                                        <AccordionContent className="flex flex-col gap-4 justify-start items-start">
                                                            <CheckBox id="hotel-professionals" label="Hotel Professionals (71)" />
                                                            <CheckBox id="travel-agency-professionals" label="Travel Agency Professionals (39)" />
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                                <hr className="w-full h-[1px] bg-gray-500" />
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-2" className="!border-none gap-4">
                                                        <AccordionTrigger className="no-underline text-left text-mobile-body-1">Find Professionals by Role</AccordionTrigger>
                                                        <AccordionContent className="flex flex-col gap-4 justify-start items-start">
                                                            <CheckBox id="speaker" label="Speaker (73)" />
                                                            <CheckBox id="author" label="Author (43)" />
                                                            <CheckBox id="mentor" label="Mentor (39)" />
                                                            <CheckBox id="investor" label="Investor (41)" />
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                                <hr className="w-full h-[1px] bg-gray-500" />
                                                <div className="flex flex-col gap-4 justify-start items-start w-full">
                                                    <p className="md:text-desktop-body-1 text-mobile-body-1 font-semibold">Find Professionals by Location</p>
                                                    <Input placeholder="Search a location" className="w-full" />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>

                                </div>
                                <div className="md:w-[70%] mt-8 w-full max-h-screen overflow-y-scroll flex flex-col gap-6">
                                    {professionals.map((person, index) => (
                                        <ProfileCard2
                                            key={index}
                                            name={person.name}
                                            location={person.location}
                                            description={person.description}
                                            image={person.image}
                                            tags={person.tags}
                                            linkedin={person.linkedin}
                                            className="shadow-none"
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </section>
            </section>
        </div>
    )
}
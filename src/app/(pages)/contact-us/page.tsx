import { BasicCard, Button, CheckBox, HeroCard, ImageWithFallback, Input } from "@/components/common";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/defaultCarousel";
import { CircleCheck, Link } from "lucide-react";
import { medpart, cardData, categoriesServices, servicesData } from "@/constants/dummyData";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export default function ContactUs() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
                style={{ backgroundImage: "url('/image/contact-us/hero.jpg')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
                        <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                            Our Service
                        </p>
                        <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
                            Get in Touch with Our Team
                        </h1>
                        <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
                            Have questions about halal accreditation or partnership opportunities? Fill out the form and our team will respond shortly.
                        </p>
                    </div>
                </div>
            </section>
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center gap-10">
                    <div className="w-full flex md:flex-row flex-col justify-between items-start gap-12">
                        <div className="relative text-right w-full md:max-w-[560px] h-[450px] md:h-[560px]">
                            <div className="overflow-hidden bg-none w-full h-full">
                                <iframe
                                    width="500"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={`https://www.google.com/maps/embed/v1/place?q=indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start bg-[#FAF9FA]">
                            <form className="w-full gap-8 flex flex-col p-8">
                                {/* Full Name & Company */}
                                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input label="Full Name" placeholder="Input your full name" className="w-full" labelStyle="font-bold" />
                                    <Input label="Company" placeholder="Input your company" className="w-full" labelStyle="font-bold" />
                                </div>
                                {/* Country & City */}
                                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input label="Country" placeholder="Input your country" className="w-full" labelStyle="font-bold" />
                                    <Input label="City" placeholder="Input your city" className="w-full" labelStyle="font-bold" />
                                </div>
                                {/* Email & Nature of Your Business */}
                                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input label="Email" placeholder="Input your email" className="w-full" labelStyle="font-bold" />
                                    <div className="w-full flex flex-col justify-start items-start gap-2">
                                        <p className="md:text-desktop-label-l text-desktop-label-s font-bold">Nature of Your Business</p>
                                        <Select>
                                            <SelectTrigger className="w-full text-neutral-500">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-none">
                                                <SelectItem value="restaurant">Restaurant</SelectItem>
                                                <SelectItem value="hotel">Hotel</SelectItem>
                                                <SelectItem value="travel">Travel</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                {/* Phone Number & Inquiring on */}
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <Input label="Phone Number" placeholder="Input your phone number" className="w-full" labelStyle="font-bold" />
                                    <div className="w-full flex flex-col justify-start items-start gap-2">
                                        <p className="md:text-desktop-label-l text-desktop-label-s font-bold">Inquiring on</p>
                                        <Select>
                                            <SelectTrigger className="w-full text-neutral-500">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-none">
                                                <SelectItem value="halal-accreditation">Halal Accreditation</SelectItem>
                                                <SelectItem value="partnership">Partnership</SelectItem>
                                                <SelectItem value="general">General Inquiry</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                {/* Message */}
                                <div className="w-full">
                                    <Input
                                        label="Message"
                                        placeholder="Input your message"
                                        className="w-full"
                                        labelStyle="font-bold"
                                        type="textarea"
                                        multiline={true}
                                        multilineHeight="h-[150px]"

                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    {/* Checkbox 1 */}
                                    <div className="flex flex-row justify-start items-center space-x-2">
                                        <Checkbox
                                            id="terms1"
                                            className="h-4 w-4 rounded-none border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="terms1"
                                            className="font-semibold md:text-desktop-label-l text-desktop-label-s text-gray-600 leading-none"
                                        >
                                            I have read and agree to CrescentRating{" "}
                                            <a
                                                href="#"
                                                className="text-blue-600 font-semibold underline hover:text-blue-800"
                                            >
                                                Privacy Policy
                                            </a>{" "}
                                            &{" "}
                                            <a
                                                href="#"
                                                className="text-blue-600 font-semibold underline hover:text-blue-800"
                                            >
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>

                                    {/* Checkbox 2 */}
                                    <div className="flex flex-row justify-start items-center space-x-2">
                                        <Checkbox
                                            id="terms2"
                                            className="h-4 w-4 rounded-none border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="terms2"
                                            className="font-semibold md:text-desktop-label-l text-desktop-label-s text-gray-600 leading-none"
                                        >
                                            I hereby give consent to CrescentRating to contact me for future
                                            marketing purposes.
                                        </label>
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <Button className="w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px] mt-2">
                                    Send
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    )
}
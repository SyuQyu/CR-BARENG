"use client";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  CalendarIcon,
  Check,
  ChevronDownIcon,
  MedalIcon,
} from "lucide-react";
import React, { useState } from "react";

import {
  Button,
  CardProfile,
  CardTestimonials,
  ImageWithFallback,
} from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItemTestimonials,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from "@/components/ui/carouselCustom2";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  crAcademySectorImmersionProgramsCardProfile,
  crAcademyTestimonials,
} from "@/constants/dummyData";

export default function HalalChefWorld() {
  const today = new Date();

  const [selectedLocation, setSelectedLocation] = useState<string>(
    "Select Your Training Location"
  );
  const locations = ["Singapore", "Malaysia", "Indonesia"];

  const [openFrom, setOpenFrom] = React.useState(false);
  const [openTo, setOpenTo] = React.useState(false);

  const [dateFrom, setDateFrom] = React.useState<Date | undefined>(undefined);
  const [dateTo, setDateTo] = React.useState<Date | undefined>(undefined);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section
        className="relative w-full px-8 lg:px-32 flex justify-center items-center flex-row bg-center"
        style={{
          backgroundImage: "url('/image/crescentrating-academy/hero.webp')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col gap-5 ">
          <div className="flex w-full flex-col gap-5 text-center justify-center items-center sm:mt-20 mt-10">
            <ImageWithFallback
              src="/image/crescentrating-academy/cr-academy-logo.webp"
              alt="CrescentRating Academy Logo"
              sizes="100vw"
              width={154}
              height={40}
              className="w-40 sm:w-52 object-cover"
            />
            <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 w-full sm:w-[70%] text-primary-cr-800">
              Halal Tourism Executive Program
            </h1>
            <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full text-custom-gray-cr">
              Transform your organization & the tourism world
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full sm:w-[80%]">
              <Button variant="primary" className="w-48 py-2">
                Learn More
              </Button>
              <Button variant="secondary" className="w-48 py-2">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex max-w-[1440px] justify-between items-center flex-col relative">
        <div className="max-w-[1216px] pt-7 sm:pt-14 w-full flex flex-col gap-24 justify-center items-center bg-white">
          <div className="flex flex-col px-16 lg:px-32 md:py-14 w-full md:gap-8 gap-6 border border-[#E3E2E6]">
            <div className="md:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-primary-cr-800 text-center">
              Transform Your Organization & The Tourism World
            </div>
            <div className="flex w-full justify-center items-center">
              <ImageWithFallback
                src="/image/crescentrating-academy/executive-education/grid.png"
                alt="executive-education-1"
                width={0}
                height={0}
                sizes="80%"
                className="w-[80%] h-auto object-cover"
              />
            </div>

            <p className="md:text-desktop-body-2 text-mobile-body-2 text-center text-black">
              Today, leaders operate in a world with greater uncertainty, and
              must move beyond adapting their services towards offering
              innovative solutions. With the growth in the Halal travel market,
              this represents a significant opportunity to unlock new blue
              oceans and serve new markets in the dynamic tourism industry.
              Together with the world’s leading authority in Halal Travel
              CrescentRating, key thought-leaders and fellow industry experts,
              learn how you can grow and innovate your business for the
              long-run.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex max-w-[1440px] justify-between items-center flex-col relative gap-12">
        <div className="max-w-[1216px] pt-7 sm:pt-14 w-full flex flex-col justify-center items-center bg-white">
          <div className="flex flex-col px-16 lg:px-32 md:py-20 py-10 w-full md:gap-14 border border-[#E3E2E6]">
            <div className="flex flex-col gap-2">
              <div className="md:text-desktop-heading-5 text-mobile-heading-5 font-bold bg-clip-text text-black text-center">
                Hear from the Winners
              </div>
              <p className="md:text-desktop-body-2 text-mobile-body-2 text-center text-[#69687A]">
                Explore inspiring stories from the HalalChefWorld champions and
                discover what drives their success in the halal industry.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <iframe
                width="901"
                height="506"
                src="https://www.youtube.com/embed/7YDgU3Fac-Y?si=e2tYakoJDFiBasV4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Value Proposition */}
      <section className="w-full flex mt-12 bg-[#FAF9FA] py-6 md:py-10 p-5">
        <div className="max-w-[1216px] w-full flex flex-col gap-10 justify-center items-center mx-auto ">
          <div className="w-full grid lg:grid-cols-2 py-2 lg:px-0 sm:px-20 px-10 gap-6">
            <div className="w-full flex flex-col bg-white py-8 px-6 gap-7">
              <div className="md:text-desktop-heading-5 text-mobile-heading-5 text-center text-black font-bold ">
                Program Outline
              </div>
              <div className="max-w-[425px] w-full flex flex-col gap-7 mx-auto">
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-5 h-5 p-1 bg-primary-cr-600 rounded-full">
                    <Check color="#FFFFFF" className="w-full h-full" />
                  </div>
                  <p className="flex w-full md:text-desktop-body-2 text-mobile-body-2 text-start text-black items-center">
                    Recognising Key Profiles and Drivers in Muslim Travel Market
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-5 h-5 p-1 bg-primary-cr-600 rounded-full">
                    <Check color="#FFFFFF" className="w-full h-full" />
                  </div>
                  <p className="flex w-full md:text-desktop-body-2 text-mobile-body-2 text-start text-black items-center">
                    Appreciating Socio-Economic and Cultural Dimensions of Halal
                    Travel
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-5 h-5 p-1 bg-primary-cr-600 rounded-full">
                    <Check color="#FFFFFF" className="w-full h-full" />
                  </div>
                  <p className="flex w-full md:text-desktop-body-2 text-mobile-body-2 text-start text-black items-center">
                    In-depth Understanding of Faith-based needs of Muslim
                    Travelers
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-5 h-5 p-1 bg-primary-cr-600 rounded-full">
                    <Check color="#FFFFFF" className="w-full h-full" />
                  </div>
                  <p className="flex w-full md:text-desktop-body-2 text-mobile-body-2 text-start text-black items-center">
                    Optimizing Service Touchpoints for Muslim Travelers
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-5 h-5 p-1 bg-primary-cr-600 rounded-full">
                    <Check color="#FFFFFF" className="w-full h-full" />
                  </div>
                  <p className="flex w-full md:text-desktop-body-2 text-mobile-body-2 text-start text-black items-center">
                    Creating Winning Brands for Halal Travel
                  </p>
                </div>
                <div className="inline-flex justify-start items-center gap-6 h-12">
                  <div className="w-5 h-5 p-1 bg-primary-cr-600 rounded-full">
                    <Check color="#FFFFFF" className="w-full h-full" />
                  </div>
                  <p className="flex w-full md:text-desktop-body-2 text-mobile-body-2 text-start text-black items-center">
                    Capturing Emerging Markets and Technologies Including AI
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-7">
              <div className="w-full flex flex-col bg-white py-8 px-6 gap-7">
                <div className="md:text-desktop-heading-5 text-mobile-heading-5 text-center text-black font-bold ">
                  How You Benefit
                </div>
                <div className="max-w-[425px] w-full flex flex-col gap-7 mx-auto">
                  <div className="inline-flex justify-start items-center gap-6 h-12">
                    <div className="w-5 h-5 p-1 bg-primary-cr-600 rounded-full">
                      <Check color="#FFFFFF" className="w-full h-full" />
                    </div>
                    <p className="flex w-full md:text-desktop-body-2 text-mobile-body-2 text-start text-black items-center">
                      Capturing Emerging Markets and Technologies Including AI
                    </p>
                  </div>
                  <div className="inline-flex justify-start items-center gap-6 h-12">
                    <div className="w-5 h-5 p-1 bg-primary-cr-600 rounded-full">
                      <Check color="#FFFFFF" className="w-full h-full" />
                    </div>
                    <p className="flex w-full md:text-desktop-body-2 text-mobile-body-2 text-start text-black items-center">
                      Gain an in-depth understanding on the evolving factors
                      contributing to the rise of market leadership in Halal
                      tourism
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <div className="w-full flex flex-col bg-white py-8 px-6 gap-7">
                  <div className="md:text-desktop-heading-5 text-mobile-heading-5 text-center text-black font-bold ">
                    Participation Profile
                  </div>
                  <p className="flex w-full md:text-desktop-body-2 text-mobile-body-2 text-start text-black items-center px-8">
                    This program is designed for top executives who hold
                    significant responsibility and who want to unlock the
                    potential of the Halal travel market. Typical participants
                    include CEOs, managing directors, C-suite executives, senior
                    managers, executive vice-presidents, board members and
                    chairpersons.
                  </p>
                </div>
                <div className="bg-[#E5E8FF] p-2 flex justify-center items-center gap-2">
                  <MedalIcon fill="#FFB92E" color="#E5E8FF" />
                  <p className="flex md:text-desktop-body-3 text-mobile-body-3 text-start text-black font-bold">
                    This program qualifies for the CR Certificate in Halal
                    Tourism Management
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto gap-2 items-center">
            <div className="md:text-desktop-body-2 text-mobile-body-2 text-center text-[#797979]">
              Kindly click the button below to register your interest
            </div>
            <Dialog modal={false}>
              <form>
                <DialogTrigger asChild>
                  <Button variant="primary" className="px-16 py-6">
                    Enquire Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[75vh] sm:max-w-[425px] md:max-w-[768px] lg:max-w-[850px] overflow-scroll">
                  <DialogHeader className="gap-1 flex-col">
                    <DialogDescription className="text-center">
                      Registration form
                    </DialogDescription>
                    <DialogTitle className="text-center">
                      <ImageWithFallback
                        src="/image/crescentrating-academy/sector-immersion/halalchefworld.webp"
                        width={280}
                        height={144}
                        sizes="100vw"
                        alt="Halal Chef World"
                        className="mx-auto"
                      />
                    </DialogTitle>
                  </DialogHeader>
                  <div className="border border-[#D0D0D7] p-6">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-2">
                      <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <Input
                          className="border border-[#D0D0D7]"
                          id="name-1"
                          name="name"
                          placeholder="Enter your Name"
                          required
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="email-1">Email</Label>
                        <Input
                          className="border border-[#D0D0D7]"
                          id="email-1"
                          name="email"
                          type="email"
                          placeholder="Enter your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 py-2">
                      <div className="grid gap-3">
                        <Label htmlFor="company-1">Company</Label>
                        <Input
                          className="border border-[#D0D0D7]"
                          id="company-1"
                          name="company"
                          placeholder="Enter your Company"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-2">
                      <div className="grid gap-3">
                        <Label htmlFor="location-1">Location</Label>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Button
                              className="w-full"
                              variant="outline"
                              type="button"
                            >
                              {selectedLocation}
                              <DropdownMenuShortcut>
                                <ChevronDownIcon className="w-4 h-4" />
                              </DropdownMenuShortcut>
                            </Button>
                          </DropdownMenuTrigger>
                          <input
                            type="hidden"
                            name="location"
                            value={
                              selectedLocation ===
                              "Select Your Training Location"
                                ? ""
                                : selectedLocation
                            }
                            required
                          />
                          <DropdownMenuContent className="w-[54vh]">
                            {locations.map((loc) => (
                              <DropdownMenuItem
                                key={loc}
                                className="hover:bg-gray-100"
                                onClick={() => setSelectedLocation(loc)}
                              >
                                {loc}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="participant-1">
                          No. of Participant
                        </Label>
                        <Input
                          id="participant-1"
                          name="participants"
                          type="number"
                          min={1}
                          max={20}
                          defaultValue={1}
                        />
                      </div>
                    </div>
                    <Separator
                      className="my-6"
                      style={{ backgroundColor: "#DEDEDE", height: "1px" }}
                    />
                    <div className="grid grid-cols-2 gap-4 py-2">
                      <div className="grid gap-3">
                        <Label htmlFor="date-from">Training Date From</Label>
                        <Popover open={openFrom} onOpenChange={setOpenFrom}>
                          <PopoverTrigger>
                            <Button
                              variant="outline"
                              // id="date-from"
                              className="w-full justify-between font-normal"
                              type="button"
                              onClick={() => setOpenFrom((prev) => !prev)}
                            >
                              {dateFrom
                                ? dateFrom.toLocaleDateString()
                                : "Select date"}
                              <CalendarIcon />
                            </Button>
                          </PopoverTrigger>

                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                            onInteractOutside={(e) => e.preventDefault()} // ✅ Keeps popover clickable
                          >
                            <Calendar
                              className="w-[53vh] h-[50vh] overflow-y-scroll"
                              mode="single"
                              selected={dateFrom}
                              captionLayout="dropdown"
                              disabled={(date) => date < today}
                              onSelect={(selectedDate) => {
                                setDateFrom(selectedDate);
                                if (
                                  dateTo &&
                                  selectedDate &&
                                  dateTo < selectedDate
                                ) {
                                  setDateTo(undefined);
                                }
                                setOpenFrom(false);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="date-to">Training Date To</Label>
                        <Popover open={openTo} onOpenChange={setOpenTo}>
                          <PopoverTrigger>
                            <Button
                              variant="outline"
                              // id="date-to"
                              className="w-full justify-between font-normal"
                              type="button"
                              onClick={() => setOpenTo((prev) => !prev)}
                            >
                              {dateTo
                                ? dateTo.toLocaleDateString()
                                : "Select date"}
                              <CalendarIcon />
                            </Button>
                          </PopoverTrigger>

                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                            onInteractOutside={(e) => e.preventDefault()}
                          >
                            <Calendar
                              className="w-[53vh] h-[50vh] overflow-y-scroll"
                              mode="single"
                              selected={dateTo}
                              captionLayout="dropdown"
                              disabled={(date) => {
                                if (dateFrom) {
                                  return date < dateFrom;
                                }
                                return date < today;
                              }}
                              onSelect={(selectedDate) => {
                                setDateTo(selectedDate);
                                setOpenTo(false);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 py-2">
                      <div className="grid gap-3">
                        <Label htmlFor="proposed-title">
                          Proposed Training Program Title
                        </Label>
                        <textarea
                          className="h-16 rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="proposed-title"
                          name="proposedTitle"
                          placeholder="Enter your Proposed Training Program Title"
                          rows={2}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="target-participants">
                          Target Participants
                        </Label>
                        <textarea
                          className="h-16 rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="target-participants"
                          name="targetParticipants"
                          placeholder="Describe your Target Participants"
                          rows={6}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="training-objectives">
                          Training Objectives
                        </Label>
                        <textarea
                          className="h-16 rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="training-objectives"
                          name="trainingObjectives"
                          placeholder="Enter your Training Objectives here"
                          rows={2}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="training-activities">
                          Training Activities & Requirements
                        </Label>
                        <textarea
                          className="h-16 rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          id="training-activities"
                          name="trainingActivities"
                          placeholder="Enter your Training Activities & Requirements"
                          rows={2}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 py-2">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="terms-conditions"
                          name="termsConditions"
                          value="terms-conditions"
                        />
                        <Label htmlFor="terms-conditions">
                          I have read and agree to CrescentRating Privacy Policy
                          & Terms and Conditions
                        </Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="subscribes"
                          name="subscribes"
                          value="subscribes"
                        />
                        <Label htmlFor="subscribes">
                          I hereby give consent to CrescentRating to contact me
                          for future marketing purposes.
                        </Label>
                      </div>
                    </div>

                    <DialogFooter className="flex w-[100vh] pt-3">
                      <Button
                        className="w-full bg-primary-cr-500"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </DialogFooter>
                  </div>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </div>
      </section>
      <section className="my-7">
        <div className="w-full flex justify-center items-center gap-7">
          <iframe
            width="512"
            height="288"
            src="https://www.youtube.com/embed/7YDgU3Fac-Y?si=e2tYakoJDFiBasV4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="512"
            height="288"
            src="https://www.youtube.com/embed/7YDgU3Fac-Y?si=e2tYakoJDFiBasV4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="max-w-[1440px] lg:px-28 px-14 lg:py-20 py-9 w-full flex flex-col justify-center items-center gap-4">
        <div>
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center w-full md:max-w-[628px]">
            Training Faculty
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-full md:max-w-[628px]">
            Meet the experts leading the way in halal travel and marketing.
          </p>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-9 grayscale">
            {crAcademySectorImmersionProgramsCardProfile.map((data, index) => (
              <CardProfile
                key={index}
                title={data.title}
                description={data.description}
                imageUrl={data.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] lg:px-28 px-14 lg:py-20 py-9 w-full flex flex-col justify-center items-center gap-8">
        <div className="w-full flex flex-col justify-center items-center">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black w-full md:max-w-[628px] text-center">
            Testimonials
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-gray-500 w-full md:max-w-[628px]">
            See what our clients have said about our programs
          </p>
        </div>
        <div className="flex flex-col w-full items-center justify-between">
          <div className="max-w-[95%] w-full h-[520px] flex flex-col justify-center items-center gap-1 z-0 bg-gray-100 rounded-lg shadow-md">
            {/* Background goes here! */}
          </div>
          <div className="mt-10 mb-10 flex justify-center items-center w-full z-10 absolute">
            <div className="mt-10 flex flex-row justify-center items-start w-full gap-6 overflow-visible">
              <Carousel
                className="w-full flex flex-col lg:gap-8 gap-2 overflow-visible justify-stretch items-center"
                showDots={false}
                slideCount={3}
              >
                <CarouselContent className="w-full flex flex-row gap-2 items-center justify-stretch overflow-visible">
                  {crAcademyTestimonials.map((blog, index) => (
                    <CarouselItemTestimonials
                      key={index}
                      index={index}
                      className={
                        index === 0 ? "lg:ml-2 md:ml-6  content-stretch" : ""
                      }
                      visibleSlides={
                        typeof window !== "undefined" && window.innerWidth < 640
                          ? 1
                          : 3
                      }
                    >
                      <CardTestimonials
                        id={blog.id}
                        testimonials={blog.testimonials}
                        person={blog.person}
                        event={blog.event}
                        company={blog.company}
                        imageUrl={blog.imageUrl}
                      />
                    </CarouselItemTestimonials>
                  ))}
                </CarouselContent>
                <CarouselPreviousCustom />
                <CarouselNextCustom />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] px-6 lg:px-32 w-full flex flex-col md:flex-row gap-12 justify-start items-start">
        <div className="w-full flex flex-col gap-1 justify-start items-start">
          <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left">
            Frequently Asked Questions
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-left text-gray-500">
            Explore Our Training and Certification Services at Crescent Rating
            Academy
          </p>
        </div>
        <div className="w-full flex md:flex-row flex-col justify-center items-start md:gap-24 gap-12 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                When are the various training programs available?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                <p className="text-mobile-body-2 sm:text-desktop-body-2">
                  Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                  faucibus id urna quis nisl egestas. Ultrices aenean metus duis
                  mi nisi viverra nulla diam.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                What are the various training modes available?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                <p className="text-mobile-body-2 sm:text-desktop-body-2">
                  Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                  faucibus id urna quis nisl egestas. Ultrices aenean metus duis
                  mi nisi viverra nulla diam.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                Do all programs come with certifications?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                <p className="text-mobile-body-2 sm:text-desktop-body-2">
                  Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                  faucibus id urna quis nisl egestas. Ultrices aenean metus duis
                  mi nisi viverra nulla diam.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                I am a professional aspiring to build my skills and expertise in
                the travel space. Which training program should I register?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                <p className="text-mobile-body-2 sm:text-desktop-body-2">
                  Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                  faucibus id urna quis nisl egestas. Ultrices aenean metus duis
                  mi nisi viverra nulla diam.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                Is the Sector Immersion program similar to other customer
                service courses?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                <p className="text-mobile-body-2 sm:text-desktop-body-2">
                  Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                  faucibus id urna quis nisl egestas. Ultrices aenean metus duis
                  mi nisi viverra nulla diam.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                I am a senior manager. Can I also take the Market Readiness and
                Sector Immersion Programs?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                <p className="text-mobile-body-2 sm:text-desktop-body-2">
                  Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                  faucibus id urna quis nisl egestas. Ultrices aenean metus duis
                  mi nisi viverra nulla diam.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="no-underline text-left sm:text-desktop-body-1 text-mobile-body-1">
                I require customized training for my organization. Which
                training program should I register?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 justify-start items-start">
                <p className="text-mobile-body-2 sm:text-desktop-body-2">
                  Lorem ipsum dolor sit amet consectetur. Risus vitae blandit
                  faucibus id urna quis nisl egestas. Ultrices aenean metus duis
                  mi nisi viverra nulla diam.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

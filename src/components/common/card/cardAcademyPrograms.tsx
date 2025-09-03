"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
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
import { truncate } from "@/utils";

import { Button, ImageWithFallback } from "..";

interface cardAcademyProgramsProps {
  key: number;
  program: string;
  description: string;
  market: string;
  role?: string;
  pricing?: string;
  imageUrl: string;
  buttonType?: "outline" | "solid";
  customImgHeight?: string;
  downloadWithDialog?: boolean;
  buttonContent?: React.ReactNode;
  badgeLabel?: string; // e.g. "JPNN"
  badgeDate?: string; // e.g. "Jan 2025"
  imageBorder?: true | false; // e.g. "rounded-lg"
  imgType?: "1" | "2"; // e.g. "1" for image, "2" for video
}

export default function cardAcademyPrograms({
  key,
  program,
  description,
  market,
  role,
  pricing,
  imageUrl,
  imageBorder = true,
  imgType = "1",
}: cardAcademyProgramsProps) {
  let truncateddescription;

  const today = new Date();

  const [selectedLocation, setSelectedLocation] = useState<string>(
    "Select Your Training Location"
  );
  const locations = ["Singapore", "Malaysia", "Indonesia"];
  if (description) {
    truncateddescription = truncate(description, 100);
  }

  const [openFrom, setOpenFrom] = React.useState(false);
  const [openTo, setOpenTo] = React.useState(false);

  const [dateFrom, setDateFrom] = React.useState<Date | undefined>(undefined);
  const [dateTo, setDateTo] = React.useState<Date | undefined>(undefined);

  return (
    <div
      className="lg:w-full w-fit group flex flex-col self-stretch"
      rel="noopener noreferrer"
    >
      {/* Image container */}
      <div
        className={clsx(
          "h-full flex overflow-hidden relative border-2 border-gray-500/20 content-stretch flex-wrap p-1.5 lg:max-w-[839px] md:max-w-[593px] max-w-fit",
          imageBorder && "border-b-2 border-gray-500/20"
        )}
        style={{
          background: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //create black overlay
          // filter: "grayscale(40%)",
        }}
      >
        <div className="p-1.5 flex flex-col flex-wrap w-full text-black justify-between self-stretch items-center min-h-[350px] md:gap-6">
          <div className="w-full inline-flex flex-col justify-center items-center gap-2">
            <h3 className="text-zinc-900 lg:text-desktop-title-2 text-mobile-title-2 font-bold leading-tight">
              {program}
            </h3>
            <div className="flex justify-center items-center w-36 h-36 rounded-full">
              <ImageWithFallback
                width={144}
                height={144}
                sizes="100vw"
                className={clsx("w-full h-full object-cover rounded-full")}
                priority={false}
                src={imageUrl ?? "/images/placeholder.png"}
                alt={market ?? "Program Image"}
              />
            </div>
            <h3 className="text-zinc-500 lg:text-desktop-body-2 text-mobile-body-2 font-regular">
              {market}
            </h3>
            {/* <div className="w-full h-full inline-flex flex-col gap-2 "> */}
            <div className="self-stretch text-center justify-start text-zinc-900 md:pt-6 lg:text-desktop-body-2 text-mobile-body-2 font-normal leading-loose">
              {truncate(description, 500)}
            </div>
            {/* </div> */}
          </div>
          <div className="w-full inline-flex flex-col justify-between items-center gap-2">
            {role || pricing ? (
              <div className="inline-flex flex-col justify-start items-center gap-3">
                {role && (
                  <div className="self-stretch text-center justify-start">
                    <div>
                      <p className="lg:text-desktop-body-2 text-mobile-body-2 font-semibold text-center line-clamp-2">
                        One day training and certification for:
                      </p>
                      <p className="line-clamp-2">
                        {role.split(",").map((item, index) => (
                          <span
                            key={index}
                            className="text-blue-950 font-semibold"
                          >
                            <span className="my-1 px-2 py-1 bg-navy-blue-50 inline-flex justify-start items-center gap-2">
                              <span className="lg:text-desktop-label-s text-mobile-label-s justify-start text-[#0A59FF] font-semibold leading-none">
                                {item.trim()}
                              </span>
                            </span>
                            {index < role.split(",").length - 1 && " "}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                )}
                <div className="self-stretch text-center justify-star lg:text-desktop-caption-l text-mobile-caption-l font-normal leading-snug">
                  {pricing && (
                    <div>
                      <p className="lg:text-desktop-body-2 text-mobile-body-2 font-semibold text-center line-clamp-2">
                        Pricing:
                      </p>
                      <div className="mt-1 mb-4 px-2 py-1 bg-[#17B26A] inline-flex justify-start items-center gap-2">
                        <div className="justify-start text-white lg:text-desktop-label-s text-mobile-label-s font-semibold leading-none">
                          {pricing}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="w-max inline-flex justify-center items-center">
              <Dialog modal={false}>
                <form>
                  <DialogTrigger asChild>
                    {program === "HalalChefWorld Training Program" ? (
                      <a href="/services/crescentrating-academy/halalchefworld" target="_self" rel="noopener noreferrer">
                        <Button
                          className={clsx(
                            "w-fit inline-block p-3 text-white text-center font-semibold bg-primary-cr-600 hover:bg-white hover:text-primary-cr-600 border-gray-500/20 rounded-none"
                          )}
                        >
                          I'm Interested
                        </Button>
                      </a>
                    ) : (
                      <Button
                        className={clsx(
                          "w-fit inline-block p-3 text-white text-center font-semibold bg-primary-cr-600 hover:bg-white hover:text-primary-cr-600 border-gray-500/20 rounded-none"
                        )}
                      >
                        I'm Interested
                      </Button>
                    )}
                   
                  </DialogTrigger>
                  {program === "Customer Service Training" && (
                    <DialogContent className="max-h-[75vh] sm:max-w-[425px] md:max-w-[768px] lg:max-w-[850px] overflow-scroll">
                      <DialogHeader className="gap-1 flex-col">
                        <DialogDescription className="text-center">
                          Registration form
                        </DialogDescription>
                        <DialogTitle className="text-center">
                          Customer Service Training
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
                        <div className="grid gap-4 py-2">
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="hotel-staff"
                              name="trainingOptions"
                              value="hotel-staff"
                            />
                            <Label htmlFor="hotel-staff">
                              1-Day Market Awareness + Customer Service Training
                              for Hotel Staff
                            </Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="restaurant-staff"
                              name="trainingOptions"
                              value="restaurant-staff"
                            />
                            <Label htmlFor="restaurant-staff">
                              1-Day Market Awareness + Customer Service Training
                              for Restaurant Staff
                            </Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="tours-operators-agents-staff"
                              name="trainingOptions"
                              value="tours-operators-agents-staff"
                            />
                            <Label htmlFor="tours-operators-agents-staff">
                              1-Day Market Awareness + Customer Service Training
                              for Tours Operators & Agents Staff
                            </Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="attractions"
                              name="trainingOptions"
                              value="attractions"
                            />
                            <Label htmlFor="attractions">
                              1-Day Market Awareness + Customer Service Training
                              for Attractions
                            </Label>
                          </div>
                        </div>
                        <Separator
                          className="my-6"
                          style={{ backgroundColor: "#DEDEDE", height: "1px" }}
                        />
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-2">
                          <div className="grid gap-3">
                            <Label htmlFor="date-from">
                              Training Date From
                            </Label>
                            <Popover open={openFrom} onOpenChange={setOpenFrom}>
                              <PopoverTrigger>
                                <Button
                                  variant="outline"
                                  id="date-from"
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
                                  id="date-to"
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
                            <Label htmlFor="additional-info">
                              Additional Information
                            </Label>
                            <textarea
                              className="h-16 rounded border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              id="additional-info"
                              name="additionalInfo"
                              placeholder="Enter other information here"
                              rows={6}
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
                              I have read and agree to CrescentRating Privacy
                              Policy & Terms and Conditions
                            </Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="subscribes"
                              name="subscribes"
                              value="subscribes"
                            />
                            <Label htmlFor="subscribes">
                              I hereby give consent to CrescentRating to contact
                              me for future marketing purposes.
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
                  )}
                  {program === "Customized Training Program" && (
                    <DialogContent className="max-h-[75vh] sm:max-w-[425px] md:max-w-[768px] lg:max-w-[850px] overflow-scroll">
                      <DialogHeader className="gap-1 flex-col">
                        <DialogDescription className="text-center">
                          Registration form
                        </DialogDescription>
                        <DialogTitle className="text-center">
                          Customized Training Program
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
                            <Label htmlFor="date-from">
                              Training Date From
                            </Label>
                            <Popover open={openFrom} onOpenChange={setOpenFrom}>
                              <PopoverTrigger>
                                <Button
                                  variant="outline"
                                  id="date-from"
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
                                  id="date-to"
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
                              I have read and agree to CrescentRating Privacy
                              Policy & Terms and Conditions
                            </Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="subscribes"
                              name="subscribes"
                              value="subscribes"
                            />
                            <Label htmlFor="subscribes">
                              I hereby give consent to CrescentRating to contact
                              me for future marketing purposes.
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
                  )}
                  
                  {/* {program === "HalalChefWorld Training Program" && (
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
                            <Label htmlFor="date-from">
                              Training Date From
                            </Label>
                            <Popover open={openFrom} onOpenChange={setOpenFrom}>
                              <PopoverTrigger>
                                <Button
                                  variant="outline"
                                  id="date-from"
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
                                  id="date-to"
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
                              I have read and agree to CrescentRating Privacy
                              Policy & Terms and Conditions
                            </Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="subscribes"
                              name="subscribes"
                              value="subscribes"
                            />
                            <Label htmlFor="subscribes">
                              I hereby give consent to CrescentRating to contact
                              me for future marketing purposes.
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
                  )} */}
                </form>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";

import { Button, ImageWithFallback, PageHero } from "@/components/common";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, ChevronDownIcon } from "lucide-react";

export default function MuslimTravelIntentTrackerPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [selectedMonth, setSelectedMonth] = useState<string>("January");
  const years = [2025, 2024, 2023, 2022, 2021, 2020];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <PageHero
        title="Muslim Travel Intent Tracker"
        description="A monthly metric that measures and tracks Muslim travelers' intent, helping industry stakeholders anticipate trends and opportunities."
        subtitle="Our Service"
        backgroundImage="/image/rating-accreditation/main.webp"
        alignment="left"
        variant="image"
        useBreadCrumbLinks={false}
      />
      <div className="w-full max-w-[1216px] flex flex-col gap-16 mt-16">
        <section className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16 lg:gap-24 items-center px-8">
          <ImageWithFallback
            src="/image/our-services/mtit.png"
            alt="Muslim Travel Intent Tracker Logo"
            sizes="100vw"
            width={300}
            height={250}
            className="object-cover"
          />
          <div className="flex flex-col w-[70%] gap-4">
            <h1 className="text-mobile-heading-3 lg:text-desktop-heading-3 font-bold">
              About Muslim Travel Intent Tracker (MTIT)
            </h1>
            <p className="text-mobile-body-2 lg:text-desktop-body-2">
              The Muslim Travel Intent Tracker (MTIT) is a metric designed to
              gauge and monitor the travel intent of Muslim travelers over time.
              By considering various timeframes, from immediate travel plans to
              those planned over a year in advance, the MTIT will capture the
              dynamic and evolving preferences of the Muslim travel market. The
              MTIT will be tracked and published monthly, ensuring industry
              stakeholders stay informed about current trends, anticipate future
              demand, and identify potential growth opportunities in the Muslim
              travel market. The MTIT score represents a quantitative measure of
              travel intent among Muslim consumers. It indicates the level of
              interest and willingness among respondents to engage in travel
              activities within the next six months. A higher MTIT score
              suggests a stronger inclination and readiness to travel, while a
              lower score indicates a comparatively lower level of travel
              intent.
            </p>
          </div>
        </section>
        <section className="flex flex-col py-16 items-center gap-8 bg-gradient-to-r from-[#F1F3FF] to-[#CED2FF] px-8">
          {/* Top Right Circle */}
          <div className="absolute w-48 h-48 rounded-full bg-[#EDF6FF] top-[-60px] right-[-60px]"></div>

          {/* Bottom Left Circle */}
          <div className="absolute w-64 h-64 rounded-full bg-[#0F3399] bottom-[-80px] left-[-80px] opacity-80"></div>

          <div className="flex gap-8">
            <ImageWithFallback
              src="/image/our-services/mtit.png"
              alt="Muslim Travel Intent Tracker Logo"
              width={50}
              height={10}
              className="object-cover"
            />
            <ImageWithFallback
              src="/image/our-services/cr_logo_color_transparent.png"
              alt="CrescentRating Academy Logo"
              width={150}
              height={10}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 items-center text-center w-full">
            <p className="text-mobile-body-2 lg:text-desktop-body-2">
              Latest Month's MTIT Score
            </p>

            <h2 className="text-mobile-heading-3 lg:text-desktop-heading-3 font-bold">
              October 2024
            </h2>

            <div className="bg-primary-cr-500 w-fit px-4 py-2">
              <h1 className="text-8xl font-bold text-white text-center">
                79,94
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-mobile-body-2 lg:text-desktop-body-2 font-semibold">
              Select an Area
            </p>
            <div className="flex flex-row gap-2">
              <Button variant="secondary">MTIT Score Trends</Button>
              <Button variant="secondary">Travel Intent</Button>
              <Button variant="secondary">Top 3 Destinations</Button>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-8 md:gap-16 lg:gap-24 items-center px-8 mb-16">
          <div className="flex flex-col lg:flex-row w-full justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-mobile-heading-3 lg:text-desktop-heading-3 font-bold">
                MTIT Insights
              </h1>
              <p className="text-mobile-body-2 lg:text-desktop-body-2">
                Explore Monthly Insights from the Muslim Travel Intent Tracker
                (MTIT)
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-end">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full lg:w-[200px]">
                  <Button
                    className="w-full py-4 rounded-md"
                    variant="outline"
                    type="button"
                  >
                    <Calendar className="w-4 h-4" />
                    {selectedYear}
                    <DropdownMenuShortcut>
                      <ChevronDownIcon className="w-4 h-4" />
                    </DropdownMenuShortcut>
                  </Button>
                </DropdownMenuTrigger>
                <input
                  type="hidden"
                  name="year"
                  value={selectedYear}
                  required
                />
                <DropdownMenuContent className="w-[54vh]">
                  {years.map((year) => (
                    <DropdownMenuItem
                      key={year}
                      className="hover:bg-gray-100"
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full lg:w-[200px]">
                  <Button
                    className="w-full py-4 rounded-md"
                    variant="outline"
                    type="button"
                  >
                    <Calendar className="w-4 h-4" />
                    {selectedMonth}
                    <DropdownMenuShortcut>
                      <ChevronDownIcon className="w-4 h-4" />
                    </DropdownMenuShortcut>
                  </Button>
                </DropdownMenuTrigger>
                <input
                  type="hidden"
                  name="month"
                  value={selectedMonth}
                  required
                />
                <DropdownMenuContent className="w-[54vh]">
                  {months.map((month) => (
                    <DropdownMenuItem
                      key={month}
                      className="hover:bg-gray-100"
                      onClick={() => setSelectedMonth(month)}
                    >
                      {month}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="primary" className="w-full lg:w-fit py-4 lg:px-6">
                Search
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4">
            <h2 className="text-mobile-heading-6 lg:text-desktop-heading-6 font-bold">
              Muslim Travel Intent Tracker (MTIT) - December 2024
            </h2>

            <p className="text-mobile-body-2 lg:text-desktop-body-2">
              The MTIT score for December 2024 stands at 81.8, marking a
              noticeable increase from November's 78.3 as travel intent rises in
              tandem with the peak holiday season. This uptick reflects a surge
              in consumer behavior driven by the festive spirit, family
              vacations, and year-end travel opportunities. December's score is
              one of the highest recorded in 2024, highlighting the growing
              momentum of Muslim-friendly travel options during this period. The
              increase also underscores strong demand for both domestic and
              international trips as travelers capitalize on school holidays,
              winter breaks, and religious or cultural festivities to reconnect
              with loved ones and explore destinations.
            </p>
            <p className="text-mobile-body-2 lg:text-desktop-body-2 font-bold">
              Strategic Takeaways for "This Month" Travel:
            </p>
            <ul className="list-disc pl-8">
              <li className="text-mobile-body-2 lg:text-desktop-body-2">
                Emphasize family-friendly destinations with tailored halal
                amenities and group packages to attract holiday travelers.
              </li>
              <li className="text-mobile-body-2 lg:text-desktop-body-2">
                Highlight winter destinations offering unique experiences such
                as festive markets, snow activities, and cultural exploration.
              </li>
              <li className="text-mobile-body-2 lg:text-desktop-body-2">
                Promote last-minute travel deals and year-end discounts to
                capture travelers planning spontaneous vacations.
              </li>
              <li className="text-mobile-body-2 lg:text-desktop-body-2">
                Showcase religious tourism opportunities, such as Umrah, which
                often sees higher demand during the cooler winter months, making
                it a favorable time for pilgrimage.
              </li>
              <li className="text-mobile-body-2 lg:text-desktop-body-2">
                Position December as the perfect time to enjoy extended
                vacations, blending cultural, recreational, and faith-based
                travel experiences.
              </li>
            </ul>
            <p className="text-mobile-body-2 lg:text-desktop-body-2 font-bold">
              Strategic Takeaways for Traveling in the Next 1-3 Months:
            </p>
            <ul className="list-disc pl-8">
              <li className="text-mobile-body-2 lg:text-desktop-body-2">
                Promote packages and experiences aligned with early Ramadan
                travel and spring vacation trends by highlighting destinations
                with strong Muslim-friendly offerings and cultural immersion.
              </li>
              <li className="text-mobile-body-2 lg:text-desktop-body-2">
                Showcase affordable and off-peak travel deals, emphasizing
                destinations with mild climates and budget-friendly options,
                leveraging off-season travel appeal.
              </li>
              <li className="text-mobile-body-2 lg:text-desktop-body-2">
                Address the many festivals, events, and cultural celebrations
                during spring and early summer in many destinations as travelers
                interested in attending these events may plan trips accordingly.
              </li>
            </ul>
            <p className="text-mobile-body-2 lg:text-desktop-body-2 font-bold">
              Strategic Takeaways for Traveling in the Next 4-6 Months:
            </p>
            <ul className="list-disc pl-8">
              <li className="text-mobile-body-2 lg:text-desktop-body-2">
                Focus on packages and experiences tailored for Ramadan and
                Eid-ul-Fitr celebrations and promotions, such as trips to
                Muslim-friendly destinations offering halal food, prayer
                facilities, and cultural experiences.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}


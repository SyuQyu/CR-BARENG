"use client";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Button } from "@/components/common";
import BreadCrumb from "@/components/common/breadcrumb/breadcrumb";

export default function GlossaryCategories() {
  const params = useParams<{ id: string }>();
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="mt-16 lg:px-32 sm:px-16 px-8 w-full flex flex-col gap-24 justify-center items-center">
        <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
          <div className="w-full py-4 flex flex-col justify-start items-start gap-4">
            <BreadCrumb />
            <div className="flex w-full sm:flex-row flex-col sm:gap-2 gap-5 justify-between sm:items-center mt-16">
              <div className="w-auto flex flex-col gap-1 justify-start items-start">
                <p className="sm:text-desktop-body-2 text-mobile-body-3 text-primary-cr-500">
                  Internsip
                </p>
                <p className="sm:text-desktop-heading-1 text-mobile-heading-1 font-bold">
                  Graphic Designer Intern
                </p>
                <span className="mt-3 bg-blue-100 text-blue-700 font-semibold text-desktop-label-s px-2 py-1 rounded flex flex-row gap-1">
                  <MapPin className="size-4 mt-[1px]" />
                  Remote
                </span>
              </div>
              <Link href={`/about-us/careers/form/${params.id}`}>
                <Button className="px-12 py-6">
                  Apply Now
                </Button>
              </Link>
            </div>
            <p className="text-neutral-500 sm:text-desktop-body-2 text-mobile-body-2 md:w-[70%] w-full md:mt-12 mt-8">
              Lorem ipsum dolor sit amet consectetur. Molestie interdum tellus
              enim quis feugiat. Nisl et placerat turpis tortor nec. Egestas
              magnis donec varius nunc purus rutrum rutrum nisi. Eget aliquet
              est pharetra bibendum. Cras fringilla consectetur mauris dui
              mollis sapien turpis. Diam sit pellentesque massa duis placerat
              duis. Lorem ipsum dolor sit amet consectetur. Molestie interdum
              tellus enim quis feugiat. Nisl et placerat turpis tortor nec.
              Egestas magnis donec varius nunc purus rutrum rutrum nisi. Eget
              aliquet est pharetra bibendum. Cras fringilla consectetur mauris
              dui mollis sapien turpis. Diam sit pellentesque massa duis
              placerat duis. Lorem ipsum dolor sit amet consectetur. Molestie
              interdum tellus enim quis feugiat. Nisl et placerat turpis tortor
              nec. Egestas magnis donec varius nunc purus rutrum rutrum nisi.
              Eget aliquet est pharetra bibendum. Cras fringilla consectetur
              mauris dui mollis sapien turpis. Diam sit pellentesque massa duis
              placerat duis.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

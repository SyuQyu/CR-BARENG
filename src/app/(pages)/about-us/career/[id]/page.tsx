"use client"
import { Button } from "@/components/common";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function GlossaryCategories() {
    const params = useParams<{ id: string }>();
    return (
        <div className="w-full flex flex-col justify-center items-center ">
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <div
                        className="w-full py-4 flex flex-col justify-start items-start gap-4"
                    >
                        <div className="flex w-full sm:flex-row flex-col sm:gap-2 gap-5 justify-between sm:items-center">
                            <div className="w-auto flex flex-col gap-1 justify-start items-start">
                                <p className="sm:text-desktop-body-2 text-mobile-body-3 text-primary-cr-500">Internsip</p>
                                <p className="sm:text-desktop-heading-1 text-mobile-heading-1 font-bold">Graphic Designer Intern</p>
                                <span className="mt-3 bg-blue-100 text-blue-700 font-semibold text-desktop-label-s px-2 py-1 rounded flex flex-row gap-1"><MapPin className="size-4 mt-[1px]" />Remote</span>
                            </div>
                            <Link href={`/about-us/career/form/${params.id}`}>
                                <Button className="lg:text-mobile-body-1 text-mobile-body-3 flex flex-row justify-center items-center gap-2 bg-primary-cr-500 text-white border p-3 sm:p-4">
                                    Apply Now
                                </Button>
                            </Link>
                        </div>
                        <p className="text-neutral-500 sm:text-desktop-body-2 text-mobile-body-2 md:w-[70%] w-full md:mt-12 mt-8">
                            Lorem ipsum dolor sit amet consectetur. Molestie interdum tellus enim quis feugiat. Nisl et placerat turpis tortor nec. Egestas magnis donec varius nunc purus rutrum rutrum nisi. Eget aliquet est pharetra bibendum. Cras fringilla consectetur mauris dui mollis sapien turpis. Diam sit pellentesque massa duis placerat duis.
                            Lorem ipsum dolor sit amet consectetur. Molestie interdum tellus enim quis feugiat. Nisl et placerat turpis tortor nec. Egestas magnis donec varius nunc purus rutrum rutrum nisi. Eget aliquet est pharetra bibendum. Cras fringilla consectetur mauris dui mollis sapien turpis. Diam sit pellentesque massa duis placerat duis.
                            Lorem ipsum dolor sit amet consectetur. Molestie interdum tellus enim quis feugiat. Nisl et placerat turpis tortor nec. Egestas magnis donec varius nunc purus rutrum rutrum nisi. Eget aliquet est pharetra bibendum. Cras fringilla consectetur mauris dui mollis sapien turpis. Diam sit pellentesque massa duis placerat duis.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

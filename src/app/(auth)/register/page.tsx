'use client';
import { Button, ImageWithFallback, Input } from "@/components/common";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
export default function Register() {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-white">
            <div className='my-7 sm:my-14 w-full flex flex-col gap-24 justify-center items-center'>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center ">
                    <div className="w-full flex md:flex-row flex-col justify-between items-center gap-6 md:p-5 bg-[#FAF9FA] rounded-lg">
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full md:max-h-[500px] sm:max-h-[300px] max-h-[200px] lg:max-h-[800px] object-cover h-full md:rounded-lg rounded-t-lg"
                            src="/image/auth/regis.jpg" alt="logo-hit" />
                        <div className="w-full flex flex-col justify-start items-start lg:p-10 md:p-6 md:px-0 px-8 md:pb-0 pb-5">
                            <p className="md:text-desktop-heading-5 text-desktop-heading-6 font-semibold">Register your account</p>
                            <p className="md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Create an account to get started.</p>
                            <div className="w-full mt-6 gap-3 flex flex-col">
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <Input label="Full Name" placeholder="Enter your full name" className="w-full" labelStyle={"font-bold"} />
                                    <Input label="Username" placeholder="Enter your username" className="w-full" labelStyle={"font-bold"} />
                                </div>
                                <Input label="Email" placeholder="Enter your email" className="w-full" labelStyle={"font-bold"} />
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <Input label="Password" placeholder="Enter your password" type="password" className="w-full" labelStyle={"font-bold"} />
                                    <Input label="Confirm Password" placeholder="Confirm your password" type="password" className="w-full" labelStyle={"font-bold"} />
                                </div>
                                <div className="w-full flex flex-col justify-start items-start gap-1">
                                    <p className="md:text-desktop-label-l text-desktop-label-s font-bold">Select Business Type</p>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Country" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-none">
                                            <SelectItem value="ind">Indonesia</SelectItem>
                                            <SelectItem value="sg">Singapore</SelectItem>
                                            <SelectItem value="malay
                                                    ">Malaysia</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                                <Button className="w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px]">
                                    Sign Up
                                </Button>
                                <p className="md:text-desktop-body-2 text-mobile-body-2 font-semibold text-center">
                                    Already have an account?{" "}
                                    <Link href="/login" className="text-primary-cr-500 font-semibold hover:underline">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
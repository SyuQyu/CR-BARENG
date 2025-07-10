'use client';
import { Button, ImageWithFallback, Input } from "@/components/common";
import Link from "next/link";
export default function Login() {
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
                            src="/image/auth/login.jpg" alt="logo-hit" />
                        <div className="w-full flex flex-col justify-start items-start lg:p-10 md:p-6 md:px-0 px-8 md:pb-0 pb-5">
                            <p className="md:text-desktop-heading-5 text-desktop-heading-6 font-semibold">Login to your account</p>
                            <p className="md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Welcome back. Enter your credentials to access your account.</p>
                            <div className="w-full mt-6 gap-3 flex flex-col">
                                <Input label="Email" placeholder="Enter your email" className="w-full" labelStyle={"font-bold"} />
                                <Input label="Password" placeholder="Enter your password" type="password" className="w-full" labelStyle={"font-bold"} />
                                <Link href="/forgot-password" className="text-primary-cr-700 md:text-desktop-body-2 text-mobile-body-2 font-semibold hover:underline">
                                    Forgot your password?
                                </Link>
                                <Button className="w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px]">
                                    Login
                                </Button>
                                <p className="md:text-desktop-body-2 text-mobile-body-2 font-semibold text-center">
                                    Don&apos;t have an account?{" "}
                                    <Link href="/register" className="text-primary-cr-500 font-semibold hover:underline">
                                        Sign Up
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
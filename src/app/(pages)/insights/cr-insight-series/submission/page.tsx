import { Button, Input } from "@/components/common";

export default function Submission() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
                style={{ backgroundImage: "url('/image/halal-muslim-travel-market-reports/hero.webp')", backgroundSize: "cover" }}
            >
                <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                    <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10">
                        <p className="text-white text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                            CrescentRating Insight Series
                        </p>
                        <h1 className="text-mobile-heading-3 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text text-white relative z-20 text-left w-full sm:w-[70%]">
                            CrescentRating Insights Series Submission
                        </h1>
                    </div>
                </div>
            </section>
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="lg:text-desktop-heading-5 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Submit Your Publication to CrescentRating Insight Series </p>
                    <p className="lg:text-desktop-body-1 text-mobile-body-2 text-center w-[80%]">Fill out form below to submit your report. Our team will review and guide you through the publishing process to help your insights reach a global audience.</p>
                    <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
                        <div className="w-full flex flex-col justify-center items-center bg-neutral-100 p-8 gap-8">
                            <div className="w-full flex sm:flex-row flex-col justify-between items-center gap-8">
                                <Input label="First Name" placeholder="Input your first name" className="w-full" />
                                <Input label="Last Name" placeholder="Input last first name" className="w-full" />
                            </div>
                            <Input label="University" placeholder="Input your university" className="w-full" />
                            <Input label="Country" placeholder="Input your country" className="w-full" />
                            <Input label="Email" placeholder="Input your email" className="w-full" />
                            <Input label="Research Topic" placeholder="Input your topic" className="w-full" />
                            <Input multiline={true} label="Abstract of the Research" placeholder="Input your abstract" className="w-full" />
                            <Button className=" !text-white bg-blue-600 sm:p-4 p-3 w-full lg:text-mobile-body-1 text-mobile-body-3 hover:bg-blue-800">Submit</Button>
                        </div>
                    </div>
                </div>
                <hr className="h-.5 w-[40%] bg-gray-200" />
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="lg:text-desktop-heading-5 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">Have a Question?</p>
                    <p className="lg:text-desktop-body-1 text-mobile-body-2 text-center w-[80%] text-neutral-500">If you have any question about the submission process, feel free to contact us.</p>
                    <p className="lg:text-desktop-body-1 text-mobile-body-2 text-center w-[80%] text-neutral-500">Our team is here to help!</p>
                    <div className="mt-5 flex flex-col justify-center items-center w-full gap-6">
                        <Button className="gap-2 bg-white border sm:p-7 p-5 w-[200px] !text-blue-600 lg:text-mobile-body-1 text-mobile-body-3 hover:border-2">Contact Us</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
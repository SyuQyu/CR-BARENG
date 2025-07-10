import { Button, Input } from "@/components/common";

export default function Submission() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center">
                <div className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <p className="lg:text-desktop-heading-5 text-mobile-heading-4 font-bold mb-4 text-center text-black">
                        Job Application Submission -<br />Graphic Designer Intern
                    </p>
                    <p className="lg:text-desktop-body-1 text-mobile-body-2 text-center w-[80%] text-neutral-500">
                        Fill out the form below to submit your application.
                    </p>
                    <div className="mt-10 flex flex-col justify-center items-center w-full gap-6">
                        <div className="w-full flex flex-col justify-center items-center bg-neutral-100 p-8 gap-8">
                            <Input label="Name" placeholder="Your name" className="w-full" />
                            <Input label="Email" placeholder="Your email" className="w-full" />
                            <Input label="CV/Resume" placeholder="Your CV/Resume link" className="w-full" />
                            <Input label="LinkedIn Profile" placeholder="Your LinkedIn profile" className="w-full" />
                            <Input multiline={true} label="Why Do You Apply for This Position?" placeholder="Input your answer" className="w-full" />
                            <Button className="!text-white bg-blue-600 sm:p-4 p-3 w-full lg:text-mobile-body-1 text-mobile-body-3 hover:bg-blue-800">
                                Submit Job Application
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

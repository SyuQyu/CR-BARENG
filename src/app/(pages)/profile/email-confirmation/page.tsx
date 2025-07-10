import { Button } from "@/components/common";

export default function EmailConfirmationPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className='my-7 sm:my-14 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] h-[80vh] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-col gap-12 md:mt-0 mt-8">
                        <div className="flex flex-col w-full justify-center items-center p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2357 3.1665H18.7641C21.1954 3.16647 23.1551 3.16644 24.6964 3.37366C26.2966 3.5888 27.6439 4.04905 28.714 5.11913C29.784 6.1892 30.2443 7.53653 30.4594 9.13673C30.6667 10.678 30.6666 12.6377 30.6666 15.069V15.1902C30.6666 16.7309 30.6666 18.0716 30.6188 19.2218L27.9545 19.1112C27.9997 18.0222 27.9999 16.7352 27.9999 15.1665C27.9999 12.6147 27.9971 10.8349 27.8165 9.49205C27.6412 8.18756 27.3204 7.49677 26.8284 7.00475C26.3363 6.51272 25.6455 6.19193 24.341 6.01655C22.9982 5.836 21.2184 5.83317 18.6666 5.83317H13.3333C10.7814 5.83317 9.00165 5.836 7.6588 6.01655C6.35431 6.19193 5.66352 6.51272 5.17149 7.00475C4.67947 7.49677 4.35868 8.18756 4.18329 9.49205C4.00275 10.8349 3.99992 12.6147 3.99992 15.1665C3.99992 17.7184 4.00275 19.4981 4.18329 20.841C4.35868 22.1455 4.67947 22.8362 5.17149 23.3283C5.66352 23.8203 6.35431 24.1411 7.6588 24.3165C9.00165 24.497 10.7814 24.4998 13.3333 24.4998H17.9999V27.1665H13.2357C10.8044 27.1665 8.84476 27.1666 7.30347 26.9594C5.70328 26.7442 4.35595 26.284 3.28588 25.2139C2.2158 24.1438 1.75555 22.7965 1.54041 21.1963C1.33319 19.655 1.33322 17.6953 1.33325 15.2641V15.069C1.33322 12.6377 1.33319 10.678 1.54041 9.13673C1.75555 7.53653 2.2158 6.1892 3.28588 5.11913C4.35595 4.04905 5.70328 3.5888 7.30347 3.37366C8.84475 3.16644 10.8044 3.16647 13.2357 3.1665ZM5.79887 11.5122L7.53431 9.4875L11.6613 13.0249C12.9297 14.1121 13.7883 14.8448 14.5083 15.3204C15.1972 15.7753 15.6204 15.8982 15.9999 15.8982C16.3794 15.8982 16.8027 15.7753 17.4915 15.3204C18.2115 14.8448 19.0701 14.1121 20.3385 13.0249L24.4655 9.4875L26.201 11.5122L22.0092 15.1052C20.8222 16.1226 19.8373 16.9669 18.9611 17.5455C18.0378 18.1553 17.1001 18.5649 15.9999 18.5649C14.8997 18.5649 13.962 18.1553 13.0387 17.5455C12.1625 16.9669 11.1777 16.1226 9.99067 15.1052L5.79887 11.5122ZM30.2761 24.1093L25.4141 28.9712C24.6331 29.7523 23.3668 29.7523 22.5857 28.9712L20.3904 26.776L22.2761 24.8904L23.9999 26.6142L28.3904 22.2237L30.2761 24.1093Z" fill="#453CFF" />
                            </svg>
                            <p className="text-center md:text-desktop-body-2 text-mobile-body-2 font-bold mt-4">Confirm Your Email Address</p>
                            <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">We’ve just sent a confirmation email to johndoe@mail.com. Please
                                check your inbox and click the confirmation link to activate your account.</p>
                            <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">If you do not see the email in your inbox, please check your spam or junk folder.</p>
                            <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Still not received? click button below to resend the email.</p>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <Button className="mt-6 sm:min-w-[195px] w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px]">
                                    Resend
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    );
}
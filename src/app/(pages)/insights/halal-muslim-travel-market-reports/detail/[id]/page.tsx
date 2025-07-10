import { CardReports, ImageWithFallback, Input } from "@/components/common";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Download,
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { reports } from "@/constants/dummyData"
export default function HalalMusimTravelMarketReportsDetail() {


    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section
                className="relative w-full px-6 lg:px-8 max-w-[1440px] p-4 flex sm:flex-row flex-col-reverse gap-5 justify-center items-center bg-center"
            >
                <div className="flex w-full max-w-[1440px] sm:py-16 py-8  lg:px-0 flex-col gap-4 justify-start items-start">
                    <h1 className="text-mobile-heading-3 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text text-black relative z-20 text-left">
                        MC-CR Muslim-Friendly Cruise Report 2024
                    </h1>
                    <p className="text-neutral-500 text-left md:text-mobile-caption-l lg:text-mobile-body-3 sm:text-desktop-body-2 relative z-20 max-w-4xl">
                        16 August, 2024
                    </p>
                    <p className="text-neutral-500 text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                        The Mastercard-CrescentRating Muslim-Friendly Cruise Report 2024 offers a comprehensive analysis aimed at enhancing the Halal Tourism experience and meeting the evolving needs of Muslim travelers. This report reflects a commitment to inclusivity, diversity, and responsible cruising, drawing on extensive research and analysis of Muslim consumer preferences. It addresses the cruise industry’s imperative for diversity, inclusivity, and sustainability, providing insights and recommendations based on CrescentRating’s RIDA framework to help cruise operators cater to Muslim travelers and promote a respectful and culturally diverse environment.
                    </p>
                    <div className="flex sm:flex-row flex-col justify-start gap-4 items-center w-full">
                        <Dialog>
                            <DialogTrigger className="flex flex-row justify-center items-center gap-2 text-white bg-blue-600 sm:p-4 p-3 w-full sm:max-w-[200px] lg:text-mobile-body-1 text-mobile-body-3"><Download className="lg:size-6 size-5" /> Download PDF</DialogTrigger>
                            <DialogContent className="w-full max-w-[919px] flex flex-row justify-between items-center gap-4 p-6">
                                <div className="flex flex-col gap-2 justify-start items-start w-full md:w-[50%]">
                                    <p className="md:text-desktop-heading-5 text-mobile-heading-5 font-bold">One more step!</p>
                                    <p className="md:text-desktop-body-2 text-mobile-body-2 text-gray-600">Please fill in your information to access this publication.
                                        Your details help us personalize your experience and keep you updated with the latest insights from CrescentRating.</p>
                                    <div className="mt-4 w-full flex flex-col gap-4">
                                        <div className="w-full flex flex-col justify-start items-start gap-1">
                                            <p className="md:text-desktop-label-l text-desktop-label-s font-bold">Name</p>
                                            <Input placeholder="Enter your name" className="w-full !rounded-none" />
                                        </div>
                                        <div className="w-full flex flex-col justify-start items-start gap-1">
                                            <p className="md:text-desktop-label-l text-desktop-label-s font-bold">Email</p>
                                            <Input placeholder="Enter your email" className="w-full !rounded-none" />
                                        </div>
                                        <div className="w-full flex flex-col justify-start items-start gap-1">
                                            <p className="md:text-desktop-label-l text-desktop-label-s font-bold">Country</p>
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
                                        <div className="flex flex-col gap-6 mt-6">
                                            {/* Checkbox 1 */}
                                            <div className="items-top flex space-x-2">
                                                <Checkbox
                                                    id="terms1"
                                                    className="h-4 w-4 rounded-none border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <label
                                                    htmlFor="terms1"
                                                    className="md:text-desktop-label-l text-desktop-label-s text-gray-600 leading-none"
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
                                            <div className="items-top flex space-x-2">
                                                <Checkbox
                                                    id="terms2"
                                                    className="h-4 w-4 rounded-none border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <label
                                                    htmlFor="terms2"
                                                    className="md:text-desktop-label-l text-desktop-label-s text-gray-600 leading-none"
                                                >
                                                    I hereby give consent to CrescentRating to contact me for future
                                                    marketing purposes.
                                                </label>
                                            </div>
                                        </div>
                                        <button className="flex flex-row justify-center items-center gap-2 text-white bg-custom-purple-cr p-4 w-full">
                                            Download Publication
                                        </button>
                                    </div>
                                </div>
                                <ImageWithFallback
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-[50%] md:block hidden object-cover bg-center"
                                    priority={false}
                                    src="/image/halal-muslim-travel-market-reports/image-cover-1.webp"
                                    alt="logo"
                                />
                            </DialogContent>
                        </Dialog>
                        <Popover>
                            <PopoverTrigger className="lg:text-mobile-body-1 text-mobile-body-3 sm:max-w-[200px] w-full flex flex-row justify-center items-center gap-2 text-primary-cr-600 border-gray-600/20 border p-3 sm:p-4 font-semibold">
                                Share Report
                            </PopoverTrigger>
                            <PopoverContent className="rounded-none">
                                <ul className="py-1">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex flex-row justify-between items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Share on LinkedIn
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <g clip-path="url(#clip0_3899_7942)">
                                                    <path d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85937 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344V13.6344Z" fill="#453CFF" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_3899_7942">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex flex-row justify-between items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Share on X
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M12.2176 1.26953H14.4666L9.55323 6.88519L15.3334 14.5268H10.8076L7.26277 9.89222L3.20671 14.5268H0.956369L6.2117 8.52026L0.666748 1.26953H5.30749L8.51168 5.50575L12.2176 1.26953ZM11.4283 13.1807H12.6745L4.63034 2.54495H3.29306L11.4283 13.1807Z" fill="#453CFF" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex flex-row justify-between items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Share on Facebook
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <g clip-path="url(#clip0_3899_7956)">
                                                    <path d="M8 0C3.58176 0 0 3.58176 0 8C0 11.7517 2.58304 14.8998 6.06752 15.7645V10.4448H4.41792V8H6.06752V6.94656C6.06752 4.22368 7.29984 2.9616 9.97312 2.9616C10.48 2.9616 11.3546 3.06112 11.7123 3.16032V5.37632C11.5235 5.35648 11.1955 5.34656 10.7882 5.34656C9.47648 5.34656 8.9696 5.84352 8.9696 7.13536V8H11.5827L11.1338 10.4448H8.9696V15.9414C12.9309 15.463 16.0003 12.0902 16.0003 8C16 3.58176 12.4182 0 8 0Z" fill="#453CFF" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_3899_7956">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex flex-row justify-between items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Share on WhatsApp
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary-cr-600" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex flex-row justify-between items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Share on Telegram
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary-cr-600" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex flex-row justify-between items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            Share on Copy Link
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M12.0001 2.00033C12.6475 2.00033 13.0659 2.00174 13.3743 2.0432C13.6634 2.08208 13.7541 2.14484 13.8048 2.19559C13.8556 2.24634 13.9183 2.33697 13.9572 2.62613C13.9987 2.93447 14.0001 3.35294 14.0001 4.00033V11.3337C14.0001 11.7019 13.7016 12.0003 13.3334 12.0003V13.3337C14.438 13.3337 15.3334 12.4382 15.3334 11.3337L15.3334 3.95646C15.3335 3.36546 15.3335 2.85624 15.2787 2.44847C15.2199 2.01146 15.0874 1.59256 14.7476 1.25278C14.4079 0.913007 13.989 0.78051 13.5519 0.721756C13.1442 0.666932 12.635 0.666961 12.044 0.666994L4.66675 0.666995C3.56218 0.666995 2.66675 1.56243 2.66675 2.667H4.00008C4.00008 2.29881 4.29856 2.00033 4.66675 2.00033H12.0001Z" fill="#453CFF" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9562 3.33366C3.36521 3.33363 2.856 3.3336 2.44822 3.38842C2.01121 3.44718 1.59231 3.57967 1.25254 3.91945C0.912763 4.25922 0.780266 4.67812 0.721512 5.11513C0.666688 5.52291 0.666716 6.03212 0.66675 6.62311V12.0442C0.666716 12.6352 0.666688 13.1444 0.721512 13.5522C0.780266 13.9892 0.912763 14.4081 1.25254 14.7479C1.59231 15.0877 2.01121 15.2201 2.44822 15.2789C2.856 15.3337 3.36522 15.3337 3.95621 15.3337H9.37729C9.96829 15.3337 10.4775 15.3337 10.8853 15.2789C11.3223 15.2201 11.7412 15.0877 12.081 14.7479C12.4207 14.4081 12.5532 13.9892 12.612 13.5522C12.6668 13.1444 12.6668 12.6352 12.6668 12.0442V6.62312C12.6668 6.03213 12.6668 5.52291 12.612 5.11513C12.5532 4.67812 12.4207 4.25922 12.081 3.91945C11.7412 3.57967 11.3223 3.44718 10.8853 3.38842C10.4775 3.3336 9.9683 3.33363 9.3773 3.33366H3.9562ZM2.19535 4.86226C2.2461 4.81151 2.33673 4.74874 2.62589 4.70987C2.93422 4.66841 3.3527 4.667 4.00008 4.667H9.33342C9.9808 4.667 10.3993 4.66841 10.7076 4.70987C10.9968 4.74874 11.0874 4.81151 11.1382 4.86226C11.1889 4.91301 11.2517 5.00364 11.2905 5.2928C11.332 5.60114 11.3334 6.01961 11.3334 6.667V12.0003C11.3334 12.6477 11.332 13.0662 11.2905 13.3745C11.2517 13.6637 11.1889 13.7543 11.1382 13.8051C11.0874 13.8558 10.9968 13.9186 10.7076 13.9575C10.3993 13.9989 9.9808 14.0003 9.33342 14.0003H4.00008C3.3527 14.0003 2.93422 13.9989 2.62589 13.9575C2.33673 13.9186 2.2461 13.8558 2.19535 13.8051C2.1446 13.7543 2.08183 13.6637 2.04296 13.3745C2.0015 13.0662 2.00008 12.6477 2.00008 12.0003V6.667C2.00008 6.01961 2.0015 5.60114 2.04296 5.2928C2.08183 5.00364 2.1446 4.91301 2.19535 4.86226Z" fill="#453CFF" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:w-[400px] xl:max-w-[400px] object-contain"
                    priority={false}
                    src="/image/halal-muslim-travel-market-reports/image-cover-1.webp"
                    alt="logo"
                />
            </section>
            <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
                <div className="max-w-[1440px] w-full px-6 lg:px-8">
                    <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-left">Related Publications</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mt-10">
                        {reports.slice(0, 3).map((report, index) => (
                            <CardReports
                                id={report.id}
                                key={index}
                                title={report.title}
                                date={report.date}
                                description={report.description}
                                imageUrl={report.imageUrl}
                                downloadUrl={report.downloadUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
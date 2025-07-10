'use client';
import { Button, ImageWithFallback, Input } from "@/components/common";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dataRegisteredHotelUser } from "@/constants/dummyData";
export default function Profile() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className='my-7 sm:my-14 w-full flex flex-col gap-24 justify-center items-center'>
                <section className="max-w-[1440px] px-6 lg:px-8 w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-col justify-center items-center gap-8 mt-10">
                        <Tabs
                            defaultValue={"user-profile"}
                            align="start"
                            className="w-full z-10"
                            responsiveTabPosition="top"
                            desktopTabPosition="left"
                            mobileMode="tabs"
                        >
                            {/* Tabs List */}
                            <TabsList className="!border-none md:w-[20%] w-full md:overflow-hidden overflow-x-scroll">
                                <TabsTrigger
                                    key={"user-profile"}
                                    className="w-full !bg-none h-[41px] !justify-start !items-center !border-none px-4 py-2"
                                    customColorActive="data-[state=active]:border-primary-cr-700 data-[state=active]:text-primary-cr-700 data-[state=active]:!bg-[#F1F3FF]"
                                    value={"user-profile"}
                                >
                                    User Profile
                                </TabsTrigger>
                                <TabsTrigger
                                    key={"my-hotels"}
                                    className="w-full !bg-none h-[41px] !justify-start !items-center !border-none px-4 py-2"
                                    customColorActive="data-[state=active]:border-primary-cr-700 data-[state=active]:text-primary-cr-700 data-[state=active]:!bg-[#F1F3FF]"
                                    value={"my-hotels"}
                                >
                                    My Hotels
                                </TabsTrigger>
                                <TabsTrigger
                                    key={"my-restaurants"}
                                    className="w-full !bg-none h-[41px] !justify-start !items-center !border-none px-4 py-2"
                                    customColorActive="data-[state=active]:border-primary-cr-700 data-[state=active]:text-primary-cr-700 data-[state=active]:!bg-[#F1F3FF]"
                                    value={"my-restaurants"}
                                >
                                    My Restaurants
                                </TabsTrigger>
                                <TabsTrigger
                                    key={"my-attractions"}
                                    className="w-full !bg-none h-[41px] !justify-start !items-center !border-none px-4 py-2"
                                    customColorActive="data-[state=active]:border-primary-cr-700 data-[state=active]:text-primary-cr-700 data-[state=active]:!bg-[#F1F3FF]"
                                    value={"my-attractions"}
                                >
                                    My Attractions
                                </TabsTrigger>
                                <TabsTrigger
                                    key={"my-shopping-malls"}
                                    className="w-full !bg-none h-[41px] !justify-start !items-center !border-none px-4 py-2"
                                    customColorActive="data-[state=active]:border-primary-cr-700 data-[state=active]:text-primary-cr-700 data-[state=active]:!bg-[#F1F3FF]"
                                    value={"my-shopping-malls"}
                                >
                                    My Shopping Malls
                                </TabsTrigger>
                                <TabsTrigger
                                    key={"my-mice-venues"}
                                    className="w-full !bg-none h-[41px] !justify-start !items-center !border-none px-4 py-2"
                                    customColorActive="data-[state=active]:border-primary-cr-700 data-[state=active]:text-primary-cr-700 data-[state=active]:!bg-[#F1F3FF]"
                                    value={"my-mice-venues"}
                                >
                                    My MICE Venues
                                </TabsTrigger>
                            </TabsList>

                            {/* Tabs Content */}
                            <TabsContent
                                key={"user-profile"}
                                value={"user-profile"}
                                activeValue={"user-profile"}
                                className="w-full flex flex-col gap-4 px-6"
                            >
                                <div className="w-full flex flex-col gap-12 md:mt-0 mt-8">
                                    <div className="flex flex-col w-full">
                                        <p className="md:text-desktop-heading-5 text-mobile-heading-4 font-semibold">User Profile Information</p>
                                        <p className="md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Manage your profile information.</p>
                                    </div>
                                    <div className="w-full flex sm:flex-row flex-col justify-start items-start gap-12">
                                        <div className="w-full sm:w-[25%] flex flex-col gap-2">
                                            <p className="text-desktop-label-l font-semibold">Profile Image</p>
                                            <div className="rounded-full size-[160px] relative bg-neutral-100 p-10 group">
                                                {/* Profile Image Display */}
                                                <ImageWithFallback
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    className="w-full h-full object-cover rounded-full"
                                                    src="/image/profile/user.svg"
                                                    alt="User Profile"
                                                />

                                                {/* Camera Icon Button */}
                                                <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-primary-cr-700 rounded-full p-3 cursor-pointer hover:bg-primary-cr-800 transition-colors z-20">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0002 7.5C8.15921 7.5 6.66683 8.99238 6.66683 10.8333C6.66683 12.6743 8.15921 14.1667 10.0002 14.1667C11.8411 14.1667 13.3335 12.6743 13.3335 10.8333C13.3335 8.99238 11.8411 7.5 10.0002 7.5ZM8.3335 10.8333C8.3335 9.91286 9.07969 9.16667 10.0002 9.16667C10.9206 9.16667 11.6668 9.91286 11.6668 10.8333C11.6668 11.7538 10.9206 12.5 10.0002 12.5C9.07969 12.5 8.3335 11.7538 8.3335 10.8333Z" fill="white" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.3335 2.5C6.95278 2.5 5.8335 3.61929 5.8335 5H3.3335C1.95278 5 0.833496 6.11929 0.833496 7.5V15C0.833496 16.3807 1.95278 17.5 3.3335 17.5H16.6668C18.0475 17.5 19.1668 16.3807 19.1668 15V7.5C19.1668 6.11929 18.0475 5 16.6668 5H14.1668C14.1668 3.61929 13.0475 2.5 11.6668 2.5H8.3335ZM7.50016 5C7.50016 4.53976 7.87326 4.16667 8.3335 4.16667H11.6668C12.1271 4.16667 12.5002 4.53976 12.5002 5V5.83333C12.5002 6.29357 12.8733 6.66667 13.3335 6.66667H16.6668C17.1271 6.66667 17.5002 7.03976 17.5002 7.5V15C17.5002 15.4602 17.1271 15.8333 16.6668 15.8333H3.3335C2.87326 15.8333 2.50016 15.4602 2.50016 15V7.5C2.50016 7.03976 2.87326 6.66667 3.3335 6.66667H6.66683C7.12707 6.66667 7.50016 6.29357 7.50016 5.83333V5Z" fill="white" />
                                                    </svg>
                                                </label>

                                                {/* Hidden File Input */}
                                                <input
                                                    id="profile-upload"
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        // Handle file upload here
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            // Preview image or upload to server
                                                            console.log("Selected file:", file.name);

                                                            // You can add code here to:
                                                            // 1. Show a preview of the uploaded image
                                                            // 2. Upload the image to your server
                                                            // 3. Update the user's profile in your database
                                                        }
                                                    }}
                                                />

                                                {/* Overlay on hover to indicate it's clickable */}
                                                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <span className="text-white text-sm font-medium">Change Photo</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col gap-3">
                                            <div className="w-full flex flex-row gap-3">
                                                <Input label="Full Name" placeholder="Enter your full name" value="John Doe" className="w-full" labelStyle={"font-bold"} />
                                                <Input label="Username" placeholder="Enter your username" value="johndoe123" className="w-full" labelStyle={"font-bold"} disabled />
                                            </div>
                                            <Input label="Email" placeholder="Enter your email" value="johndoe@example.com" className="w-full" labelStyle={"font-bold"} disabled />
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col justify-end items-end">
                                        <Button className=" sm:max-w-[195px] w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px]">
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent
                                key={"my-hotels"}
                                value={"my-hotels"}
                                activeValue={"my-hotels"}
                                className="w-full flex flex-col gap-4 px-6"
                            >
                                <div className="w-full flex flex-col gap-12 md:mt-0 mt-8">
                                    <div className="flex flex-col w-full">
                                        <p className="md:text-desktop-heading-5 text-mobile-heading-4 font-semibold">My Hotels</p>
                                        <p className="md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Manage and register your hotel properties.</p>
                                    </div>
                                    {
                                        !dataRegisteredHotelUser ? (
                                            <div className="flex flex-col w-full justify-center items-center p-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1667 5.89575C11.0152 5.90865 10.8694 5.92422 10.7296 5.94302C9.85559 6.06053 9.01779 6.32552 8.33824 7.00507C7.65869 7.68462 7.3937 8.52242 7.27619 9.39644C7.16654 10.212 7.1666 11.2304 7.16666 12.4124L7.16667 28.5002H4.5V31.1668H28.5V28.5002H25.8333L25.8333 12.4124C25.8334 11.2304 25.8335 10.212 25.7238 9.39644C25.6063 8.52242 25.3413 7.68462 24.6618 7.00507C23.9822 6.32552 23.1444 6.06053 22.2704 5.94302C21.4548 5.83337 20.4364 5.83343 19.2544 5.83349L19.1667 5.8335V3.16683H16.5V5.8335H13.8333V1.8335H11.1667V5.89575ZM23.1667 28.5002V12.5002C23.1667 11.2054 23.1638 10.3684 23.0809 9.75177C23.0032 9.17345 22.8776 8.99219 22.7761 8.89069C22.6746 8.78919 22.4934 8.66366 21.9151 8.5859C21.2984 8.50299 20.4614 8.50016 19.1667 8.50016H13.8333C12.5386 8.50016 11.7016 8.50299 11.0849 8.5859C10.5066 8.66366 10.3254 8.78919 10.2239 8.89069C10.1224 8.99219 9.99683 9.17345 9.91908 9.75177C9.83617 10.3684 9.83333 11.2054 9.83333 12.5002V28.5002H23.1667ZM13.8333 13.8335H11.1667V11.1668H13.8333V13.8335ZM21.8333 13.8335H19.1667V11.1668H21.8333V13.8335ZM11.1667 19.1668V16.5002H13.8333V19.1668H11.1667ZM15.1667 13.8335V11.1668H17.8333V13.8335H15.1667ZM15.1667 19.1668V16.5002H17.8333V19.1668H15.1667ZM19.1667 19.1668V16.5002H21.8333V19.1668H19.1667ZM11.1667 24.5002V21.8335H13.8333V24.5002H11.1667ZM15.1667 24.5002V21.8335H17.8333V24.5002H15.1667ZM19.1667 24.5002V21.8335H21.8333V24.5002H19.1667Z" fill="#E3E2E6" />
                                                </svg>
                                                <p className="text-center md:text-desktop-body-2 text-mobile-body-2 font-bold mt-4">No Hotels Registered Yet</p>
                                                <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Get started by registering your first property for CrescentRating’s halal-friendly hotel accreditation.</p>
                                                <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Accreditation with CrescentRating positions your hotel as a trusted choice for Muslim travelers worldwide.
                                                    Join hospitality leaders committed to serving a growing global market with confidence and credibility.</p>
                                                <Button className="mt-6 sm:max-w-[195px] w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px]">
                                                    Register a Hotel
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className="w-full flex flex-col gap-4">
                                                <div className="flex md:flex-row flex-col md:gap-0 gap-3 w-full justify-between items-center pb-6">
                                                    <p className="text-center md:text-desktop-heading-6 text-mobile-heading-4 font-bold">Registered Hotel</p>
                                                    <Button className="sm:max-w-[195px] w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px]">
                                                        Register a New Hotel
                                                    </Button>
                                                </div>
                                                <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4">
                                                    {
                                                        dataRegisteredHotelUser.map((hotel, index) => (
                                                            <div key={index} className="border border-[#E3E2E6] p-4 flex flex-col gap-3 bg-white">
                                                                <ImageWithFallback
                                                                    width={0}
                                                                    height={0}
                                                                    sizes="100vw"
                                                                    className="w-full h-[150px] md:h-[200px] object-cover"
                                                                    src={hotel?.hotelImg}
                                                                    alt="Hotel ABC 123"
                                                                />
                                                                <p className="text-desktop-label-l font-semibold mt-2">{hotel?.name}</p>
                                                                {/* Optional: Location */}
                                                                {/* <p className="text-desktop-body-2 text-neutral-500">Location: City, Country</p> */}
                                                                <div className="flex flex-col gap-2 mt-2">
                                                                    <Button
                                                                        variant="outline"
                                                                        className="w-full flex items-center justify-center gap-2 border-[#E3E2E6] text-primary-cr-700 hover:bg-primary-cr-50 font-semibold"
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                                            <path d="M10.1667 1.33301H8.43903C6.9195 1.33299 5.69468 1.33297 4.73139 1.46248C3.73127 1.59694 2.88919 1.8846 2.22039 2.5534C1.55159 3.22219 1.26393 4.06428 1.12947 5.0644C0.99996 6.02769 0.999978 7.25249 1 8.77202V12.2273C0.999978 13.7469 0.99996 14.9717 1.12947 15.935C1.26393 16.9351 1.55159 17.7772 2.22039 18.446C2.88919 19.1147 3.73127 19.4024 4.73139 19.5369C5.69469 19.6664 6.9195 19.6664 8.43905 19.6663H11.8943C13.4138 19.6664 14.6386 19.6664 15.6019 19.5369C16.6021 19.4024 17.4442 19.1147 18.1129 18.446C18.7817 17.7772 19.0694 16.9351 19.2039 15.935C19.3334 14.9717 19.3334 13.7468 19.3333 12.2273V10.4997H17.6667V12.1663C17.6667 13.7612 17.6649 14.8736 17.5521 15.7129C17.4424 16.5282 17.2419 16.9599 16.9344 17.2674C16.6269 17.575 16.1952 17.7755 15.3799 17.8851C14.5406 17.9979 13.4282 17.9997 11.8333 17.9997H8.5C6.90509 17.9997 5.79275 17.9979 4.95347 17.8851C4.13816 17.7755 3.70642 17.575 3.3989 17.2674C3.09139 16.9599 2.89089 16.5282 2.78128 15.7129C2.66844 14.8736 2.66667 13.7612 2.66667 12.1663V8.83301C2.66667 7.2381 2.66844 6.12575 2.78128 5.28648C2.89089 4.47117 3.09139 4.03942 3.3989 3.73191C3.70642 3.42439 4.13816 3.2239 4.95347 3.11428C5.79275 3.00145 6.9051 2.99968 8.5 2.99968H10.1667V1.33301Z" fill="#453CFF" />
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3511 2.33909C16.3748 1.36278 14.7919 1.36277 13.8156 2.33909L6.24408 9.91058C6.0878 10.0669 6 10.2788 6 10.4998V13.8332C6 14.2934 6.3731 14.6665 6.83333 14.6665L10.1667 14.6665C10.3877 14.6665 10.5996 14.5787 10.7559 14.4224L18.3274 6.85093C19.3037 5.87462 19.3037 4.29171 18.3274 3.3154L17.3511 2.33909ZM14.9941 3.5176C15.3195 3.19216 15.8472 3.19216 16.1726 3.5176L17.1489 4.49391C17.4743 4.81935 17.4743 5.34698 17.1489 5.67242L15.1667 7.65465L13.0118 5.49983L14.9941 3.5176ZM11.8333 6.67834L13.9882 8.83316L9.82149 12.9998L7.66667 12.9998V10.845L11.8333 6.67834Z" fill="#453CFF" />
                                                                        </svg>
                                                                        Edit
                                                                    </Button>
                                                                    <Button
                                                                        variant="outline"
                                                                        className="w-full flex items-center justify-center gap-2 border-[#E3E2E6] text-red-600 hover:bg-red-50 font-semibold"
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                                            <path d="M7.66732 14.6663L7.66732 9.66634H9.33398V14.6663H7.66732Z" fill="#DE3024" />
                                                                            <path d="M11.0007 9.66634V14.6663H12.6673V9.66634H11.0007Z" fill="#DE3024" />
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00065 5.49967H1.83398V7.16634H3.50065L3.50065 13.8918C3.50062 15.0202 3.5006 15.9508 3.59961 16.6872C3.70357 17.4604 3.93021 18.1433 4.47696 18.69C5.02372 19.2368 5.70658 19.4634 6.47977 19.5674C7.21621 19.6664 8.14669 19.6664 9.27507 19.6663H11.0594C12.1878 19.6664 13.1184 19.6664 13.8549 19.5674C14.6281 19.4634 15.3109 19.2368 15.8577 18.69C16.4044 18.1433 16.6311 17.4604 16.735 16.6872C16.834 15.9508 16.834 15.0203 16.834 13.8919L16.834 7.16634H18.5007V5.49967H14.334C14.334 3.19849 12.4685 1.33301 10.1673 1.33301C7.86613 1.33301 6.00065 3.19849 6.00065 5.49967ZM10.1673 2.99967C11.548 2.99967 12.6673 4.11896 12.6673 5.49967H7.66732C7.66732 4.11896 8.78661 2.99967 10.1673 2.99967ZM15.1673 7.16634H5.16732V13.833C5.16732 15.0351 5.16909 15.8528 5.25142 16.4651C5.33052 17.0535 5.47 17.326 5.65548 17.5115C5.84095 17.697 6.11347 17.8365 6.70185 17.9156C7.3142 17.9979 8.13192 17.9997 9.33399 17.9997H11.0007C12.2027 17.9997 13.0204 17.9979 13.6328 17.9156C14.2212 17.8365 14.4937 17.697 14.6792 17.5115C14.8646 17.326 15.0041 17.0535 15.0832 16.4651C15.1656 15.8528 15.1673 15.0351 15.1673 13.833V7.16634Z" fill="#DE3024" />
                                                                        </svg>
                                                                        Delete
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </TabsContent>
                            <TabsContent
                                key={"my-restaurants"}
                                value={"my-restaurants"}
                                activeValue={"my-restaurants"}
                                className="w-full flex flex-col gap-4 px-6"
                            >
                                <div className="w-full flex flex-col gap-12 md:mt-0 mt-8">
                                    <div className="flex flex-col w-full">
                                        <p className="md:text-desktop-heading-5 text-mobile-heading-4 font-semibold">My Restaurants</p>
                                        <p className="md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Manage and register your restaurants properties.</p>
                                    </div>
                                    <div className="flex flex-col w-full justify-center items-center p-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1663 2.6665C22.589 2.6665 20.4997 4.75584 20.4997 7.33317C20.4997 9.9105 22.589 11.9998 25.1663 11.9998C25.97 11.9998 26.7262 11.7967 27.3865 11.4389L28.8902 12.9426L30.7758 11.057L29.2721 9.5533C29.6298 8.89308 29.833 8.13685 29.833 7.33317C29.833 4.75584 27.7437 2.6665 25.1663 2.6665ZM23.1663 7.33317C23.1663 6.2286 24.0618 5.33317 25.1663 5.33317C26.2709 5.33317 27.1663 6.2286 27.1663 7.33317C27.1663 8.43774 26.2709 9.33317 25.1663 9.33317C24.0618 9.33317 23.1663 8.43774 23.1663 7.33317Z" fill="#E3E2E6" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1663 25.3332H29.7672C29.1417 19.0339 24.1322 14.0244 17.833 13.399V11.9998H15.1663V13.399C8.86712 14.0244 3.8576 19.0339 3.23217 25.3332H1.83301V27.9998H31.1663V25.3332ZM16.4997 15.9998C21.9392 15.9998 26.4277 20.0714 27.0838 25.3332H5.91553C6.57166 20.0714 11.0602 15.9998 16.4997 15.9998Z" fill="#E3E2E6" />
                                        </svg>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 font-bold mt-4">No Restaurant Registered Yet</p>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Get started by registering your first property for CrescentRating’s halal-friendly hotel accreditation.</p>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Accreditation with CrescentRating positions your hotel as a trusted choice for Muslim travelers worldwide.
                                            Join hospitality leaders committed to serving a growing global market with confidence and credibility.</p>
                                        <Button className="mt-6 sm:max-w-[195px] w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px]">
                                            Register a Restaurant
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent
                                key={"my-attractions"}
                                value={"my-attractions"}
                                activeValue={"my-attractions"}
                                className="w-full flex flex-col gap-4 px-6"
                            >
                                <div className="w-full flex flex-col gap-12 md:mt-0 mt-8">
                                    <div className="flex flex-col w-full">
                                        <p className="md:text-desktop-heading-5 text-mobile-heading-4 font-semibold">My Attractions</p>
                                        <p className="md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Manage and register your attraction properties.</p>
                                    </div>
                                    <div className="flex flex-col w-full justify-center items-center p-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.16634 8.02397C7.16634 4.85893 9.32367 1.8335 12.4997 1.8335C14.17 1.8335 15.5585 2.67027 16.4997 3.92406C17.4409 2.67027 18.8294 1.8335 20.4997 1.8335C23.6757 1.8335 25.833 4.85893 25.833 8.02397C25.833 8.19953 25.8267 8.37364 25.8144 8.54596C26.772 8.88481 27.5634 9.55914 28.1165 10.3784C28.9167 11.5637 29.2783 13.1197 29.0179 14.7011C28.9707 14.9874 28.9042 15.2662 28.8196 15.5355C30.2887 16.5271 31.1663 18.366 31.1663 20.2825C31.1663 23.8307 28.7532 27.1668 25.2616 27.1668H21.833V31.1668H19.1663V27.1668H13.833V31.1668H11.1663V27.1668H8.49967C4.81778 27.1668 1.83301 24.1821 1.83301 20.5002V20.1192C1.83301 18.249 2.79494 16.6055 4.25001 15.6535C4.12175 15.3198 4.02561 14.9691 3.96565 14.605L3.94996 14.5098C3.53137 11.9683 4.97356 9.60984 7.1979 8.70251C7.17702 8.47928 7.16634 8.25287 7.16634 8.02397ZM13.833 20.6755V17.2138L17.2393 14.9429L15.7601 12.7241L13.833 14.0088V11.1668H11.1663V18.0088L9.23926 16.7241L7.76006 18.9429L11.1663 21.2138V24.5002H8.49967C6.29054 24.5002 4.49967 22.7093 4.49967 20.5002V20.1192C4.49967 18.8895 5.33316 17.8511 6.46831 17.5445C6.90396 17.4268 7.25053 17.0968 7.38932 16.6674C7.5281 16.238 7.44028 15.7675 7.15592 15.4171C6.87238 15.0677 6.67462 14.6437 6.59686 14.1716L6.58118 14.0764C6.33147 12.5603 7.40855 11.1702 8.89179 10.9951C9.28238 10.949 9.63269 10.7328 9.84902 10.4043C10.0653 10.0758 10.1256 9.66863 10.0137 9.29158C9.89781 8.90106 9.83301 8.47431 9.83301 8.02397C9.83301 5.82396 11.2574 4.50016 12.4997 4.50016C13.742 4.50016 15.1663 5.82396 15.1663 8.02397C15.1663 8.47431 15.1015 8.90106 14.9856 9.29159C14.8737 9.66863 14.934 10.0759 15.1503 10.4043C15.3667 10.7328 15.717 10.949 16.1076 10.9951C17.5908 11.1702 18.6679 12.5603 18.4182 14.0764L18.4025 14.1716C18.3247 14.6437 18.127 15.0677 17.8434 15.4171C17.5591 15.7675 17.4712 16.238 17.61 16.6674C17.7488 17.0968 18.0954 17.4268 18.531 17.5445C19.6662 17.8511 20.4997 18.8895 20.4997 20.1192V20.5002C20.4997 22.7093 18.7088 24.5002 16.4997 24.5002H13.833V23.8804L17.2393 21.6096L15.7601 19.3908L13.833 20.6755ZM23.1663 20.5002C23.1663 22.001 22.6704 23.386 21.8335 24.5002H25.2616C26.8194 24.5002 28.4997 22.8657 28.4997 20.2825C28.4997 18.7105 27.5859 17.6865 26.7513 17.4924C26.3281 17.3939 25.9795 17.0954 25.8169 16.6925C25.6544 16.2895 25.6984 15.8327 25.9349 15.4681C26.1469 15.1412 26.3097 14.7351 26.3867 14.2678C26.5387 13.3446 26.3178 12.4798 25.9064 11.8706C25.4958 11.2624 24.9557 10.9764 24.4337 10.9764H24.2721C23.8525 10.9764 23.4574 10.7789 23.2056 10.4433C22.9538 10.1077 22.8746 9.67321 22.9919 9.27038C23.1039 8.88562 23.1663 8.46616 23.1663 8.02397C23.1663 5.82396 21.7419 4.50016 20.4997 4.50016C19.2574 4.50016 17.833 5.82396 17.833 8.02397C17.833 8.25287 17.8223 8.47929 17.8014 8.70252C20.0258 9.60985 21.468 11.9683 21.0494 14.5098L21.0337 14.605C20.9737 14.9691 20.8776 15.3198 20.7493 15.6535C22.2044 16.6055 23.1663 18.249 23.1663 20.1192V20.5002Z" fill="#E3E2E6" />
                                        </svg>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 font-bold mt-4">No Attractions Registered Yet</p>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Showcase your attraction as a welcoming destination for Muslim travelers.</p>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Register your attraction to demonstrate your commitment to cultural sensitivity
                                            and halal-friendly practices.</p>
                                        <Button className="mt-6 sm:max-w-[195px] w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px]">
                                            Register an Attraction
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent
                                key={"my-shopping-malls"}
                                value={"my-shopping-malls"}
                                activeValue={"my-shopping-malls"}
                                className="w-full flex flex-col gap-4 px-6"
                            >
                                <div className="w-full flex flex-col gap-12 md:mt-0 mt-8">
                                    <div className="flex flex-col w-full">
                                        <p className="md:text-desktop-heading-5 text-mobile-heading-4 font-semibold">My Shopping Malls</p>
                                        <p className="md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Manage and register your shopping mall properties.</p>
                                    </div>
                                    <div className="flex flex-col w-full justify-center items-center p-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                            <path d="M13.8333 9.83351C13.8333 11.3063 15.0272 12.5002 16.5 12.5002C17.9728 12.5002 19.1667 11.3063 19.1667 9.83351V8.50018H21.8333V9.83351C21.8333 12.779 19.4455 15.1668 16.5 15.1668C13.5545 15.1668 11.1667 12.779 11.1667 9.83351V8.50018H13.8333V9.83351Z" fill="#E3E2E6" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.7527 23.6058C2.55118 24.9487 2.37924 26.0947 2.37138 27.0171C2.36302 27.9986 2.53331 28.9654 3.23233 29.7771C3.93136 30.5888 4.86213 30.9006 5.83408 31.0379C6.74743 31.167 7.90614 31.1669 9.26412 31.1668H23.7361C25.094 31.1669 26.2528 31.167 27.1662 31.0379C28.1381 30.9006 29.0689 30.5888 29.7679 29.7771C30.4669 28.9654 30.6372 27.9986 30.6289 27.0171C30.621 26.0946 30.4491 24.9487 30.2475 23.6057L27.8216 7.43251C27.6692 6.4165 27.5368 5.53354 27.3389 4.82975C27.1258 4.07177 26.7964 3.36164 26.1472 2.80254C25.498 2.24344 24.7468 2.02303 23.9656 1.9247C23.2403 1.83339 22.3475 1.83344 21.3201 1.8335H11.6802C10.6528 1.83344 9.75999 1.83339 9.03463 1.9247C8.25342 2.02303 7.50229 2.24344 6.85307 2.80254C6.20385 3.36164 5.87446 4.07177 5.66132 4.82975C5.46342 5.53355 5.33103 6.4165 5.17869 7.43252L2.7527 23.6058ZM5.25297 28.0369C5.15409 27.9221 5.03221 27.7137 5.03795 27.0398C5.04401 26.3283 5.18447 25.3706 5.40405 23.9068L7.80405 7.90681C7.97169 6.78922 8.08138 6.07456 8.22843 5.55159C8.36534 5.06468 8.49228 4.91011 8.59322 4.82318C8.69416 4.73626 8.86585 4.63365 9.36768 4.57048C9.90667 4.50264 10.6297 4.50017 11.7598 4.50017H21.2405C22.3706 4.50017 23.0936 4.50264 23.6326 4.57048C24.1344 4.63365 24.3061 4.73626 24.407 4.82318C24.508 4.91011 24.6349 5.06468 24.7718 5.55159C24.9189 6.07456 25.0286 6.78922 25.1962 7.90681L27.5962 23.9068C27.8158 25.3706 27.9562 26.3283 27.9623 27.0398C27.968 27.7137 27.8462 27.9221 27.7473 28.0369C27.6484 28.1517 27.4603 28.3032 26.7931 28.3975C26.0886 28.497 25.1207 28.5002 23.6405 28.5002H9.35979C7.87958 28.5002 6.91168 28.497 6.20718 28.3975C5.53991 28.3032 5.35185 28.1517 5.25297 28.0369Z" fill="#E3E2E6" />
                                        </svg>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 font-bold mt-4">No Shopping Malls Registered Yet</p>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Position your shopping mall as an inclusive, Muslim-friendly destination.</p>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Register your mall to highlight halal dining, prayer spaces, and family-friendly
                                            amenities that cater to the needs of faith-conscious travelers.</p>
                                        <Button className="mt-6 sm:max-w-[220px] w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px]">
                                            Register a Shopping Mall
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent
                                key={"my-mice-venues"}
                                value={"my-mice-venues"}
                                activeValue={"my-mice-venues"}
                                className="w-full flex flex-col gap-4 px-6"
                            >
                                <div className="w-full flex flex-col gap-12 md:mt-0 mt-8">
                                    <div className="flex flex-col w-full">
                                        <p className="md:text-desktop-heading-5 text-mobile-heading-4 font-semibold">My MICE Venues</p>
                                        <p className="md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Manage and register your MICE venue properties.</p>
                                    </div>
                                    <div className="flex flex-col w-full justify-center items-center p-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                            <path d="M13.8333 9.83351C13.8333 11.3063 15.0272 12.5002 16.5 12.5002C17.9728 12.5002 19.1667 11.3063 19.1667 9.83351V8.50018H21.8333V9.83351C21.8333 12.779 19.4455 15.1668 16.5 15.1668C13.5545 15.1668 11.1667 12.779 11.1667 9.83351V8.50018H13.8333V9.83351Z" fill="#E3E2E6" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.7527 23.6058C2.55118 24.9487 2.37924 26.0947 2.37138 27.0171C2.36302 27.9986 2.53331 28.9654 3.23233 29.7771C3.93136 30.5888 4.86213 30.9006 5.83408 31.0379C6.74743 31.167 7.90614 31.1669 9.26412 31.1668H23.7361C25.094 31.1669 26.2528 31.167 27.1662 31.0379C28.1381 30.9006 29.0689 30.5888 29.7679 29.7771C30.4669 28.9654 30.6372 27.9986 30.6289 27.0171C30.621 26.0946 30.4491 24.9487 30.2475 23.6057L27.8216 7.43251C27.6692 6.4165 27.5368 5.53354 27.3389 4.82975C27.1258 4.07177 26.7964 3.36164 26.1472 2.80254C25.498 2.24344 24.7468 2.02303 23.9656 1.9247C23.2403 1.83339 22.3475 1.83344 21.3201 1.8335H11.6802C10.6528 1.83344 9.75999 1.83339 9.03463 1.9247C8.25342 2.02303 7.50229 2.24344 6.85307 2.80254C6.20385 3.36164 5.87446 4.07177 5.66132 4.82975C5.46342 5.53355 5.33103 6.4165 5.17869 7.43252L2.7527 23.6058ZM5.25297 28.0369C5.15409 27.9221 5.03221 27.7137 5.03795 27.0398C5.04401 26.3283 5.18447 25.3706 5.40405 23.9068L7.80405 7.90681C7.97169 6.78922 8.08138 6.07456 8.22843 5.55159C8.36534 5.06468 8.49228 4.91011 8.59322 4.82318C8.69416 4.73626 8.86585 4.63365 9.36768 4.57048C9.90667 4.50264 10.6297 4.50017 11.7598 4.50017H21.2405C22.3706 4.50017 23.0936 4.50264 23.6326 4.57048C24.1344 4.63365 24.3061 4.73626 24.407 4.82318C24.508 4.91011 24.6349 5.06468 24.7718 5.55159C24.9189 6.07456 25.0286 6.78922 25.1962 7.90681L27.5962 23.9068C27.8158 25.3706 27.9562 26.3283 27.9623 27.0398C27.968 27.7137 27.8462 27.9221 27.7473 28.0369C27.6484 28.1517 27.4603 28.3032 26.7931 28.3975C26.0886 28.497 25.1207 28.5002 23.6405 28.5002H9.35979C7.87958 28.5002 6.91168 28.497 6.20718 28.3975C5.53991 28.3032 5.35185 28.1517 5.25297 28.0369Z" fill="#E3E2E6" />
                                        </svg>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 font-bold mt-4">No MICE Venues Registered Yet</p>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Be recognized as a preferred venue for faith-based meetings and events.</p>
                                        <p className="text-center md:text-desktop-body-2 text-mobile-body-2 text-neutral-500">Register your MICE venue to demonstrate your dedication to inclusivity and
                                            halal-compliant hosting for corporate and group travelers.</p>
                                        <Button className="mt-6 sm:max-w-[220px] w-full md:text-desktop-body-2 text-mobile-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 hover:text-white font-semibold text-white md:h-[49px] h-[41px]">
                                            Register a MICE Venues
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
            </div>
        </div >
    )
}
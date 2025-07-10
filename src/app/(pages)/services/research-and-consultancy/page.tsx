"use client";
import {
  CardResearch,
  ImageWithFallback,
  Pagination,
} from "@/components/common";
import { Download } from "lucide-react";
import { useState } from "react";
import { crResearchAndConsultancy } from "@/constants/dummyData";
import Link from "next/link";
export default function HalalMusimTravelMarketReports() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  // Function to handle letter button click

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data or update UI based on the new page
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section
        className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
        style={{
          backgroundImage: "url('/image/research-and-consultancy/hero.webp')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
          <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
            <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
              Our Service
            </p>
            <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
              Research and Consultancy
            </h1>
            <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
              Develop your Halal travel market with our leading experts
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-custom-white-cr px-6 lg:px-8 flex justify-center items-center flex-col gap-5 my-10">
        <div className="max-w-[1440px] w-full flex flex-col gap-5">
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500">
            CrescentRating's consultants and industry experts continue to
            partner with destinations and services to unlock their potential and
            deliver solutions for long-term growth. Our extensive analysis and
            support will help you better understand your unique business needs,
            identify gaps in existing offerings, and propose suitable long-term
            strategic objectives and recommendations to drive growth and
            innovation for your Muslim market.
          </p>
        </div>
      </section>
      <div className="pt-7 sm:pt-14 w-full flex flex-col gap-24 justify-center items-center bg-white">
        <div className="max-w-[1440px] px-6 lg:px-8 w-full">
          <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
            Research
          </p>
          <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500">
            Require customized studies for your project and stakeholders? Learn
            how you can create better impact for your Halal Market with our
            tailored in-depth client reports
          </p>
          <div className="mt-10 mb-10 flex justify-center items-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 pt-10">
              {crResearchAndConsultancy.map((research, index) => (
                <CardResearch
                  id={research.id}
                  key={index}
                  title={research.title}
                  description={research.description}
                  imageUrl={research.imageUrl}
                />
              ))}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <div className="max-w-[1440px] px-5 md:px-28 lg:px-8 w-full">
          <div className="mt-10 mb-10 flex w-full flex-col justify-start items-center gap-16 overflow-clip">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="flex-1 inline-flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
                <div className="w-full max-w-[768px] flex flex-col justify-start items-start gap-5">
                  <div className="self-stretch justify-start text-gray-900 text-3xl font-semibold leading-10">
                    Join the Journey to Better Halal Travel Insights
                  </div>
                  <div className="self-stretch justify-start text-slate-600 text-xl font-normal leading-loose">
                    Join us to gain valuable Muslim travel insights and make a
                    difference. Begin with customized research and strategic
                    advice today.
                  </div>
                </div>
                <div className="inline-flex justify-start items-start gap-3">
                  <div
                    data-icon-leading="false"
                    data-icon-traling="true"
                    data-show-text="true"
                    data-size="xl"
                    data-state="Default"
                    data-variant="Secondary"
                    className="px-8 py-4 bg-button-color-secondary-default-fill outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center gap-2"
                  >
                    <div className="justify-start text-custom-blue text-base font-semibold leading-normal">
                      Enquire Now
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="13"
                        viewBox="0 0 19 13"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5002 7.33341H0.833496V5.66675H17.5002V7.33341Z"
                          fill="#453CFF"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.5656 5.91077L12.7441 2.08928L13.9227 0.910767L17.7441 4.73225C17.7548 4.74295 17.7655 4.75364 17.7762 4.76432C18.0261 5.01415 18.269 5.25695 18.4424 5.48417C18.6378 5.74034 18.8216 6.07197 18.8216 6.50002C18.8216 6.92808 18.6378 7.25971 18.4424 7.51587C18.269 7.74309 18.0261 7.9859 17.7762 8.23573C17.7655 8.2464 17.7548 8.25709 17.7441 8.26779L13.9227 12.0893L12.7441 10.9108L16.5656 7.08928C16.8601 6.79484 17.0204 6.63204 17.1174 6.5049C17.1186 6.50324 17.1199 6.50162 17.1211 6.50002C17.1199 6.49843 17.1186 6.4968 17.1174 6.49514C17.0204 6.368 16.8601 6.2052 16.5656 5.91077Z"
                          fill="#453CFF"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center content-center gap-6 flex-wrap ">
                <div className="flex flex-row gap-8">
                  <img
                    className="md:w-48 w-32 object-contain"
                    src="/image/research-and-consultancy/cape-town-tourism.webp"
                  />
                  <img
                    className="md:w-60 w-36 object-contain"
                    src="/image/research-and-consultancy/logo-fukuoka-city.webp"
                  />
                </div>
                <div className="flex flex-row gap-8">
                  <img
                    className="md:w-48 w-32 object-contain"
                    src="/image/research-and-consultancy/hong-kong-tourism-board.webp"
                  />
                  <img
                    className="md:w-24 w-10 object-contain"
                    src="/image/research-and-consultancy/comcec.webp"
                  />
                </div>
                <div className="flex flex-row gap-8">
                  <img
                    className="md:w-40 w-28 object-contain"
                    src="/image/research-and-consultancy/jeju-tourism-organization.webp"
                  />

                  <img
                    className="md:w-40 w-28 object-contain"
                    src="/image/research-and-consultancy/wonderful-indonesia.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-24 justify-center items-center bg-white">
          <div className="max-w-[1440px] px-6 lg:px-8 w-full">
            <p className="lg:text-desktop-heading-4 text-mobile-heading-4 font-bold mb-4 bg-clip-text text-black text-center">
              Consultancy
            </p>
            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center text-neutral-500">
              Don't leave your project success to chance. Get ongoing
              consultancy and insights on the Muslim market from the World's
              leading authority on Halal travel.
            </p>
            <div className="mt-10 mb-10 flex justify-center items-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                <div className="flex flex-col justify-start items-start gap-4 p-6 bg-custom-white-cr">
                  <div className="p-2 inline-flex justify-start items-center bg-navy-blue-50 ">
                    <div
                      data-style="Outlined"
                      className="min-w-6 min-h-6 p-2 relative overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
                          fill="#2D15FF"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.04938 13C2.51844 17.7244 6.27558 21.4816 11 21.9506V23H13V21.9506C17.7244 21.4816 21.4816 17.7244 21.9506 13H23V11H21.9506C21.4816 6.27558 17.7244 2.51844 13 2.04938V1H11V2.04938C6.27558 2.51844 2.51844 6.27558 2.04938 11H1V13H2.04938ZM11 5V4.06189C7.38128 4.51314 4.51314 7.38128 4.06189 11H5V13H4.06189C4.51314 16.6187 7.38128 19.4869 11 19.9381V19H13V19.9381C16.6187 19.4869 19.4869 16.6187 19.9381 13H19V11H19.9381C19.4869 7.38128 16.6187 4.51314 13 4.06189V5H11Z"
                          fill="#2D15FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="justify-start text-black sm:text-xl font-bold leading-loose">
                      Strategic Recommendations
                    </div>
                    <div className="justify-start text-custom-gray-cr text-base font-normal leading-normal">
                      Strategic recommendations to improve attractiveness to
                      Muslim travelers globally
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4 p-6 bg-custom-white-cr">
                  <div className="p-2 inline-flex justify-start items-center bg-navy-blue-50 ">
                    <div
                      data-style="Outlined"
                      className="min-w-6 min-h-6 p-2 relative overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.93417 1C5.95604 1 5.97799 1 6 1H12V3H6C5.02893 3 4.40122 3.00213 3.93871 3.06431C3.50497 3.12263 3.36902 3.21677 3.2929 3.2929C3.21677 3.36902 3.12263 3.50497 3.06431 3.93871C3.00213 4.40122 3 5.02893 3 6V16C3 16.5523 3.44772 17 4 17C5.10457 17 6 17.8954 6 19V20.2768L10.5816 17.6588C10.6075 17.644 10.6332 17.6292 10.6587 17.6146C11.041 17.3957 11.3793 17.2019 11.7611 17.1005C12.143 16.9991 12.5328 16.9995 12.9733 16.9999C13.0027 17 13.0324 17 13.0623 17H18C18.9711 17 19.5988 16.9979 20.0613 16.9357C20.495 16.8774 20.631 16.7832 20.7071 16.7071C20.7832 16.631 20.8774 16.495 20.9357 16.0613C20.9979 15.5988 21 14.9711 21 14V11H23L23 14.0658C23.0001 14.9523 23.0001 15.7161 22.9179 16.3278C22.8297 16.9833 22.631 17.6117 22.1213 18.1213C21.6117 18.631 20.9833 18.8297 20.3278 18.9179C19.7161 19.0001 18.9523 19.0001 18.0658 19L13.0623 19C12.4833 19 12.3717 19.0077 12.2745 19.0335C12.1772 19.0593 12.0765 19.1081 11.5738 19.3953L5.49614 22.8682C5.18664 23.0451 4.80639 23.0438 4.49808 22.8649C4.18976 22.686 4 22.3565 4 22V19C2.34315 19 1 17.6569 1 16V6C1 5.97799 1 5.95604 1 5.93417C0.999953 5.04769 0.99991 4.28387 1.08215 3.67221C1.17028 3.0167 1.36902 2.38835 1.87868 1.87868C2.38835 1.36902 3.0167 1.17028 3.67221 1.08215C4.28387 0.99991 5.04769 0.999953 5.93417 1ZM18 1C18.3702 1 18.7101 1.20452 18.8835 1.53159L20.1256 3.87439L22.4684 5.1165C22.7955 5.2899 23 5.62981 23 6C23 6.3702 22.7955 6.71011 22.4684 6.88351L20.1256 8.12562L18.8835 10.4684C18.7101 10.7955 18.3702 11 18 11C17.6298 11 17.2899 10.7955 17.1165 10.4684L15.8744 8.12562L13.5316 6.88351C13.2045 6.71011 13 6.3702 13 6C13 5.62981 13.2045 5.2899 13.5316 5.1165L15.8744 3.87439L17.1165 1.53159C17.2899 1.20452 17.6298 1 18 1ZM18 4.13485L17.4976 5.08249C17.4039 5.25927 17.2593 5.40386 17.0825 5.49758L16.1348 6L17.0825 6.50243C17.2593 6.59615 17.4039 6.74074 17.4976 6.91752L18 7.86516L18.5024 6.91752C18.5961 6.74074 18.7407 6.59615 18.9175 6.50243L19.8652 6L18.9175 5.49758C18.7407 5.40386 18.5961 5.25927 18.5024 5.08249L18 4.13485ZM10 9H5V7H10V9ZM14 14H5V12H14V14Z"
                          fill="#2D15FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="justify-start text-black sm:text-xl font-bold f leading-loose">
                      Personalized Advisory
                    </div>
                    <div className="justify-start text-text-color-text-secondary text-base font-normal leading-normal">
                      Strategic recommendations to improve attractiveness to
                      Muslim travelers globally
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4 p-6 bg-custom-white-cr">
                  <div className="p-2 inline-flex justify-start items-center bg-navy-blue-50 ">
                    <div
                      data-style="Outlined"
                      className="min-w-6 min-h-6 p-2 relative overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11 8.5C11 6.84315 12.3431 5.5 14 5.5C15.6569 5.5 17 6.84315 17 8.5C17 10.1569 15.6569 11.5 14 11.5C12.3431 11.5 11 10.1569 11 8.5ZM14 7.5C13.4477 7.5 13 7.94772 13 8.5C13 9.05228 13.4477 9.5 14 9.5C14.5523 9.5 15 9.05228 15 8.5C15 7.94772 14.5523 7.5 14 7.5Z"
                          fill="#2D15FF"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 9.5C6.34315 9.5 5 10.8431 5 12.5C5 14.1569 6.34315 15.5 8 15.5C9.65685 15.5 11 14.1569 11 12.5C11 10.8431 9.65685 9.5 8 9.5ZM7 12.5C7 11.9477 7.44772 11.5 8 11.5C8.55228 11.5 9 11.9477 9 12.5C9 13.0523 8.55228 13.5 8 13.5C7.44772 13.5 7 13.0523 7 12.5Z"
                          fill="#2D15FF"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1 12.5C1 6.42487 5.92487 1.5 12 1.5C18.0751 1.5 23 6.42487 23 12.5C23 13.7444 22.7927 14.7497 22.406 15.7271C21.8292 17.1853 20.3706 17.9158 18.9886 17.9283L13.982 17.9732C13.4163 17.9783 13.0568 18.205 12.8959 18.4238C12.7598 18.6089 12.6836 18.8912 12.9018 19.3062C13.3703 20.1976 13.894 21.0551 14.2205 21.5898C14.285 21.6953 14.342 21.7886 14.3891 21.8667C14.5614 22.1523 14.5799 22.505 14.4386 22.8071C14.2972 23.1092 14.0145 23.3209 13.6849 23.3716C13.135 23.4562 12.5723 23.5 12 23.5C5.92487 23.5 1 18.5751 1 12.5ZM12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.415 6.93987 21.4098 11.8337 21.4985C11.606 21.1079 11.362 20.6755 11.1314 20.2367C10.5836 19.1944 10.6625 18.085 11.2846 17.239C11.8818 16.4268 12.8835 15.983 13.9641 15.9733L18.9706 15.9283C19.7327 15.9215 20.3344 15.5271 20.5462 14.9915C20.839 14.2513 21 13.4959 21 12.5C21 7.52944 16.9706 3.5 12 3.5Z"
                          fill="#2D15FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="justify-start text-black sm:text-xl font-bold leading-loose">
                      Design Coordination & Progress Review
                    </div>
                    <div className="justify-start text-text-color-text-secondary text-base font-normal leading-normal">
                      Strategic recommendations to improve attractiveness to
                      Muslim travelers globally
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-4 p-6 bg-custom-white-cr">
                  <div className="p-2 inline-flex justify-start items-center bg-navy-blue-50 ">
                    <div
                      data-style="Outlined"
                      className="min-w-6 min-h-6 p-2 relative overflow-hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.0001 3.5C11.4478 3.5 11.0001 3.94772 11.0001 4.5C11.0001 5.05228 11.4478 5.5 12.0001 5.5C12.5524 5.5 13.0001 5.05228 13.0001 4.5C13.0001 3.94772 12.5524 3.5 12.0001 3.5ZM9.00009 4.5C9.00009 2.84315 10.3432 1.5 12.0001 1.5C13.6569 1.5 15.0001 2.84315 15.0001 4.5C15.0001 6.15685 13.6569 7.5 12.0001 7.5C10.3432 7.5 9.00009 6.15685 9.00009 4.5ZM7.62556 7.03488C6.12955 8.23413 5.13876 10.0314 5.01357 12.0616L3.01736 11.9384C3.1786 9.32382 4.45592 7.01247 6.37462 5.47438L7.62556 7.03488ZM18.9866 12.0616C18.8614 10.0314 17.8706 8.23413 16.3746 7.03488L17.6256 5.47438C19.5443 7.01247 20.8216 9.32382 20.9828 11.9384L18.9866 12.0616ZM8.79175 10.5996C9.33092 9.36559 10.5633 8.5 12.0001 8.5C13.4369 8.5 14.6692 9.36559 15.2084 10.5996L13.3757 11.4004C13.1433 10.8685 12.6136 10.5 12.0001 10.5C11.3865 10.5 10.8568 10.8685 10.6245 11.4004L8.79175 10.5996ZM4.50009 15.5C3.94781 15.5 3.50009 15.9477 3.50009 16.5C3.50009 17.0523 3.94781 17.5 4.50009 17.5C5.05238 17.5 5.50009 17.0523 5.50009 16.5C5.50009 15.9477 5.05238 15.5 4.50009 15.5ZM1.50009 16.5C1.50009 14.8431 2.84324 13.5 4.50009 13.5C6.15695 13.5 7.50009 14.8431 7.50009 16.5C7.50009 18.1569 6.15695 19.5 4.50009 19.5C2.84324 19.5 1.50009 18.1569 1.50009 16.5ZM19.5001 15.5C18.9478 15.5 18.5001 15.9477 18.5001 16.5C18.5001 17.0523 18.9478 17.5 19.5001 17.5C20.0524 17.5 20.5001 17.0523 20.5001 16.5C20.5001 15.9477 20.0524 15.5 19.5001 15.5ZM16.5001 16.5C16.5001 14.8431 17.8432 13.5 19.5001 13.5C21.1569 13.5 22.5001 14.8431 22.5001 16.5C22.5001 18.1569 21.1569 19.5 19.5001 19.5C17.8432 19.5 16.5001 18.1569 16.5001 16.5ZM8.50082 18.5641C9.52941 19.1591 10.7234 19.5 12.0001 19.5C13.2768 19.5 14.4708 19.1591 15.4994 18.5641L16.5008 20.2953C15.176 21.0617 13.6377 21.5 12.0001 21.5C10.3625 21.5 8.82417 21.0617 7.49937 20.2953L8.50082 18.5641ZM1.29175 22.5996C1.83092 21.3656 3.0633 20.5 4.50008 20.5C5.93686 20.5 7.16923 21.3656 7.70841 22.5996L5.8757 23.4004C5.64332 22.8685 5.11362 22.5 4.50008 22.5C3.88654 22.5 3.35683 22.8685 3.12445 23.4004L1.29175 22.5996ZM16.2917 22.5996C16.8309 21.3656 18.0633 20.5 19.5001 20.5C20.9369 20.5 22.1692 21.3656 22.7084 22.5996L20.8757 23.4004C20.6433 22.8685 20.1136 22.5 19.5001 22.5C18.8865 22.5 18.3568 22.8685 18.1245 23.4004L16.2917 22.5996Z"
                          fill="#2D15FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="justify-start text-black sm:text-xl font-bold leading-loose">
                      <span className="block md:hidden lg:block">
                        Implementation & Monitoring
                      </span>
                      <span className="hidden md:block lg:hidden">
                        Implementation &<br />
                        Monitoring
                      </span>
                    </div>

                    <div className="justify-start text-text-color-text-secondary text-base font-normal leading-normal">
                      Strategic recommendations to improve attractiveness to
                      Muslim travelers globally
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col bg-gradient-to-r from-blue-600 to-navy-blue-600 justify-center items-center">
          <div className="max-w-[1440px] px-6 lg:px-8 w-full sm:py-16 py-12 flex sm:flex-row flex-col gap-5 justify-between items-end">
            <div className="sm:w-[80%] w-full flex flex-col gap-4">
              <p className="sm:text-desktop-heading-4 text-mobile-heading-4 font-bold text-white">
                Book a call with our experts
              </p>
              <p className="text-white sm:text-desktop-body-2 text-mobile-body-2">
                Discuss your needs with our specialists — from halal travel
                research insights to tailored consultancy, we’re here to support
                your goals
              </p>
            </div>
            <Link
              href="#"
              className="inline-block p-3 text-blue-600 text-center font-bold bg-white border border-gray-500/20 w-full sm:w-[20%]"
            >
              Set up call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

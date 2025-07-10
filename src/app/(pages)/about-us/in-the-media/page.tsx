"use client";
import { CardReports, Pagination } from "@/components/common";
import { inTheMedia } from "@/constants/dummyData";
import { useState } from "react";
export default function InTheMediaPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch data or update UI based on the new page
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section
        className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
        style={{
          backgroundImage:
            "url('/image/in-the-media/hero.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
          <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
            <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
              About Us
            </p>
            <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
              In the Media
            </h1>
            <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
              Media coverage and reports on CrescentRating and Halal/Muslim Travel Market
            </p>
          </div>
        </div>
      </section>
      <div className='mt-7 sm:mt-14 w-full flex flex-col gap-24 justify-center items-center'>
        <section className="max-w-[1440px] px-6 lg:px-8 w-full">
          <div className="flex flex-col justify-center items-center w-full gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
              {inTheMedia.map((report, index) => (
                <CardReports
                  id={report.id}
                  key={index}
                  title={report.title}
                  description={report.description}
                  imageUrl={report.imageUrl}
                  downloadUrl={report.link}
                  badgeDate="Jan 2025"
                  badgeLabel="In the Media"
                  buttonType="solid"
                  imgType="2"
                  imageBorder={false}
                  customImgHeight="lg:h-[300px] sm:h-[200px]  h-[150px]"
                  buttonContent={(
                    <>
                      <p>Read More</p> <svg xmlns="http://www.w3.org/2000/svg" color="white" width="19" height="19" viewBox="0 0 19 19" fill="white">
                        <path d="M7.77228 0.333253H8.66659V1.99992H7.83325C6.23835 1.99992 5.126 2.00169 4.28672 2.11453C3.47141 2.22414 3.03967 2.42464 2.73215 2.73215C2.42464 3.03967 2.22414 3.47141 2.11453 4.28672C2.00169 5.126 1.99992 6.23835 1.99992 7.83325V11.1666C1.99992 12.7615 2.00169 13.8738 2.11453 14.7131C2.22414 15.5284 2.42464 15.9602 2.73215 16.2677C3.03967 16.5752 3.47141 16.7757 4.28672 16.8853C5.126 16.9982 6.23835 16.9999 7.83325 16.9999H11.1666C12.7615 16.9999 13.8738 16.9982 14.7131 16.8853C15.5284 16.7757 15.9602 16.5752 16.2677 16.2677C16.5752 15.9602 16.7757 15.5284 16.8853 14.7131C16.9982 13.8738 16.9999 12.7615 16.9999 11.1666V10.3333H18.6666V11.2275C18.6666 12.7471 18.6666 13.9719 18.5371 14.9352C18.4027 15.9353 18.115 16.7774 17.4462 17.4462C16.7774 18.115 15.9353 18.4027 14.9352 18.5371C13.9719 18.6666 12.7471 18.6666 11.2275 18.6666H7.77231C6.25275 18.6666 5.02794 18.6666 4.06464 18.5371C3.06452 18.4027 2.22244 18.115 1.55364 17.4462C0.884846 16.7774 0.597186 15.9353 0.462724 14.9352C0.333212 13.9719 0.33323 12.7471 0.333253 11.2276V7.77228C0.33323 6.25275 0.333212 5.02793 0.462724 4.06464C0.597186 3.06452 0.884846 2.22244 1.55364 1.55364C2.22244 0.884846 3.06452 0.597186 4.06464 0.462724C5.02793 0.333212 6.25275 0.33323 7.77228 0.333253Z" />
                        <path d="M16.9999 3.17857V6.99993H18.6666L18.6666 2.78792C18.6666 2.43453 18.6667 2.09109 18.6286 1.80783C18.5857 1.4885 18.4811 1.1241 18.1784 0.82142C17.8757 0.51874 17.5113 0.414139 17.192 0.371205C16.9087 0.333122 16.5653 0.333189 16.2119 0.333258L11.9999 0.333264V1.99993H15.8215L8.91073 8.91073L10.0892 10.0892L16.9999 3.17857Z" />
                      </svg>
                    </>
                  )}
                />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

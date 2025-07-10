export default function HeadSection({ title, description, image, miniDesc }: { title: string, description: string, image: string, miniDesc: string }) {
    return (
        <section
            className="relative w-full px-6 lg:px-8 flex justify-center items-center flex-row bg-center"
            style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        >
            <div className="max-w-[1440px] sm:py-16 py-8 sm:px-6 lg:px-8 w-full flex sm:flex-row flex-col-reverse gap-5 ">
                <div className="flex w-full flex-col gap-5 justify-start items-start sm:mt-20 mt-10 text-white">
                    <p className=" text-left text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl">
                        {miniDesc}
                    </p>
                    <h1 className="text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative z-20 text-left w-full sm:w-[70%]">
                        {title}
                    </h1>
                    <p className="sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
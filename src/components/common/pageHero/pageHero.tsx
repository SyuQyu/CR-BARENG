import BreadCrumb from "../breadcrumb/breadcrumb";

interface PageHeroProps {
  title: string;
  description: string;
  subtitle?: string;
  backgroundImage?: string;
  alignment?: "left" | "center";
  variant?: "gradient" | "image";
  containerClassName?: string;
  contentClassName?: string;
  useBreadCrumbLinks?: boolean;
}

export default function PageHero({
  title,
  description,
  subtitle,
  backgroundImage,
  alignment = "center",
  variant = "gradient",
  containerClassName = "",
  contentClassName = "",
  useBreadCrumbLinks = true,
}: PageHeroProps) {
  const isLeftAligned = alignment === "left";
  const hasBackgroundImage = variant === "image" && backgroundImage;

  const sectionStyle = hasBackgroundImage
    ? {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  const sectionClasses = hasBackgroundImage
    ? "relative w-full px-10 lg:px-16 flex justify-center items-center flex-row bg-center"
    : "relative w-full px-10 lg:px-16 flex justify-center items-center flex-row bg-gradient-to-br from-blue-800 to-blue-600";

  const contentAlignment = isLeftAligned
    ? "justify-start items-start"
    : "justify-center items-center";

  const textAlignment = isLeftAligned ? "text-left" : "text-center";

  const marginTop = isLeftAligned ? "sm:mt-20 mt-10" : "";

  return (
    <section
      className={`${sectionClasses} ${containerClassName}`}
      style={sectionStyle}
    >
      <div className="max-w-[1440px] sm:pb-16 pb-8 sm:px-8 lg:px-16 w-full flex sm:flex-row flex-col-reverse gap-5">
        <div
          className={`flex w-full flex-col gap-5 ${contentAlignment} ${marginTop} text-white ${contentClassName}`}
        >
          {useBreadCrumbLinks && <BreadCrumb />}
          {subtitle && (
            <p
              className={`${textAlignment} text-mobile-body-3 md:text-mobile-body-2 lg:text-desktop-body-2 relative z-20 max-w-4xl`}
            >
              {subtitle}
            </p>
          )}
          <h1
            className={`text-mobile-heading-1 md:text-mobile-heading-1 lg:text-desktop-heading-1 font-bold bg-clip-text relative ${textAlignment} z-20 w-full sm:w-[70%]`}
          >
            {title}
          </h1>
          <p
            className={`sm:text-desktop-body-1 text-mobile-body-1 sm:w-[80%] w-full ${textAlignment}`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

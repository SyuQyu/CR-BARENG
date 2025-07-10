import clsx from "clsx";

export default function RatingCard({
    children,
    className = "bg-[#3B3660] min-h-[200px]",
    title,
    desc
}: any) {
    return (
        <div className="w-full flex flex-col h-full gap-5 bg-white shadow-lg rounded-lg">
            <div className={clsx("text-white w-full py-3 px-14 text-center rounded-b-[70px]", className)}>
                <p className="text-desktop-heading-6 font-bold">{title}</p>
                {desc && <p className="text-desktop-body-2">{desc}</p>}
            </div>
            <div className="w-full pb-6 flex flex-col gap-1 justify-center items-center">
                {children}
            </div>
        </div>
    )
}
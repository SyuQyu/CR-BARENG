import clsx from "clsx"

interface CardProps {
    className?: string
    title?: React.ReactNode
    children?: React.ReactNode
    style?: React.CSSProperties
    titlePostion?: string
}

export default function Card(
    {
        className,
        title,
        children,
        style,
        titlePostion = 'text-left'
    }: CardProps
) {
    return (
        <div className={clsx("w-full rounded-lg p-6 flex flex-col", className)}>
            <div className={clsx("text-desktop-body-1 font-bold", titlePostion)}>{title}</div>
            <>
                {children}
            </>
        </div>
    )
}
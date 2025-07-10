import { Checkbox } from "@/components/ui/checkbox";
interface CustomCheckboxProps {
    id: string;
    label: string | React.ReactNode;
}

export default function CheckBox({ id, label }: CustomCheckboxProps) {
    return (
        <div className="flex flex-row justify-center items-center gap-2">
            <Checkbox
                id={id}
                className="h-4 w-4 !rounded-none border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
                htmlFor={id}
                className="md:text-desktop-label-l text-desktop-label-s text-gray-600 leading-none"
            >
                {label}
            </label>
        </div>
    );
}
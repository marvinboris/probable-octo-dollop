import { CustomSelect } from "@/components";
import { Calendar } from "iconsax-react";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Applications() {
    const [mode, setMode] = React.useState("year");

    const { t } = useTranslation();

    return (
        <div className="bg-white border border-neutral-200 rounded-xl md:rounded-2xl xl:rounded-3xl p-3 md:p-5 xl:p-7 flex-1 flex flex-col">
            <div className="flex gap-2 md:gap-3 xl:gap-4">
                <div className="size-8 md:size-12 *:size-full">
                    <Icon />
                </div>

                <div>
                    <div className="font-bold text-xl md:text-2xl">
                        {t("Total applications")}
                    </div>
                    <div className="font-medium text-neutral-500 text-sm md:text-base">
                        {t("Applicants")}
                    </div>
                </div>

                <div className="ml-auto">
                    <CustomSelect
                        addon={
                            <div className="mx-1.5 md:mx-3">
                                <Calendar className="hidden md:block" />
                            </div>
                        }
                        value={mode}
                        onChange={setMode}
                        options={[
                            {
                                value: "year",
                                label: "Year - " + new Date().getFullYear(),
                            },
                        ]}
                    />
                </div>
            </div>

            <div className="flex-1">
                <Chart
                    className="w-full"
                    percentages={[0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0]}
                />
            </div>
        </div>
    );
}

function Chart({
    percentages,
    ...props
}: React.ComponentProps<"svg"> & { percentages: number[] }) {
    const currentMonth = moment().month();

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const maxHeight = 100; // Maximum height for the bars

    return (
        <svg
            width="494"
            height="176"
            viewBox="0 0 494 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {/* Render months */}
            {months.map((month, index) => (
                <text
                    key={month}
                    x={40 * index + 20} // Position the text evenly
                    y={170} // Position the text at the bottom
                    fontSize="12"
                    textAnchor="middle"
                    className="fill-black"
                >
                    {month}
                </text>
            ))}

            {/* Render bars */}
            {percentages.map((percentage, index) => (
                <rect
                    key={index}
                    x={40 * index + 10} // Position the bars evenly
                    y={maxHeight - (percentage / 100) * maxHeight + 50} // Dynamic y position based on percentage
                    width="24"
                    height={(percentage / 100) * maxHeight} // Dynamic height based on percentage
                    rx="5" // Top border radius
                    className={
                        index === currentMonth
                            ? "fill-like"
                            : "fill-black/5 transition-all duration-100 hover:fill-like"
                    }
                />
            ))}
        </svg>
    );
}

function Icon() {
    return (
        <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.1">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.62553 23.2246H18.2096V38.5603H8.62553C7.56622 38.5603 6.70834 37.7005 6.70834 36.643V25.1419C6.70834 24.0825 7.56622 23.2246 8.62553 23.2246Z"
                    stroke="#00890E"
                    strokeWidth="2.875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.2905 15.5598H29.7064V38.5605H39.2905C40.3498 38.5605 41.2077 37.7026 41.2077 36.6451V17.477C41.2077 16.4177 40.3498 15.5598 39.2905 15.5598Z"
                    stroke="#00890E"
                    strokeWidth="2.875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.7924 7.89314H20.1256C19.0662 7.89314 18.2083 8.75104 18.2083 9.81032V38.5624H29.7095V9.81032C29.7095 8.75104 28.8516 7.89314 27.7924 7.89314Z"
                    stroke="#00890E"
                    strokeWidth="2.875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

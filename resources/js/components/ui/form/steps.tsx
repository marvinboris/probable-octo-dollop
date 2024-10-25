import { cn } from "@/utils";
import React from "react";

export function FormSteps({
    options,
    active,
}: {
    options: React.ReactNode[];
    active: number;
}) {
    return options.map((option, index) => (
        <div
            key={"step-step-" + index}
            className={
                active !== index + 1
                    ? "absolute opacity-0 inset-0 -z-10"
                    : "grid md:grid-cols-2 xl:grid-cols-3 md:col-span-2 xl:col-span-3 gap-1.5 md:gap-2.5 xl:gap-x-3.5 gap-y-3 md:gap-y-5 xl:gap-y-7"
            }
        >
            {option}
        </div>
    ));
}

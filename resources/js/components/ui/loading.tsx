import React from "react";
import { cn } from "../../utils";
import { Transition } from "./transition";

export function Loading({
    relative,
    show = true,
    white,
    className,
    ...props
}: {
    relative?: boolean;
    show?: boolean;
    white?: boolean;
} & React.ComponentProps<"div">) {
    return (
        <Transition show={show}>
            <div
                {...props}
                className={cn(
                    relative ? "relative" : "absolute inset-0",
                    "z-10 flex items-center justify-center",
                    className
                )}
            >
                <div
                    className={cn(
                        white
                            ? "size-4 md:size-5 border md:border-2 border-white border-t-white/20"
                            : "size-20 md:size-24 border-4 md:border-[7px] border-primary border-t-primary/20",
                        "animate-spin rounded-full"
                    )}
                />
            </div>
        </Transition>
    );
}

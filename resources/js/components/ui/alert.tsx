import { Transition } from "./transition";
import { cn } from "@/utils";
import { Message } from "@types";
import { CloseCircle } from "iconsax-react";
import React from "react";

type AlertProps = React.ComponentProps<"div"> & {
    color?: Message["type"];
    sticky?: boolean;
    fixed?: boolean;
    closable?: boolean;
    autoDisappear?: boolean;
};

let timer: NodeJS.Timeout;

export function Alert({
    color = "info",
    sticky,
    fixed,
    closable,
    autoDisappear,
    ...props
}: AlertProps) {
    const [disappearing, setDisappearing] = React.useState(false);
    const [show, setShow] = React.useState(true);

    React.useEffect(() => {
        setShow(true);
        clearTimeout(timer);

        if (autoDisappear) {
            setDisappearing(true);
            timer = setTimeout(() => {
                setShow(false);
                setDisappearing(false);
            }, 30000);
        }
        return () => clearTimeout(timer);
    }, [color, props.children]);

    if (!props.children) return null;
    return (
        <Transition show={show}>
            <div
                {...props}
                className={cn(
                    "py-2 px-4 font-medium rounded flex items-center gap-3",
                    {
                        info: "border border-cyan-200 bg-cyan-100 text-cyan-600",
                        danger: "border border-rose-200 bg-rose-100 text-rose-600",
                        success:
                            "border border-emerald-200 bg-emerald-100 text-emerald-600",
                        warning:
                            "border border-amber-200 bg-amber-100 text-amber-600",
                    }[color],
                    { "absolute bottom-4 left-1/2 -translate-x-1/2": sticky },
                    { "fixed top-7 left-1/2 -translate-x-1/2 z-[100]": fixed },
                    props.className
                )}
            >
                {props.children}

                <Transition show={closable}>
                    <button
                        type="button"
                        role="button"
                        className="ml-auto text-sm font-semibold text-gray-500 hover:text-gray-700"
                        onClick={() => {
                            setShow(false);
                            setDisappearing(false);
                        }}
                    >
                        <CloseCircle variant="Bold" className="size-5" />
                    </button>
                </Transition>

                <Transition show={autoDisappear}>
                    <div className="absolute z-[100] inset-x-0 bottom-0 h-1">
                        <div
                            className={cn(
                                "bg-black/10 h-full transition-all ease-linear duration-[30000ms]",
                                disappearing ? "w-full" : "w-0"
                            )}
                        />
                    </div>
                </Transition>
            </div>
        </Transition>
    );
}

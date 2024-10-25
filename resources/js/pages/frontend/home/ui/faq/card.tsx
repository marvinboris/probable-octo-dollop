import { Transition } from "@/components";
import { cn } from "@/utils";
import { FAQ } from "@types";
import { Add, Minus } from "iconsax-react";

export default function Card({
    index,
    question,
    selected,
    answer,
    onClick,
}: FAQ & { index: number; selected?: boolean; onClick?: () => void }) {
    return (
        <div
            className={cn({
                "bg-primary/5": selected,
            })}
        >
            <div
                className={cn(
                    "py-4 pl-4 lg:pl-8 pr-4 lg:pr-11 border-b-2 border-neutral-200 flex gap-3 lg:gap-6 cursor-pointer"
                )}
                onClick={onClick}
            >
                <div className="font-bold text-xl">{index + 1}.</div>
                <div className={cn("lg:text-lg", { "font-bold": selected })}>
                    {question}
                </div>
                <div
                    className={cn(
                        "self-center ml-auto",
                        selected ? "text-primary" : "text-neutral-200"
                    )}
                >
                    {selected ? (
                        <Minus variant="Bulk" className="size-5" />
                    ) : (
                        <Add variant="Bulk" className="size-5" />
                    )}
                </div>
            </div>

            <Transition show={selected}>
                <div>
                    <div className="p-4 lg:text-lg">{answer}</div>
                </div>
            </Transition>
        </div>
    );
}

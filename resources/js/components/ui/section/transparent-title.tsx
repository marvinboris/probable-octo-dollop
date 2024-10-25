import { cn } from "@/utils";
import Marquee from "react-fast-marquee";

export function TransparentTitle({
    className,
    children,
    ...props
}: React.ComponentProps<"h2">) {
    return (
        <h2
            className={cn(
                "text-[200px]/none hidden lg:block font-bold opacity-[0.02]",
                className
            )}
            {...props}
        >
            <Marquee>{children}</Marquee>
        </h2>
    );
}

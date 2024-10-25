import { cn } from "@/utils";

export function SectionTitle({
    className,
    big,
    user,
    ...props
}: React.ComponentProps<"h3"> & { big?: boolean; user?: boolean }) {
    return (
        <h3
            className={cn(
                "font-bold *:text-primary text-center lg:text-left",
                big
                    ? "text-5xl/tight lg:text-[90px]/tight"
                    : user
                    ? "text-2xl/tight lg:text-4xl"
                    : "text-4xl/tight lg:text-6xl/tight",
                className
            )}
            {...props}
        />
    );
}

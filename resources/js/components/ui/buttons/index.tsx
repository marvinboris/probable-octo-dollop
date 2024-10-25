import React from "react";

import { cn } from "../../../utils";

import "./button.css";
import { Loading } from "../loading";

type Common = {
    color?:
        | "primary"
        | "secondary"
        | "whatsapp"
        | "telegram"
        | "skype"
        | "like"
        | "dislike"
        | "outline-primary"
        | "outline-secondary"
        | "white"
        | "light"
        | "red"
        | "outline-red"
        | "slate"
        | "link"
        | "link-secondary";
    size?: "sm" | "md" | "lg" | "xl";
    loading?: boolean;
};

type Div = React.ComponentProps<"div"> & {
    div: true;
};

type Button = Omit<React.ComponentProps<"button">, "color">;

type Props = Common & (Div | Button);

export function Button({
    color = "primary",
    size = "md",
    className: classicClassName,
    loading,
    children,
    ...props
}: Props) {
    const type = "div" in props ? undefined : props.type || "button";
    const className = cn(`btn btn-${color} btn-${size}`, classicClassName);
    const child = loading ? <Loading white /> : children;

    if ("div" in props) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { div, ...rest } = props;
        return (
            <div {...rest} className={className}>
                {child}
            </div>
        );
    }

    return (
        <button role="button" {...props} type={type} className={className}>
            {child}
        </button>
    );
}

export * from "./add";
export * from "./icon";
export * from "./view";

import { useTranslation } from "react-i18next";
import Item from "./item";
import { Menu } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils";
import { Transition } from "@/components";

export default function Nav() {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <nav className="flex flex-col lg:flex-row lg:items-center gap-3.5 font-semibold">
            <Item exact href="/">
                {t("Home")}
            </Item>
            <Item href="/about">About us</Item>
            <Item href="/services">{t("Services")}</Item>
            <Item href="/contact">{t("Contact")}</Item>
        </nav>
    );
}

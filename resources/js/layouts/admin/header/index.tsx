import { LanguageSelector } from "@/components";
import { useLayoutAdminContext } from "../context";
import { Menu, Setting } from "iconsax-react";
import Messages from "./messages";
import Notifications from "./notifications";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Header() {
    const { menus, setOpen } = useLayoutAdminContext();

    const { t } = useTranslation();

    const location = useLocation();

    const [title, setTitle] = React.useState<string>();
    const [subtitle, setSubtitle] = React.useState<string>();

    React.useEffect(() => {
        const [title, subtitle] = menus[location.pathname];
        setTitle(title);
        setSubtitle(subtitle);
    }, [location.pathname]);

    return (
        <header className="bg-white border-b border-neutral-200 h-20 md:h-24 xl:h-28 px-4 md:px-8 xl:px-12 flex items-center">
            <div className="md:hidden mr-2">
                <Menu
                    variant="Bulk"
                    onClick={() => setOpen(true)}
                    className="size-8 text-primary cursor-pointer"
                />
            </div>

            <div>
                <h1 className="font-bold text-xl md:text-2xl">{title}</h1>

                <h2 className="font-medium text-sm md:text-base">{subtitle}</h2>
            </div>

            <div className="ml-auto hidden md:block">
                <LanguageSelector />
            </div>

            <div className="ml-auto md:ml-8 xl:ml-12 flex items-center gap-5">
                <Messages />

                <Notifications />
            </div>

            <div className="hidden md:block md:mr-4 xl:mr-5 md:ml-7 xl:ml-8 w-1 h-12 rounded-full bg-neutral-200" />

            <div className="hidden md:block">
                <div className="font-bold text-lg">{t("My account")}</div>
                <div className="font-semibold text-neutral-500">
                    {t("Admin")}
                </div>
            </div>

            <button className="ml-6 md:ml-4 size-10 md:size-14 rounded-xl bg-primary text-white flex justify-center items-center">
                <Setting className="size-5 md:size-6" />
            </button>
        </header>
    );
}

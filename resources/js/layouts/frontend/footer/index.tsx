import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Whatsapp from "./icons/whatsapp";
import { Button, Logo } from "@/components";
import { fetch } from "@/services";
import { Subscriber } from "@types";
import FooterTitle from "./title";
import { Call, Location, Message } from "iconsax-react";
import { Link, useLocation } from "react-router-dom";
import { Send } from "react-iconly";
import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const emailRef = React.useRef<HTMLInputElement>(null);

    const [loading, setLoading] = React.useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get("email") as string;
        if (!email) return;

        const handle = async () => {
            setLoading(true);

            try {
                const subscriber = await fetch<Subscriber>({
                    resource: "subscribers",
                    method: "POST",
                    data: { id: Math.random().toString(), email },
                });

                if (subscriber && emailRef.current) emailRef.current.value = "";
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };

        handle();
    };

    return (
        <footer className="bg-zinc-800 text-white divide-y divide-neutral-200">
            <div className="container-auto flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-10 pt-9 pb-14">
                <div className="flex-1">
                    <Logo white />
                </div>
                <div>
                    <FooterTitle>{t("Important links")}</FooterTitle>
                    <div className="mt-7 *:flex *:items-center *:gap-2 *:before:h-px *:before:w-2 *:before:bg-white *:before:rounded-full">
                        <Link to="/">{t("Home")}</Link>
                        <Link to="/services">{t("Services")}</Link>
                        <Link to="/conatact">{t("Contact")}</Link>
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <FooterTitle>{t("Contact us")}</FooterTitle>
                        <div className="mt-7">
                            <div className="flex items-center gap-2.5">
                                <Message className="size-5" />
                                <a href="mailto:contact@tctyping.com">
                                    contact@tctyping.com
                                </a>
                            </div>

                            <div className="flex gap-2.5 mt-3">
                                <Call className="size-5" />
                                <a href="tel:+971040911133">+971 04 091 1133</a>
                            </div>

                            <div className="flex gap-2.5 mt-3">
                                <Call className="size-5" />
                                <a href="tel:+971548232323">+971 54 823 2323</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <FooterTitle>{t("Find us on Gmaps")}</FooterTitle>

                    <div className="mt-7">
                        <iframe
                            title="Localisation"
                            className="h-40 w-full bg-white rounded-2xl"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className="container-auto flex flex-col lg:flex-row items-center gap-4 py-4">
                    <div className="*:font-medium text-center lg:text-left">
                        <span>Copyright 2024 |</span> .{" "}
                        {t("All Rights Reserved")} <span>|</span> {t("Made by")}{" "}
                        <span>Briluce Services</span>
                    </div>

                    <div className="lg:ml-auto flex gap-3.5 *:rounded-full *:size-11 *:bg-primary *:flex *:items-center *:justify-center *:*:size-6">
                        <div>
                            <Facebook />
                        </div>
                        <div>
                            <Instagram />
                        </div>
                        <div>
                            <Whatsapp />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

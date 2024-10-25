import { Add, ArrowDown2, Briefcase, SearchNormal1 } from "iconsax-react";
import Right from "./right";
import { Button } from "@/components";
import Avatar from "./avatar";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import React from "react";

export default function Banner() {
    const { t } = useTranslation();

    return (
        <div className="pt-8 lg:pt-32 pb-24 lg:pb-32 container-auto flex flex-col lg:flex-row relative overflow-clip lg:overflow-visible">
            <div className="order-2 lg:order-1">
                <h1 className="font-bold text-3xl/tight lg:text-6xl/tight text-center lg:text-left *:text-primary">
                    All your typing services in <span>one single place</span>
                </h1>

                <p className="lg:w-3/5 mt-5 text-lg lg:text-xl text-center lg:text-left">
                    We take our job seriously. All our clients are satisfied
                    with our services.
                </p>

                <div className="mt-10 lg:mt-7 flex items-center justify-center lg:justify-start gap-4 lg:gap-0">
                    <div className="flex justify-end *:h-16 *:object-contain gap-3">
                        <img src="/images/6c96e8ae3f379574490548ba2e6b06b7.png" />
                        <img src="/images/99d8f431166d561fc1e77d631753a076.png" />
                        <img src="/images/4163163a8574211d4b643dabfc7be87a.png" />
                        <img src="/images/16a8cf12e9698b2ec37f189f27a1d936.png" />
                        <img src="/images/ea7e8b84e212f81b328b5f508ed8a346.png" />
                        <img src="/images/729472bcee3cc43e25e51c4c22c92a57.png" />
                    </div>
                </div>

                <div className="flex flex-col justify-center lg:justify-start lg:items-center sm:flex-row gap-3 lg:gap-6 mt-10 *:*:w-full">
                    <Link to="/services">
                        <Button size="xl" div>
                            <SearchNormal1 className="size-6" />
                            <span>{t("Our services")}</span>
                        </Button>
                    </Link>

                    <p className="text-body flex-1 sm:flex-none lg:flex-1">
                        <Trans i18nKey="More than <2>12000</2> users<br />trust our website">
                            More than <span className="font-bold">12000</span>{" "}
                            users
                            <br />
                            trust our website
                        </Trans>
                    </p>
                </div>
            </div>

            <Right />
        </div>
    );
}

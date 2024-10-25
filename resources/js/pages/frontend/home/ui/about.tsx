import {
    Button,
    Polygon1,
    Section,
    SectionTitle,
    TransparentTitle,
} from "@/components";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <Section id="about" className="overflow-clip lg:overflow-visible">
            <TransparentTitle className="text-center">
                {t("About")}
            </TransparentTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mt-24">
                <div className="order-1 lg:order-2">
                    <Polygon1 />
                </div>

                <div className="order-2 lg:order-1">
                    <SectionTitle>
                        <Trans i18nKey="About <1>us</1>">
                            About <span>us</span>
                        </Trans>
                    </SectionTitle>

                    <div className="lg:text-lg text-body space-y-4 mt-4">
                        <p>
                            <Trans i18nKey="Home/About/1">
                                <span className="font-bold">
                                    INTERIM PRO RH
                                </span>{" "}
                                is a company founded by a group of executives
                                from various sectors of activity confronted with
                                human resources issues throughout their
                                different careers.
                            </Trans>
                        </p>

                        <p>
                            <Trans i18nKey="Home/About/2">
                                <span className="font-bold">
                                    INTERIM PRO RH
                                </span>{" "}
                                aims to establish itself as a leading supplier
                                of employees for various organizations
                                regardless of their sector of activity.
                            </Trans>
                        </p>
                    </div>

                    <div className="mt-8 lg:mt-20 text-center lg:text-left">
                        <Link to="/about">
                            <Button size="xl" div>
                                <span>{t("Read more")}</span>
                                <ArrowRight className="size-6" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}

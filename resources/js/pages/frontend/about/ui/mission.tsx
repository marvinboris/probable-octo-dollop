import { Button, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight, TickCircle } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Mission() {
    const { t } = useTranslation();

    return (
        <div className="overflow-x-clip relative">
            <Section>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-24">
                    <div>
                        <SectionTitle>
                            <Trans i18nKey="Our <1>mission</1>">
                                Our <span>mission</span>
                            </Trans>
                        </SectionTitle>

                        <ul className="mt-4 lg:mt-9 lg:space-y-2.5">
                            <Li>{t("About/Mission/1")}</Li>
                            <Li>{t("About/Mission/2")}</Li>
                            <Li>{t("About/Mission/3")}</Li>
                            <Li>{t("About/Mission/4")}</Li>
                        </ul>

                        <div className="mt-8 lg:mt-20 text-center lg:text-left">
                            <Link to="/contact">
                                <Button size="xl" div>
                                    <span>
                                        <Trans i18nKey="Contact <1>us</1>">
                                            Contact <span>us</span>
                                        </Trans>
                                    </span>
                                    <ArrowRight className="size-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative lg:static h-[320px] lg:h-auto">
                        <Polygon1
                            mainSrc="/images/mission-1.png"
                            subSrc="/images/mission-2.png"
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
}

function Li({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-center gap-3">
            <TickCircle className="size-5 text-primary" />
            <div>{children}</div>
        </li>
    );
}

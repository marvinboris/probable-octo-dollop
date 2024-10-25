import { Button, Section, SectionTitle, TransparentTitle } from "@/components";
import Polygon from "./polygon";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Accompaniement() {
    const { t } = useTranslation();

    return (
        <div className="overflow-clip mt-24 lg:mt-0">
            <Section>
                <TransparentTitle className="ml-56">
                    {t("Accompaniement")}
                </TransparentTitle>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 lg:mt-14">
                    <div className="order-2 lg:order-1 relative lg:static h-[320px] lg:h-auto">
                        <Polygon className="h-full absolute lg:static scale-125 lg:scale-100 mt-6 lg:mt-0 top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:translate-y-0" />
                    </div>

                    <div className="order-1 lg:order-2 lg:pt-12">
                        <SectionTitle>
                            Nous vous <br />
                            <span>accompagnons</span>
                        </SectionTitle>

                        <div className="lg:text-lg text-justify text-body space-y-4 mt-4 lg:mt-6">
                            <p>
                                {t("Home/Accompaniement")}
                            </p>
                        </div>

                        <div className="mt-8 lg:mt-20 text-center lg:text-left">
                            <Link to="/trainings">
                                <Button size="xl" div>
                                    <span>{t("View more")}</span>
                                    <ArrowRight className="size-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}

import { Button, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Vision() {
    const { t } = useTranslation();

    return (
        <div className="overflow-x-clip relative">
            <Section>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 py-24">
                    <div className="relative lg:static h-[320px] lg:h-auto order-2 lg:order-1">
                        <Polygon1
                            mainSrc="/images/vision-1.png"
                            subSrc="/images/vision-2.png"
                        />
                    </div>

                    <div className="order-1 lg:order-2">
                        <SectionTitle>
                            <Trans i18nKey="Our <1>vision</1>">
                                Our <span>vision</span>
                            </Trans>
                        </SectionTitle>

                        <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                            <p>{t("About/Vision")}</p>
                        </div>

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
                </div>
            </Section>
        </div>
    );
}

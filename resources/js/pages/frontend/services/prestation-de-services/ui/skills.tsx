import { Button, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";

export default function Skills() {
    const { t } = useTranslation();

    return (
        <div className="overflow-clip relative">
            <Section>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-24">
                    <div>
                        <SectionTitle>
                            <Trans i18nKey="Assessment of <br />skills<br />(Professions and Cognitive)">
                                Assessment of <br />
                                skills
                                <br />
                                (Professions and Cognitive)
                            </Trans>
                        </SectionTitle>

                        <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                            <ul className="list-disc list-inside">
                                <li>{t("Services/HR/1")}</li>
                                <li>{t("Services/HR/2")}</li>
                                <li>{t("Services/HR/3")}</li>
                                <li>{t("Services/HR/4")}</li>
                                <li>{t("Services/HR/5")}</li>
                            </ul>
                        </div>

                        <div className="mt-8 lg:mt-20 text-center lg:text-left">
                            <Button size="xl">
                                <span>{t("Contact us")}</span>
                                <ArrowRight className="size-6" />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <Polygon1 />
                    </div>
                </div>
            </Section>
        </div>
    );
}

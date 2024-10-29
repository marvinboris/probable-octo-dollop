import {
    Button,
    Polygon1,
    Section,
    SectionTitle,
    TransparentTitle,
} from "@/components";
import { ArrowRight } from "iconsax-react";
import { useTranslation } from "react-i18next";

export default function Recruitment() {
    const { t } = useTranslation();

    return (
        <div className="overflow-clip relative">
            <Section>
                <TransparentTitle className="absolute top-0 bottom-0 translate-x-1/2 truncate">
                    01
                </TransparentTitle>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-24">
                    <div>
                        <SectionTitle>{t("Recruitment")}</SectionTitle>

                        <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                            <p>{t("Services/Recruitment")}</p>
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

import { Loading, Section, SectionTitle, TransparentTitle } from "@/components";
import { useFaq } from "@/hooks";
import { FAQ } from "@types";
import React from "react";
import Card from "./card";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";

export default function Faq() {
    const { t } = useTranslation();

    const { data: faq, loading } = useFaq();
    const [selected, setSelected] = React.useState<FAQ>();
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        if (faq?.length) setSelected(faq[0]);
    }, [faq]);

    if (loading) return <Loading />;
    return (
        <div className="relative pt-24">
            <TransparentTitle className="absolute top-0 right-0">
                {t("FAQ")}
            </TransparentTitle>

            <Section>
                <SectionTitle big className="text-center lg:text-left">
                    <Trans i18nKey="Frequently <br /> <2>asked questions</2>">
                        Frequently
                        <br />
                        <span>asked questions</span>
                    </Trans>
                </SectionTitle>

                <div className="mt-4 lg:mt-14 gap-x-4 lg:gap-x-14 grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        {faq?.map((faq, index) => (
                            <Card
                                key={"faq-card-" + faq.id + "-" + index}
                                index={index}
                                selected={selected?.id === faq.id}
                                onClick={() => {
                                    setSelected(faq);
                                    setCurrentIndex(index);
                                }}
                                {...faq}
                            />
                        ))}
                    </div>

                    <div className="hidden lg:block rounded-lg bg-primary/5 pt-4 lg:pt-10 px-4 lg:px-12 pb-6 relative">
                        <div className="absolute bottom-4 right-4 text-base font-bold">
                            {currentIndex + 1}/{faq?.length}
                        </div>

                        <div className="text-lg font-bold">
                            {selected?.question}
                        </div>

                        <div className="h-px mt-4 lg:mt-9 mb-4 lg:mb-6 bg-neutral-200" />

                        <div className="lg:text-lg">
                            {selected?.answer}
                        </div>
                    </div>

                    <div className="mt-8 flex gap-6 justify-center lg:justify-start">
                        <button
                            role="button"
                            aria-label={t("Previous")}
                            className="size-11 flex items-center justify-center rounded-full bg-primary/10 text-primary"
                        >
                            <ArrowLeft className="size-4" />
                        </button>
                        <button
                            role="button"
                            aria-label={t("Next")}
                            className="size-11 flex items-center justify-center rounded-full bg-primary text-white"
                        >
                            <ArrowRight className="size-4" />
                        </button>
                    </div>
                </div>
            </Section>
        </div>
    );
}

import { Loading, SectionTitle, TransparentTitle } from "@/components";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Block from "./block";
import { useTestimonies } from "@/hooks";
import { Trans, useTranslation } from "react-i18next";

export default function Testimonies() {
    const { data: testimonies, loading } = useTestimonies();
    const { t } = useTranslation();

    if (loading) return <Loading />;
    return (
        <section className="overflow-clip text-center mt-24">
            <TransparentTitle>{t("Testimonies")}</TransparentTitle>

            <SectionTitle big className="!text-center">
                <Trans i18nKey="They talk <1>about us</1>">
                    They talk <span>about us</span>
                </Trans>
            </SectionTitle>

            <h3 className="font-medium text-xl lg:text-2xl mt-2">
                {t("Testimonies of some users")}
            </h3>

            <div className="overflow-auto lg:pb-4 mt-4 lg:mt-14">
                <div className="container-auto grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-4">
                    {testimonies?.map((testimony, index) => (
                        <Block
                            key={
                                "testimony-block-" + testimony.id + "-" + index
                            }
                            {...testimony}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-12 hidden lg:flex gap-6 justify-center">
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
        </section>
    );
}

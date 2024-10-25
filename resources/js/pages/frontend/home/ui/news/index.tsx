import {
    Button,
    Loading,
    Section,
    SectionTitle,
    ServiceBlock,
    TransparentTitle,
} from "@/components";
import { useLatestNews } from "@/hooks";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function News() {
    const { data: news, loading } = useLatestNews();
    const { t } = useTranslation();

    if (loading) return <Loading />;
    return (
        <div className="relative pt-24">
            <TransparentTitle className="absolute top-16 right-0 -z-10">
                {t("News")}
            </TransparentTitle>

            <Section>
                <div>
                    <div className="lg:flex items-center">
                        <SectionTitle big className="text-center lg:text-left">
                            <Trans i18nKey="Our <1>News</1>">
                                Our <span>News</span>
                            </Trans>
                        </SectionTitle>

                        <div className="ml-auto hidden lg:flex gap-6">
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

                    <div className="font-medium text-center lg:text-left text-xl lg:text-2xl">
                        {t("Get the latest updates")}
                    </div>
                </div>

                <div className="mt-8 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7">
                    {news?.map((news) => (
                        <ServiceBlock key={"news-block-" + news.id} {...news} />
                    ))}
                </div>

                <div className="mt-8 lg:mt-16 text-center">
                    <Link to="/blog">
                        <Button size="xl" color="light" div>
                            <span>{t("View more")}</span>
                            <ArrowRight className="size-6" />
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
}

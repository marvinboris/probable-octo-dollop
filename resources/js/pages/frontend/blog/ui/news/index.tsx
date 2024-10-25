import {
    Button,
    Loading,
    Section,
    SectionTitle,
    ServiceBlock,
} from "@/components";
import { useNews } from "@/hooks";
import { ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";

export default function News() {
    const { loading, data: news } = useNews();
    const { t } = useTranslation();

    if (loading) return <Loading />;
    return (
        <Section className="py-20">
            <SectionTitle big>
                <Trans i18nKey="Our <1>News</1>">
                    Our <span>News</span>
                </Trans>
            </SectionTitle>

            <div className="mt-8 lg:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 xl:gap-10">
                {news?.map((news) => (
                    <ServiceBlock key={"news-block-" + news.id} {...news} />
                ))}
            </div>

            <div className="mt-8 lg:mt-16 text-center">
                <Button size="xl" color="light">
                    <span>{t("Load more")}</span>
                    <ArrowRight className="size-6" />
                </Button>
            </div>
        </Section>
    );
}

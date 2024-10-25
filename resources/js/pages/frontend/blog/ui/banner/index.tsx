import { Button, Section } from "@/components";
import { ArrowRight2, Calendar2, ProfileCircle } from "iconsax-react";
import Svg from "./svg";
import { useTranslation } from "react-i18next";

export default function Banner() {
    const { t } = useTranslation();

    return (
        <Section className="grid lg:grid-cols-2 gap-8">
            <div className="pt-8">
                <div className="flex gap-3.5">
                    <div className="h-10 px-2.5 rounded-lg font-medium flex items-center bg-stone-100 gap-2.5">
                        <ProfileCircle className="size-5" />
                        <span>By admin</span>
                    </div>

                    <div className="h-10 px-2.5 rounded-lg font-medium flex items-center bg-primary/10 text-primary gap-2.5">
                        <Calendar2 className="size-5" />
                        <span>{t("Date")} : 12-10-2023</span>
                    </div>
                </div>

                <div className="mt-5 lg:mt-10">
                    <div className="font-bold text-3xl lg:text-[40px]">
                        "Exploring Cameroon's Rich Cultural Tapestry: A Journey
                        Through Tradition and Diversity"
                    </div>

                    <div className="lg:text-lg font-medium">
                        Embark on a cultural odyssey through the vibrant mosaic
                        of Cameroon's traditions, languages, and customs.
                        Discover the stories, rituals, and celebrations that
                        define this diverse nation.
                    </div>

                    <div className="mt-8 lg:mt-24 text-center lg:text-left">
                        <Button size="xl">
                            {t("Read more")}
                            <ArrowRight2 className="size-6" />
                        </Button>
                    </div>
                </div>
            </div>

            <div>
                <Svg />
            </div>
        </Section>
    );
}

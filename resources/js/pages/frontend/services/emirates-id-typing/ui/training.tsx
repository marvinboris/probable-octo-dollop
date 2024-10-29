import { Button, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import { useTranslation } from "react-i18next";

export default function Training() {
    const { t } = useTranslation();

    return (
        <div className="overflow-clip relative">
            <Section>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-24">
                    <div className="order-2 lg:order-1">
                        <Polygon1 />
                    </div>

                    <div className="order-1 lg:order-2">
                        <SectionTitle>{t("Training")}</SectionTitle>

                        <div className="text-lg text-body space-y-4 mt-4">
                            <p>
                                Notre équipe d’experts vous accompagne dans
                                l’établissement de la politique de développement
                                des compétences de vos salariés et contribue à
                                sa mise en œuvre par des formations en relation
                                avec la stratégie globale de l’entreprise.
                                INTERIM PRO RH concilie les attentes et demandes
                                des salariés avec ceux de l’entreprise, en se
                                référant à leur hiérarchie. A travers des
                                entretiens individuels, nous évaluons la
                                progression et les objectifs d’évolution des
                                candidats.
                            </p>
                        </div>

                        <div className="mt-8 lg:mt-20 text-center lg:text-left">
                            <Button size="xl">
                                <span>{t("Contact us")}</span>
                                <ArrowRight className="size-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}

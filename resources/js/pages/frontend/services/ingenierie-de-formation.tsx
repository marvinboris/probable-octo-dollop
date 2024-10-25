import { Button, Header, Polygon1, Section, SectionTitle } from "@/components";
import { ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";

export function PageServiceEngineeringTraining() {
    const { t } = useTranslation();

    return (
        <>
            <Header>{t("Training engineering")}</Header>

            <div className="overflow-clip relative">
                <Section>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-24">
                        <div>
                            <SectionTitle>
                                <Trans i18nKey="<0>Training</0> engineering">
                                    <span>Training</span> engineering
                                </Trans>
                            </SectionTitle>

                            <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                                <p>
                                    <Trans i18nKey="Services/HR/Training">
                                        La formation professionnelle est un
                                        levier indispensable dans le maintien
                                        des compétences. Elle consiste à
                                        acquérir et améliorer le savoir-faire et
                                        le savoir-être.
                                        <br />
                                        <br />
                                        Pour une entreprise, elle vise à faire
                                        évoluer les compétences et les
                                        performances des employés, par
                                        conséquent, sa croissance économique.
                                        <br />
                                        <br />
                                        <strong>INTERIM PRO RH</strong> met en
                                        œuvre des modules de formation et les
                                        propose aux apprenants. Nous identifions
                                        les besoins en formation des apprenants,
                                        et formulons des objectifs en fonction
                                        de ces besoins, en tenant compte des
                                        contraintes liées à l’activité
                                        professionnelle, du contexte et du
                                        mécanisme autour de ladite activité.
                                    </Trans>
                                </p>
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
        </>
    );
}

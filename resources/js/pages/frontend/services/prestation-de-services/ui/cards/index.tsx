import { Loading, Section } from "@/components";
import Block from "./block";
import { SkillHR } from "@types";
import { Trans, useTranslation } from "react-i18next";

export default function Cards() {
    const { t } = useTranslation();

    const services: SkillHR[] = [
        {
            id: "service-1",
            name: t("Services/Provision/1/Name"),
            description: (
                <Trans i18nKey="Services/Provision/1/Description">
                    Nous vous fournissons des solutions vous permettant de
                    réaliser un benchmark salarial et une analyse objective de
                    la rémunération sur le marché et avec vos concurrents
                    directs.
                    <br />
                    <br />
                    Nous vous accompagnons dans la construction de votre propre
                    grille de salaire et la clarification des avantages sociaux
                    pratiqués dans votre secteur d’activité.
                    <br />
                    <br />
                    <strong>INTERIM PRO RH</strong> vous permet d’identifier les
                    zones de risques et les facteurs de succès, d’optimiser
                    votre politique de rémunérations, d’améliorer votre
                    attractivité et de retenir vos talents.
                </Trans>
            ),
        },
        {
            id: "service-2",
            name: t("Services/Provision/2/Name"),
            description: (
                <>
                    <p>
                        <Trans i18nKey="Services/Provision/2/Description/1">
                            <strong>INTERIM PRO RH</strong> réalise l’audit de
                            votre structure ou l’évaluation de votre projet
                            d’Entreprise. Notre démarche permet de s’assurer
                            avec la participation des acteurs, que les objectifs
                            fixés sont atteints et de porter un regard sur les
                            actions, sur les pratiques qui ont été mises en
                            œuvre pour les atteindre afin de proposer des
                            actions d’amélioration.
                        </Trans>
                    </p>
                    <br />
                    <p>
                        <Trans i18nKey="Services/Provision/2/Description/2/0">
                            <strong>
                                DÉFINITION DU CADRE DE L’ÉVALUATION/AUDIT
                            </strong>
                        </Trans>
                    </p>

                    <ul className="list-disc list-inside">
                        <li>{t("Services/Provision/2/Description/2/1")}</li>
                        <li>{t("Services/Provision/2/Description/2/2")}</li>
                        <li>{t("Services/Provision/2/Description/2/3")}</li>
                    </ul>
                </>
            ),
        },
        {
            id: "service-3",
            name: t("Services/Provision/3/Name"),
            description: (
                <>
                    <p>{t("Services/Provision/3/Description/0")}</p>

                    <ul className="list-disc list-inside">
                        <li>{t("Services/Provision/3/Description/1")}</li>
                        <li>{t("Services/Provision/3/Description/2")}</li>
                        <li>{t("Services/Provision/3/Description/3")}</li>
                    </ul>
                </>
            ),
        },
        {
            id: "service-4",
            name: t("Services/Provision/4/Name"),
            description: (
                <>
                    <p>{t("Services/Provision/4/Description/0")}</p>

                    <ul className="list-disc list-inside">
                        <li>{t("Services/Provision/4/Description/1")}</li>
                        <li>{t("Services/Provision/4/Description/2")}</li>
                        <li>{t("Services/Provision/4/Description/3")}</li>
                        <li>{t("Services/Provision/4/Description/4")}</li>
                        <li>{t("Services/Provision/4/Description/5")}</li>
                        <li>{t("Services/Provision/4/Description/6")}</li>
                        <li>{t("Services/Provision/4/Description/7")}</li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <Section className="flex flex-wrap flex-col lg:flex-row justify-center lg:*:min-h-80 lg:*:w-[calc((100%/3)-16px)] gap-4 py-20">
            {services?.map((service, index) => (
                <Block
                    key={"service-" + service.id + "-" + index}
                    {...service}
                />
            ))}
        </Section>
    );
}

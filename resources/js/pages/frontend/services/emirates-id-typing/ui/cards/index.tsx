import { Loading, Section } from "@/components";
import Block from "./block";
import { SkillHR } from "@types";
import { useTranslation } from "react-i18next";

export default function Cards() {
    const { t } = useTranslation();

    const skills: SkillHR[] = [
        {
            id: "skill-1",
            name: t("Services/HR/Skills/1/Name"),
            description: <>
                <p>{t("Services/HR/Skills/1/Description/0")}</p>

                <ul className="list-disc list-inside">
                    <li>{t("Services/HR/Skills/1/Description/1")}</li>
                    <li>{t("Services/HR/Skills/1/Description/2")}</li>
                    <li>{t("Services/HR/Skills/1/Description/3")}</li>
                    <li>{t("Services/HR/Skills/1/Description/4")}</li>
                    <li>{t("Services/HR/Skills/1/Description/5")}</li>
                    <li>{t("Services/HR/Skills/1/Description/6")}</li>
                    <li>{t("Services/HR/Skills/1/Description/7")}</li>
                </ul>
            </>,
        },
        {
            id: "skill-2",
            name: t("Services/HR/Skills/2/Name"),
            description: t("Services/HR/Skills/2/Description"),
        },
        {
            id: "skill-3",
            name: t("Services/HR/Skills/3/Name"),
            description: t("Services/HR/Skills/3/Description"),
        },
        {
            id: "skill-4",
            name: t("Services/HR/Skills/4/Name"),
            description: t("Services/HR/Skills/4/Description"),
        },
    ];

    return (
        <Section className="flex flex-wrap flex-col lg:flex-row justify-center lg:*:min-h-80 lg:*:w-[calc((100%/3)-16px)] gap-4 py-20">
            {skills?.map((skill, index) => (
                <Block key={"skill-" + skill.id + "-" + index} {...skill} />
            ))}
        </Section>
    );
}

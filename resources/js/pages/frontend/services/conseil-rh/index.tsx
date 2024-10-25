import { Header } from "@/components";
import Recruitment from "./ui/recruitment";
import Training from "./ui/training";
import Skills from "./ui/skills";
import Cards from "./ui/cards";
import { useTranslation } from "react-i18next";

export function PageServiceHR() {
    const { t } = useTranslation();

    return (
        <div className="bg-stone-100">
            <Header>{t("HR Advice")}</Header>
            <Recruitment />
            <Training />
            <Skills />
            <Cards />
        </div>
    );
}

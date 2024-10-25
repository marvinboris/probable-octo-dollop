import { Header } from "@/components";
import Cards from "./ui/cards";
import { useTranslation } from "react-i18next";

export function PageServiceService() {
    const { t } = useTranslation();

    return (
        <div className="bg-stone-100">
            <Header>{t("Service Provision")}</Header>
            <Cards />
        </div>
    );
}

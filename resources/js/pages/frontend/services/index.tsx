import { Header } from "@/components";
import { useTranslation } from "react-i18next";
import Services from "./ui";

export function PageServices() {
    const { t } = useTranslation();

    return (
        <>
            <Header>{t("Our services")}</Header>
            <div className="pt-12 *:pb-24">
                <Services />
            </div>
        </>
    );
}

export * from "./conseil-rh";
export * from "./ingenierie-de-formation";
export * from "./interim-et-placement-des-travailleurs";
export * from "./mise-a-disposition-du-personnel";
export * from "./prestation-de-services";

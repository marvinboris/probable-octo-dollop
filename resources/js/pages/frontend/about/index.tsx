import { Header } from "@/components";
import Who from "./ui/who";
import Vision from "./ui/vision";
import Mission from "./ui/mission";
import { Trans, useTranslation } from "react-i18next";
import Values from "./ui/values";

export function PageAbout() {
    const { t } = useTranslation();

    return (
        <>
            <Header>
                <Trans i18nKey="About <1>us</1>">
                    About <span>us</span>
                </Trans>
            </Header>
            <Who />
            <Vision />
            <Mission />
            <Values />
        </>
    );
}

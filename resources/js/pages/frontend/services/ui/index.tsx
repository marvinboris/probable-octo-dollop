import { Loading, Section, SectionTitle, TransparentTitle } from "@/components";
import { useServices } from "@/hooks";
import Block from "./block";
import { TwoUsers } from "react-iconly";
import { Trans, useTranslation } from "react-i18next";

export default function Services() {
    const { data: services, loading } = useServices();
    const { t } = useTranslation();

    if (loading) return <Loading />;
    return (
        <Section className="mt-24 lg:mt-0">
            <div className="mt-4 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 lg:gap-y-9">
                {services
                    ?.sort((a, b) => +a.id - +b.id)
                    .map((service, index) => (
                        <Block
                            key={"service-block-" + service.id + "-" + index}
                            icon={TwoUsers}
                            index={index}
                            {...service}
                        />
                    ))}
            </div>
        </Section>
    );
}

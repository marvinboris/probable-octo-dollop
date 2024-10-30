import {
    Button,
    CountrySelect,
    CustomSelect,
    Input,
    Loading,
    Section,
    SectionTitle,
    TextArea,
    Transition,
} from "@/components";
import { fetch } from "@/services";
import { Contact } from "@types";
import Block from "./block";
import React, { FormEvent } from "react";
import { Send } from "react-iconly";
import { Trans, useTranslation } from "react-i18next";
import { useCountriesContext } from "@/contexts";

export default function ContactUs() {
    const { defaultCode } = useCountriesContext();
    const ref = React.useRef<HTMLFormElement>(null);
    const [code, setCode] = React.useState(defaultCode);
    const [loading, setLoading] = React.useState(false);
    const { t } = useTranslation();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get("name") as string;
        const email = form.get("email") as string;
        const object = form.get("object") as string;
        const phone = [code, form.get("phone") as string]
            .filter(Boolean)
            .join(" ");
        const message = form.get("message") as string;

        const handle = async () => {
            setLoading(true);

            const contact = await fetch<Contact>({
                resource: "contacts",
                method: "POST",
                data: {
                    id: Math.random().toString(),
                    name,
                    email,
                    object,
                    phone,
                    message,
                },
            });

            if (contact) {
                // Sweet alert success message
            }

            setLoading(false);
        };

        handle();
    };

    return (
        <Section className="py-24">
            <SectionTitle big className="text-center lg:text-left">
                <Trans i18nKey="Contact <1>us</1>">
                    Contact <span>us</span>
                </Trans>
            </SectionTitle>

            <div className="lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                <form onSubmit={onSubmit} className="mt-7 relative">
                    <Transition show={loading}>
                        <Loading />
                    </Transition>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                        <Input label={t("Your name")} name="name" />
                        <Input
                            label={t("Your email")}
                            type="email"
                            name="email"
                        />
                        <Input label={t("Your object")} name="object" />
                        <Input
                            label={t("Phone No.")}
                            type="tel"
                            name="phone"
                            placeholder="54 100 0003"
                            addon={
                                <CountrySelect
                                    name="code"
                                    value={code}
                                    onChange={setCode}
                                />
                            }
                        />
                        <TextArea
                            label={t("Your message")}
                            name="message"
                            className="md:col-span-2"
                        />
                    </div>

                    <div className="mt-4 lg:mt-11 text-center lg:text-left">
                        <Button size="xl" type="submit">
                            <span>{t("Send your message")}</span>
                            <Send size={24} />
                        </Button>
                    </div>
                </form>

                <div className="flex">
                    <div className="mx-auto w-full">
                        <iframe
                            title="Localisation"
                            className="h-80 w-full bg-white rounded-2xl"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}

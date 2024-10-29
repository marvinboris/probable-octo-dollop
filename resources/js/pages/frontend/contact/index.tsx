import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import WhatsApp from "./icons/whatsapp";
import {
    Alert,
    Button,
    CustomSelect,
    Header,
    Input,
    Loading,
    Section,
    TextArea,
    Transition,
} from "@/components";
import { fetch } from "@/services";
import { Contact, Message as MessageType } from "@types";

import { Call, Message } from "iconsax-react";
import React, { FormEvent } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Send } from "react-iconly";

export function PageContact() {
    const ref = React.useRef<HTMLFormElement>(null);
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState<MessageType>();
    const { t } = useTranslation();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get("name") as string;
        const email = form.get("email") as string;
        const object = form.get("object") as string;
        const phone = form.get("phone") as string;
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
                setMessage({
                    content: "Message sent",
                    type: "success",
                });
                ref.current?.reset();
            } else
                setMessage({
                    content: "Error, try again",
                    type: "danger",
                });

            setLoading(false);
        };

        handle();
    };

    return (
        <>
            <Header>
                <Trans i18nKey="Contact <1>us</1>">
                    Contact <span>us</span>
                </Trans>
            </Header>
            <div className="bg-stone-100">
                <Section className="pb-20">
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
                                <CustomSelect
                                    label={t("Your object")}
                                    name="object"
                                    options={[
                                        {
                                            value: "job",
                                            label: "Recherche d'emploi",
                                        },
                                    ]}
                                />
                                <Input
                                    label={t("Phone No.")}
                                    type="tel"
                                    name="phone"
                                    placeholder="54 100 0003"
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
            </div>
        </>
    );
}

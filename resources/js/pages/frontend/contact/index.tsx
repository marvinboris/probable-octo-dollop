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
import { v4 as uuidv4 } from "uuid";

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
                    id: uuidv4(),
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
                <Section className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 pb-20">
                    <div>
                        <div className="bg-primary text-white p-8 lg:p-16">
                            <div className="*:opacity-50 text-3xl lg:text-6xl font-bold">
                                <Trans i18nKey="Contact <1>us</1>">
                                    Contact <span>us</span>
                                </Trans>
                            </div>

                            <p className="text-lg mt-8">
                                {t("Contact/Contact")}
                            </p>

                            <div className="h-px rounded-full bg-white/30 my-4 lg:my-6" />

                            <div className="flex flex-col lg:flex-row">
                                <div className="flex-1">
                                    <div>
                                        <div className="flex items-center gap-2.5">
                                            <Message className="size-5" />
                                            <a href="mailto:contact@tctyping.com">
                                                contact@tctyping.com
                                            </a>
                                        </div>
                                        <div className="flex gap-2.5 mt-3.5">
                                            <Call className="size-5" />
                                            <div>
                                                <a href="tel:+237657878787">
                                                    +237 657 87 87 87
                                                </a>
                                                <br />
                                                <a href="tel:+237681618161">
                                                    +237 681 61 81 61
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-px rounded-full bg-white/30 my-6" />

                                    <div className="mt-10 flex gap-3.5 *:size-11 *:*:size-6 *:bg-white *:rounded-full *:flex *:items-center *:justify-center">
                                        <a
                                            target="_blank"
                                            href="https://www.facebook.com/profile.php?id=61556592575634&mibextid=rS40aB7S9Ucbxw6v"
                                        >
                                            <Facebook />
                                        </a>
                                        <div>
                                            <Instagram />
                                        </div>
                                        <a
                                            target="_blank"
                                            href="https://wa.me/+237657878787"
                                        >
                                            <WhatsApp />
                                        </a>
                                    </div>
                                </div>

                                <div className="hidden lg:block">
                                    <Call
                                        variant="Bold"
                                        className="size-52 opacity-30"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        ref={ref}
                        onSubmit={onSubmit}
                        className="pt-8 lg:pt-16"
                    >
                        <div className="text-3xl lg:text-4xl/none font-bold text-black text-center lg:text-left">
                            {t("Do you have a subject ?")}
                        </div>
                        <div className="text-sm lg:text-base text-center lg:text-left">
                            {t("Write to us by filling the below form.")}
                        </div>

                        <div className="relative mt-8 xl:mt-16">
                            <Loading show={loading} />

                            <Alert className="mb-3" color={message?.type}>
                                {message?.content}
                            </Alert>

                            <div className="p-4 bg-white border border-neutral-200 grid sm:grid-cols-2 gap-4 rounded-2xl">
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
                                    className="sm:col-span-2"
                                />
                            </div>

                            <div className="mt-8 xl:mt-11 text-center lg:text-left">
                                <Button type="submit" size="xl">
                                    <span>{t("Send your message")}</span>
                                    <Send size={20} />
                                </Button>
                            </div>
                        </div>
                    </form>
                </Section>
            </div>
        </>
    );
}

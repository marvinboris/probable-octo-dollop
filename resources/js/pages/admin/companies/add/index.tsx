import { Alert, Button, FormSteps, Loading } from "@/components";
import { Step1, Step2 } from "./steps";
import React, { FormEvent } from "react";
import { ArrowRight } from "react-iconly";
import { selectAuth } from "@/features";
import { useAppSelector } from "@/hooks";
import { Message } from "@types";
import { useTranslation } from "react-i18next";

export function PageAdminCompaniesAdd() {
    const { t } = useTranslation();

    const { token } = useAppSelector(selectAuth);
    const formRef = React.useRef<HTMLFormElement>(null);

    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState<Message>();
    const [step, setStep] = React.useState(1);
    if (!token) return null;
    const steps = [<Step1 key="step-1" />, <Step2 key="step-2" />];

    const done = step === steps.length;

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await handleSubmit();
    };

    const handleSubmit = async () => {
        const current = formRef.current;
        if (!current) return;

        const form = new FormData(current);
        const data: Record<string, string | string[] | null> = {};
        for (const key of form.keys()) {
            const value = key.includes("[]") ? form.getAll(key) : form.get(key);
            data[key.split("[]").join("")] = value as string | string[] | null;
        }

        console.log(data);

        setLoading(true);
        try {
            const res = await fetch("/api/admin/companies", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: token,
                },
            });
            await res.json();

            setMessage(
                res.ok
                    ? {
                          content: "Company created",
                          type: "success",
                      }
                    : {
                          content: "Company creation failed",
                          type: "danger",
                      }
            );
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={onSubmit}
            className="relative z-0 rounded-xl md:rounded-2xl xl:rounded-3xl bg-white p-4 md:p-8 xl:p-12 grid md:grid-cols-2 xl:grid-cols-3 gap-1.5 md:gap-2.5 xl:gap-x-3.5 gap-y-3 md:gap-y-5 xl:gap-y-7"
        >
            <Loading show={loading} />

            <Alert
                className="md:col-span-2 xl:col-span-3"
                color={message?.type}
            >
                {message?.content}
            </Alert>

            <FormSteps active={step} options={steps} />

            <div className="mt-4 md:mt-5 xl:mt-6">
                <Button
                    size="xl"
                    className="w-full"
                    onClick={done ? handleSubmit : () => setStep((s) => s + 1)}
                >
                    <span>{t(done ? "Submit" : "Continue")}</span>
                    <ArrowRight size={20} />
                </Button>
            </div>

            <div className="mt-6 px-3 flex items-center">Step {step} of 2</div>
        </form>
    );
}

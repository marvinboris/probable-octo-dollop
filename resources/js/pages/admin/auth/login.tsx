import { Status } from "@/enums";
import { adminLogin, selectAuth } from "@/features";
import { useAppDispatch, useAppSelector } from "@/hooks";
import React, { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Alert, Button, Input } from "@/components";

export function PageAdminAuthLogin() {
    const [value, setValue] = React.useState({
        email: "",
        password: "",
    });

    const dispatch = useAppDispatch();
    const { token, status, message } = useAppSelector(selectAuth);

    const navigate = useNavigate();

    const { t } = useTranslation();

    const onChange = (e: ChangeEvent<HTMLInputElement>) =>
        setValue({ ...value, [e.target.name]: e.target.value });
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status !== Status.LOADING) dispatch(adminLogin(value));
    };

    React.useEffect(() => {
        if (token) navigate("/admin/dashboard");
    }, [navigate, token]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <form
                onSubmit={onSubmit}
                className="max-w-lg self-stretch mx-auto px-5 md:px-1 flex flex-col relative z-10"
            >
                <div className="font-bold text-primary text-lg md:text-3xl text-center md:text-left mb-[17px] md:mb-[5px]">
                    {t("Login to your account")}
                </div>

                <div className="text-sm md:text-lg text-center md:text-left mb-[30px] md:mb-[22px]">
                    {t("Sign in")}
                </div>

                <div className="px-3 md:px-0 mb-6 md:mb-[33px]">
                    <div className="grid gap-x-[17.34px] gap-y-[13.63px] mb-[22.8px]">
                        <Alert color={message?.type}>{message?.content}</Alert>
                        <Input
                            type="email"
                            name="email"
                            placeholder={t("E-mail address")}
                            onChange={onChange}
                            value={value.email}
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder={t("Password")}
                            onChange={onChange}
                            value={value.password}
                        />
                    </div>
                </div>

                <div className="text-center">
                    <Button type="submit">
                        {status === Status.LOADING ? (
                            <div className="size-8 rounded-full border border-t-transparent border-white animate-spin" />
                        ) : (
                            t("Continue")
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}

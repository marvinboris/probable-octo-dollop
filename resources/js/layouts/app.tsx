import { Country, Language, Message } from "@types";
import { Loading } from "@/components";
import { DEFAULT_COUNTRY, DEFAULT_LOCALE } from "@/config";
import { CountriesContext, LanguageContext, MessageContext } from "@/contexts";
import { getCountries, getLanguages } from "@/data";
import { Status } from "@/enums";
import { selectAuth, check } from "@/features";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setAuthToken } from "@/utils";
import React from "react";
import { useTranslation } from "react-i18next";

export function LayoutApp({ children }: { children?: React.ReactNode }) {
    const [countries, setCountries] = React.useState<Country[]>([]);
    const [defaultCode, setDefaultCode] = React.useState("");
    const [language, setJustLanguage] = React.useState<Language>();
    const [languages, setLanguages] = React.useState<Language[]>([]);
    const [loaded, setLoaded] = React.useState(false);
    const [message, setMessage] = React.useState<Message>();

    const dispatch = useAppDispatch();
    const { token, status } = useAppSelector(selectAuth);

    const options = React.useMemo(
        () => countries.map((c) => ({ value: c.country, label: c.name })),
        [countries]
    );

    const { i18n } = useTranslation();

    React.useEffect(() => {
        if (languages) {
            setLanguage(languages[0]);
        }
    }, [languages]);

    const setLanguage = (language: Language | undefined) => {
        setJustLanguage(language);

        if (language) {
            i18n.changeLanguage(language.abbr);
            localStorage.setItem("lang", language.abbr);
        } else localStorage.removeItem("lang");
    };

    React.useEffect(() => {
        if (status === Status.IDLE) {
            const isAuth = localStorage.getItem("token") !== null;
            if (!token && isAuth) dispatch(check());
            else if (token) setAuthToken(token);

            if ((token && isAuth) || !isAuth) setLoaded(true);
        }
    }, [token, dispatch, status]);

    React.useEffect(() => {
        getCountries().then((countries) => {
            setCountries(
                countries.filter(
                    (c) =>
                        c.country.toUpperCase() ===
                        DEFAULT_COUNTRY.toUpperCase()
                )
            );
            const defaultCode =
                countries.find(
                    (c) => c.country === DEFAULT_COUNTRY.toUpperCase()
                )?.code || "";
            setDefaultCode(defaultCode);
        });
    }, []);

    React.useEffect(() => {
        getLanguages().then((languages) => {
            setLanguages(languages);

            const language = languages.find(
                (language) =>
                    language.abbr === localStorage.getItem("lang") ||
                    language.abbr === DEFAULT_LOCALE
            ) || {
                abbr: "en",
                flag: "gb",
                name: "English",
            };
            setLanguage(language);
        });
    }, []);

    React.useEffect(() => {
        if (!languages.length)
            getLanguages().then((languages) => {
                setLanguages(languages);

                const language = languages.find(
                    (language) =>
                        language.abbr === localStorage.getItem("lang") ||
                        language.abbr === DEFAULT_LOCALE
                ) || {
                    abbr: "fr",
                    flag: "fr",
                    name: "Français",
                };
                setLanguage(language);
            });
    }, [languages, setLanguage]);

    return loaded && languages ? (
        <CountriesContext.Provider
            value={{ countries, options, defaultCode, setCountries }}
        >
            <LanguageContext.Provider
                value={{ language, languages, setLanguage, setLanguages }}
            >
                <MessageContext.Provider value={{ message, setMessage }}>
                    {children}
                </MessageContext.Provider>
            </LanguageContext.Provider>
        </CountriesContext.Provider>
    ) : (
        <Loading />
    );
}

import { Language } from "@types";

export const getLanguages = async (): Promise<Language[]> => [
    {
        name: "Français",
        abbr: "fr",
        flag: "fr",
    },
    {
        name: "English",
        abbr: "en",
        flag: "gb",
    },
];

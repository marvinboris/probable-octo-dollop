import { Admin, Message, Validation } from "@types";
import axios from "axios";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(...inputs));

export const setAuthToken = (token?: string | undefined | null) => {
    if (token) axios.defaults.headers.common["Authorization"] = token;
    else delete axios.defaults.headers.common["Authorization"];
};

export const message = (content: string, type: Message["type"] = "info") => ({
    type,
    content,
});

export const searchInObject = (search: string, obj: object) =>
    Object.values(obj).reduce(
        (a, b) =>
            a ||
            (typeof b === "string" ? b : b.toString())
                .toLowerCase()
                .includes(search.toLowerCase()),
        false
    );

export const checkValidity = (value = "", rules: Validation) => {
    const validation: { [key: string]: boolean } = {};

    if (rules.required)
        validation.required =
            (typeof value === "string" && value.trim() !== "") ||
            typeof value === "number";

    if (rules.confirm) validation.confirm = value === rules.confirm;

    if (rules.minLength) validation.minLength = value.length >= rules.minLength;

    if (rules.maxLength) validation.maxLength = value.length <= rules.maxLength;

    if (rules.isEmail) {
        const pattern =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        validation.isEmail = pattern.test(value);
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        validation.isNumeric = pattern.test(value);
    }

    return validation;
};

export const isAdmin = (data: Admin | null): data is Admin =>
    data !== null && "name" in data;

import { getLanguages } from "@/data";
import { FAQ, Language, News, Service, TeamMember, Testimony } from "@types";
import React from "react";
import { useFetch } from "./use-fetch";

export function useTeam() {
    return useFetch<TeamMember[]>({
        resource: "team-members",
    });
}

export function useLanguages() {
    const [languages, setLanguages] = React.useState<Language[]>([]);

    React.useEffect(() => {
        const handle = async () => {
            try {
                const languages = await getLanguages();
                setLanguages(languages);
            } catch (error) {
                console.log(error);
            }
        };

        handle();
    }, []);

    return {
        languages,
        options: languages.map((language) => ({
            value: language.abbr,
            label: language.name,
        })),
    };
}

export function useNews() {
    return useFetch<News[]>({
        resource: "news",
    });
}

export function useFaq() {
    return useFetch<FAQ[]>({
        resource: "faqs",
    });
}

export function useServices() {
    return useFetch<Service[]>({
        resource: "services",
    });
}

export function useService(id: string | undefined) {
    return useFetch<Service>({
        resource: "services",
        id,
    });
}

export function useTestimonies() {
    return useFetch<Testimony[]>({
        resource: "testimonies",
    });
}

export function useLatestNews() {
    return useFetch<News[]>({
        resource: "news",
        params: { count: 3 },
    });
}

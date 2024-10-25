import { getLanguages } from "@/data";
import {
    Applicant,
    CompanyActivity,
    CompanyType,
    Contract,
    Diploma,
    FAQ,
    Job,
    Language,
    News,
    Request,
    Service,
    SkillHR,
    TeamMember,
    Testimony,
} from "@types";
import React from "react";
import { useFetch } from "./use-fetch";

export function useTeam() {
    return useFetch<TeamMember[]>({
        resource: "team-members",
    });
}

export function useCompanies() {
    const result = useFetch<TeamMember[]>({
        resource: "companies",
    });

    return {
        ...result,
        options: result.data?.map((company) => ({
            value: company.id,
            label: company.name,
        })),
    };
}

export function useCompanyTypes() {
    const { loading, data: companyTypes } = useFetch<CompanyType[]>({
        resource: "company_types",
    });

    return {
        loading,
        companyTypes,
        options: companyTypes?.map((company) => ({
            value: company.id,
            label: company.name,
        })),
    };
}

export function useCompanyActivities() {
    const { loading, data: companyActivities } = useFetch<CompanyActivity[]>({
        resource: "company_activities",
    });

    return {
        loading,
        companyActivities,
        options: companyActivities?.map((company) => ({
            value: company.id,
            label: company.name,
        })),
    };
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

export function useContracts() {
    const { data: contracts } = useFetch<Contract[]>({
        resource: "contracts",
    });

    return {
        contracts,
        options: contracts?.map((contract) => ({
            value: contract.id,
            label: contract.name,
        })),
    };
}

export function useDiplomae() {
    const result = useFetch<Diploma[]>({
        resource: "diplomas",
    });

    return {
        ...result,
        options: result.data?.map((diploma) => ({
            value: diploma.id,
            label: diploma.name,
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

export function useTestimonies() {
    return useFetch<Testimony[]>({
        resource: "testimonies",
    });
}

export function useJobs(as?: 'employer') {
    return useFetch<Job[]>({
        resource: "jobs",
        as
    });
}

export function useLatestNews() {
    return useFetch<News[]>({
        resource: "news",
        params: { count: 3 },
    });
}

export function useRequests() {
    return useFetch<Request[]>({
        resource: "requests",
    });
}

export function useHR() {
    return useFetch<SkillHR[]>({
        resource: "skills-hr",
    });
}

export function useApplicants() {
    return useFetch<Applicant[]>({
        resource: "applicants",
    });
}

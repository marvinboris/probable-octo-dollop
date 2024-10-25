import { API_URL } from "@/config";
import {
    Applicant,
    Company,
    CompanyActivity,
    CompanyType,
    Contact,
    Diploma,
    FAQ,
    Job,
    News,
    Request,
    Service,
    SkillHR,
    Subscriber,
    TeamMember,
    Testimony,
} from "@types";
import axios from "axios";

type ToData<T> = T | T[];
type ResUnit =
    | Applicant
    | Company
    | CompanyActivity
    | CompanyType
    | Contact
    | Diploma
    | FAQ
    | Job
    | News
    | Request
    | Service
    | SkillHR
    | Subscriber
    | TeamMember
    | Testimony;
export type RequestData = ToData<ResUnit>;
export type FromData<T extends RequestData> = T extends Array<infer U> ? U : T;
export type Resource =
    | "applicants"
    | "applications"
    | "companies"
    | "company_activities"
    | "company_types"
    | "contacts"
    | "contracts"
    | "diplomas"
    | "faqs"
    | "skills-hr"
    | "jobs"
    | "news"
    | "requests"
    | "services"
    | "subscribers"
    | "team-members"
    | "testimonies";

export async function fetch<T extends RequestData>({
    resource,
    method,
    data: body,
    params,
    as,
    id,
}: {
    resource: Resource;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    data?: FromData<T>;
    params?: Record<string, string | number | boolean>;
    as?: "employer" | "admin";
    id?: string;
}) {
    try {
        const res = await axios.request<T>({
            url: `${
                "/api/" +
                (as ? as + "/" : "") +
                resource.split("_").join("-") +
                (method !== "POST" && body?.id ? `${body?.id}` : id || "")
            }${
                params
                    ? `?${Object.entries(params)
                          .map(([key, value]) => `${key}=${value}`)
                          .join("&")}`
                    : ""
            }`,
            method,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            data: body,
        });
        return res.data as T | undefined;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

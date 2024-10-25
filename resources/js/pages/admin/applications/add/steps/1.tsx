import { Input, CustomSelect } from "@/components";
import { useCompanies, useContracts, useDiplomae, useLanguages } from "@/hooks";
import React from "react";

export function Step1() {
    const { options: companyOptions } = useCompanies();
    const { options: contractOptions } = useContracts();
    const { options: diplomaOptions } = useDiplomae();
    const { options: languageOptions } = useLanguages();

    const [languages, setLanguages] = React.useState<string[]>([]);

    return (
        <>
            <Input name="name" label="Job position" />
            <Input name="join" type="date" label="Expected join date" />
            <CustomSelect
                name="company_id"
                label="Company"
                options={companyOptions}
            />
            <CustomSelect
                multiple
                name="languages[]"
                label="Languages"
                value={languages}
                onChange={setLanguages}
                options={languageOptions}
            />
            <CustomSelect
                name="contract_id"
                label="Contract type"
                options={contractOptions}
            />
            <CustomSelect
                name="diploma_id"
                label="Diploma required"
                options={diplomaOptions}
            />
            <Input
                name="salary_high"
                type="number"
                label="Salary"
                placeholder="High"
                addon={
                    <input
                        name="salary_low"
                        type="number"
                        placeholder="Low"
                        className="flex-1 !outline-none !border-0 !ring-0 mx-3"
                    />
                }
                append="/m"
            />
            <Input name="location" label="Location / city" />
            <Input name="experience" type="number" label="Experience" />
        </>
    );
}

import { CustomSelect, Input } from "@/components";
import { useCompanyActivities, useCompanyTypes } from "@/hooks";
import React from "react";

export function Step2() {
    const { options: companyActivitiesOptions } = useCompanyActivities();
    const { options: companyTypesOptions } = useCompanyTypes();

    return (
        <>
            <CustomSelect
                name="company_activity_id"
                label="Activity"
                options={companyActivitiesOptions}
            />
            <CustomSelect
                name="company_type_id"
                label="Company type"
                options={companyTypesOptions}
            />
            <div className="row-span-3"></div>
            <Input name="founder" label="Founder" />
            <Input
                name="website"
                type="url"
                label="Website"
                addon={<div className="mx-3">www.</div>}
            />
            <CustomSelect
                name="employees"
                label="Number of employees"
                options={[
                    "1 - 10",
                    "10 - 50",
                    "50 - 100",
                    "100 - 500",
                    "500 - 1000",
                    "1000 - 5000",
                ].map((info) => ({ label: info, value: info }))}
            />
            <Input name="license" label="License number" />
        </>
    );
}

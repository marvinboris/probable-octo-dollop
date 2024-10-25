import { Button, Loading, Table } from "@/components";
import { useCompanies } from "@/hooks";
import { Add, Edit, Eye } from "iconsax-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Download } from "react-iconly";
import { Link } from "react-router-dom";

export function PageAdminCompanies() {
    const { loading, data: companies } = useCompanies();

    const { t } = useTranslation();

    const [search, setSearch] = React.useState("");
    const [show, setShow] = React.useState("05");

    if (loading) return <Loading />;
    return (
        <Table
            action={
                <Link to="/admin/companies/add">
                    <Button div color="like" className="font-bold">
                        <Add className="size-5" />
                        <span className="hidden md:inline">
                            {t("Add company")}
                        </span>
                    </Button>
                </Link>
            }
            data={companies?.map((company) => ({
                ...company,
                _: <input type="checkbox" />,
                id: "#" + company.id,
                action: (
                    <div className="flex gap-2.5 *:size-6 *:rounded-md *:text-white *:flex *:justify-center *:items-center">
                        <button className="bg-purple">
                            <Eye className="size-3" />
                        </button>
                        <button className="bg-telegram">
                            <Edit className="size-3" />
                        </button>
                        <button className="bg-like">
                            <Download size={12} />
                        </button>
                    </div>
                ),
            }))}
            fields={[
                { key: "_", label: "" },
                { key: "id", label: t("ID") },
                { key: "name", label: t("Name") },
                { key: "email", label: t("Email") },
                { key: "phone", label: t("Phone No.") },
                { key: "createdIn", label: t("Created in") },
                { key: "contactPerson", label: t("Contact person") },
                { key: "action", label: "" },
            ]}
            search={search}
            setSearch={setSearch}
            show={show}
            setShow={setShow}
            title={t("Company list")}
        />
    );
}

export * from "./add";

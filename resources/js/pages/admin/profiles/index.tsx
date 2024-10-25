import { Button, Loading, Table } from "@/components";
import { useApplicants } from "@/hooks";
import { Add, Edit, Eye } from "iconsax-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Download } from "react-iconly";
import { Link } from "react-router-dom";

export function PageAdminProfiles() {
    const { loading, data: applicants } = useApplicants();

    const { t } = useTranslation();

    const [search, setSearch] = React.useState("");
    const [show, setShow] = React.useState("05");

    if (loading) return <Loading />;
    return (
        <Table
            action={
                <Link to="/admin/profiles/add">
                    <Button div color="like" className="font-bold">
                        <Add className="size-5" />
                        <span className="hidden md:inline">
                            {t("Create profile")}
                        </span>
                    </Button>
                </Link>
            }
            data={applicants?.map((applicant) => ({
                ...applicant,
                _: <input type="checkbox" />,
                id: "#" + applicant.id,
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
                { key: "first_name", label: t("First name") },
                { key: "last_name", label: t("Last name") },
                { key: "city", label: t("City") },
                { key: "degree", label: t("Highest degree") },
                { key: "strength", label: t("Profile strength") },
                { key: "action", label: "" },
            ]}
            search={search}
            setSearch={setSearch}
            show={show}
            setShow={setShow}
            title={t("Profile list")}
        />
    );
}

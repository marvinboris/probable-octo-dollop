import { Button, Loading, Table } from "@/components";
import { useJobs } from "@/hooks";
import { Add, Edit, Eye } from "iconsax-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Download } from "react-iconly";
import { Link } from "react-router-dom";

export function PageAdminApplications() {
    const { loading, data: jobs } = useJobs();

    const { t } = useTranslation();

    const [search, setSearch] = React.useState("");
    const [show, setShow] = React.useState("05");

    if (loading) return <Loading />;
    return (
        <Table
            action={
                <Link to="/admin/applications/add">
                    <Button div color="like" className="font-bold">
                        <Add className="size-5" />
                        <span className="hidden md:inline">
                            {t("Post a Job")}
                        </span>
                    </Button>
                </Link>
            }
            data={jobs?.map((job) => ({
                ...job,
                _: <input type="checkbox" />,
                id: "#" + job.id,
                experience: (
                    <div className="line-clamp-2">{job.experience}</div>
                ),
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
                { key: "company", label: t("Company") },
                { key: "location", label: t("Location") },
                { key: "degree", label: t("Degree required") },
                { key: "experience", label: t("Experience") },
                { key: "availability", label: t("Availability") },
                { key: "action", label: "" },
            ]}
            search={search}
            setSearch={setSearch}
            show={show}
            setShow={setShow}
            title={t("Job listing")}
        />
    );
}

export * from "./add";

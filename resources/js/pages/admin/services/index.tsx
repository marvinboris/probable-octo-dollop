import { Button, Loading, Table } from "@/components";
import { useServices } from "@/hooks";
import { Add, Edit, Eye } from "iconsax-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Download } from "react-iconly";
import { Link } from "react-router-dom";

export function PageAdminServices() {
    const { loading, data: services } = useServices();

    const { t } = useTranslation();

    const [search, setSearch] = React.useState("");
    const [show, setShow] = React.useState("05");

    if (loading) return <Loading />;
    return (
        <Table
            action={
                <Link to="/admin/services/add">
                    <Button div color="like" className="font-bold">
                        <Add className="size-5" />
                        <span className="hidden md:inline">
                            {"Add service"}
                        </span>
                    </Button>
                </Link>
            }
            data={services?.map((service) => ({
                ...service,
                _: <input type="checkbox" />,
                id: "#" + service.id,
                description: (
                    <div className="line-clamp-2">{service.description}</div>
                ),
                action: (
                    <div className="flex gap-2.5 *:size-6 *:rounded-md *:text-white *:flex *:justify-center *:items-center">
                        <Link
                            target="_blank"
                            to={service.link}
                            className="bg-purple"
                        >
                            <Eye className="size-3" />
                        </Link>
                        <Link
                            className="bg-telegram"
                            to={"/admin/services/" + service.id}
                        >
                            <Edit className="size-3" />
                        </Link>
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
                { key: "description", label: "Description" },
                { key: "link", label: "Link" },
                { key: "action", label: "" },
            ]}
            search={search}
            setSearch={setSearch}
            show={show}
            setShow={setShow}
            title={"Service list"}
        />
    );
}

export * from "./[id]";
export * from "./add";

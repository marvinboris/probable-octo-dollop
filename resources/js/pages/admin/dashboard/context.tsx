import { AdminDashboardData } from "./utils";
import { Loading } from "@/components";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";

const AdminDashboardContext = createContext<AdminDashboardData>({
    total_applicants: 0,
    total_companies: 0,
    total_jobs: 0,
});

export const useAdminDashboard = () => useContext(AdminDashboardContext);

const fetchAdminDashboard = () =>
    fetch("/api/admin/dashboard")
        .then((res) => res.json())
        .then((data) => data as AdminDashboardData);

export const AdminDashboardProvider = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const { data, isLoading } = useQuery({
        queryKey: ["admin", "dashboard"],
        queryFn: fetchAdminDashboard,
    });
    const total_applicants = data?.total_applicants || 0;
    const total_companies = data?.total_companies || 0;
    const total_jobs = data?.total_jobs || 0;

    if (isLoading) return <Loading />;
    return (
        <AdminDashboardContext.Provider
            value={{ total_applicants, total_companies, total_jobs }}
        >
            {children}
        </AdminDashboardContext.Provider>
    );
};

import { selectAuth } from "./features/auth/authSlice";
import { useAppSelector } from "./hooks";
import { LayoutAdmin, LayoutFrontend } from "./layouts";
import {
    PageAdminAuthLogin,
    PageAdminCompanies,
    PageAdminCompaniesAdd,
    PageAdminDashboard,
    PageAdminProfiles,
    PageAdminSettings,
    PageBlog,
    PageBlogDetails,
    PageContact,
    PageHome,
    PageServiceEngineeringTraining,
    PageServiceHR,
    PageServiceInterim,
    PageServices,
    PageServiceService,
    PageServiceTeam,
} from "./pages";

import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    const { token } = useAppSelector(selectAuth);

    return (
        <Routes>
            {token ? (
                <>
                    <Route path="/admin" element={<LayoutAdmin />}>
                        <Route
                            path="/admin/settings"
                            element={<PageAdminSettings />}
                        />
                        <Route
                            path="/admin/companies/add"
                            element={<PageAdminCompaniesAdd />}
                        />
                        <Route
                            path="/admin/companies"
                            element={<PageAdminCompanies />}
                        />
                        <Route
                            path="/admin/profiles"
                            element={<PageAdminProfiles />}
                        />
                        <Route path="/admin" element={<PageAdminDashboard />} />
                    </Route>
                </>
            ) : (
                <Route path="/admin" element={<PageAdminAuthLogin />} />
            )}

            <Route path="" element={<LayoutFrontend />}>
                <Route path="/contact" element={<PageContact />} />
                <Route path="/careers" element={<Navigate to="/search" />} />
                <Route
                    path="/services/prestation-de-services"
                    element={<PageServiceService />}
                />
                <Route
                    path="/services/mise-a-disposition-du-personnel"
                    element={<PageServiceTeam />}
                />
                <Route
                    path="/services/interim-et-placement-des-travailleurs"
                    element={<PageServiceInterim />}
                />
                <Route
                    path="/services/conseil-rh"
                    element={<PageServiceHR />}
                />
                <Route
                    path="/services/ingenierie-de-formation"
                    element={<PageServiceEngineeringTraining />}
                />
                <Route path="/blog/:slug" element={<PageBlogDetails />} />
                <Route path="/blog" element={<PageBlog />} />
                <Route path="/about/services" element={<PageServices />} />

                <Route path="" element={<PageHome />} />

                {token ? null : (
                    <Route
                        path="/employer"
                        element={<Navigate to="/employer/login" />}
                    />
                )}
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

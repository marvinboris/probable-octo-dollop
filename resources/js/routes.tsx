import { selectAuth } from "./features/auth/authSlice";
import { useAppSelector } from "./hooks";
import { LayoutAdmin, LayoutFrontend } from "./layouts";
import {
    PageAbout,
    PageAdminAuthLogin,
    PageAdminDashboard,
    PageAdminServices,
    PageAdminServicesAdd,
    PageAdminServicesEdit,
    PageAdminSettings,
    PageBlog,
    PageBlogDetails,
    PageContact,
    PageHome,
    PageServiceEmiratesIdTyping,
    PageServices,
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
                            path="/admin/services/add"
                            element={<PageAdminServicesAdd />}
                        />
                        <Route
                            path="/admin/services/:id"
                            element={<PageAdminServicesEdit />}
                        />
                        <Route
                            path="/admin/services"
                            element={<PageAdminServices />}
                        />
                        <Route path="/admin" element={<PageAdminDashboard />} />
                    </Route>
                </>
            ) : (
                <Route path="/admin" element={<PageAdminAuthLogin />} />
            )}

            <Route path="" element={<LayoutFrontend />}>
                <Route path="/contact" element={<PageContact />} />
                <Route
                    path="/services/emirates-id-typing"
                    element={<PageServiceEmiratesIdTyping />}
                />
                <Route path="/blog/:slug" element={<PageBlogDetails />} />
                <Route path="/blog" element={<PageBlog />} />
                <Route path="/services" element={<PageServices />} />
                <Route path="/about" element={<PageAbout />} />

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

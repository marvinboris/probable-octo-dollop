import Applications from "./applications";
import Calendar from "./calendar";
import Cards from "./cards";
import { AdminDashboardProvider } from "./context";
import Donut from "./donut";

export function PageAdminDashboard() {
    return (
        <AdminDashboardProvider>
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-3 xl:gap-5 flex-1">
                <div className="xl:col-span-3 space-y-3 md:space-y-5 xl:space-y-7">
                    <Cards />

                    <Applications />
                </div>
                <div className="xl:col-span-2 space-y-3 md:space-y-5">
                    <Calendar />

                    <Donut />
                </div>
            </div>
        </AdminDashboardProvider>
    );
}

import { Logo } from "@/components";
import MobileNav from "../ui/mobile-nav";
import Nav from "../ui/nav";
import Footer from "./footer";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "@/hooks";
import { selectAuth } from "@/features";
import { cn, isApplicant } from "@/utils";
import { useTranslation } from "react-i18next";
import { Call, Whatsapp } from "iconsax-react";

export function LayoutFrontend() {
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex items-center h-[90px] sticky top-0 bg-white/90 backdrop-blur z-50">
                <div className="container-auto flex items-center">
                    <div className="mr-auto">
                        <Link to="/" aria-label="Logo Interim Pro RH">
                            <Logo />
                        </Link>
                    </div>

                    <div className="hidden lg:flex mr-auto gap-10 *:flex *:gap-2 text-sm font-semibold">
                        <div>
                            <Call className="w-6 text-primary" />
                            <a href="tel:+971580232333">+971 58 023 2333</a>
                        </div>

                        <div>
                            <Call className="w-6 text-primary" />
                            <a href="mail:info@tctyping.com">
                                info@tctyping.com
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <Nav />
                    </div>

                    <MobileNav />
                </div>
            </header>

            <main
                className={cn("flex-1 flex flex-col", {
                    "overflow-x-hidden": pathname !== "/search",
                })}
            >
                <Outlet />

                <a
                    href="https://wa.me/97523242218"
                    className="fixed bottom-10 right-10 size-16 *:size-full bg-white rounded-full p-1 shadow"
                >
                    <Whatsapp variant="Bulk" className="text-primary" />
                </a>
            </main>

            <Footer />
        </div>
    );
}

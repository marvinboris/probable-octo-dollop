import { Copyright } from "iconsax-react";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 px-4 md:px-8 xl:px-12 pt-5 md:pt-6 xl:pt-7 pb-5 md:pb-7 xl:pb-9">
            <div className="flex items-center justify-center md:justify-normal gap-1.5 md:gap-3">
                <div>
                    <Copyright className="size-5 md:size-6" />
                </div>

                <div className="text-sm md:text-bases">
                    Copyright {new Date().getFullYear()} | All Rights Reserved{" "}
                    <span className="font-bold text-primary">
                        Interim PRO RH
                    </span>
                </div>
            </div>
        </footer>
    );
}

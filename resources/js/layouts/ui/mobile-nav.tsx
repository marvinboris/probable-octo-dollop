import { useAppSelector } from "@/hooks";
import Nav from "./nav";
import { Transition } from "@/components";
import { Menu } from "@headlessui/react";
import { HambergerMenu } from "iconsax-react";
import { selectAuth } from "@/features";
import { useTranslation } from "react-i18next";

export default function MobileNav() {
    const { data } = useAppSelector(selectAuth);
    const { t } = useTranslation();

    return (
        <Menu as="div" className="relative lg:hidden ml-4">
            <Menu.Button>
                <HambergerMenu className="size-10 text-primary" />
            </Menu.Button>

            <Transition>
                <Menu.Items className="absolute top-full right-0 bg-white rounded-lg p-3 shadow-sm border border-stone-200">
                    <Nav />
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

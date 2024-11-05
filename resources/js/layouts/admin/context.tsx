import React, { createContext, useContext } from "react";
import { useParams } from "react-router-dom";

const LayoutAdminContext = createContext<{
    open: boolean;
    setOpen: (open: boolean) => void;
    menus: Record<string, string[]>;
}>({
    open: false,
    setOpen: () => {},
    menus: {},
});

export const useLayoutAdminContext = () => useContext(LayoutAdminContext);

export const LayoutAdminContextProvider = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const { id } = useParams();

    const [open, setJustOpen] = React.useState(false);
    const menus: Record<string, string[]> = {
        "/admin": ["Dashboard", "Overview"],
        "/admin/services": ["Manage services", "Registered services"],
        "/admin/services/add": ["Manage services", "Create service"],
        ["/admin/services/" + id]: ["Manage services", "Edit service"],
        "/admin/settings": ["Settings", "System settings"],
    };

    const setOpen = (value: boolean) => {
        localStorage.setItem("sideDrawerOpen", value.toString());
        setJustOpen(value);
    };

    React.useEffect(() => {
        const sideDrawerOpen =
            localStorage.getItem("sideDrawerOpen") === "true";
        setOpen(sideDrawerOpen);

        return () => {
            localStorage.setItem("sideDrawerOpen", open.toString());
            //   setMessage(undefined);
        };
    }, []);

    return (
        <LayoutAdminContext.Provider value={{ open, setOpen, menus }}>
            {children}
        </LayoutAdminContext.Provider>
    );
};

import { Input } from "./form";

import React from "react";

export function SearchFilter({
    search,
    setSearch,
}: {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <>
            <Input
                type="search"
                value={search}
                className="flex-1"
                onChange={(e) => setSearch(e.target.value)}
            />
        </>
    );
}

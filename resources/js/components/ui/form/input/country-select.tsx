import { DEFAULT_COUNTRY } from "@/config";
import { useCountriesContext } from "@/contexts";
import { Listbox } from "@headlessui/react";
import { cn } from "@/utils";
import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";
import { Flag } from "../../flag";
import { SearchFilter } from "../../search-filter";

type CountrySelectProps = {
    value?: string;
    name?: string;
    type?: "name" | "phone";
    disabled?: boolean;
    onChange?: (value: string) => void;
};

export function CountrySelect({
    value,
    type = "phone",
    name,
    disabled,
    onChange,
}: CountrySelectProps) {
    const { countries } = useCountriesContext();

    const [search, setSearch] = useState("");

    const selected = React.useMemo(
        () =>
            countries.find((c) => value !== "" && c.code === value) ||
            countries.find((c) => c.country === DEFAULT_COUNTRY.toUpperCase()),
        [value, countries]
    );

    const options = React.useMemo(
        () =>
            countries
                .filter(
                    (c) =>
                        c.code.toLowerCase().includes(search.toLowerCase()) ||
                        c.country
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        c.name.toLowerCase().includes(search.toLowerCase())
                )
                .filter((_, i) => i < 100)
                .map((country, index) => (
                    <Listbox.Option
                        key={index}
                        className={`relative cursor-pointer select-none`}
                        value={country.code}
                    >
                        {({ selected }) => (
                            <div
                                className={cn(
                                    "flex items-center relative p-2",
                                    selected
                                        ? "bg-stone-50 font-medium"
                                        : "hover:bg-secondary/5 hover:text-secondary"
                                )}
                            >
                                <div className="mr-1.5">
                                    <div className="w-5 h-5">
                                        {country.code && (
                                            <Flag
                                                code={country.country.toLowerCase()}
                                                size="1x1"
                                                className="rounded-full"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="truncate">
                                    {country.name} (
                                    {country.code.startsWith("+")
                                        ? country.code
                                        : "+" + country.code}
                                    )
                                </div>
                            </div>
                        )}
                    </Listbox.Option>
                )),
        [countries, search]
    );

    const content = (
        <div
            className={
                type === "name" ? "wrapper" : "w-[86px] md:w-[90px] pl-2"
            }
        >
            <Listbox
                value={selected?.code}
                disabled={disabled}
                name={name}
                onChange={onChange}
            >
                <div className="relative mt-0.5">
                    <Listbox.Button className="relative w-full text-left text-sm md:text-base">
                        {selected && (
                            <div className="flex items-center">
                                <div className="mr-1.5">
                                    <div className="aspect-[3/2] h-3.5">
                                        {selected.code && (
                                            <Flag
                                                code={selected.country.toLowerCase()}
                                                className="rounded-sm"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div
                                    className={
                                        type === "name"
                                            ? "truncate flex-1 mr-5"
                                            : "mr-2.5"
                                    }
                                >
                                    {type === "name"
                                        ? selected.country
                                        : "+" + selected.code}
                                </div>

                                <span
                                    className={cn(
                                        "pointer-events-none absolute inset-y-0 flex items-center",
                                        type === "name"
                                            ? "right-1"
                                            : "right-0.5"
                                    )}
                                >
                                    <ArrowDown2
                                        className={cn(
                                            "text-gray-400",
                                            type === "name"
                                                ? "size-5"
                                                : "size-3.5"
                                        )}
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                        )}
                    </Listbox.Button>

                    {/* <Transition> */}
                    <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-[280px] overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm md:text-base">
                        <div className="sticky z-10 -top-1 p-2 bg-white">
                            <SearchFilter
                                search={search}
                                setSearch={setSearch}
                            />
                        </div>

                        {options}
                    </Listbox.Options>
                    {/* </Transition> */}
                </div>
            </Listbox>
        </div>
    );

    return content;
}

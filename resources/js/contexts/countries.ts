import { Country } from "@types";
import { createContext, useContext } from "react";

type Type = Country[];

export const CountriesContext = createContext<{
    defaultCode: string;
    countries: Type;
    options: { value: string; label: string }[];
    setCountries: (countries: Type) => void;
}>({
    defaultCode: "",
    countries: [],
    options: [],
    setCountries: () => {},
});

export const useCountriesContext = () => useContext(CountriesContext);

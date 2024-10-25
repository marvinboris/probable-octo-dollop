import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, AppState } from "../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export * from "./data";
export * from "./use-fetch";
export * from "./use-get";
export * from './use-state'
export * from "./use-window-size";

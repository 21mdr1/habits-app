import { createContext } from "react";

export const RitualContext = createContext({
    data: [] as IRitual[],
    setData: (_: IRitual[]) => {}
});
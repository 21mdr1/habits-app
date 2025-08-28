import { createContext, Dispatch, SetStateAction } from "react";

interface IRitualContext {
    data: IRitual[],
    setData: Dispatch<SetStateAction<IRitual[]>>,
}

export const RitualContext = createContext<IRitualContext>({
    data: [],
    setData: () => {},
});
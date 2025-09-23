import { createContext, Dispatch, SetStateAction } from "react";

interface ITaskContext {
    data: ITask[],
    setData: Dispatch<SetStateAction<ITask[]>>,
}

export const TaskContext = createContext<ITaskContext>({
    data: [],
    setData: () => {},
});
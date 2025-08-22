declare interface ITask {
    name: string, 
    completed: boolean, 
    frequency: number[], 
    version: boolean[],
}

declare interface IRitual {
    name: string,
    version: 1 | 2 | 3,
    tasks: ITask[],
}
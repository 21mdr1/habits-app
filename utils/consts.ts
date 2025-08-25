const primary = "#BBDCE5";
const secondary = "#ECEEDF";
const altTertiary = "#D9C4B0";
const tertiary = "#CFAB8D";
const background = "#F1F6EC";
const textSecondary = "#4B1106";
const textPrimary = "#283C4C";
const error = "#9D3636";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const blankTask: ITask = {name: "", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [false, false, false]}

const blankRitual: IRitual = {
    name: '',
    version: 1,
    tasks: [ blankTask ],
}

export { background, primary, secondary, tertiary, textPrimary, textSecondary, altTertiary, error };
export { days };
export { blankTask, blankRitual };
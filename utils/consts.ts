const altTertiary = "#D9C4B0";
const tertiary = "#CFAB8D";
const background = "#FFF6ED";
const backgroundSecondary = "#FFF7EF";
const textPrimary = "#5C4E42";
const primary = "#FFF8EF";
const primaryVariant = "#F4E5DA";
const primaryHighlight = "#BBC695";
const primaryHighlightVariant = "#B2BE88";
const textSecondary = "#5C4C41";
const secondary = "#DBE5E9";
const secondaryVariant = "#C1D4D8";
const secondaryHighlight = "#7A9CAC";
const secondaryHighlightVariant = "#617D8C";
const error = "#9D3636";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const blankTask: ITask = {name: "", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [false, false, false]}

export { background, backgroundSecondary, primary, primaryVariant, primaryHighlight, primaryHighlightVariant, secondary, secondaryVariant, secondaryHighlight, secondaryHighlightVariant, tertiary, textPrimary, textSecondary, altTertiary, error };
export { days };
export { blankTask };
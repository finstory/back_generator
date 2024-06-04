import colors from "colors";

function UpFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function lowerCaseToFirstLetter(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function underscoreToUpperCase(str: string): string {
    return str
        .split("_")
        .map((word, index) => {
            return index === 0 ? word : UpFirst(word);
        })
        .join("");
}

function textColor(str: string, color: string = "green"): string {
    if (color === "green") return colors.green(str);
    if (color === "red") return colors.red(str);
    return str;
}

type Info = "AST" | "FS" | "GENERATOR";
const showFSLogs = true;
function printInfo(type: Info, str: string): void {
    if (type === "FS" && showFSLogs) console.log(`[${colors.green(type)}] ` + str);
}

function printMsg(str: string, color: string = "generator"): void {
    if (color === "generator") console.log(colors.magenta(str));
    if (color === "warning") console.log(colors.yellow(str));
    if (color === "error") console.log(colors.red(str));
}

export { UpFirst, underscoreToUpperCase, textColor, printInfo, printMsg, lowerCaseToFirstLetter };

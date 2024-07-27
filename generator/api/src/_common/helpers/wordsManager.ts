import colors from "colors";
import { ServiceType } from "../services/all-services";

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

function upperCaseToHyphen(str: string): string {
    return str
        .split("")
        .map((letter, index) => {
            if (index !== 0 && letter === letter.toUpperCase()) {
                return "-" + letter.toLowerCase();
            }
            return letter.toLowerCase();
        })
        .join("");
}

function hyphenToClassName(str: string): string {
    return str
        .split("-")
        .map((word) => {
            return UpFirst(word);
        })
        .join("");
};

function textColor(str: string, color: string = "green"): string {
    if (color === "green") return colors.green(str);
    if (color === "red") return colors.red(str);
    return str;
}

type Info = "AST" | "FS" | "JSON_DB" | "GENERATOR" | "ROUTE" | "CONTROLLER" | "VALIDATION" | "SERVICE" | "INJECTOR" | "UTILS" | "ERROR";


const showFSLogs = true;
const showASTLogs = true;
const showGeneratorLogs = true;
const showJsonDBLogs = true;
const showBlueList = true;


function printInfo(type: ServiceType, str: string): void {
    if (type === "FS" && showFSLogs) console.log(`[${colors.green(type)}]` + colors.green(" ⭍  ") + (str) + colors.green(" ⭍  "));
    else if (type === "AST" && showASTLogs) console.log(`[${colors.yellow(type)}]` + colors.yellow(" ⭍  ") + (str) + colors.yellow(" ⭍  "));

    else if (type === "GENERATOR" && showGeneratorLogs) console.log(`[${colors.magenta(type)}]` + colors.magenta(" ⭍  ") + (str) + colors.magenta(" ⭍  "));

    else if (type === "JSON_DB" && showJsonDBLogs) console.log(`[${colors.gray(type)}]` + colors.gray(" ⭍  ") + (str) + colors.gray(" ⭍  "));

    else console.log(`[${colors.blue(type)}]` + colors.blue(" ⭍  ") + (str) + colors.blue(" ⭍  "));
}

function printMsg(str: string, color: string = "generator"): void {
    if (color === "generator") console.log(colors.magenta(str));
    if (color === "warning") console.log(colors.yellow(str));
    if (color === "error") console.log(colors.red(str));
}

export { UpFirst, underscoreToUpperCase, textColor, printInfo, printMsg, lowerCaseToFirstLetter, upperCaseToHyphen, hyphenToClassName };

import colors from 'colors';

interface StackInfo {
    controller?: string;
    services?: string;
}

export function Mark(stack: string): void {
    const stackLines = stack.split('\n');
    const dirList: StackInfo = {};
    let type: string;
    let result: string;
    for (const line of stackLines) {
        if (!dirList.controller && line.includes('controllers.ts')) {
            if (!result) result = line.trim();
            if (!type) type = "CONTROLLER";
        }
        if (!dirList.services && line.includes('services.ts')) {
            if (!result) result = line.trim();
            if (!type) type = "SERVICE";
        }
        if (dirList.controller && dirList.services) {
            break;
        }
    }
    const textResult = result.includes('(') ? "at " + result.match(/\((.*?)\)/)?.[1] || "" : result;

    if (!type) type = "UNKNOWN";

    console.error(colors.bgRed.italic(`ERROR THROWN IN ${type}`));
    console.error(colors.red.italic(`▶  ${textResult}`));
}
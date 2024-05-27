import colors from 'colors';

function UpFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function lowerCaseToFirstLetter(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function underscoreToUpperCase(str: string): string {
    return str.split('_').map((word, index) => {
        return index === 0 ? word : UpFirst(word);
    }).join('');
}

function textColor(str: string, color: string = 'green'): string {
    if (color === "green") return colors.green(str);
    if (color === "red") return colors.red(str);
    return str;
}

function printMsg(str: string, color: string = 'success'): void {
    if (color === "success") console.log(colors.green.bold(str));
    if (color === "warning") console.log(colors.yellow(str));
    if (color === "error") console.log(colors.red.bold(str));
}

export { UpFirst, underscoreToUpperCase, textColor, printMsg, lowerCaseToFirstLetter };

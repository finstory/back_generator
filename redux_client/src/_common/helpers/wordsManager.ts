
function upFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function lowerCaseToFirstLetter(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function underscoreToUpperCase(str: string): string {
    return str
        .split("_")
        .map((word, index) => {
            return index === 0 ? word : upFirst(word);
        })
        .join("");
}

function underscoreToClassName(str: string): string {
    return str
        .split("_")
        .map((word) => {
            return upFirst(word);
        })
        .join("");

}

function hyphenToClassName(str: string): string {
    return str
        .split("-")
        .map((word) => {
            return upFirst(word);
        })
        .join("");
}


export { upFirst, underscoreToUpperCase, lowerCaseToFirstLetter, hyphenToClassName, underscoreToClassName };

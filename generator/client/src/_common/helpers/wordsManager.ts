
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



export { upFirst, underscoreToUpperCase, lowerCaseToFirstLetter };

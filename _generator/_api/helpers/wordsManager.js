const colors = require('colors');


function UpFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function lowerCaseToFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function underscoreToUpperCase(str) {
    return str.split('_').map((word, index) => {
        return index === 0 ? word : UpFirst(word);
    }).join('');
}

function textColor(str, color = 'green') {
    if (color = "green") return colors.green(str);
    if (color = "red") return colors.red(str);
}

function printMsg(str, color = 'success') {
    if (color === "success") console.log(colors.green.bold(str))
    if (color === "warning") console.log(colors.yellow(str))
    if (color === "error") console.log(colors.red.bold(str))
}

module.exports = { UpFirst, underscoreToUpperCase, textColor, printMsg, lowerCaseToFirstLetter };
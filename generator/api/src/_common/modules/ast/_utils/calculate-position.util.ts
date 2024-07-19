import { TextPosition } from "../_interfaces/ast.interface";


export function getTextPosition(textCode: string, wordToSearch: string, column: number): TextPosition {

    const lineContent = textCode.split('\n')[column - 1];
    return { column, row: lineContent.indexOf(wordToSearch) };
}
import { Pos } from "@interfaces";
import { TextCode } from "@interfaces";

export const insertCodeAfterPosition = (textCode: TextCode, codeToAdd: string, pos: Pos, addSpace: boolean) => {
    return textCode.slice(0, pos.end) + `\n${codeToAdd}${addSpace ? "\n" : ""}` + textCode.slice(pos.end);

}

export const removeCodeBetweenPos = (textCode: TextCode, pos: Pos, removeDownLine: boolean = true, removeUpLine: boolean = true) => {
    let numUp = removeDownLine ? (- 1) : 0;
    // if (typeof numUp === "number") numUp = removeDownLine;
    const numDown = removeUpLine ? 1 : 0;
    let codeGetting = textCode.slice(0, pos.start + numUp) + textCode.slice(pos.end + numDown);
    return codeGetting;
}
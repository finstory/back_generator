export const getName = (filePath: string) => {
    const nameFile = filePath.split("/").pop();
    return nameFile;
}
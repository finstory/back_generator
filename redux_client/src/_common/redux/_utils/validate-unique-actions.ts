const getMethodNames = (obj: object): string[] => {
    return Object.getOwnPropertyNames(obj).filter(name => typeof obj[name] === 'function');
}

function validateUniqueActions(sliceName: string, ...classes: object[]): void {
    const methodsMap: Record<string, Set<string>> = {};

    classes.forEach((cls, index) => {
        const methodNames = getMethodNames(cls);
        methodsMap[index] = new Set(methodNames);
    });

    for (let i = 0; i < classes.length; i++) {
        for (let j = i + 1; j < classes.length; j++) {
            const duplicateMethods = [...methodsMap[i]].filter(method => methodsMap[j].has(method));
            if (duplicateMethods.length > 0) {
                throw new Error(`"${duplicateMethods.join(', ')}" is redux action duplicate in "${sliceName}" reducer.`);
            }
        }
    }
}
export default validateUniqueActions;
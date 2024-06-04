interface ComparisonResult {
    origin: (string | number)[];
    equal: boolean;
}
interface Comparison {
    comparisonResult: ComparisonResult[],
    checkAll: boolean
}

export function compareObjects(objB: any, objA: any, path: (string | number)[] = []): ComparisonResult[] {
    const results: ComparisonResult[] = [];

    const keys = new Set([...Object.keys(objA), ...Object.keys(objB)]);

    keys.forEach((key) => {
        const valueA = objA[key];
        const valueB = objB[key];
        const currentPath = [...path, key];

        if (typeof valueA === 'object' && valueA !== null && typeof valueB === 'object' && valueB !== null) {
            // Recursive comparison for nested objects
            results.push(...compareObjects(valueA, valueB, currentPath));
        } else {
            // Direct comparison for primitive values
            results.push({
                origin: currentPath,
                equal: valueA === valueB
            });
        }
    });

    return results;
}

export function compareAstCode(jsonAstCodeA: any, jsonAstCodeB: any): Comparison {
    const comparisonResult = compareObjects(jsonAstCodeA, jsonAstCodeB);
    const checkAll = comparisonResult.every((result) => result.equal);
    return { comparisonResult, checkAll }
}
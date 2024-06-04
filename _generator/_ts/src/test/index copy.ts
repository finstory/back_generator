import S from "@/_common/config/services/all-services";
import { User } from './../app/user/_dtos/user.dto';

interface ComparisonResult {
    origin: (string | number)[];
    equal: boolean;
}

function compareObjects(objA: any, objB: any, path: (string | number)[] = []): ComparisonResult[] {
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

const testMain = async () => {
    try {

        // const filePath = "d:/Programacion_Extra/Node_ts/_generator/_ts/src/_common/modules/ast/file.ts";
        // const file = S.ast.functions.editRouterFunction("router.get('/all', validation.getUser, controller.getUser);", "/all", "get", undefined, "post")

        // console.log(file);

        // await S.package.createModule("auth");
        //  await S.endpoint.createEndpoint("auth", "/ok", "delete");
        //  await S.endpoint.createEndpoint("auth", "/", "get");
        //  await S.endpoint.createEndpoint("auth", "/email/profile", "get");
        // const file = await S.generator.fs.getFile(filePath)
        // const files = await S.generator.fs.createFolder(filePath);
        // const file = await S.generator.fs.deleteFolder(filePath);



        // Example usage with the given objects
        const expressionA = {
            "type": "CallExpression",
            "callee": {
                "type": "MemberExpression",
            },
            "arguments": [
                {
                    "type": "Literal",
                    "value": "/all",
                },
                {
                    "type": "Literal",
                    "value": "/all",
                },
            ]
        };

        const expressionB = {
            "type": "CallExpression",
            "callee": {
                "type": "MemberExpression",
            },
            "arguments": [
                {
                    "type": "UnknownType",
                    "value": "/user",
                },
                {
                    "type": "Literal",
                    "value": "/all",
                },
            ]
        };

        const result = compareObjects(expressionA, expressionB);
        console.log(result);


    } catch (error) {
        // console.error(error.type);
        console.error(error.message);
    }
};


class Users {
    name: string;
    age: number;
    isShort: boolean;
}



export default testMain;

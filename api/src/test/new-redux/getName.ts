import * as babelParser from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';

const nameMain = () => {

    function getName(obj: any): string {
        const code = `(${obj.toString()})`;
        const ast = babelParser.parse(code, {
            sourceType: 'module',
            plugins: ['typescript']
        });

        let path = '';

        traverse(ast, {
            MemberExpression(pathNode) {
                if (t.isIdentifier(pathNode.node.object)) {
                    path += pathNode.node.object.name + '.';
                } else if (t.isMemberExpression(pathNode.node.object)) {
                    //@ts-ignore
                    traverse(pathNode.node.object, this);
                }
                if (t.isIdentifier(pathNode.node.property)) {
                    path += pathNode.node.property.name;
                }
                pathNode.stop();
            }
        });

        return path;
    }

    const user = {
        name: {
            last: 'Doe'
        }
    };

    const variableGetting = user.name.last;
    getName(() => variableGetting)
}

export default nameMain;
import {Api, Function, StackContext, Table} from "@serverless-stack/resources";

export function MyStack({stack}: StackContext) {
    const table = new Table(stack, "MyTable", {
        fields: {
            PK: "string",
            SK: "string",
        },
        primaryIndex: {
            partitionKey: "PK",
            sortKey: "SK",
        }
    });

    const listStacksFn = new Function(stack, "ListStacks", {
        handler: "functions/list.go",
        runtime: "go1.x",
        permissions: [table],
        environment: {
            tableName: table.tableName,
        }
    });

    const getStackFn = new Function(stack, "GetStack", {
        handler: "functions/lambda.handler",
        permissions: [table],
        environment: {
            tableName: table.tableName,
        }
    });

    const api = new Api(stack, "Api", {
        routes: {
            "GET /notes": listStacksFn,
            "GET /note": getStackFn,
        }
    });

    // Show API endpoint in output
    stack.addOutputs({
        ApiEndpoint: api.url,
    });
}

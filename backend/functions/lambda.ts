import {APIGatewayProxyHandlerV2} from "aws-lambda";
import {DynamoDB} from "aws-sdk";

const documentClient = new DynamoDB.DocumentClient();

const tableName = process.env.tableName ?? ""

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    const ret = await documentClient.scan({TableName: tableName}).promise()

    if (!ret.Items) {
        return {statusCode: 500, body: "no items found"}
    }

    const resp = ret.Items.map(item => {
        item['id'] = item['PK'].replace("STACK#", "")
        delete item['PK']
        delete item['SK']
        return item
    })

    return {
        statusCode: 200,
        body: JSON.stringify(resp),
    };
};

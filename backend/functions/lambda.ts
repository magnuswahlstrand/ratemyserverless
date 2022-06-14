import {APIGatewayProxyHandlerV2} from "aws-lambda";
import {DynamoDB} from "aws-sdk";

const documentClient = new DynamoDB.DocumentClient();

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    const tableName = process.env.tableName ?? ""

    var params = {
        TableName: tableName,
        Key: {
            PK: "STACK#2AXIg1tOKa5RVST0KZmiXVaiMQt",
            SK: "STACK#2AXIg1tOKa5RVST0KZmiXVaiMQt",
        }
    };

    console.log(params)
    // console.log(dynamoDb)
    const ret = await documentClient.get(
        params
    ).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(ret),
    };
};

const AWS = require('aws-sdk');
const DynamoDB = new AWS.DynamoDB();
const uuidv4 = require('uuid/v4');

const putMessage = async (message) => {
    return await new Promise((resolve, reject) => {
        
        const params = {
            Item: {
                "ID": {
                    S: uuidv4()
                },
                "TO_ID": {
                    S: message['TO_ID']
                },
                "FROM_ID": {
                    S: message['FROM_ID']
                },
                "MESSAGE": {
                    S: message['MESSAGE']
                }
            },
            ReturnConsumedCapacity: "TOTAL",
            TableName: process.env.TABLE_MESSAGES
        };

        console.log(params);
        DynamoDB.putItem(params, (error, data) => {
            if (error) {
                console.log('Error dynamoDb.put()');
                resolve({
                    statusCode: 500, body: "Error occurred."
                });
            } else {
                console.log('Success dynamoDb.put()');
                resolve({ statusCode: 200, body: JSON.stringify(params.Item) });
            }
        });
    });

}

module.exports.putMessage = putMessage;

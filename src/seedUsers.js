const AWS = require('aws-sdk');
const DYNAMODB_CLIENT = new AWS.DynamoDB.DocumentClient();

//
// function to seed the users table
//
module.exports.handler = event => {

    console.log("need to seed users table");
    const table = process.env.TABLE_USERS;

    let users = [
        { 'ID': 100, 'FIRST_NAME': 'Jim', 'LAST_NAME': 'Bob' },
        { 'ID': 111, 'FIRST_NAME': 'Jenn', 'LAST_NAME': 'Modzel' },
        { 'ID': 123, 'FIRST_NAME': 'Sierra', 'LAST_NAME': 'Lansberry' },
        { 'ID': 200, 'FIRST_NAME': 'Jenevieve', 'LAST_NAME': 'Modzel' },
        { 'ID': 300, 'FIRST_NAME': 'Taylor', 'LAST_NAME': 'Lansberry' },
        { 'ID': 400, 'FIRST_NAME': 'Stella', 'LAST_NAME': 'Dog' }
    ];

    users.forEach(element => {
        let item = {
            TableName: table,
            Item: {
                "ID": element['ID'],
                "FIRST_NAME": element['FIRST_NAME'],
                "LAST_NAME": element['LAST_NAME'],
                "LAST_UPDATE": new Date().toISOString()
            }
        };
        console.log(item);
        putItem(item);
    });

};

const putItem = (item) => {
    console.log("in put item");
    DYNAMODB_CLIENT.put(item, function (err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        }
    });

};
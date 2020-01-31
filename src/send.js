'use strict';
// const AWS = require('aws-sdk');
// const S3 = new AWS.S3()
// const CSV = require('csvtojson');
const MessagesDynamoDB = require('./lib/messagesDynamoDB');


module.exports.handler = async (event) => {

  if (event["httpMethod"] == "POST") {
    let result = await processPost(event["body"]);
    console.log('after processPost()');
    //
    // blowing up
    //
    return { result };
  } else {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

};

const processPost = async (body) => {

  // Expecting payload:
  // {
  //   "to": "1",
  //   "from": "2",
  //   "message": "this is a message"
  // }

  let obj = JSON.parse(body);

  //'ID': uuidv4(),
    
  let message = {
    'TO_ID': obj['to'],
    'FROM_ID': obj['from'],
    'MESSAGE': obj['message']
  }

  //console.log(message);
  let r = await MessagesDynamoDB.putMessage(message);
  console.log('returned from await MessagesDynamoDB.putMessage');
  console.log(r); 
  return r;
};
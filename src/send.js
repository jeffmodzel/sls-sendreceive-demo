'use strict';
// const AWS = require('aws-sdk');
// const S3 = new AWS.S3()
// const CSV = require('csvtojson');
// const DynamoHelper = require('./lib/dynamoHelper');

module.exports.handler = async event => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

};


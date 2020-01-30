module.exports.handler = async event => {

    if (event["httpMethod"] == "GET") {
        console.log("need to get users!!!!");
    }

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


const UsersData = require('./lib/usersData');

module.exports.handler = async event => {

    if (event["httpMethod"] == "GET") {
        let results = await UsersData.getUsers();
        //console.log(results);
        return {
            statusCode: 200,
            body: JSON.stringify(results)
        };
    } else {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }

};


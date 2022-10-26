"use strict";
var fs = require('fs');
require('dotenv').config();
var ApolloServer = require('apollo-server-express').ApolloServer;
var path = require('path');
var GraphQLDate = require('./GraphQL/graphql_date');
var about = require('./respObjects/about');
var issue = require('./respObjects/issue');
var resolvers = {
    Query: {
        about: about.getMessage,
        // issueList: issue.list,
        // issue: issue.get,
    },
    // Mutation: {
    //     setAboutMessage: about.setMessage,
    //     issueAdd: issue.add,
    //     issueUpdate: issue.update,
    //     issueDelete: issue.delete,
    // },
    GraphQLDate: GraphQLDate,
};
var server = new ApolloServer({
    //  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    typeDefs: fs.readFileSync(path.join(process.cwd(), '', 'schema.graphql'), 'utf-8'),
    resolvers: resolvers,
    playground: true,
    formatError: function (error) {
        console.log(error);
        return error;
    },
});
function installHandler(app) {
    var enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
    console.log('CORS setting:', enableCors);
    server.applyMiddleware({ app: app, path: '/graphql', cors: enableCors });
}
module.exports = { installHandler: installHandler };
//# sourceMappingURL=api_handler.js.map
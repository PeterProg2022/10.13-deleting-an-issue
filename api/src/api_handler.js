const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const path = require('path');
const GraphQLDate = require('./GraphQL/graphql_date');
const about = require('./respObjects/about');
const issue = require('./respObjects/issue');

const resolvers = {
    Query: {
        about: about.getMessage,
        issueList: issue.list,
        issue: issue.get,
    },
    Mutation: {
        setAboutMessage: about.setMessage,
        issueAdd: issue.add,
        issueUpdate: issue.update,
        issueDelete: issue.delete,
    },
    GraphQLDate,
};

const server = new ApolloServer({
//  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    typeDefs: fs.readFileSync(path.join(process.cwd(), '', 'schema.graphql'), 'utf-8'),
    resolvers,
    playground: true,
    formatError: (error) => {
        console.log(error);
        return error;
    },
});

function installHandler(app) {
    const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
    console.log('CORS setting:', enableCors);
    server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler };

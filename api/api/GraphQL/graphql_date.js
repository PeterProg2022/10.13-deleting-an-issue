"use strict";
var GraphQLScalarType = require('graphql').GraphQLScalarType;
var Kind = require('graphql/language').Kind;
var GraphQLDate = new GraphQLScalarType({
    name: 'GraphQLDate',
    description: 'A Date() type in GraphQL as a scalar',
    serialize: function (value) {
        return value.toISOString();
    },
    parseValue: function (value) {
        var dateValue = new Date(value);
        return Number.isNaN(dateValue.getTime()) ? undefined : dateValue;
    },
    parseLiteral: function (ast) {
        if (ast.kind === Kind.STRING) {
            var value = new Date(ast.value);
            return Number.isNaN(value.getTime()) ? undefined : value;
        }
        return undefined;
    },
});
module.exports = GraphQLDate;
//# sourceMappingURL=graphql_date.js.map
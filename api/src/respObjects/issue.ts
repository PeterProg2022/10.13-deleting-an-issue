const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('../MongoDB/db');

// async function get(_, { id }) {
//   const db = getDb();
//   const issue = await db.collection('issues').findOne({ id });
//   return issue;
// }
//
// async function list(_, { status, effortMin, effortMax }) {
//   const db = getDb();
//   const filter = {};
//
//   if (status) filter.status = status;
//
//   if (effortMin !== undefined || effortMax !== undefined) {
//     filter.effort = {};
//     if (effortMin !== undefined) filter.effort.$gte = effortMin;
//     if (effortMax !== undefined) filter.effort.$lte = effortMax;
//   }
//
//   const issues = await db.collection('issues').find(filter).toArray();
//   return issues;
// }
//
// function validate(issue) {
//   const errors = [];
//   if (issue.title.length < 3) {
//     errors.push('Field "title" must be at least 3 characters long.');
//   }
//   if (issue.status === 'Assigned' && !issue.owner) {
//     errors.push('Field "owner" is required when status is "Assigned"');
//   }
//   if (errors.length > 0) {
//     throw new UserInputError('Invalid input(s)', { errors });
//   }
// }
//
// async function add(_, { issue }) {
//   const db = getDb();
//   validate(issue);
//
//   const newIssue = Object.assign({}, issue);
//   newIssue.created = new Date();
//   newIssue.id = await getNextSequence('issues');
//
//   const result = await db.collection('issues').insertOne(newIssue);
//   const savedIssue = await db.collection('issues')
//     .findOne({ _id: result.insertedId });
//   return savedIssue;
// }
//
// async function update(_, { id, changes }) {
//   const db = getDb();
//   if (changes.title || changes.status || changes.owner) {
//     const issue = await db.collection('issues').findOne({ id });
//     Object.assign(issue, changes);
//     validate(issue);
//   }
//   await db.collection('issues').updateOne({ id }, { $set: changes });
//   const savedIssue = await db.collection('issues').findOne({ id });
//   return savedIssue;
// }
//
// async function remove(_, { id }) {
//   const db = getDb();
//   const issue = await db.collection('issues').findOne({ id });
//   if (!issue) return false;
//   issue.deleted = new Date();
//
//   let result = await db.collection('deleted_issues').insertOne(issue);
//   if (result.insertedId) {
//     result = await db.collection('issues').removeOne({ id });
//     return result.deletedCount === 1;
//   }
// }
//
// module.exports = {
//   list,
//   add,
//   get,
//   update,
//   delete: remove,
// };

module.exports = class Issue {
    db;

    constructor() {
      this.db = getDb();
    }
    async get(_, { id }) {
        const issue = await this.db.collection('issues').findOne({ id });
        return issue;
    }

    async list(_, { status, effortMin, effortMax }) {
        const filter = {};
        if (status) filter.status = status;
        if (effortMin !== undefined || effortMax !== undefined) {
            filter.effort = {};
            if (effortMin !== undefined) filter.effort.$gte = effortMin;
            if (effortMax !== undefined) filter.effort.$lte = effortMax;
        }

        const issues = await this.db.collection('issues').find(filter).toArray();
        return issues;
    }

    static validate(issue) {
        const errors = [];
        if (issue.title.length < 3) {
            errors.push('Field "title" must be at least 3 characters long.');
        }
        if (issue.status === 'Assigned' && !issue.owner) {
            errors.push('Field "owner" is required when status is "Assigned"');
        }
        if (errors.length > 0) {
            throw new UserInputError('Invalid input(s)', { errors });
        }
    }

    async add(_, { issue }) {
        Issue.validate(issue);

        const newIssue = { ...issue };
        newIssue.created = new Date();
        newIssue.id = await getNextSequence('issues');

        const result = await this.db.collection('issues').insertOne(newIssue);
        const savedIssue = await this.db.collection('issues')
            .findOne({ _id: result.insertedId });
        return savedIssue;
    }

    async update(_, { id, changes }) {
        if (changes.title || changes.status || changes.owner) {
            const issue = await this.db.collection('issues').findOne({ id });
            Object.assign(issue, changes);
            Issue.validate(issue);
        }
        await this.db.collection('issues').updateOne({ id }, { $set: changes });
        const savedIssue = await this.db.collection('issues').findOne({ id });
        return savedIssue;
    }

    async remove(_, { id }) {
        const issue = await this.db.collection('issues').findOne({ id });
        if (!issue) return false;
        issue.deleted = new Date();

        let result = await this.db.collection('deleted_issues').insertOne(issue);
        if (result.insertedId) {
            result = await this.db.collection('issues').removeOne({ id });
            return result.deletedCount === 1;
        }
    }
};

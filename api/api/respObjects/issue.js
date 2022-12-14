"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var UserInputError = require('apollo-server-express').UserInputError;
var _a = require('../MongoDB/db'), getDb = _a.getDb, getNextSequence = _a.getNextSequence;
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
module.exports = /** @class */ (function () {
    function Issue() {
        this.db = getDb();
    }
    Issue.prototype.get = function (_, _a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var issue;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.db.collection('issues').findOne({ id: id })];
                    case 1:
                        issue = _b.sent();
                        return [2 /*return*/, issue];
                }
            });
        });
    };
    Issue.prototype.list = function (_, _a) {
        var status = _a.status, effortMin = _a.effortMin, effortMax = _a.effortMax;
        return __awaiter(this, void 0, void 0, function () {
            var filter, issues;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        filter = {};
                        if (status)
                            filter.status = status;
                        if (effortMin !== undefined || effortMax !== undefined) {
                            filter.effort = {};
                            if (effortMin !== undefined)
                                filter.effort.$gte = effortMin;
                            if (effortMax !== undefined)
                                filter.effort.$lte = effortMax;
                        }
                        return [4 /*yield*/, this.db.collection('issues').find(filter).toArray()];
                    case 1:
                        issues = _b.sent();
                        return [2 /*return*/, issues];
                }
            });
        });
    };
    Issue.validate = function (issue) {
        var errors = [];
        if (issue.title.length < 3) {
            errors.push('Field "title" must be at least 3 characters long.');
        }
        if (issue.status === 'Assigned' && !issue.owner) {
            errors.push('Field "owner" is required when status is "Assigned"');
        }
        if (errors.length > 0) {
            throw new UserInputError('Invalid input(s)', { errors: errors });
        }
    };
    Issue.prototype.add = function (_, _a) {
        var issue = _a.issue;
        return __awaiter(this, void 0, void 0, function () {
            var newIssue, _b, result, savedIssue;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        Issue.validate(issue);
                        newIssue = __assign({}, issue);
                        newIssue.created = new Date();
                        _b = newIssue;
                        return [4 /*yield*/, getNextSequence('issues')];
                    case 1:
                        _b.id = _c.sent();
                        return [4 /*yield*/, this.db.collection('issues').insertOne(newIssue)];
                    case 2:
                        result = _c.sent();
                        return [4 /*yield*/, this.db.collection('issues')
                                .findOne({ _id: result.insertedId })];
                    case 3:
                        savedIssue = _c.sent();
                        return [2 /*return*/, savedIssue];
                }
            });
        });
    };
    Issue.prototype.update = function (_, _a) {
        var id = _a.id, changes = _a.changes;
        return __awaiter(this, void 0, void 0, function () {
            var issue, savedIssue;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(changes.title || changes.status || changes.owner)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db.collection('issues').findOne({ id: id })];
                    case 1:
                        issue = _b.sent();
                        Object.assign(issue, changes);
                        Issue.validate(issue);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.db.collection('issues').updateOne({ id: id }, { $set: changes })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.db.collection('issues').findOne({ id: id })];
                    case 4:
                        savedIssue = _b.sent();
                        return [2 /*return*/, savedIssue];
                }
            });
        });
    };
    Issue.prototype.remove = function (_, _a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var issue, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.db.collection('issues').findOne({ id: id })];
                    case 1:
                        issue = _b.sent();
                        if (!issue)
                            return [2 /*return*/, false];
                        issue.deleted = new Date();
                        return [4 /*yield*/, this.db.collection('deleted_issues').insertOne(issue)];
                    case 2:
                        result = _b.sent();
                        if (!result.insertedId) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.db.collection('issues').removeOne({ id: id })];
                    case 3:
                        result = _b.sent();
                        return [2 /*return*/, result.deletedCount === 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Issue;
}());
//# sourceMappingURL=issue.js.map
var aboutMessage = 'Issue Tracker API v1.0';
function setMessage(_, _a) {
    var message = _a.message;
    aboutMessage = message;
    return aboutMessage;
}
function getMessage() {
    return aboutMessage;
}
module.exports = { getMessage: getMessage, setMessage: setMessage };
//# sourceMappingURL=about.js.map
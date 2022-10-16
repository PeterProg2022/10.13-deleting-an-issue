"use strict";
var aboutMessage = 'Issue Tracker API v1.3';
function setMessage(_, _a) {
    var message = _a.message;
    aboutMessage = message;
    return aboutMessage;
}
function getMessage() {
    return aboutMessage;
}
module.exports = { getMessage: getMessage, setMessage: setMessage };
// module.exports = class About {
//     let aboutMessage:string = 'Issue Tracker API v1.3';
//
//
//     setMessage(_, { message }):string {
//         aboutMessage = message;
//         return this.aboutMessage;
//     }
//
//     getMessage():string {
//         return aboutMessage;
//     }
// };
// module.exports = { About };
//# sourceMappingURL=about.js.map
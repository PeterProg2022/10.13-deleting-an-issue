let aboutMessage = 'Issue Tracker API v1.3';


function setMessage(_, { message }):string {
    aboutMessage = message;
    return aboutMessage;
}

function getMessage():string {
    return aboutMessage;
}

module.exports = { getMessage, setMessage };

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

let aboutMessage = 'Issue Tracker API v1.3';

// @ts-ignore
function setMessage(_, { message }):string {
	aboutMessage = message;
	return aboutMessage;
}

function getMessage():string {
	return aboutMessage;
}

module.exports = { getMessage, setMessage };

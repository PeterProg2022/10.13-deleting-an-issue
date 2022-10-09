let aboutMessage = 'Issue Tracker API v1.0';

function setMessage(_, { message }):string {
	aboutMessage = message;
	return aboutMessage;
}

function getMessage():string {
	return aboutMessage;
}

module.exports = { getMessage, setMessage };

require('dotenv').config();
const express = require('express');
const { connectToDb } = require('./MongoDB/db');
const { installHandler } = require('./api_handler');

const app = express();

installHandler(app);

const port = process.env.API_SERVER_PORT || 3000;

(async function start() {
    try {
        await connectToDb();
        app.listen(port, () => { console.log(`API server started on port ${port}`); });
    } catch (err) { console.log('ERROR:', err); }
}());

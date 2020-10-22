const mongoose = require('mongoose');
const config = require('../config/config');

const connectionInstance  = mongoose.createConnection(config.MONGO_CONNECTION_STRING,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connectionInstance.on('error', (err) => {
    if (err) {
        console.log(`Cannot connect to the database! at ${new Date()}`, err);
        throw err;
    }
});

connectionInstance.once('open', () => {
    console.log(`MongoDb connected successfully, date is = ${new Date()}`);
});

module.exports = connectionInstance;

const logDebug = true;

mongoose.set('debug', logDebug);
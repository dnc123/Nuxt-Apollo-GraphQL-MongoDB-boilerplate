var dotEnv = require('dotenv').config().parsed;

module.exports = {
    target: 'node',
    mode: dotEnv.APP_PRODUCTION === 'true' ? 'production' : 'development',
    entry: './src/server.js',
    output: {
        filename: './server.js'
    },
};
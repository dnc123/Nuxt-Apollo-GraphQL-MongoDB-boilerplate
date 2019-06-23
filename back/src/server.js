import expressServer from 'express';
import expressGraphQL from 'express-graphql';
import dotEnv from 'dotenv';
import mongo from 'mongodb';
import {makeExecutableSchema} from 'graphql-tools/dist/index';
import graphQLSchema from './graphql/schema';
import cors from 'cors';

initApp();

async function initApp() {
    initDotEnv();
    let express = initExpress();
    initCors(express);
    await initDBConnection();
    initGraphQL(express);
    startServer(express);
}

function initCors(express) {
    express.use(cors());
}

function initDotEnv() {
    dotEnv.config();
}

function initExpress() {
    let express = expressServer();

    express.set('port', process.env.APP_PORT);

    return express;
}

async function initDBConnection() {
    await mongo.MongoClient.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
    }, (err, db) => {
        global.mongoDB = db.db(process.env.DB_NAME);
    });
}

function initGraphQL(express) {
    const IS_GRAPHIQL_ENABLED = process.env.NODE_ENV === 'development';

    express.use(process.env.GRAPHQL_ENDPOINT, expressGraphQL({
        schema: makeExecutableSchema(graphQLSchema),
        graphiql: IS_GRAPHIQL_ENABLED,
    }));
}

function startServer(express) {
    express.listen(process.env.APP_PORT, process.env.APP_URL);
}
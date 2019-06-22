import expressServer from 'express';
import expressGraphQL from 'express-graphql';
import dotenv from 'dotenv';
import mongo from 'mongodb';
import {makeExecutableSchema} from 'graphql-tools/dist/index';
import graphQLTypeDefs from './graphql/typeDefs';
import graphQLResolvers from './graphql/resolvers';
import {Nuxt, Builder} from 'nuxt';
import nuxtConfig from '../../nuxt.config';

initApp().catch(e => {
    console.log('R.I.P.', e);
});

async function initApp() {
    initDotEnv();
    let express = initExpress();
    await initDBConnection();
    initGraphQL(express);
    await initNuxt(express);
    startServer(express);
}

function initDotEnv() {
    dotenv.config();
}

function initExpress() {
    let express = expressServer();

    express.set('port', process.env.APP_PORT);

    return express;
}

async function initDBConnection() {
    await mongo.MongoClient.connect(process.env.DB_URL, {
        useNewUrlParser: true,
    }, (err, db) => {
        global.mongoDB = db.db(process.env.DB_NAME);
    });
}

function initGraphQL(express) {
    const IS_GRAPHIQL_ENABLED = process.env.APP_PRODUCTION === 'true';

    express.use(process.env.GRAPHQL_ENDPOINT, expressGraphQL({
        schema: makeExecutableSchema({
            typeDefs: graphQLTypeDefs,
            resolvers: graphQLResolvers,
        }),
        graphiql: IS_GRAPHIQL_ENABLED,
    }));
}

async function initNuxt(express) {
    const nuxt = new Nuxt(nuxtConfig);

    if (process.env.APP_PRODUCTION !== 'true') {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    express.use(nuxt.render);
}

function startServer(express) {
    express.listen(process.env.APP_POST, process.env.APP_URL);
}
import ApolloClient from 'apollo-boost';

const GRAPHQL_ENDPOINT = 'http://localhost:3002/gql';

global.apollo = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
});
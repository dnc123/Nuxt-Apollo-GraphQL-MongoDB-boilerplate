import {resolve as exampleQuery, TYPE as EXAMPLE_QUERY_TYPE} from './queries/exampleQuery';
import {resolve as anotherExampleQuery, TYPE as ANOTHER_EXAMPLE_QUERY_TYPE} from './queries/anotherExampleQuery';
import {resolve as exampleMutation, TYPE as EXAMPLE_MUTATION_TYPE} from './mutations/exampleMutation';
import EXAMPLE_RESPONSE_OBJECT_TYPE from './types/exampleResponseObject';

export default {
    resolvers: {
        Query: {
            exampleQuery,
            anotherExampleQuery,
        },

        Mutation: {
            exampleMutation,
        },
    },

    typeDefs: `
        ${EXAMPLE_RESPONSE_OBJECT_TYPE}
        
        type Query {
            ${EXAMPLE_QUERY_TYPE}
            ${ANOTHER_EXAMPLE_QUERY_TYPE}
        }
        
        type Mutation {
            ${EXAMPLE_MUTATION_TYPE}
        }
    `,
}
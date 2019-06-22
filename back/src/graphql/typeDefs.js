import exampleQuery from './typeDefs/queries/exampleQuery';
import exampleMutation from './typeDefs/mutations/exampleMutation';
import randomType from './typeDefs/types/randomType';

export default `
    ${randomType}
    
    type Query {
        ${exampleQuery}
    }
    
    type Mutation {
        ${exampleMutation}
    }
`;
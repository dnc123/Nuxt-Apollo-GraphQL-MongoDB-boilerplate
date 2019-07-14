import apolloTriggerExampleQuery from '@/apollo/triggerExampleQuery.gql';
import apolloTriggerExampleMutation from '@/apollo/triggerExampleMutation.gql';

export function triggerExampleQuery(someInput, anotherInput) {
    return apollo.query({
        query: apolloTriggerExampleQuery,
        variables: {
            someInput,
            anotherInput,
        },
    });
}

export function triggerExampleMutation(requestInput) {
    return apollo.mutate({
        mutation: apolloTriggerExampleMutation,
        variables: {
            requestInput,
        },
    });
}
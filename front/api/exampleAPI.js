import apolloTriggerExampleQuery from '@/apollo/triggerExampleQuery.gql';
import apolloTriggerExampleMutation from '@/apollo/triggerExampleMutation.gql';

// const APOLLO_CLIENT = $nux

export function triggerExampleQuery(someInput, anotherInput) {
    return $nuxt.$apolloProvider.clients.defaultClient.query({
        query: apolloTriggerExampleQuery,
        variables: {
            someInput,
            anotherInput,
        },
    });
}

export function triggerExampleMutation(requestInput) {
    return $nuxt.$apolloProvider.clients.defaultClient.mutate({
        mutation: apolloTriggerExampleMutation,
        variables: {
            requestInput,
        },
    });
}
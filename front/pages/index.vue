<template>
    <div>
        <h1>Index</h1>
        <BaseComponentExample />
    </div>
</template>

<script>
    import triggerExampleQuery from '@/apollo/triggerExampleQuery.gql';

    export default {
        mounted() {
            console.log('test', this.$apollo);
            this.$apollo.mutate({
                mutation: triggerExampleQuery,
                variables: {
                    someInput: 'this is string input',
                    anotherInput: 3,
                },
            }).then(exampleRequestResponse => {
                console.log('resp', exampleRequestResponse);
            });
        },
    }
</script>
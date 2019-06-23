<template>
    <div>
        <h1 @click='callExampleGraphQLQuery'>Hi, click me to call graphQL query</h1>
        <BaseComponentExample />
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import {NAMESPACE as EXAMPLE_VUEX_MODULE_NAMESPACE} from '@/store/exampleVuexModule';
    import {EXAMPLE_VUEX_MODULE_ACTIONS} from '@/store/exampleVuexModule/actions';

    export default {
        methods: {
            ...mapActions({
                callExampleGraphQLQuery: `${EXAMPLE_VUEX_MODULE_NAMESPACE}/${EXAMPLE_VUEX_MODULE_ACTIONS.CALL_EXAMPLE_GRAPHQL_QUERY}`,
            }),
        },
    }
</script>
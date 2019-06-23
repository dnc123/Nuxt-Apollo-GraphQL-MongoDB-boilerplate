import {EXAMPLE_VUEX_MODULE_MUTATIONS} from '@/store/exampleVuexModule/mutations';
import {triggerExampleQuery} from '@/api/exampleAPI';

export const EXAMPLE_VUEX_MODULE_ACTIONS = {
    SET_EXAMPLE_STATE_DATA: 'EXAMPLE_STATE_DATA',
    CALL_EXAMPLE_GRAPHQL_QUERY: 'CALL_EXAMPLE_GRAPHQL_QUERY',
};

export default {
    [EXAMPLE_VUEX_MODULE_ACTIONS.SET_EXAMPLE_STATE_DATA]({commit}, newData) {
        commit(EXAMPLE_VUEX_MODULE_MUTATIONS, newData);
    },

    [EXAMPLE_VUEX_MODULE_ACTIONS.CALL_EXAMPLE_GRAPHQL_QUERY]() {
        triggerExampleQuery('test', 2).then(exampleQueryResponse => {
            console.log('response = ', exampleQueryResponse);
        });
    },
}
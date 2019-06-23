export const EXAMPLE_VUEX_MODULE_MUTATIONS = {
    SET_EXAMPLE_STATE_DATA: 'EXAMPLE_STATE_DATA',
};

export default {
    [EXAMPLE_VUEX_MODULE_MUTATIONS.SET_EXAMPLE_STATE_DATA](state, newData) {
        state.exampleStateData = newData;
    },
}
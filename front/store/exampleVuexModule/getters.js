export const EXAMPLE_VUEX_MODULE_GETTERS = {
    EXAMPLE_STATE_DATA: 'EXAMPLE_STATE_DATA',
};

export default {
    [EXAMPLE_VUEX_MODULE_GETTERS.EXAMPLE_STATE_DATA]: state => state.exampleStateData,
}
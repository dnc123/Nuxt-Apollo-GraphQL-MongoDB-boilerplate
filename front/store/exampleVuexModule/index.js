import moduleState from '@/store/exampleVuexModule/state';
import moduleActions from '@/store/exampleVuexModule/actions';
import moduleMutations from '@/store/exampleVuexModule/mutations';
import moduleGetters from '@/store/exampleVuexModule/getters';

export const NAMESPACE = 'exampleVuexModule';

export const state = moduleState;
export const getters = moduleGetters;
export const actions = moduleActions;
export const mutations = moduleMutations;


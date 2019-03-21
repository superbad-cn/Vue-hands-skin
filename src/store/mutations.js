import * as types from './mutations-types';

const mutations = {
  [types.SET_INDEX](state, payload) {
    state.tabbarIndex = payload;
  }
};

export default mutations;

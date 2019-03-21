import * as types from './mutations-types';

const actions = {
  setIndex (context, number) {
    context.commit(types.SET_INDEX, number);
  }
}

export default actions;

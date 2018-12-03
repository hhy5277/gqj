'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default function createStore(initState) {
  const state = {
    ctx: null,
    dialogVisible: false,
    labelTotal: 0,
    labelList: [],
    articleTotal: 0,
    articleList: [],
    article: {},
    ...initState
  };
  return new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  });
}
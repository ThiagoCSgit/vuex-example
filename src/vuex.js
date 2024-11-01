import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    dec: (state) => state.counter--,
    inc: (state) => state.counter++,
  },
  getters: {
    counter: (state) => state.counter + 5,
  },
  actions: {
    decA: (context) => context.commit("dec"),
    incA: (context) => context.commit("inc"),
  },
});

export default store;

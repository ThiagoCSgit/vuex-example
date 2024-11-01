<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
    <button @click="dec">Decrement</button>
    <button @click="inc">Increment</button>
  </div>
</template>

<!-- Options API -->
<!-- <script>
export default {
  name: "MyCounter",
  data: () => ({
    counter: 0,
  }),
  methods: {
    inc: function () {
      this.counter++;
    },
    dec: function () {
      this.counter--;
    },
  },
};
</script> -->

<!-- Composition API -->
<!-- <script setup>
import { ref } from "vue";
const counter = ref(0);
function inc() {
  counter.value++;
}
function dec() {
  counter.value--;
}
</script> -->

<!-- Usando Vuex no Vue3 -->
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

// export default {
// setup() {
const store = useStore();
const counter = computed(() => store.state.counter);
const counterG = computed(() => store.getters.counter);

console.log("store:", store);
console.log(counter.value); // Acesse o valor do `counter` aqui
console.log(counterG.value); // Acesse o valor do `counter` aqui

// const inc = () => {
//   store.commit("inc");
// };
// const dec = () => {
//   store.commit("dec");
// };
const inc = () => {
  store.dispatch("incA");
};
const dec = () => {
  store.dispatch("decA");
};

// return { counter, inc, dec };
// },
// };
</script>

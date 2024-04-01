import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})



// const count = ref(0)
// const doubleCount = computed(() => count.value * 2)
// function increment() {
//   count.value++
// }

// return { count, doubleCount, increment }
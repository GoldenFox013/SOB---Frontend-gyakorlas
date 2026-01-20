import { defineStore } from 'pinia'

export const useFlowersStore = defineStore('flowers', {
  state: () => ({
    flowers: []
  }),
  actions: {
    async fetchFlowers() {
      const res = await fetch('http://localhost:3000/flowers')
      this.flowers = await res.json()
    },
    getFlowerById(id) {
      return this.flowers.find(f => f.id === parseInt(id))
    }
  }
})

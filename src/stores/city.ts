import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCityStore = defineStore('city', () => {
  const cityName = ref('')
  function change(name: string) {
    cityName.value = name
  }

  return { cityName, change }
})

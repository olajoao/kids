import { defineStore } from "pinia"
import request from "../request"

export const useCategoriesStore = defineStore("useCategoriesStore", {
  state: () => {
    return {
      categories: [] as string[],
    }
  },

  actions: {
    async all() {
      const { data } = await request.get("/products/categories")

      this.categories = data
    },
  },

  getters: {
    highCategories: (state) => state.categories.slice(0, 8),
  },
})

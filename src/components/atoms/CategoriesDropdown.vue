<template>
  <div
    class="max-h-96 overflow-y-auto border-t-[15px] border-t-transparent absolute top-full transition-all duration-300 max-w-xs w-full rounded bg-main-white z-40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
  >
    <div class="flex flex-col">
      <router-link
        to="/"
        v-for="(categorie, index) in categories"
        :key="index"
        class="py-3 px-5 hover:bg-light-brown/20"
      >
        <span class="capitalize font-medium text-dark-brown tracking-wider">
          {{ categorie }}
        </span>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue"
import { useCategoriesStore } from "@/store/CategoriesStore"

export default defineComponent({
  setup() {
    const CategoriesStore = useCategoriesStore()

    const categories = computed(() => CategoriesStore.categories)
    return { categories }
  },
})
</script>

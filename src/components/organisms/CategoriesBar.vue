<template>
  <div class="container mx-auto">
    <div class="flex items-center gap-10 my-5">
      <div class="relative group">
        <CategoriesButton />
        <CategoriesDropdown />
      </div>

      <div class="flex items-center justify-between flex-1">
        <CategoryShortcut
          v-for="(categorie, index) in categories"
          :key="categorie.id"
          :name="categorie.name"
        >
          <BoltIcon v-if="index === 0" class="w-5 h-5 lg:w-6 lg:h-6" />
          <TicketIcon v-if="index === 1" class="w-5 h-5 lg:w-6 lg:h-6" />
        </CategoryShortcut>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import CategoryShortcut from "@components/atoms/CategoryShortcut.vue"
import { BoltIcon, TicketIcon } from "@heroicons/vue/24/outline"
import CategoriesButton from "@components/atoms/CategoriesButton.vue"
import CategoriesDropdown from "@components/atoms/CategoriesDropdown.vue"
import { useCategoriesStore } from "@/store/CategoriesStore"

export default defineComponent({
  components: {
    CategoryShortcut,
    BoltIcon,
    TicketIcon,
    CategoriesButton,
    CategoriesDropdown,
  },
  setup() {
    const CategoriesStore = useCategoriesStore()
    const categories = computed(() => CategoriesStore.highCategories)

    onMounted(() => CategoriesStore.all())
    return { categories }
  },
})
</script>

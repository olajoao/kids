<template>
  <router-link to="/">
    <div
      class="relative after:content-['13'] after:absolute after:bg-dark-brown after:w-4 after:z-10 after:h-4 after:left-4 after:bottom-4 after:rounded after:text-[10px] after:text-white after:text-center after:font-bold"
    >
      <HeartIcon
        class="w-5 h-5 lg:w-7 lg:h-7 text-dark-brown hover:text-light-brown"
      />
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { HeartIcon } from "@heroicons/vue/24/outline"

export default defineComponent({
  components: { HeartIcon },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>

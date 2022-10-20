<template>
  <router-link to="/">
    <UserIcon
      class="w-5 h-5 lg:w-7 lg:h-7 text-dark-brown hover:text-light-brown"
    />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { UserIcon } from "@heroicons/vue/24/outline"

export default defineComponent({
  components: { UserIcon },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>

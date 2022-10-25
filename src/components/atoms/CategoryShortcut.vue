<template>
  <router-link class="last:hidden 2xl:last:flex" to="/">
    <div class="items-center gap-2 flex text-dark-brown hover:text-dark-gray">
      <slot />
      <span class="text-sm font-medium ">
        {{ name }}
      </span>
    </div>
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

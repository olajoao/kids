<template>
  <router-link to="/">
    <div class="flex items-center gap-2">
      <slot />
      <span class="text-sm font-medium text-dark-brown">
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

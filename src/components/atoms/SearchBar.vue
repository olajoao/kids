<template>
  <div class="relative hidden lg:block">
    <input
      type="text"
      class="pr-12 py-2 pl-3 rounded-md shadow-sm shadow-light-brown/30 w-full border border-light-brown/30 focus:border-light-brown/50 outline-none"
      placeholder="Estou procurando..."
    />
    <MagnifyingGlassIcon
      class="w-5 h-5 lg:w-6 lg:h-6 text-light-brown absolute inset-y-0 my-auto right-3"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline"

export default defineComponent({
  components: { MagnifyingGlassIcon },
})
</script>

<template>
  <article class="flex gap-3">
    <slot />
    <div class="flex flex-col gap-2">
      <p class="text-sm font-medium text-dark-gray">{{ info.title }}</p>
      <span class="text-dark-gray/50 text-xs" v-html="info.description"></span>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Info {
  title: string
  description: string
}
export default defineComponent({
  props: {
    info: { type: Object as PropType<Info>, required: true} 
  }
})
</script>
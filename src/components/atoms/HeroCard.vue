<template>
  <div
    class="rounded-xl p-5 shadow-md flex flex-col justify-between"
    :class="[card?.colors]"
  >
    <h1 class="title-default">
      {{ card?.text }}
    </h1>
    <router-link to="/" class="cta-default">
      <span> {{ ctaText }} </span>
      <ArrowLongRightIcon class="w-5 h-5 lg:w-6 lg:h-6 mt-1" />
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

interface Card {
  text: string
  colors: string
}

export default defineComponent({
  components: { ArrowLongRightIcon },
  props: {
    card: { type: Object as PropType<Card>, required: true },
    ctaText: String
  }
})
</script>

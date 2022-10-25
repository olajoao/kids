<template>
  <div
    class="rounded-md p-10 flex flex-col justify-between"
    :class="[card?.colors]"
  >
    <div>
      <h1 class="title-default">
        {{ card?.text }}
      </h1>
  
      <h2 class="my-5 text-xs lg:text-sm 2xl:text-base text-dark-brown opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi doloremque soluta earum quasi odit aliquid velit, unde eveniet ipsum nemo.</h2>
    </div>
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

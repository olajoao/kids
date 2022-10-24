<template>
  <section class="bg__hero 2xl:h-[50vh] w-full">
    <div class="bg-main-white/90 w-full h-full">
      <div class="container mx-auto flex py-10 gap-x-10 h-full">
        <HeroCard
          class="w-full max-w-md"
          :card="{
            text: 'Lorem ipsum dolor sit amet consectum',
            colors: 'bg-main-gray shadow-dark-brown/30  text-dark-brown'
          }"
          ctaText="Find course"
        />
        <HeroCard
          class="flex-1"
          :card="{
            text: 'How i met your mother',
            colors: 'bg-dark-gray  shadow-dark-brown/30  text-main-white'
          }"
          ctaText="Discover everything"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeroCard from '../atoms/HeroCard.vue'

export default defineComponent({
  components: { HeroCard }
})
</script>
<style scoped>
.bg__hero {
  background: url('@/assets/hero-bg.png');
  background-size: 40%;
}
</style>

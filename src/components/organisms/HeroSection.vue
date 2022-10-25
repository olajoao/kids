<template>
  <section class="bg__hero 2xl:h-[60vh] w-full">
    <div class="bg-main-white/90 w-full h-full">
      <div class="container mx-auto flex py-14 gap-x-10 h-full">
        <HeroCard
          class="w-full max-w-md"
          :card="{
            text: 'Lorem ipsum dolor sit amet consectum',
            colors: 'bg-white text-dark-brown'
          }"
          ctaText="Encontrar curso"
        />
        <HeroCard
          class="flex-1"
          :card="{
            text: 'How i met your mother',
            colors: 'bg-main-white text-dark-brown'
          }"
          ctaText="Explorar mais"
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

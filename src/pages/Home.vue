<template>
  <div class="bg-white min-h-screen">
    <Header />
    <CategoriesBar />
    <HeroSection />
    <main>
      <div class="container mx-auto py-10">
        <h1 class="title-default text-dark-gray text-center mb-10">
          Lorem, ipsum dolor.
        </h1>
        <div
          class="bg-main-white border border-main-white shadow shadow-main-white rounded-lg p-6 h-96"
        ></div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/organisms/Header.vue'
import CategoriesBar from '../components/organisms/CategoriesBar.vue'
import HeroSection from '../components/organisms/HeroSection.vue'

export default defineComponent({
  components: {
    Header,
    CategoriesBar,
    HeroSection
  }
})
</script>

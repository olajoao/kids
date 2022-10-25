<template>
  <div class="bg-white min-h-screen">
    <Header />
    <CategoriesBar />
    <HeroSection />
    <GeneralInfos />
    <ProductsMostWanted />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/organisms/Header.vue'
import CategoriesBar from '../components/organisms/CategoriesBar.vue'
import HeroSection from '../components/organisms/HeroSection.vue'
import GeneralInfos from '../components/organisms/GeneralInfos.vue'
import HomeProductList from '../components/molecules/HomeProductList.vue'
import ProductsMostWanted from '../components/organisms/ProductsMostWanted.vue'

export default defineComponent({
  components: {
    Header,
    CategoriesBar,
    HeroSection,
    GeneralInfos,
    HomeProductList,
    ProductsMostWanted
}
})
</script>

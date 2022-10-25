<template>
  <section class="py-10 px-5 lg:px-0">
    <div class="container mx-auto">
      <h1 class="text-dark-brown font-medium mb-5">Mais vendidos</h1>
      <HomeProductList />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HomeProductList from '../molecules/HomeProductList.vue';

export default defineComponent({
  components: { HomeProductList }
})
</script>
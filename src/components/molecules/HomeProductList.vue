<template>
  <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 container mx-auto">
    <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ProductCard from '../atoms/ProductCard.vue';

export default defineComponent({
    components: { ProductCard },
    setup() {
      const products = reactive([
        { name: 'Curso de Maquiagem', price: '49.90', rating: '5,0', owner: 'João Küster'},
        { name: 'Como cozinhar', price: '39.90', rating: '4,99', owner: 'Luana Nascimento'},
        { name: 'Viajar sozinho', price: '79.90', rating: '4,97', owner: 'Laura Nascimento'},
        { name: 'Tocar violão', price: '29.90', rating: '4,97', owner: 'Aurora Nascimento Küster'},
        { name: 'Aprenda a se comunicar', price: '29.90', rating: '4,97', owner: 'João Küster'},
        { name: 'Aprenda a se comunicar', price: '29.90', rating: '4,98', owner: 'Aurora Nascimento Küster'},
        { name: 'Viajar sozinho', price: '79.90', rating: '4,97', owner: 'Aurora Nascimento Küster'},
        { name: 'Tocar violão', price: '29.90', rating: '4,97', owner: 'João Küster'},
        { name: 'Aprenda a se comunicar', price: '29.90', rating: '4,98', owner: 'Laura Nascimento'},
        { name: 'Curso de Maquiagem', price: '49.90', rating: '5,0', owner: 'Luana Nascimento'},
        { name: 'Como cozinhar', price: '39.90', rating: '4,98', owner: 'Laura Nascimento'},
        { name: 'Viajar sozinho', price: '79.90', rating: '5,0', owner: 'Luana Nascimento'},
      ])
      return { products}
    }
})
</script>
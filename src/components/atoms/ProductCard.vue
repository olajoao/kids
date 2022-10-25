<template>
  <router-link to="/" class="group">
    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-6 xl:aspect-h-6">
      <img 
        src="https://picsum.photos/200/200" 
        :alt="product.name" 
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      >
    </div>
    <div class="mt-4">
      <div class="flex items-center justify-between">
        <h3 class="text-sm lg:text-base font-medium text-gray-700">{{ product.name }}</h3>
        <div class="flex items-center gap-x-1">
          <StarIcon class="w-4 h-4 text-dark-gray"/>
          <span class="text-xs lg:text-sm">{{ product.rating }}</span>
        </div>
      </div>
      <h4 class="text-sm text-dark-gray/80">{{ product.owner }}</h4>
    </div>
    <p class="mt-1 font-medium text-gray-900">R${{ product.price }}</p>
  </router-link>
</template>
<script lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid';
import { defineComponent, PropType } from 'vue';

interface Product {
  name: string,
  price: string,
  rating: string,
  owner: string
}

export default defineComponent({
    props: {
        product: { type: Object as PropType<Product>, required: true }
    },
    components: { StarIcon }
})
</script>
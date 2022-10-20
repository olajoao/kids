<template>
  <button
    disabled
    class="flex items-center gap-5 w-max bg-dark-brown text-main-white text-sm font-medium tracking-wider py-3 rounded px-6 text-center shadow shadow-dark-brown cursor-pointer uppercase"
  >
    <Bars3Icon class="w-5 h-5 lg:w-6 lg:h-6" />
    <span>Compra por Categoria</span>
  </button>
</template>
<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline"
</script>

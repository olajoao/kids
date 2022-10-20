<template>
  <div class="bg-white min-h-screen">
    <Header />
    <CategoriesBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Header from "@/components/organisms/Header.vue"
import CategoriesBar from "../components/organisms/CategoriesBar.vue"

export default defineComponent({
  components: {
    Header,
    CategoriesBar,
  },
})
</script>

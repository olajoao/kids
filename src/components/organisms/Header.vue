<template>
  <header class="py-8 border-b border-b-main-gray/60">
    <div class="container mx-auto flex items-center justify-between">
      <Logo />
      <SearchBar class="max-w-lg w-full" />
      <div class="flex gap-8 items-center">
        <AccountPersonIcon />
        <FavoriteIcon />
        <div class="flex items-center gap-4">
          <ShoppingCartIcon />
          <CartPrice />
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import Logo from "@components/atoms/header/Logo.vue"
import SearchBar from "@components/atoms/SearchBar.vue"
import AccountPersonIcon from "@components/atoms/AccountPersonIcon.vue"
import FavoriteIcon from "@components/atoms/FavoriteIcon.vue"
import ShoppingCartIcon from "@components/atoms/ShoppingCartIcon.vue"
import CartPrice from "../atoms/CartPrice.vue"

export default defineComponent({
  components: {
    Logo,
    SearchBar,
    AccountPersonIcon,
    FavoriteIcon,
    ShoppingCartIcon,
    CartPrice,
  },
})
</script>

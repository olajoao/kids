<template>
  <section class="py-14 border-y border-main-white px-5">
    <div class="gap-5 lg:gap-0 flex flex-col lg:flex-row justify-between container mx-auto">
      <Info :info="{ title: 'Acumule pontos', description: '<b>10 MarketCoins</b> a cada R$50 em compras'}">
        <RocketLaunchIcon class="w-10 h-10 text-amber-500" />
      </Info>

      <Info :info="{ title: 'Reembolso amigo', description: 'Cancele em até <b>7 dias</b> após a compra'}">
        <ArrowPathIcon class="w-10 h-10 text-amber-500" />
      </Info>

      <Info :info="{ title: 'Pagamento 100% seguro', description: 'Garantia total de <b>pagamentos seguros</b>'}">
        <ShieldCheckIcon class="w-10 h-10 text-amber-500" />
      </Info>

      <Info class="md:hidden 2xl:block" :info="{ title: 'Suporte dedicado 24/7', description: 'Qualquer <b>hora</b> em qualquer <b>lugar</b>'}">
        <ChatBubbleLeftRightIcon class="w-10 h-10 text-amber-500" />
      </Info>

      <Info :info="{ title: 'Ofertas diárias', description: 'Descontos de até <b>70%</b> OFF'}">
        <BanknotesIcon class="w-10 h-10 text-amber-500" />
      </Info>
    </div>
    
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Info from '../atoms/Info.vue';
import { RocketLaunchIcon, ArrowPathIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon, BanknotesIcon } from '@heroicons/vue/24/outline';

export default defineComponent({
  components: { Info, RocketLaunchIcon, ArrowPathIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon, BanknotesIcon }
})
</script>
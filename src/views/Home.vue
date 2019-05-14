<template>
  <div class="home">
    <hero />
    <lotteries-card />
  </div>
</template>

<script>
import Hero from '@components/home/Hero.vue'
import LotteriesCard from '@components/home/LotteriesCard.vue'

export default {
  name: 'home',
  components: {
    Hero,
    LotteriesCard
  }
}
</script>

<template>
  <div class="home">
    <hero />
    <lotteries-card />
    <message />
  </div>
</template>

<script>
import Hero from '@components/home/Hero.vue'
import LotteriesCard from '@components/home/LotteriesCard.vue'
import Message from '@components/home/Message.vue'

export default {
  name: 'home',
  components: {
    Hero,
    LotteriesCard,
    Message
  }
}
</script>

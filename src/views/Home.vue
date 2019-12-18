<template>
  <div class="home">
    <hero />
    <lotteries />
    <message />
  </div>
</template>

<script>
import Hero from '@components/home/Hero.vue'
import Lotteries from '@components/home/lotteriesList/Lotteries.vue'
import Message from '@components/home/Message.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Lotteries,
    Message
  }
}
</script>

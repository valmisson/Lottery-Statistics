<template>
  <section class="lotteries row">
    <card title="Mega-Sena" lottery="megasena" />

    <card title="Lotofácil" lottery="lotofacil" />

    <card title="Quina" lottery="quina" />

    <card title="Lotomania" lottery="lotomania" />
  </section>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Lotteries',

  components: {
    Card
  }
}
</script>

<style scoped>
  .lotteries {
    margin-top: 70px;
  }

  @media (min-width: 768px) {
    .lotteries {
      margin-top: 100px;
    }
  }
</style>

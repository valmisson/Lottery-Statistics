<template>
  <main class="results">
    <page-title :lottery="lotteryName" page="Resultados" :lotteryClass="lotteryClass" />
    <section class="row">
      <results-card v-for="i in 20" :key="i" :data="20" :lotteryClass="lotteryClass" />
    </section>
  </main>
</template>

<script>
import PageTitle from '@components/layout/PageTitle.vue'
import ResultsCard from '@components/results/ResultsCard.vue'

export default {
  name: 'Results',

  components: {
    PageTitle,
    ResultsCard
  },

  computed: {
    lotteryName () {
      const { name } = this.$route

      return name
    },

    lotteryClass () {
      return this.lotteryName === 'Lotofácil' ? 'lotofacil' : this.lotteryName.toLowerCase()
    }
  }
}
</script>

<style>
  .results .row {
    margin-top: 10px;
  }
</style>

<template>
  <main class="results">
    <page-title page="Resultados" />
    <section class="row">
      <results-card v-for="i in 20" :key="i" :data="20" :lotteryClass="lottery" />
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
    lottery () {
      const { name } = this.$route

      return name === 'Lotofácil' ? 'lotofacil' : name.toLowerCase()
    }
  }
}
</script>

<style>
  .results .row {
    margin-top: 10px;
  }
</style>

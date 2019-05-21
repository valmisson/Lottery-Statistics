<template>
  <main class="results">
    <page-title :lottery="lottery" page="Resultados" :lotteryClass="lotteryFormatted" />
    <section class="row">
      <results-card v-for="result in results" :key="result.concurso.numero" :data="result" :lotteryClass="lotteryFormatted" />
    </section>
  </main>
</template>

<script>
import PageTitle from '@components/layout/PageTitle.vue'
import ResultsCard from '@components/results/ResultsCard.vue'
import database from '@database'

export default {
  name: 'Results',

  data () {
    return {
      results: []
    }
  },

  components: {
    PageTitle,
    ResultsCard
  },

  created () {
    this.getResults()
  },

  watch: {
    '$route' () {
      this.getResults()
    }
  },

  computed: {
    lottery () {
      const { name } = this.$route

      return name
    },

    lotteryFormatted () {
      return this.lottery === 'Lotofácil' ? 'lotofacil' : this.lottery.toLowerCase()
    }
  },

  methods: {
    async getResults () {
      const lottery = this.lotteryFormatted.replace('-', '')

      const databaseRef = await database.ref(`resultado__${lottery}`).limitToLast(20)
      const results = await databaseRef.once('value')

      const resultsList = Object.values(results.val())
      resultsList.reverse()

      this.results = resultsList
    }
  }
}
</script>

<style>
  .results .row {
    margin-top: 10px;
  }
</style>

<template>
  <main class="results">
    <page-title page="Resultados" :lottery="lottery" />

    <p v-show="error" class="error card">{{ error }}</p>

    <loading v-show="isLoading" :lotteryClass="lottery"/>

    <section v-show="!isLoading" class="row">
      <results-card v-for="result in results" :key="result.concurso.numero" :data="result" :lotteryClass="lottery" />
    </section>
  </main>
</template>

<script>
import PageTitle from '@components/layout/PageTitle.vue'
import Loading from '@components/layout/Loading.vue'
import ResultsCard from '@components/results/ResultsCard.vue'
import database from '@database'

export default {
  name: 'Results',

  data () {
    return {
      results: [],
      error: '',
      isLoading: false
    }
  },

  components: {
    PageTitle,
    Loading,
    ResultsCard
  },

  beforeMount () {
    this.getResults()
  },

  mounted () {
    this.ResultsInfiniteScroll()
  },

  watch: {
    '$route' () {
      this.getResults()
    }
  },

  computed: {
    lottery () {
      return this.$route.params.lottery
    }
  },

  methods: {
    async getResults () {
      try {
        this.isLoading = true

        const databaseRef = await database.ref(`resultado__${this.lottery}`).limitToLast(20)
        const results = await databaseRef.once('value')

        const resultsList = Object.values(results.val())
        resultsList.reverse()

        this.results = resultsList

        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        this.error = `Erro ao obter resultados da ${this.lottery}`
      }
    },

    ResultsInfiniteScroll () {
      try {
        window.onscroll = this.debounce(async () => {
          const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 800

          if (bottomOfWindow) {
            const lastResult = this.results.slice(-1)[0]
            const lastResultNumber = lastResult.concurso.numero
            const startResult = lastResultNumber - 20
            const endResult = lastResultNumber - 1

            const databaseRef = await database.ref(`resultado__${this.lottery}`)
              .orderByKey()
              .startAt(startResult.toString())
              .endAt(endResult.toString())
              .limitToLast(20)

            const results = await databaseRef.once('value')

            if (!results.val()) return

            const resultsList = Object.values(results.val())
            resultsList.reverse()

            this.results.push(...resultsList)
          }
        }, 300)
      } catch (error) {
        this.error = `Erro ao obter resultados da ${this.lottery}`
      }
    },

    debounce (fn, time) {
      let timeout

      return function () {
        const functionCall = () => fn.apply(this, arguments)

        clearTimeout(timeout)
        timeout = setTimeout(functionCall, time)
      }
    }
  }
}
</script>

<style>
  .results .row {
    margin-top: 10px;
  }
</style>

<template>
  <main class="statistics">
    <page-title :lottery="lottery" page="Estatisticas" :lotteryClass="lotteryFormatted" />

    <p v-show="error" class="error card">{{ error }}</p>

    <div class="row">
      <statistics-card title="Frequência das Dezenas" :data="20" :lotteryClass="lotteryFormatted" />
      <link-result :lotteryClass="lotteryFormatted" />

      <statistics-card title="Dezenas Pares" :data="10" :lotteryClass="lotteryFormatted" />
      <statistics-card title="Dezenas Ímpares" :data="10" :lotteryClass="lotteryFormatted" />
    </div>
  </main>
</template>

<script>
import PageTitle from '@components/layout/PageTitle.vue'
import StatisticsCard from '@components/statistics/StatisticsCard.vue'
import LinkResult from '@components/statistics/LinkResult.vue'
import database from '@database'

export default {
  name: 'Statistics',

  data () {
    return {
      frequencyAllDozens: [],
      error: ''
    }
  },

  components: {
    PageTitle,
    StatisticsCard,
    LinkResult
  },

  mounted () {
    this.getFrequencyAllDozens()
  },

  watch: {
    '$route' () {
      this.getFrequencyAllDozens()
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
    async getFrequencyAllDozens () {
      try {
        const lottery = this.lotteryFormatted.replace('-', '') // remove - the name of the mega-sena lottery

        const databaseRef = await database.ref(`frequencia_dezenas__${lottery}`)
        const databaseResult = await databaseRef.once('value')

        const databaseResultArray = Object.values(databaseResult.val())

        const dozensOrderedTimes = databaseResultArray.sort((a, b) => b.vezes - a.vezes)

        this.frequencyAllDozens = dozensOrderedTimes
      } catch (error) {
        this.error = `Erro ao obter frequência de todas as dezenas da ${this.lottery}`
      }
    }
  }
}
</script>

<style scoped>
  .statistics .row {
    justify-content: space-between;
  }

  .error {
    color: red;
    margin-top: 25px;
    padding: 15px 20px;
  }
</style>

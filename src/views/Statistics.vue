<template>
  <main class="statistics">
    <page-title :lottery="lottery" page="Estatisticas" :lotteryClass="lotteryFormatted" />

    <p v-show="error" class="error card">{{ error }}</p>

    <loading v-show="isLoading" :lotteryClass="lotteryFormatted"/>

    <div v-show="!isLoading" class="row">
      <statistics-card title="Frequência das Dezenas" :dozensList="frequencyAllDozens | listSlicedDozens(20)" :lotteryClass="lotteryFormatted" />
      <link-result :lotteryClass="lotteryFormatted" />

      <statistics-card title="Dezenas Pares" :dozensList="frequencyAllDozensPair | listSlicedDozens(10)" :lotteryClass="lotteryFormatted" />
      <statistics-card title="Dezenas Ímpares" :dozensList="frequencyAllDozensOdd | listSlicedDozens(10)" :lotteryClass="lotteryFormatted" />
    </div>
  </main>
</template>

<script>
import PageTitle from '@components/layout/PageTitle.vue'
import Loading from '@components/layout/Loading.vue'
import StatisticsCard from '@components/statistics/StatisticsCard.vue'
import LinkResult from '@components/statistics/LinkResult.vue'
import database from '@database'

export default {
  name: 'Statistics',

  data () {
    return {
      frequencyAllDozens: [],
      error: '',
      isLoading: false
    }
  },

  components: {
    PageTitle,
    Loading,
    StatisticsCard,
    LinkResult
  },

  beforeMount () {
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
    },

    frequencyAllDozensPair () {
      return this.dozensTypes('par')
    },

    frequencyAllDozensOdd () {
      return this.dozensTypes('impar')
    }
  },

  filters: {
    listSlicedDozens (listDozens, size) {
      const windowWidth = window.innerWidth
      const listSize = windowWidth < 767 ? 10 : windowWidth <= 1024 ? 20 : size // set list size to 15 for phone and 20 for tablet
      const list = listDozens
      let newList = []

      for (let i = 0; i < list.length; i += listSize) {
        newList.push(list.slice(i, i + listSize))
      }

      return { ...newList }
    }
  },

  methods: {
    async getFrequencyAllDozens () {
      try {
        this.isLoading = true

        const lottery = this.lotteryFormatted.replace('-', '') // remove - the name of the mega-sena lottery

        const databaseRef = await database.ref(`frequencia_dezenas__${lottery}`)
        const databaseResult = await databaseRef.once('value')

        const databaseResultArray = Object.values(databaseResult.val())

        const dozensOrderedTimes = databaseResultArray.sort((a, b) => b.vezes - a.vezes)

        this.frequencyAllDozens = dozensOrderedTimes

        this.isLoading = false
      } catch (error) {
        this.isLoading = false

        this.error = `Erro ao obter frequência de todas as dezenas da ${this.lottery}`
      }
    },

    dozensTypes (type) {
      const allDozens = this.frequencyAllDozens

      const allDozensType = allDozens.filter(dozen => {
        const { dezena } = dozen

        return type === 'par' ? dezena % 2 === 0 : type === 'impar' ? dezena % 2 !== 0 : null
      })

      return allDozensType
    }
  }
}
</script>

<style scoped>
  .statistics .row {
    justify-content: space-between;
  }
</style>

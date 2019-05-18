<template>
  <main class="statistics">
    <page-title :lottery="lotteryName" page="Estatisticas" :lotteryClass="lotteryClass" />
    <div class="row">
      <statistics-card title="Frequência das Dezenas" :data="20" :lotteryClass="lotteryClass" />
      <link-result :lotteryClass="lotteryClass" />
      <statistics-card title="Dezenas Pares" :data="10" :lotteryClass="lotteryClass" />
      <statistics-card title="Dezenas Ímpares" :data="10" :lotteryClass="lotteryClass" />
    </div>
  </main>
</template>

<script>
import PageTitle from '@components/layout/PageTitle.vue'
import StatisticsCard from '@components/statistics/StatisticsCard.vue'
import LinkResult from '@components/statistics/LinkResult.vue'

export default {
  name: 'Statistics',
  components: {
    PageTitle,
    StatisticsCard,
    LinkResult
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

<style scoped>
  .statistics .row {
    justify-content: space-between;
  }
</style>

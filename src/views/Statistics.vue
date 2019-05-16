<template>
  <main class="statistics">
    <page-title page="Estatisticas" />
    <div class="row">
      <statistics-card title="Frequência das Dezenas" :data="20" :lotteryClass="lottery" />
      <link-result :lotteryClass="lottery" />
      <statistics-card title="Dezenas Pares" :data="10" :lotteryClass="lottery" />
      <statistics-card title="Dezenas Ímpares" :data="10" :lotteryClass="lottery" />
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
    lottery () {
      const { name } = this.$route

      return name === 'Lotofácil' ? 'lotofacil' : name.toLowerCase()
    }
  }
}
</script>

<style scoped>
  .statistics .row {
    justify-content: space-between;
  }
</style>

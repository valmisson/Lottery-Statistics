<template>
  <main class="statistics">
    <page-title page="Estatisticas" />
    <div class="row">
      <statistics-card title="Frequência das Dezenas" :lottery="lotteryName" />
    </div>
  </main>
</template>

<script>
import PageTitle from '@components/layout/PageTitle.vue'
import StatisticsCard from '@components/statistics/StatisticsCard.vue'

export default {
  name: 'Statistics',
  components: {
    PageTitle,
    StatisticsCard
  },

  computed: {
    lotteryName () {
      const { name } = this.$route

      return name
    }
  }
}
</script>

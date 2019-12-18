<template>
  <div :class="['link__result col', lotteryClass]">
    <router-link :to="uri" class="link__result-link">RESULTADOS</router-link>
  </div>
</template>

<script>
export default {
  name: 'LinkToLotteryResult',

  props: {
    lotteryClass: {
      type: String,
      required: true
    }
  },

  computed: {
    uri () {
      const lottery = this.lotteryClass === 'mega-sena' ? 'megasena' : this.lotteryClass

      return '/resultados/' + lottery
    }
  }
}
</script>

<style scoped>
  .link__result {
    box-shadow: var(--card-shadow);
    border-radius: 5px;
    display: none;
    margin-top: 87px;
    margin-left: 20px;
    margin-right: 10px;
    padding: 20px 0;
    text-align: center;
  }

  .link__result-link {
    color: var(--color-white);
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
  }

  /* lotteries */
  .link__result.megasena {
    background-color: #1cd442;
  }

  .link__result.lotofacil {
    background-color: #cc1bb9;
  }

  .link__result.quina {
    background-color: #1c76d4;
  }

  .link__result.lotomania {
    background-color: #f78100;
  }

  @media (min-width: 1200px) {
    .link__result {
      display: table;
    }
  }
</style>

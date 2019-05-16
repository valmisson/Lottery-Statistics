<template>
  <section class="page__title">
    <h1 ref="lottery" class="page__title-lottery">{{ lottery }}</h1>
    <h2 class="page__title-page">{{ page }}</h2>
  </section>
</template>

<script>
export default {
  name: 'PageTitle',

  data () {
    return {
      lottery: ''
    }
  },

  props: {
    page: {
      type: String,
      required: true
    }
  },

  mounted () {
    const { name } = this.$route

    this.lottery = name

    this.defineClass(name)
  },

  methods: {
    defineClass (lotteryName) {
      const { lottery } = this.$refs
      const className = lotteryName === 'Lotofácil' ? 'lotofacil' : lotteryName.toLowerCase()

      lottery.classList.add(className)
    }
  }
}
</script>

<style scoped>
  .page__title {
    display: flex;
    align-items: center;
    margin-top: 25px;
  }

  .page__title-lottery {
    font-size: 20px;
    margin-bottom: 0;
  }

  .page__title-page {
    font-size: 16px;
    font-weight: 500;
    margin-left: 20px;
    margin-bottom: -3px;
  }

  @media (min-width: 768px) {
    .page__title {
      margin-top: 35px;
    }

    .page__title-lottery {
      font-size: 26px;
      margin-bottom: 10px;
    }

    .page__title-page {
      font-size: 18px;
      font-weight: 500;
      margin-left: 35px;
      margin-bottom: 3px;
    }
  }
</style>

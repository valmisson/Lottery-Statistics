<template>
  <section class="page__title">
    <h1 :class="['title__lottery', lottery]">{{ title }}</h1>
    <h2 class="title__page">{{ page }}</h2>
  </section>
</template>

<script>
export default {
  name: 'PageTitle',

  props: {
    lottery: {
      type: String,
      required: true
    },
    page: {
      type: String,
      required: true
    }
  },
  computed: {
    title () {
      return this.lottery === 'megasena' ? 'Mega-Sena'
        : this.lottery === 'lotofacil' ? 'Lotofácil' : this.lottery === 'quina' ? 'Quina' : 'Lotomania'
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

  .title__lottery {
    font-size: 20px;
    margin-bottom: 0;
  }

  .title__page {
    font-size: 16px;
    font-weight: 500;
    margin-left: 20px;
    margin-bottom: -3px;
  }

  @media (min-width: 768px) {
    .page__title {
      margin-top: 35px;
    }

    .title__lottery {
      font-size: 26px;
      margin-bottom: 10px;
    }

    .title__page {
      font-size: 18px;
      font-weight: 500;
      margin-left: 35px;
      margin-bottom: 3px;
    }
  }
</style>

<template>
  <section class="hero">
    <h1 class="hero__title">Estatisticas Lotterias</h1>
    <h2 class="hero__slug">Acompanha as estatisticas das principais loterias brasileira</h2>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
  .hero {
    margin-top: 35px;
    text-align: center;
  }

  .hero__title {
    color: var(--color-primary);
    font-size: 22px;
    margin: 0;
  }

  .hero__slug {
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
  }

  @media (min-width: 768px) {
    .hero {
      margin-top: 45px;
    }

    .hero__title {
      font-size: 28px;
    }

    .hero__slug {
      font-size: 18px;
    }
  }
</style>

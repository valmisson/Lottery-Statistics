<template>
  <main class="page">
    <h1 class="page__title">404</h1>
    <h2 class="page__description">Página não encontrada</h2>
  </main>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
  .page {
    margin-top: 60px;
    text-align: center;
  }

  .page__title {
    color: var(--color-primary);
    font-size: 64px;
    margin: 0;
  }

  .page__description {
    font-size: 24px;
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    .page__description {
      font-size: 32px;
      margin-top: 20px;
    }
  }
</style>

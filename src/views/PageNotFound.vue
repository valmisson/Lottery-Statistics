<template>
  <main class="page__404">
    <h1 class="page__404-title">404</h1>
    <h2 class="page__404-description">Página não encontrada</h2>
  </main>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
  .page__404 {
    margin-top: 60px;
    text-align: center;
  }

  .page__404-title {
    color: var(--color-primary);
    font-size: 64px;
    margin: 0;
  }

  .page__404-description {
    font-size: 24px;
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    .page__404-description {
      font-size: 32px;
      margin-top: 20px;
    }
  }
</style>

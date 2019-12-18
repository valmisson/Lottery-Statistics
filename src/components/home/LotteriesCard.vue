<template>
  <section class="lotteries row">
    <article class="lotteries__card col-6 col-md-3">
      <div class="card__content card">
        <img class="card__content-clover" src="@assets/images/clover-megasena.svg" alt="clover megasena">

        <h3 class="card__content-title megasena">Mega-Sena</h3>

        <nav class="card__content-link">
          <router-link :to="{ name: 'Estatisticas', params: { lottery: 'megasena' }}" class="content__link-item">Estatisticas</router-link>
          <router-link :to="{ name: 'Resultados', params: { lottery: 'megasena'}}" class="content__link-item">Resultados</router-link>
        </nav>
      </div>
    </article>

    <article class="lotteries__card col-6 col-md-3">
      <div class="card__content card">
        <img class="card__content-clover" src="@assets/images/clover-lotofacil.svg" alt="clover lotofacil">

        <h3 class="card__content-title lotofacil">Lotofácil</h3>

        <nav class="card__content-link">
          <router-link :to="{ name: 'Estatisticas', params: { lottery: 'lotofacil' }}" class="content__link-item">Estatisticas</router-link>
          <router-link :to="{ name: 'Resultados', params: { lottery: 'lotofacil'}}" class="content__link-item">Resultados</router-link>
        </nav>
      </div>
    </article>

    <article class="lotteries__card col-6 col-md-3">
      <div class="card__content card">
        <img class="card__content-clover" src="@assets/images/clover-quina.svg" alt="clover quina">

        <h3 class="card__content-title quina">Quina</h3>

        <nav class="card__content-link">
          <router-link :to="{ name: 'Estatisticas', params: { lottery: 'quina' }}" class="content__link-item">Estatisticas</router-link>
          <router-link :to="{ name: 'Resultados', params: { lottery: 'quina'}}" class="content__link-item">Resultados</router-link>
        </nav>
      </div>
    </article>

    <article class="lotteries__card col-6 col-md-3">
      <div class="card__content card">
        <img class="card__content-clover" src="@assets/images/clover-lotomania.svg" alt="clover lotomania">

        <h3 class="card__content-title lotomania">Lotomania</h3>

        <nav class="card__content-link">
          <router-link :to="{ name: 'Estatisticas', params: { lottery: 'lotomania' }}" class="content__link-item">Estatisticas</router-link>
          <router-link :to="{ name: 'Resultados', params: { lottery: 'lotomania'}}" class="content__link-item">Resultados</router-link>
        </nav>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'LotteriesCard'
}
</script>

<style scoped>
  .lotteries {
    margin-top: 70px;
  }

  .lotteries__card {
    margin-bottom: 50px;
  }

  .card__content {
    padding-bottom: 15px;
    text-align: center;
  }

  .card__content-clover {
    margin-top: -22px;
    width: 44px;
  }

  .card__content-title {
    display: table;
    font-size: 18px;
    font-weight: 500;
    margin: 20px auto 0 auto;
  }

  .card__content-link {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  .content__link-item {
    color: var(--color-font);
    font-size: 14px;
    font-weight: 600;
  }

  .content__link-item:last-child {
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    .lotteries {
      margin-top: 100px;
    }

    .lotteries__card {
      margin-bottom: 0;
    }

    .card__content {
      padding-bottom: 20px;
    }

    .card__content-clover {
      margin-top: -27px;
      width: 54px;
    }

    .card__content-title {
      font-size: 20px;
    }
  }

  @media (min-width: 1200px) {
    .card__content {
      padding-left: 25px;
      padding-right: 25px;
    }

    .card__content-link {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
    }

    .content__link-item {
      font-size: 16px;
    }

    .content__link-item:hover {
      color: var(--color-title);
    }

    .content__link-item:last-child {
      margin-top: 0;
    }
  }
</style>

<template>
  <section class="lotteries row">
    <article class="lotteries__card col-6 col-md-3">
      <div class="card__content card">
        <img class="card__content-clover" src="@assets/images/clover-megasena.svg" alt="">
        <router-link to="#" class="card__content-title mega-sena">Mega-Sena</router-link>
      </div>
    </article>

    <article class="lotteries__card col-6 col-md-3">
      <div class="card__content card">
        <img class="card__content-clover" src="@assets/images/clover-lotofacil.svg" alt="">
        <router-link to="#" class="card__content-title lotofacil">Lotofácil</router-link>
      </div>
    </article>

    <article class="lotteries__card col-6 col-md-3">
      <div class="card__content card">
        <img class="card__content-clover" src="@assets/images/clover-quina.svg" alt="">
        <router-link to="#" class="card__content-title quina">Quina</router-link>
      </div>
    </article>

    <article class="lotteries__card col-6 col-md-3">
      <div class="card__content card">
        <img class="card__content-clover" src="@assets/images/clover-lotomania.svg" alt="">
        <router-link to="#" class="card__content-title lotomania">Lotomania</router-link>
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
    margin: 25px auto 0 auto;
  }

  @media (min-width: 768px) {
    .lotteries {
      margin-top: 100px;
    }

    .lotteries__card {
      margin-bottom: 0;
    }

    .card__content {
      padding-bottom: 25px;
    }

    .card__content-clover {
      margin-top: -27px;
      width: 54px;
    }

    .card__content-title {
      font-size: 20px;
    }
  }
</style>

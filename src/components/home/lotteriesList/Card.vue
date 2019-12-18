<template>
  <article class="lotteries__cards col-6 col-md-3">
    <div class="card__content card">
      <img class="card__clover"
        :src="require(`@assets/images/clover-${lottery}.svg`)" :alt="`Clover ${title}`">

      <h3 :class="['card__title', lottery]">{{ title }}</h3>

      <nav class="card__link">
        <router-link :to="{ name: 'Estatisticas', params: { lottery }}" class="link__item">
          Estatisticas
        </router-link>
        <router-link :to="{ name: 'Resultados', params: { lottery }}" class="link__item">
          Resultados
        </router-link>
      </nav>
    </div>
  </article>
</template>

<script>
export default {
  name: 'LotteriesCard',

  props: {
    lottery: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .lotteries__cards {
    margin-bottom: 50px;
  }

  .card__content {
    padding-bottom: 15px;
    text-align: center;
  }

  .card__clover {
    margin-top: -22px;
    width: 44px;
  }

  .card__title {
    display: table;
    font-size: 18px;
    font-weight: 500;
    margin: 20px auto 0 auto;
  }

  .card__link {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  .link__item {
    color: var(--color-font);
    font-size: 14px;
    font-weight: 600;
  }

  .link__item:last-child {
    margin-top: 15px;
  }

  @media (min-width: 768px) {
    .lotteries__cards {
      margin-bottom: 0;
    }

    .card__content {
      padding-bottom: 20px;
    }

    .card__clover {
      margin-top: -27px;
      width: 54px;
    }

    .card__title {
      font-size: 20px;
    }
  }

  @media (min-width: 1200px) {
    .card__content {
      padding-left: 25px;
      padding-right: 25px;
    }

    .card__link {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
    }

    .link__item {
      font-size: 16px;
    }

    .link__item:hover {
      color: var(--color-title);
    }

    .link__item:last-child {
      margin-top: 0;
    }
  }
</style>

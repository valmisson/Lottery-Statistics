<template>
  <section class="statistcs__card">
    <h3 class="statistcs__card-title">{{ title }}</h3>
    <article class="statistcs__card-list card">
      <div v-for="(list, i) in dozensList" :key="i" :class="['list', lotteryClass]">
        <div class="list__aside">
          <p class="list__aside-text">{{ listAsideText('Dezenas') }}</p>
          <p class="list__aside-text">{{ listAsideText('Vezes') }}</p>
        </div>
        <div v-for="dozens in list" :key="dozens.dezena" class="list__number">
          <p class="list__number-dezena">{{ dozens.dezena }}</p>
          <p class="list__number-vez">{{ dozens.vezes }}</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'StatistcsCard',

  props: {
    title: {
      type: String,
      required: true
    },

    lotteryClass: {
      type: String,
      required: true
    },

    dozensList: {
      type: Object,
      required: true
    }
  },

  methods: {
    listAsideText (text) {
      if (window.innerWidth < 768) return text === 'Dezenas' ? 'Dz' : 'Qtd'

      return text
    }
  }
}
</script>

<style scoped>
  .statistcs__card {
    margin-top: 25px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .statistcs__card:last-child {
    margin-bottom: 45px;
  }

  .statistcs__card-title {
    color: var(--color-title);
    font-size: 16px;
  }

  .statistcs__card-list {
    padding: 15px;
  }

  /* list */
  .list {
    display: flex;
    margin-bottom: 5px;
    padding-bottom: 10px;
  }

  .list:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .list__aside {
    border-right: 1px solid #d8d8d8;
    margin-top: 3px;
    margin-right: 20px;
    padding-right: 20px;
  }

  .list__aside-text {
    color: var(--color-font);
    font-size: 14px;
    font-weight: 500;
  }

  .list__aside-text:last-child {
    margin-top: 5px;
  }

  .list__number {
    margin-right: 15px;
    text-align: center;
  }

  .list__number:last-child {
    margin-right: 0;
  }

  .list__number-dezena {
    font-size: 20px;
    font-weight: bold;
  }

  .list__number-vez {
    color: var(--color-font);
    font-weight: 600;
    font-size: 14px;
    margin-top: 3px;
  }

  @media (max-width: 991px) {
    .statistcs__card {
      max-width: 100%;
    }

    .statistcs__card-list {
      overflow-x: auto;
    }

    .list__number:last-child {
      padding-right: 15px;
    }
  }

  @media (min-width: 768px) {
    .statistcs__card-title {
      font-size: 20px;
    }

    .statistcs__card-list {
      padding: 15px 20px;
    }

    /* list */
    .list__aside {
      margin-top: 5px;
      margin-right: 25px;
      padding-right: 25px;
    }

    .list__aside-text:last-child {
      margin-top: 7px;
    }

    .list__number-dezena {
      font-size: 22px;
    }

    .list__number-vez {
      font-size: 15px;
    }
  }

  @media (min-width: 1200px) {
    .statistcs__card:last-child {
      margin-bottom: 60px;
      padding-right: 0;
    }

    .lotofacil .list__number {
      margin-right: 10px;
    }
  }
</style>

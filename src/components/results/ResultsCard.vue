<template>
  <article class="result col-md-6">
    <div class="result__card card">
      <header class="card__header">
        <h3 class="card__header-contest">CONCURSO
          <b class="header__contest-number">{{ data.concurso.numero }}</b>
          <span class="header__contest-date">({{ data.concurso.data }})</span>
        </h3>
        <p v-if="acumulou" :class="['header__contest-accumulated', lotteryClass ]">Acumulou!</p>
      </header>
      <ul class="card__dozens">
        <li v-for="dezena in data.dezenas" :key="dezena" :class="['card__dozens-item', lotteryClass ]">
          {{ dezena }}
        </li>
      </ul>
      <div class="card__awards">
        <h3 :class="['card__awards-title', lotteryClass ]">Prêmiação</h3>
        <table class="awards__table">
          <thead>
            <tr>
              <th class="awards__table-title">ACERTOS</th>
              <th class="awards__table-title">GANHADORES</th>
              <th class="awards__table-title">PRÊMIO</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="premio in data.premiacao" :key="premio.nome">
              <td class="awards__table-hits">{{ premio.nome }}</td>
              <td class="awards__table-winners">
                {{ parseInt(premio.ganhadores).toLocaleString() }}
              </td>
              <td class="awards__table-prize">
                {{ premio.valor === '0,00' ? '-' : 'R$ ' + premio.valor }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ResultsCard',

  props: {
    data: {
      type: Object,
      required: true
    },

    lotteryClass: {
      type: String,
      required: true
    }
  },

  computed: {
    acumulou () {
      if (this.data.premiacao[0].ganhadores === '0') return true

      return false
    }
  }
}
</script>

<style scoped>
  .result {
    margin-top: 35px;
  }

  .result:last-child {
    margin-bottom: 45px;
  }

  .result__card {
    padding: 15px 0 15px 15px;
  }

  /* Header */
  .card__header {
    display: flex;
    justify-content: space-between;
  }

  .card__header-contest {
    font-size: 12px;
    font-weight: 500;
    margin: 0;
  }

  .header__contest-date {
    margin-left: 10px;
  }

  .header__contest-number,
  .header__contest-date {
    font-size: 16px;
  }

  .header__contest-accumulated {
    font-size: 18px;
    font-weight: 600;
    margin-top: -2px;
    margin-right: 15px;
  }

  /* Dozens */
  .card__dozens {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  .card__dozens-item {
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
    line-height: 30px;
  }

  /* awards */
  .card__awards {
    margin-top: 20px;
  }

  .card__awards-title {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  .awards__table {
    margin-top: 15px;
  }

  .awards__table-title {
    font-size: 12px;
    padding-right: 15px;
    padding-bottom: 5px;
  }

  .awards__table-title:last-child {
    padding-right: 60px;
  }

  .awards__table-hits {
    color: var(--color-title);
    font-weight: 700;
  }

  .awards__table-winners,
  .awards__table-prize {
    font-weight: 600;
  }

  .awards__table-hits,
  .awards__table-winners,
  .awards__table-prize {
    font-size: 14px;
  }

  @media (min-width: 374px) {
    .awards__table-title {
      padding-right: 30px;
    }
  }

  @media (min-width: 599px) and (max-width: 767px) {
    .awards__table-title {
      padding-right: 50px;
    }
  }

  @media (min-width: 1024px) {
    .result__card {
      padding: 15px 20px;
    }

    /* dozens */
    .card__dozens-item {
      font-size: 26px;
      margin-right: 15px;
      line-height: 30px;
    }

    /* header */
    .card__header-contest {
      font-size: 14px;
    }

    .header__contest-accumulated {
      font-size: 20px;
      margin-top: -4px;
    }

    /* awards */
    .card__awards-title {
      font-size: 18px;
    }

    .awards__table-title {
      padding-right: 50px;
    }

    .awards__table-hits,
    .awards__table-winners,
    .awards__table-prize {
      font-size: 16px;
    }
  }
</style>

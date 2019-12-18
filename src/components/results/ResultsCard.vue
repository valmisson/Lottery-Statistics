<template>
  <article class="result col-md-6">
    <div class="result__card card">
      <header class="card__header">
        <h3 class="card__contest">CONCURSO
          <b class="contest__number">{{ data.concurso.numero }}</b>
          <span class="contest__date">({{ data.concurso.data }})</span>
        </h3>
        <p v-if="acumulou" :class="['contest__accumulated', lotteryClass ]">Acumulou!</p>
      </header>
      <ul class="card__dozens">
        <li v-for="dezena in data.dezenas" :key="dezena" :class="['dozens__item', lotteryClass ]">
          {{ dezena }}
        </li>
      </ul>
      <div class="card__awards">
        <h3 :class="['awards__title', lotteryClass ]">Prêmiação</h3>
        <table class="awards__table">
          <thead>
            <tr>
              <th class="table__title">ACERTOS</th>
              <th class="table__title">GANHADORES</th>
              <th class="table__title">PRÊMIO</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="premio in data.premiacao" :key="premio.nome">
              <td class="table__hits">{{ premio.nome }}</td>
              <td class="table__winners">
                {{ parseInt(premio.ganhadores).toLocaleString() }}
              </td>
              <td class="table__prize">
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

  .card__contest {
    font-size: 12px;
    font-weight: 500;
    margin: 0;
  }

  .contest__date {
    margin-left: 10px;
  }

  .contest__number,
  .contest__date {
    font-size: 16px;
  }

  .contest__accumulated {
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

  .dozens__item {
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
    line-height: 30px;
  }

  /* awards */
  .card__awards {
    margin-top: 20px;
  }

  .awards__title {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  .awards__table {
    margin-top: 15px;
  }

  .table__title {
    font-size: 12px;
    padding-right: 15px;
    padding-bottom: 5px;
  }

  .table__title:last-child {
    padding-right: 60px;
  }

  .table__hits {
    color: var(--color-title);
    font-weight: 700;
  }

  .table__winners,
  .table__prize {
    font-weight: 600;
  }

  .table__hits,
  .table__winners,
  .table__prize {
    font-size: 14px;
  }

  @media (min-width: 374px) {
    .table__title {
      padding-right: 30px;
    }
  }

  @media (min-width: 599px) and (max-width: 767px) {
    .table__title {
      padding-right: 50px;
    }
  }

  @media (min-width: 1024px) {
    .result__card {
      padding: 15px 20px;
    }

    /* dozens */
    .dozens__item {
      font-size: 26px;
      margin-right: 15px;
      line-height: 30px;
    }

    /* header */
    .card__contest {
      font-size: 14px;
    }

    .contest__accumulated {
      font-size: 20px;
      margin-top: -4px;
    }

    /* awards */
    .awards__title {
      font-size: 18px;
    }

    .table__title {
      padding-right: 50px;
    }

    .table__hits,
    .table__winners,
    .table__prize {
      font-size: 16px;
    }
  }
</style>

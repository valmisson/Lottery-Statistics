<template>
  <section class="message card col-12">
    <img class="message__icon" src="@assets/images/quotation.svg" alt="">
    <p class="message__paragraph">Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre
    aquele que tem coragem de arriscar.</p>
  </section>
</template>

<script>
export default {
  name: 'Message'
}
</script>

<style scoped>
  .message {
    padding: 15px 20px 20px 20px;
    margin-bottom: 45px;
  }

  .message__icon {
    width: 28px;
  }

  .message__paragraph {
    color: var(--color-title);
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    .message {
      display: flex;
      margin-top: 55px;
      margin-bottom: 45px;
      padding: 20px 25px;
    }

    .message__icon {
      margin-right: 35px;
      width: 38px;
    }

    .message__paragraph {
      font-size: 18px;
      margin: 0;
    }
  }
</style>

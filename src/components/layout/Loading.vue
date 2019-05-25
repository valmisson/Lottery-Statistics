<template>
  <div :class="['loading-ring', lotteryClass]">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  props: {
    lotteryClass: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .loading-ring {
    display: flex;
    height: 64px;
    margin: 70px auto;
    position: relative;
    width: 64px;
  }

  .loading-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 4px;
    border-width: 4px;
    border-style: solid;
    border-radius: 50%;
    animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  .loading-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }

  .loading-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }

  .loading-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }

  .loading-ring.mega-sena div {
    border-color: #1cd442 transparent transparent transparent;
  }

  .loading-ring.lotofacil div {
    border-color: #cc1bb9 transparent transparent transparent;
  }

  .loading-ring.quina div {
    border-color: #1c76d4 transparent transparent transparent;
  }

  .loading-ring.lotomania div {
    border-color: #f78100 transparent transparent transparent;
  }

  @keyframes loading-ring {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>

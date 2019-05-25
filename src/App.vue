<template>
  <div id="app">
    <layout-header />

    <transition name="fade">
      <router-view class="main container"/>
    </transition>
  </div>
</template>

<script>
import LayoutHeader from '@components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    LayoutHeader
  }
}
</script>

<style>
  :root {
    --color-primary: #62d41c;
    --color-font: #737373;
    --color-white: white;
    --color-title: #4d4d4d;
    --card-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
  }

  body {
    background-color: #f2f2f2;
    color: var(--color-font);
    font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
  }

  /* Reset */
  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  p {
    margin: 0;
  }

  /* lotteries */
  .mega-sena {
    color: #1cd442;
  }

  .lotofacil {
    color: #cc1bb9;
  }

  .quina {
    color: #1c76d4;
  }

  .lotomania {
    color: #f78100;
  }

  .card {
    background-color: var(--color-white);
    box-shadow: var(--card-shadow);
    border-radius: 5px;
  }

  .main {
    position: relative;
    top: 50px;
  }

  /* efect transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.17s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  /* Message error */
  .error {
    color: red;
    margin-top: 25px;
    padding: 15px 20px;
  }
</style>

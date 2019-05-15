<template>
  <div id="app">
    <layout-header />

    <router-view class="main container"/>
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

  li {
    list-style: none;
  }

  p {
    margin: 0;
  }

  /* lotteies */
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

  @media (max-width: 767px) {
    .main {
      position: relative;
      top: 50px;
    }
  }
</style>

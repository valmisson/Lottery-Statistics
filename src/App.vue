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

  @media (max-width: 768px) {
    .main {
      position: relative;
      top: 50px;
    }
  }
</style>

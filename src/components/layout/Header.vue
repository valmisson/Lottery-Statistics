<template>
  <header class="layout__header">
    <div class="container">
      <div class="layout__header-row">
        <a href="/estatistica/" class="layout__header-brand">Lotterias</a>

        <button @click="toggleMenu" ref="buttonMenu" class="menu__button">
          <span class="menu__button-cicle"></span>
          <span class="menu__button-cicle"></span>
          <span class="menu__button-cicle"></span>
        </button>

        <nav ref="menu" class="layout__header-menu">
          <ul class="menu__content">
            <li class="menu__item">
              <router-link to="/estatistica/" class="menu__link">Estatisticas</router-link>
            </li>
            <li class="menu__item">
              <router-link to="/resultados/" class="menu__link">Resultados</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  watch: {
    '$route' () {
      const { menu } = this.$refs

      if (menu.classList.contains('isShow')) this.toggleMenu()
    }
  },

  methods: {
    toggleMenu () {
      const { menu, buttonMenu } = this.$refs

      menu.classList.toggle('isShow')

      buttonMenu.classList.toggle('isOpen')
    }
  }
}
</script>

<style scoped>
  .layout__header {
    background-color: var(--color-white);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
    padding-left: 15px;
    padding-right: 15px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }

  .layout__header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    position: relative;
  }

  /* brand */
  .layout__header-brand {
    color: var(--color-primary);
    font-size: 18px;
    font-weight: 600;
  }

  /* button menu */
  .menu__button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 10px;
  }

  .menu__button:focus {
    outline: none;
  }

  .menu__button-cicle {
    background-color: var(--color-title);
    border-radius: 50%;
    display: block;
    height: 6px;
    margin-right: 5px;
    width: 6px;
  }

  .menu__button-cicle:last-child {
    margin-right: 0;
  }

  .isOpen .menu__button-cicle {
    background-color: var(--color-primary);
  }

  /* menu */
  .isShow {
    transform: translateX(-15%) !important;
    transition: transform 0.3s ease;
  }

  .layout__header-menu {
    background-color: var(--color-white);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    position: fixed;
    padding: 15px 35px;
    right: 0;
    top: 50px;
    transform: translateX(110%);
    transition: transform 0.3s ease;
  }

  .menu__content {
    margin: 0;
    padding-left: 0;
  }

  .menu__item:last-child {
    margin-top: 20px;
  }

  .menu__link {
    color: var(--color-font);
    font-weight: 500;
  }

  .menu__link.router-link-active {
    color: var(--color-primary);
    position: relative;
  }

  @media (max-width: 767px) {
    .layout__header .container {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media (min-width: 768px) {
    .layout__header {
      padding: 0;
    }

    .layout__header-row {
      height: 55px;
    }

    /* brand */
    .layout__header-brand {
      font-size: 20px;
    }

    /* button menu */
    .menu__button {
      display: none;
    }

    /* Menu */
    .layout__header-menu {
      background-color: transparent;
      box-shadow: none;
      position: relative;
      padding: 0;
      top: 0;
      transform: translateX(0%);
    }

    .menu__content {
      display: flex;
    }

    .menu__item {
      padding-right: 50px;
    }

    .menu__item:last-child {
      margin-top: 0;
      padding-right: 0;
    }

    .menu__link.router-link-active::after {
      background-color: var(--color-primary);
      content: '';
      cursor: default;
      display: block;
      height: 2px;
      position: absolute;
      top: 36px;
      width: 100%;
    }
  }
</style>

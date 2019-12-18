<template>
  <header class="layout__header">
    <div class="container">
      <div class="layout__header-row">
        <a href="/" class="layout__header-brand">Lotterias</a>

        <button @click="toggleMenu" ref="buttonMenu" class="menu__button">
          <span class="menu__button-cicle"></span>
          <span class="menu__button-cicle"></span>
          <span class="menu__button-cicle"></span>
        </button>

        <nav ref="menu" class="layout__header-menu">
          <ul class="menu__content">
            <li class="menu__item">
              <router-link to="/" class="menu__link home" exact>Home</router-link>
            </li>

            <li :class="['menu__item menu__link', {'router-link-active': activeRouterLink('/estatisticas/')}]">
              Estatisticas

              <div class="menu__dropdown">
                <router-link :to="{ name: 'Estatisticas', params: { lottery: 'megasena' }}" class="menu__dropdown-item">Mega-Sena</router-link>
                <router-link :to="{ name: 'Estatisticas', params: { lottery: 'lotofacil' }}" class="menu__dropdown-item">Lotofácil</router-link>
                <router-link :to="{ name: 'Estatisticas', params: { lottery: 'quina' }}" class="menu__dropdown-item">Quina</router-link>
                <router-link :to="{ name: 'Estatisticas', params: { lottery: 'lotomania' }}" class="menu__dropdown-item">Lotomania</router-link>
              </div>
            </li>

            <li :class="['menu__item menu__link', {'router-link-active': activeRouterLink('/resultados/')}]">
              Resultados

              <div class="menu__dropdown">
                <router-link :to="{ name: 'Resultados', params: { lottery: 'megasena'}}" class="menu__dropdown-item">Mega-Sena</router-link>
                <router-link :to="{ name: 'Resultados', params: { lottery: 'lotofacil'}}" class="menu__dropdown-item">Lotofácil</router-link>
                <router-link :to="{ name: 'Resultados', params: { lottery: 'quina'}}" class="menu__dropdown-item">Quina</router-link>
                <router-link :to="{ name: 'Resultados', params: { lottery: 'lotomania'}}" class="menu__dropdown-item">Lotomania</router-link>
              </div>
            </li>
          </ul>
        </nav>

        <div @click="toggleMenu" ref="overlayMenu" class="overlay"></div>
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
      const { menu, buttonMenu, overlayMenu } = this.$refs

      menu.classList.toggle('isShow')

      buttonMenu.classList.toggle('isOpen')

      overlayMenu.classList.toggle('overlayIsShow')
    },

    activeRouterLink (uri) {
      const paths = Array.isArray(uri) ? uri : [uri]

      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0
      })
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
    transform: translateX(0%) !important;
    transition: transform 0.3s ease;
  }

  .layout__header-menu {
    background-color: var(--color-white);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    position: fixed;
    padding: 15px 40px 15px 30px;
    right: 0;
    top: 50px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .menu__content {
    margin: 0;
    padding-left: 0;
  }

  .menu__item {
    color: var(--color-title);
    margin-top: 25px;
    position: relative;
  }

  .menu__item:first-child {
    margin-top: 0;
  }

  .menu__link {
    cursor: pointer;
    font-weight: 500;
  }

  .menu__link.home {
    color: var(--color-title);
  }

  .router-link-active {
    color: var(--color-primary) !important;
    position: relative;
  }

  /* menu dropdown */
  .menu__dropdown {
    margin-top: 15px;
  }

  .menu__dropdown-item {
    color: var(--color-font);
    display: table;
    font-size: 14px;
    margin-top: 15px;
    white-space: nowrap;
  }

  @media (max-width: 767px) {
    .layout__header .container {
      padding-left: 0;
      padding-right: 0;
    }

    .layout__header-menu {
      height: calc(100vh - 50px);
    }

    .overlay {
      background-color: rgba(0, 0, 0, 0.3);
      display: block;
      height: calc(100vh - 50px);
      position: fixed;
      left: 0;
      top: 50px;
      width: 100%;
      opacity: 0;
      transition: all linear 0.3s;
      visibility: hidden;
      z-index: -1;
    }

    .overlayIsShow {
      opacity: 1;
      transition: all linear 0.3s;
      visibility: visible;
    }
  }

  @media (min-width: 768px) {
    .overlay {
      display: none;
    }

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
      margin-top: 0;
      padding: 25px 50px 25px 0;
    }

    .menu__item:last-child {
      margin-top: 0;
      padding-right: 0;
    }

    .menu__link.home.router-link-active::after {
      background-color: var(--color-primary);
      content: '';
      cursor: default;
      display: block;
      height: 2px;
      position: absolute;
      top: 36px;
      width: 100%;
    }

    /* menu dropdown */
    .menu__dropdown {
      background-color: var(--color-white);
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
      cursor: default;
      margin-top: 0;
      opacity: 0;
      padding: 15px 25px;
      position: absolute;
      left: -25px;
      transition: all linear 0.3s;
      visibility: hidden;
    }

    .menu__dropdown-item {
      font-size: 15px;
    }

    .menu__item.menu__link:hover > .menu__dropdown,
    .menu__item.menu__link:focus > .menu__dropdown {
      opacity: 1;
      transition: all linear 0.3s;
      visibility: visible;
    }
  }
</style>

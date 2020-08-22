<template>
  <header>
    <div class="constraint">
      <button id="mobile-menu-toggle" :class="{ toggled: showMenu }" @click="toggleMobileMenu">
        <i class="fas" :class="!showMenu ? 'fa-bars' : 'fa-times'"></i>
      </button>

      <nav id="main-menu" :class="{ toggled: showMenu }">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/">Track Order</nuxt-link>
        <nuxt-link to="/">Support</nuxt-link>
      </nav>

      <nuxt-link id="branding" to="/">
        <img src="logo.png" alt="Proxypods logo">
        <h1>{{ siteName }}</h1>
      </nuxt-link>

      <nav id="user">
        <button
          id="cart-btn"
          @click="$router.push('checkout')"
          v-if="cartCount > 0"
        >
          <span class="total">{{ cartCount }}</span>
          <i class="fas fa-shopping-cart" aria-hidden="true"></i>
        </button>
        <i class="fas fa-shopping-cart" v-else></i>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      siteName: process.env.name,
      showMenu: false,
      defaultBodyStyle: '',
    };
  },
  mounted() {
    this.defaultBodyStyle = document.body.style;
  },
  watch: {
    showMenu() {
      // if showing the mobile menu, set the custom body styles
      if (this.showMenu === true) {
        Object.assign(document.body.style, {
          overflow: 'hidden',
        });
      } else {
        // set the body style to the default state
        document.body.style = this.defaultBodyStyle;
      }
    },
  },
  computed: {
    ...mapGetters({
      cartCount: 'checkout/cartCount',
    }),
  },
  methods: {
    toggleMobileMenu() {
      // toggle show/hide the menu
      this.showMenu = !this.showMenu;
    },
    deactivateMobileMenu() {
      // toggle show/hide the menu
      this.showMenu = false;
    },
  },
  destroyed() {
    // set the body style to the default state
    document.body.style = this.defaultBodyStyle;
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styl/config'

header
  box-sizing: border-box
  font-size: 1.15em
  padding: 20px 15px

  .constraint
    align-items: center
    display: flex
    justify-content: space-between

  nav
    max-width: 300px
    width: 100%

    a:not(:first-child)
      margin-left: 24px

  #user
    justify-content: flex-end
    display: flex

    button
      align-items: center
      background: none
      border: none
      color: #333
      display: flex
      font-size: inherit
      padding: 5px

      & > .fas
        margin-left: 5px

    #cart-btn > span
      color: primary-color

  a
    color: inherit
    text-decoration: none

  #branding
    align-items: center
    color: #333
    display: flex
    font-size: 1.5em
    margin: auto

    img
      max-height: 2.75ch

    h1
      font-size: inherit
      margin: 0 0 0 5px

#mobile-menu-toggle
  background-color: #FFF
  border: solid #FFF 1px
  border-radius: 5px
  color: initial
  display: none
  font-size: 1.25em
  margin-right: 30px
  padding: 6px 10px
  z-index: 1

  &.toggled
    background: #222
    border: none
    color: #FFF
    font-size: 2em
    left: 0
    padding: 10px 0 10px 22px
    position: fixed
    text-align: left
    top: 0
    width: 100%
    z-index: 999

    &:focus
      border: solid #FFF 1px

  .fas
    margin: 0

@media screen and (max-width: 720px)
  header
    padding: 10px 15px

    .constraint
      justify-content: flex-start

    #branding
      margin: 0

    #user
      justify-content: flex-end
      margin-left: auto
      padding-left: 20px

  @keyframes fade-in
    from
      opacity: 0
      transform: translateX(-25px) translateY(-150px)

    to
      opacity: 1
      transform: translateX(0) translateY(0)

  #mobile-menu-toggle
    display: block

  #main-menu:not(.toggled)
    display: none

  #main-menu.toggled
    animation: fade-in 0.2s ease
    background-color: #222
    background-color: rgba(0,0,0,0.85)
    border-radius: 0 0 8px 0
    box-sizing: border-box
    color: #FFF
    display: flex
    font-size: 2em
    flex-direction: column
    left: 0
    max-height: 100%
    max-width: 100%
    overflow: scroll
    padding: 80px 15px 40px
    position: fixed
    top: 0
    z-index: 2

    a
      margin-left: 0
      padding: 10px

      &:not(:first-child)
        margin-top: 20px
</style>

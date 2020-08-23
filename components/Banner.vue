<template>
  <div id="banner">
    <div class="constraint">
      <h1>{{ siteName }}</h1>
      <img alt="Ezshp inside case" id="featured-image" src="ui/ezshp-pro-in-case.png">
      <button id="arrow-down" @click="scrollToNextComponent">
        <img alt="skip to product description" src="ui/arrow-down.png">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteName: process.env.name,
    };
  },
  methods: {
    scrollToNextComponent() {
      const scrollTarget = this.$el.nextSibling.nextSibling;

      // scroll to the desired element ID
      scrollTarget.scrollIntoView({
        behavior: 'smooth',
      });

      // get the focusable items inside the scroll to element
      const focusable = scrollTarget.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstFocusable = focusable[0];

      // focus on the first one of the scroll to element
      setTimeout(() => {
        firstFocusable.focus();
      }, 500);
    },
  },
};
</script>

<style lang="stylus" scoped>
  #banner
    box-sizing: border-box
    overflow: hidden
    padding: 20px

    .constraint
      display: flex
      flex-direction: column
      align-items: center
      padding-bottom: 30px
      position: relative

    h1
      bottom: 200px
      color: #F6F6F6
      font-size: 20em
      margin: 0
      position: absolute
      text-transform: uppercase
      top: 2vw

  #featured-image
    margin-top: 20px
    max-width: 400px
    width: 100%
    z-index: 1

  #arrow-down
    background-color: #FFF
    border: none
    border-radius: 5px
    margin-top: 25px
    outline: none
    padding: 8px 15px

    @keyframes bounce
      50%
        transform: translateY(10px)

      75%
        transform: translateY(-2px)

      100%
        transform: translateY(0)

    &:focus
      box-shadow: 1px 3px 15px rgba(0,0,0,0.08)

    &:hover
      animation: bounce 0.75s ease infinite

    img
      max-height: 6em
      opacity: 0.75
</style>

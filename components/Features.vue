<template>
  <div id="features">
    <div class="constraint">
      <div id="description">
        <h2>Clearly <br>Superior Sound.</h2>
        <div id="info">
          <p>
            {{ siteName }} Pro uses the latest Airoha 1562A chipset
            to provide a better listening experience.
          </p>
        </div>
        <button class="buy-btn" @click="$router.push('ezshp-pro')">Buy Now</button>
      </div>

      <div id="images">
        <img alt="Ezshp Pro earbud closeup" src="ui/ezshp-pro-earbud-closeup.png">
      </div>

      <div id="specs">
        <div>
          <small>More Power</small>
          <span class="big">12hr.</span>
          <p>of battery life with charging case</p>
        </div>

        <div>
          <small>Up To</small>
          <span class="big">3hr.</span>
          <p>of battery life on one charge</p>
        </div>

        <div>
          <small>Fast Recharging</small>
          <span class="big">15min.</span>
          <p>of charging equals 3 hours of battery life</p>
        </div>
      </div>
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
    scrollToId(id) {
      const scrollTarget = document.getElementById(id);

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
  #features
    background-color: #F0F0F0
    box-sizing: border-box
    padding: 30px 15px

    .constraint
      align-items: center
      display: grid
      grid-column-gap: 20px
      grid-row-gap: 50px
      grid-template-columns: 3fr 2fr

    #description
      padding-left: 50px
      z-index: 1

    h2
      font-size: 2.75em
      font-weight: 300
      margin: 0 0 20px 0

    #info
      border-left: solid #DDD 1px
      padding: 5px 0 5px 20px

      p
        line-height: 1.5em
        margin: 0
        max-width: 400px

        &:not(:first-child)
          margin-top: 12px

    button
      margin-top: 20px

    #images
      display: flex
      height: auto
      position: relative
      top: -15px

      img
        animation: float 3s ease infinite
        height: auto
        max-width: 90%
        transform: rotate(20deg)

  #specs
    background-color: #FFF
    border-radius: 3px
    display: grid
    grid-column: 1/-1
    grid-template-columns: repeat(3, 1fr)
    justify-items: center
    margin-top: 10px
    padding: 10px 40px

    & > div
      padding: 25px 15px

    .big
      display: block
      font-size: 2.5em
      margin: 2px 0 4px

    p
      margin: 0

  @media screen and (max-width: 980px)
    #features
      padding: 35px 25px

      h2
        font-size: 2em

      #description
        padding-left: 0

      #specs
        margin-top: 20px
        text-align: center

  @media screen and (max-width: 720px)
    #features
      .constraint
        grid-template-columns: 1fr

      #description
        order: 2

      #images
        display: none

      #specs
        grid-template-columns: 1fr
</style>

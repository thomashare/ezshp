<template>
  <footer>
    <div class="constraint">
      <nav id="social-media">
        <a href="#" title="Visit our Instagram page"><i class="fab fa-instagram"></i></a>
        <a href="#" title="Visit our Twitter page"><i class="fab fa-twitter"></i></a>
        <a href="#" title="Visit our Facebook page"><i class="fab fa-facebook"></i></a>
      </nav>
      <p>Copyright &copy; 2020 {{ siteName }}. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      siteName: process.env.name,
    };
  },
};
</script>

<style lang="stylus" scoped>
  footer
    box-sizing: border-box
    margin-top: 50px
    padding: 10px 15px

    .constraint
      align-items: center
      display: flex
      flex-wrap: wrap
      justify-content: space-between

    a
      color: inherit
      text-decoration: none

    nav
      a:not(:first-child)
        margin-left: 24px

    #social-media
      font-size: 2em

  @media screen and (max-width: 960px)
    footer > .constraint
      display: grid
      justify-content: center
      text-align: center
</style>

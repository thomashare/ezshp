<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="stylus">
  body
    font-family: 'Roboto', sans-serif
    margin: 0

  button
    cursor: pointer

  .constraint
    box-sizing: border-box
    margin: 0 auto
    max-width: 1080px

  .buy-btn
    background-color: #47F
    border: none
    border-radius: 3px
    color: #FFF
    padding: 12px 20px
    z-index: 1

    &:focus
      box-shadow: inset 0 0 0 3px #FFF

    .fas
      margin-left: 5px
</style>

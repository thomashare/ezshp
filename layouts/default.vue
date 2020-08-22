<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="stylus">
@import '~@/assets/styl/config'

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
  background-color: primary-color
  border: none
  border-radius: 3px
  color: #FFF
  padding: 12px 20px
  z-index: 1

  &:focus
    box-shadow: inset 0 0 0 3px #FFF
    animation: breathe 1s ease infinite

  @keyframes breathe
    0%
      transform: scale(1)
    25%
      transform: scale(1.02)
    100%
      transform: scale(1)

  .fas
    margin-left: 5px
</style>

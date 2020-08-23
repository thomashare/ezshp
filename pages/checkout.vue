<template>
  <div>
    <Header />
    <div :class="{ 'empty-cart': cart.length === 0 }" id="container">
      <div id="empty-cart" v-if="cart.length === 0">
        <h1>There are no items in your cart</h1>
      </div>

      <div id="checkout" v-else>
        <div id="progress">
          <div class="two" id="progress-line"></div>
          <span class="label completed">Account</span>
          <span class="label completed">Shipping</span>
          <span class="label completed">Payment</span>
          <span class="label">Review</span>
        </div>

        <h1>Payment Details</h1>
        <form>
          <div class="input-field">
            <label for="customer-name">Name on card</label>
            <input id="customer-name" type="text" />
          </div>
          <div class="input-field">
            <label for="card-number">Card number</label>
            <input
              class="cc-number"
              id="card-number"
              maxlength="19"
              name="credit-number"
              pattern="\d*"
              type="tel"
            />
          </div>
          <div class="input-field flex">
            <div class="expiration">
              <label for="card-expiration-month">Expiration</label>
              <input
                id="card-expiration-month"
                max="12"
                min="01"
                type="number"
              />
              <span>/</span>
              <input
                id="card-expiration-year"
                max="99"
                :min="currentYear"
                type="number"
              />
            </div>
            <div class="cvc">
              <label for="cvc">CVC</label>
              <input max="999" min="001" type="number" />
            </div>
          </div>
          <div>
            <button class="buy-btn">Preview Order</button>
          </div>
        </form>
      </div>
      <OrderSummary v-if="cart.length !== 0" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      cart: (state) => state.checkout.cart,
    }),
    currentYear() {
      const year = new Date().getFullYear().toString().substr(3, 2);
      return year;
    },
  },
};
</script>

<style lang="stylus" scoped>
#container
  display: grid
  grid-template-columns: 2fr 1fr

  &.empty-cart
    grid-template-columns: 1fr

h1
  color: #303030
  font-size: 1.6em
  font-weight: 400
  margin: 0 0 35px 0

>>> label
  color: #444
  display: block
  font-size: 0.9em
  padding: 0 0 8px 12px

>>> input
  background-color: #F0F0F0
  border: solid #EEE 1px
  border-radius: 5px
  box-sizing: border-box
  color: #555
  font-size: inherit
  padding: 12px 15px

#checkout, >>> #summary, #recommended-items
  box-sizing: border-box

#checkout
  font-size: 1.15em
  justify-self: center
  min-width: 50%
  padding: 20px

#progress
  display: grid
  grid-template-columns: repeat(4, 1fr)
  justify-items: center
  margin: 10px 0 40px

  #progress-line
    background-color: #DDD
    grid-column: 1/-1
    height: 2px
    position: relative
    width: 75%

    &::before
      background-color: lighten(#118DFF, 30%)
      content: ''
      display: block
      height: 2px
      left: 0
      position: absolute
      top: 0
      width: 0%

    &.zero::before
      width: 0%

    &.one::before
      width: 33%

    &.two::before
      width: 66%

    &.three::before
      width: 100%

  .label
    display: flex
    justify-items: center
    padding-top: 20px
    position: relative

    &::before
      background-color: #FFF
      border: solid #DDD 2px
      border-radius: 50%
      box-sizing: border-box
      content: ''
      display: block
      height: 18px
      left: calc(50% - 9px)
      position: absolute
      top: -10px
      width: 18px

    &::after
      background-color: #DDD
      border-radius: 50%
      content: ''
      display: block
      height: 8px
      left: calc(50% - 4px)
      position: absolute
      top: -5px
      width: 8px

    &.completed
      &::before
        border-color: lighten(#118DFF, 30%)

      &::after
        background-color: lighten(#118DFF, 30%)

form
  display: flex
  flex-direction: column

#customer-name, #card-number
  width: 100%

#expiration
  display: flex

.input-field
  flex-grow: 1
  min-width: 200px

  &:not(:first-child)
    margin-top: 25px

  &.flex
    display: flex

    span
      margin: 0 5px

    div:not(:first-child)
      margin-left: 12px

.buy-btn
  margin-top: 30px

#empty-cart
  padding: 30px

  h1
    margin: 0
    text-align: center

@media screen and (max-width: 1080px)
  #container
    grid-template-columns: repeat(2, 1fr)

@media screen and (max-width: 720px)
  #container
    grid-template-columns: 1fr

  #checkout
    order: 2
    width: 100%

  >>> #summary
    font-size: 1.25em
    justify-self: stretch
    order: 1

    #products
      .product
        grid-template-columns: 1fr 4fr
</style>

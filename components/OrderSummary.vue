<template>
  <div id="summary">
    <h2>Order Summary</h2>
    <div id="products">
      <div class="product" v-for="(product, n) in cart" :key="product.uid">
        <nuxt-link class="image-link" :to="product.slug">
          <img :alt="product.images[0].alt" :src="product.images[0].src" />
        </nuxt-link>
        <div>
          <div class="product-title">
            <h3><nuxt-link :to="product.slug">{{ product.title }}</nuxt-link></h3>
            <button
              class="delete-btn"
              @click="removeProduct(product.uid)"
            ><i class="fas fa-times"></i></button>
          </div>
          <div class="count">
            <button
              @click="updateProductQuantity(n, product, -1)"
            ><i class="fas fa-minus"></i></button>
            <span class="value">{{ product.count }}</span>
            <button
              @click="updateProductQuantity(n, product, 1)"
            ><i class="fas fa-plus"></i></button>
            <span class="times">&times;</span>
            <span class="total">${{ product.price }}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="discount">
      <label for="code">Gift card/Discount code</label>
      <div class="code">
        <input type="number" />
        <button class="apply-btn">Apply</button>
      </div>
    </div>
    <div id="totals">
      <div>
        <div class="title">Subtotal</div>
        <div class="value">{{ toCurrency(subTotal) }}</div>
      </div>
      <div>
        <div class="title">Tax</div>
        <div class="value">{{ toCurrency(tax) }}</div>
      </div>
      <div>
        <div class="title">Shipping</div>
        <div class="value">{{ toCurrency(shipping) }}</div>
      </div>
      <div class="total">
        <div class="title">Total</div>
        <div class="value">{{ toCurrency(total) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState({
      cart: (state) => state.checkout.cart,
    }),
    ...mapGetters({
      itemIndexByUid: 'checkout/itemIndexByUid',
    }),
    currentYear() {
      const date = new Date();
      return date.getFullYear().toString().slice(-2);
    },
    subTotal() {
      let amount = 0;
      this.cart.forEach((product) => {
        amount += product.price * product.count;
      });
      return amount;
    },
    tax() {
      return 0;
    },
    shipping() {
      return 0;
    },
    total() {
      return this.subTotal + this.tax + this.shipping;
    },
  },
  methods: {
    toCurrency(amount) {
      return amount.toLocaleString(undefined, {
        style: 'currency',
        currency: 'USD',
      });
    },
    updateProductQuantity(itemIndex, product, val) {
      const productCount = product.count;
      this.$store.dispatch('checkout/updateProductQuantity', {
        itemIndex,
        count: productCount + val,
      });
    },
    removeProduct(uid) {
      const itemIndex = this.itemIndexByUid(uid);
      this.$store.commit('checkout/removeProduct', itemIndex);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styl/config'

.apply-btn
  background-color: #FFF
  border: solid lighten(primary-color, 40%) 1px
  border-radius: 5px
  color: #118DFF
  padding: 12px 30px

#summary
  border-left: solid #EEE 1px
  justify-self: start

  input
    width: 100%

  h2
    font-size: 1.4em
    font-weight: 400
    margin: 0

  h2, #products, #discount, #totals
    box-sizing: border-box
    padding: 20px

  #products
    .product
      color: #666
      display: grid
      grid-gap: 20px
      grid-template-columns: 1fr 2.5fr

      .image-link
        display: block

      img
        object-fit: cover
        width: 100%

      .product-title
        align-items: flex-start
        display: flex
        justify-content: space-between

        h3
          color: #222
          font-size: 1.1em
          font-weight: 400
          margin: 3px 0 0

          a
            color: inherit
            text-decoration: none

            &:focus, &:hover
              text-decoration: underline

        .delete-btn
          background: none
          border: none
          color: #CACACA
          font-size: 1.5em
          margin-left: 24px
          padding: 0

      .count
        align-items: center
        display: flex
        margin-top: 12px

        .value
          margin: 0 10px

        button
          background-color: #F0F0F0
          border: none
          border-radius: 2px
          font-size: 0.5em
          padding: 8px 10px

        .times
          margin: 0 10px

  #discount
    border-top: solid #EEE 1px
    box-sizing: border-box
    font-size: 1.2em
    margin-top: 20px

    .code
      display: grid
      grid-gap: 12px
      grid-template-columns: 1fr auto

    .apply-btn
      font-size: 0.9em

  #totals
    border-top: solid #EEE 1px

    & > div
      display: flex
      justify-content: space-between

      &:not(:first-child)
        margin-top: 20px

    .total
      font-size: 1.4em
      font-weight: 500

@media screen and (min-width: 961px)
  #summary
    max-width: 400px
</style>

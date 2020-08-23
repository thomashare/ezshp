<template>
  <div class="product">
    <div class="constraint">
      <div class="product-images">
        <image-magnifier
          :alt="product.images[activeImage].alt"
          :src="product.images[activeImage].src"
          :zoom-src="product.images[activeImage].src"
          width="100%"
          zoom-height="400"
          zoom-width="450"
        />
        <img
          :alt="image.alt"
          :key="image.src"
          :src="image.src"
          @click="activeImage = n"
          v-for="(image, n) in product.images"
        />
      </div>

      <div class="product-details">
        <h2 class="product-title">{{ product.title }}</h2>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <i class="far fa-star"></i>
          <span class="rating-count">(<a href="#">163</a>)</span>
        </div>
        <div class="product-description">
          <p :key="text" v-for="text in product.description">{{ text }}</p>
        </div>
        <div class="purchase">
          <div class="count">
            <button @click="count--" :disabled="count === 1">
              <i class="fas fa-minus"></i>
            </button>
            <input class="count-value" type="number" v-model="count" @keyup.enter="addToCart" />
            <button @click="count++"><i class="fas fa-plus"></i></button>
          </div>
          <div class="price">${{ product.price }}</div>
        </div>
        <p class="cart-total" v-if="itemInCart(product.uid)">
          You currently have {{ productCartCount(product.uid) }} in your
          <nuxt-link to="checkout">cart</nuxt-link>
        </p>
        <button class="buy-btn" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ImageMagnifier } from 'vue-image-magnifier';

export default {
  props: ['product'],
  components: {
    'image-magnifier': ImageMagnifier,
  },
  data() {
    return {
      activeImage: 0,
      count: 1,
    };
  },
  computed: {
    ...mapGetters({
      itemInCart: 'checkout/itemInCart',
      itemIndexByUid: 'checkout/itemIndexByUid',
      productCartCount: 'checkout/productCartCount',
    }),
  },
  methods: {
    async addToCart() {
      // if the item is not in the user's cart, add it to their cart
      if (!this.itemInCart(this.product.uid)) {
        await this.$store.dispatch('checkout/addToCart', {
          ...this.product,
          count: this.count,
        });
      } else {
        // if the item is already in the user's cart, update the item count
        await this.$store.dispatch('checkout/updateProductQuantity', {
          itemIndex: this.itemIndexByUid(this.product.uid),
          count: this.productCartCount(this.product.uid) + Number(this.count),
        });
      }

      // redirect to the checkout page
      this.$router.push('checkout');
    },
  },
};
</script>

<style lang="stylus" scoped>
.product
  box-sizing: border-box
  padding: 20px 0

  .constraint
    display: grid
    grid-column-gap: 50px
    grid-row-gap: 30px
    grid-template-columns: 1fr 1fr
    max-width: 960px
    padding: 0 20px

.product-images
  display: grid
  grid-gap: 8px
  grid-template-columns: repeat(4, 1fr)

  img
    border: solid #EEE 1px
    border-radius: 3px
    box-sizing: border-box
    cursor: pointer
    height: 100px
    object-fit: cover
    width: 100%

  .image-magnifier
    box-sizing: border-box
    cursor: auto
    grid-column: 1/-1
    height: auto

.product-details
  align-items: flex-start
  justify-content: center
  display: flex
  flex-direction: column

  .product-title
    color: #3A3A3A
    font-size: 2.5em
    margin: 0

  .rating
    align-items: center
    display: flex
    margin: 10px 0

    i
      color: #FFBF20
      margin-left: 1px
      text-shadow: inset 0 0 1px #000

    .rating-count
      margin-left: 8px

      a
        color: inherit

  .product-description
    color: #303030
    font-size: 0.9em
    line-height: 1.5em
    max-width: 400px

    p
      margin: 8px 0 0

  .purchase
    align-items: center
    display: flex
    margin-top: 35px

    .price
      font-size: 2em
      margin-left: 20px
      min-width: 7ch

    .count
      align-items: center
      display: flex

      button, input
        box-sizing: border-box

      button
        align-items: center
        background-color: #DDD
        border: none
        border-radius: 5px
        display: flex
        height: 3em
        justify-content: center
        padding: 0
        width: 3em

      .count-value
        border: solid #666 1px
        border-radius: 5px
        font-size: 1.25em
        margin: 0 15px
        padding: 5px 3px
        text-align: center
        width: 6ch

  .cart-total
    font-size: 0.9em
    margin: 12px 0 0

  .buy-btn
    margin-top: 30px

@media screen and (max-width: 720px)
  .product
    .constraint
      grid-template-columns: 1fr
</style>

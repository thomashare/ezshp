<template>
  <div id="container">
    <Header />
    <Banner />
    <Features />
    <Product id="featured-product" :product="reepodsPro" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getProductByUid: 'products/getProductByUid',
    }),
    reepodsPro() {
      return this.getProductByUid(1);
    },
  },
};
</script>

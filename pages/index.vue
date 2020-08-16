<template>
  <div id="container">
    <Header />
    <Banner />
    <Features />
    <Product id="featured-product" :product="ezshpPro" />
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
    ezshpPro() {
      return this.getProductByUid(1);
    },
  },
};
</script>

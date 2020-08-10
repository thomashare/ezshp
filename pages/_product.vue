<template>
  <div class="container">
    <Header />
    <Product id="featured-product" :product="product" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getProductBySlug: 'products/getProductBySlug',
    }),
    slug() {
      return this.$route.params.product;
    },
    product() {
      return this.getProductBySlug(this.slug);
    },
  },
};
</script>

<style scoped>
</style>

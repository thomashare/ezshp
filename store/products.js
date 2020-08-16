export const getters = {
  getProductByUid(state) {
    return (uid) => state.products.find((product) => product.uid === uid);
  },
  getProductBySlug(state) {
    return (slug) => state.products.find((product) => product.slug === slug);
  },
};

export const state = () => ({
  products: [
    {
      count: 1,
      description: [
        'Lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet.',
      ],
      images: [
        {
          alt: 'Ezshp image',
          src: 'products/pros/ezshp-pro-image-1.jpg',
        },
        {
          alt: 'Ezshp image',
          src: 'products/pros/ezshp-pro-image-2.jpg',
        },
        {
          alt: 'Ezshp image',
          src: 'products/pros/ezshp-pro-image-3.jpg',
        },
        {
          alt: 'Ezshp image',
          src: 'products/pros/ezshp-pro-image-4.jpg',
        },
      ],
      price: 69.99,
      slug: 'ezshp-pro',
      title: 'Ezshp Pro',
      uid: 1,
    },
  ],
});

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
          alt: 'Reepods image',
          src: 'products/pros/proxypods-image-1.jpg',
        },
        {
          alt: 'Reepods image',
          src: 'products/pros/proxypods-image-2.jpg',
        },
        {
          alt: 'Reepods image',
          src: 'products/pros/proxypods-image-3.jpg',
        },
        {
          alt: 'Reepods image',
          src: 'products/pros/proxypods-image-4.jpg',
        },
      ],
      price: 69.99,
      slug: 'reepods-pro',
      title: 'Reepods Pro',
      uid: 1,
    },
  ],
});

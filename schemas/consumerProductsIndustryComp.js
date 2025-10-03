import { defineField, defineType } from 'sanity';

export const consumerProductsIndustryBlock = defineType({
  name: 'consumerProductsIndustryBlock',
  title: 'Consumer Products Industry Block',
  type: 'document',
  fields: [
    defineField({
      name: 'workCategories',
      title: 'Work Categories ',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Clothing', value: 'clothing' },
          { title: 'Consumer Electronics', value: 'consumer-electronics' },
          { title: 'Dry-Fruits', value: 'dry-fruits' },
          { title: 'Social Media Marketing', value: 'social-media-marketing' },
          { title: 'Grocery', value: 'grocery' },
          { title: 'Hair Care Products', value: 'hair-care-products' },
          { title: 'Health & Beauty Wellness', value: 'health-beauty-wellness' },
          { title: 'Home Appliances', value: 'home-appliances' },
          { title: 'Home Decor', value: 'home-decor' },
          { title: 'Home Furnishings', value: 'home-furnishings' },
          { title: 'Jewellery', value: 'jewellery' },
          { title: 'Nuts & Spices', value: 'nuts-spices' },
          { title: 'Trailers & E-rickshaw', value: 'trailers-e-rickshaw' },
          { title: 'Villas & Hotel Rooms', value: 'villas-hotel-rooms' },
        ],
        layout: 'categories',
      },
      description: 'Select one or more categories associated with this post.',
    }),
  ],
});

import { defineField, defineType } from 'sanity';

export const categoryBanner = defineType({
  name: 'categoryBanner',
  title: 'Category Banner Block',
  type: 'document',
  fields: [
    defineField({
      name: 'categoryTitle',
      title: 'Category Title',
      type: 'string',
    }),
    defineField({
      name: 'categorySubtitle',
      title: 'Category Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'categoryDescription',
      title: 'Category Description',
      type: 'text',
    }),
    defineField({
      name: 'categoryFeatures',
      title: 'Category Features',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'ourClients',
      title: 'Our Clients',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'brandList' }], 
        },
      ],
    }),
  ],
});

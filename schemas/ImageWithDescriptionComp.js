import { defineField, defineType } from 'sanity';

export const ImageWithDescriptionComp = defineType({
  name: 'ImageWithDescriptionComp',
  title: 'Image With Description Component',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the service.',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      description: 'Enter the subtitle of the service.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Enter a detailed description.',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'Item',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        }),
      ],
      description: 'Add multiple items with image, heading, and description.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Enter the URL-friendly version of the service title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
});

import { defineField, defineType } from 'sanity';

export const careerDetail = defineType({
  name: 'careerDetail',
  title: 'Careers',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the career detail.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Generate a URL-friendly slug for the career detail.',
    }),
    defineField({
      name: 'uri',
      title: 'URI',
      type: 'string',
      description: 'Enter the URI of the page',
    }),

    defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block',
          },
        ],
        description: 'Provide a detailed markup or description for the career detail, including rich text and images.',
      }),
      defineField({
        name: 'careerFields',
        title: 'Career Fields',
        type: 'reference',
        to: [{ type: 'careerFieldsBlock' }],
        description: 'Reference a service banner block.',
      }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload a featured image for the career detail.',
    }),
    defineField({
      name: 'globalMeta',
      title: 'Global Meta',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'string',
        }),
        defineField({
            name: 'metaImage',
            title: 'Meta Image',
            type: 'image',
          }),
      ],
    })
  ],
});

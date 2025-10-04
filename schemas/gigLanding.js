import { defineField, defineType } from 'sanity';

export const gigLanding = defineType({
  name: 'gigLanding',
  title: 'Gig Landing',
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
      validation: (Rule) => Rule.required(),
      description: 'Generate a URL-friendly slug for the career detail.',
    }),
    defineField({
      name: 'uri',          
      title: 'URI',
      type: 'string',
      description: 'Enter the URI of the page',
    }),
    defineField({
      name: 'industryBanner',
      title: 'Industry Banner',
      type: 'reference',
      to: [{ type: 'serviceBannerBlock' }],
      description: 'Reference the service banner block.',
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      type: 'reference',
      to: [{ type: 'contactUsBlock' }],
      description: 'Reference the Contact Us component.',
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

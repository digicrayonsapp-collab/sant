import { defineField, defineType } from 'sanity';

export const workLanding = defineType({
  name: 'workLanding',
  title: 'Work Landing',
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
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload a featured image for the career detail.',
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      type: 'reference',
      to: [{ type: 'contactUsBlock' }],
      description: 'Reference the Contact Us component.',
    }),
    defineField({
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Work Details',
          fields: [
            defineField({
              name: 'workSubtitle',
              title: 'Work Subtitle',
              type: 'string',
              description: 'Enter the subtitle of the work.',
            }),
            defineField({
              name: 'workTitle',
              title: 'Work Title',
              type: 'string',
              description: 'Enter the title of the work.',
            }),
            defineField({
              name: 'workDescription',
              title: 'Work Description',
              type: 'text',
              description: 'Enter a brief description of the work.',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              description: 'Upload an image for this work.',
            }),
            defineField({
              name: 'workCategory',
              title: 'Work Category',
              type: 'reference',
              to: [{ type: 'workDetail' }],
              description: 'Reference the work category from work detail.',
            }),
            defineField({
              name: 'pageLink',
              title: 'Page Link',
              type: 'url',
              description: 'Enter the link to the page for this work.',
            }),
          ],
        },
      ],
      description: 'Add works to be displayed on the landing page.',
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

import { defineField, defineType } from 'sanity';

export const postLanding = defineType({
  name: 'postLanding',
  title: 'Insights Landing',
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
      name: 'insightsDesc',
      title: 'Insights Desc',
      type: 'object',
      description: 'Group for insight details.',
      fields: [
        defineField({
          name: 'insightTitle',
          title: 'Insight Title',
          type: 'string',
          description: 'Enter the title of the insight.',
        }),
        defineField({
          name: 'insightDescription',
          title: 'Insight Description',
          type: 'text',
          description: 'Provide a detailed description of the insight.',
        }),
      ],
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
    }),
  ],
});

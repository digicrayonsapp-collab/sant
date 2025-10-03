import { defineField, defineType } from 'sanity';

export const instagramViralHooks = defineType({
  name: 'instagramViralHooksLanding',
  title: 'Instagram Viral Hooks Landing',
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
      name: 'industryBanner',
      title: 'Industry Banner',
      type: 'reference',
      to: [{ type: 'serviceBannerBlock' }],
      description: 'Reference the service banner block.',
    }),
    defineField({
      name: 'VideoCard',
      title: 'Video Card',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'video',
              title: 'Video URL',
              type: 'url',
              description: 'Enter the video URL (YouTube, Vimeo, or any hosted video link).',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Enter the title for the video card.',
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Entertainment & Fun', value: 'entertainment_fun' },
                  { title: 'Motivation & Inspiration', value: 'motivation_inspiration' },
                  { title: 'Educational & Informative', value: 'educational_informative' },
                  { title: 'Fitness & Health', value: 'fitness_health' },
                  { title: 'Beauty & Fashion', value: 'beauty_fashion' },
                  { title: 'Lifestyle & Travel', value: 'lifestyle_travel' },
                  { title: 'Gaming & Esports', value: 'gaming_esports' },
                  { title: 'Tech & Gadgets', value: 'tech_gadgets' },
                ],
                layout: 'dropdown', 
              },
              description: 'Select a category for this video.',
            }),
          ],
        },
      ],
      description: 'An array of video cards, each containing a video file and a title.',
    }),

    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'faqTitle',
              title: 'FAQ Title',
              type: 'string',
            }),
            defineField({
              name: 'faqDescription',
              title: 'FAQ Description',
              type: 'text',
            }),
          ],
        },
      ],
      options: { collapsible: true, collapsed: true },
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

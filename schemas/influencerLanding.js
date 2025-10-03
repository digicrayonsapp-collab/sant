import { defineType, defineField } from 'sanity'

export const influencerLanding = defineType({
  name: 'influencerLanding',
  title: 'Influencer Landing',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'industryBanner',
      title: 'Industry Banner',
      type: 'reference',
      to: [{ type: 'serviceBannerBlock' }],
      description: 'Reference the service banner block.',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'ourInfluencers',
      title: 'Our Influencers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'influencerForm' }] }],
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'faqTitle', title: 'FAQ Title', type: 'string' },
            { name: 'faqDescription', title: 'FAQ Description', type: 'text' },
          ],
        },
      ],
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'globalMeta',
      title: 'Global Meta',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'string' },
        { name: 'metaImage', title: 'Meta Image', type: 'image' },
      ],
    },
  ],
})

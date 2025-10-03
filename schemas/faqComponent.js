import { defineField, defineType } from 'sanity';

export const faqArea = defineType({
  name: 'faqArea',
  title: 'FAQ Area Block',
  type: 'document',
  fields: [
    defineField({
      name: 'faqExcerpt',
      title: 'FAQ Excerpt',
      type: 'string',
      description: 'Enter a short description or excerpt for the FAQ area.',
    }),
    defineField({
      name: 'faqSubtitle',
      title: 'FAQ Subtitle',
      type: 'string',
      description: 'Enter a subtitle for the FAQ area.',
    }),
    defineField({
      name: 'faqTitle',
      title: 'FAQ Title',
      type: 'string',
      description: 'Enter the main title for the FAQ area.',
    }),
    defineField({
      name: 'knowMore',
      title: 'Know More',
      type: 'url',
      description: 'Select a page for the "Know More" link.',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faq' }],
        },
      ],
      description: 'Select multiple FAQs to associate with this area.',
    }),
  ],
});

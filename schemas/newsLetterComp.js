import { defineField, defineType } from 'sanity';

export const newsLetterBlock = defineType({
  name: 'newsLetterBlock',
  title: 'News Letter Block',
  type: 'document',
  fields: [
    defineField({
      name: 'newsLetterTitle',
      title: 'News Letter Title',
      type: 'string',
      description: 'Enter a subtitle for the FAQ area.',
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'string',
      description: 'Enter the Call-to-Action (CTA) text.',
    }),
    defineField({
      name: 'timing',
      title: 'Timing',
      type: 'string',
      description: 'Enter the timing information for the CTA.',
    }),
  ],
});

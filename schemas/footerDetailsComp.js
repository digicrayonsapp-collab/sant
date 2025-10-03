import { defineField, defineType } from 'sanity';

export const footerDetailsBlock = defineType({
  name: 'footerDetilsBlock',
  title: 'Footer Details Block',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Enter a subtitle for the FAQ area.',
    }),
    defineField({
      name: 'copyRight',
      title: 'Copy Right',
      type: 'string',
      description: 'Enter the Call-to-Action (CTA) text.',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Enter the timing information for the CTA.',
    }),
    defineField({
        name: 'footerDesc',
        title: 'Footer Desc',
        type: 'string',
        description: 'Enter the timing information for the CTA.',
      }),
      defineField({
        name: 'companyUrl',
        title: 'Company Url',
        type: 'string',
        description: 'Enter the timing information for the CTA.',
      }),
      defineField({
        name: 'footerImage',
        title: 'Footer Image',
        type: 'image',
        description: 'Enter the timing information for the CTA.',
      }),
  ],
});

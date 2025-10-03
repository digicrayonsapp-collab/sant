import { defineField, defineType } from 'sanity';

export const defaultTemplate = defineType({
  name: 'defaultTemplate',
  title: 'Default Template Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter a subtitle for the FAQ area.',
    }),
    defineField({
        name: 'templateDescription',
        title: 'Template Description',
        type: 'array',
        of: [{ type: 'block' }], 
        description: 'Enter the detailed description or answer for the FAQ.',
      }),
      defineField({
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'image',
        description: 'Enter the Twitter link',
      }),
      defineField({
        name: 'contactUsAddressBlock',
        title: 'ContactUs Address Block',
        type: 'reference',
        to: [{ type: 'contactUsAddressBlock' }],
        description: 'Reference a service banner block.',
      }),
      defineField({
        name: 'newsLetterBlock',
        title: 'NewsLetter Block',
        type: 'reference',
        to: [{ type: 'newsLetterBlock' }],
        description: 'Reference a service banner block.',
      }),
      defineField({
        name: 'footerDetails',
        title: 'Footer Details',
        type: 'reference',
        to: [{ type: 'footerDetilsBlock' }],
        description: 'Reference a service banner block.',
      }),
      defineField({
        name: 'socialMediaLinks',
        title: 'Social Media Links',
        type: 'reference',
        to: [{ type: 'socialMediaLinks' }],
        description: 'Reference a service banner block.',
      }),
  ],
});

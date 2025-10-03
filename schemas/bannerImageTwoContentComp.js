import { defineField, defineType } from 'sanity'

export const bannerImageTwoContent = defineType({
  name: 'bannerImageTwoContentBlock',
  title: 'Banner Image Two Content Block',
  type: 'document',
  fields: [
    defineField({
      name: 'content1',
      title: 'Content 1',
      type: 'text',
      description: 'Enter the first content block for the banner.',
    }),
    defineField({
      name: 'content2',
      title: 'Content 2',
      type: 'text',
      description: 'Enter the second content block for the banner.',
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
      description: 'Enter the title for the banner.',
    }),
    defineField({
      name: 'bannerVideo',
      title: 'Banner Video',
      type: 'url',
      description: 'Enter the URL for the banner video.',
    }),
    defineField({
      name: 'bannerVideoFile',
      title: 'Banner Video File',
      type: 'file',
      description: 'Upload a file for the banner.',
    }),

    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'text',
      description: 'Enter additional content for the banner.',
    }),
  ],
});

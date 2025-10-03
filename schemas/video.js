import { defineField, defineType } from 'sanity'

export const Videos = defineType({
  name: 'Videos',
  title: 'Video Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'heading',
      type: 'string',
      description: 'Enter the main title of the page.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Enter the main Description of the page',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the service title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Enter the URL of the video you want to display on the page.',
    }),
  ],
})

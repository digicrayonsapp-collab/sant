import {defineField, defineType} from 'sanity'

export const aiImage = defineType({
  name: 'aiImage',
  title: 'Ai Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the service.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      description: 'Enter or generate a unique slug for the service.',
    }),
    defineField({
      name: 'uri',
      title: 'URI',
      type: 'string',
      description: 'Enter the URI of the page',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image for the service.',
    }),
   
    defineField({
      name: 'prompt',
      title: 'Prompt',
      type: 'text',
      description: 'Enter a prompt for this service (e.g., description or call to action).',
    }),
  ],
})

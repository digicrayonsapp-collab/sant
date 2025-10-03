import { defineField, defineType } from 'sanity';

export const Achievements = defineType({
  name: 'achievements',
  title: 'Achievements Block',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the taxonomy.',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', 
        maxLength: 96,  
      },
      description: 'The URL-friendly version of the name.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Enter a description of the taxonomy.',
    }),

    defineField({
      name: 'achievementText',
      title: 'Achievement Text',
      type: 'text',
      description: 'Text description of the achievement related to this taxonomy.',
    }),

    defineField({
      name: 'achievementImage',
      title: 'Achievement Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image related to the achievement of this taxonomy.',
    }),
  ],
});

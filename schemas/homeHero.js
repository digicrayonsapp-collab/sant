import { defineField, defineType } from 'sanity';

export const homeHero = defineType({
  name: 'homeHero',
  title: 'Home Hero Block',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'experienceYear',
      title: 'Experience Year',
      type: 'string',
    }),
    defineField({
      name: 'Ourexperience',
      title: 'Our Experience',
      type: 'array',
      of: [{ type: 'block' }], 
    }),
    
    defineField({
        name: 'link',
        title: 'Link',
        type: 'string', 
      }),
  ],
});

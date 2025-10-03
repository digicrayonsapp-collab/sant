import { defineField, defineType } from 'sanity';

export const toolsComponentBlock = defineType({
  name: 'toolsComponentBlock',
  title: 'Tools Component Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter a subtitle for the feedback section.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      description: 'Enter a title for the feedback section.',
    }),
  ],
});

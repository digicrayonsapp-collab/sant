import { defineField, defineType } from 'sanity';

export const secondaryMenu = defineType({
  name: 'secondaryMenu',
  title: 'Secondary Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'Label',
      title: 'Menu Title',
      type: 'string',
      description: 'Enter the title of the primary menu.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'Label',
        maxLength: 96,
      },
      description: 'Generate a URL-friendly slug for the career detail.',
    }),
    defineField({
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [{ type: 'menuItem' }],
      description: 'Define the top-level menu items.',
    }),
  ],
});

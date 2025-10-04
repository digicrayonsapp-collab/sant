import { defineField, defineType } from 'sanity';

export const primaryMenu = defineType({
  name: 'primaryMenu',
  title: 'Primary Menu',
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
      name: 'type',
      title: 'Type',
      type: 'string',
      description: 'Select the type of menu item.',
      options: {
        list: [
          { title: 'Link', value: 'link' },
          { title: 'Dropdown', value: 'dropdown' },
          { title: 'Mega Menu', value: 'megaMenu' },
        ],
      },
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

import { defineField, defineType } from 'sanity';

export const blogCategoriesBlock = defineType({
  name: 'blogCategoriesBlock',
  title: 'Blog Categories Block',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the category name.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      description: 'Generate a URL-friendly slug for the career detail.',
    }),
  ],
});

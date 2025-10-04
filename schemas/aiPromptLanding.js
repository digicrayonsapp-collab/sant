import { defineField, defineType } from 'sanity';

export const aiLanding = defineType({
  name: 'aiLanding',
  title: 'Ai Landing',
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
      validation: (Rule) => Rule.required(),
      description: 'Enter or generate a unique slug for the service.',
    }),
    defineField({
      name: 'uri',
      title: 'URI',
      type: 'string',
      description: 'Enter the URI of the page',
    }),
    defineField({
      name: 'blogs',
      title: 'Blogs',
      type: 'object',
      fields: [
        defineField({
          name: 'blogsSubtitle',
          title: 'Blogs Subtitle',
          type: 'string',
          description: 'Enter the subtitle for the feedback section.',
        }),
        defineField({
          name: 'blogsTitle',
          title: 'Blogs Title',
          type: 'string',
          description: 'Enter the title for the feedback section.',
        }),
      ],
    }),
    defineField({
      name: 'blogPost',
      title: 'Blog Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'posts' }],
        },
      ],
      description: 'Reference multiple blog posts.',
    }),
  ],
});

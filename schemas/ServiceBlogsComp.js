import { defineField, defineType } from 'sanity';

export const serviceBlogsComp = defineType({
  name: 'serviceBlogsComp',
  title: 'Service Blogs Comp',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the main title of the service.',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      description: 'Enter the subtitle of the service.',
    }),
    defineField({
      name: 'highlightedBlogs',
      title: 'Highlighted Blogs',
      type: 'array',
      of: [
        defineField({
          name: 'blogItem',
          title: 'Blog Item',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Enter the blog title.',
            },
            {
              name: 'subTitle',
              title: 'Sub Title',
              type: 'string',
              description: 'Enter the blog subtitle.',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Enter the blog description.',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        }),
      ],
      description: 'Add multiple highlighted blog items with image, title, subtitle, and description.',
    }),
  ],
});

import {defineField, defineType} from 'sanity'

export const postDetail = defineType({
  name: 'posts',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the career detail.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Generate a URL-friendly slug for the career detail.',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      description:
        'Provide a detailed markup or description for the career detail, including rich text and images.',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload a featured image for the career detail.',
    }),
    defineField({
      name: 'BlogImage',
      title: 'Blog Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload a Blog image for the career detail.',
    }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published At',
    //   type: 'datetime',
    //   description: 'The date and time the post was published.',
    //   readOnly: true,
    // }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'reference',
      to: [{type: 'blogCategoriesBlock'}],
      description: 'Select a single category relevant to the work detail.',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'category',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Enter the name of the category.',
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: 'name',
                maxLength: 96,
              },
              description: 'Generate a URL-friendly slug for the category.',
            },
          ],
        },
      ],
      description: 'Add one or more categories associated with this post.',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        defineField({
          name: 'authorName',
          title: 'Author Name',
          type: 'string',
          options: {
            list: [
              {title: 'Rahul Yadav', value: 'Rahul'},
              {title: 'Hitesh Yadav', value: 'Hitesh'},
            ],
          },
          description: 'Select the author for this post.',
        }),
      ],
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      type: 'reference',
      to: [{type: 'contactUsBlock'}],
      description: 'Reference the Contact Us component.',
    }),
    defineField({
      name: 'globalMeta',
      title: 'Global Meta',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'string',
        }),
        defineField({
          name: 'metaImage',
          title: 'Meta Image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'relatedBlogs',
      title: 'Related Blogs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'posts'}],
        },
      ],
      description: 'Add one or more related blogs associated with this post.',
    }),
  ],
  hooks: {
    beforePublish: (document) => {
      if (!document.publishedAt) {
        return {
          ...document,
          publishedAt: new Date().toISOString(),
        }
      }
      return document
    },
  },
})

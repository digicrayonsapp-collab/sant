import { defineField, defineType } from 'sanity';

export const gigDetail = defineType({
  name: 'gigDetail',
  title: 'Gigs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the career detail.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Enter the Description of the page',
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
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload a featured image for the career detail.',
    }),

      defineField({
        name: 'gigCategory',
        title: 'Gig Category',
        type: 'reference',
        to: [{ type: 'workCategoriesBlock' }],
        description: 'Select a single category relevant to the work detail.',
        }),

      defineField({
        name:'redirectUri',
        title:'Redirect Uri',
        type:'url'
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
        })
  ],
});

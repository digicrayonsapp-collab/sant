import { defineField, defineType } from 'sanity';

export const signup = defineType({
  name: 'signupLanding',
  title: 'Signup',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heading',
        maxLength: 200,
      },
    }),
    defineField({
        name: 'categoryBanner',
        title: 'Category Banner',
        type: 'reference',
        to: [{ type: 'categoryBanner' }], 
        description: 'Reference to the story area block for career detail.',
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

import { defineField, defineType } from 'sanity';

export const careerBenefitsBlock = defineType({
  name: 'careerBenefitsBlock',
  title: 'Career Benefits Block',
  type: 'document',
  fields: [
    defineField({
      name: 'benefitTitle',
      title: 'Benefit Title',
      type: 'text',
      description: 'Enter the first content block for the banner.',
    }),
    defineField({
      name: 'benefitDescription',
      title: 'Benefit Description',
      type: 'text',
      description: 'Enter the second content block for the banner.',
    }),
    defineField({
      name: 'careerBenefits',
      title: 'Career Benefits',
      type: 'array',
      description: 'Add multiple career benefits, each with a name and slug.',
      of: [
        defineField({
          name: 'benefit',
          title: 'Benefit',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Enter the name of the benefit.',
            }),
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              description: 'Enter the slug for the benefit.',
              options: {
                source: 'name', 
              },
            }),
          ],
        }),
      ],
    }),
  ],
});

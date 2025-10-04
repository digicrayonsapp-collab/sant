import { defineField, defineType } from 'sanity';

export const careerLanding = defineType({
  name: 'careerLanding',
  title: 'Career Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title for the career landing page.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Enter a description for the career landing page.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the service title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'uri',
      title: 'URI',
      type: 'string',
      description: 'Enter the URI of the page',
    }),
    defineField({
      name: 'storyArea',
      title: 'Story Area',
      type: 'reference',
      to: [{ type: 'storyAreaBlock' }],
      description: 'Reference to the story area block for career detail.',
    }),
    defineField({
      name: 'jobs',
      title: 'Jobs',
      type: 'reference',
      to: [{ type: 'jobsBlock' }],
      description: 'Reference a service banner block.',
    }),
    defineField({
      name: 'careerBenefits',
      title: 'Career Benefits',
      type: 'reference',
      to: [{ type: 'careerBenefitsBlock' }],
      description: 'Reference a service banner block.',
    }),
    defineField({
      name: 'careerHero',
      title: 'Career Hero',
      type: 'reference',
      to: [{ type: 'bannerImageTwoContentBlock' }],
      description: 'Reference a service banner block.',
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      type: 'reference',
      to: [{ type: 'contactUsBlock' }],
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
  ],
});

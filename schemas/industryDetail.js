import { defineField, defineType } from 'sanity';

export const industryDetail = defineType({
  name: 'industries',
  title: 'Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'industryBanner',
      title: 'Industry Banner',
      type: 'reference',
      to: [{ type: 'serviceBannerBlock' }],
      description: 'Reference the service banner block.',
    }),
    defineField({
      name: 'ourClients',
      title: 'Our Clients',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'brandList' }], 
        },
      ],
    }),
    defineField({
      name: 'industriesWeServe',
      title: 'Industries We Serve',
      type: 'object',
      fields: [
        defineField({
          name: 'serveHeading',
          title: 'Serve Heading',
          type: 'string',
        }),
        defineField({
          name: 'serveDescription',
          title: 'Serve Description',
          type: 'text',
        }),
        defineField({
          name: 'serveImage',
          title: 'Serve Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'variousIndustries',
          title: 'Various Industries',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'bannerImageTwoContent',
      title: 'Banner Image Two Content',
      type: 'reference',
      to: [{ type: 'bannerImageTwoContentBlock' }],
      description: 'Reference the service banner block.',
    }),
    defineField({
      name: 'industryHowWeWork',
      title: 'Industry How We Work',
      type: 'object',
      fields: [
        defineField({
          name: 'industryTitle',
          title: 'Industry Title',
          type: 'string',
        }),
        defineField({
          name: 'industrySubtitle',
          title: 'Industry Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'industryDescription',
          title: 'Industry Description',
          type: 'text',
        }),
        defineField({
          name: 'industrySteps',
          title: 'Industry Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
        name: 'Feedback',
        title: 'Clients Feedback',
        type: 'reference',
        to: [{ type: 'testimonialBlock' }],
        description: 'Reference the testimonial block.',
    }),  
    defineField({
        name: 'faq',
        title: 'FAQ',
        type: 'reference',
        to: [{ type: 'faqArea' }],
        description: 'Reference the FAQ section.',
    }),
  ],
});

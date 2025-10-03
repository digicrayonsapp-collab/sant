import {defineField, defineType} from 'sanity'

export const Technologies = defineType({
  name: 'technologies',
  title: 'Technologies',
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
      description: 'Enter the URL-friendly version of the service title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'serviceBanner',
      title: 'Service Banner',
      type: 'reference',
      to: [{type: 'serviceBannerBlock'}],
      description: 'Reference the service banner block.',
    }),

    defineField({
      name: 'serviceHero',
      title: 'Service Hero',
      type: 'reference',
      to: [{type: 'serviceHero'}],
      description: 'Reference the clients component.',
    }),

    defineField({
      name: 'clients',
      title: 'Clients',
      type: 'reference',
      to: [{type: 'ourClientsBlock'}],
      description: 'Reference the main Clients landing document.',
    }),

    defineField({
      name: 'stepsInclude',
      title: 'Steps Include',
      type: 'reference',
      to: [{type: 'workFlow'}],
      description: 'Reference the steps workflow for the service.',
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
                  name: 'subtitle',
                  title: 'Sub Title',
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
                  options: {hotspot: true},
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'ourValues',
      title: 'Our Values',
      type: 'object',
      fields: [
        defineField({
          name: 'industryTitle',
          title: 'Industry Title',
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
              ],
            },
          ],
        }),
      ],
    }),

     defineField({
        name: 'shopifySolutions',
        title: 'Shopify Solutions',
        type: 'reference',
        to: [{ type: 'aboutArea2Block' }],
        description: 'Reference the About Us component.',
      }),

    defineField({
      name: 's',
      title: 'FAQ',
      type: 'reference',
      to: [{type: 'faqArea'}],
      description: 'Reference the FAQ section.',
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
  ],
})

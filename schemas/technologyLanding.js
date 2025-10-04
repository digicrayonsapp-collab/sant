import {defineField, defineType} from 'sanity'

export const TechnologyLanding = defineType({
  name: 'technologyLanding',
  title: 'Technology Landing',
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
      validation: (Rule) => Rule.required(),
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
      name: 'techUsed',
      title: 'Tech  We Used',
      type: 'object',
      fields: [
        defineField({
          name: 'techTitle',
          title: 'Tech Title',
          type: 'string',
        }),
        defineField({
          name: 'techSubtitle',
          title: 'Tech Subtitle',
          type: 'string',
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
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'url',
                }),
                 defineField({
                  name: 'slug',
                  title: 'Slug',
                  type: 'slug',
                }),
              ],
            },
          ],
        }),
      ],
    }),

     defineField({
      name: 'marketingplatformUsed',
      title: 'Marketing Platform We Used',
      type: 'object',
      fields: [
        defineField({
          name: 'techTitle',
          title: 'Tech Title',
          type: 'string',
        }),
        defineField({
          name: 'techSubtitle',
          title: 'Tech Subtitle',
          type: 'string',
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
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'url',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'ourCapabilities',
      title: 'Our Capabilities',
      type: 'object',
      fields: [
        defineField({
          name: 'capabilityTitle',
          title: 'Capability Title',
          type: 'string',
        }),
        defineField({
          name: 'capabilitySubtitle',
          title: 'Capability Subtitle',
          type: 'string',
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
      name: 'ourProcess',
      title: 'Our Process',
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
      name: 'valueOffer',
      title: 'Value Offer',
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

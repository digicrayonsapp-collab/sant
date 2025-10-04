import {defineField, defineType} from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to indicate if this form fields are active.',
      initialValue: true,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryBanner',
      title: 'Category Banner',
      type: 'reference',
      to: [{type: 'categoryBanner'}],
      description: 'Reference to the story area block for career detail.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload the thumbnail image for the landing page.',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'faqTitle',
              title: 'FAQ Title',
              type: 'string',
            }),
            defineField({
              name: 'faqDescription',
              title: 'FAQ Description',
              type: 'text',
            }),
          ],
        },
      ],
      options: {collapsible: true, collapsed: true},
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
      name: 'productDetails',
      title: 'Product Details',
      type: 'object',
      fields: [
        defineField({
          name: 'ratingValue',
          title: 'Rating Value',
          type: 'string',
          description: 'Enter the rating value for the service.',
          validation: (Rule) => Rule.min(0).max(5),
        }),
        defineField({
          name: 'reviewCount',
          title: 'Review Count',
          type: 'number',
          description: 'Enter the number of reviews for the service.',
        }),
        defineField({
          name: 'servicePrice',
          title: 'Service Price',
          type: 'number',
          description: 'Enter the price of the service.',
        }),
        defineField({
          name: 'serviceAvailability',
          title: 'Service Availability',
          type: 'boolean',
          description: 'Specify whether the service is available.',
        }),
      ],
    }),
    defineField({
      name: 'serving',
      title: 'Serving',
      type: 'object',
      fields: [
        defineField({
          name: 'thumbnailImage',
          title: 'Thumbnail Image',
          type: 'url',
          description: 'URL for the thumbnail image.',
        }),
        defineField({
          name: 'uploadDate',
          title: 'Upload Date',
          type: 'datetime',
          description: 'Date and time when the content was uploaded.',
        }),
        defineField({
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
          description: 'URL for the video.',
        }),
        defineField({
          name: 'duration',
          title: 'Duration',
          type: 'text',
          description: 'Duration of the content (e.g., 3:15 or 45 minutes).',
        }),
        defineField({
          name: 'publishBy',
          title: 'Published By',
          type: 'string',
          description: 'Name of the person or entity who published this content.',
        }),
      ],
      options: {collapsible: true, collapsed: true},
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
      name: 'uploadFile',
      title: 'Upload Price File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload a PDF document related to this landing page.',
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export const ServicesLanding = defineType({
  name: 'ServiceLanding',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the service.',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      description: 'Enter the title of the service.',
    }),
    defineField({
      name: 'serviceIcon',
      title: 'Service Icon Image',
      type: 'image',
      description: 'Enter the Image of the thumbnail image for the service.',
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
      name: 'uri',
      title: 'URI',
      type: 'string',
      description: 'Enter the URI of the page',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Enter a brief description of the service.',
    }),

    defineField({
      name: 'serviceCategory',
      title: 'Service Category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Amazon Marketing', value: 'amazon-marketing'},
          {title: 'Digital Marketing', value: 'digital-marketing'},
          {title: 'Ecommerce Marketing', value: 'ecommerce-marketing'},
          {title: 'Social Media Marketing', value: 'social-media-marketing'},
          {title: 'Web Design & Development', value: 'web-design-development'},
        ],
        layout: 'checkbox',
      },
      description: 'Select one or more categories for the service.',
    }),

    defineField({
      name: 'serviceBanner',
      title: 'Service Banner',
      type: 'reference',
      to: [{type: 'serviceBannerBlock'}],
      description: 'Reference the service banner block.',
    }),

    defineField({
      name: 'titleWithTwoContent',
      title: 'Title With Two Content',
      type: 'reference',
      to: [{type: 'titleWithTwoContentBlock'}],
      description: 'Reference the service banner block.',
    }),

    defineField({
      name: 'bannerImageTwoContent',
      title: 'Banner Image Two Content',
      type: 'reference',
      to: [{type: 'bannerImageTwoContentBlock'}],
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
      name: 'serviceCard',
      title: 'Service Card',
      type: 'object',
      fields: [
        defineField({
          name: 'serviceHeading',
          title: 'Service Heading',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'serviceDescription',
          title: 'Service Description',
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
      name: 'ourServices',
      title: 'Our Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'ServiceLanding'}],
        },
      ],
      description: 'Select multiple services from the ServiceLanding document.',
    }),

    defineField({
      name: 'Feedback',
      title: 'Clients Feedback',
      type: 'reference',
      to: [{type: 'testimonialBlock'}],
      description: 'Reference the testimonial block.',
    }),

    defineField({
      name: 'plans',
      title: 'Plans',
      type: 'reference',
      to: [{type: 'servicePricing'}],
      description: 'Reference the service pricing block.',
    }),

    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'reference',
      to: [{type: 'faqArea'}],
      description: 'Reference the FAQ section.',
    }),

    defineField({
      name: 'stepsInclude',
      title: 'Steps Include',
      type: 'reference',
      to: [{type: 'workFlow'}],
      description: 'Reference the steps workflow for the service.',
    }),

    defineField({
      name: 'ImageWithDescriptionComp',
      title: 'Image With Description',
      type: 'reference',
      to: [{type: 'ImageWithDescriptionComp'}],
      description: 'Reference the steps workflow for the service.',
    }),

    defineField({
      name: 'ClientsAndAwards',
      title: 'Clients And Awards',
      type: 'reference',
      to: [{type: 'ClientsAndAwardsComp'}],
      description: 'Reference the steps workflow for the service.',
    }),
    defineField({
      name: 'serviceBlogs',
      title: 'Service Blogs',
      type: 'reference',
      to: [{type: 'serviceBlogsComp'}],
      description: 'Reference the steps workflow for the service.',
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
          options: {hotspot: true},
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
                  options: {hotspot: true},
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'serviceImage',
      title: 'Service Image',
      type: 'image',
      description: 'Upload an image representing the service.',
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      type: 'reference',
      to: [{type: 'contactUsBlock'}],
      description: 'Reference the Contact Us component.',
    }),

    defineField({
      name: 'serving',
      title: 'Serving',
      type: 'document',
      fields: [
        defineField({
          name: 'thumbnailImage',
          title: 'Thumbnail Image',
          type: 'url',
          description: 'Enter the URL of the thumbnail image for the service.',
        }),
        defineField({
          name: 'uploadDate',
          title: 'Upload Date',
          type: 'datetime',
          description: 'Enter the date the content was uploaded.',
        }),
        defineField({
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
          description: 'Enter the URL of the video.',
        }),
        defineField({
          name: 'duration',
          title: 'Duration',
          type: 'string',
          description: 'Enter the duration of the video (e.g., 2:30).',
        }),
        defineField({
          name: 'publishBy',
          title: 'Published By',
          type: 'string',
          description: 'Enter the name of the publisher.',
        }),
      ],
      description: 'Add details for the serving section.',
    }),
    defineField({
      name: 'productDetails',
      title: 'Product Details',
      type: 'object',
      fields: [
        defineField({
          name: 'ratingValue',
          title: 'Rating Value',
          type: 'number',
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

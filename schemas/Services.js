import { defineField, defineType } from 'sanity';

export const Services = defineType({
  name: 'Services',
  title: 'Services ',
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
      options: {
        source: 'title', 
        maxLength: 200, 
      },
      description: 'Enter or generate a unique slug for the service.',
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
      description: 'Enter a description of the service.',
    }),

    defineField({
      name: 'newServiceImage',
      title: 'New Service Image',
      type: 'object',
      fields: [
        defineField({
          name: 'newImage',
          title: 'New Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload a new image for the service.',
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
          type: 'number',
          description: 'Enter the rating value of the product.',
        }),
        defineField({
          name: 'reviewCount',
          title: 'Review Count',
          type: 'number',
          description: 'Enter the number of reviews.',
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
          description: 'Is the service available?',
        }),
      ],
    }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'object',
      fields: [
        defineField({
          name: 'includedServices',
          title: 'Included Services',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'Describe the included services.',
        }),
        defineField({
          name: 'oldPrice',
          title: 'Old Price',
          type: 'number',
          description: 'Enter the old price of the service.',
        }),
        defineField({
          name: 'newPrice',
          title: 'New Price',
          type: 'number',
          description: 'Enter the new price of the service.',
        }),
      ],
    }),

    // Serving Group
    defineField({
      name: 'serving',
      title: 'Serving',
      type: 'object',
      fields: [
        defineField({
          name: 'thumbnailImage',
          title: 'Thumbnail Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload a thumbnail image.',
        }),
        defineField({
          name: 'uploadDate',
          title: 'Upload Date',
          type: 'datetime',
          description: 'Select the upload date and time.',
        }),
        defineField({
          name: 'videoURL',
          title: 'Video URL',
          type: 'url',
          description: 'Enter the URL for the video.',
        }),
        defineField({
          name: 'duration',
          title: 'Duration',
          type: 'string',
          description: 'Enter the duration of the service/video.',
        }),
        defineField({
          name: 'publishBy',
          title: 'Publish By',
          type: 'string',
          description: 'Enter the name of the publisher.',
        }),
      ],
    }),

    // Service Banner Group
    defineField({
      name: 'serviceBanner',
      title: 'Service Banner',
      type: 'object',
      fields: [
        defineField({
          name: 'serviceSubtitle',
          title: 'Service Subtitle',
          type: 'string',
          description: 'Enter the subtitle for the service banner.',
        }),
        defineField({
          name: 'serviceTitle',
          title: 'Service Title',
          type: 'string',
          description: 'Enter the title for the service banner.',
        }),
        defineField({
          name: 'serviceImage',
          title: 'Service Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload the service banner image.',
        }),
      ],
    }),

    // About Feedback Group
    defineField({
      name: 'aboutFeedback',
      title: 'About Feedback',
      type: 'object',
      fields: [
        defineField({
          name: 'feedbackSubtitle',
          title: 'Feedback Subtitle',
          type: 'string',
          description: 'Enter the subtitle for the feedback section.',
        }),
        defineField({
          name: 'feedbackTitle',
          title: 'Feedback Title',
          type: 'string',
          description: 'Enter the title for the feedback section.',
        }),
        defineField({
          name: 'feedbackDescription',
          title: 'Feedback Description',
          type: 'text',
          description: 'Enter a description for the feedback section.',
        }),
        defineField({
          name: 'testimonials',
          title: 'Testimonials',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
          description: 'Select testimonials from the testimonial schema.',
        }),
      ],
    }),

    // Service Pricing Group
    defineField({
      name: 'servicePricing',
      title: 'Service Pricing',
      type: 'object',
      fields: [
        defineField({
          name: 'pricingTitle',
          title: 'Pricing Title',
          type: 'string',
          description: 'Enter the title for the pricing section.',
        }),
        defineField({
          name: 'pricingSubtitle',
          title: 'Pricing Subtitle',
          type: 'string',
          description: 'Enter the subtitle for the pricing section.',
        }),
        defineField({
          name: 'priceCTA',
          title: 'Price CTA',
          type: 'string',
          description: 'Enter the call-to-action text for the pricing section.',
        }),
        defineField({
          name: 'basic',
          title: 'Basic',
          type: 'object',
          fields: [
            defineField({
              name: 'active',
              title: 'Active',
              type: 'boolean',
              description: 'Is this plan active?',
            }),
            defineField({
              name: 'plan',
              title: 'Plan',
              type: 'string',
              description: 'Enter the name of the plan.',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'number',
              description: 'Enter the price of the plan.',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Enter the description of the plan.',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Enter the title for the plan.',
            }),
            defineField({
              name: 'benefitsProvided',
              title: 'Benefits Provided',
              type: 'array',
              of: [{ type: 'block' }],
              description: 'Enter the benefits provided in this plan.',
            }),
          ],
        }),
        defineField({
            name: 'standard',
            title: 'Standard',
            type: 'object',
            fields: [
              defineField({
                name: 'active',
                title: 'Active',
                type: 'boolean',
                description: 'Is this plan active?',
              }),
              defineField({
                name: 'plan',
                title: 'Plan',
                type: 'string',
                description: 'Enter the name of the plan.',
              }),
              defineField({
                name: 'price',
                title: 'Price',
                type: 'number',
                description: 'Enter the price of the plan.',
              }),
              defineField({
                name: 'description',
                title: 'Description',
                type: 'text',
                description: 'Enter the description of the plan.',
              }),
              defineField({
                name: 'title',
                title: 'Title',
                type: 'string',
                description: 'Enter the title for the plan.',
              }),
              defineField({
                name: 'benefitsProvided',
                title: 'Benefits Provided',
                type: 'array',
                of: [{ type: 'block' }],
                description: 'Enter the benefits provided in this plan.',
              }),
            ],
        }),
        defineField({
            name: 'premium',
            title: 'Premium',
            type: 'object',
            fields: [
              defineField({
                name: 'active',
                title: 'Active',
                type: 'boolean',
                description: 'Is this plan active?',
              }),
              defineField({
                name: 'plan',
                title: 'Plan',
                type: 'string',
                description: 'Enter the name of the plan.',
              }),
              defineField({
                name: 'price',
                title: 'Price',
                type: 'number',
                description: 'Enter the price of the plan.',
              }),
              defineField({
                name: 'description',
                title: 'Description',
                type: 'text',
                description: 'Enter the description of the plan.',
              }),
              defineField({
                name: 'title',
                title: 'Title',
                type: 'string',
                description: 'Enter the title for the plan.',
              }),
              defineField({
                name: 'benefitsProvided',
                title: 'Benefits Provided',
                type: 'array',
                of: [{ type: 'block' }],
                description: 'Enter the benefits provided in this plan.',
              }),
            ],
          }),
      ],
    }),

    defineField({
      name: 'twoImageTwoContent',
      title: 'Two Image Two Content',
      type: 'object',
      fields: [
        defineField({
          name: 'image1Title',
          title: 'Image 1 Title',
          type: 'string',
          description: 'Enter the title for the first image.',
        }),
        defineField({
          name: 'image1Description',
          title: 'Image 1 Description',
          type: 'text',
          description: 'Enter the description for the first image.',
        }),
        defineField({
          name: 'image1Content1',
          title: 'Image 1 Content 1',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'Enter the content for the first image.',
        }),
        defineField({
          name: 'image1',
          title: 'Image 1',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload the first image.',
        }),
        defineField({
          name: 'image2',
          title: 'Image 2',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload the second image.',
        }),
      ],
    }),
    defineField({
        name: 'servicesArea2',
        title: 'Services Area 2',
        type: 'object',
        fields: [
          defineField({
            name: 'servicesTitle1',
            title: 'Services Title 1',
            type: 'string',
            description: 'Enter the title for services area 2.',
          }),
          defineField({
            name: 'servicesSubtitle1',
            title: 'Services Subtitle 1',
            type: 'string',
            description: 'Enter the subtitle for services area 2.',
          }),
          // defineField({
          //   name: 'servicesProvided',
          //   title: 'Services Provided',
          //   type: 'array',
          //   of: [{ type: 'reference', to: [{ type: 'Services' }] }], 
          //   description: 'Select the services provided from the related schema.',
          // }),
        ],
      }),
  ],
});

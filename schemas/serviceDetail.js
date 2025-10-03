import { defineField, defineType } from 'sanity';

export const servicesDetail = defineType({
  name: 'serviceDetail',
  title: 'Service Landing',
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
      description: 'URL-friendly version of the service title.',
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
      name: 'serviceBanner',
      title: 'Service Banner',
      type: 'reference',
      to: [{ type: 'serviceBannerBlock' }],
      description: 'Reference a service banner block.',
    }),
      defineField({
      name: 'serviceHero',
      title: 'Service Hero',
      type: 'reference',
      to: [{type: 'serviceHero'}],
      description: 'Reference the clients component.',
    }),

    defineField({
      name: 'ourServices',
      title: 'Our Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'ServiceLanding' }],
        },
      ],
      description: 'Select multiple services from the ServiceLanding document.',
    }),
    defineField({
      name: 'clients',
      title: 'Clients',
      type: 'reference',
      to: [{ type: 'ourClientsBlock' }],
      description: 'Reference the main Clients landing document.',
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      type: 'reference',
      to: [{ type: 'contactUsBlock' }],
      description: 'Reference the "Contact Us" component.',
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
      name: 'serving',
      title: 'Serving',
      type: 'object',
      fields: [
        defineField({
          name: 'thumbnailImage',
          title: 'Thumbnail Image',
          type: 'image',
          description: 'Upload the thumbnail image for the service.',
        }),
        defineField({
          name: 'uploadDate',
          title: 'Upload Date',
          type: 'datetime',
          description: 'Enter the upload date.',
        }),
        defineField({
          name: 'videoURL',
          title: 'Video URL',
          type: 'url',
          description: 'Enter the video URL.',
        }),
        defineField({
          name: 'duration',
          title: 'Duration',
          type: 'string',
          description: 'Enter the duration of the video (e.g., 2:30).',
        }),
        defineField({
          name: 'publishBy',
          title: 'Publish By',
          type: 'string',
          description: 'Enter the name of the person who published it.',
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
    })
  ],
});

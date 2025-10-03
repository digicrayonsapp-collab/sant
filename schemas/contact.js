import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
      description: 'Enter the main title of the page.',
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
      name: 'richDescription',
      title: 'Rich Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Enter a rich text description with markup.',
    }),
    defineField({
      name: 'contactUsAddressBlock',
      title: 'Contact Us Address Block',
      type: 'reference',
      to: [{type: 'contactUsAddressBlock'}],
      description: 'Reference the Contact Us component.',
    }),
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      type: 'reference',
      to: [{type: 'contactUsBlock'}],
      description: 'Reference the "Contact Us" component.',
    }),
    // Contact Location
    defineField({
      name: 'contactLocation',
      title: 'Contact Location',
      type: 'object',
      fields: [
        defineField({
          name: 'locationTitle',
          title: 'Location Title',
          type: 'string',
          description: 'Enter the title for the contact location.',
        }),
        defineField({
          name: 'locationSubtitle',
          title: 'Location Subtitle',
          type: 'string',
          description: 'Enter the subtitle for the contact location.',
        }),
        defineField({
          name: 'locationDetails',
          title: 'Location Details',
          type: 'array',
          of: [
            defineField({
              name: 'locationItem',
              title: 'Location Item',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Location Image',
                  type: 'image',
                  description: 'Upload an image for the location.',
                }),
                defineField({
                  name: 'country',
                  title: 'Country',
                  type: 'string',
                  description: 'Enter the country of the contact location.',
                }),
                defineField({
                  name: 'address',
                  title: 'Address',
                  type: 'string',
                  description: 'Enter the address of the contact location.',
                }),
              ],
            }),
          ],
          description: 'Add details for the contact location.',
        }),
      ],
    }),

    defineField({
      name: 'reachOut',
      title: 'Reach Out',
      type: 'object',
      fields: [
        defineField({
          name: 'reachOutTitle',
          title: 'Reach Out Title',
          type: 'string',
          description: 'Enter the title for the reach out section.',
        }),
        defineField({
          name: 'reachOutSubtitle',
          title: 'Reach Out Subtitle',
          type: 'string',
          description: 'Enter the subtitle for the reach out section.',
        }),
        defineField({
          name: 'reachOutDetails',
          title: 'Reach Out Details',
          type: 'array',
          of: [
            defineField({
              name: 'reachOutItem',
              title: 'Reach Out Item',
              type: 'object',
              fields: [
                defineField({
                  name: 'reachOutItemTitle',
                  title: 'Reach Out Item Title',
                  type: 'string',
                  description: 'Enter the title for the reach out item.',
                }),
                defineField({
                  name: 'reachOutItemSubtitle',
                  title: 'Reach Out Item Subtitle',
                  type: 'string',
                  description: 'Enter the subtitle for the reach out item.',
                }),
              ],
            }),
          ],
          description: 'Add details for the reach out section.',
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

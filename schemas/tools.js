import {defineField, defineType} from 'sanity'

export const toolDetail = defineType({
  name: 'toolDetail',
  title: 'Tools',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the career detail.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Generate a URL-friendly slug for the career detail.',
    }),
    defineField({
      name: 'uri',
      title: 'URI',
      type: 'string',
      description: 'Enter the URI of the page',
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload a featured image for the career detail.',
    }),


     defineField({
      name: 'toolType',
      title: 'Tool Type',
      type: 'string',
      options: {
        list: [
          { title: 'Amazon Product Listing', value: 'amazonProductListing' },
          { title: 'Generate Instagram Captions', value: 'instagramTool' },
          { title: 'Influencer Form', value: 'influencerForm' },
          { title: 'Instagram Viral Hooks', value: 'instagramViralHooks' }
        ],
        layout: 'dropdown',
      },
    }),
    
    defineField({
      name: 'contactUs',
      title: 'Contact Us',
      type: 'reference',
      to: [{type: 'contactUsBlock'}],
      description: 'Reference the Contact Us component.',
    }),
    
    // Category field
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Digital Marketing', value: 'Digital Marketing' },
          { title: 'Website Development', value: 'Website Development' },
          { title: 'Ecommerce Marketing', value: 'Ecommerce Marketing' },
          { title: 'Social Media Marketing', value: 'Social Media Marketing' },
          { title: 'Amazon Marketing', value: 'Amazon Marketing' },
        ],
      },
      description: 'Select a category for this tool detail.',
    }),

    // Date and Time field
    defineField({
      name: 'dateTime',
      title: 'Date and Time',
      type: 'datetime',
      description: 'Select the date and time for this tool detail.',
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

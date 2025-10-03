import { defineField, defineType } from 'sanity';

export const toolsPage = defineType({
  name: 'tools',
  title: 'Tools Landing Page',
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
      name: 'toolType',
      title: 'Tool Type',
      type: 'string',
      options: {
        list: [
          { title: 'Amazon Product Listing', value: 'amazonProductListing' },
          { title: 'Generate Instagram Captions', value: 'instagramTool' },
          { title: 'Influencer Form', value: 'influencerForm' },
          { title: 'Instagram Viral Hooks', value: 'instagramViralHooks' },
          { title: 'AI Image Prompt', value: 'aiImagePrompt' },
        ],
        layout: 'dropdown',
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
        options: { collapsible: true, collapsed: true },
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
        options: { collapsible: true, collapsed: true }, 
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

import {defineField, defineType} from 'sanity'

export const serviceBannerBlock = defineType({
  name: 'serviceBannerBlock',
  title: 'Service Banner Block',
  type: 'document',
  fields: [
    {
      name: 'serviceTitle',
      title: 'Service Title',
      type: 'string',
    },
    {
      name: 'serviceSubtitle',
      title: 'Service Subtitle',
      type: 'string',
    },
    {
      name: 'serviceImage',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'serviceVideo',
      title: 'Service Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    },
  ],
})

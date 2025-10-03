import {defineField, defineType} from 'sanity'

export const ClientsAndAwardsComp = defineType({
  name: 'ClientsAndAwardsComp',
  title: 'Clients And Awards Component',
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
      description: 'Enter the subtitle of the service.',
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key Points',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'keyPoint',
          title: 'Key Point',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Enter the key point title.',
            },
          ],
        },
      ],
      description: 'Add multiple key points.',
    }),
  ],
})

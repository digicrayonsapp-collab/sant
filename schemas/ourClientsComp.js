import { defineField, defineType } from 'sanity';

export const ourClientsBlock = defineType({
    name: 'ourClientsBlock',
    title: 'Our Clients Block',
    type: 'document',
    fields: [
      defineField({
        name: 'brandSubtitle',
        title: 'Brand Subtitle',
        type: 'string',
        description: 'Enter the subtitle for the client brand section.',
      }),
      defineField({
        name: 'brandTitle',
        title: 'Brand Title',
        type: 'string',
        description: 'Enter the title for the client brand section.',
      }),
      defineField({
        name: 'meetOurClients',
        title: 'Meet Our Clients',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'brandList' }],
          },
        ],
        description: 'Select the brands to list for the clients section.',
      }),
    ],
  });
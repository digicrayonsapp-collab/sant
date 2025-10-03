import { defineField, defineType } from 'sanity';

export const titleWithTwoContentBlock = defineType({
  name: 'titleWithTwoContentBlock',
  title: 'Title With Two Content Block',
  type: 'document', 
  fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Enter the title for the first image.',
    },
    {
        name: 'description',
        title: 'Image Description 1',
        type: 'text',
        description: 'Enter a description for the first image.',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }], 
      description: 'Content to be displayed alongside the first image.',
    },
  ],
});

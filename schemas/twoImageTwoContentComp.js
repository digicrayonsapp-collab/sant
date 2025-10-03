import { defineField, defineType } from 'sanity';

export const twoImageTwoComponent = defineType({
  name: 'twoImageTwoComponent',
  title: 'Two Image Two Component Block',
  type: 'document',
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
});

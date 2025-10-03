import { defineField, defineType } from 'sanity';

export const storyAreaBlock = defineType({
  name: 'storyAreaBlock',
  title: 'Story Area Block',
  type: 'document',
  fields: [
    defineField({
      name: 'storyYear',
      title: 'Story Year',
      type: 'string',
      description: 'Enter the year of the story.',
    }),
    defineField({
        name: 'storySubtitle',
        title: 'Story Subtitle',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'Enter the benefits provided in this plan.',
      }),
    defineField({
      name: 'storyTitle',
      title: 'Story Title',
      type: 'string',
      description: 'Enter the title for the story.',
    }),
    defineField({
      name: 'storyDescription',
      title: 'Story Description',
      type: 'text',
      description: 'Describe the story.',
    }),
    defineField({
      name: 'leftImage',
      title: 'Left Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the image for the left side of the story area.',
    }),
    defineField({
      name: 'centerImage',
      title: 'Center Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the image for the center of the story area.',
    }),
    defineField({
      name: 'rightTopImage',
      title: 'Right Top Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the image for the top-right side of the story area.',
    }),
    defineField({
      name: 'rightBottomImage',
      title: 'Right Bottom Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the image for the bottom-right side of the story area.',
    }),
  ],
});

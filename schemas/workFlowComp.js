import { defineField, defineType } from 'sanity';

export const workFlow = defineType({
  name: 'workFlow',
  title: 'Work Flow Block',
  type: 'document',
  fields: [
    // Title Field
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the main title for the workflow.',
    }),
    // Subtitle Field
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Enter a subtitle or short description for the workflow.',
    }),
    // Workflow Steps
    defineField({
      name: 'workflowSteps',
      title: 'Workflow Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            // Name Field
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Enter the name of the workflow step.',
            }),
            // Description Field
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Provide a detailed description of the workflow step.',
            }),
            // Slug Field
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              description: 'Generate a unique slug for the workflow step.',
              options: {
                source: 'name',
                maxLength: 200,
              },
            }),
          ],
        },
      ],
      description: 'Add multiple steps for the workflow with name, description, and slug.',
    }),
  ],
});

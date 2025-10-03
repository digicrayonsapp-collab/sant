import { defineField, defineType } from 'sanity';

export const jobsBlock = defineType({
  name: 'jobsBlock',
  title: 'Jobs Block',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'Enter a subtitle for the FAQ area.',
    }),
    defineField({
        name: 'jobList',
        title: 'Job List',
        type: 'array',
        of: [
          {
            type: 'reference', 
            to: [{ type: 'careerDetail' }], 
          },
        ],
        description: 'Array of references to career detail documents.',
      }),
  ],
});

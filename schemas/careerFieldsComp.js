import { defineField, defineType } from 'sanity';

export const careerFieldsBlock = defineType({
  name: 'careerFieldsBlock',
  title: 'Career Fields Block',
  type: 'document',
  fields: [
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Set this to true to mark this career as active.',
    }),
    defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Enter the name associated with this career.',
      }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Enter the location associated with this career.',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Select the date for this career.',
    }),
    defineField({
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full Time', value: 'full_time' },
          { title: 'Part Time', value: 'part_time' },
        ],
        layout: 'radio', 
      },
      description: 'Select the type of job: Full Time or Part Time.',
    }),
    defineField({
      name: 'requiredExperience',
      title: 'Required Experience',
      type: 'string',
      description: 'Enter the required experience for this position.',
    }),
    defineField({
        name: 'workingHours',
        title: 'Working Hours',
        type: 'string',
        options: {
            list: [
              { title: '10 AM - 7 PM', value: '10 AM - 7 PM' },
              { title: '9:30 AM - 6:30 PM', value: '9:30 AM - 6:30 PM' },
            ],
            layout: 'radio', 
          },
        description: 'Specify the working days for this position.',
      }),
    defineField({
      name: 'workingDays',
      title: 'Working Days',
      type: 'string',
      description: 'Specify the working days for this position.',
    }),
    defineField({
      name: 'salary',
      title: 'Salary',
      type: 'string',
      description: 'Enter the salary details for this position.',
    }),
    defineField({
      name: 'vacancyText',
      title: 'Vacancy Text',
      type: 'text',
      description: 'Provide additional information about the vacancy.',
    }),
    defineField({
      name: 'deadline',
      title: 'Deadline',
      type: 'date',
      description: 'Enter the application deadline for this position.',
    }),
    defineField({
      name: 'vacancy',
      title: 'Vacancy',
      type: 'number',
      description: 'Enter the number of vacancies available.',
    }),
  ],
});

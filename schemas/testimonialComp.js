import { defineField, defineType } from 'sanity';

export const testimonialBlock = defineType({
  name: 'testimonialBlock',
  title: 'Testimonial Block',
  type: 'document',
  fields: [
    defineField({
      name: 'feedbackSubtitle',
      title: 'Feedback Subtitle',
      type: 'string',
      description: 'Enter a subtitle for the feedback section.',
    }),
    defineField({
      name: 'feedbackTitle',
      title: 'Feedback Title',
      type: 'string',
      description: 'Enter a title for the feedback section.',
    }),
    defineField({
      name: 'feedbackDescription',
      title: 'Feedback Description',
      type: 'text',
      description: 'Enter a description for the feedback section.',
    }),
    defineField({
      name: 'ClientsTestimonials',
      title: 'Clients Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
      description: 'Select testimonials to associate with this block.',
    }),
  ],
});

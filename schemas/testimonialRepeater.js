import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the person providing the testimonial.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Enter a description or additional context for the testimonial.',
    }),

    defineField({
      name: 'customer',
      title: 'Customer',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload an image of the customer.',
        }),
        defineField({
          name: 'testimonialTitle',
          title: 'Testimonial Title',
          type: 'string',
          description: 'Enter a title for the testimonial.',
        }),
        defineField({
          name: 'testimonialContent',
          title: 'TestimonialContent',
          type: 'text',
          description: 'Enter the content of the testimonial.',
        }),
        defineField({
          name: 'customerName',
          title: 'Customer Name',
          type: 'string',
          description: 'Enter the name of the customer.',
        }),
        defineField({
          name: 'position',
          title: 'Position',
          type: 'string',
          description: 'Enter the position of the customer.',
        }),
        defineField({
          name: 'company',
          title: 'Company',
          type: 'string',
          description: 'Enter the company the customer works at.',
        }),
        defineField({
          name: 'testimonialVideo',
          title: 'Testimonial Video',
          type: 'url',
          description: 'Enter the URL of the testimonial video.',
        }),
      ],
    }),
    defineField({
      name: 'globalMeta',
      title: 'Global Meta',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'string',
        }),
        defineField({
            name: 'metaImage',
            title: 'Meta Image',
            type: 'image',
          }),
      ],
    })
  ],
});

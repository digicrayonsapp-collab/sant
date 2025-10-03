import { defineField, defineType } from 'sanity';

export const servicePricing = defineType({
  name: 'servicePricing',
  title: 'Service Pricing Block',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceName',
      title: 'Service Name',
      type: 'string',
      description: 'Enter the title for the pricing section.',
    }),
    defineField({
      name: 'pricingTitle',
      title: 'Pricing Title',
      type: 'string',
      description: 'Enter the title for the pricing section.',
    }),
    defineField({
      name: 'pricingSubtitle',
      title: 'Pricing Subtitle',
      type: 'string',
      description: 'Enter the subtitle for the pricing section.',
    }),
    defineField({
      name: 'priceCTA',
      title: 'Price CTA',
      type: 'string',
      description: 'Enter the call-to-action text for the pricing section.',
    }),
    defineField({
      name: 'plans',
      title: 'Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Plan',
          fields: [
            defineField({
              name: 'active',
              title: 'Active',
              type: 'boolean',
              description: 'Is this plan active?',
            }),
            defineField({
              name: 'plan',
              title: 'Plan Name',
              type: 'string',
              description: 'Enter the name of the plan.',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'number',
              description: 'Enter the price of the plan.',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Enter the description of the plan.',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Enter the title for the plan.',
            }),
            defineField({
              name: 'benefitsProvided',
              title: 'Benefits Provided',
              type: 'array',
              of: [{ type: 'block' }],
              description: 'Enter the benefits provided in this plan.',
            }),
          ],
        },
      ],
      description: 'Add multiple pricing plans (e.g., Basic, Standard, Premium).',
    }),
  ],
});

import { defineField, defineType } from 'sanity';

export const serviceArea1Block = defineType({
  name: 'serviceArea1Block',
  title: 'Service Area1 Block',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceSubtitle',
      title: 'Service Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'serviceTitle',
      title: 'Service Title',
      type: 'string',
    }),
    defineField({
      name: 'serviceDescription',
      title: 'Service Description',
      type: 'string',
    }),
    defineField({
      name: 'serviceLink',
      title: 'Service Link',
      type: 'string',
    }),
    defineField({
      name: 'serviceReferences',
      title: 'Service References',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'servicesLanding' }] }],
    }),    
  ],
});

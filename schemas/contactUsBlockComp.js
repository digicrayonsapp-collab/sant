import { defineField, defineType } from 'sanity';

export const contactUsBlock = defineType({
  name: 'contactUsBlock',
  title: 'Contact Us Block',
  type: 'document',
  fields: [
    defineField({
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Enter a subtitle for the Contact Us block.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the main title for the Contact Us block.',
    }),
    defineField({
      name: 'letsTalkUs',
      title: "Let's Talk Us",
      type: 'object',
      description: "Details for the 'Let's Talk Us' section.",
      fields: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'string',
          description: 'Enter the display text for the link.',
        }),
        defineField({
          name: 'uri',
          title: 'URI',
          type: 'url',
          description: 'Enter the URI for the link.',
        }),
      ],
    }),
  ],
});

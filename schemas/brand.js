import { defineField, defineType } from 'sanity';

export const brandList = defineType({
  name: 'brandList',
  title: 'Brands',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the brand.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the service title.',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Enter a description of the brand.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'customerDetails',
      title: 'Customer Details',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Customer Name',
          type: 'string',
          description: 'Enter the name of the customer.',
        }),
        defineField({
          name: 'title',
          title: 'Customer Title',
          type: 'string',
          description: 'Enter the title of the customer.',
        }),
        defineField({
          name: 'position',
          title: 'Position',
          type: 'string',
          description: 'Enter the position of the customer.',
        }),
        defineField({
          name: 'phoneNumber',
          title: 'Phone Number',
          type: 'string',
          description: 'Enter the phone number of the customer.',
        }),
        defineField({
          name: 'joinDate',
          title: 'Join Date',
          type: 'date',
          description: 'Enter the date the customer joined.',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
          description: 'Enter the address of the customer.',
        }),
        defineField({
          name: 'gst',
          title: 'GST Document',
          type: 'file',
          description: 'Upload the GST document of the customer.',
        }),
        defineField({
          name: 'aadharCard',
          title: 'Aadhar Card',
          type: 'file',
          description: 'Upload the Aadhar Card of the customer.',
        }),
        defineField({
          name: 'customerPassKey',
          title: 'Customer Pass Key',
          type: 'string',
          description: 'Enter the customer pass key in format xxxx.xxxx.xxxx.xxxx',
          validation: (Rule) =>
            Rule.custom((value) => {
              if (!value) return true; // Allow empty values
              return /^\d{4}\.\d{4}\.\d{4}\.\d{4}$/.test(value)
                ? true
                : 'Pass key must be in format xxxx.xxxx.xxxx.xxxx with numbers only.';
            }),
        }),
      ],
    }),
    defineField({
      name: 'brandGuidelines',
      title: 'Brand Guidelines',
      type: 'object',
      fields: [
        defineField({
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'string',
          description: 'Enter the primary color (Hex or RGB).',
        }),
        defineField({
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'string',
          description: 'Enter the secondary color (Hex or RGB).',
        }),
        defineField({
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
          description: 'Enter the text color (Hex or RGB).',
        }),
        defineField({
          name: 'primaryFont',
          title: 'Primary Font',
          type: 'string',
          description: 'Enter the primary font used in branding.',
        }),
        defineField({
          name: 'secondaryFont',
          title: 'Secondary Font',
          type: 'string',
          description: 'Enter the secondary font used in branding.',
        }),
        defineField({
          name: 'fontSize',
          title: 'Font Size',
          type: 'string',
          description: 'Choose the font size (Small, Medium, Large).',
          options: {
            list: ['Small', 'Medium', 'Large'],
          },
        }),
        defineField({
          name: 'fontWeight',
          title: 'Font Weight',
          type: 'string',
          description: 'Choose the font weight (Bold, Regular, Light, etc.).',
          options: {
            list: ['Bold', 'Regular', 'Light'],
          },
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
    }),
  ],
});

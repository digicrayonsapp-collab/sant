import {defineField, defineType} from 'sanity'

export const contactUsAddressBlock = defineType({
  name: 'contactUsAddressBlock',
  title: 'Contact Us Address Block',
  type: 'document',
  fields: [
    defineField({
      name: 'contactUsTitle',
      title: 'Contact Us Title',
      type: 'string',
      description: 'Enter the Contact Us title of the page.',
    }),
    defineField({
      name: 'PhoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Enter the Phone Number',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Enter the main Email of the page',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Enter the main Address of the page',
    }),
    defineField({
      name: 'address2',
      title: 'Address2',
      type: 'string',
      description: 'Enter the main Address of the page',
    }),
  ],
})

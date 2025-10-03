import {defineField, defineType} from 'sanity'

export const brandsDetail = defineType({
  name: 'brandsDetail',
  title: 'Brands Detail',
  type: 'document',
  fields: [
    {name: 'id', title: 'ID', type: 'string', readOnly: true},
    {name: 'name', title: 'Name', type: 'string'},
    {
      name: 'languageSpoken',
      title: 'Languages Spoken',
      type: 'array',
      of: [{type: 'string'}],
    },
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'about', title: 'About', type: 'text'},
    {name: 'password', title: 'Password', type: 'string', readOnly: true},
    {
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'Orders'}]}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'tagline', title: 'Tagline', type: 'string'},
    {name: 'phone', title: 'Phone', type: 'string'},
  ],
})

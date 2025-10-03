import { defineField, defineLocaleResourceBundle, defineType } from 'sanity';

export const homePage = defineType({
  name: 'home',
  title: 'Home Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text', 
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', 
        maxLength: 96,
      },
    }),
    defineField({
      name: 'uri',
      title: 'URI',
      type: 'string',
      description: 'Enter the URI of the page',
    }),
       defineField({
        name: 'aboutArea2',
        title: 'About Area2',
        type: 'reference',
        to: [{ type: 'aboutArea2Block' }],
        description: 'Reference the About Us component.',
      }),
      defineField({
        name: 'ourClients',
        title: 'Our Clients',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'brandList' }], 
          },
        ],
      }),
       defineField({
        name: 'servicesOffered',
        title: 'Services Offered',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'ServiceLanding' }],
          },
        ],
        description: 'Reference multiple blog posts.',
      }), 

      defineField({
        name: 'blogPost',
        title: 'Blog Posts',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'posts' }],
          },
        ],
        description: 'Reference multiple blog posts.',
      }),      

      defineField({
        name: 'Feedback',
        title: 'Clients Feedback',
        type: 'reference',
        to: [{ type: 'testimonialBlock' }],
        description: 'Reference the testimonial block.',
      }),
      
      defineField({
        name: 'ourClientsBlock',
        title: 'Our Clients',
        type: 'reference',
        to: [{ type: 'ourClientsBlock' }],
        description: 'Reference the clients component.',
      }),
   
      defineField({
        name: 'blogs',
        title: 'Blogs',
        type: 'object',
        fields: [
          defineField({
            name: 'blogsSubtitle',
            title: 'Blogs Subtitle',
            type: 'string',
            description: 'Enter the subtitle for the feedback section.',
          }),
          defineField({
            name: 'blogsTitle',
            title: 'Blogs Title',
            type: 'string',
            description: 'Enter the title for the feedback section.',
          }),
        ],
      }),
      defineField({
        name: 'homeHero',
        title: 'Home Hero',
        type: 'reference',
        to: [{ type: 'homeHero' }],
        description: 'Reference the clients component.',
      }),
      defineField({
        name: 'ourWork',
        title: 'Our Work',
        type: 'reference',
        to: [{ type: 'workDetail' }],
        description: 'Reference the clients component.',
      }),
      defineField({
        name: 'serviceArea1',
        title: 'Service Area1',
        type: 'reference',
        to: [{ type: 'serviceArea1Block' }],
        description: 'Reference the clients component.',
      }),
      defineField({
        name: 'workFlow',
        title: 'Work Flow Steps',
        type: 'reference',
        to: [{ type: 'workFlow' }],
        description: 'Reference the clients component.',
      }),
      defineField({
        name: 'works',
        title: 'Works',
        type: 'array',
        of: [
          {
            type: 'object',
            title: 'Work Details',
            fields: [
              defineField({
                name: 'workSubtitle',
                title: 'Work Subtitle',
                type: 'string',
                description: 'Enter the subtitle of the work.',
              }),
              defineField({
                name: 'workTitle',
                title: 'Work Title',
                type: 'string',
                description: 'Enter the title of the work.',
              }),
              defineField({
                name: 'workDescription',
                title: 'Work Description',
                type: 'text',
                description: 'Enter a brief description of the work.',
              }),
              defineField({
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
                description: 'Upload an image for this work.',
              }),
              defineField({
                name: 'workCategory',
                title: 'Work Category',
                type: 'reference',
                to: [{ type: 'workDetail' }],
                description: 'Reference the work category from work detail.',
              }),
              defineField({
                name: 'pageLink',
                title: 'Page Link',
                type: 'string',
                description: 'Enter the link to the page for this work.',
              }),
            ],
          },
        ],
        description: 'Add works to be displayed on the landing page.',
      }),
      defineField({
        name: 'contactUs',
        title: 'Contact Us',
        type: 'reference',
        to: [{ type: 'contactUsBlock' }],
        description: 'Reference the "Contact Us" component.',
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

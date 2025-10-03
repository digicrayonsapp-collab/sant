import { defineField, defineType } from 'sanity';

export const workDetail = defineType({
  name: 'workDetail',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter the title of the career detail.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Generate a URL-friendly slug for the career detail.',
    }),
    defineField({
      name: 'uri',
      title: 'URI',
      type: 'string',
      description: 'Enter the URI of the page',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type:'image',
        }
      ],
      description:
        'Provide a detailed markup or description for the career detail, including rich text and images.',
    }),
    defineField({
        name: 'workDetailTitle',
        title: 'Work Detail Title',
        type: 'object',
        fields: [
          defineField({
            name: 'workTitle',
            title: 'Work Title',
            type: 'string',
            description: 'Enter the work title for this detail.',
          }),
        ],
        description: 'Group of fields for the work detail title.',
      }),
     defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload a featured image for the career detail.',
    }),
    defineField({
        name: 'portfolioDetailThumb',
        title: 'Portfolio Detail Thumb',
        type: 'object',
        fields: [
          defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            description: 'Upload the portfolio image.',
          }),
          defineField({
            name: 'handoverDate',
            title: 'Handover Date',
            type: 'date',
            options: {
              dateFormat: 'YYYY-MM-DD',
            },
            description: 'Specify the handover date for this portfolio.',
          }),
        ],
      }),
      defineField({
        name: 'skillset',
        title: 'Skillset',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'Shopify', value: 'shopify' },
            { title: 'WordPress', value: 'wordpress' },
            { title: 'Next.js', value: 'nextjs' },
            { title: 'WordPress Theme', value: 'wordpress_theme' },
            { title: 'WordPress Plugin', value: 'wordpress_plugin' },
            { title: 'Shopify SEO', value: 'shopify_seo' },
            { title: 'React.js', value: 'reactjs' },
            { title: 'SQL', value: 'sql' },
            { title: 'MySQL', value: 'mysql' },
            { title: 'HTML', value: 'html' },
            { title: 'CSS', value: 'css' },
            { title: 'JavaScript', value: 'javascript' },
            { title: 'Angular', value: 'angular' },
            { title: 'ASP.NET', value: 'asp_net' },
            { title: 'C#', value: 'c_sharp' },
            { title: 'Node.js', value: 'nodejs' },
            { title: 'MongoDB', value: 'mongodb' },
            { title: 'Express.js', value: 'expressjs' },
            { title: 'Java', value: 'java' },
            { title: 'Spring Boot', value: 'spring_boot' },
            { title: 'Vue.js', value: 'vuejs' },
            { title: 'Python', value: 'python' },
            { title: 'TypeScript', value: 'typescript' },
            { title: 'Tailwind CSS', value: 'tailwind_css' },
            { title: 'PHP', value: 'php' },
            { title: '.NET Core', value: 'dotnet_core' },
            { title: 'React Native', value: 'react_native' },
            { title: 'Firebase', value: 'firebase' },
            { title: 'Amazon', value: 'amazon' },
            { title: 'Flipkart', value: 'flipkart' },
            { title: 'Meesho', value: 'meesho' },
            { title: 'JioMart', value: 'jiomart' },
          ],
          layout: 'skillset',
        },
        description: 'Select one or more skills relevant to the work detail.',
      }),
      defineField({
          name: 'consumerProductsIndustry',
          title: 'Consumer Products Industry',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
              list: [
                  { title: 'Healthcare', value: 'healthcare' },
                  { title: 'Clothing', value: 'clothing' },
                  { title: 'Consumer Electronics', value: 'consumer-electronics' },
                  { title: 'Dry-Fruits', value: 'dry-fruits' },
                  { title: 'Social Media Marketing', value: 'social-media-marketing' },
                  { title: 'Grocery', value: 'grocery' },
                  { title: 'Hair Care Products', value: 'hair-care-products' },
                  { title: 'Health & Beauty Wellness', value: 'health-beauty-wellness' },
                  { title: 'Home Appliances', value: 'home-appliances' },
                  { title: 'Home Decor', value: 'home-decor' },
                  { title: 'Home Furnishings', value: 'home-furnishings' },
                  { title: 'Jewellery', value: 'jewellery' },
                  { title: 'Nuts & Spices', value: 'nuts-spices' },
                  { title: 'Trailers & E-rickshaw', value: 'trailers-e-rickshaw' },
                  { title: 'Villas & Hotel Rooms', value: 'villas-hotel-rooms' },
                ],
            layout: 'industry',
          },
          description: 'Select one or more skills relevant to the work detail.',
        }),
      defineField({
        name: 'workCategory',
        title: 'Work Category',
        type: 'reference',
        to: [{ type: 'workCategoriesBlock' }],
        description: 'Select a single category relevant to the work detail.',
        }),
        defineField({
        name: 'contactUs',
        title: 'Contact Us',
        type: 'reference',
        to: [{ type: 'contactUsBlock' }],
        description: 'Reference the Contact Us component.',
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

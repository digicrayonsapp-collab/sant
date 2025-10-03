import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'heading',
      type: 'string',
      description: 'Enter the main title of the page.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Enter the main Description of the page',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the service title.',
      options: {
        source: 'title',
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
      name: 'bannerImageTwoContent',
      title: 'Banner Image Two Content',
      type: 'object',
      fields: [
        defineField({
          name: 'bannerTitle',
          title: 'Banner Title',
          type: 'string',
          description: 'Enter the main title for the banner.',
        }),
        defineField({
          name: 'bannerVideo',
          title: 'Banner Video',
          type: 'url',
          description: 'URL of the banner video.',
        }),
        defineField({
          name: 'content1',
          title: 'Content 1',
          type: 'text',
          description: 'Enter the first piece of content for the banner.',
        }),
        defineField({
          name: 'content2',
          title: 'Content 2',
          type: 'text',
          description: 'Enter the second piece of content for the banner.',
        }),
        defineField({
          name: 'bannerImage',
          title: 'Banner Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload an image for the banner.',
        }),
      ],
    }),
    defineField({
      name: 'serviceCard',
      title: 'Service Card',
      type: 'object',
      fields: [
        defineField({
          name: 'serviceHeading',
          title: 'Service Heading',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'serviceDescription',
          title: 'Service Description',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'ourValues',
      title: 'Our Values',
      type: 'object',
      fields: [
        defineField({
          name: 'industryTitle',
          title: 'Industry Title',
          type: 'string',
        }),
        defineField({
          name: 'industrySubtitle',
          title: 'Industry Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'industryDescription',
          title: 'Industry Description',
          type: 'text',
        }),
        defineField({
          name: 'industrySteps',
          title: 'Industry Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'benefitsWeGet',
      title: 'Benefits We Get',
      type: 'object',
      fields: [
        defineField({
          name: 'industryTitle',
          title: 'Industry Title',
          type: 'string',
        }),
        defineField({
          name: 'industrySubtitle',
          title: 'Industry Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'industryDescription',
          title: 'Industry Description',
          type: 'text',
        }),
        defineField({
          name: 'industrySteps',
          title: 'Industry Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'makingImpact',
      title: 'Making Impact',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        }),
      ],
    }),
      defineField({
      name: 'industriesWeWork',
      title: 'Industries we work',
      type: 'object',
      fields: [
        defineField({
          name: 'industryTitle',
          title: 'Industry Title',
          type: 'string',
        }),
        defineField({
          name: 'industrySubtitle',
          title: 'Industry Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'industryDescription',
          title: 'Industry Description',
          type: 'text',
        }),
        defineField({
          name: 'industrySteps',
          title: 'Industry Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'globalPresence',
      title: 'Global Presence',
      type: 'object',
      fields: [
        defineField({
          name: 'globalTitle',
          title: 'Global Title',
          type: 'string',
        }),
        defineField({
          name: 'globalDescription',
          title: 'Global Description',
          type: 'text',
        }),
         defineField({
          name: 'rightImage',
          title: 'Right Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload the image for the right side of the hero section.',
        }),
      ],
    }),

    defineField({
      name: 'Feedback',
      title: 'Clients Feedback',
      type: 'reference',
      to: [{type: 'testimonialBlock'}],
      description: 'Reference the testimonial block.',
    }),

    defineField({
      name: 'aboutHero',
      title: 'About Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'heroTitle',
          title: 'Hero Title',
          type: 'string',
          description: 'Enter the hero title for the About section.',
        }),
        defineField({
          name: 'heroLink',
          title: 'Hero Link',
          type: 'url',
          description: 'URL link for the hero section, which can redirect to any page.',
        }),
        defineField({
          name: 'heroDescription',
          title: 'Hero Description',
          type: 'text',
          description: 'Enter a description for the hero section.',
        }),
        defineField({
          name: 'rightImage',
          title: 'Right Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload the image for the right side of the hero section.',
        }),
        defineField({
          name: 'video',
          title: 'Video',
          type: 'file',
          description: 'Upload the hero video file.',
        }),
      ],
    }),
    defineField({
      name: 'ourAchievements',
      title: 'Our Achievements',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'achievements'}],
        },
      ],
      description: 'Select achievements related to the hero section.',
    }),

    defineField({
      name: 'storyArea',
      title: 'Story Area',
      type: 'object',
      fields: [
        defineField({
          name: 'storyYear',
          title: 'Story Year',
          type: 'string',
          description: 'Enter the year of the story.',
        }),
        defineField({
          name: 'storySubtitle',
          title: 'Story Subtitle',
          type: 'string',
          description: 'Enter a subtitle for the story.',
        }),
        defineField({
          name: 'storyTitle',
          title: 'Story Title',
          type: 'string',
          description: 'Enter the title for the story.',
        }),
        defineField({
          name: 'storyDescription',
          title: 'Story Description',
          type: 'text',
          description: 'Describe the story.',
        }),
        defineField({
          name: 'leftImage',
          title: 'Left Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload the image for the left side of the story area.',
        }),
        defineField({
          name: 'centerImage',
          title: 'Center Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload the image for the center of the story area.',
        }),
        defineField({
          name: 'rightTopImage',
          title: 'Right Top Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload the image for the top-right side of the story area.',
        }),
        defineField({
          name: 'rightBottomImage',
          title: 'Right Bottom Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload the image for the bottom-right side of the story area.',
        }),
      ],
    }),
    defineField({
      name: 'ourClientsBlock',
      title: 'Our Clients',
      type: 'reference',
      to: [{type: 'ourClientsBlock'}],
      description: 'Reference the clients component.',
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
})

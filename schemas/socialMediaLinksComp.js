import { defineField, defineType } from 'sanity';

export const socialMediaLinks = defineType({
  name: 'socialMediaLinks',
  title: 'Social Media Links Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Enter a subtitle for the FAQ area.',
    }),
    defineField({
        name: 'facebookLink',
        title: 'Facebook Link',
        type: 'url',
        description: 'Enter the Facebook link',
      }),
      defineField({
        name: 'twitterLink',
        title: 'Twitter Link',
        type: 'url',
        description: 'Enter the Twitter link',
      }),
       defineField({
        name: 'linkedInLink',
        title: 'LinkedIn Link',
        type: 'url',
        description: 'Enter the LinkedIn link',
      }),
       defineField({
        name: 'instagramLink',
        title: 'Instagram Link',
        type: 'url',
        description: 'Enter the Instagram link,',
      }),
  ],
});

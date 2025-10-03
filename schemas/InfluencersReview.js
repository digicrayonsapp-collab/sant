import { defineField, defineType } from 'sanity';

export const influencerReviews = defineType({ 
  name: 'influencerReviews', 
  title: 'Influencer Reviews', 
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'ratings',
      title: 'Ratings',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'text',
    }),
    defineField({
      name: 'influencerId',
      title: 'Influencer',
      type: 'reference',
      to: [{ type: 'influencerForm' }],
    }),
    defineField({
      name: 'planId',
      title: 'Plan',
      type: 'reference',
      to: [{ type: 'influencerForm' }],
    }),
    defineField({
      name: 'brandId',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brandsDetail' }],
    }),
  ],
});

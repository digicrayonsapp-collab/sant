import { defineField, defineType } from 'sanity'

export const influencerRatings = defineType({
    name: 'influencerRatings',
    title: 'Influencer Ratings',
    type: 'document',
    fields: [
      { name: 'influencerId', type: 'string', title: 'Influencer ID' },
      { name: 'averageRating', type: 'number', title: 'Average Rating' },
      { name: 'reviewCount', type: 'number', title: 'Review Count' },
      { name: 'profileScore', type: 'number', title: 'Profile Score' },
      { name: 'personalizationScore', type: 'number', title: 'Personalization Score' },
      { name: 'categories', type: 'array', of: [{ type: 'string' }], title: 'Categories' },
      { name: 'languageSpoken', type: 'string', title: 'Language Spoken' },
      { name: 'location', type: 'string', title: 'Location' },
      { name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags' },
      { name: 'followers', type: 'string', title: 'Followers' },
      { name: 'lastUpdated', type: 'datetime', title: 'Last Updated' },
    ],
});
  
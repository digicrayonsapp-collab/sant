import {defineField, defineType} from 'sanity'
import ProfileScoreInput from '../utils/ProfileScoreInput'
import PersonalizationScoreInput from '../utils/PersonalizationScore'
import RatingListener from "../utils/RatingsListner";

export const influencerForm = defineType({
  name: 'influencerForm',
  title: 'Influencers',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'password', title: 'Password', type: 'string'},
    {
      name: 'profileScore',
      title: 'Profile Score',
      type: 'number',
      components: {
        input: ProfileScoreInput,
      },
    },
    {
      name: 'personalizationScore',
      type: 'number',
      title: 'Personalization Score',
      components: {
        input: PersonalizationScoreInput,
      },
    },
    {name: 'introVideo', title: 'Intro Video', type: 'url'},
    {name: 'id', title: 'ID', type: 'string'},
    {name: 'phone', title: 'Phone', type: 'string'},
    {name: 'tagline', title: 'Tagline', type: 'string'},
    {
      name: 'socialMediaUrls',
      title: "Social Media URL's",
      type: 'object',
      fields: [
        {name: 'instaURl', title: 'Instagram URL', type: 'url'},
        {name: 'facebookURl', title: 'Facebook URL', type: 'url'},
        {name: 'youtubeURl', title: 'YouTube URL', type: 'url'},
      ],
    },
    {
      name: 'languageSpoken',
      title: 'Languages Spoken',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'Orders'}]}],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
          title: 'Category',
          options: {
            list: [
              {title: 'Beauty', value: 'beauty'},
              {title: 'Fashion', value: 'fashion'},
              {title: 'Fitness', value: 'fitness'},
              {title: 'Travel', value: 'travel'},
              {title: 'Food', value: 'food'},
              {title: 'Tech', value: 'tech'},
              {title: 'Lifestyle', value: 'lifestyle'},
              {title: 'Parenting', value: 'parenting'},
              {title: 'Gaming', value: 'gaming'},
              {title: 'Finance', value: 'finance'},
              {title: 'Motivational & Self-Help', value: 'motivational'},
              {title: 'Art & Design', value: 'art_design'},
              {title: 'Health & Wellness', value: 'health_wellness'},
              {title: 'Environmental & Sustainability', value: 'environmental'},
              {title: 'Book', value: 'book'},
              {title: 'Sports', value: 'sports'},
            ],
          },
        },
      ],
    },
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'followers', title: 'Total Followers', type: 'string'},
    {
      name: 'ratingReview',
      title: 'Interested in Reviews',
      type: 'boolean',
    },
    
    {name: 'averageRating', type: 'number', title: 'Average Rating'},
    {
      name: 'reviewCount',
      title: 'Review Count',
      type: 'number',
      description: 'Enter the number of reviews for the service.',
       components: {
        input: RatingListener,
      },
    },
    {
      name: 'ageGroup',
      title: 'Age Group',
      type: 'string',
      options: {
        list: [
          {title: 'Below 18', value: 'below_18'},
          {title: '18-30', value: '18_24'},
          {title: '30-60', value: '25_35'},
          {title: 'Above 60', value: 'above_60'},
        ],
      },
    },
    {
      name: 'topPicks',
      title: 'Top Picks',
      type: 'object',
      fields: [
        {name: 'url1', title: 'URL 1', type: 'url'},
        {name: 'url2', title: 'URL 2', type: 'url'},
        {name: 'url3', title: 'URL 3', type: 'url'},
      ],
    },
    {
      name: 'userReachDemographics',
      title: 'User Reach & Demographics',
      type: 'object',
      fields: [
        {
          name: 'cityWiseDistribution',
          title: 'City Wise Distribution',
          type: 'object',
          fields: [
            {name: 'delhi', title: 'Delhi Percentage', type: 'number'},
            {name: 'mumbai', title: 'Mumbai Percentage', type: 'number'},
            {name: 'bangalore', title: 'Bangalore Percentage', type: 'number'},
          ],
        },
        {
          name: 'ageWiseDistribution',
          title: 'Age Wise Distribution',
          type: 'object',
          fields: [
            {name: 'age18_24', title: '18-24 Percentage', type: 'number'},
            {name: 'age25_34', title: '25-34 Percentage', type: 'number'},
            {name: 'age35_44', title: '35-44 Percentage', type: 'number'},
          ],
        },
        {
          name: 'platformWiseDistribution',
          title: 'Platform Wise Distribution',
          type: 'object',
          fields: [
            {name: 'instagram', title: 'Instagram Percentage', type: 'number'},
            {name: 'youtube', title: 'YouTube Percentage', type: 'number'},
            {name: 'facebook', title: 'Facebook Percentage', type: 'number'},
          ],
        },
      ],
    },

    {name: 'about', title: 'About', type: 'text'},

    {
      name: 'location',
      title: 'Location (State/UT)',
      type: 'string',
      options: {
        list: [
          {title: 'Andhra Pradesh', value: 'Andhra Pradesh'},
          {title: 'Arunachal Pradesh', value: 'Arunachal Pradesh'},
          {title: 'Assam', value: 'Assam'},
          {title: 'Bihar', value: 'Bihar'},
          {title: 'Chhattisgarh', value: 'Chhattisgarh'},
          {title: 'Goa', value: 'Goa'},
          {title: 'Gujarat', value: 'Gujarat'},
          {title: 'Haryana', value: 'Haryana'},
          {title: 'Himachal Pradesh', value: 'Himachal Pradesh'},
          {title: 'Jharkhand', value: 'Jharkhand'},
          {title: 'Karnataka', value: 'Karnataka'},
          {title: 'Kerala', value: 'Kerala'},
          {title: 'Madhya Pradesh', value: 'Madhya Pradesh'},
          {title: 'Maharashtra', value: 'Maharashtra'},
          {title: 'Manipur', value: 'Manipur'},
          {title: 'Meghalaya', value: 'Meghalaya'},
          {title: 'Mizoram', value: 'Mizoram'},
          {title: 'Nagaland', value: 'Nagaland'},
          {title: 'Odisha', value: 'Odisha'},
          {title: 'Punjab', value: 'Punjab'},
          {title: 'Rajasthan', value: 'Rajasthan'},
          {title: 'Sikkim', value: 'Sikkim'},
          {title: 'Tamil Nadu', value: 'Tamil Nadu'},
          {title: 'Telangana', value: 'Telangana'},
          {title: 'Tripura', value: 'Tripura'},
          {title: 'Uttar Pradesh', value: 'Uttar Pradesh'},
          {title: 'Uttarakhand', value: 'Uttarakhand'},
          {title: 'West Bengal', value: 'West Bengal'},
          {title: 'Andaman and Nicobar Islands', value: 'Andaman and Nicobar Islands'},
          {title: 'Chandigarh', value: 'Chandigarh'},
          {
            title: 'Dadra and Nagar Haveli and Daman and Diu',
            value: 'Dadra and Nagar Haveli and Daman and Diu',
          },
          {title: 'Delhi', value: 'Delhi'},
          {title: 'Jammu and Kashmir', value: 'Jammu and Kashmir'},
          {title: 'Ladakh', value: 'Ladakh'},
          {title: 'Lakshadweep', value: 'Lakshadweep'},
          {title: 'Puducherry', value: 'Puducherry'},
        ],
      },
    },

    {name: 'engagementRate', title: 'Engagement Rate', type: 'number'},
    {name: 'avgViews', title: 'Avg Views', type: 'string'},
    {name: 'avgLikes', title: 'Avg Likes', type: 'string'},
    {name: 'avgComments', title: 'Avg Comments', type: 'string'},

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Trending', value: 'Trending'},
              {title: 'Dcrayons Choice', value: 'Dcrayons Choice'},
              {title: 'Top Rated', value: 'Top Rated'},
              {title: 'New Arrival', value: 'New Arrival'},
              {title: 'Beauty Expert', value: 'Beauty Expert'},
              {title: 'Best Price', value: 'Best Price'},
            ],
          },
        },
      ],
      description: 'Select tags to describe the influencer',
    }),

    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: ['Male', 'Female'],
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'type',
      title: 'Influencer Type',
      type: 'string',
      options: {
        list: [
          {title: 'Nano (1K - 10K)', value: 'Nano'},
          {title: 'Micro (10K - 100K)', value: 'Micro'},
          {title: 'Mid-Tier (100K - 500K)', value: 'Mid-Tier'},
          {title: 'Macro (500K - 1M)', value: 'Macro'},
          {title: 'Mega (1M+)', value: 'Mega'},
        ],
      },
    },
    {
      name: 'plans',
      title: 'Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'PId', title: 'Plan ID', type: 'string'},
            {name: 'active', title: 'Active', type: 'boolean'},
            {name: 'PName', title: 'Plan Name', type: 'string'},
            {name: 'PTitle', title: 'Plan Title', type: 'string'},
            {name: 'PDescription', title: 'Plan Description', type: 'string'},
            {name: 'NumberOfReels', title: 'Number of Reels', type: 'number'},
            {name: 'NumberOfStories', title: 'Number of Stories', type: 'number'},
            {name: 'RevisionsAllowed', title: 'Revisions Allowed', type: 'number'},
            {name: 'ShareOnInstagram', title: 'Share on Instagram', type: 'boolean'},
            {name: 'deliveryDuration', title: 'Duration of Delivery', type: 'number'},
            {name: 'ShareOnYoutube', title: 'Share on YouTube', type: 'boolean'},
            {name: 'ShareOnFacebook', title: 'Share on Facebook', type: 'boolean'},
            {
              name: 'PermissionToAddToProfile',
              title: 'Permission to Add to Profile',
              type: 'boolean',
            },
            {name: 'Tagging', title: 'Tagging', type: 'boolean'},
            {name: 'Collaboration', title: 'Collaboration', type: 'boolean'},
            {name: 'SpecialDiscount', title: 'Special Discount (%)', type: 'number'},
            {name: 'Price', title: 'Price', type: 'number'},
          ],
        },
      ],
    },
    {
      name: 'productDetails',
      title: 'Product Details',
      type: 'object',
      fields: [
        {
          name: 'ratingValue',
          title: 'Rating Value',
          type: 'string',
          description: 'Enter the rating value for the service.',
          validation: (Rule) => Rule.min(0).max(5),
        },
        {
          name: 'reviewCount',
          title: 'Review Count',
          type: 'number',
          description: 'Enter the number of reviews for the service.',
        },
        {
          name: 'servicePrice',
          title: 'Service Price',
          type: 'number',
          description: 'Enter the price of the service.',
        },
        {
          name: 'serviceAvailability',
          title: 'Service Availability',
          type: 'boolean',
          description: 'Specify whether the service is available.',
        },
      ],
    },
    {
      name: 'globalMeta',
      title: 'Global Meta',
      type: 'object',
      fields: [
        {name: 'metaTitle', title: 'Meta Title', type: 'string'},
        {name: 'metaDescription', title: 'Meta Description', type: 'string'},
        {name: 'metaImage', title: 'Meta Image', type: 'image'},
      ],
    },
  ],
})

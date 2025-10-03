import {defineField, defineType} from 'sanity'
import RatingListener from '../utils/RatingsListner'

export const Orders = defineType({
  name: 'Orders',
  title: 'Orders',
  type: 'document',
  fields: [
    defineField({
      name: 'order_id',
      title: 'Order Id',
      type: 'string',
      description: 'Enter the order ID.',
    }),

    defineField({
      name: 'messages',
      title: 'Messages',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'message'}]}],
    }),

    defineField({
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          {title: 'Fulfilled', value: 'fulfilled'},
          {title: 'Pending', value: 'pending'},
          {title: 'Cancelled', value: 'cancelled'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'pending',
    }),

    defineField({
      name: 'trackOrder',
      title: 'Track Order',
      type: 'object',
      fields: [
        {
          name: 'orderPlaced',
          title: 'Order Placed',
          type: 'boolean',
          options: {
            layout: 'switch',
          },
        },
        {
          name: 'requirementsSubmitted',
          title: 'Requirements Submitted',
          type: 'boolean',
          options: {
            layout: 'switch',
          },
        },
        {
          name: 'orderInProgress',
          title: 'Order in Progress',
          type: 'boolean',
          options: {
            layout: 'switch',
          },
        },
        {
          name: 'reviewDelivery',
          title: 'Review Delivery',
          type: 'boolean',
          options: {
            layout: 'switch',
          },
        },
        {
          name: 'completeOrder',
          title: 'Complete Order',
          type: 'boolean',
          options: {
            layout: 'switch',
          },
        },
      ],
    }),

    defineField({
      name: 'influencerId',
      title: 'Influencer ID',
      type: 'reference',
      to: [{type: 'influencerForm'}],
    }),
    {
      name: 'allFeedback',
      title: 'All Ratings / Feedback Notes',
      type: 'text',
      description: 'Optional text area to summarize feedback or ratings.',
      components: {
        input: RatingListener,
      },
    },

    defineField({
      name: 'brandDetails',
      title: 'Brand Details',
      type: 'reference',
      to: [{type: 'brandsDetail'}],
    }),

    defineField({
      name: 'selectedPlan',
      title: 'Selected Plan',
      type: 'object',
      fields: [
        {name: 'PId', title: 'Plan ID', type: 'string'},
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
        {name: 'PermissionToAddToProfile', title: 'Permission to Add to Profile', type: 'boolean'},
        {name: 'Tagging', title: 'Tagging', type: 'boolean'},
        {name: 'Collaboration', title: 'Collaboration', type: 'boolean'},
        {name: 'SpecialDiscount', title: 'Special Discount (%)', type: 'number'},
        {name: 'Price', title: 'Price', type: 'number'},
      ],
    }),
    defineField({
      name: 'OrderDetails',
      title: 'Order Details',
      type: 'object',
      fields: [
        {name: 'BrandName', title: 'Brand Name', type: 'string'},
        {name: 'BrandEmail', title: 'Brand Email', type: 'string'},
        {name: 'orderAmount', title: 'Order Amount', type: 'string'},
      ],
    }),
    defineField({
      name: 'workStartedAt',
      title: 'Work Started At',
      type: 'datetime',
      description: 'The timestamp when work on the order was started',
    }),
    defineField({
      name: 'ratingsAndReviews',
      title: 'Ratings & Reviews',
      type: 'object',
      fields: [
        {
          name: 'rating',
          title: 'Rating',
          type: 'number',
          initialValue: 0,
          validation: (Rule) => Rule.min(1).max(5).error('Rating must be between 1 and 5'),
        },
        {
          name: 'reviewTitle',
          title: 'Review Title',
          type: 'text',
        },
        {
          name: 'reviewDescription',
          title: 'Review Description',
          type: 'text',
        },
        {
          name: 'reviewDate',
          title: 'Review Date',
          type: 'datetime',
        },
      ],
    }),

    defineField({
      name: 'influencerDetails',
      title: 'Influencer Details',
      type: 'reference',
      to: [{type: 'influencerForm'}],
    }),
  ],
})

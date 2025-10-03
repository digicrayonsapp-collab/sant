import { defineField, defineType } from 'sanity';

export const message = defineType({
  name: 'message',
  title: 'Messages',
  type: 'document',
  fields: [
    defineField({
      name: 'orderRef',
      title: 'Order Reference',
      type: 'reference',
      to: [{ type: 'Orders' }],
      description: 'Connect this message to an order',
    }),
    defineField({
      name: 'senderType',
      title: 'Sender Type',
      type: 'string',
      options: {
        list: [
          { title: 'Brand', value: 'brand' },
          { title: 'Influencer', value: 'influencer' },
        ],
        layout: 'dropdown',
      },
      description: 'Who sent this message?',
    }),
    defineField({
      name: 'senderName',
      title: 'Sender Name',
      type: 'string',
      description: 'Name of Sender',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url',
    }),
    defineField({
      name: 'messageText',
      title: 'Message Text',
      type: 'text',
      rows: 4,
      description: 'The actual message content',
    }),
    defineField({
      name: 'attachedFile',
      title: 'Attached File',
      type: 'file',
      description: 'Optional file attachment with the message',
    }),
    defineField({
      name: 'sentAt',
      title: 'Sent At',
      type: 'datetime',
      description: 'When was the message sent?',
      initialValue: () => new Date().toISOString(), 
    }),
  ],
});

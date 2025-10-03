import { defineField, defineType } from 'sanity';

export const Social_Media_Marketing = defineType({
  name: 'social_media_marketing',
  title: 'Leads-Social Media Marketing',
  type: 'document',
  fields: [
    defineField({
      name: 'contact_name',
      title: 'Contact Name',
      type: 'string',
    }),
    defineField({
      name: 'contact_number',
      title: 'Contact Number',
      type: 'string',
    }),
    defineField({
      name: 'contact_email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'creation_date',
      title: 'Creation Date',
      type: 'string',
    }),
    defineField({
      name: 'first_call_attempt',
      title: 'First Call Attempt',
      type: 'string',
    }),
    defineField({
      name: 'lead_status',
      title: 'Lead Status',
      type: 'string',
    }),
    defineField({
      name: 'lead_stage',
      title: 'Lead Stage',
      type: 'string',
    }),
    defineField({
      name: 'lead_tag',
      title: 'Lead Tag',
      type: 'string',
    }),
    defineField({
      name: 'assigned_to',
      title: 'Assigned To',
      type: 'string',
    }),
    defineField({
      name: 'last_call_date',
      title: 'Last Call Date',
      type: 'string',
    }),
    defineField({
      name: 'last_call_time',
      title: 'Last Call Time',
      type: 'string',
    }),
    defineField({
      name: 'next_followup_date',
      title: 'Next Follow-up Date',
      type: 'string',
    }),
    defineField({
      name: 'other_details',
      title: 'Other Details',
      type: 'object',
      fields: [
        defineField({
          name: 'utm_campaign',
          title: 'UTM Campaign',
          type: 'string',
        }),
        defineField({
          name: 'utm_content',
          title: 'UTM Content',
          type: 'string',
        }),
        defineField({
          name: 'utm_medium',
          title: 'UTM Medium',
          type: 'string',
        }),
        defineField({
          name: 'utm_source',
          title: 'UTM Source',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'campaign_name',
      title: 'Campaign Name',
      type: 'string',
    }),
    defineField({
      name: 'source_type',
      title: 'Source Type',
      type: 'string',
    }),
    defineField({
      name: 'source_name',
      title: 'Source Name',
      type: 'string',
    }),
    defineField({
      name: 'creator_name',
      title: 'Creator Name',
      type: 'string',
    }),
    defineField({
      name: 'lead_closed_by_executive',
      title: 'Closed By Executive',
      type: 'string',
    }),
    defineField({
      name: 'lead_closed_reason',
      title: 'Closed Reason',
      type: 'string',
    }),
    defineField({
      name: 'call_attempt_count',
      title: 'Call Attempt Count',
      type: 'string',
    }),
  ],
});

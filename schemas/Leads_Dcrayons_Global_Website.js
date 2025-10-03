import { defineField, defineType } from 'sanity';

export const LeadsGlobalWebsite = defineType({
  name: 'leadsGlobalWebsite',
  title: 'Leads – Global Website (Dcrayons)',
  type: 'document',
  fields: [
    defineField({ name: 'contact_name', title: 'Contact Name', type: 'string' }),
    defineField({ name: 'contact_number', title: 'Contact Number', type: 'string' }),
    defineField({ name: 'contact_email', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'creation_date', title: 'Creation Date', type: 'string' }),
    defineField({ name: 'lead_status', title: 'Lead Status', type: 'string' }),
    defineField({ name: 'lead_stage', title: 'Lead Stage', type: 'string' }),
    defineField({ name: 'lead_tag', title: 'Lead Tag', type: 'string' }),
    defineField({ name: 'assigned_to', title: 'Assigned To', type: 'string' }),
    defineField({ name: 'campaign_name', title: 'Campaign Name', type: 'string' }),
    defineField({ name: 'source_type', title: 'Source Type', type: 'string' }),
    defineField({ name: 'source_name', title: 'Source Name', type: 'string' }),
    defineField({ name: 'creator_name', title: 'Creator Name', type: 'string' }),

    defineField({ name: 'first_call_attempt', title: 'First Call Attempt', type: 'string' }),
    defineField({ name: 'last_call_date', title: 'Last Call Date', type: 'string' }),
    defineField({ name: 'last_call_time', title: 'Last Call Time', type: 'string' }),
    defineField({ name: 'next_followup_date', title: 'Next Follow-up Date', type: 'string' }),
    defineField({ name: 'call_attempt_count', title: 'Call Attempt Count', type: 'string' }),
    defineField({ name: 'lead_closed_by_executive', title: 'Closed By Executive', type: 'string' }),
    defineField({ name: 'lead_closed_reason', title: 'Closed Reason', type: 'string' }),
    defineField({ name: 'call_not_connected_reason', title: 'Call Not Connected Reason', type: 'string' }),

    // Notes
    defineField({ name: 'dispose_remarks', title: 'Dispose Remarks', type: 'text' }),
    defineField({ name: 'deal_amount', title: 'Deal Amount', type: 'string' }),

    // Landing form inputs
    defineField({
      name: 'form_response',
      title: 'Landing Page Response',
      type: 'object',
      fields: [
        defineField({ name: 'what_are_you_interested_in', title: 'What are you interested in?', type: 'string' }),
        defineField({ name: 'where_did_you_hear_about_us', title: 'Where did you hear about us?', type: 'string' }),
        defineField({ name: 'where_did_you_hear_other', title: 'Other Source', type: 'string' }),
        defineField({ name: 'by_when_planning_to_purchase', title: 'By When Planning to Purchase', type: 'string' }),
        defineField({ name: 'send_message', title: 'Message', type: 'text' }),
      ],
    }),

    defineField({
      name: 'other_details',
      title: 'Other Details',
      type: 'object',
      fields: [
        defineField({ name: 'how_soon_start', title: 'How Soon Are You Looking To Start?', type: 'string' }),
        defineField({ name: 'business_industry', title: 'Business Industry', type: 'string' }),
        defineField({ name: 'looking_for_website_creation', title: 'Looking For Website Creation?', type: 'string' }),
        defineField({ name: 'other_info', title: 'Other Info', type: 'string' }),
      ],
    }),
  ],
});

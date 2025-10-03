import { defineField, defineType } from 'sanity';

export const Authentication = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(), 
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
      validation: (Rule) => Rule.required().min(6), 
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "websiteURL",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "token",
      title: "Token",
      type: "string",
    }),
  ],
});

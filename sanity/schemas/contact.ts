import { defineField, defineType } from "sanity";

const contact = defineType({
  name: "contact",
  title: "Contacts",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) =>
        Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "string",
    }),
  ],
});

export default contact;

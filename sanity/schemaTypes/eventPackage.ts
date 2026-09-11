import { defineField, defineType } from "sanity";

export const eventPackage = defineType({
  name: "eventPackage",
  title: "Pacotes de Evento",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nome do pacote",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "price",
      title: "Preço (R$)",
      type: "number",
    }),
    defineField({
      name: "duration",
      title: "Duração",
      type: "string",
      description: "Ex: 4 horas",
    }),
    defineField({
      name: "includes",
      title: "O que inclui",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "icon",
      title: "Ícone",
      type: "string",
      options: {
        list: [
          { title: "Aniversário", value: "cake" },
          { title: "Corporativo", value: "briefcase" },
          { title: "Casamento", value: "heart" },
          { title: "Confraternização", value: "users" },
          { title: "Formatura", value: "graduation" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Destaque",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Ordem",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "price" },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `R$ ${subtitle}` : "Consulte",
      };
    },
  },
});

import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Galeria",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Decoração", value: "decoracao" },
          { title: "Espaço", value: "espaco" },
          { title: "Entrada", value: "entrada" },
          { title: "Eventos", value: "eventos" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "category" },
  },
});

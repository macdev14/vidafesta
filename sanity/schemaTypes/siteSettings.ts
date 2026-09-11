import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configurações do Site",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nome do Espaço",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Slogan",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "address",
      title: "Endereço",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "Cidade",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp (com DDI)",
      type: "string",
      description: "Ex: 5511969021122",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
    }),
    defineField({
      name: "capacity",
      title: "Capacidade máxima",
      type: "number",
    }),
    defineField({
      name: "heroImage",
      title: "Imagem principal",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "features",
      title: "Diferenciais",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "openingHours",
      title: "Horários de funcionamento",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});

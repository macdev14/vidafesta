import { defineField, defineType } from "sanity";

export const booking = defineType({
  name: "booking",
  title: "Reservas",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eventDate",
      title: "Data do evento",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eventType",
      title: "Tipo de evento",
      type: "string",
      options: {
        list: [
          { title: "Aniversário", value: "aniversario" },
          { title: "Casamento", value: "casamento" },
          { title: "Corporativo", value: "corporativo" },
          { title: "Confraternização", value: "confraternizacao" },
          { title: "Formatura", value: "formatura" },
          { title: "Outro", value: "outro" },
        ],
      },
    }),
    defineField({
      name: "guestCount",
      title: "Número de convidados",
      type: "number",
    }),
    defineField({
      name: "packageRef",
      title: "Pacote",
      type: "reference",
      to: [{ type: "eventPackage" }],
    }),
    defineField({
      name: "message",
      title: "Mensagem",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pendente", value: "pending" },
          { title: "Confirmado", value: "confirmed" },
          { title: "Cancelado", value: "cancelled" },
        ],
      },
      initialValue: "pending",
    }),
    defineField({
      name: "createdAt",
      title: "Criado em",
      type: "datetime",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "eventDate",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title || "Sem nome",
        subtitle: `${subtitle || "Sem data"} · ${status || "pending"}`,
      };
    },
  },
});

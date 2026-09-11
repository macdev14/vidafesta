import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Festavida")
    .items([
      S.listItem()
        .title("Configurações do Site")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("eventPackage").title("Pacotes"),
      S.documentTypeListItem("galleryImage").title("Galeria"),
      S.documentTypeListItem("booking").title("Reservas"),
    ]);

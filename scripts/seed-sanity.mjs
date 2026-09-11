/**
 * Popula o Sanity com pacotes e configurações iniciais do Festavida.
 *
 * Uso:
 *   node --env-file=.env.local scripts/seed-sanity.mjs
 *
 * Requer:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET
 *   SANITY_API_WRITE_TOKEN
 */

import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("\n❌ Configure as variáveis de ambiente primeiro:\n");
  console.error("   NEXT_PUBLIC_SANITY_PROJECT_ID");
  console.error("   NEXT_PUBLIC_SANITY_DATASET=production");
  console.error("   SANITY_API_WRITE_TOKEN\n");
  console.error("Exemplo: node --env-file=.env.local scripts/seed-sanity.mjs\n");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  title: "Vida Espaço para Festas e Eventos",
  tagline: "Onde cada celebração ganha vida",
  description:
    "Salão de festas e eventos com ótimo acesso no centro de Bragança Paulista. Ambiente acolhedor, decoração encantadora e estrutura completa para transformar sua comemoração em um momento inesquecível.",
  address: "Av. José Gomes da Rocha Leal, 1451 — Centro",
  city: "Bragança Paulista, SP",
  whatsapp: "5511969021122",
  instagram: "festavida",
  capacity: 120,
  features: [
    "Ótimo acesso no centro da cidade",
    "Ambiente acolhedor e climatizado",
    "Decoração personalizada",
    "Estacionamento próximo",
    "Cozinha de apoio",
    "Som e iluminação",
  ],
  openingHours: "Agendamentos de segunda a sábado, das 9h às 18h",
};

const packages = [
  {
    _id: "eventPackage-aniversario",
    _type: "eventPackage",
    title: "Aniversário",
    slug: { _type: "slug", current: "aniversario" },
    description:
      "Perfeito para festas infantis e adultas com todo conforto para seus convidados.",
    duration: "4 horas",
    includes: ["Salão decorado", "Mesas e cadeiras", "Cozinha de apoio", "Estacionamento"],
    icon: "cake",
    featured: true,
    order: 1,
  },
  {
    _id: "eventPackage-casamento",
    _type: "eventPackage",
    title: "Casamento & Noivado",
    slug: { _type: "slug", current: "casamento-noivado" },
    description: "Um cenário romântico e elegante para o dia mais especial da sua vida.",
    duration: "6 horas",
    includes: ["Salão completo", "Decoração base", "Cozinha de apoio", "Área para cerimônia"],
    icon: "heart",
    featured: false,
    order: 2,
  },
  {
    _id: "eventPackage-corporativo",
    _type: "eventPackage",
    title: "Corporativo",
    slug: { _type: "slug", current: "corporativo" },
    description:
      "Confraternizações, lançamentos e reuniões em ambiente profissional e acolhedor.",
    duration: "4 horas",
    includes: ["Salão climatizado", "Projetor/TV", "Coffee break", "Estacionamento"],
    icon: "briefcase",
    featured: false,
    order: 3,
  },
  {
    _id: "eventPackage-confraternizacao",
    _type: "eventPackage",
    title: "Confraternização",
    slug: { _type: "slug", current: "confraternizacao" },
    description: "Reúna amigos, família ou colegas em um espaço festivo e descontraído.",
    duration: "5 horas",
    includes: ["Salão completo", "Churrasqueira", "Mesas e cadeiras", "Som ambiente"],
    icon: "users",
    featured: false,
    order: 4,
  },
];

async function seed() {
  console.log(`\n🌱 Populando Sanity (${projectId} / ${dataset})...\n`);

  await client.createOrReplace(siteSettings);
  console.log("✅ Configurações do Site");

  for (const pkg of packages) {
    await client.createOrReplace(pkg);
    console.log(`✅ Pacote: ${pkg.title}`);
  }

  console.log("\n🎉 Pronto! Abra /studio → Pacotes para editar.\n");
}

seed().catch((err) => {
  console.error("\n❌ Erro ao popular:", err.message);
  process.exit(1);
});

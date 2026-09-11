import type { EventPackage, GalleryItem, SiteSettings } from "./types";

export const mockSiteSettings: SiteSettings = {
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

export const mockPackages: EventPackage[] = [
  {
    _id: "pkg-aniversario",
    title: "Aniversário",
    description: "Perfeito para festas infantis e adultas com todo conforto para seus convidados.",
    price: undefined,
    duration: "4 horas",
    includes: ["Salão decorado", "Mesas e cadeiras", "Cozinha de apoio", "Estacionamento"],
    icon: "cake",
    featured: true,
  },
  {
    _id: "pkg-casamento",
    title: "Casamento & Noivado",
    description: "Um cenário romântico e elegante para o dia mais especial da sua vida.",
    price: undefined,
    duration: "6 horas",
    includes: ["Salão completo", "Decoração base", "Cozinha de apoio", "Área para cerimônia"],
    icon: "heart",
    featured: false,
  },
  {
    _id: "pkg-corporativo",
    title: "Corporativo",
    description: "Confraternizações, lançamentos e reuniões em ambiente profissional e acolhedor.",
    price: undefined,
    duration: "4 horas",
    includes: ["Salão climatizado", "Projetor/TV", "Coffee break", "Estacionamento"],
    icon: "briefcase",
    featured: false,
  },
  {
    _id: "pkg-confraternizacao",
    title: "Confraternização",
    description: "Reúna amigos, família ou colegas em um espaço festivo e descontraído.",
    price: undefined,
    duration: "5 horas",
    includes: ["Salão completo", "Churrasqueira", "Mesas e cadeiras", "Som ambiente"],
    icon: "users",
    featured: false,
  },
];

export const mockGallery: GalleryItem[] = [
  {
    _id: "g1",
    title: "Salão decorado",
    category: "decoracao",
  },
  {
    _id: "g2",
    title: "Entrada acolhedora",
    category: "entrada",
  },
  {
    _id: "g3",
    title: "Espaço amplo",
    category: "espaco",
  },
  {
    _id: "g4",
    title: "Festa infantil",
    category: "eventos",
  },
  {
    _id: "g5",
    title: "Decoração romântica",
    category: "decoracao",
  },
  {
    _id: "g6",
    title: "Confraternização",
    category: "eventos",
  },
];

export const galleryPlaceholderImages = [
  "https://images.unsplash.com/photo-1519167758481-83f29da1c4c3?w=800&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
];

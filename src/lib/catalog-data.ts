import catalogAframe1 from "@/assets/catalog-aframe-1.jpg.asset.json";
import catalogInterior1 from "@/assets/catalog-interior-1.jpg.asset.json";
import catalogContemporaneo1 from "@/assets/catalog-contemporaneo-1.jpg.asset.json";
import catalogInterior2 from "@/assets/catalog-interior-2.jpg.asset.json";
import nordic1 from "@/assets/chale-nordic-1.png.asset.json";
import alpine2 from "@/assets/chale-alpine-2.png.asset.json";
import contemporaneo2 from "@/assets/chale-contemporaneo-2.png.asset.json";
import chale_6 from "@/assets/chale_6.jpg.asset.json";

export interface ProjectModel {
  id: string;
  name: string;
  category: "A-Frame" | "Contemporâneos" | "Rústicos" | "Premium";
  mainImage: string;
  gallery: string[];
  size: string;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  description: string;
  concept: string;
  floorPlanImage?: string;
  slug: string;
}

export const CATALOG_DATA: ProjectModel[] = [
  {
    id: "a-frame-42",
    slug: "chale-a-frame-42",
    name: "Chalé A-Frame 42m²",
    category: "A-Frame",
    mainImage: catalogAframe1.url,
    gallery: [catalogAframe1.url, catalogInterior1.url, alpine2.url],
    size: "42m²",
    bedrooms: 2,
    bathrooms: 1,
    features: ["Varanda", "Sala integrada", "Cozinha compacta"],
    description: "Um modelo compacto, acolhedor e pensado para aproveitar ao máximo a paisagem.",
    concept: "A linha A-Frame 42m² nasceu da busca pela simbiose perfeita entre a geometria icônica e a eficiência espacial. Projetado para terrenos com declives acentuados ou vistas privilegiadas, este modelo utiliza grandes panos de vidro para dissolver as fronteiras entre o interior e a natureza circundante. O uso extensivo de madeira natural traz calor tátil, enquanto a estrutura aparente reforça a honestidade arquitetônica do projeto.",
    floorPlanImage: catalogInterior1.url // Usando interior como placeholder se planta não disponível
  },
  {
    id: "contemp-75",
    slug: "chale-contemporaneo-75",
    name: "Chalé Modern Line 75m²",
    category: "Contemporâneos",
    mainImage: catalogContemporaneo1.url,
    gallery: [catalogContemporaneo1.url, catalogInterior2.url, contemporaneo2.url],
    size: "75m²",
    bedrooms: 2,
    bathrooms: 2,
    features: ["Deck Panorâmico", "Suíte Master", "Área Gourmet"],
    description: "Design moderno com linhas retas e integração total com o ambiente externo.",
    concept: "O Modern Line 75m² é uma ode ao minimalismo contemporâneo. Com uma volumetria composta por planos horizontais e grandes vãos, este projeto privilegia a luz natural e a ventilação cruzada. A materialidade combina o concreto aparente com a madeira em tons claros, criando um ambiente sofisticado que serve tanto como residência quanto como refúgio de alto padrão.",
    floorPlanImage: catalogInterior2.url
  },
  {
    id: "nordic-58",
    slug: "chale-nordic-58",
    name: "Chalé Nordic Minimal 58m²",
    category: "Premium",
    mainImage: nordic1.url,
    gallery: [nordic1.url, catalogInterior1.url, catalogInterior2.url],
    size: "58m²",
    bedrooms: 1,
    bathrooms: 1,
    features: ["Lareira Central", "Ofurô no Deck", "Teto Catedral"],
    description: "Estética nórdica focada no essencial, com acabamentos premium e conforto térmico superior.",
    concept: "Inspirado no conceito de 'Hygge', o modelo Nordic Minimal busca o máximo conforto através da simplicidade. A lareira central funciona como o coração do projeto, organizando os espaços de convívio ao seu redor. A cobertura em duas águas com inclinação suave permite um pé-direito generoso, conferindo amplitude mesmo em uma planta compacta.",
    floorPlanImage: nordic1.url
  },
  {
    id: "rustico-90",
    slug: "chale-mountain-rustico-90",
    name: "Chalé Mountain Wood 90m²",
    category: "Rústicos",
    mainImage: chale_6.url,
    gallery: [chale_6.url, catalogInterior2.url, catalogInterior1.url],
    size: "90m²",
    bedrooms: 3,
    bathrooms: 2,
    features: ["Paredes de Pedra", "Amplo Terraço", "Mezanino"],
    description: "A força da pedra e o calor da madeira em um projeto robusto e atemporal.",
    concept: "O Mountain Wood 90m² resgata a tradição das construções de montanha com uma roupagem tecnológica. O uso de pedras brutas na base ancora a construção ao terreno, enquanto o corpo superior em madeira maciça proporciona o isolamento térmico necessário para climas frios. O mezanino oferece um espaço versátil que pode servir como home office ou área de leitura com vista.",
    floorPlanImage: chale_6.url
  }
];

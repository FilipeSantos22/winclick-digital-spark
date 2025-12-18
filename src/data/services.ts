import { Globe, ShoppingCart, Smartphone, Search } from "lucide-react";

export const services = [
  {
    slug: "site-institucional",
    icon: Globe,
    title: "Site Institucional",
    description: "Sites corporativos profissionais que transmitem credibilidade e fortalecem sua marca no mercado.",
    features: [
      "Design responsivo e moderno",
      "SEO otimizado",
      "Carregamento rápido",
      "Painel administrativo"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    slug: "e-commerce",
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas virtuais completas e otimizadas para converter visitantes em clientes fiéis.",
    features: [
      "Integração com gateways de pagamento",
      "Gestão de estoque",
      "Painel de controle completo",
      "Sistema de cupons e promoções"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    slug: "landing-pages",
    icon: Smartphone,
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para capturar leads e maximizar suas campanhas de marketing.",
    features: [
      "Alta taxa de conversão",
      "Formulários inteligentes",
      "Integração com CRM",
      "A/B Testing"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    slug: "seo-performance",
    icon: Search,
    title: "SEO & Performance",
    description: "Otimização para motores de busca que coloca seu site no topo do Google.",
    features: [
      "Análise de palavras-chave",
      "Otimização técnica",
      "Link building",
      "Relatórios mensais"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

export type Service = (typeof services)[number];

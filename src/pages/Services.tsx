import { motion } from "framer-motion";
import { 
  Globe, 
  ShoppingCart, 
  Search, 
  Megaphone, 
  Smartphone,
  BarChart3,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
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
    },
    
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Nossos Serviços
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Soluções digitais completas para impulsionar seu negócio e alcançar resultados excepcionais no ambiente online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader>
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Processo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um fluxo de trabalho estruturado para garantir os melhores resultados
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Briefing", desc: "Entendemos suas necessidades e objetivos" },
                { step: "02", title: "Planejamento", desc: "Criamos a estratégia e estrutura ideal" },
                { step: "03", title: "Desenvolvimento", desc: "Executamos o projeto com excelência" },
                { step: "04", title: "Entrega", desc: "Lançamos e acompanhamos os resultados" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Começar Seu Projeto?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Entre em contato e receba uma proposta personalizada para suas necessidades.
            </p>
            <a 
              href="https://wa.me/5562995513691?text=Olá,%20vim%20da%20WinClick%20e%20gostaria%20de%20um%20orçamento." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="group">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

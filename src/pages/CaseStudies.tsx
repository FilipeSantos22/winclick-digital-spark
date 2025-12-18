import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      title: "E-commerce de Moda Premium",
      client: "Boutique Elegance",
      category: "E-commerce",
      description: "Desenvolvimento completo de loja virtual com integração de pagamentos, gestão de estoque e painel administrativo.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      results: [
        { icon: TrendingUp, label: "Aumento de vendas", value: "+180%" },
        { icon: Users, label: "Novos clientes", value: "+2.5k" },
        { icon: Clock, label: "Tempo de projeto", value: "8 semanas" }
      ],
      tags: ["E-commerce", "Design", "SEO"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Site Institucional para Consultoria",
      client: "Consultoria Estratégica Pro",
      category: "Site Institucional",
      description: "Website corporativo moderno com blog integrado, área de clientes e sistema de agendamento online.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: [
        { icon: TrendingUp, label: "Aumento de leads", value: "+250%" },
        { icon: Users, label: "Visitantes/mês", value: "12k+" },
        { icon: Clock, label: "Tempo de projeto", value: "6 semanas" }
      ],
      tags: ["Institucional", "Blog", "CRM"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Landing Page para Lançamento",
      client: "TechStart Innovation",
      category: "Landing Page",
      description: "Landing page de alta conversão para lançamento de produto SaaS com integração de email marketing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      results: [
        { icon: TrendingUp, label: "Taxa de conversão", value: "42%" },
        { icon: Users, label: "Leads capturados", value: "5.8k" },
        { icon: Clock, label: "Tempo de projeto", value: "3 semanas" }
      ],
      tags: ["Landing Page", "SaaS", "Marketing"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Marketplace de Serviços Locais",
      client: "ServiçoJá",
      category: "Plataforma",
      description: "Plataforma completa conectando prestadores de serviços e clientes com sistema de avaliações e pagamentos.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      results: [
        { icon: TrendingUp, label: "Transações/mês", value: "1.2k+" },
        { icon: Users, label: "Usuários ativos", value: "8.5k" },
        { icon: Clock, label: "Tempo de projeto", value: "12 semanas" }
      ],
      tags: ["Marketplace", "Plataforma", "Mobile"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Portal de Notícias Regional",
      client: "Notícias GO",
      category: "Portal",
      description: "Portal de notícias com CMS customizado, área de assinantes e sistema de publicidade programática.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
      results: [
        { icon: TrendingUp, label: "Pageviews/mês", value: "850k+" },
        { icon: Users, label: "Assinantes", value: "3.2k" },
        { icon: Clock, label: "Tempo de projeto", value: "10 semanas" }
      ],
      tags: ["Portal", "CMS", "Notícias"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "App de Delivery Personalizado",
      client: "Sabor Express",
      category: "Aplicativo",
      description: "Aplicativo mobile e web para delivery de restaurantes com gestão de pedidos em tempo real.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop",
      results: [
        { icon: TrendingUp, label: "Pedidos/dia", value: "450+" },
        { icon: Users, label: "Downloads", value: "15k+" },
        { icon: Clock, label: "Tempo de projeto", value: "14 semanas" }
      ],
      tags: ["App Mobile", "Delivery", "Real-time"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
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
              Cases de Sucesso
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Conheça alguns dos projetos que transformaram negócios e geraram resultados excepcionais para nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
          >
            {cases.map((caseItem, index) => (
              <motion.div key={caseItem.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.color} opacity-90`} />
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.title}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {caseItem.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{caseItem.title}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">{caseItem.client}</span>
                    </CardDescription>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {caseItem.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      {caseItem.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <result.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                            <div className="font-semibold">{result.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseItem.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full group/btn">
                      Ver Detalhes
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "150+", label: "Projetos Entregues" },
                { value: "98%", label: "Satisfação dos Clientes" },
                { value: "50+", label: "Empresas Atendidas" },
                { value: "24/7", label: "Suporte Disponível" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seu Projeto Pode Ser o Próximo Case de Sucesso
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Vamos conversar sobre como transformar sua ideia em realidade e gerar resultados excepcionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5562995513691?text=Olá,%20vi%20os%20cases%20e%20gostaria%20de%20um%20orçamento." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  Solicitar Orçamento
                </Button>
              </a>
              <a href="/contato">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Fale Conosco
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;

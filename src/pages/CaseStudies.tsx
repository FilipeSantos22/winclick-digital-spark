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
      title: "Landing Page Exclusiva",
      client: "MIF - Winx Digital",
      category: "Landing Page",
      description: "Página de alta conversão desenvolvida com foco em performance e resultados para maximizar a captação de leads.",
      image: "/mif-landing.png",
      className: "object-top",
      results: [
        { icon: TrendingUp, label: "Taxa de conversão", value: "+45%" },
        { icon: Users, label: "Leads/mês", value: "1.2k+" },
        { icon: Clock, label: "Entrega", value: "1 semana" }
      ],
      tags: ["Landing Page", "Performance", "Marketing"],
      color: "from-purple-500 to-pink-500",
      link: "https://mif.winxdigital.com.br"
    },
    {
      id: 2,
      title: "E-commerce Premium",
      client: "Elite Time",
      category: "E-commerce",
      description: "Loja virtual sofisticada com experiência de compra otimizada, gestão de estoque e pagamentos integrados.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
      results: [
        { icon: TrendingUp, label: "Aumento de vendas", value: "+120%" },
        { icon: Users, label: "Usuários ativos", value: "5k+" },
        { icon: Clock, label: "Entrega", value: "4 semanas" }
      ],
      tags: ["E-commerce", "Vendas", "Design"],
      color: "from-blue-500 to-cyan-500",
      link: "https://elitetime.net.br"
    },
    {
      id: 3,
      title: "Portal Corporativo",
      client: "Vertex Solutions",
      category: "Site Institucional",
      description: "Website institucional moderno projetado para fortalecer a autoridade da marca e apresentar serviços.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      results: [
        { icon: TrendingUp, label: "Engajamento", value: "+85%" },
        { icon: Users, label: "Visitas", value: "10k+" },
        { icon: Clock, label: "Entrega", value: "3 semanas" }
      ],
      tags: ["Institucional", "Branding", "Corporativo"],
      color: "from-emerald-500 to-green-500",
      link: null
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {cases.map((caseItem, index) => (
              <motion.div key={caseItem.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.color} opacity-90`} />
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className={`w-full h-full object-cover mix-blend-overlay ${caseItem.className || ""}`}
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

                  <CardContent className="mt-auto">
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

                    {caseItem.link ? (
                      <a
                        href={caseItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button variant="outline" className="w-full group/btn">
                          Ver Projeto Online
                          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" className="w-full group/btn cursor-default opacity-80 hover:bg-background hover:text-foreground">
                        Projeto Confidencial
                      </Button>
                    )}
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

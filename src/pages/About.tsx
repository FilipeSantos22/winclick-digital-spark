import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { usePageTracking } from "@/lib/analytics";


const About = () => {
  usePageTracking();

  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada projeto é desenvolvido com métricas claras e objetivos definidos para garantir o sucesso do seu negócio."
    },
    {
      icon: Users,
      title: "Parceria de Longo Prazo",
      description: "Não somos apenas fornecedores, somos parceiros estratégicos comprometidos com o crescimento contínuo da sua empresa."
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Utilizamos as tecnologias mais modernas e melhores práticas do mercado para entregar soluções de alta qualidade."
    },
    {
      icon: TrendingUp,
      title: "Inovação Constante",
      description: "Estamos sempre atualizados com as últimas tendências e inovações do mercado digital para oferecer o melhor."
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
      <SEO
        title="Sobre a WinClick - Agência Digital em Goiânia"
        description="Conheça a WinClick, agência digital especializada em transformar ideias em presença digital que gera resultados reais para seu negócio."
        canonical="/sobre"
      />
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
              Transformando Ideias em Presença Digital
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              A WinClick é uma agência digital especializada em criar experiências web que geram resultados reais para seu negócio. Com foco em inovação, design e performance, desenvolvemos soluções digitais que impulsionam o crescimento da sua marca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Capacitar empresas de todos os tamanhos a alcançarem seu máximo potencial no ambiente digital, oferecendo soluções tecnológicas inovadoras, design excepcional e estratégias de marketing eficazes.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Nossa Visão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência nacional em transformação digital, reconhecida pela qualidade dos nossos projetos, satisfação dos clientes e impacto positivo nos negócios que atendemos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam cada projeto e decisão da WinClick
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Pronto para Transformar Seu Negócio?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Vamos conversar sobre como podemos impulsionar sua presença digital e gerar resultados reais para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5562995513691?text=Olá,%20vim%20da%20WinClick%20e%20gostaria%20de%20um%20novo%20site."
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

export default About;

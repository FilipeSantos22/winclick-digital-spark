import { Smartphone, Search, Rocket, Headphones, Shield, BarChart3 } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Benefits = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: "Design Responsivo",
      description: "Sites que funcionam perfeitamente em qualquer dispositivo, de smartphones a desktops."
    },
    {
      icon: Search,
      title: "SEO Avançado",
      description: "Estrutura otimizada para buscadores, ajudando seu negócio a ser encontrado."
    },
    {
      icon: Rocket,
      title: "Alta Performance",
      description: "Carregamento rápido e experiência fluida que reduz abandono de página."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Certificado SSL, proteção contra ataques e backups automáticos inclusos."
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Métricas detalhadas para acompanhar o desempenho e otimizar resultados."
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Acompanhamento contínuo após a entrega para garantir seu sucesso."
    }
  ];

  return (
    <section className="section-container bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Por que escolher a WinClick
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Resultados que{" "}
              <span className="gradient-text">impulsionam negócios</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Mais do que um site bonito, entregamos uma ferramenta de vendas 
              otimizada para gerar resultados reais.
            </p>
          </ScrollReveal>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 80}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1.5">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

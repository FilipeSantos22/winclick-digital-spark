import { Target, Zap, Users, Award } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Estratégia",
      description: "Cada projeto é pensado para alcançar seus objetivos de negócio"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Sites rápidos, otimizados e preparados para escalar"
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Design focado em usabilidade e conversão de visitantes"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Código limpo, manutenível e seguindo melhores práticas"
    }
  ];

  return (
    <section id="sobre" className="section-container bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Sobre a WinClick
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Uma agência focada em{" "}
              <span className="gradient-text">resultados reais</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na WinClick, não criamos apenas sites bonitos. Desenvolvemos experiências 
              digitais estratégicas que transformam visitantes em clientes e fortalecem 
              a presença da sua marca no mercado.
            </p>
          </ScrollReveal>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 100}
                className="card-premium text-center group"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Target, Zap, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Estratégia",
      description: "Planejamento alinhado aos seus objetivos de negócio"
    },
    {
      icon: Zap,
      title: "Tecnologia",
      description: "Soluções modernas e otimizadas para performance"
    },
    {
      icon: Users,
      title: "Design",
      description: "Interfaces que encantam e convertem visitantes"
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-background" aria-labelledby="sobre-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 id="sobre-heading" className="text-4xl md:text-5xl font-bold">
            Sobre a <span className="bg-gradient-primary bg-clip-text text-transparent">WinClick</span> - Agência Digital
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Na WinClick, acreditamos que estar online não é suficiente — é preciso ser lembrado. 
            Criamos sites que conectam pessoas, marcas e resultados, com uma combinação única de 
            estratégia, tecnologia e design.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card hover:shadow-soft transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

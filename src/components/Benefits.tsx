import { Smartphone, Search, Rocket, Headphones } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: "Design responsivo e moderno",
      description: "Perfeito em qualquer dispositivo"
    },
    {
      icon: Search,
      title: "Otimização para SEO",
      description: "Seu site encontrado pelos clientes certos"
    },
    {
      icon: Rocket,
      title: "Hospedagem rápida e segura",
      description: "Performance e segurança garantidas"
    },
    {
      icon: Headphones,
      title: "Suporte e acompanhamento",
      description: "Estamos com você após a entrega"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Resultados que <span className="bg-gradient-primary bg-clip-text text-transparent">Fazem a Diferença</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Mais do que um site, criamos experiências digitais que vendem por você.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

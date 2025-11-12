import { Building2, Megaphone, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Site Institucional",
      description: "Sua marca com presença e credibilidade no digital.",
      color: "from-primary to-primary/80"
    },
    {
      icon: Megaphone,
      title: "Landing Page Estratégica",
      description: "Páginas otimizadas para captar leads e aumentar conversões.",
      color: "from-secondary to-secondary/80"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Personalizado",
      description: "Venda seus produtos online com estrutura rápida, segura e profissional.",
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital em resultados concretos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 border-0 overflow-hidden"
            >
              <CardContent className="p-8 space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

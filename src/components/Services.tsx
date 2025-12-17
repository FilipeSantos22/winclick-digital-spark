import { Building2, Megaphone, ShoppingCart, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Site Institucional",
      description: "Presença digital profissional que transmite credibilidade e autoridade para sua marca.",
      features: ["Design personalizado", "Responsivo e rápido", "SEO otimizado"],
    },
    {
      icon: Megaphone,
      title: "Landing Page",
      description: "Páginas focadas em conversão, projetadas para captar leads e gerar resultados.",
      features: ["Alta conversão", "Copywriting estratégico", "A/B testing ready"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Loja virtual completa e segura para você vender seus produtos 24 horas por dia.",
      features: ["Checkout otimizado", "Gestão simplificada", "Integrações de pagamento"],
    }
  ];

  return (
    <section id="servicos" className="section-container bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Nossos serviços
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Soluções digitais para{" "}
              <span className="gradient-text">cada objetivo</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Do conceito à entrega, desenvolvemos projetos que combinam design, 
              tecnologia e estratégia de negócio.
            </p>
          </ScrollReveal>
          
          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 150}
                className="group"
              >
                <div className="card-premium h-full relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

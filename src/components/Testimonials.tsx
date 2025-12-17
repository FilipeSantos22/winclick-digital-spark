import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO",
      company: "Silva Advocacia",
      text: "A WinClick transformou nossa presença online. O site ficou impecável e já estamos recebendo mais contatos de clientes qualificados. O investimento se pagou em poucos meses.",
      rating: 5,
      image: "CS"
    },
    {
      name: "Marina Costa",
      role: "Fundadora",
      company: "Boutique Elegance",
      text: "Nossa loja online superou todas as expectativas. A equipe é extremamente atenciosa, entendeu exatamente o que precisávamos e entregou um resultado excepcional.",
      rating: 5,
      image: "MC"
    },
    {
      name: "Roberto Andrade",
      role: "Diretor",
      company: "Tech Solutions",
      text: "Profissionalismo e criatividade em cada detalhe. A landing page que criaram aumentou nossas conversões em 40%. Recomendo fortemente.",
      rating: 5,
      image: "RA"
    }
  ];

  return (
    <section id="depoimentos" className="section-container bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Depoimentos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Clientes que{" "}
              <span className="gradient-text">confiam na WinClick</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja o que nossos clientes dizem sobre trabalhar conosco
            </p>
          </ScrollReveal>
          
          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 150}
              >
                <div className="card-premium h-full flex flex-col relative">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Text */}
                  <p className="text-foreground/80 leading-relaxed flex-grow mb-6">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
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

export default Testimonials;

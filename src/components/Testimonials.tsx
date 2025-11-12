import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Silva Advocacia",
      text: "A WinClick transformou nossa presença online. O site ficou incrível e já estamos recebendo mais contatos de clientes qualificados.",
      rating: 5
    },
    {
      name: "Marina Costa",
      company: "Boutique Elegance",
      text: "Nossa loja online superou as expectativas. A equipe é muito atenciosa e o resultado foi exatamente o que precisávamos.",
      rating: 5
    },
    {
      name: "Roberto Andrade",
      company: "Tech Solutions",
      text: "Profissionalismo e criatividade em cada detalhe. A landing page que criaram aumentou nossas conversões em 40%.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossos <span className="bg-gradient-primary bg-clip-text text-transparent">clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados reais de quem confia na WinClick
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

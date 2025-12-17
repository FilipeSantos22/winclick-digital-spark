import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const CTA = () => {
  return (
    <section id="contato" className="section-container relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4" />
              <span>Vamos conversar sobre seu projeto</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
              Pronto para transformar sua presença digital?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Agende uma conversa sem compromisso e descubra como podemos criar 
              o site perfeito para impulsionar seu negócio.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5562995513691?text=Olá,%20vim%20da%20WinClick%20e%20gostaria%20de%20um%20novo%20site." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300 h-14 px-8 text-base font-semibold shadow-glow-strong group"
                >
                  Solicitar orçamento gratuito
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
          
          {/* Trust message */}
          <ScrollReveal delay={400}>
            <p className="text-sm text-primary-foreground/60 mt-8">
              ✓ Resposta em até 24h &nbsp;•&nbsp; ✓ Orçamento sem compromisso &nbsp;•&nbsp; ✓ Atendimento personalizado
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;

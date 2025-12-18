import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 hero-grid opacity-60" />
        
        {/* Glow orbs */}
        <div 
          className="glow-orb w-[500px] h-[500px] bg-primary/10 -top-40 -right-40"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="glow-orb w-[400px] h-[400px] bg-secondary/10 bottom-20 -left-40"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="glow-orb w-[300px] h-[300px] bg-primary/5 top-1/3 right-1/4"
          style={{ animationDelay: '4s' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-medium opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
            <span>Agência Digital Premium</span>
          </div>
          
          {/* Headline */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-balance opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Sites que{" "}
            <span className="gradient-text">
              convertem visitantes
            </span>{" "}
            em clientes.
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Desenvolvemos sites institucionais, landing pages e e-commerces com 
            design estratégico, performance otimizada e foco em resultados mensuráveis.
          </p>
          
          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <a 
              href="https://wa.me/5562995513691?text=Olá,%20vim%20da%20WinClick%20e%20gostaria%20de%20um%20novo%20site." 
              target="_blank" 
              rel="noopener noreferrer"
            >
<<<<<<< HEAD
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">

                <Button variant="hero" size="lg" className="min-w-[200px] group">
                  Solicitar orçamento
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  Ver portfólio
                </Button>
              </div>
=======
              <Button variant="hero" size="lg" className="min-w-[220px] h-14 text-base group">
                Solicitar orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
>>>>>>> c9da2ff9942a66a1f4ffa6e8e45921972d6eb538
            </a>
            <a href="#servicos">
              <Button variant="outline" size="lg" className="min-w-[180px] h-14 text-base group bg-background/50 backdrop-blur-sm hover:bg-background">
                <Play className="w-4 h-4 mr-2" />
                Ver serviços
              </Button>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div 
            className="flex flex-wrap justify-center gap-8 pt-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">50+</p>
              <p className="text-sm text-muted-foreground">Projetos entregues</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">98%</p>
              <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">5★</p>
              <p className="text-sm text-muted-foreground">Avaliação média</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;

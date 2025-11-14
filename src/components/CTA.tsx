import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CTA = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Pronto para elevar sua presença digital?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90">
            Fale com a WinClick e descubra como podemos criar o site perfeito para o seu negócio.
          </p>
          
          <a 
            href="https://wa.me/5562995513691?text=Olá,%20vim%20da%20WinClick%20e%20gostaria%20de%20um%20novo%20site." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 h-auto shadow-glow group mt-3"
            >
              Quero meu site profissional
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

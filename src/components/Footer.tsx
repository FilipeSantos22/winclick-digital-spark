import { Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo-fundo-preto-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <img src={logo} alt="WinClick" className="h-12" />
              <p className="text-background/80 leading-relaxed">
                Transformando ideias em presença digital que gera resultados.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Serviços</h4>
              <ul className="space-y-2 text-background/80">
                <li>Site Institucional</li>
                <li>Landing Page</li>
                <li>E-commerce</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-3 text-background/80">
                <a href="mailto:contato@winclick.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contato@winclick.com.br</span>
                </a>
                <a href="https://instagram.com/winclick.oficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span>@winclick.oficial</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-background/20 text-center text-background/60">
            <p>© {new Date().getFullYear()} WinClick. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

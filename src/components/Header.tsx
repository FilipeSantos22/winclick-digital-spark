import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-fundo-preto-removebg-preview.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="WinClick" className="h-11" />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/winclick.oficial/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Button variant="ghost" size="icon">
                <Instagram className="w-5 h-5 text-primary" />
              </Button>
            </a>
            <Button variant="hero" size="sm" className="hidden md:inline-flex">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

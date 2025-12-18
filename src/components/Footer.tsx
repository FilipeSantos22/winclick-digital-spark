import { Mail, Instagram, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-fundo-preto-removebg-preview.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicos: [
      { label: "Site Institucional", href: "#servicos" },
      { label: "Landing Page", href: "#servicos" },
      { label: "E-commerce", href: "#servicos" },
    ],
    empresa: [
      { label: "Sobre nós", href: "#sobre" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#contato" },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container mx-auto px-4">
        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <img 
              src={logo} 
              alt="WinClick" 
              className="h-14 w-auto" 
            />
            <p className="text-sm leading-relaxed">
              Transformamos ideias em presença digital que gera resultados reais para o seu negócio.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contato@winclick.com.br" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  contato@winclick.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/winclick.oficial" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  @winclick.oficial
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                Goiânia, GO - Brasil
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} WinClick. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Feito com <span className="text-primary">♥</span> pela WinClick
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { usePageTracking } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, ArrowLeft, SearchX } from "lucide-react";

const NotFound = () => {
  usePageTracking();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4">
      <SEO title="Página não encontrada | WinClick" description="Erro 404 - Página não encontrada." noIndex={true} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <SearchX className="w-16 h-16 text-primary" />
          </motion.div>
          <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20 rounded-full -z-10 transform scale-150" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Página não encontrada
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ops! A página que você está procurando parece ter sido movida ou não existe mais.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <Home className="w-4 h-4" />
              Voltar para Home
            </Button>
          </Link>
          <button onClick={() => window.history.back()}>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar Anterior
            </Button>
          </button>
        </div>

        <p className="text-sm text-muted-foreground pt-8">
          Precisa de ajuda?{" "}
          <a
            href="https://wa.me/5562995513691"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Fale conosco no WhatsApp
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default NotFound;

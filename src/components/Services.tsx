import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section id="servicos" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Nossos serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold">Soluções digitais para cada objetivo</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/servicos/${service.slug}`}
              className="block h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded-lg"
              aria-label={`Abrir detalhes de ${service.title}`}
            >
              <div className="h-full p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-primary to-primary/30 mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  Ver detalhes
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

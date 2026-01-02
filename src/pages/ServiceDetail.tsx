import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { usePageTracking } from "@/lib/analytics";

const ServiceDetail = () => {
  usePageTracking();
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <SEO title="Serviço não encontrado | WinClick" description="Serviço não encontrado." noIndex={true} />
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Serviço não encontrado</h2>
          <p className="text-muted-foreground mb-6">O serviço que você procura não existe ou foi removido.</p>
          <Link to="/servicos">
            <Button variant="outline">Voltar para Serviços</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${service.title} | WinClick Agência Digital`}
        description={service.description}
        canonical={`/servicos/${slug}`}
      />
      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
            <p className="text-muted-foreground">{service.description}</p>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">O que entregamos</h3>
            <ul className="space-y-3 mb-6">
              {service.features.map((f, i) => (
                <li key={i} className="text-muted-foreground">• {f}</li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a href="https://wa.me/5562995513691" target="_blank" rel="noopener noreferrer">
                <Button>Solicitar Orçamento</Button>
              </a>
              <Link to="/contato">
                <Button variant="outline">Fale Conosco</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default ServiceDetail;

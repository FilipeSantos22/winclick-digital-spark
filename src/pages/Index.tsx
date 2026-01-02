import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { usePageTracking } from "@/lib/analytics";

const Index = () => {
  usePageTracking();

  return (
    <Layout>
      <SEO
        title="WinClick - Agência Digital | Criação de Sites, Landing Pages e E-commerce em Goiânia"
        description="Agência digital em Goiânia especializada em criação de sites institucionais, landing pages e e-commerces. Design estratégico, SEO otimizado e foco em conversão."
        canonical="/"
      />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;

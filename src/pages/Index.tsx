import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
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

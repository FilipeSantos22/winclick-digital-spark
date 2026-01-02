import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { usePageTracking, trackFormSubmit } from "@/lib/analytics";


const Contact = () => {
  usePageTracking();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Winclick",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      trackFormSubmit('contact_form');
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em breve."
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Erro ao enviar mensagem", {
        description: "Verifique se as chaves do EmailJS estão configuradas corretamente no arquivo .env"
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@winclick.com.br",
      link: "mailto:contato@winclick.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(62) 99551-3691",
      link: "https://wa.me/5562995513691"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Goiânia, GO - Brasil",
      link: null
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg - Sex: 9h às 18h",
      link: null
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <Layout>
      <SEO
        title="Contato - WinClick | Agência Digital em Goiânia"
        description="Entre em contato com a WinClick. Estamos prontos para transformar suas ideias em realidade digital. Fale conosco!"
        canonical="/contato"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Entre em Contato
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Estamos prontos para transformar suas ideias em realidade. Entre em contato e vamos conversar sobre seu projeto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                    <CardDescription>
                      Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Seu nome"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Telefone
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Mensagem *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Conte-nos sobre seu projeto..."
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full min-h-[150px]"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                        {!isSubmitting && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4">Informações de Contato</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Escolha a melhor forma de entrar em contato conosco. Estamos sempre disponíveis para ajudar você a alcançar seus objetivos digitais.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10">
                              <info.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold mb-1">{info.title}</h3>
                              {info.link ? (
                                <a
                                  href={info.link}
                                  target={info.link.startsWith('http') ? '_blank' : undefined}
                                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <p className="text-muted-foreground">{info.value}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <Card className="bg-gradient-to-r from-primary to-primary/80 text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Atendimento Rápido via WhatsApp</h3>
                    <p className="mb-4 opacity-90">
                      Precisa de uma resposta imediata? Fale conosco diretamente pelo WhatsApp!
                    </p>
                    <a
                      href="https://wa.me/5562995513691?text=Olá,%20preciso%20de%20ajuda!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" size="lg" className="w-full">
                        Abrir WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional Placeholder) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Localização</h2>
              <p className="text-muted-foreground">
                Atendemos clientes em todo o Brasil, com base em Goiânia - GO
              </p>
            </div>
            <div className="bg-muted rounded-xl overflow-hidden h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-semibold mb-2">Goiânia, Goiás</p>
                <p className="text-muted-foreground">Atendimento presencial e remoto</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

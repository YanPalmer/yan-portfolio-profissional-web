import { useState } from "react";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PORTFOLIO_INFO } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simular envio de formulário
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Mensagem enviada:", formData);
      alert("Mensagem enviada com sucesso!");

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Erro ao enviar a mensagem.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Yan_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Entrar em Contato</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tem uma oportunidade ou projeto em mente? Entre em contato comigo
              e vamos conversar sobre como posso ajudar.
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 text-accent">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a
                      href={PORTFOLIO_INFO.socialLinks.email}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {PORTFOLIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 text-accent">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Telefone</h3>
                    <a
                      href={`tel:${PORTFOLIO_INFO.phone.replace(/\D/g, "")}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {PORTFOLIO_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 text-accent">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Localização</h3>
                    <p className="text-muted-foreground">{PORTFOLIO_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Resume Download */}
              <div className="pt-6 border-t border-border">
                <Button
                  onClick={downloadResume}
                  className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Download className="h-4 w-4" />
                  Baixar Currículo
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-card border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


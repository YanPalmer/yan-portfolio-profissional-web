import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_INFO } from "@/lib/constants";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = PORTFOLIO_INFO.description;
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [displayText, isTyping, fullText]);

  const downloadResume = () => {
    // Placeholder para download do currículo
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Yan_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 gradient-bg"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Olá, eu sou{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {PORTFOLIO_INFO.name}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground h-12">
                {displayText}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              {PORTFOLIO_INFO.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Entrar em Contato
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={downloadResume}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Baixar Currículo
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href={PORTFOLIO_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={PORTFOLIO_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={PORTFOLIO_INFO.socialLinks.email}
                className="text-muted-foreground hover:text-accent transition-colors hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-card rounded-lg border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-sm text-muted-foreground">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


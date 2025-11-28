import { useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfólio Web",
    description:
      "Portfólio pessoal moderno com React, TailwindCSS e animações suaves.",
    image: "🎨",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "App de Tarefas",
    description:
      "Aplicação de gerenciamento de tarefas com Firebase e autenticação.",
    image: "✅",
    technologies: ["React", "Firebase", "TailwindCSS"],
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "API REST",
    description:
      "API robusta desenvolvida com Node.js, Express e MongoDB para gerenciar dados.",
    image: "⚙️",
    technologies: ["Node.js", "Express", "MongoDB", "TypeScript"],
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo com gráficos em tempo real usando Chart.js.",
    image: "📊",
    technologies: ["React", "Chart.js", "TailwindCSS", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Chat em Tempo Real",
    description:
      "Aplicação de chat com Socket.io, Node.js e React para comunicação em tempo real.",
    image: "💬",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "E-commerce",
    description:
      "Plataforma de e-commerce com carrinho de compras e integração de pagamento.",
    image: "🛒",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute("data-id") || "0");
            setVisibleProjects((prev) => {
              const newSet = new Set([...prev, id]);
              return Array.from(newSet);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-project-id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Projetos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Alguns dos projetos que desenvolvi para demonstrar minhas
              habilidades e experiência em diferentes tecnologias.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                data-project-id={project.id}
                className={`group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 card-hover ${
                  visibleProjects.includes(project.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 gap-2"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 gap-2"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Ver
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


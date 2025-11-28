import { useState, useEffect } from "react";
import {
  Code2,
  Database,
  Zap,
  Palette,
  GitBranch,
  Cpu,
} from "lucide-react";

interface SkillCategory {
  id: number;
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    category: "Frontend",
    icon: <Palette className="h-6 w-6" />,
    skills: ["React", "TypeScript", "TailwindCSS", "Vite", "Next.js"],
  },
  {
    id: 2,
    category: "Backend",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["Node.js", "Express", "Java", "REST APIs", "GraphQL"],
  },
  {
    id: 3,
    category: "Banco de Dados",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "Firebase", "PostgreSQL", "MySQL"],
  },
  {
    id: 4,
    category: "Ferramentas",
    icon: <Zap className="h-6 w-6" />,
    skills: ["Git", "Docker", "VS Code", "Postman", "npm/pnpm"],
  },
  {
    id: 5,
    category: "DevOps",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["CI/CD", "GitHub Actions", "Vercel", "AWS Basics"],
  },
  {
    id: 6,
    category: "Controle de Versão",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitHub", "GitLab", "Merge Requests"],
  },
];

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute("data-skill-id") || "0");
            setVisibleCategories((prev) => {
              const newSet = new Set([...prev, id]);
              return Array.from(newSet);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-skill-id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Habilidades</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tecnologias e ferramentas que domino para desenvolver soluções
              modernas e escaláveis.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                data-skill-id={category.id}
                className={`group relative bg-background border border-border rounded-lg p-6 transition-all duration-500 ${
                  visibleCategories.includes(category.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/20 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-lg border border-accent/0 group-hover:border-accent/50 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


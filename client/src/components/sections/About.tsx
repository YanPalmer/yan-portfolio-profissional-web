import { useState, useEffect } from "react";

interface TimelineItem {
  id: number;
  tech: string;
  year: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    tech: "Node.js",
    year: "2021",
    description: "Começei com backend JavaScript",
  },
  {
    id: 2,
    tech: "TypeScript",
    year: "2022",
    description: "Adotei TypeScript para código mais seguro",
  },
  {
    id: 3,
    tech: "React",
    year: "2022",
    description: "Especializei em desenvolvimento frontend",
  },
  {
    id: 4,
    tech: "Firebase",
    year: "2023",
    description: "Integrei soluções de backend serverless",
  },
  {
    id: 5,
    tech: "Java",
    year: "2023",
    description: "Expandindo conhecimento em backend robusto",
  },
];

export default function About() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute("data-id") || "0");
                setVisibleItems((prev) => {
                  const newSet = new Set([...prev, id]);
                  return Array.from(newSet);
                });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Sou um desenvolvedor full stack apaixonado por criar soluções
              inovadoras. Com foco em tecnologias modernas, busco sempre
              aprender e evoluir profissionalmente.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Trilha de Conhecimento</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 md:transform md:-translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="space-y-8 pl-8 md:pl-0">
                {timeline.map((item, index) => (
                  <div
                    key={item.id}
                    data-id={item.id}
                    className={`md:grid md:grid-cols-2 gap-8 transition-all duration-500 ${
                      visibleItems.includes(item.id)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {/* Left side - even items */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="text-right pr-8 hidden md:block">
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                              {item.year}
                            </p>
                            <p className="text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-background md:transform md:-translate-x-1/2 md:-translate-x-2"></div>
                          <div className="ml-4 md:ml-0 md:pl-8">
                            <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold">
                              {item.tech}
                            </div>
                            <div className="md:hidden mt-2 space-y-2">
                              <p className="text-sm text-muted-foreground">
                                {item.year}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center md:flex-row-reverse">
                          <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-background md:transform md:-translate-x-1/2 md:translate-x-2"></div>
                          <div className="ml-4 md:ml-0 md:pr-8 md:text-right">
                            <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold">
                              {item.tech}
                            </div>
                            <div className="md:hidden mt-2 space-y-2">
                              <p className="text-sm text-muted-foreground">
                                {item.year}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-left pl-8 hidden md:block">
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                              {item.year}
                            </p>
                            <p className="text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


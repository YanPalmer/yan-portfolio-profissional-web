import { useEffect, useState } from "react";

export function useIntersectionObserver(
  selector: string,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const [visibleElements, setVisibleElements] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-id");
          if (id) {
            setVisibleElements((prev) => {
              const newSet = new Set([...prev, id]);
              return Array.from(newSet);
            });
          }
        }
      });
    }, options);

    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector, options]);

  return visibleElements;
}


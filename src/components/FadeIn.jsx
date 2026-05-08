import { useEffect, useRef, useState } from "react";

export function FadeIn({ children, className = "", as: Component = "div", ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={["fade-in-section", visible && "is-visible", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}

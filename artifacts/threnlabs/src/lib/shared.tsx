import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function WaveformVisual() {
  return (
    <div className="flex items-end gap-1 h-12">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div
          key={i}
          className={`w-1.5 rounded-full bg-primary/70 wave-bar-${i}`}
          style={{ minHeight: "4px" }}
        />
      ))}
    </div>
  );
}

export function GridBackground() {
  return <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />;
}

export function RadialGlow({
  color = "blue",
  className = "",
}: {
  color?: "blue" | "violet" | "cyan";
  className?: string;
}) {
  const gradient =
    color === "blue"
      ? "radial-gradient(ellipse, rgba(59,130,246,0.03) 0%, transparent 70%)"
      : color === "violet"
      ? "radial-gradient(ellipse, rgba(139,92,246,0.03) 0%, transparent 70%)"
      : "radial-gradient(ellipse, rgba(34,211,238,0.03) 0%, transparent 70%)";

  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{ background: gradient }}
    />
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      {children}
    </div>
  );
}

export function SectionLabel({
  color = "blue",
  children,
}: {
  color?: "blue" | "violet" | "cyan" | "yellow";
  children: React.ReactNode;
}) {
  const styles = {
    blue: "border-primary/20 bg-primary/5 text-primary",
    violet: "border-primary/20 bg-primary/5 text-primary",
    cyan: "border-primary/20 bg-primary/5 text-primary",
    yellow: "border-primary/20 bg-primary/5 text-primary",
  };
  const markerColors = {
    blue: "fill-primary",
    violet: "fill-primary",
    cyan: "fill-primary",
    yellow: "fill-primary",
  };
  return (
    <div
      className={`inline-flex items-center px-3.5 py-1.5 rounded border ${styles[color]} text-[10px] tracking-wider uppercase mb-5 font-semibold font-mono`}
    >
      <svg className={`w-2.5 h-2.5 ${markerColors[color]} mr-2 opacity-80`} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="2.5" height="2.5" rx="0.5" />
        <rect x="8.5" y="1" width="2.5" height="2.5" rx="0.5" />
        <rect x="1" y="8.5" width="2.5" height="2.5" rx="0.5" />
        <rect x="8.5" y="8.5" width="2.5" height="2.5" rx="0.5" />
      </svg>
      {children}
    </div>
  );
}

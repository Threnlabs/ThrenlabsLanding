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
          className={`w-1.5 rounded-full bg-blue-400 wave-bar-${i}`}
          style={{ minHeight: "4px" }}
        />
      ))}
    </div>
  );
}

export function GridBackground() {
  return <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />;
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
      ? "radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, transparent 70%)"
      : color === "violet"
      ? "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)"
      : "radial-gradient(ellipse, rgba(34,211,238,0.12) 0%, transparent 70%)";

  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{ background: gradient }}
    />
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[hsl(222,47%,5%)] text-white pt-16">
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
    blue: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    yellow: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  };
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded border ${styles[color]} text-xs tracking-widest uppercase mb-5 font-medium`}
    >
      {children}
    </div>
  );
}

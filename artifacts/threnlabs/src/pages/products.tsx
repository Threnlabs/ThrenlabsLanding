import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";

function ProductsHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-28 pb-16 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="blue" className="w-[800px] h-[600px] -top-20 left-1/2 -translate-x-1/2" />
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <SectionLabel color="blue">Product Suite</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
            Everything you need<br />for production AI
          </h1>
          <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl mx-auto leading-relaxed">
            From inference to training, observability to scheduling — a complete stack
            built under real production constraints, not demo conditions.
          </p>
        </div>
      </div>
    </section>
  );
}

function FlagshipProduct() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-8 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <SectionLabel color="violet">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 pulse-dot" />
            Released — Stable
          </SectionLabel>
        </div>
        <Link
          href="/products/cortex"
          className="block group"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}
        >
          <div className="relative rounded-2xl border border-violet-500/20 bg-[hsl(222,44%,7%)] p-8 lg:p-12 overflow-hidden hover:border-violet-500/40 transition-all duration-300">
            <RadialGlow color="violet" className="w-[600px] h-[400px] -top-20 right-0 opacity-40" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 group-hover:text-violet-200 transition-colors">
                  Cortex
                </h2>
                <p className="text-[hsl(215,20%,55%)] leading-relaxed mb-6">
                  Our flagship deep learning inference engine. Ultra-low latency,
                  deterministic outputs, horizontal scaling — engineered for organizations
                  that can't afford to guess.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Ultra-low latency", "Deterministic", "gRPC + REST", "Model agnostic"].map((feat) => (
                    <span key={feat} className="text-xs px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">
                      {feat}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors font-medium text-sm">
                  View Cortex details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "Verified", label: "Production Latency" },
                  { value: "Sustained", label: "High Throughput" },
                  { value: "High", label: "Benchmark Confidence" },
                  { value: "Optimized", label: "Memory Efficiency" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-xl border border-[hsl(220,30%,16%)] bg-[hsl(222,44%,5%)] p-5">
                    <div className="text-xl font-bold text-white tabular-nums mb-1">{value}</div>
                    <div className="text-xs text-[hsl(215,20%,42%)]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function UpcomingProducts() {
  const { ref, inView } = useInView();

  const products = [
    {
      href: "/products/calendarsync",
      codename: "CalendarSync",
      tag: "Alpha Development",
      desc: "Enterprise-grade real-time calendar orchestration. Synchronize across all major platforms with industry-leading latency.",
      progress: 75,
      color: "blue",
      features: ["Multi-platform", "Real-time sync", "Security focused"],
    },
    {
      href: "/products/bullpen",
      codename: "Bullpen",
      tag: "Internal Testing",
      desc: "Distributed training framework for multi-modal foundation models. Significant cost reduction without sacrificing convergence.",
      progress: 45,
      color: "violet",
      features: ["Parallel training", "Linear scaling", "Fault tolerant"],
    },
    {
      href: "/products/smap",
      codename: "Smap",
      tag: "Research Phase",
      desc: "A unified observability layer for AI systems — inference tracing, attention visualization, and anomaly detection.",
      progress: 30,
      color: "cyan",
      features: ["Deep observability", "Drift detection", "Attention viz"],
    },
  ];

  const colorMap: Record<string, { dot: string; bar: string; badge: string; tag: string }> = {
    blue:   { dot: "bg-blue-400",   bar: "bg-blue-500",   badge: "bg-blue-500/10 border-blue-500/20 text-blue-300",     tag: "text-blue-400" },
    violet: { dot: "bg-violet-400", bar: "bg-violet-500", badge: "bg-violet-500/10 border-violet-500/20 text-violet-300", tag: "text-violet-400" },
    cyan:   { dot: "bg-cyan-400",   bar: "bg-cyan-400",   badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",     tag: "text-cyan-400" },
  };

  return (
    <section ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <SectionLabel color="yellow">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 pulse-dot" />
            In Development
          </SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Coming next</h2>
          <p className="text-[hsl(215,20%,55%)] max-w-xl">We're building quietly. Early access available for select teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map(({ href, codename, tag, desc, progress, color, features }, i) => {
            const c = colorMap[color];
            return (
              <Link
                key={codename}
                href={href}
                className="group block rounded-xl border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] p-6 hover:border-[hsl(220,30%,24%)] transition-all duration-300"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${i * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-[hsl(215,20%,40%)]">{codename.toUpperCase()}</span>
                  <div className={`w-2 h-2 rounded-full pulse-dot ${c.dot}`} />
                </div>
                <p className="text-sm text-[hsl(215,20%,55%)] leading-relaxed mb-4">{desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {features.map((f) => (
                    <span key={f} className={`text-[10px] font-medium px-2 py-0.5 rounded border ${c.badge}`}>{f}</span>
                  ))}
                </div>

                <div className="mb-6">
                  <div className={`text-xs font-medium ${c.tag}`}>{tag}</div>
                </div>

                <div className={`flex items-center gap-1 text-xs font-medium ${c.tag} group-hover:gap-2 transition-all`}>
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <PageShell>
      <ProductsHero />
      <FlagshipProduct />
      <UpcomingProducts />
    </PageShell>
  );
}

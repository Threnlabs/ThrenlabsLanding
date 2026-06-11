import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";
import { SEO } from "@/components/seo";

function ProductsHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-28 pb-16 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="blue" className="w-[50rem] h-[37.5rem] -top-20 left-1/2 -translate-x-1/2" />
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <SectionLabel color="blue">B2B AI SaaS Suite</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6 max-w-4xl mx-auto leading-[1.15]">
            Advancing AI for Educational Institutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Leading B2B AI SaaS solutions built specifically for school, college, and university operations. From reasoning-first research tools to automated academic scheduling, we advance education through secure and reliable AI.
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
            Join Waitlist
          </SectionLabel>
        </div>
        <Link
          href="/products/cosmos"
          className="block group"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}
        >
          <div className="relative rounded-2xl border border-border bg-card p-8 lg:p-12 overflow-hidden hover:border-primary/45 transition-all duration-300 shadow-sm">
            <RadialGlow color="violet" className="w-[37.5rem] h-[25rem] -top-20 right-0 opacity-40" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                  Cosmos
                </h2>
                <div className="text-xl text-primary font-semibold mb-4">The Reasoning-First IDE for University Labs.</div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Accelerate scientific and computer science research in college laboratories. Cosmos maintains deep architectural context and validations, enabling students and researchers to build complex AI applications reliably and at a fraction of the cost.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Academic Research", "Reasoning-First IDE", "Context Preservation", "Low Token Cost"].map((feat) => (
                    <span key={feat} className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      {feat}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-primary group-hover:text-primary/80 transition-colors font-medium text-sm">
                  View Cosmos details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "Targeted", label: "Efficient Reasoning" },
                  { value: "0.25x", label: "Relative Cost" },
                  { value: "Deep", label: "Architectural Context" },
                  { value: "Stable", label: "Deployment Ready" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-xl border border-border bg-muted/20 p-5">
                    <div className="text-xl font-bold text-foreground tabular-nums mb-1">{value}</div>
                    <div className="text-xs text-muted-foreground">{label}</div>
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

function AvailableProducts() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-8 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <SectionLabel color="blue">
            Publicly Available
          </SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mt-4">Active Suite</h2>
        </div>

        <Link
          href="/products/scholarsanchor"
          className="block group"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}
        >
          <div className="relative rounded-2xl border border-border bg-card p-8 lg:p-12 overflow-hidden hover:border-primary/45 transition-all duration-300 shadow-sm">
            <RadialGlow color="blue" className="w-[37.5rem] h-[25rem] -top-20 right-0 opacity-40" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 group-hover:text-primary transition-colors">
                  ScholarsAnchor
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The complete end-to-end B2B AI operations and management suite for educational institutions. Unifies CalendarSync algorithm-grounded scheduling and BenchRex doubt solving under one comprehensive campus control canopy.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["AI Academic Scheduling", "BenchRex Doubt Solver", "Student Dashboard", "E2E Institutional Control"].map((feat) => (
                    <span key={feat} className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      {feat}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-primary group-hover:text-primary/80 transition-colors font-medium text-sm">
                  View ScholarsAnchor details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "v2.0", label: "Unified Release" },
                  { value: "SaaS", label: "License Type" },
                  { value: "End-to-End", label: "Encryption" },
                  { value: "Stable", label: "Production Status" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-xl border border-border bg-muted/20 p-5">
                    <div className="text-xl font-bold text-foreground tabular-nums mb-1">{value}</div>
                    <div className="text-xs text-muted-foreground">{label}</div>
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
      codename: "Bullpen",
      tag: "Internal Testing",
      desc: "Distributed training framework for multi-modal foundation models. Significant cost reduction without sacrificing convergence.",
      color: "violet",
      features: ["Parallel training", "Linear scaling", "Fault tolerant"],
    },
    {
      codename: "Smap",
      tag: "Research Phase",
      desc: "A unified observability layer for AI systems — inference tracing, attention visualization, and anomaly detection.",
      color: "cyan",
      features: ["Deep observability", "Drift detection", "Attention viz"],
    },
  ];

  const colorMap: Record<string, { dot: string; bar: string; badge: string; tag: string }> = {
    blue: { dot: "bg-primary", bar: "bg-primary", badge: "bg-primary/10 border border-primary/20 text-primary", tag: "text-primary" },
    violet: { dot: "bg-primary", bar: "bg-primary", badge: "bg-primary/10 border border-primary/20 text-primary", tag: "text-primary/90" },
    cyan: { dot: "bg-primary", bar: "bg-primary", badge: "bg-primary/10 border border-primary/20 text-primary", tag: "text-primary/95" },
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
            In Development
          </SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">Coming next</h2>
          <p className="text-muted-foreground max-w-xl">Future Products, Join us to know more.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {products.map(({ codename, tag, desc, color, features }, i) => {
            const c = colorMap[color];
            return (
              <div
                key={codename + i}
                className="group block rounded-xl border border-border bg-card p-6 transition-all duration-300 shadow-sm"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${i * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-muted-foreground">{codename.toUpperCase()}</span>
                  <div className={`w-2 h-2 rounded-full pulse-dot ${c.dot}`} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {features.map((f) => (
                    <span key={f} className={`text-[10px] font-medium px-2 py-0.5 rounded border ${c.badge}`}>{f}</span>
                  ))}
                </div>

                <div className="mb-0">
                  <div className={`text-xs font-medium ${c.tag}`}>{tag}</div>
                </div>
              </div>
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
      <SEO
        title="B2B AI SaaS Products for Educational Institutions"
        description="Explore Threnlabs' B2B AI SaaS suite advancing AI for educational institutions. Discover ScholarsAnchor operations platform and Cosmos reasoning-first code editor."
        canonical="https://threnlabs.com/products"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "B2B AI SaaS Products for Educational Institutions",
          "description": "Threnlabs' suite of artificial intelligence software designed for universities, colleges, and schools.",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "ScholarsAnchor - E2E AI Operational Scheduling & Doubt Solving Platform",
              "url": "https://threnlabs.com/products/scholarsanchor"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Cosmos - Reasoning-First Developer Environment for Research Labs",
              "url": "https://threnlabs.com/products/cosmos"
            }
          ]
        }}
      />
      <ProductsHero />
      <FlagshipProduct />
      <AvailableProducts />
      <UpcomingProducts />
    </PageShell>
  );
}

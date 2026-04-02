import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";

function SmapHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-28 pb-16 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="cyan" className="w-[43.75rem] h-[31.25rem] -top-20 left-0" />
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <Link href="/products" className="inline-flex items-center gap-1.5 text-xs text-[hsl(215,20%,45%)] hover:text-white transition-colors mb-6 group">
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Products
          </Link>
          <SectionLabel color="cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 pulse-dot" />
            Research Phase — Testing
          </SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
            Smap
          </h1>
          <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl leading-relaxed mb-8">
            A unified observability layer for AI systems. Real-time inference tracing,
            attention visualization, automated anomaly detection, and drift monitoring —
            all without modifying your model code.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all text-sm shadow-lg shadow-cyan-500/20"
            >
              Read the research
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/company#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[hsl(220,30%,18%)] hover:border-cyan-500/40 text-[hsl(210,40%,75%)] hover:text-white rounded-lg transition-all text-sm"
            >
              Express interest
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmapFeatures() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">AI observability, reimagined</h2>
          <p className="text-[hsl(215,20%,55%)]">See inside your models without touching them.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: (
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              ),
              title: "Inference Tracing",
              desc: "Full request-level tracing with per-layer latency, memory allocation, and kernel execution timelines. Pinpoint bottlenecks in milliseconds.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
              title: "Attention Visualization",
              desc: "Interactive attention head visualization for transformer models. Understand what your model attends to for any input, in real time.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              ),
              title: "Drift Detection",
              desc: "Automated input distribution drift detection with configurable sensitivity. Get alerted before model performance degrades.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              ),
              title: "Anomaly Detection",
              desc: "Statistical anomaly detection on output distributions using learned baselines. No normal/anomaly labeling required.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ),
              title: "Calibration Analysis",
              desc: "Reliability diagrams, ECE computation, and temperature scaling recommendations to measure and improve prediction confidence.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              ),
              title: "Zero-Instrumentation",
              desc: "Smap wraps your existing inference pipeline via an SDK shim. Add complete observability in two lines of code — no model changes.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="flex gap-4 p-6 rounded-xl border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] hover:border-cyan-500/20 transition-all group"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.6s ease ${i * 80}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(220,30%,10%)] border border-[hsl(220,30%,16%)] flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                {icon}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{title}</h3>
                <p className="text-[hsl(215,20%,50%)] text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmapResearchLink() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="cyan" className="w-[37.5rem] h-[25rem] top-0 left-1/2 -translate-x-1/2" />
      <GridBackground />
      <div
        className="max-w-2xl mx-auto text-center transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 pulse-dot" />
          Research-driven development
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built from the ground up in research</h2>
        <p className="text-[hsl(215,20%,55%)] mb-8 leading-relaxed">
          Smap's drift detection and calibration methods are grounded in our published research on reliable AI systems. Implementation follows the theory, not the other way around.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all text-sm shadow-lg shadow-cyan-500/20"
          >
            View research papers
          </Link>
          <Link
            href="/company#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[hsl(220,30%,18%)] hover:border-cyan-500/40 text-[hsl(210,40%,75%)] hover:text-white rounded-lg transition-all text-sm"
          >
            Stay informed
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function SmapPage() {
  return (
    <PageShell>
      <SmapHero />
      <SmapFeatures />
      <SmapResearchLink />
    </PageShell>
  );
}


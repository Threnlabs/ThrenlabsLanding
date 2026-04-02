import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";

function BullpenHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-28 pb-16 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="violet" className="w-[700px] h-[500px] -top-20 right-0" />
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
          <SectionLabel color="violet">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 pulse-dot" />
            Internal Testing — Alpha
          </SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
            Bullpen
          </h1>
          <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl leading-relaxed mb-8">
            Distributed training for multi-modal foundation models. Reduce training costs by
            60% without sacrificing convergence — across any GPU or TPU cluster topology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/company#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg transition-all text-sm shadow-lg shadow-violet-500/20"
            >
              Join waitlist
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BullpenFeatures() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Designed for scale</h2>
          <p className="text-[hsl(215,20%,55%)]">Everything training infrastructure should be, nothing it shouldn't.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: (
                <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              ),
              title: "Three-Way Parallelism",
              desc: "Pipeline, tensor, and data parallelism combined. Bullpen automatically selects the optimal strategy for your model architecture and cluster topology.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              ),
              title: "Gradient Checkpointing",
              desc: "Memory-efficient training with selective activation recomputation. Train models 4× larger than your VRAM would otherwise allow.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              title: "Mixed Precision by Default",
              desc: "BF16 and FP16 training with automatic loss scaling. Maintain numerical stability without giving up throughput.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              title: "Fault Tolerant Checkpointing",
              desc: "Automatic checkpoint saving and recovery. Resume training from the last checkpoint with zero data loss after node failures.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: "Training Dashboards",
              desc: "Real-time loss curves, gradient norms, throughput counters, and hardware utilization metrics with Weights & Biases integration.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              ),
              title: "Multi-Cloud Native",
              desc: "Run across AWS, GCP, Azure, and on-prem GPU clusters from a single configuration file. No cluster-specific code required.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="flex gap-4 p-6 rounded-xl border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] hover:border-violet-500/20 transition-all group"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.6s ease ${i * 80}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(220,30%,10%)] border border-[hsl(220,30%,16%)] flex items-center justify-center group-hover:border-violet-500/30 transition-colors">
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

function BullpenTimeline() {
  const { ref, inView } = useInView();
  const steps = [
    { date: "Q1 2025", label: "Internal testing begins", done: true },
    { date: "Q2 2025", label: "Alpha partner onboarding", done: true },
    { date: "Q3 2025", label: "Closed beta (waitlist)", done: false },
    { date: "Q4 2025", label: "Public launch", done: false },
  ];
  return (
    <section ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Launch timeline</h2>
          <p className="text-[hsl(215,20%,55%)]">We ship when it's ready, not when it's convenient.</p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[hsl(220,30%,16%)]" />
          <div className="space-y-8 pl-14">
            {steps.map(({ date, label, done }, i) => (
              <div
                key={date}
                className="relative"
                style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-20px)", transition: `all 0.6s ease ${i * 100}ms` }}
              >
                <div className={`absolute -left-[46px] w-4 h-4 rounded-full border-2 flex items-center justify-center ${done ? "border-violet-500 bg-violet-500/20" : "border-[hsl(220,30%,25%)] bg-[hsl(222,44%,7%)]"}`}>
                  {done && <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />}
                </div>
                <div className="text-xs font-mono text-[hsl(215,20%,40%)] mb-1">{date}</div>
                <div className={`text-sm font-medium ${done ? "text-white" : "text-[hsl(215,20%,50%)]"}`}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BullpenPage() {
  return (
    <PageShell>
      <BullpenHero />
      <BullpenFeatures />
      <BullpenTimeline />
    </PageShell>
  );
}


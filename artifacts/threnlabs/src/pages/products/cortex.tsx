import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";

function CortexHero() {
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
            Released — Stable
          </SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
            Cortex
          </h1>
          <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl leading-relaxed mb-8">
            Our flagship deep learning inference engine. Engineered for organizations that can't
            afford to guess — deterministic outputs, SLA-backed latency, and an architecture that
            scales horizontally without compromise.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://cortex.threnlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all text-sm shadow-lg shadow-blue-500/20"
            >
              Get started with Cortex
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://cortex.threnlabs.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[hsl(220,30%,18%)] hover:border-blue-500/40 text-[hsl(210,40%,75%)] hover:text-white rounded-lg transition-all text-sm"
            >
              View documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CortexMetrics() {
  const { ref, inView } = useInView();
  const metrics = [
    { value: "11.4ms", label: "Median inference latency" },
    { value: "48k", label: "Requests/sec peak throughput" },
    { value: "99.81%", label: "Confidence on standard benchmarks" },
    { value: "3.2×", label: "Memory efficiency vs baseline" },
  ];
  return (
    <section ref={ref} className="py-12 px-6 lg:px-8 border-y border-[hsl(220,30%,12%)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map(({ value, label }, i) => (
            <div
              key={label}
              className="text-center"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.5s ease ${i * 80}ms` }}
            >
              <div className="text-3xl font-bold text-white tabular-nums mb-1">{value}</div>
              <div className="text-xs text-[hsl(215,20%,45%)]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CortexSpecs() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Terminal */}
          <div
            className="relative gradient-border rounded-2xl bg-[hsl(222,44%,7%)] p-6 overflow-hidden glow-violet"
            style={{ opacity: inView ? 1 : 0, transition: "all 0.7s ease", transform: inView ? "translateX(0)" : "translateX(-30px)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="ml-3 text-xs text-[hsl(215,20%,40%)] font-mono">cortex — inference_engine v2.4.1</div>
            </div>
            <div className="font-mono text-sm space-y-1.5 leading-relaxed">
              <div className="text-[hsl(215,20%,40%)]"># Initialize Cortex inference session</div>
              <div>
                <span className="text-violet-400">import</span>
                <span className="text-white"> cortex</span>
              </div>
              <div className="mt-2">
                <span className="text-blue-400">engine</span>
                <span className="text-white"> = cortex.</span>
                <span className="text-yellow-300">InferenceEngine</span>
                <span className="text-white">(</span>
              </div>
              <div className="pl-4">
                <span className="text-orange-300">model</span><span className="text-white">=</span>
                <span className="text-green-300">"cortex-v2-ultra"</span><span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-orange-300">precision</span><span className="text-white">=</span>
                <span className="text-green-300">"fp16"</span><span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-orange-300">device</span><span className="text-white">=</span>
                <span className="text-green-300">"cuda:0"</span>
              </div>
              <div><span className="text-white">)</span></div>
              <div className="mt-2">
                <span className="text-blue-400">result</span>
                <span className="text-white"> = engine.</span>
                <span className="text-yellow-300">run</span>
                <span className="text-white">(input_tensor)</span>
              </div>
              <div className="mt-3 pt-3 border-t border-[hsl(220,30%,14%)]">
                <span className="text-[hsl(215,20%,40%)]">→ </span>
                <span className="text-green-400">Inference complete</span>
                <span className="text-white"> · </span>
                <span className="text-blue-300">11.4ms</span>
                <span className="text-white"> · </span>
                <span className="text-violet-300">99.81% confidence</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
              <span className="text-[10px] text-green-400 font-mono tracking-widest">LIVE</span>
            </div>
          </div>

          {/* Features */}
          <div
            className="space-y-5"
            style={{ opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.2s", transform: inView ? "translateX(0)" : "translateX(30px)" }}
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Sub-20ms Inference",
                desc: "Hardware-optimized kernels with quantization-aware training on standard GPU hardware."
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Deterministic Outputs",
                desc: "Seeded inference pipelines with reproducible results for regulated industries."
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                ),
                title: "Horizontal Scaling",
                desc: "Native distributed inference with zero-downtime rollouts and automatic failover."
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Model Agnostic",
                desc: "PyTorch, TensorFlow, ONNX, and custom architectures — no migration required."
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                ),
                title: "gRPC + REST APIs",
                desc: "Dual protocol support with streaming, batching, and priority queuing out of the box."
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Built-in Observability",
                desc: "Per-request latency histograms, throughput counters, and error rate dashboards."
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 group">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[hsl(220,30%,10%)] border border-[hsl(220,30%,16%)] flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                  {icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-0.5">{title}</h3>
                  <p className="text-[hsl(215,20%,50%)] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CortexCTA() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="blue" className="w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2" />
      <GridBackground />
      <div
        className="max-w-2xl mx-auto text-center transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to deploy?</h2>
        <p className="text-[hsl(215,20%,55%)] mb-8 leading-relaxed">
          Cortex is production-ready today. Get started in under 10 minutes with our hosted service, or deploy on your own infrastructure.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://cortex.threnlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all text-sm shadow-lg shadow-blue-500/20"
          >
            Start free trial
          </a>
          <Link
            href="/company#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[hsl(220,30%,18%)] hover:border-blue-500/40 text-[hsl(210,40%,75%)] hover:text-white rounded-lg transition-all text-sm"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CortexPage() {
  return (
    <PageShell>
      <CortexHero />
      <CortexMetrics />
      <CortexSpecs />
      <CortexCTA />
    </PageShell>
  );
}

import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";

function CRTXHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-20 pb-16 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="violet" className="w-[700px] h-[500px] -top-20 right-0" />
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <SectionLabel color="violet">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 pulse-dot" />
            Released — Stable
          </SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
            CRTX
          </h1>
          <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl leading-relaxed mb-8">
            Our flagship deep learning inference engine. Engineered for organizations that can't
            afford to guess — deterministic outputs, SLA-backed latency, and an architecture that
            scales horizontally without compromise.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all text-sm"
            >
              Get started with CRTX
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#"
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

function CRTXSpecs() {
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
              <div className="ml-3 text-xs text-[hsl(215,20%,40%)] font-mono">crtx — inference_engine v2.4.1</div>
            </div>
            <div className="font-mono text-sm space-y-1.5 leading-relaxed">
              <div className="text-[hsl(215,20%,40%)]"># Initialize CRTX inference session</div>
              <div>
                <span className="text-violet-400">import</span>
                <span className="text-white"> crtx</span>
              </div>
              <div className="mt-2">
                <span className="text-blue-400">engine</span>
                <span className="text-white"> = crtx.</span>
                <span className="text-yellow-300">InferenceEngine</span>
                <span className="text-white">(</span>
              </div>
              <div className="pl-4">
                <span className="text-orange-300">model</span>
                <span className="text-white">=</span>
                <span className="text-green-300">"crtx-v2-ultra"</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-orange-300">precision</span>
                <span className="text-white">=</span>
                <span className="text-green-300">"fp16"</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-orange-300">device</span>
                <span className="text-white">=</span>
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
              { icon: "⚡", title: "Sub-20ms Inference", desc: "Hardware-optimized kernels with quantization-aware training on standard GPU hardware." },
              { icon: "🔒", title: "Deterministic Outputs", desc: "Seeded inference pipelines with reproducible results for regulated industries." },
              { icon: "📈", title: "Horizontal Scaling", desc: "Native distributed inference with zero-downtime rollouts and automatic failover." },
              { icon: "🧠", title: "Model Agnostic", desc: "PyTorch, TensorFlow, ONNX, and custom architectures — no migration required." },
              { icon: "📡", title: "gRPC + REST APIs", desc: "Dual protocol support with streaming, batching, and priority queuing out of the box." },
              { icon: "📊", title: "Built-in Observability", desc: "Per-request latency histograms, throughput counters, and error rate dashboards." },
            ].map(({ icon, title, desc }, i) => (
              <div key={title} className="flex gap-4 group">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[hsl(220,30%,10%)] border border-[hsl(220,30%,16%)] flex items-center justify-center text-base group-hover:border-blue-500/30 transition-colors">
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

function CRTXPricing() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <SectionLabel color="blue">Pricing</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Straightforward plans</h2>
          <p className="text-[hsl(215,20%,55%)]">No usage fees on outputs. Pay for compute, not per token.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Starter",
              price: "$499",
              period: "/mo",
              desc: "For teams validating CRTX before full deployment.",
              features: ["Up to 10M inferences/month", "Single GPU node", "REST API access", "Email support", "99.5% uptime SLA"],
              cta: "Start free trial",
              highlighted: false,
            },
            {
              name: "Production",
              price: "$2,400",
              period: "/mo",
              desc: "For teams running CRTX in critical workloads.",
              features: ["Unlimited inferences", "Multi-GPU cluster", "gRPC + REST APIs", "Priority support", "99.9% uptime SLA", "Custom model loading", "Audit logging"],
              cta: "Get Production",
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              desc: "On-premise, air-gapped, and fully custom deployments.",
              features: ["On-premise deployment", "Air-gap support", "Custom SLAs", "Dedicated engineers", "Compliance documentation", "Custom contracts"],
              cta: "Contact sales",
              highlighted: false,
            },
          ].map(({ name, price, period, desc, features, cta, highlighted }) => (
            <div
              key={name}
              className={`rounded-xl p-6 border transition-all duration-300 ${
                highlighted
                  ? "border-blue-500/40 bg-blue-500/5 glow-blue"
                  : "border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)]"
              }`}
              style={{ opacity: inView ? 1 : 0, transition: "all 0.6s ease" }}
            >
              {highlighted && (
                <div className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3">Most Popular</div>
              )}
              <div className="mb-4">
                <div className="text-white font-bold text-lg mb-1">{name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{price}</span>
                  <span className="text-[hsl(215,20%,45%)] text-sm">{period}</span>
                </div>
                <p className="text-sm text-[hsl(215,20%,50%)] mt-2">{desc}</p>
              </div>
              <ul className="space-y-2 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[hsl(215,20%,60%)]">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  highlighted
                    ? "bg-blue-500 hover:bg-blue-400 text-white"
                    : "border border-[hsl(220,30%,20%)] hover:border-blue-500/30 text-[hsl(210,40%,75%)] hover:text-white"
                }`}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingProducts() {
  const { ref, inView } = useInView();
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
          {[
            {
              codename: "PROJECT AXON",
              desc: "A distributed training framework for multi-modal foundation models. Designed to reduce training costs by 60% without sacrificing convergence.",
              status: "Alpha — Q3 2025",
              progress: 72,
              color: "blue",
            },
            {
              codename: "PROJECT SYNAPSE",
              desc: "Real-time model adaptation. Continuous fine-tuning on live production data with automatic drift detection and rollback mechanisms.",
              status: "Internal Testing",
              progress: 45,
              color: "violet",
            },
            {
              codename: "PROJECT CORTEX",
              desc: "A unified observability layer for AI systems. Inference tracing, attention visualization, and automated anomaly detection.",
              status: "Research Phase",
              progress: 28,
              color: "cyan",
            },
          ].map(({ codename, desc, status, progress, color }, i) => (
            <div
              key={codename}
              className="rounded-xl border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] p-6"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 100}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono tracking-widest text-[hsl(215,20%,40%)]">{codename}</span>
                <div className={`w-2 h-2 rounded-full pulse-dot ${
                  color === "blue" ? "bg-blue-400" : color === "violet" ? "bg-violet-400" : "bg-cyan-400"
                }`} />
              </div>
              <p className="text-sm text-[hsl(215,20%,55%)] leading-relaxed mb-4">{desc}</p>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[hsl(215,20%,40%)]">{status}</span>
                  <span className="font-mono text-[hsl(215,20%,40%)]">{progress}%</span>
                </div>
                <div className="h-1 rounded-full bg-[hsl(220,30%,12%)]">
                  <div
                    className={`h-full rounded-full ${color === "blue" ? "bg-blue-500" : color === "violet" ? "bg-violet-500" : "bg-cyan-400"}`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <button className="mt-4 w-full py-2 text-xs border border-[hsl(220,30%,18%)] rounded-lg text-[hsl(215,20%,45%)] hover:text-white hover:border-[hsl(220,30%,28%)] transition-all">
                Request early access
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <PageShell>
      <CRTXHero />
      <CRTXSpecs />
      <CRTXPricing />
      <UpcomingProducts />
    </PageShell>
  );
}

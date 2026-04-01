import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";

function TechHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-20 pb-16 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="blue" className="w-[800px] h-[600px] -top-20 -left-40" />
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <SectionLabel color="blue">Core Infrastructure</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
            Built on<br />first principles
          </h1>
          <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl leading-relaxed">
            Every layer of our stack is designed under production constraints.
            We don't abstract away complexity — we engineer through it.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfrastructureSection() {
  const { ref, inView } = useInView();
  return (
    <section id="runtime" ref={ref} className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-10 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Infrastructure layers</h2>
          <p className="text-[hsl(215,20%,55%)]">Three core components that power every Threnlabs product.</p>
        </div>

        <div className="space-y-6">
          {[
            {
              id: "runtime",
              title: "CRTX Runtime",
              tag: "Compute Layer",
              tagColor: "text-blue-300 bg-blue-500/10 border-blue-500/20",
              border: "border-blue-500/15",
              stats: [
                { label: "Peak throughput", value: "48,000 req/s" },
                { label: "Memory efficiency", value: "3.2x vs baseline" },
                { label: "CUDA version", value: "12.4" },
              ],
              desc: "Custom CUDA kernels and memory management optimized for batch inference at scale. Our runtime achieves 23% better throughput than ONNX Runtime on standard vision and language workloads by implementing direct cuDNN primitives with fused kernel execution and zero-copy tensor passing between pipeline stages.",
              detail: "The runtime exposes a simple engine API while abstracting stream-level parallelism, kernel fusion, and async memory management. You write model inference code. We handle everything underneath.",
            },
            {
              id: "scheduler",
              title: "Cortex Scheduler",
              tag: "Orchestration",
              tagColor: "text-violet-300 bg-violet-500/10 border-violet-500/20",
              border: "border-violet-500/15",
              stats: [
                { label: "GPU memory defrag", value: "Automatic" },
                { label: "OOM errors", value: "0 in production" },
                { label: "Context switches", value: "<2ms overhead" },
              ],
              desc: "Priority-aware job scheduling with GPU memory defragmentation and preemptive context switching. Cortex Scheduler manages the full lifecycle of inference jobs across a cluster — admission control, priority queuing, SLA-aware preemption, and hardware-aware placement.",
              detail: "Jobs are represented as DAGs with per-node SLA constraints. The scheduler solves bin-packing under memory and latency constraints in real time, rebalancing as workloads shift without service interruption.",
            },
            {
              id: "datamesh",
              title: "DataMesh Pipeline",
              tag: "Data Layer",
              tagColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
              border: "border-cyan-500/15",
              stats: [
                { label: "Peak throughput", value: "40 GB/s" },
                { label: "Format support", value: "12+" },
                { label: "Backpressure", value: "Automatic" },
              ],
              desc: "High-throughput data ingestion with format-agnostic preprocessing. Handles 40GB/s peak throughput with automatic backpressure management, schema inference, and zero-copy reads from object storage, message queues, and streaming sources.",
              detail: "The pipeline is stateless by design — preprocessing logic is expressed as composable transforms, making it trivial to add new data sources or preprocessing steps without affecting downstream inference.",
            },
          ].map(({ id, title, tag, tagColor, border, stats, desc, detail }, i) => (
            <div
              key={id}
              id={id}
              className={`rounded-xl border ${border} bg-[hsl(222,44%,7%)] p-8`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 120}ms`,
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <div className={`inline-flex px-2.5 py-0.5 rounded text-xs border ${tagColor} mb-3 font-medium`}>{tag}</div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-6">
                  {stats.map(({ label, value }) => (
                    <div key={label} className="text-right">
                      <div className="text-white font-bold text-lg tabular-nums">{value}</div>
                      <div className="text-xs text-[hsl(215,20%,40%)]">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[hsl(215,20%,55%)] leading-relaxed mb-3">{desc}</p>
              <p className="text-sm text-[hsl(215,20%,43%)] leading-relaxed border-t border-[hsl(220,30%,13%)] pt-3 mt-3">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const { ref, inView } = useInView();

  const capabilities = [
    { id: "nas", label: "Neural Architecture Search", value: 94, color: "blue", desc: "Automated search over transformer, CNN, and hybrid architectures with hardware-aware constraints." },
    { id: "distributed", label: "Distributed Training", value: 88, color: "violet", desc: "Pipeline, tensor, and data parallelism with gradient checkpointing and mixed precision." },
    { id: "inference", label: "Inference Optimization", value: 97, color: "cyan", desc: "Kernel fusion, quantization, batching, and speculative decoding across all major model families." },
    { id: "compression", label: "Model Compression", value: 91, color: "blue", desc: "Structured pruning, knowledge distillation, and INT4/FP16 quantization with minimal accuracy loss." },
  ];

  return (
    <section id="nas" ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Technical capabilities</h2>
          <p className="text-[hsl(215,20%,55%)]">Where our stack performs against the best available alternatives.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map(({ id, label, value, color, desc }, i) => (
            <div
              key={id}
              id={id}
              className="bg-[hsl(222,44%,7%)] border border-[hsl(220,30%,14%)] rounded-xl p-6"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${i * 100}ms`,
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-semibold text-sm">{label}</h3>
                <span className="text-sm font-mono tabular-nums text-[hsl(215,20%,55%)]">{value}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[hsl(220,30%,12%)] mb-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 delay-300 ${
                    color === "blue" ? "bg-blue-500" : color === "violet" ? "bg-violet-500" : "bg-cyan-400"
                  }`}
                  style={{ width: inView ? `${value}%` : "0%" }}
                />
              </div>
              <p className="text-xs text-[hsl(215,20%,45%)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-10 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Compatible with your stack</h2>
          <p className="text-[hsl(215,20%,55%)]">CRTX adapts to what you already use — no migration required.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "PyTorch", badge: "Native" },
            { name: "TensorFlow", badge: "Native" },
            { name: "ONNX", badge: "Native" },
            { name: "JAX", badge: "Beta" },
            { name: "CUDA 11/12", badge: "Supported" },
            { name: "ROCm", badge: "Beta" },
            { name: "Kubernetes", badge: "Helm chart" },
            { name: "Docker", badge: "Official image" },
          ].map(({ name, badge }, i) => (
            <div
              key={name}
              className="bg-[hsl(222,44%,7%)] border border-[hsl(220,30%,14%)] rounded-xl p-5 flex flex-col gap-2 hover:border-blue-500/20 transition-all"
              style={{
                opacity: inView ? 1 : 0,
                transition: `all 0.5s ease ${i * 60}ms`,
              }}
            >
              <div className="text-white font-semibold text-sm">{name}</div>
              <div className="text-xs px-2 py-0.5 rounded bg-[hsl(220,30%,12%)] text-[hsl(215,20%,50%)] w-fit">{badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TechnologyPage() {
  return (
    <PageShell>
      <TechHero />
      <InfrastructureSection />
      <CapabilitiesSection />
      <TechStackSection />
    </PageShell>
  );
}

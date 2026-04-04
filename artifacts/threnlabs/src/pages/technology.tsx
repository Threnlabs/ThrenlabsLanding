import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";
import { SEO } from "@/components/seo";


function TechHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-20 pb-16 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="blue" className="w-[50rem] h-[37.5rem] -top-20 -left-40" />
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
              title: "Cosmos Runtime",
              tag: "Compute Layer",
              tagColor: "text-blue-300 bg-blue-500/10 border-blue-500/20",
              border: "border-blue-500/15",
              desc: "Custom CUDA kernels and memory management optimized for batch inference at scale. Our runtime achieves superior throughput on standard vision and language workloads by implementing direct cuDNN primitives with fused kernel execution and zero-copy tensor passing between pipeline stages.",
              detail: "The runtime exposes a simple engine API while abstracting stream-level parallelism, kernel fusion, and async memory management. You write model inference code. We handle everything underneath.",
            },
            {
              id: "scheduler",
              title: "Cosmos Scheduler",
              tag: "Orchestration",
              tagColor: "text-violet-300 bg-violet-500/10 border-violet-500/20",
              border: "border-violet-500/15",
              desc: "Priority-aware job scheduling with GPU memory defragmentation and preemptive context switching. Cosmos Scheduler manages the full lifecycle of inference jobs across a cluster — admission control, priority queuing, SLA-aware preemption, and hardware-aware placement.",
              detail: "Jobs are represented as DAGs with per-node SLA constraints. The scheduler solves bin-packing under memory and latency constraints in real time, rebalancing as workloads shift without service interruption.",
            },
            {
              id: "datamesh",
              title: "DataMesh Pipeline",
              tag: "Data Layer",
              tagColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
              border: "border-cyan-500/15",
              desc: "High-throughput data ingestion with format-agnostic preprocessing. Handles extreme peak throughput with automatic backpressure management, schema inference, and zero-copy reads from object storage, message queues, and streaming sources.",
              detail: "The pipeline is stateless by design — preprocessing logic is expressed as composable transforms, making it trivial to add new data sources or preprocessing steps without affecting downstream inference.",
            },
          ].map(({ id, title, tag, tagColor, border, desc, detail }, i) => (
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
              <div className="mb-5">
                <div className={`inline-flex px-2.5 py-0.5 rounded text-xs border ${tagColor} mb-3 font-medium`}>{tag}</div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
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
          <p className="text-[hsl(215,20%,55%)]">Cosmos adapts to what you already use — no migration required.</p>
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
      <SEO
        title="Core Infrastructure Technology — Threnlabs"
        description="Explore the core infrastructure powering Threnlabs' AI products. From custom CUDA kernels to distributed inference scheduling, we build on first principles."
        canonical="https://threnlabs.com/technology"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Core Infrastructure Technology",
          "description": "Deep dive into the technology stack of Threnlabs, including Cosmos Runtime, Scheduler, and DataMesh Pipeline.",
          "publisher": {
            "@type": "Organization",
            "name": "Threnlabs"
          }
        }}
      />
      <TechHero />

      <InfrastructureSection />
      <TechStackSection />
    </PageShell>
  );
}


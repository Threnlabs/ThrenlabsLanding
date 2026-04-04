import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";
import { SEO } from "@/components/seo";


function ResearchHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-20 pb-16 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="cyan" className="w-[43.75rem] h-[31.25rem] -top-20 right-0" />
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <SectionLabel color="cyan">Research</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
            We publish<br />what we learn
          </h1>
          <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl leading-relaxed">
            Research isn't a marketing channel for us. It's how we build a better foundation
            for every product we ship.
          </p>
        </div>
      </div>
    </section>
  );
}

function PublicationsSection() {
  const { ref, inView } = useInView();

  const papers = [
    {
      id: "neurips",
      title: "Efficient Long-Context Attention for Production Inference",
      venue: "NeurIPS 2024",
      authors: ["A. Mehta", "D. Reeves", "L. Okonkwo", "J. Chen"],
      tag: "Attention Mechanisms",
      tagColor: "text-blue-300 bg-blue-500/10 border-blue-500/20",
      abstract: "We introduce a novel sparse attention pattern that optimizes memory complexity while maintaining state-of-the-art performance on downstream tasks. The method is compatible with flash attention and achieves significant speedups on long sequences.",
      impact: "Adopted in Cervix for long-context language model inference.",
    },
    {
      id: "icml",
      title: "Quantization-Aware Distillation at Scale",
      venue: "ICML 2024",
      authors: ["L. Okonkwo", "A. Mehta", "T. Sato"],
      tag: "Model Compression",
      tagColor: "text-violet-300 bg-violet-500/10 border-violet-500/20",
      abstract: "A joint training framework for knowledge distillation and quantization that significantly outperforms post-training quantization while achieving high-fidelity precision. We demonstrate that carefully scheduled distillation loss annealing prevents the collapse seen in naive joint training.",
      impact: "Enables massive model compression with minimal accuracy loss across tested benchmarks.",
    },
    {
      id: "mlsys",
      title: "Distributed Inference Scheduling under Heterogeneous Hardware",
      venue: "MLSys 2024",
      authors: ["J. Chen", "D. Reeves", "A. Mehta"],
      tag: "Systems",
      tagColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
      abstract: "We present a scheduling algorithm that achieves high utilization across mixed GPU/TPU clusters, outperforming static partition strategies. The algorithm models hardware heterogeneity as a weighted bipartite graph and solves the assignment problem with a modified Hungarian algorithm under latency constraints.",
      impact: "Powers Cervix Scheduler in production deployments.",
    },
    {
      id: "iclr",
      title: "Gradient-Free Neural Architecture Search with Surrogate Models",
      venue: "ICLR 2024",
      authors: ["T. Sato", "L. Okonkwo", "J. Chen"],
      tag: "AutoML",
      tagColor: "text-orange-300 bg-orange-500/10 border-orange-500/20",
      abstract: "We propose a surrogate-based approach to hardware-aware NAS that reduces search cost significantly compared to one-shot methods. A Gaussian process surrogate trained on a small initial population accurately predicts architecture performance, enabling Bayesian optimization over the search space without gradient computation.",
      impact: "Backbone of CalendarSync's automated architecture optimization pipeline.",
    },
  ];

  return (
    <section ref={ref} className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-10 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Publications</h2>
          <p className="text-[hsl(215,20%,55%)]">Peer-reviewed research from the Threnlabs team.</p>
        </div>

        <div className="space-y-5">
          {papers.map(({ id, title, venue, authors, tag, tagColor, abstract, impact }, i) => (
            <div
              key={id}
              id={id}
              className="group border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] rounded-xl p-7 hover:border-cyan-500/20 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${i * 80}ms`,
              }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-0.5 rounded border ${tagColor}`}>{tag}</span>
                    <span className="text-xs text-[hsl(215,20%,40%)] font-mono">{venue}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                    {title}
                  </h3>
                  <div className="text-xs text-[hsl(215,20%,40%)] mb-4">
                    {authors.join(", ")}
                  </div>
                  <p className="text-[hsl(215,20%,52%)] text-sm leading-relaxed mb-4">{abstract}</p>
                  <div className="flex items-start gap-2 bg-[hsl(220,30%,10%)] rounded-lg px-3 py-2">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-xs text-[hsl(215,20%,50%)] leading-relaxed">
                      <span className="text-cyan-400 font-medium">Product impact: </span>{impact}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 mt-1">
                  <button className="flex items-center gap-1.5 text-xs text-[hsl(215,20%,40%)] hover:text-cyan-400 transition-colors px-3 py-1.5 border border-[hsl(220,30%,16%)] rounded-lg hover:border-cyan-500/30">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    arXiv
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchAreasSection() {
  const { ref, inView } = useInView();
  return (
    <section id="inference" ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-10 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Research areas</h2>
          <p className="text-[hsl(215,20%,55%)]">Domains we actively investigate and publish in.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { 
              id: "inference", 
              icon: (
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ), 
              title: "Inference Optimization", 
              desc: "Faster model serving through kernel fusion, speculative decoding, continuous batching, and hardware-specific compilation." 
            },
            { 
              id: "efficiency", 
              icon: (
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ), 
              title: "Model Efficiency", 
              desc: "Compression, quantization, distillation, and pruning methods that preserve accuracy at a fraction of the compute cost." 
            },
            { 
              icon: (
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              ), 
              title: "Distributed Systems", 
              desc: "Scheduling, communication, and fault tolerance in heterogeneous GPU clusters running large-scale inference workloads." 
            },
            { 
              icon: (
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              ), 
              title: "AutoML & NAS", 
              desc: "Automated discovery of model architectures optimized for specific hardware targets and latency constraints." 
            },
            { 
              icon: (
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ), 
              title: "Reliable AI", 
              desc: "Determinism, calibration, uncertainty estimation, and formal verification methods for production ML systems." 
            },
            { 
              icon: (
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>
              ), 
              title: "Streaming Inference", 
              desc: "Long-context, streaming, and incremental inference for real-time applications with strict latency budgets." 
            },
          ].map(({ icon, title, desc, id }, i) => (
            <div
              key={title}
              id={id}
              className="bg-[hsl(222,44%,7%)] border border-[hsl(220,30%,14%)] rounded-xl p-6 hover:border-cyan-500/20 transition-all"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 80}ms`,
              }}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-sm text-[hsl(215,20%,48%)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ResearchPage() {
  return (
    <PageShell>
      <SEO 
        title="Research at Threnlabs — AI Efficiency and Infrastructure" 
        description="Threnlabs conducts peer-reviewed research in inference optimization, model efficiency, and distributed systems. We build better foundations for every product we ship."
        canonical="https://threnlabs.com/research"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Research at Threnlabs",
          "description": "Peer-reviewed research and publications in AI efficiency, inference optimization, and distributed systems.",
          "publisher": {
            "@type": "Organization",
            "name": "Threnlabs"
          }
        }}
      />
      <ResearchHero />

      <PublicationsSection />
      <ResearchAreasSection />
    </PageShell>
  );
}

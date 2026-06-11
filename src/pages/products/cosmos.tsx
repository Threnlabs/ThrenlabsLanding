import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";
import { SEO } from "@/components/seo";

function CosmosHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-24 pb-24 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="blue" className="w-[43.75rem] h-[31.25rem] -top-20 left-0" />
      <GridBackground />
      <div className="max-w-7xl mx-auto text-center">
        <div
          className="transition-all duration-700 flex flex-col items-center"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <Link href="/products" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Products
          </Link>
          <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tight mb-6">
            COSMOS
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-bold mb-6">
            The AI Remains Accountable.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed mb-12 mx-auto">
            COSMOS is a reasoning-first coding workspace built for advancing AI in educational institutions. It maintains a persistent code-context graph that enables researchers, students, and lab directors to collaborate on complex codebase development with strict integrity.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/company#contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-2xl transition-all hover:scale-105 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] text-lg active:scale-95 border border-primary"
            >
              Get Started
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="#comparison"
              className="inline-flex items-center gap-2 px-10 py-5 border border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground rounded-2xl transition-all text-lg font-medium"
            >
              Product Comparison
            </a>
          </div>

          {/* Cosmos IDE Mockup Placeholder */}
          <div className="mt-16 w-full max-w-4xl mx-auto border border-border bg-card rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col aspect-[16/10] text-left">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/40" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/40" />
                <span className="w-3 h-3 rounded-full bg-green-400/40" />
              </div>
              <span className="text-xs font-mono text-muted-foreground/60 select-none">cosmos-ide — inference.cu</span>
            </div>

            {/* Editor Workspace */}
            <div className="flex-1 flex gap-4 overflow-hidden">
              {/* File tree */}
              <div className="w-1/5 border-r border-border pr-4 flex flex-col gap-3">
                <div className="text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase">Workspace</div>
                <div className="h-3.5 w-11/12 bg-muted rounded" />
                <div className="h-3.5 w-5/6 bg-primary/10 border border-primary/20 text-primary px-1.5 py-0.5 rounded text-[10px] font-mono">inference.cu</div>
                <div className="h-3.5 w-4/5 bg-muted rounded" />
                <div className="h-3.5 w-3/4 bg-muted rounded" />
              </div>
              
              {/* Code window with tokens */}
              <div className="flex-1 flex flex-col gap-3 font-mono text-xs overflow-y-auto">
                <div className="flex gap-2">
                  <span className="text-blue-500 font-bold">#include</span>
                  <span className="text-green-600">"cosmos_runtime.h"</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-500 font-bold">__global__ void</span>
                  <span className="text-yellow-600">fused_attention_kernel</span>
                  <span className="text-muted-foreground">{"(...) {"}</span>
                </div>
                <div className="pl-4 flex flex-col gap-2 border-l border-border">
                  <div className="text-slate-400">// Load KV cache to shared memory using zero-copy primitive</div>
                  <div className="flex gap-2">
                    <span className="text-blue-500">extern __shared__</span>
                    <span className="text-purple-500">float</span>
                    <span>s_mem[];</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-500">int</span>
                    <span>tid = threadIdx.x;</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-500">if</span>
                    <span>{"(tid < max_context_len) {"}</span>
                  </div>
                  <div className="pl-4 border-l border-border/50 text-slate-400">
                    s_mem[tid] = __ldg(&amp;global_attention_weights[tid]);
                  </div>
                  <span>{"}"}</span>
                </div>
                <span>{"}"}</span>
              </div>

              {/* Context Graph Sidebar (exclusive to Cosmos) */}
              <div className="w-1/4 border-l border-border pl-4 flex flex-col gap-4">
                <div className="text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase">Context Graph</div>
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 flex flex-col gap-2">
                  <div className="text-[10px] font-mono text-primary font-bold">ACTIVE INTENTS</div>
                  <div className="h-1.5 w-full bg-primary/20 rounded" />
                  <div className="h-1.5 w-5/6 bg-primary/10 rounded" />
                </div>
                <div className="flex flex-col gap-2 text-[10px] font-mono text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span>0.25x token cost target</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span>Memory leaks checked</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                    <span>Validating drift...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CosmosProblem() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} id="product" className="py-24 px-6 lg:px-8 border-y border-border bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-30px)" }}
          >
            <SectionLabel color="blue">The Core Foundation</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              AI writes fast. <span className="text-muted-foreground/85">But it loses the plot.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              You describe something, the AI builds it. 10 sessions later, the code becomes opaque.
              The AI forgets your primary purpose, creates redundant files, and wastes tokens on code you never needed.
              You're left untangling a mess that runs but solves the wrong problem.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "The 10-Session Wall", desc: "Where big models go from genius to forgetful, losing track of your primary architecture." },
                { title: "Token & File Bloat", desc: "Redundant files and unnecessary implementations that drain your token budget." },
                { title: "Opaque Implementation", desc: "Code that works in isolation but becomes a black box that hides structural drift." },
                { title: "Prompt Fragmentation", desc: "The constant hassle of maintaining external prompt spaces to 'fix' AI behavior." },
              ].map((item, i) => (
                <div key={i} className="group">
                  <h3 className="text-foreground font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-4 transition-all duration-700"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(30px)" }}
          >
            {[
              { num: "01", text: "Changes break things that were working flawlessly yesterday." },
              { num: "02", text: "We pay for elite reasoning, but default to zero architectural memory." },
              { num: "03", text: "Codebases degrade into a worse mess than the original unstructured code." },
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all shadow-sm group">
                <span className="text-3xl font-black text-primary/20 group-hover:text-primary/40 transition-colors mb-4 block">{stat.num}</span>
                <p className="text-lg text-foreground/90 font-medium leading-relaxed">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CosmosSolution() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <SectionLabel color="blue">The Solution</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Reason first. Act second.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
            COSMOS eliminates the frustration of AI building the wrong solution.
            We preserve your intent, so the code remains transparent and accountable.
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="p-10 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <h3 className="text-2xl font-bold text-foreground mb-6">Code-Context Graph</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We have managed to create and maintain a unified code-context graph.
                It synchronizes all changes in the codebase, tracking user intents meticulously
                with graph traversal algorithms to retain deep architectural understanding.
              </p>
              <ul className="space-y-4">
                {["Preserves historical rationale", "Elimilates repeated untangling", "Retains structural integrity"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <h3 className="text-2xl font-bold text-foreground mb-6">Two-Factor Structural Validation</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Before writing a single line of code, requested modifications are dry-run against the context graph.
                If structural drift or downstream conflicts are detected, the changes pop into an inbox for explicit human validation.
              </p>
              <ul className="space-y-4">
                {["Semantic ripple detection", "Auto-prioritized conflict inbox", "Safe AI execution guarantees"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CosmosComparison() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} id="comparison" className="py-24 px-6 lg:px-8 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel color="blue">The Difference</SectionLabel>
          <h2 className="text-4xl font-bold text-foreground mt-4">Why COSMOS is "Reasoning First"</h2>
          <p className="text-muted-foreground mt-4">Comparing the next generation of development.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-6 px-4 text-sm font-bold text-muted-foreground/80 uppercase tracking-widest">Capabilities</th>
                <th className="py-6 px-4 text-sm font-bold text-primary uppercase tracking-widest bg-primary/5">COSMOS</th>
                <th className="py-6 px-4 text-sm font-bold text-muted-foreground/80 uppercase tracking-widest">Typical "Vibe" Apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-foreground/85">
              {[
                { feat: "Architectural Memory", cosmos: "Persistent intent-node graph traversal", other: "Single session or simple RAG" },
                { feat: "Change Validation", cosmos: "Two-Factor Structural Dry-run", other: "Blind file overwriting" },
                { feat: "Code Accountability", cosmos: "Audited back to implementation nodes", other: "Opaque LLM generations" },
                { feat: "Complex Maintenance", cosmos: "Scales with project depth", other: "Context loss over time" },
                { feat: "Workflow Basis", cosmos: "Reasoning First (Plan -> Validate -> Execute)", other: "Action First (Query -> File Change)" },
                { feat: "Cost Efficiency", cosmos: "1/4th vs competitors (Targeted reasoning)", other: "High (Token wastage on redundant files)" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors group">
                  <td className="py-5 px-4 font-semibold text-foreground">{row.feat}</td>
                  <td className="py-5 px-4 bg-primary/5 text-primary font-semibold">{row.cosmos}</td>
                  <td className="py-5 px-4 text-muted-foreground">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


export default function CosmosPage() {
  return (
    <PageShell>
      <SEO
        title="Cosmos | Reasoning-First IDE for University Research Labs"
        description="Advancing AI in education with COSMOS, the reasoning-first code editor and development workspace. Ideal for university computer science labs and academic research."
        canonical="https://threnlabs.com/products/cosmos"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Cosmos",
          "operatingSystem": "All",
          "applicationCategory": "DeveloperApplication",
          "description": "Reasoning-first code editor and development workspace for advancing AI applications in university laboratories, schools, and academic research.",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          }
        }}
      />
      <CosmosHero />
      <CosmosProblem />
      <CosmosSolution />
      <CosmosComparison />
    </PageShell>
  );
}

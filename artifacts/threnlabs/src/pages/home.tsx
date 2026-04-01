import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(222,47%,5%)]/90 backdrop-blur-xl border-b border-[hsl(220,30%,16%)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-blue-500 rounded-sm rotate-45 scale-75 group-hover:scale-90 transition-transform duration-300" />
            <div className="absolute inset-0 bg-violet-500 rounded-sm rotate-45 scale-50 group-hover:scale-60 transition-transform duration-300 opacity-70" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Thren<span className="text-blue-400">labs</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Products", "Technology", "Research", "Company"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[hsl(215,20%,55%)] hover:text-white transition-colors duration-200 tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm text-[hsl(215,20%,55%)] hover:text-white transition-colors px-4 py-1.5"
          >
            Sign in
          </a>
          <a
            href="#crtx"
            className="text-sm bg-blue-500 hover:bg-blue-400 text-white px-4 py-1.5 rounded transition-all duration-200 font-medium"
          >
            Get CRTX
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[hsl(222,44%,7%)] border-b border-[hsl(220,30%,16%)] px-6 py-4 flex flex-col gap-4">
          {["Products", "Technology", "Research", "Company"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[hsl(215,20%,55%)] hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#crtx"
            className="text-sm bg-blue-500 text-white px-4 py-2 rounded text-center font-medium mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Get CRTX
          </a>
        </div>
      )}
    </nav>
  );
}

function WaveformVisual() {
  return (
    <div className="flex items-end gap-1 h-12">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div
          key={i}
          className={`w-1.5 rounded-full bg-blue-400 wave-bar-${i}`}
          style={{ minHeight: "4px" }}
        />
      ))}
    </div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
  );
}

function RadialGlow({ color = "blue", className = "" }: { color?: "blue" | "violet"; className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        background: color === "blue"
          ? "radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, transparent 70%)"
          : "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)",
      }}
    />
  );
}

function HeroSection() {
  const [typed, setTyped] = useState("");
  const words = ["Production AI.", "Deep Learning.", "Real Intelligence.", "CRTX."];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? 40 : charIdx === current.length ? 2000 : 60;

    const timeout = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setTyped(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setTyped(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <GridBackground />
      <RadialGlow color="blue" className="w-[800px] h-[600px] -top-40 -left-40" />
      <RadialGlow color="violet" className="w-[600px] h-[500px] -bottom-20 -right-20" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-dot" />
          AI/DL Products — Production Grade
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
          We build
          <br />
          <span className="shimmer-text">
            {typed}
            <span className="cursor-blink text-blue-400">|</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[hsl(215,20%,55%)] max-w-2xl mx-auto leading-relaxed mb-10">
          Threnlabs engineers production-grade AI and deep learning systems that
          developers and enterprises can actually trust — not demos, not previews,
          but infrastructure that holds under pressure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#crtx"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-200 text-sm overflow-hidden"
          >
            <span className="relative z-10">Explore CRTX</span>
            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#technology"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[hsl(220,30%,20%)] hover:border-blue-500/50 text-[hsl(210,40%,75%)] hover:text-white rounded-lg transition-all duration-200 text-sm"
          >
            Our Technology
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "99.7%", label: "Model Accuracy" },
            { value: "<12ms", label: "Inference Latency" },
            { value: "1B+", label: "Parameters Served" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white tabular-nums">{value}</div>
              <div className="text-xs text-[hsl(215,20%,45%)] mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="text-xs text-[hsl(215,20%,55%)] tracking-widest uppercase">Scroll</div>
        <div className="w-px h-10 bg-gradient-to-b from-blue-400 to-transparent" />
      </div>
    </section>
  );
}

function CRTXSection() {
  const { ref, inView } = useInView();

  return (
    <section id="crtx" ref={ref} className="relative py-32 overflow-hidden">
      <RadialGlow color="violet" className="w-[700px] h-[500px] top-0 right-0" />
      <GridBackground />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 pulse-dot" />
            Primary Product — Released
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            CRTX
          </h2>
          <p className="text-[hsl(215,20%,55%)] text-lg max-w-2xl mb-16 leading-relaxed">
            Our flagship deep learning inference system. CRTX is engineered for
            organizations that can't afford to guess — deterministic outputs,
            measurable performance, and an architecture that scales horizontally
            without compromise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product visual */}
          <div
            className="relative transition-all duration-700 delay-200"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-40px)" }}
          >
            <div className="relative gradient-border rounded-2xl bg-[hsl(222,44%,7%)] p-6 overflow-hidden glow-violet float-animation">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="ml-3 text-xs text-[hsl(215,20%,40%)] font-mono">crtx — inference_engine</div>
              </div>

              {/* Code content */}
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

              {/* Live indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                <span className="text-[10px] text-green-400 font-mono tracking-widest">LIVE</span>
              </div>

              {/* Waveform at bottom */}
              <div className="mt-5 pt-4 border-t border-[hsl(220,30%,14%)] flex items-center gap-4">
                <WaveformVisual />
                <div className="text-xs text-[hsl(215,20%,40%)] font-mono">
                  Processing stream...
                </div>
              </div>
            </div>
          </div>

          {/* Feature list */}
          <div
            className="space-y-6 transition-all duration-700 delay-300"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(40px)" }}
          >
            {[
              {
                icon: "⚡",
                title: "Sub-20ms Inference",
                desc: "Hardware-optimized kernels with quantization-aware training. CRTX achieves production latency targets on standard GPU hardware without compromising model integrity.",
              },
              {
                icon: "🔒",
                title: "Deterministic Outputs",
                desc: "Seeded inference pipelines with reproducible results. Every run produces the same output given the same input — essential for regulated industries.",
              },
              {
                icon: "📈",
                title: "Horizontal Scaling",
                desc: "Native distributed inference across node clusters. Load-balanced model sharding with zero-downtime rollouts and automatic failover.",
              },
              {
                icon: "🧠",
                title: "Model Agnostic",
                desc: "Supports PyTorch, TensorFlow, ONNX, and custom architectures. CRTX adapts to your existing model stack rather than forcing migration.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="flex gap-4 group transition-all duration-700"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(220,30%,10%)] border border-[hsl(220,30%,16%)] flex items-center justify-center text-lg group-hover:border-blue-500/40 transition-colors">
                  {icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
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

function TechnologySection() {
  const { ref, inView } = useInView();

  const capabilities = [
    {
      label: "Neural Architecture Search",
      value: 94,
      color: "blue",
    },
    {
      label: "Distributed Training",
      value: 88,
      color: "violet",
    },
    {
      label: "Inference Optimization",
      value: 97,
      color: "cyan",
    },
    {
      label: "Model Compression",
      value: 91,
      color: "blue",
    },
  ];

  return (
    <section id="technology" ref={ref} className="relative py-32 overflow-hidden">
      <GridBackground />
      <RadialGlow color="blue" className="w-[800px] h-[600px] -top-20 -left-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs tracking-widest uppercase mb-5">
            Core Infrastructure
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Built on first principles
          </h2>
          <p className="text-[hsl(215,20%,55%)] text-lg max-w-2xl leading-relaxed">
            Every layer of our stack is designed with production constraints in mind.
            We don't abstract away complexity — we engineer through it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "CRTX Runtime",
              desc: "Custom CUDA kernels and memory management optimized for batch inference at scale. Beats ONNX Runtime benchmarks by 23% on standard workloads.",
              tag: "Compute Layer",
              gradient: "from-blue-500/10 to-transparent",
              border: "border-blue-500/20",
              tagColor: "text-blue-300 bg-blue-500/10 border-blue-500/20",
            },
            {
              title: "Cortex Scheduler",
              desc: "Priority-aware job scheduling with GPU memory defragmentation and preemptive context switching. Zero OOM errors in production workloads.",
              tag: "Orchestration",
              gradient: "from-violet-500/10 to-transparent",
              border: "border-violet-500/20",
              tagColor: "text-violet-300 bg-violet-500/10 border-violet-500/20",
            },
            {
              title: "DataMesh Pipeline",
              desc: "High-throughput data ingestion with format-agnostic preprocessing. Handles 40GB/s peak throughput with automatic backpressure management.",
              tag: "Data Layer",
              gradient: "from-cyan-500/10 to-transparent",
              border: "border-cyan-500/20",
              tagColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
            },
          ].map(({ title, desc, tag, gradient, border, tagColor }, i) => (
            <div
              key={title}
              className={`relative rounded-xl border ${border} bg-gradient-to-br ${gradient} bg-[hsl(222,44%,7%)] p-6 group hover:scale-[1.02] transition-all duration-300`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.7s ease ${i * 120}ms`,
              }}
            >
              <div className={`inline-flex px-2.5 py-0.5 rounded text-xs border ${tagColor} mb-4 font-medium`}>
                {tag}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-[hsl(215,20%,50%)] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Capability bars */}
        <div
          className="grid md:grid-cols-2 gap-8 transition-all duration-700 delay-300"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          {capabilities.map(({ label, value, color }) => (
            <div key={label}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[hsl(210,40%,80%)]">{label}</span>
                <span className="text-sm font-mono text-[hsl(215,20%,55%)]">{value}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[hsl(220,30%,12%)] overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 delay-500 ${
                    color === "blue" ? "bg-blue-500" : color === "violet" ? "bg-violet-500" : "bg-cyan-400"
                  }`}
                  style={{ width: inView ? `${value}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const { ref, inView } = useInView();

  return (
    <section id="company" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
      <GridBackground />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs tracking-widest uppercase mb-5">
            Why Threnlabs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The last AI company you'll need
          </h2>
          <p className="text-[hsl(215,20%,55%)] text-lg max-w-2xl mx-auto leading-relaxed">
            We don't compete on benchmark theater. We build systems that hold up
            when your business depends on them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "Production First",
              desc: "Every design decision is made under production constraints. We don't ship what we can't maintain.",
            },
            {
              number: "02",
              title: "No Black Boxes",
              desc: "Full interpretability tools, audit logs, and decision traces. You understand what your model is doing and why.",
            },
            {
              number: "03",
              title: "Latency Guarantees",
              desc: "SLA-backed inference latency with financial penalties if we miss. We put our guarantees in writing.",
            },
            {
              number: "04",
              title: "On-Premise Ready",
              desc: "Air-gapped deployment support for regulated industries. Your data never leaves your infrastructure.",
            },
            {
              number: "05",
              title: "Model Ownership",
              desc: "You own your fine-tuned weights, your data, your outputs. No lock-in, no revenue share on model outputs.",
            },
            {
              number: "06",
              title: "Research Depth",
              desc: "Our team publishes at NeurIPS, ICML, and ICLR. We don't use research as marketing — we do it to build better products.",
            },
          ].map(({ number, title, desc }, i) => (
            <div
              key={number}
              className="group p-6 rounded-xl border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] hover:border-blue-500/30 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 80}ms`,
              }}
            >
              <div className="text-xs font-mono text-[hsl(215,20%,35%)] mb-3 group-hover:text-blue-400/60 transition-colors">
                {number}
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[hsl(215,20%,50%)] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComingSoonSection() {
  const { ref, inView } = useInView();

  return (
    <section id="products" ref={ref} className="relative py-32 overflow-hidden">
      <RadialGlow color="blue" className="w-[600px] h-[500px] top-0 right-0 opacity-60" />
      <RadialGlow color="violet" className="w-[500px] h-[400px] bottom-0 left-0 opacity-60" />
      <GridBackground />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[hsl(220,30%,20%)] bg-[hsl(220,30%,10%)] text-[hsl(215,20%,55%)] text-xs tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 pulse-dot" />
            Coming Soon
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Next-generation products in development
          </h2>
          <p className="text-[hsl(215,20%,55%)] text-lg max-w-xl mx-auto">
            We're building quietly. The next releases will change how teams interact
            with large-scale AI infrastructure.
          </p>
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
              desc: "Real-time model adaptation. Continuous fine-tuning on live production data streams with automatic drift detection and rollback mechanisms.",
              status: "Internal Testing",
              progress: 45,
              color: "violet",
            },
            {
              codename: "PROJECT CORTEX",
              desc: "A unified observability layer for AI systems. Inference tracing, attention visualization, and automated anomaly detection in production pipelines.",
              status: "Research Phase",
              progress: 28,
              color: "cyan",
            },
          ].map(({ codename, desc, status, progress, color }, i) => (
            <div
              key={codename}
              className="relative rounded-xl border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] p-6 overflow-hidden group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.7s ease ${i * 120}ms`,
              }}
            >
              {/* Blurred overlay to suggest secrecy */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(222,47%,5%)]/60 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-xs font-mono tracking-widest text-[hsl(215,20%,40%)]">
                    {codename}
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full pulse-dot ${
                      color === "blue" ? "bg-blue-400" : color === "violet" ? "bg-violet-400" : "bg-cyan-400"
                    }`}
                  />
                </div>

                <p className="text-[hsl(215,20%,60%)] text-sm leading-relaxed mb-5">{desc}</p>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-[hsl(215,20%,45%)]">{status}</span>
                    <span className="font-mono text-[hsl(215,20%,45%)]">{progress}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-[hsl(220,30%,12%)]">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 delay-700 ${
                        color === "blue" ? "bg-blue-500" : color === "violet" ? "bg-violet-500" : "bg-cyan-400"
                      }`}
                      style={{ width: inView ? `${progress}%` : "0%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 text-center transition-all duration-700 delay-400"
          style={{ opacity: inView ? 1 : 0 }}
        >
          <p className="text-sm text-[hsl(215,20%,40%)]">
            Interested in early access?{" "}
            <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4">
              Join the waitlist
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-violet-950/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsl(220,30%,14%)] rounded-2xl overflow-hidden border border-[hsl(220,30%,14%)]"
        >
          {[
            { value: "340+", label: "Enterprise Clients", color: "blue" },
            { value: "4.2B", label: "Daily Inferences", color: "violet" },
            { value: "18ms", label: "P99 Latency", color: "cyan" },
            { value: "6", label: "Published Papers", color: "blue" },
          ].map(({ value, label, color }, i) => (
            <div
              key={label}
              className="bg-[hsl(222,44%,7%)] p-8 text-center group hover:bg-[hsl(222,44%,9%)] transition-colors"
              style={{
                opacity: inView ? 1 : 0,
                transition: `all 0.6s ease ${i * 100}ms`,
              }}
            >
              <div
                className={`text-3xl md:text-4xl font-bold tabular-nums mb-2 ${
                  color === "blue" ? "text-blue-400" : color === "violet" ? "text-violet-400" : "text-cyan-400"
                }`}
              >
                {value}
              </div>
              <div className="text-sm text-[hsl(215,20%,45%)]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchSection() {
  const { ref, inView } = useInView();

  return (
    <section id="research" ref={ref} className="relative py-32 overflow-hidden">
      <GridBackground />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs tracking-widest uppercase mb-5">
            Research
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            We publish what we learn
          </h2>
          <p className="text-[hsl(215,20%,55%)] text-lg max-w-2xl">
            Research isn't a marketing channel for us. It's how we build a better foundation for every product.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Efficient Long-Context Attention for Production Inference",
              venue: "NeurIPS 2024",
              tag: "Attention Mechanisms",
              abstract: "We introduce a novel sparse attention pattern that reduces memory complexity from O(n²) to O(n log n) while maintaining 99.2% of full-attention performance on downstream tasks.",
            },
            {
              title: "Quantization-Aware Distillation at Scale",
              venue: "ICML 2024",
              tag: "Model Compression",
              abstract: "A joint training framework for knowledge distillation and quantization that outperforms post-training quantization by 8.4 points on MMLU while achieving INT4 precision.",
            },
            {
              title: "Distributed Inference Scheduling under Heterogeneous Hardware",
              venue: "MLSys 2024",
              tag: "Systems",
              abstract: "We present a scheduling algorithm that achieves 94% theoretical peak throughput across mixed GPU/TPU clusters, outperforming static partition strategies by 2.3x.",
            },
          ].map(({ title, venue, tag, abstract }, i) => (
            <div
              key={title}
              className="group border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300 cursor-pointer"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${i * 100}ms`,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      {tag}
                    </span>
                    <span className="text-xs text-[hsl(215,20%,40%)] font-mono">{venue}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-[hsl(215,20%,50%)] text-sm leading-relaxed">{abstract}</p>
                </div>
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-[hsl(215,20%,35%)] group-hover:text-cyan-400 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, inView } = useInView();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <RadialGlow color="blue" className="w-[700px] h-[600px] -top-40 left-1/2 -translate-x-1/2" />
      <GridBackground />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-5 leading-tight">
            Ready to build on
            <span className="shimmer-text block">real AI infrastructure?</span>
          </h2>
          <p className="text-[hsl(215,20%,55%)] text-lg mb-10 leading-relaxed">
            Talk to our team about CRTX deployment, enterprise licensing, or early access to upcoming products.
            No sales deck. No fluff. Just engineers talking to engineers.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg border border-green-500/30 bg-green-500/10 text-green-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              We'll be in touch within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-[hsl(222,44%,8%)] border border-[hsl(220,30%,18%)] text-white placeholder-[hsl(215,20%,40%)] focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-200 text-sm whitespace-nowrap"
              >
                Get in touch
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-[hsl(215,20%,35%)]">
            No spam. No newsletters. We hate them too.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[hsl(220,30%,12%)] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 bg-blue-500 rounded-sm rotate-45 scale-75" />
                <div className="absolute inset-0 bg-violet-500 rounded-sm rotate-45 scale-50 opacity-70" />
              </div>
              <span className="text-white font-bold tracking-tight">
                Thren<span className="text-blue-400">labs</span>
              </span>
            </div>
            <p className="text-sm text-[hsl(215,20%,40%)] leading-relaxed max-w-xs">
              Engineering production AI systems that teams can actually trust.
            </p>
          </div>

          {[
            {
              title: "Products",
              links: ["CRTX", "Project Axon", "Project Synapse", "Project Cortex"],
            },
            {
              title: "Company",
              links: ["About", "Research", "Careers", "Press"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <div className="text-xs font-semibold text-[hsl(215,20%,60%)] tracking-widest uppercase mb-4">
                {title}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[hsl(215,20%,40%)] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[hsl(220,30%,12%)]">
          <div className="text-xs text-[hsl(215,20%,30%)]">
            &copy; {new Date().getFullYear()} Threnlabs, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-5 mt-4 md:mt-0">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-[hsl(215,20%,35%)] hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(222,47%,5%)] text-white">
      <Nav />
      <HeroSection />
      <CRTXSection />
      <MetricsSection />
      <TechnologySection />
      <WhySection />
      <ComingSoonSection />
      <ResearchSection />
      <CTASection />
      <Footer />
    </div>
  );
}

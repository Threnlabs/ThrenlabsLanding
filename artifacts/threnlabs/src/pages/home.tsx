import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow } from "@/lib/shared";
import { SEO } from "@/components/seo";

function HeroSection() {
  const [typed, setTyped] = useState("");
  const words = ["Responsible AI", "Real Intelligence.", "Cervix.", "CalendarSync."];
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
      <RadialGlow color="blue" className="w-[50rem] h-[37.5rem] -top-40 -left-40" />
      <RadialGlow color="violet" className="w-[37.5rem] h-[31.25rem] -bottom-20 -right-20" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400 opacity-20"
            style={{
              left: `${(i * 4.2 + 3) % 100}%`,
              top: `${(i * 7.3 + 5) % 100}%`,
              animation: `float ${4 + (i % 4)}s ease-in-out ${(i % 3) * 1.2}s infinite`,
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
          <Link
            href="/products/cervix"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
          >
            Explore Cervix
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[hsl(220,30%,20%)] hover:border-blue-500/50 text-[hsl(210,40%,75%)] hover:text-white rounded-lg transition-all duration-200 text-sm"
          >
            Our Technology
          </Link>
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

function OverviewSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-8 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="grid md:grid-cols-3 gap-6"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.7s ease", transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          {[
            {
              title: "Cervix",
              label: "Products",
              labelStyle: "text-green-400 bg-green-500/10 border-green-500/20",
              desc: "The Reasoning First Code Editor — built for complex projects and architectural context, alongside CalendarSync academic scheduling.",
              href: "/products",
              color: "violet",
            },
            {
              title: "Technology",
              label: "Infrastructure",
              labelStyle: "text-blue-400 bg-blue-500/10 border-blue-500/20",
              desc: "Custom CUDA kernels, a priority-aware scheduler, and a high-performance data pipeline — built for production.",
              href: "/technology",
              color: "blue",
            },
            {
              title: "Research",
              label: "Publications",
              labelStyle: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
              desc: "NeurIPS, ICML, MLSys. We publish the methods behind our products — not just the results.",
              href: "/research",
              color: "cyan",
            },
          ].map(({ title, label, labelStyle, desc, href, color }, i) => (
            <a
              key={title}
              href={href.startsWith("http") ? href : href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group block p-7 rounded-xl border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] hover:border-${color}-500/30 transition-all duration-300 hover:-translate-y-1`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`inline-flex px-2 py-0.5 rounded text-xs border ${labelStyle} mb-4 font-medium`}>
                {label}
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
              <p className="text-sm text-[hsl(215,20%,50%)] leading-relaxed mb-4">{desc}</p>
              <div className={`flex items-center gap-1 text-xs text-[hsl(215,20%,40%)] group-hover:text-${color}-400 transition-colors`}>
                Learn more
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="blue" className="w-[37.5rem] h-[25rem] top-0 left-1/2 -translate-x-1/2" />
      <GridBackground />
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
            Ready to build on
            <span className="shimmer-text block mt-1">real AI infrastructure?</span>
          </h2>
          <p className="text-[hsl(215,20%,55%)] mb-8 leading-relaxed">
            Talk to our team about Cervix deployment, enterprise licensing, or early access
            to our suite of products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/company#contact"
              className="px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all text-sm"
            >
              Contact our team
            </Link>
            <Link
              href="/products/cervix"
              className="px-7 py-3.5 border border-[hsl(220,30%,20%)] hover:border-blue-500/40 text-[hsl(210,40%,75%)] hover:text-white rounded-lg transition-all text-sm"
            >
              Explore Cervix
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(222,47%,5%)] text-white">
      <SEO 
        title="Responsible AI & Production-Grade Infrastructure" 
        description="Threnlabs builds production-grade AI and deep learning systems developers can trust. Home of Cervix and CalendarSync."
        canonical="https://threnlabs.com/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Threnlabs",
          "url": "https://threnlabs.com/",
          "logo": "https://threnlabs.com/logo.png",
          "description": "Threnlabs engineers production-grade AI and deep learning systems.",
          "sameAs": [
            "https://twitter.com/threnlabs"
          ]
        }}
      />
      <HeroSection />
      <OverviewSection />
      <CTASection />
    </div>
  );
}



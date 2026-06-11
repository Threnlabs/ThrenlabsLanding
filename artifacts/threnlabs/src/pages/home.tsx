import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow } from "@/lib/shared";
import { SEO } from "@/components/seo";

function HeroSection() {
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
            className="absolute w-1 h-1 rounded-full bg-primary/20 opacity-20"
            style={{
              left: `${(i * 4.2 + 3) % 100}%`,
              top: `${(i * 7.3 + 5) % 100}%`,
              animation: `float ${4 + (i % 4)}s ease-in-out ${(i % 3) * 1.2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight mb-6">
          Threnlabs
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          Threnlabs delivers premium B2B AI SaaS solutions advancing AI for educational institutions. We design enterprise-grade academic operations software and reasoning-first developer tools that universities, colleges, and research labs can trust under pressure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://cosmos.threnlabs.com"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 text-sm"
          >
            Explore Cosmos
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border hover:border-muted-foreground text-muted-foreground hover:text-foreground rounded-lg transition-all duration-200 text-sm"
          >
            Our Technology
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="text-xs text-muted-foreground/80 tracking-widest uppercase">Scroll</div>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
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
              title: "Cosmos",
              label: "Products",
              labelStyle: "text-primary bg-primary/10 border-primary/20",
              desc: "The Reasoning First Code Editor — built for complex projects and architectural context, alongside ScholarsAnchor operational AI scheduling.",
              href: "/products",
            },
            {
              title: "Technology",
              label: "Infrastructure",
              labelStyle: "text-blue-600 bg-blue-500/10 border-blue-500/20",
              desc: "Custom CUDA kernels, a priority-aware scheduler, and a high-performance data pipeline — built for production.",
              href: "/technology",
            },
            {
              title: "Research",
              label: "Publications",
              labelStyle: "text-purple-600 bg-purple-500/10 border-purple-500/20",
              desc: "NeurIPS, ICML, MLSys. We publish the methods behind our products — not just the results.",
              href: "/research",
            },
          ].map(({ title, label, labelStyle, desc, href }, i) => (
            <a
              key={title}
              href={href}
              className="group block p-7 rounded-xl border border-border bg-card hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`inline-flex px-2 py-0.5 rounded text-xs border ${labelStyle} mb-4 font-medium`}>
                {label}
              </div>
              <h3 className="text-foreground font-bold text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground/80 group-hover:text-primary transition-colors">
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-5 leading-tight">
            Ready to build on
            <span className="block text-primary mt-1 font-black">real AI infrastructure?</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Talk to our team about Cosmos deployment, enterprise licensing, or early access
            to our suite of products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/company#contact"
              className="px-7 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all text-sm"
            >
              Contact our team
            </Link>
            <Link
              href="/products/cosmos"
              className="px-7 py-3.5 border border-border hover:border-muted-foreground text-muted-foreground hover:text-foreground rounded-lg transition-all text-sm"
            >
              Explore Cosmos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Threnlabs | Advancing AI for Educational Institutions"
        description="Threnlabs (Thren) engineers production-grade B2B AI SaaS solutions for educational institutions, specializing in academic scheduling and reasoning-first developer tools."
        canonical="https://threnlabs.com/"
        keywords="Threnlabs, Thren, Thren AI, Threnlabs AI, B2B AI SaaS, Educational AI, ScholarsAnchor, Cosmos IDE"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Threnlabs",
          "alternateName": "Thren",
          "url": "https://threnlabs.com/",
          "logo": "https://threnlabs.com/logo.png",
          "description": "Threnlabs (Thren) builds premium B2B AI SaaS solutions advancing AI for educational institutions through operations scheduling and research tools.",
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



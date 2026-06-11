import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow } from "@/lib/shared";
import { SEO } from "@/components/seo";

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate translation for background (only scrolls up while scrollY is less than window.innerHeight)
  const bgTranslateY = -Math.min(scrollY, typeof window !== "undefined" ? window.innerHeight : 800) * 0.75;

  return (
    <section className="relative h-[180vh] w-full bg-background">
      {/* Sticky container that keeps the viewport content pinned */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Background elements that scroll upwards */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ transform: `translateY(${bgTranslateY}px)` }}
        >
          <GridBackground />
          <RadialGlow color="blue" className="w-[50rem] h-[37.5rem] -top-40 -left-40 opacity-40" />
          <RadialGlow color="violet" className="w-[37.5rem] h-[31.25rem] -bottom-20 -right-20 opacity-30" />

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

          {/* TWO BACKGROUND IMAGE PLACEHOLDERS */}
          {/* Placeholder 1: Left (Cosmos Code IDE Mockup) */}
          <div
            className="absolute left-[-20px] sm:left-[8%] bottom-[-80px] sm:bottom-[12%] w-[180px] sm:w-[320px] md:w-[420px] aspect-[16/10] border border-border bg-card rounded-xl shadow-lg p-2.5 sm:p-4 rotate-[-3deg] flex flex-col z-0 opacity-45 sm:opacity-100 transition-all duration-300"
          >
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-border pb-2 sm:pb-2.5 mb-2 sm:mb-3">
              <div className="flex gap-1 sm:gap-1.5">
                <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400/40" />
                <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400/40" />
                <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400/40" />
              </div>
              <span className="text-[7px] sm:text-[10px] font-mono text-muted-foreground/60 select-none">cosmos-ide</span>
            </div>

            {/* Editor Workspace */}
            <div className="flex-1 flex gap-2 sm:gap-3 overflow-hidden">
              {/* File tree */}
              <div className="w-1/4 border-r border-border pr-1 sm:pr-2 flex flex-col gap-1.5 sm:gap-2">
                <div className="h-1.5 sm:h-2 w-4/5 bg-muted rounded" />
                <div className="h-1.5 sm:h-2 w-3/4 bg-primary/15 rounded" />
                <div className="h-1.5 sm:h-2 w-5/6 bg-muted rounded" />
                <div className="h-1.5 sm:h-2 w-2/3 bg-muted rounded" />
              </div>
              {/* Code window with tokens */}
              <div className="flex-1 flex flex-col gap-1.5 sm:gap-2.5">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="h-2 sm:h-2.5 w-1/4 bg-primary/20 rounded" />
                  <div className="h-2 sm:h-2.5 w-1/3 bg-muted rounded" />
                </div>
                <div className="h-2 sm:h-2.5 w-11/12 bg-muted rounded" />
                <div className="h-2 sm:h-2.5 w-4/5 bg-muted rounded" />
                <div className="flex gap-1 sm:gap-2 pl-2 sm:pl-4">
                  <div className="h-1.5 sm:h-2 w-1/3 bg-primary/25 rounded" />
                  <div className="h-1.5 sm:h-2 w-1/2 bg-muted rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder 2: Right (ScholarsAnchor Academic Scheduler Mockup) */}
          <div
            className="absolute right-[-20px] sm:right-[8%] bottom-[-120px] sm:bottom-[8%] w-[180px] sm:w-[320px] md:w-[420px] aspect-[16/10] border border-border bg-card rounded-xl shadow-lg p-2.5 sm:p-4 rotate-[3deg] flex flex-col z-0 opacity-45 sm:opacity-100 transition-all duration-300"
          >
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-border pb-2 sm:pb-2.5 mb-2 sm:mb-3">
              <div className="flex gap-1 sm:gap-1.5">
                <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400/40" />
                <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400/40" />
                <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400/40" />
              </div>
              <span className="text-[7px] sm:text-[10px] font-mono text-muted-foreground/60 select-none">scholarsanchor-scheduler</span>
            </div>

            {/* Calendar grid */}
            <div className="flex-1 grid grid-cols-4 gap-1.5 sm:gap-2.5 overflow-hidden">
              {[...Array(4)].map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-1.5 sm:gap-2">
                  <div className="h-2.5 sm:h-3.5 bg-muted rounded w-full flex items-center justify-center text-[5px] sm:text-[7px] font-mono text-muted-foreground/75 uppercase">
                    {["Mon", "Tue", "Wed", "Thu"][colIdx]}
                  </div>
                  {colIdx === 0 && (
                    <div className="h-10 sm:h-14 bg-primary/10 border border-primary/25 rounded p-1 sm:p-1.5 flex flex-col justify-between">
                      <div className="h-1 sm:h-1.5 w-3/4 bg-primary/30 rounded" />
                      <div className="h-0.5 sm:h-1 w-1/2 bg-primary/20 rounded" />
                    </div>
                  )}
                  {colIdx === 1 && (
                    <div className="h-7 sm:h-10 bg-muted/40 border border-border rounded p-1 sm:p-1.5 mt-2 sm:mt-4 flex flex-col justify-between">
                      <div className="h-1 sm:h-1.5 w-2/3 bg-muted rounded" />
                    </div>
                  )}
                  {colIdx === 2 && (
                    <div className="h-8 sm:h-12 bg-primary/10 border border-primary/25 rounded p-1 sm:p-1.5 mt-1 sm:mt-2 flex flex-col justify-between">
                      <div className="h-1 sm:h-1.5 w-5/6 bg-primary/30 rounded" />
                    </div>
                  )}
                  {colIdx === 3 && (
                    <div className="h-10 sm:h-14 bg-muted/40 border border-border rounded p-1 sm:p-1.5 flex flex-col justify-between">
                      <div className="h-1 sm:h-1.5 w-3/4 bg-muted rounded" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATIC TEXT CONTENT CONTAINER */}
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto mt-0 sm:mt-[-4rem] pt-16 sm:pt-0">
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight mb-4 sm:mb-6">
            Threnlabs
          </h1>

          <p className="text-xs sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
            Threnlabs delivers premium B2B AI SaaS solutions advancing AI for educational institutions. We design enterprise-grade academic operations software and reasoning-first developer tools that universities, colleges, and research labs can trust under pressure.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center items-center">
            <Link
              href="/products"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 text-xs sm:text-sm shadow-sm"
            >
              Explore Products
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 border border-border hover:border-muted-foreground text-muted-foreground hover:text-foreground rounded-lg transition-all duration-200 text-xs sm:text-sm"
            >
              Our Technology
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-300 hidden sm:flex"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) * 0.4 }}
        >
          <div className="text-xs text-muted-foreground/80 tracking-widest uppercase">Scroll</div>
          <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-8 overflow-hidden bg-background">
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="grid md:grid-cols-3 gap-6"
          style={{ opacity: inView ? 1 : 0, transition: "all 0.7s ease", transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          {[
            {
              title: "Active Suite",
              label: "Products",
              labelStyle: "text-primary bg-primary/10 border-primary/20",
              desc: "Cosmos reasoning-first IDE for college laboratories, alongside ScholarsAnchor unifying campus scheduling (CalendarSync) and student doubt solving (BenchRex).",
              href: "/products",
            },
            {
              title: "Technology Stack",
              label: "Infrastructure",
              labelStyle: "text-primary bg-primary/10 border-primary/20",
              desc: "Engineered under production constraints. Powers our systems with Cosmos Runtime for fused CUDA kernel inference and the stateless DataMesh pipeline.",
              href: "/technology",
            },
            {
              title: "Research & Publications",
              label: "Publications",
              labelStyle: "text-primary bg-primary/10 border-primary/20",
              desc: "Peer-reviewed algorithms published at NeurIPS, MLSys, and ICLR that directly implement long-context sparsity and hardware-aware scheduling.",
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
    <section ref={ref} className="relative py-20 px-6 sm:py-24 overflow-hidden bg-background">
      <RadialGlow color="blue" className="w-[37.5rem] h-[25rem] top-0 left-1/2 -translate-x-1/2" />
      <GridBackground />
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 sm:mb-5 leading-tight">
            Ready to build on
            <span className="block text-primary mt-1 font-bold sm:font-black">real AI infrastructure?</span>
          </h2>
          <p className="text-xs sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-xl mx-auto">
            Talk to our team about Cosmos deployment, enterprise licensing, or early access
            to our suite of products.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
            <Link
              href="/company#contact"
              className="px-5 py-2.5 sm:px-7 sm:py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all text-xs sm:text-sm shadow-sm"
            >
              Contact our team
            </Link>
            <Link
              href="/products/cosmos"
              className="px-5 py-2.5 sm:px-7 sm:py-3.5 border border-border hover:border-muted-foreground text-muted-foreground hover:text-foreground rounded-lg transition-all text-xs sm:text-sm"
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

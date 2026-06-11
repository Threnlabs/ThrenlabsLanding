import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow } from "@/lib/shared";
import { SEO } from "@/components/seo";

const showcaseData = [
  {
    name: "Cosmos",
    href: "/products/cosmos",
    leftTitle: "IDE Workspace",
    leftImage: "/assets/cosmos.png",
    leftCaption: "Reasoning-first IDE layout with active context tree.",
    rightTitle: "Graph Visualization",
    rightImage: "/assets/cosmos2.png",
    rightCaption: "Dynamic context-intent graph monitoring token drift."
  },
  {
    name: "ScholarsAnchor",
    href: "/products/scholarsanchor",
    leftTitle: "Scheduler Dashboard",
    leftImage: "/assets/ScholarsAnchor.png",
    leftCaption: "Stateless conflict-free academic calendar planner.",
    rightTitle: "Room Coordination",
    rightImage: "/assets/scholarsanchor2.png",
    rightCaption: "Multi-layered resource allocation matrix for departments."
  },
  {
    name: "BenchRex",
    href: "/products/scholarsanchor",
    leftTitle: "Doubt Solver Portal",
    leftImage: "/assets/Benchrex1.png",
    leftCaption: "Collaborative query answering interface for students.",
    rightTitle: "Inquiry Analytics",
    rightImage: "/assets/benchrex3.png",
    rightCaption: "Automated student progress and response dashboard."
  }
];

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const innerHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  // Scrolling out progress of the Hero section (completes by 0.3 * innerHeight)
  const heroScrollProgress = Math.min(scrollY / (0.3 * innerHeight), 1);

  // Threnlabs text shrink and translate
  // Positions the text top-aligned and translates it down initially to 40px above center (0.5 * innerHeight - 104px).
  // On scroll, it scales down from 0.85 to 0.24 (logo size) and glides smoothly into its target position below the topbar.
  const threnlabsScale = 0.24 + (1 - heroScrollProgress) * 0.61;
  const threnlabsTranslateY = 64 + (1 - heroScrollProgress) * (0.5 * innerHeight - 168);

  // Hero Description & Buttons fade out and scale down slightly
  const heroContentOpacity = Math.max(0, 1 - scrollY / (0.2 * innerHeight));
  const heroContentScale = 1 - heroScrollProgress * 0.15;
  const heroContentTranslateY = -scrollY * 0.25;

  // Active index for the scroll showcase based on scroll zones
  let activeIndex = -1;
  if (scrollY >= 0.5 * innerHeight) {
    if (scrollY < 1.16 * innerHeight) {
      activeIndex = 0;
    } else if (scrollY < 1.82 * innerHeight) {
      activeIndex = 1;
    } else {
      activeIndex = 2;
    }
  }

  // Showcase container opacity (fades in as hero text fades out)
  const showcaseOpacity = scrollY < 0.3 * innerHeight
    ? 0
    : scrollY > 0.5 * innerHeight
    ? 1
    : (scrollY - 0.3 * innerHeight) / (0.2 * innerHeight);

  const getZoneBoundaries = (idx: number) => {
    const start = (0.5 + idx * 0.66) * innerHeight;
    const end = start + 0.66 * innerHeight;
    return { start, end };
  };

  const getCardTransformAndOpacity = (cardIdx: number, side: "left" | "right", isMobile = false) => {
    const { start, end } = getZoneBoundaries(cardIdx);
    
    // Entry threshold (fades and slides in from outer margins)
    const entryStart = start - 0.25 * innerHeight;
    const entryEnd = start + 0.08 * innerHeight;
    
    // Active scrolling forward threshold (shrinks and merges into the center)
    const activeStart = entryEnd;
    const activeEnd = end - 0.08 * innerHeight;
    
    // Exit threshold
    const exitStart = activeEnd;
    const exitEnd = end + 0.15 * innerHeight;

    let opacity = 0;
    const initX = isMobile ? 80 : 450; // Entering from further out (using the full side spaces of the viewport)
    let translateX = side === "left" ? -initX : initX;
    let scale = 1.15; // Enlarge slightly initially (prevents overlap)

    if (scrollY >= entryStart && scrollY < entryEnd) {
      const progress = (scrollY - entryStart) / (entryEnd - entryStart);
      opacity = progress;
      const startX = side === "left" ? -initX : initX;
      translateX = startX * (1 - progress);
      scale = 1.15;
    } else if (scrollY >= activeStart && scrollY < activeEnd) {
      opacity = 1;
      const progress = (scrollY - activeStart) / (activeEnd - activeStart);
      scale = 1.15 - progress * 0.2; // Shrinks down from 1.15 to 0.95
      
      // Merge towards the center
      const targetCenterShift = isMobile
        ? (side === "left" ? 25 : -25)
        : (side === "left" ? 120 : -120);
      translateX = targetCenterShift * progress;
    } else if (scrollY >= exitStart && scrollY < exitEnd) {
      const progress = (scrollY - exitStart) / (exitEnd - exitStart);
      opacity = 1 - progress;
      const centerShift = isMobile
        ? (side === "left" ? 25 : -25)
        : (side === "left" ? 120 : -120);
      const extraExitShift = isMobile
        ? (side === "left" ? 15 : -15)
        : (side === "left" ? 40 : -40);
      translateX = centerShift + extraExitShift * progress;
      scale = 0.95;
    } else if (scrollY >= entryEnd && scrollY < activeStart) {
      opacity = 1;
      translateX = 0;
      scale = 1.15;
    } else if (scrollY >= activeEnd && scrollY < exitStart) {
      opacity = 1;
      const centerShift = isMobile
        ? (side === "left" ? 25 : -25)
        : (side === "left" ? 120 : -120);
      translateX = centerShift;
      scale = 0.95;
    }

    return {
      opacity,
      transform: `translateX(${translateX}px) scale(${scale})`,
      pointerEvents: opacity > 0.1 ? ("auto" as const) : ("none" as const),
      willChange: "transform, opacity",
      transition: "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
    };
  };

  return (
    <>
      <section className="hidden md:block relative h-[350vh] w-full bg-background">
      {/* Sticky container that keeps the viewport content pinned */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center relative">

        {/* Background elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <GridBackground />
          <RadialGlow color="blue" className="w-[50rem] h-[37.5rem] -top-40 -left-40 opacity-40" />
          <RadialGlow color="violet" className="w-[37.5rem] h-[31.25rem] -bottom-20 -right-20 opacity-30" />
        </div>

        {/* Threnlabs Heading: Centered initially, shrinks and slides to top center below the topbar */}
        <h1
          className="absolute left-0 right-0 mx-auto text-center w-fit z-40 font-bold text-foreground tracking-tight origin-center text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl select-none"
          style={{
            transform: `translateY(${threnlabsTranslateY}px) scale(${threnlabsScale})`,
            top: 0,
            willChange: "transform",
          }}
        >
          Threnlabs
        </h1>

        {/* Hero description & buttons: Fades and shrinks out of view */}
        <div
          className="absolute left-0 right-0 mx-auto text-center px-5 max-w-4xl w-full z-20"
          style={{
            opacity: heroContentOpacity,
            transform: `translateY(calc(-50% + 220px + ${heroContentTranslateY}px)) scale(${heroContentScale})`,
            top: "50%",
            pointerEvents: heroContentOpacity === 0 ? "none" : "auto",
            willChange: "transform, opacity",
          }}
        >
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

        {/* 2. SCROLL SHOWCASE (VISIBLE ON SCROLL) */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-500"
          style={{
            opacity: showcaseOpacity,
            pointerEvents: showcaseOpacity === 0 ? "none" : "auto",
          }}
        >
          {/* Main 2-column layout on desktop, stacked on mobile */}
          <div className="w-full max-w-full mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12 md:gap-16">
            
            {/* Desktop Left Image Stack */}
            <div className="hidden md:flex justify-end pr-4 lg:pr-8 relative h-[560px] w-full">
              {showcaseData.map((item, idx) => {
                const styles = getCardTransformAndOpacity(idx, "left");
                return (
                  <div
                    key={`left-desktop-${idx}`}
                    className="absolute w-full max-w-[620px] flex justify-end"
                    style={{
                      opacity: styles.opacity,
                      transform: styles.transform,
                      pointerEvents: styles.pointerEvents,
                      willChange: styles.willChange,
                      transition: styles.transition,
                    }}
                  >
                    <Link href={item.href} className="block w-full">
                      <div className="flex flex-col items-center w-full">
                        <div className="font-serif italic text-muted-foreground/80 mb-2 text-center text-sm md:text-base">
                          {item.leftTitle}
                        </div>
                        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/40 shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer bg-background">
                          <img src={item.leftImage} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground/90 mt-2 text-center px-4 leading-relaxed font-mono">
                          {item.leftCaption}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Desktop Right Image Stack */}
            <div className="hidden md:flex justify-start pl-4 lg:pl-8 relative h-[560px] w-full">
              {showcaseData.map((item, idx) => {
                const styles = getCardTransformAndOpacity(idx, "right");
                return (
                  <div
                    key={`right-desktop-${idx}`}
                    className="absolute w-full max-w-[620px] flex justify-start"
                    style={{
                      opacity: styles.opacity,
                      transform: styles.transform,
                      pointerEvents: styles.pointerEvents,
                      willChange: styles.willChange,
                      transition: styles.transition,
                    }}
                  >
                    <Link href={item.href} className="block w-full">
                      <div className="flex flex-col items-center w-full">
                        <div className="font-serif italic text-muted-foreground/80 mb-2 text-center text-sm md:text-base">
                          {item.rightTitle}
                        </div>
                        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/40 shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer bg-background">
                          <img src={item.rightImage} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground/90 mt-2 text-center px-4 leading-relaxed font-mono">
                          {item.rightCaption}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Mobile Images (Side-by-Side) */}
            <div className="flex md:hidden order-2 w-full justify-center gap-4 h-[260px] relative mt-6 px-2">
              {showcaseData.map((item, idx) => {
                const leftStyles = getCardTransformAndOpacity(idx, "left", true);
                const rightStyles = getCardTransformAndOpacity(idx, "right", true);
                const isVisible = leftStyles.opacity > 0.01;
                
                return (
                  <div
                    key={`mobile-stack-${idx}`}
                    className="absolute inset-x-0 top-0 flex justify-center gap-4 w-full"
                    style={{
                      opacity: leftStyles.opacity,
                      pointerEvents: isVisible ? "auto" : "none",
                      willChange: "opacity",
                      transition: "opacity 0.25s ease-out",
                    }}
                  >
                    {/* Left Card */}
                    <Link
                      href={item.href}
                      className="w-[47%] max-w-[200px]"
                      style={{
                        transform: leftStyles.transform,
                        willChange: "transform",
                        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <div className="flex flex-col items-center w-full">
                        <div className="font-serif italic text-muted-foreground/80 mb-1 text-center text-[10px]">
                          {item.leftTitle}
                        </div>
                        <div className="w-full aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-border/40 bg-background">
                          <img src={item.leftImage} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[8px] text-muted-foreground/95 mt-1 text-center leading-tight font-mono max-h-[32px] overflow-hidden">
                          {item.leftCaption}
                        </div>
                      </div>
                    </Link>

                    {/* Right Card */}
                    <Link
                      href={item.href}
                      className="w-[47%] max-w-[200px]"
                      style={{
                        transform: rightStyles.transform,
                        willChange: "transform",
                        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <div className="flex flex-col items-center w-full">
                        <div className="font-serif italic text-muted-foreground/80 mb-1 text-center text-[10px]">
                          {item.rightTitle}
                        </div>
                        <div className="w-full aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-border/40 bg-background">
                          <img src={item.rightImage} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[8px] text-muted-foreground/95 mt-1 text-center leading-tight font-mono max-h-[32px] overflow-hidden">
                          {item.rightCaption}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Active Product Name displayed below the images */}
        <div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 w-80 h-10 z-30 pointer-events-none"
          style={{
            opacity: showcaseOpacity,
            transition: "opacity 0.5s ease-out",
          }}
        >
          {showcaseData.map((product, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={`bottom-name-${product.name}`}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out font-serif italic ${
                  isActive
                    ? "opacity-100 transform translate-y-0 text-xl sm:text-2xl md:text-3xl font-semibold text-foreground scale-100"
                    : "opacity-0 transform translate-y-4 text-lg text-muted-foreground scale-95"
                }`}
                style={{ textShadow: "none" }}
              >
                {product.name}
              </div>
            );
          })}
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

    {/* Mobile static hero section */}
    <section className="block md:hidden py-16 px-6 w-full bg-background relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <GridBackground />
        <RadialGlow color="blue" className="w-[30rem] h-[22.5rem] -top-20 -left-20 opacity-30" />
        <RadialGlow color="violet" className="w-[25rem] h-[20rem] -bottom-10 -right-10 opacity-20" />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-20">
        {/* Centered logo-style header */}
        <h1 className="font-bold text-foreground tracking-tight text-4xl mb-4 select-none">
          Threnlabs
        </h1>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
          Threnlabs delivers premium B2B AI SaaS solutions advancing AI for educational institutions. We design enterprise-grade academic operations software and reasoning-first developer tools that universities, colleges, and research labs can trust under pressure.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 justify-center items-center mb-16 w-full">
          <Link
            href="/products"
            className="group relative inline-flex items-center justify-center gap-2 w-full max-w-[280px] py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 text-xs shadow-sm animate-pulse-slow"
          >
            Explore Products
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/technology"
            className="inline-flex items-center justify-center gap-2 w-full max-w-[280px] py-3 border border-border hover:border-muted-foreground text-muted-foreground hover:text-foreground rounded-lg transition-all duration-200 text-xs"
          >
            Our Technology
          </Link>
        </div>

        {/* Catalogue 1 (Left Showcase Images) */}
        <div className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground/75 uppercase mb-4 text-left px-1">
          Product Interfaces
        </div>
        <div className="w-full overflow-x-auto flex gap-4 scrollbar-none pb-8 snap-x snap-mandatory px-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {showcaseData.map((item, idx) => (
            <Link
              key={`mobile-carousel-left-${idx}`}
              href={item.href}
              className="snap-center shrink-0 w-[260px] group block"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border/40 shadow-lg bg-background">
                <img src={item.leftImage} alt={item.leftTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3.5 text-left">
                  <div className="font-serif italic text-white text-xs mb-0.5">{item.leftTitle}</div>
                  <div className="text-[9px] text-slate-300 font-mono line-clamp-1">{item.leftCaption}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Editorial Quote Divider */}
        <div className="font-serif italic text-muted-foreground/90 text-center text-sm my-10 max-w-[280px] mx-auto leading-relaxed border-y border-border/20 py-4">
          Advancing operational scheduling & conceptual tutoring
        </div>

        {/* Catalogue 2 (Right Showcase Images) */}
        <div className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground/75 uppercase mb-4 text-left px-1">
          Control Dashboards
        </div>
        <div className="w-full overflow-x-auto flex gap-4 scrollbar-none pb-4 snap-x snap-mandatory px-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {showcaseData.map((item, idx) => (
            <Link
              key={`mobile-carousel-right-${idx}`}
              href={item.href}
              className="snap-center shrink-0 w-[260px] group block"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border/40 shadow-lg bg-background">
                <img src={item.rightImage} alt={item.rightTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3.5 text-left">
                  <div className="font-serif italic text-white text-xs mb-0.5">{item.rightTitle}</div>
                  <div className="text-[9px] text-slate-300 font-mono line-clamp-1">{item.rightCaption}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
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
              title: "ScholarsAnchor",
              desc: "The complete end-to-end B2B AI operations and management suite for educational institutions, unifying scheduling solvers and campus management under one control canopy.",
              href: "/products/scholarsanchor",
            },
            {
              title: "BenchRex",
              desc: "An advanced, reasoning-first AI tutor and academic doubt solver that integrates with university course syllabi to deliver instant, explainable concept coaching.",
              href: "/products/scholarsanchor#doubt-solver",
            },
            {
              title: "Cosmos",
              desc: "A reasoning-first code editor and IDE designed specifically for computer science students and college laboratories to guide users through algorithm construction.",
              href: "/products/cosmos",
            },
          ].map(({ title, desc, href }, i) => (
            <a
              key={title}
              href={href}
              className="group block p-7 rounded-xl border border-border bg-card hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
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

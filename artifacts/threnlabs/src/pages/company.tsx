import { useState } from "react";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";
import { SEO } from "@/components/seo";


function SystemArchitectureDiagram() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl border border-border bg-card p-6 overflow-hidden shadow-md">
      {/* Decorative technical grid background */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      
      {/* Schematic overlay */}
      <svg className="w-full h-full text-muted-foreground/30" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Alignment corner marks */}
        <path d="M10 20h8M10 20v8M390 20h-8M390 20v8M10 280h8M10 280v-8M390 280h-8M390 280v-8" stroke="currentColor" strokeWidth="1" />
        
        {/* Connection flow lines */}
        <path d="M95 80h105M95 220h105M270 150h55" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M200 80v45M200 220v-45" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M200 150h15" stroke="currentColor" strokeWidth="1.2" />

        {/* Input Node: Texts/Notes */}
        <g transform="translate(15, 60)">
          <rect width="80" height="40" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
          <text x="40" y="24" fill="var(--foreground)" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">TEXT/NOTES</text>
          <circle cx="80" cy="20" r="2.5" fill="#3b82f6" />
        </g>

        {/* Input Node: Calendars */}
        <g transform="translate(15, 200)">
          <rect width="80" height="40" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
          <text x="40" y="24" fill="var(--foreground)" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CALENDARS</text>
          <circle cx="80" cy="20" r="2.5" fill="#8b5cf6" />
        </g>

        {/* Processing Core Node */}
        <g transform="translate(145, 120)">
          <rect width="110" height="60" rx="6" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
          <text x="55" y="25" fill="var(--primary)" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CORE ENGINE</text>
          <text x="55" y="40" fill="var(--muted-foreground)" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Constraint Solver</text>
          <circle cx="0" cy="30" r="3.5" fill="#3b82f6" />
          <circle cx="110" cy="30" r="3.5" fill="#10b981" />
        </g>

        {/* Output Node */}
        <g transform="translate(290, 130)">
          <rect width="95" height="40" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
          <text x="47.5" y="24" fill="#10b981" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">RESOLVED AI</text>
          <circle cx="0" cy="20" r="2.5" fill="#10b981" />
        </g>

        {/* Pipeline Status Pill */}
        <g transform="translate(130, 260)">
          <rect width="140" height="20" rx="10" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
          <circle cx="15" cy="10" r="2.5" fill="#10b981" className="animate-pulse" />
          <text x="28" y="13" fill="#047857" fontSize="7" fontWeight="bold" fontFamily="monospace">PIPELINE: SECURE (FERPA)</text>
        </g>
      </svg>
    </div>
  );
}

function CompanyHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-24 pb-20 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="violet" className="w-[43.75rem] h-[31.25rem] -top-20 left-0" />
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <SectionLabel color="violet">About Threnlabs</SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.15] mb-6">
                Advancing AI for Educational Institutions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Threnlabs is a premier B2B AI SaaS provider dedicated to advancing AI for educational institutions. We design production-grade infrastructure, reasoning-first code environments, and intelligent operations tools tailored to the needs of modern universities, research laboratories, and schools.
              </p>
            </div>
            <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
              <SystemArchitectureDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const { ref, inView } = useInView();
  return (
    <section id="mission" ref={ref} className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            style={{ opacity: inView ? 1 : 0, transition: "all 0.7s ease", transform: inView ? "translateX(0)" : "translateX(-30px)" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              B2B AI SaaS designed for modern academia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Educational institutions deserve AI infrastructure that is as rigorous as their research. Most software companies optimize for quick demonstrations. We optimize for institutional scale, security, and absolute reliability. We are committed to advancing AI for educational institutions by building tools that streamline complex operations and support high-level academic research.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Our mission is to provide universities, colleges, and research labs with access to production-grade B2B AI SaaS solutions. From optimizing administrative workflows with constraint-aware scheduling to empowering computer science students and faculty with reasoning-first IDEs, we bridge the gap between advanced research and daily academic execution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By putting safety, data privacy, and explainability first, we enable educational institutions to lead the AI revolution rather than just keep pace with it.
            </p>
          </div>

          <div
            className="space-y-4"
            style={{ opacity: inView ? 1 : 0, transition: "all 0.7s ease 0.2s", transform: inView ? "translateX(0)" : "translateX(30px)" }}
          >
            {[
              { number: "01", title: "Production First", desc: "Every design decision is made under production constraints. We don't ship what we can't maintain." },
              { number: "02", title: "No Black Boxes", desc: "Full interpretability tools, audit logs, and decision traces. You understand what your model is doing and why." },
              { number: "03", title: "Latency Guarantees", desc: "Enterprise-grade SLAs for inference latency. We provide the reliability required for mission-critical applications." },
              { number: "04", title: "Model Ownership", desc: "You own your fine-tuned weights, your data, your outputs. No lock-in, no revenue share on outputs." },
            ].map(({ number, title, desc }) => (
              <div key={number} className="flex gap-4 p-4 rounded-xl border border-border bg-card shadow-sm">
                <div className="text-xs font-mono text-muted-foreground/60 mt-0.5 w-6 flex-shrink-0">{number}</div>
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, inView } = useInView();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="blue" className="w-[37.5rem] h-[25rem] top-0 left-1/2 -translate-x-1/2" />
      <GridBackground />
      <div className="max-w-2xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Get in touch</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Talk to our team about Cosmos deployment, enterprise licensing, or early access to upcoming products.
            No sales deck. No fluff. Engineers talking to engineers.
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-green-500/30 bg-green-500/10 text-green-700">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              We'll be in touch within 24 hours. No spam, ever.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all text-sm shadow-xs"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you working on? (optional)"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none shadow-xs"
              />
              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 text-sm shadow-sm"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function CompanyPage() {
  return (
    <PageShell>
      <SEO
        title="About Threnlabs | Advancing AI for Educational Institutions"
        description="Discover how Threnlabs (Thren) is advancing AI for educational institutions with our production-grade B2B AI SaaS products. Empowering university scheduling and advanced research."
        canonical="https://threnlabs.com/company"
        keywords="About Threnlabs, Threnlabs, Thren, Thren AI, Threnlabs AI, B2B AI SaaS, Educational AI, ScholarsAnchor, Cosmos IDE"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Threnlabs",
          "alternateName": "Thren",
          "url": "https://threnlabs.com",
          "logo": "https://threnlabs.com/logo.png",
          "description": "Leading B2B AI SaaS provider advancing AI for educational institutions through production-grade operations and research infrastructure.",
          "knowsAbout": [
            "Advancing AI for educational institutions",
            "B2B AI SaaS for education",
            "AI academic scheduling",
            "Reasoning-first developer environments"
          ]
        }}
      />
      <CompanyHero />
      <MissionSection />
      <ContactSection />
    </PageShell>
  );
}

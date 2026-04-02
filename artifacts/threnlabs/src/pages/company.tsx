import { useState } from "react";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";

function CompanyHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-20 pb-16 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="violet" className="w-[700px] h-[500px] -top-20 left-0" />
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <SectionLabel color="violet">Company</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
            We build what<br />we'd use ourselves
          </h1>
          <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl leading-relaxed">
            Threnlabs was started by engineers who were tired of AI products that couldn't hold up
            under real production pressure. So we built the infrastructure we wished existed.
          </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              The quiet backbone of the AI revolution
            </h2>
            <p className="text-[hsl(215,20%,55%)] leading-relaxed mb-5">
              Most AI companies optimize for demos. We optimize for production. That means slower
              initial releases, more rigorous testing, and a development culture that treats
              reliability as a core feature — not a bolt-on.
            </p>
            <p className="text-[hsl(215,20%,55%)] leading-relaxed mb-5">
              Our mission is to make production-grade AI accessible to any team with a serious
              problem to solve. Not just companies with the budget for a dedicated ML platform
              team. Anyone who needs AI that works.
            </p>
            <p className="text-[hsl(215,20%,55%)] leading-relaxed">
              We believe the infrastructure layer for AI is still being written.
              That's why we're here.
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
              <div key={number} className="flex gap-4 p-4 rounded-xl border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)]">
                <div className="text-xs font-mono text-[hsl(215,20%,30%)] mt-0.5 w-6 flex-shrink-0">{number}</div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-xs text-[hsl(215,20%,50%)] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const { ref, inView } = useInView();
  return (
    <section id="team" ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">The team</h2>
          <p className="text-[hsl(215,20%,55%)]">Engineers and researchers who publish at NeurIPS, ICML, and MLSys.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {[
            { name: "Arjun Mehta", role: "Co-founder & CEO", prior: "Google Brain, Stanford ML Group" },
            { name: "Danielle Reeves", role: "Co-founder & CTO", prior: "NVIDIA Research, CMU" },
            { name: "Lena Okonkwo", role: "Head of Research", prior: "OpenAI, MIT CSAIL" },
            { name: "Jin Chen", role: "Head of Engineering", prior: "Anyscale, UCB" },
          ].map(({ name, role, prior }, i) => (
            <div
              key={name}
              className="bg-[hsl(222,44%,7%)] border border-[hsl(220,30%,14%)] rounded-xl p-5 hover:border-violet-500/20 transition-all"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${i * 80}ms`,
              }}
            >
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-[hsl(220,30%,20%)] flex items-center justify-center text-white font-bold mb-4">
                {name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="text-white font-semibold mb-0.5">{name}</h3>
              <div className="text-xs text-blue-400 mb-2">{role}</div>
              <div className="text-xs text-[hsl(215,20%,45%)] mb-3">{prior}</div>
              <div className="text-xs text-[hsl(215,20%,35%)]">Multiple publications</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersSection() {
  const { ref, inView } = useInView();
  return (
    <section id="careers" ref={ref} className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-10 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Open roles</h2>
          <p className="text-[hsl(215,20%,55%)]">We're hiring people who want to work on hard problems in production AI.</p>
        </div>

        <div className="space-y-3">
          {[
            { title: "Senior Inference Engineer", team: "Infrastructure", location: "Remote (US/EU)", type: "Full-time" },
            { title: "ML Research Scientist — Compression", team: "Research", location: "San Francisco / Remote", type: "Full-time" },
            { title: "Systems Software Engineer (CUDA)", team: "Core Runtime", location: "San Francisco", type: "Full-time" },
            { title: "Technical Product Manager", team: "Product", location: "Remote (US)", type: "Full-time" },
            { title: "Developer Relations Engineer", team: "Growth", location: "Remote", type: "Full-time" },
          ].map(({ title, team, location, type }, i) => (
            <div
              key={title}
              className="group flex items-center justify-between gap-4 p-5 border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] rounded-xl hover:border-violet-500/25 transition-all cursor-pointer"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(10px)",
                transition: `all 0.5s ease ${i * 60}ms`,
              }}
            >
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-violet-300 transition-colors">{title}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-[hsl(215,20%,45%)]">
                  <span>{team}</span>
                  <span>·</span>
                  <span>{location}</span>
                  <span>·</span>
                  <span>{type}</span>
                </div>
              </div>
              <svg className="w-4 h-4 text-[hsl(215,20%,35%)] group-hover:text-violet-400 flex-shrink-0 transition-colors group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          ))}
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
      <RadialGlow color="blue" className="w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2" />
      <GridBackground />
      <div className="max-w-2xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get in touch</h2>
          <p className="text-[hsl(215,20%,55%)] mb-8 leading-relaxed">
            Talk to our team about Cortex deployment, enterprise licensing, or early access to upcoming products.
            No sales deck. No fluff. Engineers talking to engineers.
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-green-500/30 bg-green-500/10 text-green-300">
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
                className="w-full px-4 py-3 rounded-lg bg-[hsl(222,44%,8%)] border border-[hsl(220,30%,18%)] text-white placeholder-[hsl(215,20%,38%)] focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you working on? (optional)"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[hsl(222,44%,8%)] border border-[hsl(220,30%,18%)] text-white placeholder-[hsl(215,20%,38%)] focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
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
      <CompanyHero />
      <MissionSection />
      <TeamSection />
      <CareersSection />
      <ContactSection />
    </PageShell>
  );
}

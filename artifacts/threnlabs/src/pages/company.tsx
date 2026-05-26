import { useState } from "react";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";
import { SEO } from "@/components/seo";


function SystemArchitectureDiagram() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,4%)] p-6 overflow-hidden shadow-2xl">
      {/* Decorative technical grid background */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      {/* Schematic overlay */}
      <svg className="w-full h-full text-[hsl(215,20%,25%)]" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Alignment corner marks */}
        <path d="M10 20h8M10 20v8M390 20h-8M390 20v8M10 280h8M10 280v-8M390 280h-8M390 280v-8" stroke="currentColor" strokeWidth="1" />
        
        {/* Connection flow lines */}
        <path d="M95 80h105M95 220h105M270 150h55" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M200 80v45M200 220v-45" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M200 150h15" stroke="currentColor" strokeWidth="1.2" />

        {/* Input Node: Texts/Notes */}
        <g transform="translate(15, 60)">
          <rect width="80" height="40" rx="4" fill="hsl(222,44%,6%)" stroke="hsl(220,30%,16%)" strokeWidth="1" />
          <text x="40" y="24" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">TEXT/NOTES</text>
          <circle cx="80" cy="20" r="2.5" fill="#3b82f6" />
        </g>

        {/* Input Node: Calendars */}
        <g transform="translate(15, 200)">
          <rect width="80" height="40" rx="4" fill="hsl(222,44%,6%)" stroke="hsl(220,30%,16%)" strokeWidth="1" />
          <text x="40" y="24" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CALENDARS</text>
          <circle cx="80" cy="20" r="2.5" fill="#8b5cf6" />
        </g>

        {/* Processing Core Node */}
        <g transform="translate(145, 120)">
          <rect width="110" height="60" rx="6" fill="hsl(222,44%,8%)" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="55" y="25" fill="#3b82f6" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CORE ENGINE</text>
          <text x="55" y="40" fill="#94a3b8" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Constraint Solver</text>
          <circle cx="0" cy="30" r="3.5" fill="#3b82f6" />
          <circle cx="110" cy="30" r="3.5" fill="#10b981" />
        </g>

        {/* Output Node */}
        <g transform="translate(290, 130)">
          <rect width="95" height="40" rx="4" fill="hsl(222,44%,6%)" stroke="hsl(220,30%,16%)" strokeWidth="1" />
          <text x="47.5" y="24" fill="#10b981" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">RESOLVED AI</text>
          <circle cx="0" cy="20" r="2.5" fill="#10b981" />
        </g>

        {/* Pipeline Status Pill */}
        <g transform="translate(130, 260)">
          <rect width="140" height="20" rx="10" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
          <circle cx="15" cy="10" r="2.5" fill="#10b981" className="animate-pulse" />
          <text x="28" y="13" fill="#a7f3d0" fontSize="7" fontWeight="bold" fontFamily="monospace">PIPELINE: SECURE (FERPA)</text>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                Advancing AI for Educational Institutions
              </h1>
              <p className="text-lg text-[hsl(215,20%,55%)] leading-relaxed max-w-2xl">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              B2B AI SaaS designed for modern academia
            </h2>
            <p className="text-[hsl(215,20%,55%)] leading-relaxed mb-5">
              Educational institutions deserve AI infrastructure that is as rigorous as their research. Most software companies optimize for quick demonstrations. We optimize for institutional scale, security, and absolute reliability. We are committed to advancing AI for educational institutions by building tools that streamline complex operations and support high-level academic research.
            </p>
            <p className="text-[hsl(215,20%,55%)] leading-relaxed mb-5">
              Our mission is to provide universities, colleges, and research labs with access to production-grade B2B AI SaaS solutions. From optimizing administrative workflows with constraint-aware scheduling to empowering computer science students and faculty with reasoning-first IDEs, we bridge the gap between advanced research and daily academic execution.
            </p>
            <p className="text-[hsl(215,20%,55%)] leading-relaxed">
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

// function TeamSection() {
//   const { ref, inView } = useInView();
//   return (
//     <section id="team" ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
//       <GridBackground />
//       <div className="max-w-7xl mx-auto">
//         <div
//           className="mb-12 transition-all duration-700"
//           style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
//         >
//           <h2 className="text-3xl font-bold text-white mb-2">The team</h2>
//           <p className="text-[hsl(215,20%,55%)]">Engineers and researchers who publish at NeurIPS, ICML, and MLSys.</p>
//         </div>

//         <div className="grid md:grid-cols-4 gap-5">
//           {[
//             { name: "Soham Agarwal", role: "Founder & CEO", prior: "Indian Institute of Technology, Kharagpur" }
//           ].map(({ name, role, prior }, i) => (
//             <div
//               key={name}
//               className="bg-[hsl(222,44%,7%)] border border-[hsl(220,30%,14%)] rounded-xl p-5 hover:border-violet-500/20 transition-all"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? "translateY(0)" : "translateY(20px)",
//                 transition: `all 0.6s ease ${i * 80}ms`,
//               }}
//             >
//               {/* Avatar placeholder */}
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-[hsl(220,30%,20%)] flex items-center justify-center text-white font-bold mb-4">
//                 {name.split(" ").map((n) => n[0]).join("")}
//               </div>
//               <h3 className="text-white font-semibold mb-0.5">{name}</h3>
//               <div className="text-xs text-blue-400 mb-2">{role}</div>
//               <div className="text-xs text-[hsl(215,20%,45%)] mb-3">{prior}</div>
//               <div className="text-xs text-[hsl(215,20%,35%)]">Multiple publications</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function CareersSection() {
//   const { ref, inView } = useInView();
//   return (
//     <section id="careers" ref={ref} className="py-20 px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div
//           className="mb-10 transition-all duration-700"
//           style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
//         >
//           <h2 className="text-3xl font-bold text-white mb-2">Open roles</h2>
//           <p className="text-[hsl(215,20%,55%)]">We're hiring people who want to work on hard problems in production AI.</p>
//         </div>

//         <div className="space-y-3">
//           {[
//             { title: "Senior Inference Engineer", team: "Infrastructure", location: "Remote (US/EU)", type: "Full-time" },
//             { title: "ML Research Scientist — Compression", team: "Research", location: "San Francisco / Remote", type: "Full-time" },
//             { title: "Systems Software Engineer (CUDA)", team: "Core Runtime", location: "San Francisco", type: "Full-time" },
//             { title: "Technical Product Manager", team: "Product", location: "Remote (US)", type: "Full-time" },
//             { title: "Developer Relations Engineer", team: "Growth", location: "Remote", type: "Full-time" },
//           ].map(({ title, team, location, type }, i) => (
//             <div
//               key={title}
//               className="group flex items-center justify-between gap-4 p-5 border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] rounded-xl hover:border-violet-500/25 transition-all cursor-pointer"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? "translateY(0)" : "translateY(10px)",
//                 transition: `all 0.5s ease ${i * 60}ms`,
//               }}
//             >
//               <div>
//                 <h3 className="text-white font-semibold mb-1 group-hover:text-violet-300 transition-colors">{title}</h3>
//                 <div className="flex flex-wrap gap-3 text-xs text-[hsl(215,20%,45%)]">
//                   <span>{team}</span>
//                   <span>·</span>
//                   <span>{location}</span>
//                   <span>·</span>
//                   <span>{type}</span>
//                 </div>
//               </div>
//               <svg className="w-4 h-4 text-[hsl(215,20%,35%)] group-hover:text-violet-400 flex-shrink-0 transition-colors group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get in touch</h2>
          <p className="text-[hsl(215,20%,55%)] mb-8 leading-relaxed">
            Talk to our team about Cosmos deployment, enterprise licensing, or early access to upcoming products.
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

      {/* <TeamSection /> */}
      {/* <CareersSection /> */}
      <ContactSection />
    </PageShell>
  );
}

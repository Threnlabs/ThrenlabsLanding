import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";
import { SEO } from "@/components/seo";


function CalendarSyncHero() {
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
          <Link href="/products" className="inline-flex items-center gap-1.5 text-xs text-[hsl(215,20%,45%)] hover:text-white transition-colors mb-8 group">
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Products
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight mb-6">
            CalendarSync
          </h1>
          <p className="text-2xl md:text-3xl text-[hsl(215,20%,55%)] max-w-4xl leading-relaxed mb-12 mx-auto">
            The open-source academic timetabling system. Privacy-focused, client-first, and completely under your control.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://cync.threnlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white/[0.03] border border-[hsl(220,30%,20%)] hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-700 text-white font-black rounded-2xl transition-all hover:scale-105 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.5)] text-lg shadow-xl shadow-blue-500/10 active:scale-95 hover:border-transparent"
            >
              Get Started
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://cync.threnlabs.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 border border-[hsl(220,30%,20%)] hover:bg-white/[0.03] text-[hsl(210,40%,75%)] hover:text-white rounded-2xl transition-all text-lg font-medium hover:border-blue-500/30"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarSyncShowcase() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 border-t border-[hsl(220,30%,12%)] bg-[hsl(222,47%,2%)]">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-20 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <SectionLabel color="blue">The Platform</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">Designed for scale.</h2>
          <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl mx-auto">
            Experience a modern interface that prioritizes speed and clarity, making complex timetabling feel effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Interactive Dashboard",
              image: "https://cync.threnlabs.com/dashboard.png",
              desc: "A fluid, responsive interface for real-time schedule management.",
              accent: "blue"
            },
            {
              title: "AI-Powered Engine",
              image: "https://cync.threnlabs.com/algorithm_panel.png",
              desc: "Advanced logic for automated conflict resolution and slot optimization.",
              accent: "indigo"
            },
            {
              title: "Resource Allocation",
              image: "https://cync.threnlabs.com/faculty_assignments.png",
              desc: "Intelligent mapping of faculty workloads and room capacities.",
              accent: "cyan"
            },
          ].map(({ title, image, desc, accent }, i) => (
            <a
              key={title}
              href="https://cync.threnlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-all duration-500 block"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[hsl(220,30%,16%)] bg-[hsl(220,30%,5%)] mb-8 shadow-2xl transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-blue-500/10">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,44%,7%)] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-blue-500/5 backdrop-blur-[4px]">
                  <span className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">View Demo</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
              <p className="text-base text-[hsl(215,20%,50%)] leading-relaxed">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarSyncFeatures() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-32 px-6 lg:px-8 border-t border-[hsl(220,30%,10%)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div
            className="transition-all duration-1000"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-40px)" }}
          >
            <SectionLabel color="blue">Capabilities</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-8 tracking-tight">
              Powerful tools for <span className="text-blue-400">academic brilliance.</span>
            </h2>
            <div className="space-y-10">
              {[
                {
                  title: "Constraint-Based Optimization",
                  desc: "Define complex rules for rooms, faculty preferences, and student cohorts. Our engine handles the heavy lifting."
                },
                {
                  title: "Real-time Conflict Detection",
                  desc: "Zero collision guarantee. Instantly see overlapping schedules and room double-bookings as you edit."
                },
                {
                  title: "Department Isolation",
                  desc: "Decentralized management with centralized authority. Each department handles its own with global oversight."
                }
              ].map((feature, i) => (
                <div key={i} className="group flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    <span className="font-bold text-lg">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-[hsl(215,20%,50%)] leading-relaxed max-w-md">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative transition-all duration-1000"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(40px)" }}
          >
            <div className="relative z-10 p-8 rounded-3xl bg-[hsl(222,44%,7%)] border border-[hsl(220,30%,14%)] shadow-3xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono text-[hsl(215,20%,30%)] uppercase tracking-widest">optimizer_status • ACTIVE</span>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between text-blue-400 border-b border-blue-500/10 pb-2">
                  <span>Task</span>
                  <span>Probability</span>
                </div>
                <div className="flex justify-between text-[hsl(210,40%,70%)]">
                  <span>Room Allocation</span>
                  <span>99.2%</span>
                </div>
                <div className="flex justify-between text-[hsl(210,40%,70%)]">
                  <span>Staff Conflict</span>
                  <span>0.003%</span>
                </div>
                <div className="flex justify-between text-[hsl(210,40%,70%)]">
                  <span>Student Density</span>
                  <span>OPTIMAL</span>
                </div>
                <div className="mt-8 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                  <p className="text-xs text-blue-300">
                    <span className="font-bold block mb-1">Optimizer Report:</span>
                    Schedule successfully balanced. All constraints satisfied across 4 departments.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CalendarSyncPage() {
  return (
    <PageShell>
      <SEO
        title="CalendarSync — AI-Powered Academic Timetabling"
        description="The open-source academic timetabling system. Privacy-focused, client-first, and completely under your control with AI-powered event optimization."
        canonical="https://cync.threnlabs.com/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "CalendarSync",
          "operatingSystem": "Agnostic",
          "applicationCategory": "EducationalApplication",
          "description": "AI-powered academic timetabling system for smart event optimization and privacy-focused schedule management.",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          }
        }}
      />
      <CalendarSyncHero />
      <CalendarSyncShowcase />
      <CalendarSyncFeatures />
    </PageShell>
  );
}



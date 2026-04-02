import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";

function CalendarSyncHero() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative pt-28 pb-16 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="blue" className="w-[43.75rem] h-[31.25rem] -top-20 left-0" />
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <Link href="/products" className="inline-flex items-center gap-1.5 text-xs text-[hsl(215,20%,45%)] hover:text-white transition-colors mb-6 group">
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Products
          </Link>
          <SectionLabel color="blue">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-dot" />
            Alpha — Q3 2025
          </SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
            CalendarSync
          </h1>
          <p className="text-xl text-[hsl(215,20%,55%)] max-w-2xl leading-relaxed mb-8">
            Enterprise-grade real-time calendar orchestration. Synchronize across all major
            platforms with industry-leading latency, conflict resolution, and zero data loss guarantees.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/company#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all text-sm shadow-lg shadow-blue-500/20"
            >
              Request early access
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarSyncFeatures() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">What we're building</h2>
          <p className="text-[hsl(215,20%,55%)]">Enterprise calendar infrastructure done right.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Real-Time Synchronization",
              desc: "High-performance event propagation across Google Calendar, Outlook, Apple Calendar, and 9 additional platforms. Changes appear everywhere before users notice.",
              color: "blue",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              ),
              title: "Conflict Resolution Engine",
              desc: "Deterministic conflict resolution with configurable priority rules, timezone normalization, and IANA-compliant recurrence expansion.",
              color: "blue",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: "Enterprise Security",
              desc: "SOC 2 Type II certified infrastructure, end-to-end encryption for calendar data, and granular access control at the event level.",
              color: "violet",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              ),
              title: "Webhook & Push API",
              desc: "Real-time event streaming via webhooks or Server-Sent Events. Build reactive applications without polling.",
              color: "violet",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: "Analytics Layer",
              desc: "Calendar utilization metrics, meeting load scoring, and scheduling pattern analysis with a built-in dashboard.",
              color: "cyan",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              ),
              title: "Composable Middleware",
              desc: "Drop-in middleware for Express, FastAPI, and Next.js. Sync works as a service or embedded in your monolith.",
              color: "cyan",
            },
          ].map(({ icon, title, desc, color }, i) => (
            <div
              key={title}
              className="flex gap-4 p-6 rounded-xl border border-[hsl(220,30%,14%)] bg-[hsl(222,44%,7%)] hover:border-blue-500/20 transition-all group"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `all 0.6s ease ${i * 80}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(220,30%,10%)] border border-[hsl(220,30%,16%)] flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                {icon}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{title}</h3>
                <p className="text-[hsl(215,20%,50%)] text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarSyncCTA() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <RadialGlow color="blue" className="w-[37.5rem] h-[25rem] top-0 left-1/2 -translate-x-1/2" />
      <GridBackground />
      <div
        className="max-w-2xl mx-auto text-center transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-dot" />
          Alpha access open for select teams
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the alpha</h2>
        <p className="text-[hsl(215,20%,55%)] mb-8 leading-relaxed">
          We're onboarding select enterprise teams for alpha testing. If you have a real calendar sync problem, we want to hear from you.
        </p>
        <Link
          href="/company#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all text-sm shadow-lg shadow-blue-500/20"
        >
          Request early access
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default function CalendarSyncPage() {
  return (
    <PageShell>
      <CalendarSyncHero />
      <CalendarSyncFeatures />
      <CalendarSyncCTA />
    </PageShell>
  );
}


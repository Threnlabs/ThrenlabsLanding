import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";

type DropdownItem = {
  label: string;
  desc: string;
  href: string;
  icon?: string;
};

type NavColumn = {
  heading?: string;
  items: DropdownItem[];
};

type NavItem = {
  label: string;
  href?: string;
  columns?: NavColumn[];
};

const navItems: NavItem[] = [
  {
    label: "Products",
    columns: [
      {
        heading: "Released",
        items: [
          {
            label: "CRTX",
            desc: "Flagship inference engine for production AI workloads",
            href: "/products/crtx",
            icon: "⚡",
          },
          {
            label: "Overview",
            desc: "All Threnlabs products and release status",
            href: "/products",
            icon: "📦",
          },
        ],
      },
      {
        heading: "In Development",
        items: [
          {
            label: "Project Axon",
            desc: "Distributed training for multi-modal models",
            href: "/products/axon",
            icon: "🧬",
          },
          {
            label: "Project Synapse",
            desc: "Real-time model adaptation and drift detection",
            href: "/products/synapse",
            icon: "🔄",
          },
          {
            label: "Project Cortex",
            desc: "AI observability and inference tracing",
            href: "/products/cortex",
            icon: "🔍",
          },
        ],
      },
    ],
  },
  {
    label: "Technology",
    columns: [
      {
        heading: "Infrastructure",
        items: [
          {
            label: "CRTX Runtime",
            desc: "Custom CUDA kernels and memory management",
            href: "/technology#runtime",
            icon: "🔧",
          },
          {
            label: "Cortex Scheduler",
            desc: "Priority-aware GPU job orchestration",
            href: "/technology#scheduler",
            icon: "📊",
          },
          {
            label: "DataMesh Pipeline",
            desc: "High-throughput data ingestion at 40GB/s",
            href: "/technology#datamesh",
            icon: "🌐",
          },
        ],
      },
      {
        heading: "Capabilities",
        items: [
          {
            label: "Neural Architecture Search",
            desc: "Automated model architecture optimization",
            href: "/technology#nas",
            icon: "🧠",
          },
          {
            label: "Quantization & Compression",
            desc: "INT4/FP16 with minimal accuracy loss",
            href: "/technology#compression",
            icon: "📉",
          },
          {
            label: "Distributed Training",
            desc: "Multi-node, multi-GPU scaling",
            href: "/technology#distributed",
            icon: "🖥️",
          },
        ],
      },
    ],
  },
  {
    label: "Research",
    columns: [
      {
        heading: "Publications",
        items: [
          {
            label: "NeurIPS 2024",
            desc: "Efficient Long-Context Attention for Production Inference",
            href: "/research#neurips",
            icon: "📄",
          },
          {
            label: "ICML 2024",
            desc: "Quantization-Aware Distillation at Scale",
            href: "/research#icml",
            icon: "📄",
          },
          {
            label: "MLSys 2024",
            desc: "Distributed Inference Scheduling",
            href: "/research#mlsys",
            icon: "📄",
          },
        ],
      },
      {
        heading: "Research Areas",
        items: [
          {
            label: "Inference Optimization",
            desc: "Faster, cheaper, more reliable model serving",
            href: "/research#inference",
            icon: "⚡",
          },
          {
            label: "Model Efficiency",
            desc: "Compression, distillation, and quantization",
            href: "/research#efficiency",
            icon: "🔬",
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        heading: "About",
        items: [
          {
            label: "Our Mission",
            desc: "Why we started Threnlabs and what drives us",
            href: "/company#mission",
            icon: "🎯",
          },
          {
            label: "Team",
            desc: "Engineers, researchers, and builders",
            href: "/company#team",
            icon: "👥",
          },
          {
            label: "Careers",
            desc: "Open roles and how we work",
            href: "/company#careers",
            icon: "💼",
          },
        ],
      },
      {
        heading: "Connect",
        items: [
          {
            label: "Blog",
            desc: "Engineering insights and technical deep-dives",
            href: "/company#blog",
            icon: "✍️",
          },
          {
            label: "Contact",
            desc: "Talk to our team about CRTX or partnerships",
            href: "/company#contact",
            icon: "✉️",
          },
        ],
      },
    ],
  },
];

function DropdownPanel({ columns }: { columns: NavColumn[] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50">
      {/* Arrow */}
      <div className="flex justify-center mb-0">
        <div className="w-3 h-3 rotate-45 bg-[hsl(222,44%,9%)] border-l border-t border-[hsl(220,30%,18%)] -mb-1.5" />
      </div>
      <div className="bg-[hsl(222,44%,9%)] border border-[hsl(220,30%,18%)] rounded-xl shadow-2xl overflow-hidden">
        <div className={`grid gap-0 divide-x divide-[hsl(220,30%,16%)] ${columns.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          {columns.map((col, ci) => (
            <div key={ci} className="p-5 min-w-[220px]">
              {col.heading && (
                <div className="text-[10px] font-bold tracking-widest text-[hsl(215,20%,35%)] uppercase mb-3 px-1">
                  {col.heading}
                </div>
              )}
              <div className="space-y-0.5">
                {col.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-[hsl(220,30%,13%)] transition-all duration-150"
                  >
                    {item.icon && (
                      <span className="text-base mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                    )}
                    <div>
                      <div className="text-sm font-medium text-[hsl(210,40%,88%)] group-hover:text-white transition-colors leading-tight">
                        {item.label}
                      </div>
                      <div className="text-xs text-[hsl(215,20%,42%)] mt-0.5 leading-snug">
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(222,47%,5%)]/95 backdrop-blur-xl border-b border-[hsl(220,30%,14%)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-blue-500 rounded-sm rotate-45 scale-75 group-hover:scale-90 transition-transform duration-300" />
            <div className="absolute inset-0 bg-violet-500 rounded-sm rotate-45 scale-50 opacity-70 group-hover:scale-60 transition-transform duration-300" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Thren<span className="text-blue-400">labs</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  openMenu === item.label
                    ? "text-white bg-[hsl(220,30%,12%)]"
                    : "text-[hsl(215,20%,55%)] hover:text-white hover:bg-[hsl(220,30%,10%)]"
                }`}
              >
                {item.label}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openMenu === item.label && item.columns && (
                <DropdownPanel columns={item.columns} />
              )}
            </div>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/company#contact"
            className="text-sm text-[hsl(215,20%,55%)] hover:text-white transition-colors px-4 py-1.5"
          >
            Sign in
          </Link>
          <Link
            href="/products/crtx"
            className="text-sm bg-blue-500 hover:bg-blue-400 text-white px-4 py-1.5 rounded-lg transition-all duration-200 font-medium"
          >
            Get CRTX
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[hsl(222,44%,6%)] border-t border-[hsl(220,30%,14%)] max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-[hsl(220,30%,12%)]">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                className="w-full flex items-center justify-between px-6 py-4 text-sm text-[hsl(210,40%,80%)] hover:text-white"
              >
                {item.label}
                <svg
                  className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileExpanded === item.label && item.columns && (
                <div className="pb-3">
                  {item.columns.map((col, ci) => (
                    <div key={ci} className="px-6 mb-3">
                      {col.heading && (
                        <div className="text-[10px] font-bold tracking-widest text-[hsl(215,20%,35%)] uppercase mb-2">
                          {col.heading}
                        </div>
                      )}
                      <div className="space-y-0.5">
                        {col.items.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-[hsl(220,30%,13%)] text-sm text-[hsl(215,20%,55%)] hover:text-white transition-colors"
                          >
                            {link.icon && <span className="text-sm opacity-70">{link.icon}</span>}
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link
              href="/company#contact"
              className="text-sm text-center py-2.5 border border-[hsl(220,30%,18%)] rounded-lg text-[hsl(215,20%,55%)] hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/products/crtx"
              className="text-sm text-center py-2.5 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-medium transition-colors"
            >
              Get CRTX
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

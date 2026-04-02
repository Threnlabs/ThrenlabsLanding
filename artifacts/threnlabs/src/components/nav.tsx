import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";

type DropdownItem = {
  label: string;
  desc: string;
  href: string;
  tag?: string;
};

type NavColumn = {
  heading: string;
  items: DropdownItem[];
};

type NavItem = {
  label: string;
  columns: NavColumn[];
};

const navItems: NavItem[] = [
  {
    label: "Products",
    columns: [
      {
        heading: "Available Now",
        items: [
          {
            label: "Cortex",
            desc: "Flagship inference engine for production workloads",
            href: "/products/cortex",
            tag: "Stable",
          },
          {
            label: "CalendarSync",
            desc: "Enterprise-grade real-time calendar orchestration",
            href: "/products/calendarsync",
            tag: "Alpha",
          },
          {
            label: "Products Overview",
            desc: "All Threnlabs products and release status",
            href: "/products",
          },
        ],
      },
      {
        heading: "In Development",
        items: [
          {
            label: "Bullpen",
            desc: "Distributed training for multi-modal models",
            href: "/products/bullpen",
            tag: "Alpha",
          },
          {
            label: "Smap",
            desc: "Real-time model adaptation and drift detection",
            href: "/products/smap",
            tag: "Testing",
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
            label: "Cortex Runtime",
            desc: "Custom CUDA kernels and memory management",
            href: "/technology#runtime",
          },
          {
            label: "Cortex Scheduler",
            desc: "Priority-aware GPU job orchestration",
            href: "/technology#scheduler",
          },
          {
            label: "DataMesh Pipeline",
            desc: "High-throughput data ingestion at 40 GB/s",
            href: "/technology#datamesh",
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
          },
          {
            label: "Quantization and Compression",
            desc: "INT4 and FP16 with minimal accuracy loss",
            href: "/technology#compression",
          },
          {
            label: "Distributed Training",
            desc: "Multi-node, multi-GPU cluster scaling",
            href: "/technology#distributed",
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
          },
          {
            label: "ICML 2024",
            desc: "Quantization-Aware Distillation at Scale",
            href: "/research#icml",
          },
          {
            label: "MLSys 2024",
            desc: "Distributed Inference Scheduling",
            href: "/research#mlsys",
          },
        ],
      },
      {
        heading: "Research Areas",
        items: [
          {
            label: "Inference Optimization",
            desc: "Faster and more efficient model serving",
            href: "/research#inference",
          },
          {
            label: "Model Efficiency",
            desc: "Compression, distillation, and quantization",
            href: "/research#efficiency",
          },
          {
            label: "Reliable AI Systems",
            desc: "Determinism, calibration, and formal verification",
            href: "/research",
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
          },
          {
            label: "Founder",
            desc: "A personal letter from our founder",
            href: "https://founder.threnlabs.com",
          },
          {
            label: "The Team",
            desc: "Engineers, researchers, and builders",
            href: "/company#team",
          },
          {
            label: "Careers",
            desc: "Open roles and how we work",
            href: "/company#careers",
          },
        ],
      },
      {
        heading: "Connect",
        items: [
          {
            label: "Engineering Blog",
            desc: "Technical deep-dives and product insights",
            href: "/company#blog",
          },
          {
            label: "Press and Media",
            desc: "Coverage, announcements, and press kit",
            href: "/company",
          },
          {
            label: "Contact Us",
            desc: "Talk to our team about Cortex or partnerships",
            href: "/company#contact",
          },
          {
            label: "Instagram",
            desc: "Follow our journey and office culture",
            href: "https://www.instagram.com/threnlabs.ai",
          },
        ],
      },

    ],
  },
];

function TagBadge({ tag }: { tag: string }) {
  const styles: Record<string, string> = {
    Stable: "bg-green-500/15 text-green-400 border-green-500/20",
    Alpha: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    Testing: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
    Research: "bg-violet-500/15 text-violet-400 border-violet-500/20",
  };
  return (
    <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border ${styles[tag] ?? "bg-gray-500/15 text-gray-400 border-gray-500/20"} leading-none`}>
      {tag}
    </span>
  );
}

function DropdownPanel({ columns, visible }: { columns: NavColumn[]; visible: boolean }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 transition-all duration-150 ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
    >
      {/* Caret arrow */}
      <div className="flex justify-center">
        <div className="w-2.5 h-2.5 rotate-45 bg-[hsl(222,44%,10%)] border-l border-t border-[hsl(220,30%,20%)]" style={{ marginBottom: "-1px" }} />
      </div>

      <div className="bg-[hsl(222,44%,10%)] border border-[hsl(220,30%,20%)] rounded-xl shadow-2xl overflow-hidden min-w-[520px]">
        <div className={`grid divide-x divide-[hsl(220,30%,17%)] ${columns.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          {columns.map((col, ci) => (
            <div key={ci} className="p-4">
              {/* Column heading */}
              <div className="text-[10px] font-bold tracking-[0.12em] text-[hsl(215,20%,38%)] uppercase mb-3 px-2">
                {col.heading}
              </div>

              {/* Items */}
              <div className="space-y-0.5">
                {col.items.map((item) => {
                  const isExternal = item.href.startsWith("http");
                  const LinkComponent = isExternal ? "a" : Link;
                  const linkProps = isExternal ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : { href: item.href };

                  return (
                    <LinkComponent
                      key={item.href}
                      {...(linkProps as any)}
                      className="group flex flex-col gap-0.5 px-2 py-2.5 rounded-lg hover:bg-[hsl(220,30%,14%)] transition-colors duration-100 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[hsl(210,40%,88%)] group-hover:text-white transition-colors leading-none">
                          {item.label}
                        </span>
                        {item.tag && <TagBadge tag={item.tag} />}
                      </div>
                      <span className="text-xs text-[hsl(215,20%,44%)] leading-snug">
                        {item.desc}
                      </span>
                    </LinkComponent>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="border-t border-[hsl(220,30%,17%)] px-5 py-2.5 flex items-center justify-between bg-[hsl(222,47%,8%)]">
          <span className="text-[11px] text-[hsl(215,20%,36%)]">Threnlabs AI/DL Platform</span>
          <Link
            href="/products"
            className="text-[11px] text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
          >
            View all products
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
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
    setMobileExpanded(null);
  }, [location]);

  const handleNavClick = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[hsl(222,47%,5%)]/95 backdrop-blur-xl border-b border-[hsl(220,30%,14%)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0 z-10">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-blue-500 rounded-sm rotate-45 scale-75 group-hover:scale-90 transition-transform duration-300" />
            <div className="absolute inset-0 bg-violet-500 rounded-sm rotate-45 scale-50 opacity-70 group-hover:scale-60 transition-transform duration-300" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Thren<span className="text-blue-400">labs</span>
          </span>
        </Link>

        {/* Desktop nav items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              <button
                onClick={() => handleNavClick(item.label)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 select-none ${openMenu === item.label
                    ? "text-white bg-[hsl(220,30%,13%)]"
                    : "text-[hsl(215,20%,58%)] hover:text-white hover:bg-[hsl(220,30%,11%)]"
                  }`}
              >
                {item.label}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === item.label ? "rotate-180 text-blue-400" : "text-[hsl(215,20%,40%)]"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <DropdownPanel columns={item.columns} visible={openMenu === item.label} />
            </div>
          ))}
        </div>

        {/* Desktop action buttons */}
        <div className="hidden md:flex items-center gap-3 z-10">
          <Link
            href="/company#contact"
            className="text-sm text-[hsl(215,20%,55%)] hover:text-white transition-colors px-4 py-1.5 rounded-lg hover:bg-[hsl(220,30%,11%)]"
          >
            Sign in
          </Link>
          <a
            href="https://cortex.threnlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg transition-all duration-150 font-semibold shadow-lg shadow-blue-500/20"
          >
            Get Cortex
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-10 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[80vh]" : "max-h-0"
          }`}
      >
        <div className="bg-[hsl(222,44%,6%)] border-t border-[hsl(220,30%,14%)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-[hsl(220,30%,11%)]">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-[hsl(210,40%,80%)] hover:text-white transition-colors"
              >
                <span>{item.label}</span>
                <svg
                  className={`w-4 h-4 text-[hsl(215,20%,40%)] transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === item.label ? "max-h-96" : "max-h-0"}`}>
                <div className="pb-3">
                  {item.columns.map((col, ci) => (
                    <div key={ci} className="px-5 mb-3">
                      <div className="text-[10px] font-bold tracking-widest text-[hsl(215,20%,35%)] uppercase mb-2 ml-1">
                        {col.heading}
                      </div>
                      <div className="space-y-0.5">
                        {col.items.map((link) => {
                          const isExternal = link.href.startsWith("http");
                          const LinkComponent = isExternal ? "a" : Link;
                          const linkProps = isExternal ? { href: link.href, target: "_blank", rel: "noopener noreferrer" } : { href: link.href };

                          return (
                            <LinkComponent
                              key={link.href}
                              {...(linkProps as any)}
                              className="flex items-center justify-between px-2 py-2.5 rounded-lg hover:bg-[hsl(220,30%,13%)] transition-colors"
                            >
                              <div>
                                <div className="text-sm text-[hsl(210,40%,80%)] hover:text-white font-medium leading-none mb-0.5">
                                  {link.label}
                                </div>
                                <div className="text-xs text-[hsl(215,20%,42%)]">{link.desc}</div>
                              </div>
                              {link.tag && <TagBadge tag={link.tag} />}
                            </LinkComponent>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Mobile action buttons */}
          <div className="px-5 py-4 flex flex-col gap-3">
            <Link
              href="/company#contact"
              className="text-sm text-center py-2.5 border border-[hsl(220,30%,18%)] rounded-lg text-[hsl(215,20%,55%)] hover:text-white hover:border-[hsl(220,30%,28%)] transition-all"
            >
              Sign in
            </Link>
            <a
              href="https://cortex.threnlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-center py-2.5 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-semibold transition-all"
            >
              Get Cortex
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

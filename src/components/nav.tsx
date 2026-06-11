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
  hidden?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "Products",
    columns: [
      {
        heading: "Overview",
        items: [
          {
            label: "Products Overview",
            desc: "All Threnlabs products and release status",
            href: "/products",
          },
        ],
      },
      {
        heading: "Available Now",
        items: [
          {
            label: "Cosmos",
            desc: "The Reasoning First Code Editor",
            href: "/products/cosmos",
          },
          {
            label: "ScholarsAnchor",
            desc: "E2E AI scheduling and doubt solving platform",
            href: "/products/scholarsanchor",
          },
        ]
      }
    ],
  },
  {
    label: "Technology",
    hidden: true,
    columns: [
      {
        heading: "Infrastructure",
        items: [
          {
            label: "Cosmos-MAP",
            desc: "",
            href: "/technology#runtime",
          },
          {
            label: "Calendar Bitmap",
            desc: "Optimizing calendar data structures for algorithmic ingestion",
            href: "/technology#datamesh",
          },
        ],
      },
      {
        heading: "Capabilities",
        items: [
          {
            label: "CP-Aware Scheduling",
            desc: "Constraints and Preferencential scheduling",
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
    hidden: true,
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
            label: "Our Team",
            desc: "Meet the people building Threnlabs",
            href: "/company#team",
          },
        ],
      },
      {
        heading: "Connect",
        items: [
          {
            label: "Contact Us",
            desc: "Talk to our team about Cosmos or partnerships",
            href: "/company#contact",
          },
          {
            label: "Instagram",
            desc: "Follow our journey and office culture",
            href: "https://www.instagram.com/threnlabs.ai",
          },
          {
            label: "LinkedIn",
            desc: "Follow our journey and office culture",
            href: "https://www.linkedin.com/company/threnlabs",
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

function DropdownPanel({ columns, visible, align = "center" }: { columns: NavColumn[]; visible: boolean; align?: "center" | "right" }) {
  const alignClasses = align === "right" 
    ? "right-[-16px] origin-top-right" 
    : "left-1/2 -translate-x-1/2 origin-top";

  return (
    <div
      className={`absolute top-full mt-2 z-50 transition-all duration-150 ${alignClasses} ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
    >
      {/* Caret arrow */}
      <div className={`flex ${align === "right" ? "justify-end pr-10" : "justify-center"}`}>
        <div className="w-2.5 h-2.5 rotate-45 bg-card border-l border-t border-border" style={{ marginBottom: "-1px" }} />
      </div>

      <div className={`bg-card border border-border rounded-xl shadow-lg overflow-hidden ${columns.length === 2 ? "min-w-[24rem]" : "min-w-[32rem]"}`}>
        <div className={`grid divide-x divide-border ${columns.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          {columns.map((col, ci) => (
            <div key={ci} className="p-3.5">
              {/* Column heading */}
              <div className="text-[9px] font-bold tracking-[0.15em] text-muted-foreground/75 uppercase mb-2 px-2">
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
                      className="group flex flex-col gap-0.5 px-2 py-2 rounded-lg hover:bg-muted/50 transition-colors duration-100 cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-none">
                          {item.label}
                        </span>
                        {item.tag && <TagBadge tag={item.tag} />}
                      </div>
                      <span className="text-[11px] text-muted-foreground/85 leading-snug">
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
        <div className="border-t border-border px-4 py-2 flex items-center justify-between bg-muted/30">
          <span className="text-[10px] text-muted-foreground/70">Threnlabs AI/DL Platform</span>
          <Link
            href="/products"
            className="text-[10px] text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium"
          >
            View all products
            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#acb3ba]/20 bg-[#535a60] shadow-[-6px_6px_0px_#acb3ba]`}
    >
      <div className="max-w-6.5xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0 z-10 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.4000000059604645 154.8000030517578 40.80000305175781"
            className="h-full w-auto fill-[#E2E8F0] group-hover:scale-105 transition-transform duration-300"
          >
            <g>
              <g transform="translate(0, 0)">
                <path d="M29.40 2L0 2L0 11.60L8.70 11.60L8.70 39.50L20.70 39.50L20.70 11.60L29.40 11.60L29.40 2ZM44.70 21L44.70 39.50L32.70 39.50L32.70 0.50L44.70-0.40L44.70 10.60Q48.55 8.60 53.20 8.60Q57.90 8.60 60.30 10.42Q62.70 12.25 62.70 15.50L62.70 39.50L50.70 39.50L50.70 18.50L48.85 18.50Q46.65 18.50 45.67 18.95Q44.70 19.40 44.70 21ZM68.40 39.50L68.40 9.50L74.40 9.50L77.70 12.85Q81.30 9.55 86.60 8.60L87.30 19.95Q86.60 19.95 85.60 20.15Q84.60 20.35 83.58 20.65Q82.55 20.95 81.70 21.38Q80.85 21.80 80.40 22.35L80.40 39.50L68.40 39.50ZM102.60 29.30L102.60 31.40Q103.50 31.50 104.40 31.55Q105.30 31.60 106.20 31.60Q111.80 31.60 117.50 29.80L118.90 38.60Q112.15 40.40 105.60 40.40Q97.20 40.40 93.45 36.48Q89.70 32.55 89.70 24.50Q89.70 16.45 93.48 12.52Q97.25 8.60 105.60 8.60Q109.80 8.60 112.60 9.13Q115.40 9.65 117.13 10.88Q118.85 12.10 119.58 14.17Q120.30 16.25 120.30 19.40Q120.30 22 119.43 23.88Q118.55 25.75 116.50 26.95Q114.45 28.15 111.05 28.73Q107.65 29.30 102.60 29.30M102.60 19.90L102.60 22.35L105.05 22.35Q107.25 22.35 108.23 21.90Q109.20 21.45 109.20 19.80L109.20 17.35L106.75 17.35Q104.55 17.35 103.58 17.80Q102.60 18.25 102.60 19.90ZM124.80 9.50L130.80 9.50L133.80 12.50Q139.35 8.60 145.80 8.60Q150.05 8.60 152.43 10.42Q154.80 12.25 154.80 15.50L154.80 39.50L142.80 39.50L142.80 18.50L140.95 18.50Q138.90 18.50 137.85 18.92Q136.80 19.35 136.80 20.80L136.80 39.50L124.80 39.50L124.80 9.50"/>
              </g>
            </g>
          </svg>
        </Link>

        {/* Desktop nav and action buttons aligned to the right */}
        <div className="hidden md:flex items-center gap-5 ml-auto z-10">
          {/* Desktop nav items */}
          <div className="flex items-center gap-1">
            {navItems.filter(i => !i.hidden).map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => handleNavClick(item.label)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 select-none ${openMenu === item.label
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === item.label ? "rotate-180 text-white" : "text-slate-400"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <DropdownPanel 
                  columns={item.columns} 
                  visible={openMenu === item.label} 
                  align={item.label === "Company" ? "right" : "center"}
                />
              </div>
            ))}
          </div>

          {/* Desktop action buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/company#contact"
              className="text-sm text-slate-300 hover:text-white transition-colors px-4 py-1.5 rounded-lg hover:bg-white/5 font-medium"
            >
              Connect
            </Link>
          </div>
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
        <div className="bg-[#535a60] border-t border-[#acb3ba]/10 shadow-lg overflow-y-auto">
          {navItems.filter(i => !i.hidden).map((item) => (
            <div key={item.label} className="border-b border-[#acb3ba]/5">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-slate-200 hover:text-white transition-colors"
              >
                <span>{item.label}</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
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
                       <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 ml-1">
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
                              className="flex items-center justify-between px-2 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                            >
                              <div>
                                <div className="text-sm text-slate-200 hover:text-white font-medium leading-none mb-0.5">
                                  {link.label}
                                </div>
                                <div className="text-xs text-slate-400">{link.desc}</div>
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
              className="text-sm text-center py-2.5 border border-slate-700 rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all"
            >
              Sign in
            </Link>
            <Link
              href="/products/cosmos"
              className="text-sm text-center py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all"
            >
              Learn About Cosmos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

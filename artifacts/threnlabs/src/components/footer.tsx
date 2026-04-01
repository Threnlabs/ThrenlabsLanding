import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="relative border-t border-[hsl(220,30%,12%)] py-14 bg-[hsl(222,47%,5%)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 bg-blue-500 rounded-sm rotate-45 scale-75" />
                <div className="absolute inset-0 bg-violet-500 rounded-sm rotate-45 scale-50 opacity-70" />
              </div>
              <span className="text-white font-bold tracking-tight">
                Thren<span className="text-blue-400">labs</span>
              </span>
            </Link>
            <p className="text-sm text-[hsl(215,20%,40%)] leading-relaxed max-w-xs">
              Engineering production AI systems that teams can actually trust.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold text-[hsl(215,20%,55%)] tracking-widest uppercase mb-4">Products</div>
            <ul className="space-y-2.5">
              {[
                { label: "CRTX", href: "/products/crtx" },
                { label: "All Products", href: "/products" },
                { label: "Coming Soon", href: "/products#upcoming" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-[hsl(215,20%,40%)] hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold text-[hsl(215,20%,55%)] tracking-widest uppercase mb-4">Company</div>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "/company#mission" },
                { label: "Research", href: "/research" },
                { label: "Careers", href: "/company#careers" },
                { label: "Contact", href: "/company#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-[hsl(215,20%,40%)] hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold text-[hsl(215,20%,55%)] tracking-widest uppercase mb-4">Legal</div>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms of Service", "Security", "Compliance"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[hsl(215,20%,40%)] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[hsl(220,30%,12%)]">
          <div className="text-xs text-[hsl(215,20%,30%)]">
            &copy; {new Date().getFullYear()} Threnlabs, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-5 mt-4 md:mt-0">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <a key={social} href="#" className="text-xs text-[hsl(215,20%,35%)] hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

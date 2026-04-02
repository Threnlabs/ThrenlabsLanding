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
                { label: "Cortex", href: "/products/cortex" },
                { label: "CalendarSync", href: "/products/calendarsync" },
                { label: "Bullpen", href: "/products/bullpen" },
                { label: "Smap", href: "/products/smap" },
                { label: "All Products", href: "/products" },
              ].map(({ label, href }) => {
                const isExternal = href.startsWith("http");
                const LinkComponent = isExternal ? "a" : Link;
                const linkProps = isExternal ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

                return (
                  <li key={label}>
                    <LinkComponent {...(linkProps as any)} className="text-sm text-[hsl(215,20%,40%)] hover:text-white transition-colors">
                      {label}
                    </LinkComponent>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold text-[hsl(215,20%,55%)] tracking-widest uppercase mb-4">Company</div>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "/company#mission" },
                { label: "Founder", href: "https://founder.threnlabs.com" },
                { label: "Research", href: "/research" },
                { label: "Careers", href: "/company#careers" },
                { label: "Contact", href: "/company#contact" },
              ].map(({ label, href }) => {
                const isExternal = href.startsWith("http");
                const LinkComponent = isExternal ? "a" : Link;
                const linkProps = isExternal ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

                return (
                  <li key={label}>
                    <LinkComponent {...(linkProps as any)} className="text-sm text-[hsl(215,20%,40%)] hover:text-white transition-colors">
                      {label}
                    </LinkComponent>
                  </li>
                );
              })}
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
            {[
              { label: "Twitter", href: "#" },
              { label: "GitHub", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "Instagram", href: "https://www.instagram.com/threnlabs.ai" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-xs text-[hsl(215,20%,35%)] hover:text-white transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

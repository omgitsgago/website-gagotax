import Image from "next/image";
import Link from "next/link";

const footerNav = {
  Services: [
    { href: "/services#tax", label: "Tax Services" },
    { href: "/services#accounting", label: "Accounting" },
    { href: "/services#consulting", label: "Advisory" },
    { href: "/services#tax", label: "Tax Planning" },
  ],
  Firm: [
    { href: "/about", label: "About" },
    {
      href: "https://gagoaccountingfinance.taxdome.com/login",
      label: "Client Portal",
      external: true,
    },
    { href: "/client-service/tax-services", label: "Tax Plans" },
    { href: "/client-service/bookkeeping", label: "Bookkeeping" },
  ],
  Industries: [
    { href: "/about#industries", label: "Music & Entertainment" },
    { href: "/about#industries", label: "Film & Production" },
    { href: "/about#industries", label: "Fashion & Creative" },
    { href: "/about#industries", label: "See more industries" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: logo + description + contact */}
          <div className="lg:col-span-5">
            <Link href="/" aria-label="GagoTax home">
              <Image
                src="/images/gagotax-logo-2026.png"
                alt=""
                width={520}
                height={120}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              A CPA-led tax, accounting, and advisory firm built to help business
              owners keep more of what they earn — year-round.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
              <a href="mailto:contact@gagotax.com" className="hover:text-white">
                contact@gagotax.com
              </a>
              <a
                href="https://gagoaccountingfinance.taxdome.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Client Portal →
              </a>
            </div>
          </div>

          {/* Right: nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {Object.entries(footerNav).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/70 transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-white/70 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} GagoTax Incorporated. All rights reserved.
          </p>
          <p className="text-sm text-white/60">
            Strategic Tax Savings · Proactive Planning · Seamless Service
          </p>
        </div>
      </div>
    </footer>
  );
}

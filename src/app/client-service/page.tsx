import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Client Services",
  description:
    "Pick a tax or bookkeeping plan and get started with GagoTax.",
  // NOTE: Hidden from search indexing so only people with the direct link find it.
  robots: { index: false, follow: false },
};

const packages = [
  {
    href: "/client-service/tax-services",
    eyebrow: "Tax Services",
    title: "Tax Preparation Plans",
    description:
      "Individual and business tax preparation — from simple returns to complex multi-state filings.",
    features: [
      "1040 individual returns",
      "LLC, S-Corp, Partnership returns",
      "Multi-state & prior-year",
      "Review and e-sign in the client portal",
    ],
    accent: "from-brand-blue-500 to-brand-blue-700",
  },
  {
    href: "/client-service/bookkeeping",
    eyebrow: "Bookkeeping",
    title: "Monthly Bookkeeping Plans",
    description:
      "Peace of mind knowing your company's books are up-to-date. Monthly or annual plans.",
    features: [
      "Transactions categorized monthly",
      "Bank & credit card reconciliation",
      "Monthly P&L and Balance Sheet",
      "Save 20% with annual plans",
    ],
    accent: "from-brand-green-500 to-brand-green-700",
  },
];

export default function ClientServicePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-grid-navy pb-16 pt-24 text-white sm:pb-24 sm:pt-32">
          <div className="orb left-[-10%] top-0 h-[420px] w-[420px] bg-brand-blue-500" />
          <div className="orb right-[-10%] bottom-0 h-[420px] w-[420px] bg-brand-green-500" />

          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green-400" />
                Client Services
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Get started with a{" "}
                <span className="text-gradient-brand">GagoTax plan.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Pick the service you need. Review the plans, choose what fits,
                and we&apos;ll take it from there.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2">
              {packages.map((pkg) => (
                <Link
                  key={pkg.href}
                  href={pkg.href}
                  className="card-lift group relative flex flex-col overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm hover:border-navy-900/20 hover:shadow-xl sm:p-10"
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pkg.accent} text-white shadow-md`}
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-text">
                    {pkg.eyebrow}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">
                    {pkg.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-text">
                    {pkg.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-navy-900"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-green-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-700 transition-colors group-hover:text-brand-blue-800">
                    See plans & pricing
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-navy-900/10 bg-cream-50 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-navy-900">
                    Not sure what you need?
                  </div>
                  <p className="mt-1 text-base text-slate-text">
                    Book a 30-minute discovery call and we&apos;ll recommend a plan.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  Book a consultation
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

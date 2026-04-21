"use client";

import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

const pillars = [
  {
    id: "tax",
    kicker: "01 · Tax",
    title: "Tax Services",
    description:
      "Individual and business returns done right. Plus planning so April isn't a surprise.",
    features: [
      "Individual Tax Returns",
      "Business Returns (LLC, S-Corp, Partnership, Non-profit 990)",
      "Quarterly & Year-End Tax Planning",
      "Notices & Compliance Support",
    ],
    accent: "from-brand-blue-500 to-brand-blue-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6" />
        <path d="M9 16h6" />
        <path d="M9 8h6" />
        <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    id: "accounting",
    kicker: "02 · Accounting",
    title: "Accounting Services",
    description:
      "Clean books, clear financials, and the numbers you need to make decisions.",
    features: [
      "Bookkeeping (monthly or catch-up)",
      "Payroll Support & Coordination",
      "Financial Statements (P&L, Balance Sheet)",
      "1099 Contractor Filing",
    ],
    accent: "from-brand-green-500 to-brand-green-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 4 4 6-6" />
        <path d="M17 9h4v4" />
      </svg>
    ),
  },
  {
    id: "consulting",
    kicker: "03 · Advisory",
    title: "Advisory Services",
    description:
      "Year-round strategy — entity choice, tax planning, and keeping more of what you earn.",
    features: [
      "Business Advisory",
      "Entity Structure & Tax Strategy (LLC vs S-Corp)",
      "Financial Planning Guidance",
      "Year-Round Tax Strategy",
    ],
    accent: "from-navy-800 to-navy-950",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" />
        <path d="M12 22v-6" />
        <path d="M17 5.5 13.5 9" />
        <path d="M7 5.5 10.5 9" />
        <path d="M17 18.5 13.5 15" />
        <path d="M7 18.5 10.5 15" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export function ServicesPillars() {
  return (
    <section id="services" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <AnimateIn from="left">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-500" />
                Why choose us
              </div>
              <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
                Three pillars. One partner.
              </h2>
            </div>
          </div>
        </AnimateIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <AnimateIn key={pillar.id} delay={idx * 120} from="left" className="flex flex-col">
              <div
                id={pillar.id}
                className="card-lift group relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-navy-900/12 bg-white p-8 shadow hover:border-navy-900/20 hover:shadow-xl"
              >
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.accent} text-white shadow-md`}>
                  <div className="h-6 w-6">{pillar.icon}</div>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-slate-text">
                  {pillar.kicker}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-navy-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-text">
                  {pillar.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-navy-900">
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
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${pillar.id}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-700 transition-colors hover:text-brand-blue-800"
                >
                  Learn more
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

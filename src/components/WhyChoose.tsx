"use client";

import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

const benefits = [
  {
    title: "Proactive, not reactive",
    description:
      "Quarterly check-ins and year-end planning. Strategies that move your tax bill — not just a recap.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Industry-specific expertise",
    description:
      "Music, entertainment, film, fashion, real estate — we know the rules that apply to you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "One firm for everything",
    description:
      "Tax, books, payroll, advisory — all under one roof. Nothing falls through the cracks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Built for complexity",
    description:
      "W-2 + 1099 + K-1 + rentals? Multi-state? Prior-year catch-up? We're built for it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left column */}
          <AnimateIn from="left" className="lg:col-span-5">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green-600" />
              Why GagoTax
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
              A CPA partner built specifically for your needs.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-text">
              Most firms disappear after April. We don&apos;t — we&apos;re in your
              corner year-round.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-green-500/20 transition-all hover:bg-brand-green-400 hover:shadow-brand-green-500/30"
            >
              Contact Us
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </AnimateIn>

          {/* Right grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((benefit, idx) => (
              <AnimateIn key={benefit.title} delay={idx * 120} from="left" className="flex flex-col">
                <div className="group card-lift flex flex-1 flex-col rounded-3xl border border-navy-900/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-navy-800 hover:bg-navy-900 hover:shadow-lg">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-100 text-navy-900 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                    <div className="h-5 w-5">{benefit.icon}</div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-900 transition-colors duration-300 group-hover:text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-text transition-colors duration-300 group-hover:text-white/70">
                    {benefit.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

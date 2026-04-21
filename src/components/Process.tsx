"use client";

import { AnimateIn } from "./AnimateIn";

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "Tell us about your business, income streams, and goals. We'll map out exactly where we can help.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.09h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Clear scope & flat fee",
    description:
      "No mystery pricing. You get a written scope and flat fee before we do a single thing.",
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
    step: "03",
    title: "Onboarding",
    description:
      "We collect documents through a secure portal, clean up any prior-year gaps, and set up your systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Year-round partnership",
    description:
      "Quarterly check-ins, tax projections, compliance — we're in your corner every month, not just April.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-600">
            How It Works
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy-900 sm:text-5xl">
            Getting started is simple.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From first call to year-round partner — four steps, no surprises.
          </p>
        </div>

        {/* Stacked cards — each animates in as you scroll */}
        <div className="mx-auto mt-14 max-w-2xl space-y-4">
          {steps.map((s, idx) => (
            <AnimateIn key={s.step} delay={idx * 120} from="left">
              <div className="relative flex gap-5 rounded-2xl border border-navy-900/5 bg-white p-7 shadow-sm">
                {/* Step number — top right */}
                <span className="absolute right-6 top-5 text-sm font-bold text-navy-900/45">
                  {s.step}
                </span>

                {/* Icon circle */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-500 text-white">
                  <div className="h-5 w-5">{s.icon}</div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-text">
                    {s.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

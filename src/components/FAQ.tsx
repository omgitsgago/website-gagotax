"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

const faqs = [
  {
    question: "What types of tax returns do you prepare?",
    answer:
      "We handle individual 1040s (including W-2, 1099, K-1, rental, and stock comp income), business returns for LLCs, S-Corps, and Partnerships (1120S, 1065, Schedule C), non-profit returns (Form 990), multi-state filings, prior-year catch-up returns, and international compliance including FBARs and foreign income reporting.",
  },
  {
    question: "Do you work with clients year-round?",
    answer:
      "Yes — that's the whole point. We don't disappear after April. We offer ongoing advisory and subscription plans that include quarterly check-ins, tax projections, and direct access to us whenever questions come up. Not just a once-a-year return.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Every engagement is scoped and quoted in writing before we start — based on your business type, income mix, number of states, and complexity. No surprise billing, ever.",
  },
  {
    question: "Can you handle multi-state tax filings?",
    answer:
      "Yes. We file in all 50 states and handle part-year residency, sourcing rules, and state-specific credits and deductions.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work extensively with clients in music, entertainment, film & production, fashion, real estate, professional services, e-commerce, consulting, and many others. If your tax situation is complex, you're probably a good fit.",
  },
  {
    question: "How do I share documents with you?",
    answer:
      "Everything goes through your secure client portal — document uploads, e-signatures, messages, and your final returns. No emailing PDFs back and forth.",
  },
  {
    question: "Do you offer bookkeeping services?",
    answer:
      "Yes. We offer monthly bookkeeping plans — bank reconciliation, categorization, monthly P&L and balance sheet. Bookkeeping clients can also add tax preparation at a bundled rate. We also build custom plans for businesses with unique needs. Reach out via our Contact page to discuss what makes sense for you.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start with a free 30-minute call. We'll learn about your situation, answer your questions, and scope out what working together looks like — no pressure, no commitment.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
          <AnimateIn from="left" className="lg:col-span-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-text">
                Still have questions? We&apos;re happy to talk through your
                situation before you commit to anything.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-green-500/20 transition-all hover:bg-brand-green-400 hover:shadow-brand-green-500/30"
              >
                Contact Us
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateIn>

          {/* Right column — accordion */}
          <AnimateIn from="left" delay={120} className="lg:col-span-8">
            <dl className="divide-y divide-navy-900/10">
              {faqs.map((faq, idx) => {
                const panelId = `faq-panel-${idx}`;
                const buttonId = `faq-trigger-${idx}`;
                const isOpen = openIdx === idx;
                return (
                  <div key={faq.question} className="py-5">
                    <dt>
                      <button
                        id={buttonId}
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between gap-4 text-left"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span className="text-base font-semibold text-navy-900">
                          {faq.question}
                        </span>
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 transition-colors hover:bg-cream-50">
                          <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        </span>
                      </button>
                    </dt>
                    <dd
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="mt-4 text-sm leading-relaxed text-slate-text"
                    >
                      {faq.answer}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

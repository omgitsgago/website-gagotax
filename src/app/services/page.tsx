import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tax, accounting & advisory from GagoTax — individual and business returns, bookkeeping, payroll, 1099s, entity strategy, and year-round planning.",
  alternates: { canonical: "/services" },
};

const categories = [
  {
    id: "tax",
    eyebrow: "Tax Services",
    eyebrowColor: "text-brand-blue-600",
    dotColor: "bg-brand-blue-500",
    title: "Tax returns done with strategy built in.",
    description:
      "From simple W-2 filings to complex multi-entity, multi-state returns, we prepare with the full year in mind — not just April.",
    image: "/photos/tax-accounting.jpg",
    imageAlt: "Tax preparation at GagoTax",
    items: [
      {
        name: "Individual Tax Returns",
        detail:
          "1040 with schedules for W-2, 1099, K-1, rental, stock comp, and multi-state income.",
      },
      {
        name: "Business Tax Returns",
        detail:
          "LLC, S-Corp, Partnership returns (1120S, 1065), and Non-profit returns (Form 990) — with owner coordination and basis tracking.",
      },
      {
        name: "Tax Planning",
        detail:
          "Quarterly projections and year-end planning sessions to make tax moves while they still count.",
      },
      {
        name: "Notices & Compliance",
        detail:
          "IRS and state notices handled end-to-end — responses, amendments, and payment plans when needed.",
      },
    ],
  },
  {
    id: "accounting",
    eyebrow: "Accounting Services",
    eyebrowColor: "text-brand-green-600",
    dotColor: "bg-brand-green-500",
    title: "Clean books, clear numbers, confident decisions.",
    description:
      "Accurate financials are the foundation of every tax-saving strategy. We keep them tight so nothing slips.",
    image: "/photos/personal-finance.jpg",
    imageAlt: "Bookkeeping and financial statements",
    items: [
      {
        name: "Bookkeeping",
        detail:
          "Monthly close, reconciliations, and categorization — plus prior-year catch-up when things have drifted.",
      },
      {
        name: "Payroll Support & Coordination",
        detail:
          "We work with your payroll provider to make sure payroll is set up correctly and reports flow accurately to tax.",
      },
      {
        name: "Financial Statements",
        detail:
          "Monthly P&L and Balance Sheet, plus cash-flow visibility you can actually read and act on.",
      },
      {
        name: "1099 Contractor Filing",
        detail:
          "Year-end 1099-NEC / 1099-MISC filings, W-9 collection, and state e-file requirements handled.",
      },
    ],
  },
  {
    id: "consulting",
    eyebrow: "Advisory Services",
    eyebrowColor: "text-navy-700",
    dotColor: "bg-navy-700",
    title: "Advisory that pays for itself.",
    description:
      "Entity structure, compensation strategy, reinvestment planning — real decisions, real numbers, real impact.",
    image: "/photos/consulting.jpg",
    imageAlt: "Advisory consulting",
    items: [
      {
        name: "Business Advisory",
        detail:
          "On-call CPA partner for the big questions — hiring, pricing, partner structure, bonus timing.",
      },
      {
        name: "Entity Structure & Tax Strategy",
        detail:
          "LLC vs S-Corp evaluation, reasonable compensation, and multi-entity optimization modeling.",
      },
      {
        name: "Financial Planning Guidance",
        detail:
          "Retirement plan selection (Solo 401(k), SEP, Defined Benefit), and long-term wealth coordination.",
      },
      {
        name: "Year-Round Tax Strategy",
        detail:
          "Quarterly reviews with concrete moves — not just projections, but actions with deadlines.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-cream-50 pb-16 pt-24 sm:pb-20 sm:pt-32">
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-600">
                What we do
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
                Tax, accounting, and advisory —{" "}
                <span className="text-brand-blue-500 whitespace-nowrap">under one roof.</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Every engagement is scoped to your situation and quoted in writing
                before we start. No surprises, no mystery.
              </p>
            </div>
          </div>
        </section>

        {/* Category sections */}
        {categories.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            className={idx % 2 === 0 ? "bg-white py-20 sm:py-28" : "bg-cream-50 py-20 sm:py-28"}
          >
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
              <div
                className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-16 ${
                  idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                    <Image
                      src={cat.image}
                      alt={cat.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  {/* Eyebrow above title */}
                  <div className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-widest ${cat.eyebrowColor}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${cat.dotColor}`} />
                    {cat.eyebrow}
                  </div>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                    {cat.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-slate-text">
                    {cat.description}
                  </p>
                  <ul className="mt-8 space-y-5">
                    {cat.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex gap-4 rounded-2xl border border-navy-900/10 bg-white p-5"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-700">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-base font-bold text-navy-900">
                            {item.name}
                          </div>
                          <p className="mt-1 text-sm leading-relaxed text-slate-text">
                            {item.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-green-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-green-500/20 transition-all hover:bg-brand-green-400 hover:shadow-brand-green-500/30"
                    >
                      Get a quote
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

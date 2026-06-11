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

const taxIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <path d="M9 12h6" /><path d="M9 16h6" /><path d="M9 8h6" />
    <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
  </svg>
);

const accountingIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <path d="M3 3v18h18" /><path d="m7 15 4-4 4 4 6-6" /><path d="M17 9h4v4" />
  </svg>
);

const advisoryIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <path d="M12 2v6" /><path d="M12 22v-6" />
    <path d="M17 5.5 13.5 9" /><path d="M7 5.5 10.5 9" />
    <path d="M17 18.5 13.5 15" /><path d="M7 18.5 10.5 15" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const categories = [
  {
    id: "tax",
    eyebrow: "Tax Services",
    eyebrowColor: "text-brand-blue-600",
    dotColor: "bg-brand-blue-500",
    title: "Tax returns done with strategy built in.",
    description:
      "From simple W-2 filings to complex multi-entity, multi-state returns, we prepare with the full year in mind — not just April.",
    iconBg: "from-brand-blue-500 to-brand-blue-700",
    iconEl: taxIcon,
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
    iconBg: "from-brand-green-500 to-brand-green-700",
    iconEl: accountingIcon,
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
    iconBg: "from-navy-800 to-navy-950",
    iconEl: advisoryIcon,
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
              <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Left: icon + label */}
                <div className="flex flex-col items-center justify-center lg:col-span-4">
                  <div className={`inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${cat.iconBg} text-white shadow-xl`}>
                    <div className="h-12 w-12">{cat.iconEl}</div>
                  </div>
                  <p className={`mt-5 text-sm font-bold uppercase tracking-widest ${cat.eyebrowColor}`}>{cat.eyebrow}</p>
                </div>

                {/* Right: content */}
                <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
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

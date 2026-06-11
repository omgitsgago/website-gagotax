"use client";

import Link from "next/link";
import { useState } from "react";

type Billing = "monthly" | "annual";
type Category = "tax" | "bookkeeping";

type Feature = string | { text: string; bold?: boolean; footnote?: 1 | 2 | 3 | 4 | 5 | 6 };

type Plan = {
  id: string;
  name: string;
  monthly: number;
  annualPerMonth: number;
  annualTotal: number;
  tagline: string;
  description: string;
  featuresHeader: string | null;
  features: Feature[];
  cta: string;
  hrefMonthly: string;
  hrefAnnual: string;
  highlight: boolean;
  advisory?: boolean;
};

const taxPlans: Plan[] = [
  {
    id: "tax-premium",
    name: "Premium",
    monthly: 50,
    annualPerMonth: 40,
    annualTotal: 480,
    tagline: "For filers who want a CPA in their corner.",
    description:
      "Year-round CPA access, bigger discounts, and help when the IRS comes knocking.",
    featuresHeader: null,
    features: [
      "Maximum Refund Guarantee",
      "Free federal e-filing",
      "10% off tax returns, notices & other services",
      { text: "Text your CPA", footnote: 1 },
      "IRS & state notice response",
      { text: "Annual tax planning meeting", footnote: 2 },
      "Free unlimited additional state returns",
      "Free quarterly tax estimates",
      "Free federal extension filing",
    ],
    cta: "Choose Premium",
    hrefMonthly: "https://buy.stripe.com/8x23cw4Aa5lc0Kieklbsc0j",
    hrefAnnual: "https://buy.stripe.com/eVq3cw1nY9BsakSfopbsc0k",
    highlight: false,
  },
  {
    id: "tax-platinum",
    name: "Platinum",
    monthly: 100,
    annualPerMonth: 80,
    annualTotal: 960,
    tagline: "Proactive tax planning, built around your situation.",
    description:
      "For clients where planning ahead saves real money — not just filing, but strategizing.",
    featuresHeader: "Everything in Premium, plus:",
    features: [
      "15% off tax returns, notices & other services",
      "Priority turnaround on all requests & tax prep",
      "10% off bookkeeping subscription",
      { text: "Audit support", footnote: 3 },
      { text: "Two tax planning meetings per year", footnote: 4 },
      { text: "Free Annual Statement of Information filing", footnote: 5 },
      { text: "1099 filing — up to 5", footnote: 6 },
    ],
    cta: "Choose Platinum",
    hrefMonthly: "https://buy.stripe.com/9B69AU7Mm00S50y0tvbsc0m",
    hrefAnnual: "https://buy.stripe.com/6oU6oI6IibJA50y3FHbsc0l",
    highlight: true,
  },
  {
    id: "tax-advisory",
    name: "Advisory",
    monthly: 300,
    annualPerMonth: 240,
    annualTotal: 2880,
    tagline: "Your CPA on retainer.",
    description:
      "For business owners, investors, and anyone whose tax situation demands year-round strategy — not just a return.",
    featuresHeader: "Everything in Platinum, plus:",
    features: [
      "Monthly strategy sessions — no limit on meeting time",
      "Proactive monitoring of tax law changes affecting you",
      "Entity structure review & optimization",
      "Priority access — same-day response",
      "20% off tax returns, notices & other services",
      "15% off bookkeeping subscription",
      "Year-round tax projection updates",
    ],
    cta: "Choose Advisory",
    hrefMonthly: "https://buy.stripe.com/cNieVe8Qq5lcakSccdbsc0h",
    hrefAnnual: "https://buy.stripe.com/14AeVe6Ii9Bs2Sq0tvbsc0i",
    highlight: false,
    advisory: true,
  },
];

const bookkeepingPlans: Plan[] = [
  {
    id: "bk-startup",
    name: "Startup",
    monthly: 350,
    annualPerMonth: 280,
    annualTotal: 3360,
    tagline: "For new businesses and sole proprietors.",
    description:
      "Clean books from day one — the financial foundation you need while you focus on building.",
    featuresHeader: null,
    features: [
      "Up to 30 transactions / month",
      "1 linked account",
      "Income Statement & Balance Sheet reports",
      "Accounts Payable & Receivable reports",
      "Monthly account reconciliation",
      "Over-limit fee: $7 / transaction",
      { text: "Assistance from your CPA", footnote: 1 },
    ],
    cta: "Choose Startup",
    hrefMonthly: "https://buy.stripe.com/6oU28sc2C9Bs64C7VXbsc0r",
    hrefAnnual: "https://buy.stripe.com/14A14o0jU8xo78G5NPbsc0s",
    highlight: false,
  },
  {
    id: "bk-standard",
    name: "Standard",
    monthly: 550,
    annualPerMonth: 440,
    annualTotal: 5280,
    tagline: "For growing businesses ready for deeper reporting.",
    description:
      "Bigger reporting, payroll setup, and tax-ready financials — so April is never a scramble.",
    featuresHeader: "Everything in Startup, plus:",
    features: [
      "Up to 80 transactions / month",
      "Up to 2 linked accounts",
      "Payroll setup with Gusto",
      "Over-limit fee: $5 / transaction",
      "Financial reports prepared for tax filing",
    ],
    cta: "Choose Standard",
    hrefMonthly: "https://buy.stripe.com/eVq9AUaYy6pgfFc901bsc0p",
    hrefAnnual: "https://buy.stripe.com/28EcN6giSfZQ50y0tvbsc0q",
    highlight: true,
  },
  {
    id: "bk-deluxe",
    name: "Deluxe",
    monthly: 750,
    annualPerMonth: 600,
    annualTotal: 7200,
    tagline: "Full-service bookkeeping with CPA planning.",
    description:
      "White-glove bookkeeping with contractor filings and ongoing CPA-led financial planning.",
    featuresHeader: "Everything in Standard, plus:",
    features: [
      "Up to 150 transactions / month",
      "Up to 4 linked accounts",
      "Over-limit fee: $4 / transaction",
      { text: "Contractor 1099 filings", footnote: 2 },
      "Company financial planning with CPA",
    ],
    cta: "Choose Deluxe",
    hrefMonthly: "https://buy.stripe.com/14A28sc2C290boWfopbsc0n",
    hrefAnnual: "https://buy.stripe.com/9B67sM3w6eVMeB8gstbsc0o",
    highlight: false,
  },
];

export function PricingPlans({
  defaultCategory = "tax",
}: {
  defaultCategory?: Category;
}) {
  const [billing, setBilling] = useState<Billing>("annual");
  const [category, setCategory] = useState<Category>(defaultCategory);

  const plans = category === "tax" ? taxPlans : bookkeepingPlans;

  return (
    <section className="bg-cream-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Category tabs */}
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Plan category"
            className="flex w-full max-w-xs justify-center gap-8 border-b border-navy-900/10"
          >
            <TabButton
              label="Tax Plans"
              active={category === "tax"}
              onClick={() => setCategory("tax")}
            />
            <TabButton
              label="Bookkeeping"
              active={category === "bookkeeping"}
              onClick={() => setCategory("bookkeeping")}
            />
          </div>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex justify-center">
          <div
            role="tablist"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 rounded-full bg-white p-1 shadow-sm ring-1 ring-navy-900/5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={billing === "monthly"}
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                billing === "monthly"
                  ? "bg-navy-900 text-white shadow-sm"
                  : "text-navy-900 hover:text-navy-700"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={billing === "annual"}
              onClick={() => setBilling("annual")}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                billing === "annual"
                  ? "bg-navy-900 text-white shadow-sm"
                  : "text-navy-900 hover:text-navy-700"
              }`}
            >
              Annual
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider ${
                  billing === "annual"
                    ? "bg-brand-green-500 text-navy-950"
                    : "bg-brand-green-100 text-brand-green-700"
                }`}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="mt-10 grid gap-6 pt-4 sm:gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>

        {/* Fine print — bookkeeping only */}
        {category === "bookkeeping" && (
          <div className="mt-8 space-y-1.5 px-2">
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">1</sup>Up to 1 email or call per month during business hours.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">2</sup>1099 preparation is included. Client is responsible for any applicable IRS filing fees.
            </p>
          </div>
        )}

        {/* Fine print — tax plans only */}
        {category === "tax" && (
          <div className="mt-8 space-y-1.5 px-2">
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">1</sup>Your CPA will respond during business hours only.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">2</sup>One scheduled meeting per year, up to 45 minutes.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">3</sup>Includes first 10 hours of IRS or state audit representation at no charge. Additional hours billed at a discounted member rate.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">4</sup>Two scheduled meetings per year, up to 45 minutes each.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">5</sup>California Statement of Information filing for one entity.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">6</sup>Up to 5 contractor 1099-NEC filings included per year.
            </p>

            {/* Commitment policy */}
            <div className="mt-6 rounded-2xl border border-navy-900/10 bg-white p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-navy-900">
                All plans require a 12-month commitment.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Whether you choose monthly or annual billing, your subscription is a 12-month agreement. Monthly billing does not mean month-to-month — it is a 12-month commitment paid in monthly installments. Annual billing pays the full commitment upfront at a 20% discount. Cancellations must be requested via email. If you cancel before your 12-month commitment is fulfilled, you will be invoiced for the remaining months.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`relative -mb-px pb-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
        active ? "text-navy-900" : "text-slate-text hover:text-navy-900"
      }`}
    >
      {label}
      <span
        aria-hidden
        className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand-green-500 transition-all ${
          active ? "w-16" : "w-0"
        }`}
      />
    </button>
  );
}

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const showAnnual = billing === "annual";
  const shownPrice = showAnnual ? plan.annualPerMonth : plan.monthly;
  const href = showAnnual ? plan.hrefAnnual : plan.hrefMonthly;

  const isAdvisory = plan.advisory === true;

  return (
    <div
      className={`relative flex flex-col rounded-3xl p-8 transition-shadow ${
        plan.highlight
          ? "bg-navy-950 text-white shadow-xl"
          : isAdvisory
          ? "border border-amber-200 bg-amber-50 shadow-sm hover:shadow-md"
          : "border border-navy-900/10 bg-white shadow-sm hover:shadow-md"
      }`}
    >
      {plan.highlight && (
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green-500 px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-navy-950 shadow-md">
          Most popular
        </div>
      )}

      {/* Plan name */}
      <div
        className={`text-lg font-bold uppercase tracking-[0.25em] ${
          plan.highlight
            ? "text-brand-green-400"
            : isAdvisory
            ? "text-amber-700"
            : "text-brand-green-700"
        }`}
      >
        {plan.name}
      </div>

      {/* Tagline */}
      <div
        className={`mt-3 text-base italic ${
          plan.highlight ? "text-white/70" : "text-slate-text"
        }`}
      >
        {plan.tagline}
      </div>

      {/* Price */}
      <div className="mt-8">
        <div className="flex items-baseline gap-2">
          {showAnnual && (
            <span
              className={`text-xl font-medium line-through ${
                plan.highlight ? "text-white/40" : "text-slate-text/60"
              }`}
            >
              ${plan.monthly}
            </span>
          )}
          <span
            className={`text-5xl font-bold tracking-tight ${
              plan.highlight ? "text-white" : "text-navy-900"
            }`}
          >
            ${shownPrice}
          </span>
          <span
            className={`text-sm ${
              plan.highlight ? "text-white/60" : "text-slate-text"
            }`}
          >
            / mo
          </span>
        </div>
        <div
          className={`mt-2 text-xs ${
            plan.highlight ? "text-white/50" : "text-slate-text/80"
          }`}
        >
          {showAnnual
            ? `Billed annually — $${plan.annualTotal.toLocaleString()}/yr`
            : "Billed monthly"}
        </div>
      </div>

      {/* Description */}
      <p
        className={`mt-6 text-sm leading-relaxed ${
          plan.highlight ? "text-white/80" : "text-navy-900/85"
        }`}
      >
        {plan.description}
      </p>

      {/* Divider */}
      <div
        className={`my-6 h-px ${
          plan.highlight
            ? "bg-white/10"
            : isAdvisory
            ? "bg-amber-200"
            : "bg-navy-900/10"
        }`}
      />

      {/* Features */}
      {plan.featuresHeader && (
        <div
          className={`mb-4 text-sm font-bold ${
            plan.highlight ? "text-white" : "text-navy-900"
          }`}
        >
          {plan.featuresHeader}
        </div>
      )}
      <ul className="flex-1 space-y-3">
        {plan.features.map((f, i) => {
          const text = typeof f === "string" ? f : f.text;
          const bold = typeof f === "object" && f.bold;
          const footnote = typeof f === "object" ? f.footnote : undefined;
          return (
            <li
              key={`${plan.id}-${i}`}
              className={`flex items-start gap-3 text-sm leading-snug ${
                plan.highlight ? "text-white/90" : "text-navy-900"
              } ${bold ? "font-semibold" : ""}`}
            >
              <Check highlight={plan.highlight} advisory={isAdvisory} />
              <span>
                {text}
                {footnote && (
                  <sup
                    className={`ml-1 text-[10px] font-semibold ${
                      plan.highlight
                        ? "text-brand-green-400"
                        : isAdvisory
                        ? "text-amber-600"
                        : "text-brand-green-700"
                    }`}
                    aria-label={`See footnote ${footnote}`}
                  >
                    {footnote}
                  </sup>
                )}
              </span>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
          plan.highlight
            ? "bg-brand-green-500 text-navy-950 shadow-lg shadow-brand-green-500/20 hover:bg-brand-green-400"
            : isAdvisory
            ? "border border-amber-600 bg-white text-amber-700 hover:bg-amber-600 hover:text-white"
            : "border border-navy-900 bg-white text-navy-900 hover:bg-navy-900 hover:text-white"
        }`}
      >
        {plan.cta}
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
  );
}

function Check({ highlight, advisory }: { highlight: boolean; advisory?: boolean }) {
  return (
    <div
      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
        highlight
          ? "bg-brand-green-500/20 text-brand-green-400"
          : advisory
          ? "bg-amber-100 text-amber-600"
          : "bg-brand-green-100 text-brand-green-700"
      }`}
      aria-hidden="true"
    >
      <svg
        className="h-3 w-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
  );
}

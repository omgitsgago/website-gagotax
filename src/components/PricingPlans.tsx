"use client";

import Link from "next/link";
import { useState } from "react";

type Billing = "monthly" | "annual";
type Category = "tax" | "bookkeeping";

type Feature = string | { text: string; bold?: boolean; footnote?: 1 | 2 | 3 };

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
  href: string;
  highlight: boolean;
};

const taxPlans: Plan[] = [
  {
    id: "tax-essentials",
    name: "Essentials",
    monthly: 15,
    annualPerMonth: 12,
    annualTotal: 144,
    tagline: "For straightforward filers.",
    description:
      "Everything a simple return needs, priced so it never stings in April.",
    featuresHeader: null,
    features: [
      "Maximum Refund Guarantee",
      "5% off tax returns, notices & other services",
      "Free federal e-filing",
      "Free federal extension filing",
      "Review tax return with your CPA",
      { text: "Audit support", footnote: 3 },
    ],
    cta: "Choose Essentials",
    href: "/contact?plan=tax-essentials",
    highlight: false,
  },
  {
    id: "tax-signature",
    name: "Premium",
    monthly: 35,
    annualPerMonth: 28,
    annualTotal: 336,
    tagline: "Where most of our clients live.",
    description:
      "Year-round CPA access, bigger discounts, and help when the IRS comes knocking.",
    featuresHeader: "Everything in Essentials, plus:",
    features: [
      "10% off tax returns, notices & other services",
      { text: "Text your CPA (3 questions / month)", footnote: 1 },
      "IRS & state notice response",
      "Annual tax planning session",
      "Unlimited additional state returns",
      "Quarterly tax estimates — free",
      "Free federal extension filing",
    ],
    cta: "Choose Premium",
    href: "/contact?plan=tax-premium",
    highlight: true,
  },
  {
    id: "tax-concierge",
    name: "Platinum",
    monthly: 60,
    annualPerMonth: 48,
    annualTotal: 576,
    tagline: "Full-service, full-access.",
    description:
      "The white-glove tier — unlimited CPA access, audit support, and the deepest discounts we offer.",
    featuresHeader: "Everything in Premium, plus:",
    features: [
      "20% off tax returns, notices & other services",
      "15% off bookkeeping subscription",
      "Quarterly tax planning sessions",
      { text: "CPA call up to 50 min — no charge", footnote: 2 },
      "Unlimited CPA text access",
      "Free Annual Statement of Information filing",
      { text: "Priority turnaround on all requests & tax prep", bold: true },
    ],
    cta: "Choose Platinum",
    href: "/contact?plan=tax-platinum",
    highlight: false,
  },
];

const bookkeepingPlans: Plan[] = [
  {
    id: "bk-startup",
    name: "Startup",
    monthly: 250,
    annualPerMonth: 200,
    annualTotal: 2400,
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
      "Assistance from your CPA",
    ],
    cta: "Choose Startup",
    href: "/contact?plan=bk-startup",
    highlight: false,
  },
  {
    id: "bk-standard",
    name: "Standard",
    monthly: 400,
    annualPerMonth: 320,
    annualTotal: 3840,
    tagline: "For growing businesses ready for deeper reporting.",
    description:
      "Bigger reporting, payroll setup, and tax-ready financials — so April is never a scramble.",
    featuresHeader: "Everything in Startup, plus:",
    features: [
      "Up to 60 transactions / month",
      "Up to 2 linked accounts",
      "Payroll setup with Gusto",
      "Over-limit fee: $5 / transaction",
      "Financial reports prepared for tax filing",
    ],
    cta: "Choose Standard",
    href: "/contact?plan=bk-standard",
    highlight: true,
  },
  {
    id: "bk-deluxe",
    name: "Deluxe",
    monthly: 550,
    annualPerMonth: 440,
    annualTotal: 5280,
    tagline: "Full-service bookkeeping with CPA planning.",
    description:
      "White-glove bookkeeping with contractor filings and ongoing CPA-led financial planning.",
    featuresHeader: "Everything in Standard, plus:",
    features: [
      "Up to 100 transactions / month",
      "Up to 4 linked accounts",
      "Over-limit fee: $3 / transaction",
      "Contractor 1099 filings",
      { text: "Company financial planning with CPA", bold: true },
    ],
    cta: "Choose Deluxe",
    href: "/contact?plan=bk-deluxe",
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
        {/* Category tabs — on top */}
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

        {/* Billing toggle — below tabs */}
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

        {/* Discovery CTA footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-text">
            Not sure which plan fits?{" "}
            <Link
              href="/contact"
              className="font-semibold text-navy-900 underline underline-offset-4 hover:text-brand-blue-700"
            >
              Book a free 15-minute call →
            </Link>
          </p>
        </div>

        {/* Fine print — tax plans only */}
        {category === "tax" && (
          <div className="mt-6 space-y-1.5 px-2">
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">1</sup>Quick questions answered within the same business week. For complex matters, we&apos;ll schedule a call.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">2</sup>One CPA call per year, up to 50 minutes. Additional calls billed at standard rate.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              <sup className="mr-0.5 font-semibold">3</sup>Includes first 5 hours of IRS or state audit representation at no charge. Additional hours billed at a discounted member rate.
            </p>
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
      className={`relative -mb-px pb-3 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
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

  return (
    <div
      className={`relative flex flex-col rounded-3xl p-8 transition-shadow ${
        plan.highlight
          ? "bg-navy-950 text-white shadow-xl"
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
          plan.highlight ? "text-brand-green-400" : "text-brand-green-700"
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
          plan.highlight ? "bg-white/10" : "bg-navy-900/10"
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
              <Check highlight={plan.highlight} />
              <span>
                {text}
                {footnote && (
                  <sup
                    className={`ml-1 text-[10px] font-semibold ${
                      plan.highlight
                        ? "text-brand-green-400"
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
        href={plan.href}
        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
          plan.highlight
            ? "bg-brand-green-500 text-navy-950 shadow-lg shadow-brand-green-500/20 hover:bg-brand-green-400"
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

function Check({ highlight }: { highlight: boolean }) {
  return (
    <div
      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
        highlight
          ? "bg-brand-green-500/20 text-brand-green-400"
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

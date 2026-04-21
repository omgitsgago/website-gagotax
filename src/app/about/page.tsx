import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "GagoTax is a full-service CPA firm built for business owners, entrepreneurs, and professionals who want a year-round partner — not just a once-a-year tax preparer.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Strategy first",
    description:
      "We don't just prepare — we plan. Every engagement starts with a real conversation about your goals.",
  },
  {
    title: "Clear and candid",
    description:
      "Flat fees, plain-English explanations, and zero surprises. If something changes, you'll know before we bill.",
  },
  {
    title: "Specialized, not generic",
    description:
      "We go deep on real estate, entertainment, film, manufacturing, and professional services — because expertise compounds.",
  },
  {
    title: "Year-round, not April-only",
    description:
      "The best tax moves happen in Q2, Q3, and Q4. We're in your corner every quarter, not just filing season.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-cream-50 pb-16 pt-24 sm:pb-20 sm:pt-32">
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-600">
                About the firm
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
                Strategic tax savings.{" "}
                <span className="text-brand-blue-500 whitespace-nowrap">Built around you.</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                GagoTax is a full-service CPA firm helping individuals, business owners,
                entrepreneurs, and professionals stay compliant, strategically
                reduce taxes, and make confident financial decisions year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-blue-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-500" />
                  Our Approach
                </div>
                <h2 className="mt-5 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
                  More than returns.{" "}
                  <span className="block">A real financial partner.</span>
                </h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-slate-text lg:col-span-7">
                <p>
                  Most firms compress a full year of strategy into a frantic two
                  weeks in April. We think that&apos;s backwards — and it&apos;s
                  why smart business owners end up overpaying, missing elections,
                  or getting blindsided by surprise tax bills.
                </p>
                <p>
                  GagoTax is built the other way around. Strategy leads, filings
                  follow. We serve clients across real estate, entertainment, film,
                  manufacturing, and professional services — each with unique tax
                  rules, deductions, and reporting requirements — plus a range of
                  other industries.
                </p>
                <p>
                  Whether you&apos;re juggling W-2 + 1099 + K-1 + rental income,
                  navigating a multi-state situation, or cleaning up a prior-year
                  catch-up, we&apos;re built for complexity that other firms turn
                  away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image split */}
        <section className="bg-cream-50 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="flex flex-col items-center gap-6 lg:col-span-5">
                <div className="relative h-72 w-72 overflow-hidden rounded-full shadow-xl ring-4 ring-white sm:h-80 sm:w-80">
                  <Image
                    src="/photos/yakubu.jpg"
                    alt="Yakubu Gago, Founder & CPA at GagoTax"
                    fill
                    className="object-cover scale-125 object-[center_10%]"
                    sizes="320px"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-navy-900">Yakubu Gago</p>
                  <p className="text-sm text-slate-text">Founder &amp; CPA</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green-500" />
                  What we stand for
                </div>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                  Four values that shape every engagement.
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {values.map((v) => (
                    <div
                      key={v.title}
                      className="group rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-navy-800 hover:bg-navy-900 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-brand-green-500 transition-colors duration-300 group-hover:bg-brand-green-400" />
                        <h3 className="text-base font-bold text-navy-900 transition-colors duration-300 group-hover:text-white">
                          {v.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-text transition-colors duration-300 group-hover:text-white/70">
                        {v.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries band */}
        <section id="industries" className="bg-white py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-semibold uppercase tracking-widest text-brand-blue-600">
                Industries we know deeply
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Every industry has its own tax playbook. We know yours.
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {[
                "Real Estate",
                "Entertainment",
                "Film & Production",
                "Manufacturing",
                "Professional Services",
                "Creative Studios",
                "E-Commerce",
                "Consultants & Agencies",
                "Medical & Dental",
                "Construction",
              ].map((industry) => (
                <div
                  key={industry}
                  className="flex min-h-[72px] items-center justify-center rounded-2xl border border-navy-700/25 bg-white px-4 py-4 text-center text-xs font-semibold text-navy-900 shadow-sm"
                >
                  {industry}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-700 hover:text-brand-blue-800"
              >
                Don&apos;t see your industry? Let&apos;s talk →
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

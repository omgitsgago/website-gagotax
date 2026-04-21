import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingPlans } from "@/components/PricingPlans";

export const metadata: Metadata = {
  title: "Tax Services — Plans",
  description:
    "GagoTax membership plans — year-round CPA access, discounts on every filing, and audit support. Starting at $12/mo billed annually.",
  robots: { index: false, follow: false },
};

export default function TaxServicesPlansPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-cream-50 pb-16 pt-24 sm:pb-20 sm:pt-32">
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-600">
                Tax Plans
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
                File with confidence.{" "}
                <span className="text-brand-blue-500">No surprises.</span>
              </h1>
            </div>
          </div>
        </section>

        <PricingPlans defaultCategory="tax" />

        <section className="bg-white py-10">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 text-center">
            <Link
              href="/client-service"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-brand-blue-700"
            >
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
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Client Services
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

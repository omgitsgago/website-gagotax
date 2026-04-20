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
        <section className="relative overflow-hidden bg-navy-950 pb-16 pt-24 text-white sm:pb-20 sm:pt-32">
          {/* Dot grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          {/* Green glow — top center */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
            <div style={{ width: "900px", height: "500px", background: "radial-gradient(ellipse at 50% -5%, rgba(74,222,128,0.13) 0%, rgba(74,222,128,0.04) 40%, transparent 65%)" }} />
          </div>
          {/* Accent dots */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute right-[12%] top-[22%] h-2.5 w-2.5 rounded-full bg-brand-green-400/25" />
            <div className="absolute right-[7%] top-[48%] h-2 w-2 rounded-full bg-brand-blue-400/20" />
            <div className="absolute bottom-[20%] left-[8%] h-2 w-2 rounded-full bg-brand-green-400/20" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                File with confidence.
                <span className="block text-gradient-brand mt-2">No surprises.</span>
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

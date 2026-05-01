import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PricingPlans } from "@/components/PricingPlans";

export const metadata: Metadata = {
  title: "Tax Plans",
  description:
    "GagoTax membership plans — year-round CPA access, discounts on every filing, and audit support. Starting at $12/mo billed annually.",
  alternates: { canonical: "/taxplans" },
};

export default function TaxPlansPage() {
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
                File with confidence.
                <br />
                <span className="text-brand-blue-500">No surprises.</span>
              </h1>
            </div>
          </div>
        </section>

        <PricingPlans defaultCategory="tax" />
      </main>
      <Footer />
    </>
  );
}

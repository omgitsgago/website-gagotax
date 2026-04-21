import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach GagoTax. Book a free 30-minute call, request a scoped quote, or access your secure client portal. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-cream-50 pb-14 pt-24 sm:pb-20 sm:pt-32">
          <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-brand-blue-600">
                Get in touch
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
                Let&apos;s start a{" "}
                <span className="text-brand-blue-500 whitespace-nowrap">conversation.</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Tell us about your business and what you&apos;re looking for. We&apos;ll
                come back within one business day with next steps.
              </p>
            </div>
          </div>
        </section>

        {/* Contact split */}
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="sticky top-24 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-navy-900">
                      How we work together
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-text">
                      Most engagements start with a free 30-minute discovery call.
                      Afterward, you&apos;ll get a written scope and flat fee
                      before we do any work.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-wider text-navy-900">
                      Existing Client?
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-text">
                      Access documents, messages, and e-sign through your secure
                      portal.
                    </p>
                    <Link
                      href="https://gagoaccountingfinance.taxdome.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                    >
                      Client Portal
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Suspense fallback={<div className="h-96 rounded-3xl border border-navy-900/10 bg-cream-50" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

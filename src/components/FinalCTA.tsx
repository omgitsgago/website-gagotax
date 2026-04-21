import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

export function FinalCTA() {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <AnimateIn from="bottom">
          <div className="relative overflow-hidden rounded-[2rem] border border-navy-900/10 bg-cream-50 px-6 py-12 text-center text-navy-900 shadow-sm sm:px-12 sm:py-14">
            <div className="mx-auto max-w-xl">
              <h2 className="text-xl font-bold tracking-tight sm:text-3xl">
                Let&apos;s build a{" "}
                <span className="text-brand-blue-500">smarter</span> tax year —
                together.
              </h2>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-green-500/30 transition-all hover:bg-brand-green-400 hover:shadow-brand-green-500/40"
                >
                  Contact Us
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
                <a
                  href="mailto:contact@gagotax.com"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
                >
                  contact@gagotax.com
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

export function FinalCTA() {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <AnimateIn from="bottom">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-950 px-8 py-16 text-center text-white sm:px-16 sm:py-20">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s build a smarter tax year — together.
              </h2>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-green-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-brand-green-500/20 transition-all hover:bg-brand-green-400"
                >
                  Contact Us
                  <svg
                    className="h-4 w-4"
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
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

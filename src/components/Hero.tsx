import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-navy-900">
      {/* Right-side photo — bleeds to edge, fades left into white */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-3/5 lg:block"
      >
        <Image
          src="/photos/tax-accounting.jpg"
          alt=""
          fill
          priority
          sizes="60vw"
          className="object-cover"
        />
        {/* Fade mask — white on the left edge, transparent on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.92) 15%, rgba(255,255,255,0.45) 38%, rgba(255,255,255,0) 65%)",
          }}
        />
      </div>

      {/* Mobile/tablet: faint photo wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25 lg:hidden"
      >
        <Image
          src="/photos/tax-accounting.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.98) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-36 sm:px-8 sm:pt-44 lg:px-10 lg:pb-36 lg:pt-52">
        <div className="max-w-2xl">
          {/* Headline — lines animate in sequentially */}
          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight text-navy-900 sm:text-6xl lg:text-[5rem] lg:leading-[1]">
            <AnimateIn delay={0}>
              <span className="block">
                <span
                  className="word-wipe-blue"
                  data-text="Smarter"
                  style={{ ["--wipe-delay" as string]: "1100ms" }}
                >
                  Smarter
                </span>{" "}
                taxes.
              </span>
            </AnimateIn>
            <AnimateIn delay={120}>
              <span className="mt-2 block">
                Keep{" "}
                <span
                  className="word-wipe-blue"
                  data-text="more"
                  style={{ ["--wipe-delay" as string]: "1400ms" }}
                >
                  more
                </span>
                . Stress{" "}
                <span
                  className="word-wipe-blue"
                  data-text="less"
                  style={{ ["--wipe-delay" as string]: "1650ms" }}
                >
                  less
                </span>
                .
              </span>
            </AnimateIn>
          </h1>

          {/* Subtitle */}
          <AnimateIn delay={240}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              We&apos;re not the CPA you only talk to in April. We work with
              you year-round — planning ahead and keeping you ready before tax
              season hits.
            </p>
          </AnimateIn>

          {/* CTAs */}
          <AnimateIn delay={340} className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-green-500/30 transition-all hover:bg-brand-green-400 hover:shadow-brand-green-500/40"
            >
              Contact Us
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              See Our Services
            </a>
          </AnimateIn>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-slate-500 transition-colors hover:text-brand-blue-500"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>
        <svg
          className="h-5 w-5 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}


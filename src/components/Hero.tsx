import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Rich layered background */}

      {/* Subtle diagonal gradient overlay for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,10,28,0.9) 0%, rgba(8,18,40,0.6) 50%, rgba(4,12,30,0.85) 100%)",
        }}
      />

      {/* Primary green glow — top center, large */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
      >
        <div
          style={{
            width: "1100px",
            height: "700px",
            background:
              "radial-gradient(ellipse at 50% -5%, rgba(74,222,128,0.13) 0%, rgba(74,222,128,0.04) 40%, transparent 65%)",
          }}
        />
      </div>

      {/* Secondary blue glow — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(96,165,250,0.09) 0%, transparent 60%)",
          borderRadius: "50%",
        }}
      />

      {/* Tertiary green glow — right side, mid */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Floating accent dots */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* top-right cluster */}
        <div className="absolute right-[12%] top-[18%] h-3 w-3 rounded-full bg-brand-green-400/30" />
        <div className="absolute right-[8%] top-[32%] h-2 w-2 rounded-full bg-brand-blue-400/25" />
        <div className="absolute right-[18%] top-[12%] h-1.5 w-1.5 rounded-full bg-white/20" />
        <div className="absolute right-[22%] top-[38%] h-1 w-1 rounded-full bg-brand-green-400/40" />
        {/* bottom-left cluster */}
        <div className="absolute bottom-[28%] left-[8%] h-2.5 w-2.5 rounded-full bg-brand-green-400/25" />
        <div className="absolute bottom-[38%] left-[14%] h-1.5 w-1.5 rounded-full bg-brand-blue-400/20" />
        <div className="absolute bottom-[20%] left-[18%] h-1 w-1 rounded-full bg-white/15" />
        {/* top-left */}
        <div className="absolute left-[6%] top-[22%] h-2 w-2 rounded-full bg-white/12" />
        <div className="absolute left-[10%] top-[35%] h-1.5 w-1.5 rounded-full bg-brand-green-400/20" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-10 lg:pb-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-brand-green-400">
            Taxes simplified
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Smarter taxes.{" "}
            <span className="text-gradient-brand sm:whitespace-nowrap">Keep more. Stress less.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            We&apos;re not the CPA you only talk to in April. We work with you
            year-round — planning ahead and keeping you ready before tax season hits.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-green-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-brand-green-500/20 transition-all hover:bg-brand-green-400 hover:shadow-brand-green-500/30"
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
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              See Our Services
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-wider text-white/70">
            <span className="flex items-center gap-2">
              <CheckDot /> CPA-Led
            </span>
            <span className="flex items-center gap-2">
              <CheckDot /> Plain English
            </span>
            <span className="flex items-center gap-2">
              <CheckDot /> Year-Round
            </span>
            <span className="flex items-center gap-2">
              <CheckDot /> All 50 States
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <svg
          className="h-5 w-5 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>

      <div className="h-10 bg-gradient-to-b from-navy-950 to-white" />
    </section>
  );
}

function CheckDot() {
  return (
    <svg className="h-3.5 w-3.5 text-brand-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

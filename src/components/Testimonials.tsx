"use client";

import { AnimateIn } from "./AnimateIn";

const testimonials = [
  {
    quote:
      "GagoTax restructured our S-Corp setup and caught deductions our last firm missed for three years. The quarterly check-ins alone are worth it.",
    author: "Real estate investor",
    role: "Multi-property LLC",
  },
  {
    quote:
      "We finally have clean books, quarterly projections, and someone who actually picks up the phone. It's night and day from our old CPA.",
    author: "Production company owner",
    role: "Entertainment & film",
  },
  {
    quote:
      "I came with a messy situation — missed a couple years, had lots of W-2s and 1099s. They made it feel simple from start to end. Since coming over to the firm I haven't received any notices and I no longer owe the IRS and state. Thank you so much.",
    author: "Music Artist / DJ",
    role: "Individual · S-Corp",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <AnimateIn from="left">
          <h2 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
            What our clients say.
          </h2>
        </AnimateIn>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <AnimateIn key={idx} delay={idx * 120} from="left" className="flex h-full flex-col">
              <figure className="card-lift flex h-full flex-col justify-between rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm">
                <div>
                  <svg
                    className="h-8 w-8 text-brand-green-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9.132 4C5.206 6.364 3 9.833 3 14.194V20h6.132v-6.132H5.773c0-3.927 1.834-6.364 4.731-8.201L9.132 4Zm9.868 0c-3.924 2.364-6.132 5.833-6.132 10.194V20H19v-6.132h-3.357c0-3.927 1.833-6.364 4.73-8.201L19 4h-.001Z" />
                  </svg>
                  <blockquote className="mt-5 text-base leading-relaxed text-navy-900">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-navy-900/10 pt-5">
                  <div className="text-sm font-semibold text-navy-900">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-text">{t.role}</div>
                </figcaption>
              </figure>
            </AnimateIn>
          ))}
        </div>

        <p className="mt-8 text-center text-xs italic text-slate-text">
          Drawn from client engagements. Real names and details withheld for privacy.
        </p>
      </div>
    </section>
  );
}

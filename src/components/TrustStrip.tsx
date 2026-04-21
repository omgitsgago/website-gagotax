const industries = [
  "Real Estate",
  "Music & Entertainment",
  "Film & Production",
  "Songwriters & Artists",
  "Fashion & Apparel",
  "Creative Studios",
  "Professional Services",
  "Consultants & Agencies",
  "E-Commerce",
  "Medical & Dental",
  "Hospitality",
];

export function TrustStrip() {
  return (
    <section className="border-y border-navy-900/5 bg-white py-8">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-text">
          Trusted by businesses across
        </p>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-3">
            {[...industries, ...industries].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap rounded-full border border-navy-700/25 bg-white px-5 py-2 text-sm font-medium text-navy-900 shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

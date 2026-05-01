"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Tax Preparation (Individual)",
  "Tax Preparation (Business)",
  "Tax Planning & Strategy",
  "Bookkeeping / Accounting",
  "Payroll Coordination",
  "Advisory / Consulting",
  "Not sure yet — need guidance",
];

// Map ?plan=<slug> values on incoming links to a `services` option.
const PLAN_TO_SERVICE: Record<string, string> = {
  // Tax filing
  "individual-standard": "Tax Preparation (Individual)",
  "individual-complex": "Tax Preparation (Individual)",
  business: "Tax Preparation (Business)",
  // Tax membership plans
  "tax-essentials": "Tax Planning & Strategy",
  "tax-signature": "Tax Planning & Strategy",
  "tax-concierge": "Advisory / Consulting",
  // Legacy tax plan slugs
  "tax-basic": "Tax Planning & Strategy",
  "tax-premium": "Tax Planning & Strategy",
  "tax-platinum": "Advisory / Consulting",
  // Bookkeeping plans
  "bk-startup": "Bookkeeping / Accounting",
  "bk-standard": "Bookkeeping / Accounting",
  "bk-deluxe": "Bookkeeping / Accounting",
  // Legacy slugs (keep for backward compat)
  "bk-essential": "Bookkeeping / Accounting",
  "bk-growth": "Bookkeeping / Accounting",
  "bk-scale": "Bookkeeping / Accounting",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const searchParams = useSearchParams();
  const planParam = searchParams?.get("plan") ?? "";
  const defaultService = useMemo(
    () => PLAN_TO_SERVICE[planParam] ?? services[0],
    [planParam],
  );

  // React 19-idiomatic "derived state reset": if the URL-derived default
  // changes (client-side navigation between plans), snap the select to it.
  const [service, setService] = useState(defaultService);
  const [prevDefault, setPrevDefault] = useState(defaultService);
  if (prevDefault !== defaultService) {
    setPrevDefault(defaultService);
    setService(defaultService);
  }

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);
    if (planParam) fd.set("plan", planParam);

    // Inject Web3Forms access key if configured.
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (accessKey) fd.set("access_key", accessKey);

    // Prefer a real endpoint (Web3Forms, Formspree, etc.) if configured.
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          body: fd,
          headers: { Accept: "application/json" },
        });
        const data = await res.json().catch(() => ({ success: res.ok }));
        if (!data.success && !res.ok) throw new Error(`Form endpoint responded ${res.status}`);
        setStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
        setService(defaultService);
        return;
      } catch (err) {
        console.error(err);
        setStatus("error");
        return;
      }
    }

    // Fallback: compose a mailto so no submissions are ever lost.
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const company = String(fd.get("company") || "");
    const chosen = String(fd.get("service") || "");
    const message = String(fd.get("message") || "");

    const subject = encodeURIComponent(`New inquiry from ${name} — ${chosen}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService interest: ${chosen}${
        planParam ? `\nPlan referenced: ${planParam}` : ""
      }\n\n${message}`,
    );
    window.location.href = `mailto:contact@gagotax.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("success"), 400);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-navy-900/10 bg-cream-50 p-8 shadow-sm sm:p-10"
      noValidate
    >
      <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
        Tell us a little about you.
      </h2>
      <p className="mt-2 text-sm text-slate-text">
        All fields optional except name and email. The more you share, the more
        targeted our first response will be.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" name="name" required placeholder="Jane Doe" />
        <Field
          id="email"
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
        />
        <Field id="company" label="Company (optional)" name="company" placeholder="Acme LLC" />
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-navy-900"
          >
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-2 block w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 shadow-sm transition focus-visible:border-brand-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-200"
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-navy-900"
        >
          What&apos;s on your mind?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Quick summary of your situation — business type, income mix, any tax concerns or deadlines…"
          className="mt-2 block w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 shadow-sm transition focus-visible:border-brand-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-200"
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-brand-green-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-brand-green-500/20 transition-all hover:bg-brand-green-400 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
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
        </button>
      </div>

      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="mt-6 rounded-xl bg-brand-green-100 px-4 py-3 text-sm text-brand-green-800"
        >
          {endpoint
            ? "Message sent! We'll get back to you within 1–2 business days."
            : "Your email client opened — just hit send and you're good to go."}
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          Something went wrong. Please email{" "}
          <a
            href="mailto:contact@gagotax.com"
            className="font-semibold underline"
          >
            contact@gagotax.com
          </a>{" "}
          directly.
        </div>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-navy-900"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-brand-green-600" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 shadow-sm transition placeholder:text-slate-400 focus-visible:border-brand-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-200"
      />
    </div>
  );
}

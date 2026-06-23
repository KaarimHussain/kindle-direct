"use client";
import { useState } from "react";
import Image from "next/image";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import ImageContent from "@/app/assets/images/web-images-04.png";

const budgetRanges = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
];

const countryCodes = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+91", flag: "🇮🇳" },
  { code: "+61", flag: "🇦🇺" },
  { code: "+971", flag: "🇦🇪" },
];

type Status = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amazon-orange/50 focus:border-amazon-orange transition bg-white";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    setStatus("loading");

    const fullPhone = form.phone.trim()
      ? `${form.countryCode} ${form.phone.trim()}`
      : "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: fullPhone,
          budget: form.budget,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setStatus("success");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* ── Left: Form ── */}
        <div>
          <h2 className="text-3xl font-serif text-gray-900 mb-8">
            Reach out to us today!
          </h2>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 size={44} className="text-amazon-orange mb-4" />
              <h3 className="text-gray-900 font-semibold text-lg mb-2">Message Sent!</h3>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-5">
                Our team will review your project and reach out within 1 business hour.
              </p>
              <button
                onClick={() => {
                  setForm({ name: "", email: "", countryCode: "+1", phone: "", budget: "", message: "" });
                  setStatus("idle");
                  setServerError("");
                }}
                className="text-amazon-orange text-sm hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {status === "error" && serverError && (
                <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={inputCls}
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className={inputCls}
              />

              {/* Phone with country code */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-amazon-orange/50 focus-within:border-amazon-orange transition">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="bg-gray-50 border-r border-gray-300 px-3 py-3 text-sm text-gray-700 focus:outline-none shrink-0"
                >
                  {countryCodes.map(({ code, flag }) => (
                    <option key={code} value={code}>{flag} {code}</option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone"
                  className="flex-1 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
              </div>

              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={`${inputCls} text-gray-500`}
              >
                <option value="" disabled>Select Budget Range</option>
                {budgetRanges.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                className={`${inputCls} resize-y`}
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-amazon-dark hover:bg-amazon-dark/90 disabled:opacity-70 text-white font-bold text-sm py-3.5 rounded-lg transition-colors"
              >
                {status === "loading" ? (
                  <><Loader2 size={15} className="animate-spin" /> Sending…</>
                ) : (
                  "Get Started"
                )}
              </button>
            </form>
          )}
        </div>

        {/* ── Right: Trust badges image ── */}
        <div className="flex items-center justify-center">
          <Image
            src={ImageContent}
            alt="Our trusted partners and ratings — Google Partner, Clutch 4.9/5.0, Yelp, Crunchbase, Trustpilot"
            className="w-full max-w-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { X, Loader2, AlertCircle } from "lucide-react";

const services = [
  "Book Writing",
  "Book Publishing",
  "Book Editing",
  "Book Marketing",
  "Book Trailer",
  "Children's Books",
  "Poetry Publishing",
];

type Status = "idle" | "loading" | "success" | "error";

const fieldCls =
  "w-full rounded-lg px-4 py-2.5 text-sm text-white outline-none bg-white/5 border border-white/15 placeholder:text-white/30 focus:border-[#ff9900] transition-colors";

export default function GetStartedModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setStatus("success");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #1a2332 0%, #222e3e 60%, #1a2332 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Accent top bar */}
        <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #ff9900, #f0c040, #ff9900)" }} />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="px-8 pt-7 pb-8">
          {status === "success" ? (
            <div className="text-center py-6">
              <div
                className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full"
                style={{ background: "rgba(255,153,0,0.15)", border: "2px solid #ff9900" }}
              >
                <svg className="w-8 h-8 text-[#ff9900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">You&apos;re All Set!</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Thanks for reaching out. Our publishing experts will contact you within 24&nbsp;hours.
              </p>
              <button
                onClick={onClose}
                className="bg-[#ff9900] hover:bg-[#e68900] text-white font-semibold text-sm px-8 py-2.5 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-5">
                <span className="text-[#ff9900] text-xs font-bold uppercase tracking-widest block mb-1">Free Consultation</span>
                <h2 className="text-white text-2xl font-bold">Start Your Publishing Journey</h2>
                <p className="text-white/50 text-sm mt-1">Fill in your details and we&apos;ll get back to you shortly.</p>
              </div>

              {status === "error" && serverError && (
                <div className="flex items-start gap-2.5 bg-red-900/30 border border-red-500/40 text-red-300 rounded-lg px-4 py-3 text-xs mb-4">
                  <AlertCircle size={14} className="shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1 uppercase tracking-wide">Full Name *</label>
                  <input type="text" name="name" required placeholder="John Smith" value={form.name} onChange={handleChange} className={fieldCls} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white/70 text-xs font-semibold mb-1 uppercase tracking-wide">Email *</label>
                    <input type="email" name="email" required placeholder="you@email.com" value={form.email} onChange={handleChange} className={fieldCls} />
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-semibold mb-1 uppercase tracking-wide">Phone</label>
                    <input type="tel" name="phone" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} className={fieldCls} />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1 uppercase tracking-wide">Service Interested In *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-2.5 text-sm outline-none border border-white/15 focus:border-[#ff9900] transition-colors cursor-pointer"
                    style={{ background: "#222e3e", color: form.service ? "#fff" : "rgba(255,255,255,0.3)" }}
                  >
                    <option value="" disabled style={{ background: "#222e3e" }}>Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ background: "#222e3e", color: "#fff" }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1 uppercase tracking-wide">Tell Us About Your Project</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Briefly describe your book idea or project goals…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${fieldCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-1 w-full flex items-center justify-center gap-2 rounded-lg py-3 font-bold text-sm text-white disabled:opacity-70 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "linear-gradient(90deg, #ff9900, #f0a500)" }}
                >
                  {status === "loading" ? (
                    <><Loader2 size={14} className="animate-spin" /> Sending…</>
                  ) : (
                    "Submit — Get a Free Quote"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

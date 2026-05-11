import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import ContactForm from "@/components/contact/ContactForm";
import { Phone, Mail, MapPin, Clock, ChevronRight, Star, MessageCircle, BookOpen, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us — Free Consultation | Amazon Books Publishing",
  description: "Book your free 30-minute publishing consultation. We respond within 1 business hour. No pressure, no commitment — just clarity on your publishing path.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: contactInfo.phone,
    sub: contactInfo.hours,
    href: contactInfo.phoneTel,
    color: "bg-amazon-orange/10 border-amazon-orange/20",
    iconColor: "text-amazon-orange",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@amazonbookspublishing.com",
    sub: "We reply within 1 business hour",
    href: "mailto:hello@amazonbookspublishing.com",
    color: "bg-amazon-teal/10 border-amazon-teal/20",
    iconColor: "text-amazon-teal",
  },
  {
    icon: MapPin,
    label: "Our Offices",
    value: "Seattle, WA · New York, NY",
    sub: "Remote-first, globally available",
    href: null,
    color: "bg-amazon-navy/10 border-amazon-navy/20",
    iconColor: "text-amazon-navy",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 9am – 6pm EST",
    sub: "Weekend replies for urgent projects",
    href: null,
    color: "bg-amazon-surface border-border",
    iconColor: "text-muted-foreground",
  },
];

const quickLinks = [
  { label: "View Pricing Packages", href: "/services/book-writing#packages" },
  { label: "See Our Portfolio", href: "/portfolio" },
  { label: "Read FAQs", href: "/faqs" },
  { label: "About Our Team", href: "/about" },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f5f2eb] text-[#1f2937]">
        {/* ── Hero ── */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[440px] lg:min-h-[560px]">
              <div className="max-w-2xl h-full flex flex-col justify-center">
              <h1 className=" text-4xl font-serif md:text-6xl text-[#131a22] leading-tight tracking-tight mb-4">
                Let&apos;s Talk About{" "}
                <span className="text-[#f59e0b]">Your Book</span>
              </h1>
              <p className="text-[#3a4553] text-base md:text-lg leading-relaxed">
                No pressure, no hard sell. Just a 30-minute conversation where we learn about your project and tell you exactly how we&apos;d approach it — for free.
              </p>
            </div>
              <div className="min-h-[340px] md:min-h-[440px] lg:min-h-[560px] flex items-center justify-center">
                <svg viewBox="0 0 420 560" className="w-full h-full max-h-[560px] drop-shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
                  <defs>
                    <pattern id="contactHeroPattern" width="1" height="1" patternContentUnits="objectBoundingBox">
                      <image
                        href="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop"
                        width="1"
                        height="1"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </pattern>
                  </defs>
                  <path d="M210 98c-82 0-148 66-148 148 0 85 64 150 150 150 39 0 70-10 103-30l-22-36c-23 15-48 23-78 23-62 0-108-46-108-106 0-62 48-108 104-108 56 0 98 40 98 94 0 22-8 44-24 44-12 0-18-9-18-22v-73h-39v10c-12-9-27-14-44-14-41 0-69 31-69 70 0 39 29 70 67 70 19 0 35-7 47-20 8 13 23 20 40 20 38 0 62-33 62-87 0-78-58-133-141-133Zm-18 167c-18 0-30-13-30-30 0-16 12-30 30-30 17 0 30 13 30 30s-13 30-30 30Z" fill="url(#contactHeroPattern)" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact cards ── */}
        <section className="py-8 bg-white border-b border-[#e5e7eb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactCards.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className={`flex items-start gap-3 p-4 rounded-xl border ${c.color} h-full`}>
                    <div className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={16} className={c.iconColor} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-0.5">{c.label}</p>
                      <p className="text-[#131a22] font-bold text-xs leading-snug truncate">{c.value}</p>
                      <p className="text-muted-foreground text-[10px] mt-0.5">{c.sub}</p>
                    </div>
                  </div>
                );

                return c.href ? (
                  <a key={c.label} href={c.href} className="block hover:scale-[1.01] transition-transform">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Form + sidebar ── */}
        <section className="py-10 md:py-15 bg-[#f5f2eb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Form */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <div className="mb-7">
                  <h2 className="text-2xl font-extrabold text-[#131a22] tracking-tight mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Fill in the form and we&apos;ll reach out within 1 business hour.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Sidebar */}
              <div className="space-y-5 lg:sticky lg:top-24">
                {/* Why consult */}
                <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amazon-orange/10 flex items-center justify-center">
                      <MessageCircle size={18} className="text-amazon-orange" />
                    </div>
                    <div>
                      <p className="text-[#131a22] font-bold text-sm">Free Consultation</p>
                      <p className="text-[#6b7280] text-xs">30 minutes · No obligation</p>
                    </div>
                  </div>
                  <p className="text-[#4b5563] text-xs leading-relaxed mb-4">
                    On your free call, we&apos;ll cover: your project scope, recommended services, realistic timelines, transparent pricing, and who on our team would be assigned to your book.
                  </p>
                  <ul className="space-y-2">
                    {["No commitment required", "Candid timeline estimates", "Transparent pricing discussion", "Writer/editor matching preview", "Custom publishing roadmap"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#6b7280] text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f7b731] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick links */}
                <div className="bg-white rounded-2xl border border-border p-5">
                  <p className="text-[#131a22] font-bold text-sm mb-3">Quick Links</p>
                  <div className="space-y-2">
                    {quickLinks.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        className="flex items-center justify-between text-xs text-[#131a22] hover:text-[#b45309] font-medium py-1.5 border-b border-border last:border-0 transition-colors group"
                      >
                        {l.label}
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trust */}
                <div className="bg-amazon-orange/10 border border-amazon-orange/20 rounded-2xl p-5 text-center">
                  <div className="flex justify-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-amazon-orange fill-amazon-orange" />
                    ))}
                  </div>
                  <p className="text-[#131a22] font-extrabold text-sm">4.9 / 5.0</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Based on 500+ client reviews</p>
                  <p className="text-[#6b7280]/60 text-xs mt-3 leading-relaxed italic">
                    &ldquo;The most professional publishing team I&apos;ve ever worked with. Transparent, responsive, and genuinely invested in my book&apos;s success.&rdquo;
                  </p>
                  <p className="text-[#131a22] font-semibold text-xs mt-2">— James K., Thriller Author</p>
                </div>

                {/* Services quick access */}
                <div className="bg-white rounded-2xl border border-border p-5">
                  <p className="text-[#131a22] font-bold text-sm mb-3 flex items-center gap-2">
                    <BookOpen size={14} className="text-[#b45309]" /> Our Services
                  </p>
                  <div className="space-y-1.5">
                    {[
                      ["Book Writing", "/services/book-writing"],
                      ["Book Publishing", "/services/book-publishing"],
                      ["Book Editing", "/services/book-editing-proofreading"],
                      ["Book Marketing", "/services/book-marketing"],
                      ["Book Trailer", "/services/book-trailer"],
                      ["Children's Books", "/services/childrens-book-writing"],
                      ["Poetry Publishing", "/services/poetry-publishing"],
                    ].map(([label, href]) => (
                      <Link
                        key={label}
                        href={href}
                        className="block text-xs text-muted-foreground hover:text-[#b45309] transition-colors py-0.5"
                      >
                        → {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Map placeholder ── */}
        <section className="py-10 md:py-15 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="rounded-2xl overflow-hidden border border-border bg-[#f5f2eb] h-56 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5f2eb] to-white" />
              <div className="relative text-center">
                <MapPin size={32} className="text-[#b45309] mx-auto mb-2" />
                <p className="text-[#131a22] font-bold text-sm">Seattle, WA · New York, NY</p>
                <p className="text-muted-foreground text-xs mt-1">Remote-first · Serving authors globally</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { ArrowRight, BookCheck, Users, Trophy, Star, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Published Books | Amazon Books Publishing",
  description: "Browse 2,500+ books we've published across every genre — from Amazon #1 bestsellers to debut authors finding their first readers.",
};

const stats = [
  { icon: BookCheck, value: "2,500+", label: "Books Published" },
  { icon: Users, value: "1,200+", label: "Authors Served" },
  { icon: Trophy, value: "150+", label: "Bestseller Launches" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
];

const genres = [
  { name: "Fiction & Genre Fiction", count: "620+", color: "bg-indigo-50 border-indigo-200 text-indigo-800" },
  { name: "Business & Finance", count: "380+", color: "bg-amber-50 border-amber-200 text-amber-800" },
  { name: "Self-Help & Wellness", count: "310+", color: "bg-teal-50 border-teal-200 text-teal-800" },
  { name: "Romance", count: "280+", color: "bg-rose-50 border-rose-200 text-rose-800" },
  { name: "Thriller & Mystery", count: "195+", color: "bg-slate-50 border-slate-200 text-slate-800" },
  { name: "Children's Books", count: "350+", color: "bg-lime-50 border-lime-200 text-lime-800" },
  { name: "Memoir & Biography", count: "160+", color: "bg-orange-50 border-orange-200 text-orange-800" },
  { name: "Poetry Collections", count: "205+", color: "bg-violet-50 border-violet-200 text-violet-800" },
];

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f5f2eb] text-[#1f2937]">
        {/* ── Hero ── */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[440px] lg:min-h-[560px]">
              <div className="max-w-2xl h-full flex flex-col justify-center">
              
              <h1 className="text-4xl font-serif md:text-6xl  text-[#131a22] leading-tight tracking-tight mb-5">
                2,500+ Books.{" "}
                <span className="text-[#f59e0b]">Every Genre.</span>
              </h1>
              <p className="text-[#3a4553] text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                From debut authors finding their first readers to established experts becoming Amazon bestsellers — here&apos;s a sample of what we&apos;ve built together.
              </p>
              </div>

             <div className="min-h-[420px] md:min-h-[540px] lg:min-h-[680px] flex items-center justify-center bg-[#f5f2ec]">
  <svg
    viewBox="0 0 520 700"
    className="w-full h-full max-h-[680px] drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
  >
    <defs>
      {/* IMAGE */}
      <pattern
        id="quotePattern"
        patternUnits="userSpaceOnUse"
        width="520"
        height="700"
      >
        <image
          href="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=1400&auto=format&fit=crop"
          x="0"
          y="0"
          width="520"
          height="700"
          preserveAspectRatio="xMidYMid slice"
        />
      </pattern>

      {/* BIG DOUBLE QUOTE MASK */}
      <mask id="doubleQuoteMask">
        <rect width="100%" height="100%" fill="black" />

        {/* LEFT QUOTE */}
        <path
          d="
            M120 160
            C120 85 175 40 245 40
            L245 120
            C205 120 180 145 180 180
            L245 180
            L245 380
            L85 380
            L85 210
            C85 185 95 170 120 160
            Z
          "
          fill="white"
        />

        {/* RIGHT QUOTE */}
        <path
          d="
            M300 160
            C300 85 355 40 425 40
            L425 120
            C385 120 360 145 360 180
            L425 180
            L425 380
            L265 380
            L265 210
            C265 185 275 170 300 160
            Z
          "
          fill="white"
        />
      </mask>
    </defs>

    {/* IMAGE INSIDE SHAPE */}
    <rect
      width="100%"
      height="100%"
      fill="url(#quotePattern)"
      mask="url(#doubleQuoteMask)"
    />
  </svg>
</div>
            </div>

          </div>
        </section>

        {/* ── Genre breakdown ── */}
        <section className="py-10 md:py-15 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-[#b45309] text-xs font-semibold uppercase tracking-widest mb-2">By Genre</p>
              <h2 className="text-3xl font-semibold text-[#131a22] tracking-tight">
                Every Genre, <span className="text-[#f59e0b]">Mastered</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {genres.map((g) => (
                <div key={g.name} className={`${g.color} border rounded-xl p-4 text-center`}>
                  <p className="font-extrabold text-lg leading-none mb-1">{g.count}</p>
                  <p className="text-xs font-semibold opacity-70">{g.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio Grid ── */}
        <section className="py-10 md:py-15 bg-[#f5f2eb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-[#b45309] text-xs font-semibold uppercase tracking-widest mb-2">Featured Titles</p>
              <h2 className="text-3xl font-semibold text-[#131a22] tracking-tight mb-3">
                Browse <span className="text-[#f59e0b]">Recent Work</span>
              </h2>
              <p className="text-muted-foreground text-sm">Hover any cover to see its Amazon rating.</p>
            </div>
            <PortfolioGrid />
          </div>
        </section>

        {/* ── Process teaser ── */}
        <section className="py-12 md:py-14 bg-[#f5f2eb]">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <p className="text-[#b45309] text-xs font-semibold uppercase tracking-widest mb-3">
              Ready to Join Them?
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#131a22] leading-tight tracking-tight mb-4">
              Your Book Could Be{" "}
              <span className="text-[#f59e0b]">Next on This Page</span>
            </h2>
            <p className="text-[#3a4553] text-base max-w-xl mx-auto leading-relaxed mb-8">
              Every book in our portfolio started with a single conversation. Book your free consultation and let&apos;s figure out exactly how we&apos;d bring yours to life.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f7b731] hover:bg-[#f2aa1f] text-[#131a22] font-semibold px-7 py-3 rounded-md text-sm transition-colors shadow-sm"
              >
                Start Your Publishing Journey <ArrowRight size={15} />
              </Link>
              <Link
                href="/services/book-writing"
                className="inline-flex items-center gap-2 border border-[#c9d2de] hover:border-[#8b99ab] text-[#131a22] hover:text-[#004a8f] font-semibold px-7 py-3 rounded-md text-sm transition-colors bg-white/60"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

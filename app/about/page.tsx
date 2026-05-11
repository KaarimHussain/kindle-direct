import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import { ArrowRight, ChevronRight, Star, BookOpen, Globe, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Amazon Books Publishing",
  description:
    "Publish with us. Explore our 3-step publishing process, author support, and free tools inspired by the KDP experience.",
};

const steps = [
  {
    title: "Step 1: Prepare your manuscript and cover files",
    desc: "Format your manuscript, organize front/back matter, and prepare your cover files for both eBook and print.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Step 2: Publish in print and digital formats",
    desc: "Set up your title details, upload files, preview your book, and launch your eBook and print editions worldwide.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Step 3: Promote your book to readers",
    desc: "Use author pages, ads, and enhanced listing content to make your book easier to discover and buy.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    name: "Laura Rocca",
    region: "Italy / Romance",
    quote:
      "Publishing through this system gave me freedom as an author and direct access to readers around the world.",
  },
  {
    name: "Sundari Venkatraman",
    region: "India / Romance",
    quote:
      "The process is fast, empowering, and helps me publish consistently while staying fully in control of my work.",
  },
  {
    name: "Marah Woolf",
    region: "Germany / Fantasy",
    quote:
      "If writing is your dream, this platform gives you the structure and confidence to turn that dream into real books.",
  },
];

const tools = [
  { icon: BookOpen, title: "Kindle Create", desc: "Turn your manuscript into a polished book layout." },
  { icon: Globe, title: "Kindle Previewer", desc: "Preview how your eBook will appear on Kindle devices." },
  { icon: Users, title: "KDP Community", desc: "Connect with other authors and get practical help." },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f5f2eb] text-[#1f2937]">
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[440px] lg:min-h-[560px]">
              <div className="max-w-2xl h-full flex flex-col justify-center">
                
                <h1 className="text-4xl font-serif md:text-6xl tracking-tight text-[#131a22] leading-tight mb-4">
                  Publish with us
                </h1>
                <p className="text-[#3a4553] text-base md:text-lg leading-relaxed max-w-xl mb-7">
                  With Amazon Books Publishing, it&apos;s simple to publish and sell your
                  book around the world in digital and print formats.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#f7b731] hover:bg-[#f2aa1f] text-[#131a22] font-semibold px-6 py-3 rounded-md transition-colors"
                  >
                    Start now <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="https://kdp.amazon.com/en_US/publish"
                    className="inline-flex items-center bg-transparent border border-[#c9d2de] hover:border-[#8b99ab] text-[#131a22] font-semibold px-6 py-3 rounded-md transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="min-h-[340px] md:min-h-[440px] lg:min-h-[560px] flex items-center justify-center bg-[#f5f2ec]">
  <svg
    viewBox="0 0 420 560"
    className="w-full h-full max-h-[560px]"
  >
    <defs>
      {/* Image Pattern */}
      <pattern
        id="imgPattern"
        patternUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <image
          href="https://cdn-res.keymedia.com/cms/images/ca/119/0438_638664136601700522.png"
          width="420"
          height="560"
          preserveAspectRatio="xMidYMid slice"
        />
      </pattern>

      {/* Hashtag Shape Mask */}
      <mask id="hashMask">
        <rect width="100%" height="100%" fill="black" />

        {/* Vertical Bars */}
        <rect x="110" y="40" width="70" height="480" rx="35" fill="white" />
        <rect x="240" y="40" width="70" height="480" rx="35" fill="white" />

        {/* Horizontal Bars */}
        <rect x="40" y="170" width="340" height="70" rx="35" fill="white" />
        <rect x="40" y="320" width="340" height="70" rx="35" fill="white" />
      </mask>
    </defs>

    {/* Image inside hashtag */}
    <rect
      width="100%"
      height="100%"
      fill="url(#imgPattern)"
      mask="url(#hashMask)"
    />
  </svg>
</div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-11">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#131a22] tracking-tight mb-3">
                Publish with Amazon Books Publishing in 3 simple steps
              </h2>
              <p className="text-[#3a4553] text-sm md:text-base max-w-2xl mx-auto">
                Follow a clear publishing flow from manuscript prep to promotion.
              </p>
            </div>
            <div className="space-y-12">
              {steps.map((step, idx) => {
                return (
                  <div
                    key={step.title}
                    className={`grid md:grid-cols-2 gap-6 md:gap-10 items-center ${idx % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-[#131a22] mb-3">{step.title}</h3>
                      <p className="text-[#3a4553] leading-relaxed">{step.desc}</p>
                      <Link
                        href="https://kdp.amazon.com/en_US/publish"
                        className="inline-flex items-center gap-1.5 text-[#0066c0] hover:text-[#004a8f] font-medium mt-4"
                      >
                        Learn more <ChevronRight size={15} />
                      </Link>
                    </div>
                    <div className="rounded-[30px] overflow-hidden min-h-[210px] shadow-sm border border-[#e5e7eb]">
                      <div className="w-full h-full min-h-[210px] bg-cover bg-center" style={{ backgroundImage: `url('${step.image}')` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#f5f2eb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#131a22] tracking-tight mb-3">
                Hear from our author community
              </h2>
              <p className="text-[#3a4553] text-sm md:text-base max-w-2xl mx-auto">
                Trusted by authors across genres and regions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((author, idx) => (
                <article key={author.name} className="bg-white border border-[#e5e7eb] rounded-2xl p-6 text-center shadow-sm">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 ${idx === 0 ? "bg-[#c8d4f0]" : idx === 1 ? "bg-[#f5d8a8]" : "bg-[#c7e1d1]"}`} />
                  <h3 className="font-semibold text-[#131a22]">{author.name}</h3>
                  <p className="text-xs text-[#6b7280] mt-0.5">{author.region}</p>
                  <p className="text-sm text-[#3a4553] leading-relaxed mt-3">
                    &quot;{author.quote}&quot;
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#131a22] tracking-tight mb-3">
                Free tools to help you publish better
              </h2>
              <p className="text-[#3a4553] text-sm md:text-base max-w-2xl mx-auto">
                Explore practical tools to format, preview, and launch your book.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div key={tool.title} className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl p-4 flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#f7b731]/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[#b45309]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#131a22] text-sm">{tool.title}</p>
                        <p className="text-sm text-[#4b5563] mt-1">{tool.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="bg-[#f8fafc] border border-[#d1d5db] rounded-2xl p-4 shadow-sm">
                <div className="bg-white border-2 border-[#10b981] rounded-xl overflow-hidden min-h-[220px] md:min-h-[260px]">
                  <div
                    className="w-full h-full min-h-[220px] md:min-h-[260px] bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1400&auto=format&fit=crop')",
                    }}
                  />
                </div>
                <p className="text-xs text-[#6b7280] text-center mt-3">Preview-style layout inspired by KDP tooling</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14 bg-[#dfe6ea]">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#131a22] leading-tight tracking-tight mb-4">
              Ready to publish your book?
            </h2>
            <p className="text-[#374151] text-base max-w-xl mx-auto mb-7 leading-relaxed">
              Join our publishing community and launch your title with a proven, author-first process.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f7b731] hover:bg-[#f2aa1f] text-[#131a22] font-semibold px-7 py-3 rounded-md text-sm transition-colors"
              >
                Join now <ArrowRight size={15} />
              </Link>
              <Link
                href="https://kdp.amazon.com/en_US/publish"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#f9fafb] border border-[#c9d2de] text-[#131a22] font-semibold px-7 py-3 rounded-md text-sm transition-colors"
              >
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

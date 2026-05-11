import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceFaqs from "@/components/service-page/ServiceFaqs";

interface StepItem {
  step: string;
  title: string;
  bullets: string[];
  tags: string[];
  image: string;
}

interface Testimonial {
  name: string;
  sub: string;
  quote: string;
  avatar: string;
}

type ServiceHeroVariant = "hash" | "at" | "ampersand" | "plus" | "diamond" | "spark" | "wave";

interface ServicePageLayoutProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  serviceName: string;
  bgImage: string;
  symbolVariant?: ServiceHeroVariant;
  stats: { value: string; label: string }[];
  steps: StepItem[];
  faqItems: { q: string; a: string }[];
  testimonials?: Testimonial[];
  processLabel?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Laura Rocca",
    sub: "Italy | Romance",
    quote:
      "Becoming a KDP author allowed me to finally live my childhood dream. The writer captured my voice and helped me launch a polished romance novel in months.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sundari Venkatraman",
    sub: "India | Memoir",
    quote:
      "My memoir was in pieces until the ghostwriter organized my story and made it feel true. I now have a book I can proudly share.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Marah Woolf",
    sub: "Germany | Fantasy",
    quote:
      "I had no idea where to start. The team turned my idea into a real book and guided me all the way from outline to final manuscript.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
  },
];

export default function ServicePageLayout({
  badge,
  title,
  highlight,
  description,
  serviceName,
  bgImage,
  symbolVariant,
  stats,
  steps,
  faqItems,
  testimonials = defaultTestimonials,
}: ServicePageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#ffffff] text-[#1f2937]">
        <ServiceHero
          badge={badge}
          title={title}
          highlight={highlight}
          description={description}
          serviceName={serviceName}
          bgImage={bgImage}
          symbolVariant={symbolVariant}
          stats={stats}
        />

        <section className="bg-[#ffffff] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-[#b45309] uppercase tracking-[0.28em] text-[11px] font-semibold mb-4">
                Publish with Kindle Direct Publishing in 3 simple steps
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight leading-tight">
                Publish with Kindle Direct Publishing in 3 simple steps
              </h2>
              <p className="mt-4 text-[#475569] text-sm md:text-base leading-relaxed">
                We guide your project from idea through delivery with the same clean, easy flow used by top KDP authors.
              </p>
            </div>

            <div className="space-y-12">
              {steps.map((item, idx) => (
                <div key={item.step} className="grid gap-8 items-center lg:grid-cols-2">
                  <div className={idx % 2 === 1 ? "space-y-6 lg:order-last" : "space-y-6"}>
                    <div className="inline-flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7c3aed]">
                        {item.step}
                      </span>
                      <span className="h-8 w-px bg-[#e5e7eb]" />
                      <div className="text-xs font-semibold text-[#f59e0b] uppercase tracking-[0.24em]">
                        {serviceName}
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-[#0f172a] max-w-xl">
                      {item.title}
                    </h3>

                    <ul className="space-y-3 text-[#475569] text-sm leading-6">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <CheckCircle2 size={18} className="mt-1 text-[#f59e0b] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f59e0b] bg-white border border-[#e5e7eb] px-3 py-2 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={idx % 2 === 1 ? "rounded-[2rem] overflow-hidden border border-[#e5e7eb] bg-white shadow-sm lg:order-first" : "rounded-[2rem] overflow-hidden border border-[#e5e7eb] bg-white shadow-sm"}>
                    <img src={item.image} alt={item.title} className="w-[700px] h-[500px] object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[#f59e0b] text-xs font-semibold uppercase tracking-[0.35em] mb-3">
                Real author stories
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight">
                Authors who trusted us with their story
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((author) => (
                <div key={author.name} className="rounded-[2rem] border border-[#e5e7eb] bg-[#fffdf8] p-8 text-center shadow-sm">
                  <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-[#fef3c7] shadow-sm">
                    <img src={author.avatar} alt={author.name} className="h-full w-full object-cover" />
                  </div>
                  <p className="text-[#475569] text-sm leading-relaxed mb-6">“{author.quote}”</p>
                  <div>
                    <p className="font-semibold text-[#0f172a]">{author.name}</p>
                    <p className="text-[#94a3b8] text-xs uppercase tracking-[0.3em] mt-1">{author.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fff8ed] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-[0.95fr_0.85fr] items-center">
            <div className="space-y-6">
              <p className="text-[#b45309] text-xs font-semibold uppercase tracking-[0.35em] mb-2">
                Prepare beautifully
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight">
                We can help you get started with Kindle Create
              </h2>
              <p className="text-[#475569] text-sm md:text-base leading-relaxed max-w-2xl">
                Turn your manuscript into a beautiful book. Whether you're writing a comic book, cookbook, or novel, our formatting support helps prepare your manuscript for publication.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#0f172a] shadow-md shadow-[#f59e0b]/20 transition-colors hover:bg-[#d97706]"
              >
                Learn more about Kindle Create
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-[#e5e7eb] bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop"
                alt="Kindle Create preview"
                className="w-[700px] h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-[0.95fr_0.85fr] items-center">
            <div className="rounded-[2rem] overflow-hidden border border-[#e5e7eb] bg-[#f7f2e8] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop"
                alt="Publishing tools"
                className="w-[700px] h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-[#b45309] text-xs font-semibold uppercase tracking-[0.35em] mb-2">
                Free tools
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight">
                More free KDP tools to help publish your book
              </h2>
              <div className="space-y-4 text-[#475569] text-sm md:text-base leading-relaxed">
                {[
                  {
                    title: "Kindle Previewer",
                    desc: "See how your eBook will look before you publish it.",
                  },
                  {
                    title: "Kindle Kids’ Book Creator",
                    desc: "Turn your illustrated children’s books into great-looking eBooks.",
                  },
                  {
                    title: "KDP Community",
                    desc: "Join the conversation with new and accomplished KDP authors.",
                  },
                  {
                    title: "Kindle Create",
                    desc: "Convert your manuscript into a beautifully formatted eBook.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f59e0b]/10 text-[#b45309]">
                      <Star size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0f172a]">{item.title}</p>
                      <p className="mt-1 text-[#475569]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceFaqs heading={`${serviceName} FAQs`} faqs={faqItems} />
      </main>
      <SiteFooter />
    </>
  );
}

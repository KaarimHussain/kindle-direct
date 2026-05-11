import type { Metadata } from "next";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServicePackages from "@/components/service-page/ServicePackages";
import ServiceFaqs from "@/components/service-page/ServiceFaqs";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Writing & Ghostwriting Services | Amazon Books Publishing",
  description:
    "Professional ghostwriting services for fiction, non-fiction, memoirs, and business books. 800+ manuscripts delivered. NDA protected. You own all rights.",
};

export default function BookWritingPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#ffffff] text-[#1f2937]">
        {/* ── Hero ── */}
        <ServiceHero
          badge="Ghostwriting & Book Writing"
          title="Professional Book Writing"
          highlight="By Expert Ghostwriters"
          description="From a rough idea to a market-ready manuscript — our seasoned ghostwriters craft compelling books in your voice, across every genre. You get full credit, full rights, and a book you're proud of."
          serviceName="Book Writing"
          bgImage="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1073&auto=format&fit=crop"
          symbolVariant="hash"
          stats={[
            { value: "800+", label: "Manuscripts Delivered" },
            { value: "60+", label: "Genres Covered" },
            { value: "100%", label: "NDA Protected" },
            { value: "8 Wks", label: "Average Delivery" },
          ]}
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
                We guide your book from manuscript preparation through publishing and promotion with the same clean, easy flow used by top KDP authors.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  step: "Step 1",
                  title: "Prepare your manuscript and cover files",
                  bullets: [
                    "Format your manuscript file and create your front, back, and back matter.",
                    "Set your title page, table of contents, and author bio.",
                    "Create a cover that reflects your book and brand.",
                  ],
                  tags: ["eBook", "Paperback", "Hardcover"],
                  image:
                    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  step: "Step 2",
                  title: "Publish in print and digital formats",
                  bullets: [
                    "Enter book details such as title, author, and description.",
                    "Upload and preview your prepared manuscript and book cover.",
                    "Select your publishing rights and price your book for launch.",
                  ],
                  tags: ["Kindle eBook", "Paperback", "Expanded Distribution"],
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
                },
                {
                  step: "Step 3",
                  title: "Promote your book to readers",
                  bullets: [
                    "Offer your eBook on Kindle Unlimited by enrolling in KDP Select.",
                    "Create an author page to share information about yourself and your books.",
                    "Set up advertising ads to reach more readers through Amazon Advertising.",
                  ],
                  tags: ["Author Page", "Amazon Ads", "A+ Content"],
                  image:
                    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
                },
              ].map((item, idx) => (
                <div key={item.step} className="grid gap-8 items-center lg:grid-cols-2">
                  <div className={idx % 2 === 1 ? "space-y-6 lg:order-last" : "space-y-6"}>
                    <div className="inline-flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7c3aed]">
                        {item.step}
                      </span>
                      <span className="h-8 w-px bg-[#e5e7eb]" />
                      <div className="text-xs font-semibold text-[#F89C00] uppercase tracking-[0.24em]">
                        Book Writing Service
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
                          className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F89C00] bg-white border border-[#e5e7eb] px-3 py-2 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={idx % 2 === 1 ? "rounded-[2rem] overflow-hidden border border-[#e5e7eb] bg-white shadow-sm lg:order-first" : "rounded-[2rem] overflow-hidden border border-[#e5e7eb] bg-white shadow-sm"}>
                    <img src={item.image} alt={item.title} className="w-[700px] h-[500px]  object-cover" />
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
              {[
                {
                  name: "Laura Rocca",
                  sub: "Italy | Romance",
                  quote:
                    "Becoming a KDP author allowed me to finally live my childhood dream. The writer captured my voice and helped me launch a polished romance novel in months.",
                  avatar:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
                },
                {
                  name: "Sundari Venkatraman",
                  sub: "India | Romance",
                  quote:
                    "My memoir was in pieces until the ghostwriter organized my story and made it feel true. I now have a book I can proudly share.",
                  avatar:
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
                },
                {
                  name: "Marah Woolf",
                  sub: "Germany | Fantasy",
                  quote:
                    "I had no idea where to start. The team turned my idea into a real book and guided me all the way from outline to final manuscript.",
                  avatar:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
                },
              ].map((author) => (
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
                Turn your manuscript into a beautiful book. Whether you're writing a comic book, cookbook, travel guide, or novel, our formatting support helps prepare your manuscript for publication.
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
              <p className="text-[#475569] text-sm md:text-base leading-relaxed max-w-xl">
                From formatting tools to community support, these free KDP resources make publishing simpler and more polished.
              </p>
            </div>
          </div>
        </section>

        

        <ServiceFaqs
          heading="Book Writing FAQs"
          faqs={[
            {
              q: "Will the book actually sound like me?",
              a: "Yes — that's our #1 priority. We use multi-session voice interviews, sample analysis, and iterative feedback loops to capture your natural tone, vocabulary, and rhythm. Most clients say they can't tell the difference from their own writing.",
            },
            {
              q: "How many revisions are included?",
              a: "All Professional and Premium packages include unlimited revisions until you're 100% satisfied. Starter packages include 3 rounds, with additional rounds available at a flat fee.",
            },
            {
              q: "Is the NDA legally binding?",
              a: "Yes. We use a mutual NDA drafted by our legal team that covers both parties. It's fully enforceable and we've never had a confidentiality breach in our history.",
            },
            {
              q: "Can I provide chapters I've already written?",
              a: "Absolutely. Many clients have existing drafts, notes, or partially written chapters. We'll incorporate your existing work and match the style throughout the new content.",
            },
            {
              q: "Do your writers have published credentials?",
              a: "Every writer on our team has published work under their own name. We match you to a writer with demonstrated experience in your specific genre — not just a general freelancer.",
            },
            {
              q: "What if I want to change direction mid-project?",
              a: "It happens, and we plan for it. Minor direction changes are absorbed into the project. Major structural changes may affect the timeline but are handled with a change-order process, not a new contract.",
            },
            {
              q: "Do I get to review the work as it's being written?",
              a: "Yes. We deliver chapter batches (typically 3–5 chapters at a time) so you can review, give feedback, and approve as we go. You're never waiting months to see the first page.",
            },
          ]}
        />

        <section className="bg-[#0f172a] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 rounded-[2rem] border border-white/10 bg-[#0f172a]/95 p-10 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
            <div className="space-y-4 text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-[#94a3b8]">Join our community</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Join our community of authors
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-[#d1d5db]">
                Have a question about your account or how to market your book? Ask for help from fellow publishers or lend a hand to someone new.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#0f172a] shadow-md shadow-[#f59e0b]/30 transition-colors hover:bg-[#d97706]"
            >
              Connect with experts and fellow authors
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

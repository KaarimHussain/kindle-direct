import { ArrowRight, Star, ChevronRight } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  stats: Stat[];
  serviceName: string;
  bgImage?: string;
  symbolVariant?: "hash" | "at" | "ampersand" | "plus" | "diamond" | "spark" | "wave";
}

export default function ServiceHero({
  badge,
  title,
  highlight,
  description,
  stats,
  serviceName,
  bgImage,
  symbolVariant = "hash",
}: ServiceHeroProps) {
  const renderSymbol = () => {
    switch (symbolVariant) {
      case "at":
        return (
          <>
            <path d="M212 98c-82 0-148 66-148 148 0 85 64 150 150 150 39 0 70-10 103-30l-22-36c-23 15-48 23-78 23-62 0-108-46-108-106 0-62 48-108 104-108 56 0 98 40 98 94 0 22-8 44-24 44-12 0-18-9-18-22v-73h-39v10c-12-9-27-14-44-14-41 0-69 31-69 70 0 39 29 70 67 70 19 0 35-7 47-20 8 13 23 20 40 20 38 0 62-33 62-87 0-78-58-133-141-133Zm-18 167c-18 0-30-13-30-30 0-16 12-30 30-30 17 0 30 13 30 30s-13 30-30 30Z" fill="url(#serviceHeroPattern)" />
          </>
        );
      case "ampersand":
        return (
          <path d="M280 410c-25 20-55 31-89 31-69 0-118-40-118-99 0-45 28-75 70-95-17-21-28-43-28-67 0-48 38-83 91-83 49 0 86 31 86 75 0 40-28 66-69 86l48 58c11-18 19-39 24-62h44c-6 35-18 66-37 94l56 67h-58l-30-37Zm-109-26c22 0 42-7 59-20l-63-77c-27 14-45 33-45 60 0 23 19 37 49 37Zm-7-168c30-14 45-28 45-49 0-17-11-29-29-29-20 0-33 14-33 33 0 14 6 26 17 45Z" fill="url(#serviceHeroPattern)" />
        );
      case "plus":
        return (
          <>
            <rect x="168" y="78" width="84" height="360" rx="30" fill="url(#serviceHeroPattern)" />
            <rect x="70" y="216" width="280" height="84" rx="30" fill="url(#serviceHeroPattern)" />
          </>
        );
      case "diamond":
        return (
          <path d="M210 60 350 200 210 500 70 200 210 60Zm0 74-72 72 72 166 72-166-72-72Z" fill="url(#serviceHeroPattern)" />
        );
      case "spark":
        return (
          <path d="M210 58 246 166 360 166 268 232 304 344 210 276 116 344 152 232 60 166 174 166 210 58Z" fill="url(#serviceHeroPattern)" />
        );
      case "wave":
        return (
          <path d="M53 356c67 0 67-74 133-74s66 74 133 74 67-74 133-74v58c-66 0-66 74-133 74s-67-74-133-74-66 74-133 74v-58Zm0-154c67 0 67-74 133-74s66 74 133 74 67-74 133-74v58c-66 0-66 74-133 74s-67-74-133-74-66 74-133 74v-58Z" fill="url(#serviceHeroPattern)" />
        );
      case "hash":
      default:
        return (
          <g clipPath="url(#serviceHeroClip)">
            <image
              href={bgImage ?? "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop"}
              x="0"
              y="0"
              width="420"
              height="560"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        );
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#f5f2eb]">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}


        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-110 lg:min-h-140">
          <div className="max-w-2xl h-full flex flex-col justify-center">


            <h1 className="font-serif text-4xl md:text-6xl text-[#131a22] leading-[1.08] tracking-tight mb-5">
              {title}{" "}
              <span className="text-[#f59e0b]">{highlight}</span>
            </h1>

            <p className="text-[#3a4553] text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#f7b731] hover:bg-[#f2aa1f] text-[#131a22] font-semibold px-6 py-3 rounded-md text-sm transition-colors"
              >
                Get Free Consultation <ArrowRight size={15} />
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 border border-[#c9d2de] text-[#131a22] hover:border-[#8b99ab] font-semibold px-6 py-3 rounded-md text-sm transition-colors"
              >
                View Packages
              </a>
            </div>

            {/* Stats strip */}
            {/* <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-[#e5e7eb]">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[#b45309] font-semibold text-2xl leading-none">
                  {s.value}
                </p>
                <p className="text-[#6b7280] text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div> */}
          </div>
          <div className="min-h-85 md:min-h-110 lg:min-h-140 flex items-center justify-center">
            <svg viewBox="0 0 420 560" className="w-full h-full max-h-140 drop-shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
              <defs>
                <pattern id="serviceHeroPattern" width="1" height="1" patternContentUnits="objectBoundingBox">
                  <image
                    href={bgImage ?? "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop"}
                    width="1"
                    height="1"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </pattern>
                <clipPath id="serviceHeroClip" clipPathUnits="userSpaceOnUse">
                  <rect x="108" y="62" width="66" height="430" rx="30" />
                  <rect x="244" y="62" width="66" height="430" rx="30" />
                  <rect x="52" y="194" width="316" height="66" rx="30" />
                  <rect x="52" y="320" width="316" height="66" rx="30" />
                </clipPath>
              </defs>
              {renderSymbol()}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

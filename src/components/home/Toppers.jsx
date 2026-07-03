import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import TiltCard from "../ui/TiltCard";
import toppers from "../../data/toppers";

export default function Toppers() {
  return (
    <section className="py-16 md:py-28 px-6 max-w-7xl mx-auto">
      <SectionHeading eyebrow="Results 2025-26" title="Our Star Performers" />

      <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 px-1 snap-x">
        {toppers.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.05} className="snap-start shrink-0">
            <TiltCard glass="light" className="w-60 rounded-3xl p-7 text-center">
              <div className="relative inline-block mb-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-24 w-24 rounded-full object-cover mx-auto border-4 border-gold/60 group-hover/tilt:border-gold transition-colors"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold text-maroon-dark text-xs font-bold px-3 py-1 rounded-full shadow-soft whitespace-nowrap group-hover/tilt:scale-110 transition-transform">
                  {t.percentage}
                </span>
              </div>
              <p className="font-heading font-semibold text-maroon-dark mt-3">{t.name}</p>
              <p className="text-sm text-gray-500">{t.className}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/achievements"
          className="inline-flex items-center gap-1.5 font-heading font-semibold text-maroon hover:text-maroon-dark group"
        >
          View All Results <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

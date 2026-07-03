import { Award, Medal, Trophy } from "lucide-react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import TiltCard from "../components/ui/TiltCard";
import toppers from "../data/toppers";

const awards = [
  { icon: Trophy, title: "Best Matriculation School - District", year: "2025", desc: "Awarded by the District Education Office for academic and infrastructural excellence." },
  { icon: Medal, title: "State-Level Science Fair - 1st Place", year: "2024", desc: "Our Class IX team won first place for an original working model in the state science fair." },
  { icon: Award, title: "100% Pass Result, 5 Years Running", year: "2021-25", desc: "Class X batches have recorded a 100% pass rate for five consecutive academic years." },
];

export default function Achievements() {
  return (
    <>
      <PageHero
        title="Achievements"
        subtitle="Celebrating our toppers, awards and the milestones our students have earned."
      />

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading eyebrow="Results 2025-26" title="Our Star Performers" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {toppers.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.06} className="h-full">
              <TiltCard glass="light" className="rounded-3xl p-6 text-center h-full">
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
                <p className="font-heading font-semibold text-maroon-dark mt-2">{t.name}</p>
                <p className="text-sm text-gray-500">{t.className}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Recognitions" title="Awards & Milestones" />
          <div className="space-y-5">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <TiltCard glass="light" tilt={false} className="rounded-2xl p-6 flex items-start gap-5">
                  <div className="h-12 w-12 rounded-full bg-maroon/10 text-maroon flex items-center justify-center shrink-0 group-hover/tilt:scale-110 group-hover/tilt:bg-maroon group-hover/tilt:text-white transition-all duration-300">
                    <a.icon size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <p className="font-heading font-semibold text-maroon-dark">{a.title}</p>
                      <span className="text-xs text-gold-dark font-medium bg-gold/15 px-2.5 py-0.5 rounded-full">{a.year}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1.5">{a.desc}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

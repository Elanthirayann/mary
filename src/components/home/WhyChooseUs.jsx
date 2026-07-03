import { Users, MonitorSmartphone, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import TiltCard from "../ui/TiltCard";
import AuroraBackground from "../ui/AuroraBackground";

const features = [
  { icon: Users, title: "Experienced Faculty", text: "Teachers who stay with the school for years, not semesters." },
  { icon: MonitorSmartphone, title: "Smart Classrooms", text: "Interactive boards that bring every lesson to life." },
  { icon: ShieldCheck, title: "Safe Transport", text: "GPS-tracked buses with attendants on every route." },
  { icon: Sparkles, title: "Holistic Development", text: "Sports, arts and values woven into daily school life." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      <AuroraBackground />
      <div className="relative">
        <SectionHeading eyebrow="Why St. Mary's" title="Why Choose Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="h-full">
              <TiltCard glass="light" className="rounded-3xl p-7 md:p-8 h-full min-h-[220px]">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-gold to-gold-dark text-maroon-dark flex items-center justify-center mb-5 shadow-soft group-hover/tilt:scale-110 group-hover/tilt:-rotate-6 transition-transform duration-300">
                  <f.icon size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-maroon-dark mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

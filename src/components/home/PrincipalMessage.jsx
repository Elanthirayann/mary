import { Quote } from "lucide-react";
import Reveal from "../common/Reveal";
import TiltCard from "../ui/TiltCard";
import AuroraBackground from "../ui/AuroraBackground";

export default function PrincipalMessage() {
  return (
    <section className="relative py-16 md:py-28 px-6 max-w-5xl mx-auto overflow-hidden">
      <AuroraBackground />
      <Reveal>
        <TiltCard
          glass="light"
          tilt={false}
          className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          <Quote className="absolute -top-1 -left-1 text-maroon/5" size={130} />
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=260&h=260&fit=crop"
            alt="Principal of St. Mary's Matriculation School"
            className="h-32 w-32 rounded-full object-cover border-4 border-gold shrink-0 relative z-10"
          />
          <div className="relative z-10 text-center md:text-left">
            <p className="text-gray-700 italic leading-relaxed text-base md:text-lg">
              "Every child who walks through our gates carries their own
              potential. Our work isn't just to teach a syllabus — it's to
              help that potential find its shape, one year at a time."
            </p>
            <p className="mt-4 font-heading font-semibold text-maroon">
              Mrs. Elizabeth Thomas
            </p>
            <p className="text-gray-500 text-sm">Principal, St. Mary's Matriculation School</p>
          </div>
        </TiltCard>
      </Reveal>
    </section>
  );
}

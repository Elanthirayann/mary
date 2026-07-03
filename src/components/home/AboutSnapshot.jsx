import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import TiltCard from "../ui/TiltCard";

export default function AboutSnapshot() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <TiltCard lift={false} spotlightColor="rgba(255,255,255,0.35)" className="rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=560&fit=crop"
              alt="Students in a smart classroom at St. Mary's"
              className="w-full h-80 md:h-[420px] object-cover transition-transform duration-500 group-hover/tilt:scale-105"
            />
          </TiltCard>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="About St. Mary's"
            title="A school built around the child, not just the syllabus"
            align="left"
          />
          <p className="text-gray-600 leading-relaxed mb-4">
            Since {1999}, St. Mary's Matriculation School has stayed close to
            one idea: education works best when teachers know their students
            well. Our classrooms are intentionally sized for attention, not scale.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Alongside the Tamil Nadu Matriculation Board curriculum, students
            grow through sports, arts and structured values education that
            shapes character as much as academic record.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 font-heading font-semibold text-maroon hover:text-maroon-dark group"
          >
            Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

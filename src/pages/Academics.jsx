import { useState } from "react";
import { BookOpen, FlaskConical, Languages, Calculator, FileCheck2, Brain, Amphora, Palette, Mic, Mic2 } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import TiltCard from "../components/ui/TiltCard";

const subjects = [
  { icon: Languages, title: "Languages", text: "English, Tamil and Hindi with focus on reading, grammar and communication." },
  { icon: Calculator, title: "Mathematics", text: "Concept-first teaching from basic arithmetic to algebra and geometry." },
  { icon: FlaskConical, title: "Science", text: "Physics, Chemistry and Biology with regular lab-based learning." },
  { icon: BookOpen, title: "Social Science", text: "History, Geography and Civics building awareness of the wider world." },
];

const examPattern = [
  { stage: "Formative Assessments", weight: "20%", desc: "Class tests, assignments and activity-based evaluation through the term." },
  { stage: "Mid-Term Examination", weight: "30%", desc: "Written examination covering the first half of the syllabus." },
  { stage: "Annual Examination", weight: "50%", desc: "Comprehensive written examination as per Matriculation Board pattern." },
];

const curricularActivities = [
  {
    icon: Brain,
    title: "Quiz",
    tagline: "Sharpen thinking",
    desc: "Weekly quiz club covering GK, science and current affairs, with students representing the school at inter-school quiz meets.",
  },
  {
    icon: Amphora,
    title: "Pottery",
    tagline: "Shape with hands",
    desc: "Hands-on clay modelling sessions building fine motor skills and patience, with work displayed at the annual craft exhibition.",
  },
  {
    icon: Palette,
    title: "Drawing",
    tagline: "Colour your ideas",
    desc: "Guided sketching and painting classes exploring composition and colour, with entries sent to zonal and district art competitions.",
  },
  {
    icon: Mic,
    title: "Tamil Speech",
    tagline: "தமிழில் பேசு",
    desc: "Elocution training in Tamil that builds diction, confidence and stage presence for zonal and district-level competitions.",
  },
  {
    icon: Mic2,
    title: "English Speech",
    tagline: "Speak with confidence",
    desc: "Public speaking and debate practice in English, preparing students for inter-school elocution and debate meets.",
  },
];

function ActivityFlipCard({ item, index }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = item.icon;

  return (
    <Reveal delay={index * 0.07}>
      <div
        className="relative h-52 sm:h-56 [perspective:1200px] cursor-pointer select-none"
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${item.title} - tap to see details`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
      >
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-gray-100 rounded-2xl shadow-card flex flex-col items-center justify-center text-center p-5">
            <motion.div
              className="h-14 w-14 rounded-full bg-maroon/10 text-maroon flex items-center justify-center mb-4"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            >
              <Icon size={24} />
            </motion.div>
            <h3 className="font-heading font-semibold text-maroon-dark">{item.title}</h3>
            <p className="text-xs text-gold-dark mt-1">{item.tagline}</p>
            <p className="text-[11px] text-gray-400 mt-4">Tap to explore</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-maroon rounded-2xl shadow-card flex flex-col items-center justify-center text-center p-5">
            <Icon size={20} className="text-gold-light mb-3" />
            <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

export default function Academics() {
  return (
    <>
      <PageHero
        title="Academics"
        subtitle="A curriculum built on the Tamil Nadu Matriculation Board syllabus, taught with care."
      />

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Curriculum"
          title="What our students learn"
          description="From LKG through Class X, every subject is taught to build both exam readiness and real understanding."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07} className="h-full">
              <TiltCard glass="light" className="rounded-3xl p-6 h-full">
                <div className="h-12 w-12 rounded-2xl bg-maroon/10 text-maroon flex items-center justify-center mb-4 group-hover/tilt:bg-maroon group-hover/tilt:text-white group-hover/tilt:-rotate-6 transition-all duration-300">
                  <s.icon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-maroon-dark mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Beyond the Classroom"
            title="Co-Curricular Activities"
            description="Interactive clubs that build talent and confidence outside the syllabus. Tap a card to see what it involves."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {curricularActivities.map((item, i) => (
              <ActivityFlipCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Examination Pattern"
            title="How students are evaluated"
            description="Following the Tamil Nadu Matriculation Board's prescribed weightage."
          />
          <div className="space-y-4">
            {examPattern.map((e, i) => (
              <Reveal key={e.stage} delay={i * 0.08}>
                <TiltCard glass="light" tilt={false} className="rounded-2xl p-6 flex items-center gap-5">
                  <div className="h-14 w-14 rounded-full bg-gold/15 text-gold-dark font-heading font-bold flex items-center justify-center shrink-0 group-hover/tilt:scale-110 transition-transform">
                    {e.weight}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-maroon-dark">{e.stage}</p>
                    <p className="text-sm text-gray-600 mt-1">{e.desc}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto">
        <Reveal>
          <div className="glow-ring rounded-2xl">
          <div className="bg-maroon rounded-2xl p-8 md:p-10 text-white flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <FileCheck2 size={40} className="text-gold-light shrink-0" />
            <div>
              <h3 className="font-heading font-bold text-xl mb-1">Tamil Nadu Matriculation Board</h3>
              <p className="text-white/80 text-sm">
                St. Mary's Matriculation School is affiliated to the Tamil Nadu
                Matriculation Board, and follows its syllabus, textbooks and
                examination guidelines across all grades.
              </p>
            </div>
          </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

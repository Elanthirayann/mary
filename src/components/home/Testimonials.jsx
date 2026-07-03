import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import TiltCard from "../ui/TiltCard";
import testimonials from "../../data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-16 md:py-24 px-6 max-w-3xl mx-auto text-center">
      <SectionHeading eyebrow="Voices" title="What Parents & Alumni Say" />
      <TiltCard glass="light" tilt={false} className="rounded-3xl p-8 md:p-10 min-h-[260px]">
        <Quote className="text-maroon/10 mx-auto mb-2" size={44} />
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-6">
              "{current.quote}"
            </p>
            <img
              src={current.photo}
              alt={current.name}
              className="h-14 w-14 rounded-full object-cover mx-auto mb-2 border-2 border-gold/50"
            />
            <p className="font-heading font-semibold text-maroon-dark">{current.name}</p>
            <p className="text-sm text-gray-500">{current.relation}</p>
          </motion.div>
        </AnimatePresence>
      </TiltCard>

      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-7 bg-maroon" : "w-2.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

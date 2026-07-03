import { useState } from "react";
import { X, Trophy, MapPin, GraduationCap, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import TiltCard from "../components/ui/TiltCard";
import gallery from "../data/gallery";
import participants from "../data/participants";

const categories = ["All", "Events", "Sports", "Campus", "Activities"];
const levels = ["All", "Zonal", "District", "State"];

const levelStyles = {
  Zonal: "bg-gold/15 text-gold-dark",
  District: "bg-maroon/10 text-maroon",
  State: "bg-emerald-100 text-emerald-700",
};

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [activeLevel, setActiveLevel] = useState("All");
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  const filtered =
    active === "All" ? gallery : gallery.filter((g) => g.category === active);

  const filteredParticipants =
    activeLevel === "All"
      ? participants
      : participants.filter((p) => p.level === activeLevel);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments from classrooms, playgrounds, stages and everything in between."
      />

      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-heading font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
                active === c
                  ? "bg-maroon text-white"
                  : "bg-cream text-gray-600 hover:bg-gold/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((g, i) => (
            <Reveal key={g.id} delay={(i % 8) * 0.04}>
              <TiltCard
                as="button"
                onClick={() => setLightbox(g)}
                lift={false}
                spotlightColor="rgba(255,255,255,0.4)"
                className="block w-full rounded-2xl h-40 md:h-48 cursor-pointer"
              >
                <img
                  src={g.image}
                  alt={g.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/tilt:scale-110"
                />
                <div className="absolute inset-0 bg-maroon-dark/0 group-hover/tilt:bg-maroon-dark/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={26}
                    className="text-white opacity-0 scale-75 group-hover/tilt:opacity-100 group-hover/tilt:scale-100 transition-all duration-300"
                  />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Competitions"
            title="Participants & Achievers"
            description="Students who represented St. Mary's at zonal, district and state-level events. Tap a card for details."
          />

          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setActiveLevel(l)}
                className={`px-5 py-2.5 rounded-full text-sm font-heading font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
                  activeLevel === l
                    ? "bg-maroon text-white"
                    : "bg-white text-gray-600 hover:bg-gold/20"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredParticipants.map((p, i) => (
              <Reveal key={p.id} delay={(i % 8) * 0.05}>
                <motion.button
                  layoutId={`participant-${p.id}`}
                  onClick={() => setSelectedParticipant(p)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="glass-card w-full rounded-2xl p-5 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <img
                    src={p.photo}
                    alt={p.name}
                    loading="lazy"
                    className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover mx-auto border-4 border-gold/40"
                  />
                  <p className="font-heading font-semibold text-maroon-dark mt-3 text-sm md:text-base">
                    {p.name}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-2">
                    {p.event}
                  </p>
                  <span
                    className={`inline-block mt-3 text-[11px] font-semibold px-2.5 py-1 rounded-full ${levelStyles[p.level]}`}
                  >
                    {p.level}
                  </span>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedParticipant && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedParticipant(null)}
          >
            <motion.div
              layoutId={`participant-${selectedParticipant.id}`}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-3xl shadow-2xl max-w-sm w-full p-7 text-center relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setSelectedParticipant(null)}
                aria-label="Close"
              >
                <X size={22} />
              </button>
              <img
                src={selectedParticipant.photo}
                alt={selectedParticipant.name}
                className="h-24 w-24 rounded-full object-cover mx-auto border-4 border-gold/50"
              />
              <p className="font-heading font-bold text-lg text-maroon-dark mt-4">
                {selectedParticipant.name}
              </p>
              <p className="text-sm text-gray-500">{selectedParticipant.grade}</p>

              <div className="mt-5 space-y-3 text-left">
                <div className="flex items-center gap-3 bg-white/50 rounded-xl px-4 py-3">
                  <Trophy size={18} className="text-gold-dark shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Event</p>
                    <p className="text-sm font-medium text-maroon-dark">
                      {selectedParticipant.event}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/50 rounded-xl px-4 py-3">
                  <MapPin size={18} className="text-gold-dark shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Level</p>
                    <p className="text-sm font-medium text-maroon-dark">
                      {selectedParticipant.level}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/50 rounded-xl px-4 py-3">
                  <GraduationCap size={18} className="text-gold-dark shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500">Result</p>
                    <p className="text-sm font-medium text-maroon-dark">
                      {selectedParticipant.position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-white glass-card-dark rounded-full p-2"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={lightbox.image}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

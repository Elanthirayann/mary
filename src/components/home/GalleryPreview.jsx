import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import TiltCard from "../ui/TiltCard";
import gallery from "../../data/gallery";

export default function GalleryPreview() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="py-16 md:py-28 px-6 max-w-7xl mx-auto">
      <SectionHeading eyebrow="Campus Life" title="Gallery" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {gallery.map((g, i) => (
          <Reveal key={g.id} delay={(i % 8) * 0.04}>
            <TiltCard
              as="button"
              onClick={() => setLightbox(g)}
              lift={false}
              spotlightColor="rgba(255,255,255,0.4)"
              className="block w-full rounded-2xl h-36 md:h-44 cursor-pointer"
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
      <div className="text-center mt-12">
        <Button as={Link} to="/gallery" variant="maroon">
          View Full Gallery
        </Button>
      </div>

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
    </section>
  );
}

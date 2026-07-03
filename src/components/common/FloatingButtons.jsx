import { useEffect, useState } from "react";
import { MessageCircle, Phone, MapPin, X, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { school } from "../../data/school";

export default function FloatingButtons() {
  const [waOpen, setWaOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = (text) =>
    `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="h-11 w-11 rounded-full bg-maroon text-white shadow-soft flex items-center justify-center hover:bg-maroon-dark transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {waOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass-card rounded-2xl p-2 w-56"
          >
            <a
              href={waLink("Hello, I would like to know more about admissions.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/60 text-sm text-gray-700 transition-colors"
            >
              <MessageCircle size={16} className="text-green-600" />
              Chat with Admission Office
            </a>
            <a
              href={`tel:${school.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/60 text-sm text-gray-700 transition-colors"
            >
              <Phone size={16} className="text-maroon" />
              Call Now
            </a>
            <a
              href="https://www.google.com/maps?q=Paiyanur,Chennai"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-white/60 text-sm text-gray-700 transition-colors"
            >
              <MapPin size={16} className="text-gold-dark" />
              Get Directions
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setWaOpen((o) => !o)}
        aria-label="WhatsApp contact options"
        className="h-14 w-14 rounded-full bg-green-600 text-white shadow-soft flex items-center justify-center hover:bg-green-700 hover:scale-110 active:scale-95 transition-all animate-pulseGlow"
      >
        {waOpen ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}

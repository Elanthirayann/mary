import { motion } from "framer-motion";
import AuroraBackground from "../ui/AuroraBackground";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-maroon relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_45%)]" />
      <AuroraBackground variant="dark" />
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-4xl md:text-6xl text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-white/80 max-w-xl text-sm md:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Button from "../common/Button";
import { school } from "../../data/school";

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[560px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1600&h=1000&fit=crop"
          alt="St. Mary's Matriculation School building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/90 via-maroon-dark/70 to-maroon-dark/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="glass-card-dark inline-flex items-center gap-2 text-gold-light text-xs font-medium px-4 py-2 rounded-full mb-6">
            <GraduationCap size={14} /> Est. {school.established} &middot; Affiliated to {school.board}
          </span>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-5">
            Welcome to <span className="shimmer-text">{school.name}</span>
          </h1>
          <p className="text-white/85 text-base md:text-lg mb-8 max-w-lg">
            {school.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button as={Link} to="/admissions" variant="solid">
              Apply for Admission
            </Button>
            <Button as={Link} to="/facilities" variant="outline">
              Take a Virtual Tour
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

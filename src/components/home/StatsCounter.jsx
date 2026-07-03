import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import TiltCard from "../ui/TiltCard";
import AuroraBackground from "../ui/AuroraBackground";
import { stats } from "../../data/school";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading font-bold text-4xl md:text-5xl shimmer-text">
      {display}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative bg-maroon py-16 md:py-20 px-6 overflow-hidden">
      <AuroraBackground variant="dark" />
      <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <TiltCard glass="dark" className="rounded-2xl p-6 md:p-7 text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="text-white/75 text-sm mt-2">{s.label}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * TiltCard — an Aceternity/Magic UI style interactive card primitive.
 * - Tilts in 3D toward the cursor
 * - Renders a cursor-following spotlight glow
 * - Optionally applies a liquid-glass surface (glass="light" | "dark")
 *
 * Usage:
 *  <TiltCard className="rounded-2xl p-6 h-full" glass="light">...</TiltCard>
 */
export default function TiltCard({
  children,
  className = "",
  glass = false, // false | "light" | "dark"
  tilt = true,
  spotlight = true,
  spotlightColor,
  lift = true,
  style = {},
  as = "div",
  ...props
}) {
  const Comp = useMemo(
    () => (typeof as === "string" ? motion[as] || motion.div : motion(as)),
    [as]
  );
  const ref = useRef(null);
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const springConf = { stiffness: 220, damping: 20, mass: 0.6 };
  const rotateX = useSpring(rx, springConf);
  const rotateY = useSpring(ry, springConf);

  const spotBg = useTransform([px, py], ([latestX, latestY]) =>
    `radial-gradient(280px circle at ${latestX}% ${latestY}%, ${
      spotlightColor || (glass === "dark" ? "rgba(230,195,107,0.28)" : "rgba(212,164,55,0.30)")
    }, transparent 70%)`
  );

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    px.set(nx * 100);
    py.set(ny * 100);
    if (tilt) {
      ry.set((nx - 0.5) * 14);
      rx.set((0.5 - ny) * 14);
    }
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  const glassClass =
    glass === "dark" ? "glass-card-dark" : glass === "light" ? "glass-card" : "";

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={lift ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformPerspective: 900,
        ...style,
      }}
      className={`group/tilt relative overflow-hidden ${glassClass} ${className}`}
      {...props}
    >
      {spotlight && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{ background: spotBg }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </Comp>
  );
}

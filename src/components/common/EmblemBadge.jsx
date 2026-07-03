import { motion } from "framer-motion";

/**
 * Circular emblem badge, rendered as inline SVG so it stays crisp and
 * scales perfectly at any size — no external image asset required.
 *
 * variant="school" -> school crest (open book + rising sun, maroon/gold)
 * variant="marian"  -> Marian medallion (crown + "M" monogram + halo of
 *                      12 stars, referencing the traditional Marian symbol)
 *
 * To swap in real artwork later (school seal photo / Mother Mary image),
 * just replace the <svg> children with an <image href="..."> tag, or
 * drop an <img> in place of this component — the surrounding className
 * sizing (height and width utility classes) will still apply.
 */
export default function EmblemBadge({ variant = "school", className = "" }) {
  const isSchool = variant === "school";
  const gradientId = `emblem-ring-${variant}`;
  const label = isSchool
    ? "St. Mary's Matriculation School emblem"
    : "Mother Mary emblem";

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: isSchool ? -3 : 3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`shrink-0 ${className}`}
      role="img"
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E6C36B" />
            <stop offset="100%" stopColor="#B3852A" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="47"
          fill="#7A1E1E"
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
        />
        <circle
          cx="50"
          cy="50"
          r="39"
          fill="none"
          stroke="#E6C36B"
          strokeWidth="1"
          opacity="0.45"
        />

        {isSchool ? (
          <g>
            {/* rising sun rays */}
            <g stroke="#D4A437" strokeWidth="2.2" strokeLinecap="round">
              <line x1="50" y1="15" x2="50" y2="23" />
              <line x1="37" y1="18" x2="41" y2="25" />
              <line x1="63" y1="18" x2="59" y2="25" />
              <line x1="27" y1="27" x2="33" y2="32" />
              <line x1="73" y1="27" x2="67" y2="32" />
            </g>
            {/* open book */}
            <path
              d="M50 41 C43 37 32 37 25 41 L25 60 C32 56 43 56 50 60 C57 56 68 56 75 60 L75 41 C68 37 57 37 50 41 Z"
              fill="none"
              stroke="#F5E7C4"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <line x1="50" y1="41" x2="50" y2="60" stroke="#F5E7C4" strokeWidth="2" />
            <path
              d="M29 45 C34 43 41 43 46 45.5"
              fill="none"
              stroke="#F5E7C4"
              strokeWidth="1.3"
              opacity="0.8"
            />
            <path
              d="M29 51 C34 49 41 49 46 51.5"
              fill="none"
              stroke="#F5E7C4"
              strokeWidth="1.3"
              opacity="0.8"
            />
            <path
              d="M54 45.5 C59 43 66 43 71 45"
              fill="none"
              stroke="#F5E7C4"
              strokeWidth="1.3"
              opacity="0.8"
            />
            <path
              d="M54 51.5 C59 49 66 49 71 51"
              fill="none"
              stroke="#F5E7C4"
              strokeWidth="1.3"
              opacity="0.8"
            />
            {/* laurel banner beneath */}
            <text
              x="50"
              y="72"
              textAnchor="middle"
              fontFamily="Poppins, sans-serif"
              fontSize="8"
              fontWeight="700"
              letterSpacing="1"
              fill="#E6C36B"
            >
              SMMS
            </text>
          </g>
        ) : (
          <g>
            {/* halo of 12 stars — traditional Marian symbol */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
              const r = 34;
              const x = 50 + r * Math.cos(angle);
              const y = 50 + r * Math.sin(angle);
              return <circle key={i} cx={x} cy={y} r="1.7" fill="#E6C36B" />;
            })}
            {/* crown */}
            <path
              d="M36 40 L41 31 L50 38 L59 31 L64 40 L61 47 L39 47 Z"
              fill="#D4A437"
            />
            <circle cx="41" cy="31" r="1.6" fill="#F5E7C4" />
            <circle cx="50" cy="27" r="1.8" fill="#F5E7C4" />
            <circle cx="59" cy="31" r="1.6" fill="#F5E7C4" />
            {/* monogram */}
            <text
              x="50"
              y="70"
              textAnchor="middle"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="28"
              fontWeight="700"
              fill="#F5E7C4"
            >
              M
            </text>
          </g>
        )}
      </svg>
    </motion.div>
  );
}

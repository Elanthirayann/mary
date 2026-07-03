/**
 * AuroraBackground — soft floating gradient blobs used behind glass sections
 * to give liquid-glass cards something to refract. Purely decorative.
 */
export default function AuroraBackground({ variant = "light", className = "" }) {
  const palettes =
    variant === "dark"
      ? [
          "bg-gold/25",
          "bg-white/10",
          "bg-gold-light/20",
        ]
      : [
          "bg-gold/25",
          "bg-maroon/10",
          "bg-gold-light/25",
        ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div
        className={`aurora-blob ${palettes[0]} h-72 w-72 -top-10 -left-10`}
        style={{ animationDelay: "0s" }}
      />
      <div
        className={`aurora-blob ${palettes[1]} h-96 w-96 top-1/3 right-0`}
        style={{ animationDelay: "-4s" }}
      />
      <div
        className={`aurora-blob ${palettes[2]} h-64 w-64 bottom-0 left-1/3`}
        style={{ animationDelay: "-8s" }}
      />
    </div>
  );
}

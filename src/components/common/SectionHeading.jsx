export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } mb-10 md:mb-14`}
    >
      {eyebrow && (
        <span
          className={`inline-block font-heading font-semibold text-xs uppercase tracking-[0.18em] mb-3 ${
            light ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl leading-tight ${
          light ? "text-white" : "text-maroon-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

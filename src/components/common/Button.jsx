const variants = {
  solid: "bg-gold text-maroon-dark hover:bg-gold-dark shadow-soft shimmer-btn",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-maroon backdrop-blur-sm",
  maroon: "bg-maroon text-white hover:bg-maroon-dark shadow-soft shimmer-btn",
  ghost: "text-maroon hover:bg-maroon/5",
  glass: "glass-card text-maroon-dark hover:shadow-soft shimmer-btn",
};

export default function Button({
  as = "button",
  variant = "solid",
  className = "",
  children,
  ...props
}) {
  const Comp = as;
  return (
    <Comp
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-heading font-semibold text-sm tracking-wide transition-all duration-200 hover:scale-[1.045] hover:-translate-y-0.5 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

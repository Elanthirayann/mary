export default function Ticker() {
  const text =
    "🎓 Admissions Open for LKG to Class X (2026-27)  •  📞 Call now for a campus visit  •  🏆 Limited seats available  •  ";
  return (
    <div className="bg-maroon text-gold overflow-hidden whitespace-nowrap py-2 group">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
        <span className="px-4 text-sm font-medium">{text.repeat(2)}</span>
        <span className="px-4 text-sm font-medium">{text.repeat(2)}</span>
      </div>
    </div>
  );
}

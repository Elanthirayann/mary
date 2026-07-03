import { Link } from "react-router-dom";
import { CalendarCheck, Clock, Bus, Download } from "lucide-react";
import Reveal from "../common/Reveal";
import TiltCard from "../ui/TiltCard";

const items = [
  { icon: CalendarCheck, title: "Admissions Open", subtitle: "2026-27 enrollment", to: "/admissions" },
  { icon: Clock, title: "School Timings", subtitle: "8:45 AM - 3:30 PM", to: "/academics" },
  { icon: Bus, title: "Transport Facility", subtitle: "Routes across Paiyanur", to: "/facilities" },
  { icon: Download, title: "Download Brochure", subtitle: "Programs & fee info", to: "#" },
];

export default function QuickInfoStrip() {
  return (
    <div className="relative z-20 -mt-14 md:-mt-16 px-6">
      <Reveal>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((item) => (
            <TiltCard
              key={item.title}
              as={Link}
              to={item.to}
              glass="light"
              spotlightColor="rgba(212,164,55,0.35)"
              className="rounded-2xl p-4 md:p-5 flex items-center gap-3"
            >
              <div className="h-11 w-11 rounded-full bg-maroon/10 text-maroon flex items-center justify-center shrink-0 group-hover/tilt:bg-maroon group-hover/tilt:text-white transition-colors duration-300">
                <item.icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="font-heading font-semibold text-sm text-maroon-dark truncate">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 truncate">{item.subtitle}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

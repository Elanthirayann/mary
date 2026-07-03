import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import TiltCard from "../ui/TiltCard";
import events from "../../data/events";

export default function EventsNews() {
  return (
    <section className="bg-cream py-16 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="What's Happening" title="Events & News" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08} className="h-full">
              <TiltCard glass="light" lift className="rounded-3xl overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/tilt:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <div className="absolute top-3 left-3 glass-card-dark text-white rounded-xl px-3 py-1.5 text-center leading-tight">
                    <p className="font-heading font-bold text-base">{e.day}</p>
                    <p className="text-[10px] uppercase tracking-wide">{e.month}</p>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-heading font-semibold text-maroon-dark text-lg mb-1.5">{e.title}</h3>
                  <p className="text-sm text-gray-600">{e.excerpt}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button as={Link} to="/achievements" variant="maroon">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}

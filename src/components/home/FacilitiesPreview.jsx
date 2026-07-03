import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import TiltCard from "../ui/TiltCard";
import facilities from "../../data/facilities";

export default function FacilitiesPreview() {
  return (
    <section className="bg-cream py-16 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Infrastructure" title="Facilities Built for Learning" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {facilities.map((f, i) => (
            <Reveal key={f.id} delay={(i % 6) * 0.06} className="h-full">
              <TiltCard
                spotlightColor="rgba(255,255,255,0.35)"
                lift={false}
                className="rounded-3xl h-52 md:h-64"
              >
                <div className="relative w-full h-full">
                  <img
                    src={f.image}
                    alt={f.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/tilt:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/85 via-maroon-dark/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-1 group-hover/tilt:translate-y-0 transition-transform duration-300">
                    <p className="font-heading font-semibold text-white text-sm md:text-lg">
                      {f.label}
                    </p>
                    <span className="block h-0.5 w-8 bg-gold mt-2 rounded-full group-hover/tilt:w-16 transition-all duration-300" />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button as={Link} to="/facilities" variant="maroon">
            View All Facilities
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import Reveal from "../common/Reveal";
import Button from "../common/Button";

export default function AdmissionCTA() {
  return (
    <section className="px-6 py-16">
      <Reveal>
        <div className="glow-ring max-w-7xl mx-auto rounded-3xl">
          <div className="relative bg-maroon rounded-3xl px-8 md:px-16 py-14 md:py-20 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,white,transparent_40%)]" />
            <div className="aurora-blob bg-gold/30 h-64 w-64 -bottom-20 -left-10" />
            <div className="aurora-blob bg-gold-light/20 h-72 w-72 -top-16 right-0" style={{ animationDelay: "-5s" }} />
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-white mb-3 relative z-10">
              Admissions Open for 2026-27
            </h2>
            <p className="text-white/80 mb-8 relative z-10">
              Limited seats across all classes — enquire today to secure your child's place.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <Button as={Link} to="/admissions" variant="solid">
                Apply Now
              </Button>
              <Button as="a" href="#" variant="outline">
                <Download size={17} /> Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Reveal from "../components/common/Reveal";
import EnquiryForm from "../components/common/EnquiryForm";
import TiltCard from "../components/ui/TiltCard";
import { school } from "../data/school";

const cards = [
  { icon: MapPin, label: "Address", content: () => <p className="text-sm text-gray-600">{school.address}</p> },
  { icon: Phone, label: "Phone", content: () => (
      <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="text-sm text-gray-600 hover:text-maroon">
        {school.phoneDisplay}
      </a>
    ) },
  { icon: Mail, label: "Email", content: () => (
      <a href={`mailto:${school.email}`} className="text-sm text-gray-600 hover:text-maroon">
        {school.email}
      </a>
    ) },
  { icon: Clock, label: "Office Hours", content: () => <p className="text-sm text-gray-600">{school.officeHours}</p> },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question? Reach out — we're happy to help."
      />

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <Reveal>
            <EnquiryForm title="Send Us a Message" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              {cards.map((c) => (
                <TiltCard key={c.label} glass="light" tilt={false} className="rounded-2xl p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-maroon/10 text-maroon flex items-center justify-center shrink-0 group-hover/tilt:bg-maroon group-hover/tilt:text-white transition-colors duration-300">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-maroon-dark mb-1">{c.label}</p>
                    <c.content />
                  </div>
                </TiltCard>
              ))}

              <TiltCard lift={false} spotlightColor="rgba(255,255,255,0.35)" className="rounded-2xl h-56">
                <iframe
                  title="School location map"
                  src={school.mapEmbed}
                  className="w-full h-full"
                  loading="lazy"
                />
              </TiltCard>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

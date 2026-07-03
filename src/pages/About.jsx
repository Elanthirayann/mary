import { Target, Eye, Quote, Users } from "lucide-react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import TiltCard from "../components/ui/TiltCard";
import { school } from "../data/school";

const management = [
  { name: "Mrs. Rachel Mary", role: "Correspondent", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop" },
  { name: "Mr. Joseph Anand", role: "Secretary", photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop" },
  { name: "Mrs. Kavitha Suresh", role: "Administrator", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="The story, values and people behind St. Mary's Matriculation School."
      />

      <section id="history" className="py-16 md:py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <TiltCard lift={false} spotlightColor="rgba(255,255,255,0.35)" className="rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=520&fit=crop"
                alt="Historic view of the school campus"
                className="w-full h-72 md:h-96 object-cover transition-transform duration-500 group-hover/tilt:scale-105"
              />
            </TiltCard>
            <div>
              <SectionHeading
                eyebrow="Our History"
                title={`Serving Paiyanur since ${school.established}`}
                align="left"
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                St. Mary's Matriculation School began as a single-block institution
                with a handful of classrooms and a clear purpose: to give the children
                of Paiyanur access to disciplined, values-based education without
                having to travel far from home.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, the campus has grown into a full LKG-to-Class X
                institution with modern labs, a well-stocked library and a faculty
                that has stayed largely with us, generation after generation of
                students.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="vision" className="bg-cream py-16 md:py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <Reveal>
            <TiltCard glass="light" className="rounded-3xl p-8 h-full">
              <div className="h-12 w-12 rounded-2xl bg-maroon/10 text-maroon flex items-center justify-center mb-5 group-hover/tilt:bg-maroon group-hover/tilt:text-white transition-colors duration-300">
                <Eye size={22} />
              </div>
              <h3 className="font-heading font-bold text-xl text-maroon-dark mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a school where every child discovers their own strength,
                grows into a person of strong character, and is fully prepared
                for the world beyond the classroom.
              </p>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.1}>
            <TiltCard glass="light" className="rounded-3xl p-8 h-full">
              <div className="h-12 w-12 rounded-2xl bg-gold/15 text-gold-dark flex items-center justify-center mb-5 group-hover/tilt:bg-gold group-hover/tilt:text-maroon-dark transition-colors duration-300">
                <Target size={22} />
              </div>
              <h3 className="font-heading font-bold text-xl text-maroon-dark mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver a curriculum that balances academic rigour with
                co-curricular growth, supported by teachers who treat each
                student's progress as personal.
              </p>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <section id="principal" className="py-16 md:py-24 px-6 max-w-5xl mx-auto scroll-mt-24">
        <Reveal>
          <div className="glow-ring rounded-2xl">
          <div className="bg-maroon rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
            <Quote className="absolute -top-2 -left-2 text-white/10" size={120} />
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=260&h=260&fit=crop"
              alt="Principal of St. Mary's Matriculation School"
              className="h-32 w-32 rounded-full object-cover border-4 border-gold shrink-0 relative z-10"
            />
            <div className="relative z-10">
              <p className="text-white/90 italic leading-relaxed">
                "Every child who walks through our gates carries their own
                potential. Our work isn't just to teach a syllabus — it's to
                help that potential find its shape, one year at a time."
              </p>
              <p className="mt-4 font-heading font-semibold text-gold-light">
                Mrs. Elizabeth Thomas
              </p>
              <p className="text-white/60 text-sm">Principal</p>
            </div>
          </div>
          </div>
        </Reveal>
      </section>

      <section id="management" className="bg-cream py-16 md:py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Leadership" title="Our Management" />
          <div className="grid sm:grid-cols-3 gap-6">
            {management.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <TiltCard glass="light" className="rounded-3xl p-6 text-center">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-24 w-24 rounded-full object-cover mx-auto mb-4 border-4 border-gold/40 group-hover/tilt:border-gold transition-colors"
                  />
                  <p className="font-heading font-semibold text-maroon-dark">{m.name}</p>
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-1.5 mt-1">
                    <Users size={14} /> {m.role}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

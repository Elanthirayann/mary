import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import TiltCard from "../components/ui/TiltCard";
import facilities from "../data/facilities";

const sectionIds = {
  Library: "library",
  "Computer Lab": "labs",
  "Science Lab": "labs",
  Transport: "transport",
  "Smart Classrooms": "smart-class",
};

export default function Facilities() {
  return (
    <>
      <PageHero
        title="Facilities"
        subtitle="Infrastructure built to support learning, sports and everyday school life."
      />

      <section className="py-16 md:py-28 px-6 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="On Campus"
          title="What our campus offers"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {facilities.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.06} className="h-full">
              <TiltCard
                glass="light"
                id={sectionIds[f.label]}
                className="rounded-3xl overflow-hidden h-full scroll-mt-24"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={f.image}
                    alt={f.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/tilt:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="h-9 w-9 rounded-xl bg-maroon/10 text-maroon flex items-center justify-center shrink-0">
                      <f.icon size={18} />
                    </span>
                    <h3 className="font-heading font-semibold text-maroon-dark">{f.label}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{f.description}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

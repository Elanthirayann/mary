import { ClipboardList, MapPinned, FileText, FileCheck, CheckCircle2, Download } from "lucide-react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import EnquiryForm from "../components/common/EnquiryForm";
import Button from "../components/common/Button";
import TiltCard from "../components/ui/TiltCard";

const steps = [
  { icon: ClipboardList, title: "Enquiry", text: "Submit an enquiry online or call our admission office." },
  { icon: MapPinned, title: "Campus Visit", text: "Tour the campus and meet our faculty and coordinators." },
  { icon: FileText, title: "Application Form", text: "Collect and fill the official application form." },
  { icon: FileCheck, title: "Document Submission", text: "Submit required documents along with the form." },
  { icon: CheckCircle2, title: "Confirmation", text: "Receive admission confirmation and fee payment details." },
];

const eligibility = [
  { cls: "LKG", age: "3+ years as on June 1" },
  { cls: "UKG", age: "4+ years as on June 1" },
  { cls: "Class I", age: "5+ years as on June 1" },
  { cls: "Class II - V", age: "As per previous class completion" },
  { cls: "Class VI - VIII", age: "As per previous class completion" },
  { cls: "Class IX - X", age: "As per previous class completion + TC" },
];

const documents = [
  "Birth certificate (original + copy)",
  "Transfer Certificate (for Class II and above)",
  "Previous year report card / mark sheet",
  "Aadhaar card of the student",
  "4 passport-size photographs",
  "Address proof of parent/guardian",
];

export default function Admissions() {
  return (
    <>
      <PageHero
        title="Admissions 2026-27"
        subtitle="Limited seats available across LKG to Class X. Begin the process today."
      />

      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
        <SectionHeading eyebrow="Process" title="How admission works" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07} className="h-full">
              <TiltCard glass="light" className="relative rounded-3xl p-6 h-full">
                <span className="absolute -top-3 -left-3 h-7 w-7 rounded-full bg-gold text-maroon-dark text-xs font-bold flex items-center justify-center shadow-soft z-10">
                  {i + 1}
                </span>
                <div className="h-11 w-11 rounded-2xl bg-maroon/10 text-maroon flex items-center justify-center mb-4 group-hover/tilt:bg-maroon group-hover/tilt:text-white transition-colors duration-300">
                  <s.icon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-maroon-dark mb-1.5">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Eligibility" title="Age chart by class" align="left" />
              <TiltCard glass="light" tilt={false} className="rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-maroon text-white">
                    <tr>
                      <th className="text-left px-5 py-3 font-heading">Class</th>
                      <th className="text-left px-5 py-3 font-heading">Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eligibility.map((row, i) => (
                      <tr key={row.cls} className={i % 2 ? "bg-white/40" : ""}>
                        <td className="px-5 py-3 font-medium text-gray-700">{row.cls}</td>
                        <td className="px-5 py-3 text-gray-600">{row.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TiltCard>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionHeading eyebrow="Checklist" title="Documents required" align="left" />
              <TiltCard glass="light" tilt={false} className="rounded-2xl p-6">
                <ul className="space-y-3">
                  {documents.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={18} className="text-maroon shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </TiltCard>
              <Button
                as="a"
                href="#"
                variant="maroon"
                className="mt-6 w-full sm:w-auto"
              >
                <Download size={17} /> Download Application Form
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Get Started" title="Enquire for Admission" />
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}

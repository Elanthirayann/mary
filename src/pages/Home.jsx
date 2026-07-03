import Hero from "../components/home/Hero";
import QuickInfoStrip from "../components/home/QuickInfoStrip";
import AboutSnapshot from "../components/home/AboutSnapshot";
import StatsCounter from "../components/home/StatsCounter";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import PrincipalMessage from "../components/home/PrincipalMessage";
import Toppers from "../components/home/Toppers";
import EventsNews from "../components/home/EventsNews";
import GalleryPreview from "../components/home/GalleryPreview";
import Testimonials from "../components/home/Testimonials";
import AdmissionCTA from "../components/home/AdmissionCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInfoStrip />
      <AboutSnapshot />
      <StatsCounter />
      <WhyChooseUs />
      <FacilitiesPreview />
      <PrincipalMessage />
      <Toppers />
      <EventsNews />
      <GalleryPreview />
      <Testimonials />
      <AdmissionCTA />
    </>
  );
}

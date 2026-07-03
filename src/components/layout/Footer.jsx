import { Link } from "react-router-dom";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FacebookIcon, YoutubeIcon, InstagramIcon } from "../common/SocialIcons";
import { school } from "../../data/school";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Achievements", to: "/achievements" },
];

const importantLinks = [
  { label: "Admission Procedure", to: "/admissions" },
  { label: "Fee Structure", to: "/admissions" },
  { label: "Transport Routes", to: "/facilities" },
  { label: "Academic Calendar", to: "/academics" },
];

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-maroon-dark shrink-0">
              <GraduationCap size={20} />
            </div>
            <p className="font-heading font-bold text-white text-base leading-tight">
              {school.name}
            </p>
          </Link>
          <p className="text-sm leading-relaxed">
            Affiliated to the {school.board}, dedicated to nurturing minds and
            building character since {school.established}.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href={school.social.facebook} aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-colors">
              <FacebookIcon size={16} />
            </a>
            <a href={school.social.youtube} aria-label="YouTube" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-colors">
              <YoutubeIcon size={16} />
            </a>
            <a href={school.social.instagram} aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-colors">
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-heading font-semibold text-white mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-gold-light transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold text-white mb-4">Important Links</p>
          <ul className="space-y-2.5 text-sm">
            {importantLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-gold-light transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold text-white mb-4">Contact</p>
          <ul className="space-y-3 text-sm mb-4">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-light" />
              <span>{school.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold-light" />
              <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="hover:text-gold-light">
                {school.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold-light" />
              <a href={`mailto:${school.email}`} className="hover:text-gold-light">
                {school.email}
              </a>
            </li>
          </ul>
          <div className="rounded-lg overflow-hidden h-28 border border-white/10">
            <iframe
              title="School location map"
              src={school.mapEmbed}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © 2026 {school.name}, Paiyanur. All Rights Reserved.
      </div>
    </footer>
  );
}

import { Phone, Mail } from "lucide-react";
import {
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
} from "../common/SocialIcons";
import { school } from "../../data/school";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-maroon-dark text-white text-xs">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${school.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-gold-light transition-colors"
          >
            <Phone size={13} /> {school.phoneDisplay}
          </a>
          <a
            href={`mailto:${school.email}`}
            className="flex items-center gap-1.5 hover:text-gold-light transition-colors"
          >
            <Mail size={13} /> {school.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={school.social.facebook}
              aria-label="Facebook"
              className="hover:text-gold-light"
            >
              <FacebookIcon size={14} />
            </a>
            <a
              href={school.social.youtube}
              aria-label="YouTube"
              className="hover:text-gold-light"
            >
              <YoutubeIcon size={14} />
            </a>
            <a
              href={school.social.instagram}
              aria-label="Instagram"
              className="hover:text-gold-light"
            >
              <InstagramIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

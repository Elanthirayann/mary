import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Button from "../common/Button";
import EmblemBadge from "../common/EmblemBadge";
import { school } from "../../data/school";
import maryImage from "../../assets/mary.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    dropdown: [
      {
        label: "Our History",
        to: "/about#history",
        desc: "Since 1999 in Paiyanur",
      },
      {
        label: "Vision & Mission",
        to: "/about#vision",
        desc: "What drives us",
      },
      {
        label: "Principal's Message",
        to: "/about#principal",
        desc: "A word from leadership",
      },
      { label: "Management", to: "/about#management", desc: "Meet the team" },
    ],
  },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  {
    label: "Facilities",
    to: "/facilities",
    dropdown: [
      {
        label: "Library",
        to: "/facilities#library",
        desc: "A quiet place to read",
      },
      {
        label: "Labs",
        to: "/facilities#labs",
        desc: "Science & computer labs",
      },
      {
        label: "Transport",
        to: "/facilities#transport",
        desc: "GPS-tracked buses",
      },
      {
        label: "Smart Class",
        to: "/facilities#smart-class",
        desc: "Interactive boards",
      },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "Achievements", to: "/achievements" },
  { label: "Contact", to: "/contact" },
];

function NavItem({ link, align = "center" }) {
  const [open, setOpen] = useState(false);
// 
  if (!link.dropdown) {
    return (
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          `relative font-heading text-[14px] font-medium whitespace-nowrap px-1 py-2 group/nav ${
            isActive ? "text-maroon" : "text-gray-700 hover:text-maroon-dark"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {link.label}
            <span
              className={`pointer-events-none absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-gold via-maroon to-gold transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover/nav:w-full"
              }`}
            />
          </>
        )}
      </NavLink>
    );
  }

  const alignClass =
    align === "left"
      ? "left-0"
      : align === "right"
      ? "right-0"
      : "left-1/2 -translate-x-1/2";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="relative flex items-center gap-1 font-heading text-[14px] font-medium text-gray-700 hover:text-maroon-dark transition-colors whitespace-nowrap px-1 py-2 group/nav"
        aria-expanded={open}
      >
        {link.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${
            open ? "rotate-180 text-gold-dark" : ""
          }`}
        />
        <span
          className={`pointer-events-none absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-gold via-maroon to-gold transition-all duration-300 ${
            open ? "w-full" : "w-0 group-hover/nav:w-full"
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className={`absolute ${alignClass} top-full pt-3 w-72 z-50`}
          >
            <div className="glass-card rounded-2xl p-2 overflow-hidden shadow-soft">
              {link.dropdown.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm text-gray-700 hover:bg-white/70 hover:text-maroon transition-colors group/item"
                >
                  <span>
                    <span className="block font-heading font-semibold text-maroon-dark group-hover/item:text-maroon">
                      {item.label}
                    </span>
                    <span className="block text-xs text-gray-500">
                      {item.desc}
                    </span>
                  </span>
                  <ArrowRight
                    size={15}
                    className="shrink-0 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-gold-dark"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    // Close the mobile drawer automatically if the viewport is resized up
    // to a desktop width while it's open, so state never gets stuck.
    const onResize = () => {
      if (window.innerWidth >= 1280) setDrawerOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-40 glass-nav transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_rgba(122,30,30,0.10)]" : ""
      }`}
    >
      {/* thin gradient accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-maroon via-gold to-maroon bg-[length:200%_auto] animate-[shimmerMove_6s_linear_infinite]" />

      <div
        className={`max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-3 transition-[padding] duration-300 ${
          scrolled ? "py-2.5" : "py-3.5 md:py-4"
        }`}
      >
        {/* Brand lockup */}
        {/* Brand lockup */}
        <Link to="/" className="flex items-center gap-2.5 md:gap-3 min-w-0">
          <motion.div
            whileHover={{ rotate: -6, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="shrink-0"
          >
            <img
              src={maryImage}
              alt={`${school.name} emblem`}
              className={`rounded-full object-cover ring-2 ring-gold shadow-soft transition-all duration-300 ${
                scrolled ? "h-14 w-14" : "h-16 w-16 md:h-20 md:w-20"
              }`}
            />
          </motion.div>
          <div className="leading-tight min-w-0">
            <p
              className={`font-heading font-bold text-maroon-dark truncate transition-all duration-300 ${
                scrolled
                  ? "text-sm md:text-base"
                  : "text-base md:text-lg lg:text-xl"
              }`}
            >
              {school.name}
            </p>
            <p className="text-[11px] md:text-xs text-gray-500 truncate tracking-wide">
              {school.place}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-5 shrink-0">
          {navLinks.map((link, i) => (
            <NavItem
              key={link.label}
              link={link}
              align={
                i <= 1 ? "left" : i >= navLinks.length - 2 ? "right" : "center"
              }
            />
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2.5 md:gap-3 shrink-0">
          <div className="hidden xl:block">
            <Button
              as={Link}
              to="/admissions"
              variant="solid"
              className="whitespace-nowrap text-[13px] px-5 py-2.5"
            >
              Admissions Open
            </Button>
          </div>

          {/* Mobile / tablet menu trigger */}
          <button
            className="xl:hidden text-maroon-dark glass-card rounded-full p-2.5 hover:shadow-soft transition-shadow"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-maroon-dark/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 h-full w-[86%] max-w-sm glass-card rounded-l-3xl z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between p-5 border-b border-white/40 sticky top-0 glass-card z-10">
                <div className="flex items-center gap-2.5">
                  <EmblemBadge variant="school" className="h-9 w-9" />
                  <p className="font-heading font-bold text-maroon-dark">
                    Menu
                  </p>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full p-1.5 hover:bg-white/60 transition-colors"
                >
                  <X size={22} className="text-gray-500" />
                </button>
              </div>
              <div className="p-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    {link.dropdown ? (
                      <div>
                        <button
                          className="w-full flex items-center justify-between py-3 font-heading text-gray-700"
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === link.label ? null : link.label
                            )
                          }
                          aria-expanded={mobileDropdown === link.label}
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              mobileDropdown === link.label
                                ? "rotate-180 text-gold-dark"
                                : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.label}
                                  to={item.to}
                                  onClick={() => setDrawerOpen(false)}
                                  className="block py-2 text-sm text-gray-600 hover:text-maroon"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={() => setDrawerOpen(false)}
                        className="block py-3 font-heading text-gray-700 border-b border-gray-100 hover:text-maroon"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <Button
                  as={Link}
                  to="/admissions"
                  onClick={() => setDrawerOpen(false)}
                  variant="solid"
                  className="mt-5 w-full"
                >
                  Admissions Open 2026-27
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

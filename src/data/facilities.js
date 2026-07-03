import { Library, FlaskConical, Monitor, Trophy, Bus, Presentation } from "lucide-react";

const facilities = [
  {
    id: 1,
    label: "Library",
    icon: Library,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=450&fit=crop",
    description:
      "Over 8,000 titles spanning fiction, reference and competitive-exam material, with a dedicated quiet reading hall.",
  },
  {
    id: 2,
    label: "Computer Lab",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=450&fit=crop",
    description:
      "Modern systems with broadband connectivity, giving every student hands-on time with computing fundamentals.",
  },
  {
    id: 3,
    label: "Science Lab",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=450&fit=crop",
    description:
      "Separate Physics, Chemistry and Biology labs equipped for the full matriculation board practical syllabus.",
  },
  {
    id: 4,
    label: "Playground",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&h=450&fit=crop",
    description:
      "A spacious multi-sport ground for athletics, football, kabaddi and our annual sports day events.",
  },
  {
    id: 5,
    label: "Smart Classrooms",
    icon: Presentation,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=450&fit=crop",
    description:
      "Interactive boards in every classroom bring lessons to life with visuals, video and live demonstrations.",
  },
  {
    id: 6,
    label: "Transport",
    icon: Bus,
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=450&fit=crop",
    description:
      "GPS-tracked buses covering Paiyanur and surrounding areas, each accompanied by a lady attendant.",
  },
];

export default facilities;

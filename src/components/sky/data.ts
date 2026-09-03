import type { TKey } from "./i18n";
import logo from "@/assets/image.png.asset.json";
import machineRed from "@/assets/image-2.png.asset.json";
import dumbbells from "@/assets/image-3.png.asset.json";
import mirrorRoom from "@/assets/image-4.png.asset.json";
import benchTraining from "@/assets/image-5.png.asset.json";
import legPress from "@/assets/image-6.png.asset.json";
import machineFloor from "@/assets/image-7.png.asset.json";
import inclinePress from "@/assets/image-8.png.asset.json";

export const GYM = {
  name: "Sky Fitness Gym",
  area: "Arali, Solapur, Maharashtra",
  phoneDisplay: "7768070808",
  tel: "tel:+917768070808",
  whatsapp: "https://wa.me/917768070808",
  // Google Maps link supplied by the gym owner.
  maps: "https://share.google/IfJNeF53UgOEFy0h9",
};

export const waLink = (message: string) =>
  `${GYM.whatsapp}?text=${encodeURIComponent(message)}`;

export const IMAGES = {
  logo: logo.url,
  machineRed: machineRed.url,
  dumbbells: dumbbells.url,
  mirrorRoom: mirrorRoom.url,
  benchTraining: benchTraining.url,
  legPress: legPress.url,
  machineFloor: machineFloor.url,
  inclinePress: inclinePress.url,
};

export const GALLERY: { src: string; alt: string }[] = [
  {
    src: IMAGES.inclinePress,
    alt: "Incline press and plate-loaded machines on the training floor at Sky Fitness Gym, Arali, Solapur",
  },
  {
    src: IMAGES.dumbbells,
    alt: "Chrome dumbbell rack at Sky Fitness Gym in Arali, Solapur",
  },
  {
    src: IMAGES.legPress,
    alt: "Red and black leg press machine at Sky Fitness Gym, Arali",
  },
  {
    src: IMAGES.machineFloor,
    alt: "Row of weight machines across the main hall of Sky Fitness Gym, Solapur",
  },
  {
    src: IMAGES.benchTraining,
    alt: "Member training on a bench beside the dumbbell rack at Sky Fitness Gym",
  },
  {
    src: IMAGES.mirrorRoom,
    alt: "Mirrored training area inside Sky Fitness Gym in Arali, Solapur",
  },
  {
    src: IMAGES.machineRed,
    alt: "Close-up of red-framed cable equipment at Sky Fitness Gym",
  },
];

export const NAV_LINKS: { key: TKey; href: string }[] = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.membership", href: "#membership" },
  { key: "nav.gallery", href: "#gallery" },
  { key: "nav.contact", href: "#contact" },
];

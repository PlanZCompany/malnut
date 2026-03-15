import {
  CONTACT_ROWS,
  HERO_CONTENT,
  NAV_ITEMS,
  SITE_SECTIONS,
  type SectionRow,
} from "./site-content";

export type SectionImage = {
  src: string;
  alt: string;
};

export type SectionLayout = "row" | "reverse";

export type SiteSectionConfig = {
  id: string;
  navLabel: string;
  heading: string;
  image: SectionImage;
  layout: SectionLayout;
  rows: SectionRow[];
};

export const SECTION_LAYOUT: Record<string, SectionLayout> = {
  about: "row",
  offer: "reverse",
  packages: "row",
  products: "reverse",
  clients: "row",
  "why-us": "reverse",
  contact: "row",
};

export const SECTION_IMAGES: Record<string, SectionImage> = {
  about: {
    src: "/images/test.jpg",
    alt: "Wholesale logistics and transport across Europe",
  },
  offer: {
    src: "/images/test.jpg",
    alt: "Reliable courier and freight transportation services",
  },
  packages: {
    src: "/images/test.jpg",
    alt: "Sealed wholesale packages prepared for delivery",
  },
  products: {
    src: "/images/test.jpg",
    alt: "Wholesale nuts, dried fruits, and seeds",
  },
  clients: {
    src: "/images/test.jpg",
    alt: "Business and private clients across Europe",
  },
  "why-us": {
    src: "/images/test.jpg",
    alt: "Trusted delivery partner for wholesale transport",
  },
  contact: {
    src: "/images/test.jpg",
    alt: "Wholesale order and quote contact information",
  },
};

export const HERO_CONFIG = {
  ...HERO_CONTENT,
  backgroundImage: "/images/hero-bg.png",
} as const;

export const SITE_SECTION_LIST: SiteSectionConfig[] = [
  {
    id: SITE_SECTIONS.about.id,
    navLabel: "About Us",
    heading: SITE_SECTIONS.about.heading,
    image: SECTION_IMAGES.about,
    layout: SECTION_LAYOUT.about,
    rows: SITE_SECTIONS.about.rows,
  },
  {
    id: SITE_SECTIONS.offer.id,
    navLabel: "What We Offer",
    heading: SITE_SECTIONS.offer.heading,
    image: SECTION_IMAGES.offer,
    layout: SECTION_LAYOUT.offer,
    rows: SITE_SECTIONS.offer.rows,
  },
  {
    id: SITE_SECTIONS.packages.id,
    navLabel: "Package Sizes",
    heading: SITE_SECTIONS.packages.heading,
    image: SECTION_IMAGES.packages,
    layout: SECTION_LAYOUT.packages,
    rows: SITE_SECTIONS.packages.rows,
  },
  {
    id: SITE_SECTIONS.products.id,
    navLabel: "Product Categories",
    heading: SITE_SECTIONS.products.heading,
    image: SECTION_IMAGES.products,
    layout: SECTION_LAYOUT.products,
    rows: SITE_SECTIONS.products.rows,
  },
  {
    id: SITE_SECTIONS.clients.id,
    navLabel: "Who We Deliver To",
    heading: SITE_SECTIONS.clients.heading,
    image: SECTION_IMAGES.clients,
    layout: SECTION_LAYOUT.clients,
    rows: SITE_SECTIONS.clients.rows,
  },
  {
    id: SITE_SECTIONS.whyUs.id,
    navLabel: "Why Choose Us",
    heading: SITE_SECTIONS.whyUs.heading,
    image: SECTION_IMAGES["why-us"],
    layout: SECTION_LAYOUT["why-us"],
    rows: SITE_SECTIONS.whyUs.rows,
  },
  {
    id: SITE_SECTIONS.contact.id,
    navLabel: "Contact",
    heading: SITE_SECTIONS.contact.heading,
    image: SECTION_IMAGES.contact,
    layout: SECTION_LAYOUT.contact,
    rows: CONTACT_ROWS,
  },
] as const;

export const SITE_NAV_ITEMS = NAV_ITEMS.filter((item) => item.id !== "home");

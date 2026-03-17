import {
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
  images: SectionImage[];
  layout: SectionLayout;
  rows: SectionRow[];
  button?: boolean;
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

export const SECTION_IMAGES: Record<string, SectionImage[]> = {
  about: [
    {
      src: "/images/about/1.jpeg",
      alt: "Wholesale logistics and transport across Europe",
    },
    {
      src: "/images/about/2.jpeg",
      alt: "Weekly wholesale delivery operations across the European Union",
    },
    {
      src: "/images/about/3.jpeg",
      alt: "Secure packaged goods distribution for wholesale clients",
    },
    {
      src: "/images/about/4.jpeg",
      alt: "Reliable transport network for weekly EU-wide deliveries",
    },
  ],
  offer: [
    {
      src: "/images/offer/1.jpg",
      alt: "Reliable courier and freight transportation services",
    },
  ],
  packages: [
    {
      src: "/images/packages/1.jpeg",
      alt: "Sealed wholesale packages prepared for transport",
    },
    {
      src: "/images/packages/2.jpeg",
      alt: "Standard package weights for wholesale delivery",
    },
    {
      src: "/images/packages/3.jpeg",
      alt: "Secure packaged goods ready for EU distribution",
    },
    {
      src: "/images/packages/4.jpeg",
      alt: "Bulk sealed packages for weekly wholesale shipping",
    },
    {
      src: "/images/packages/5.jpeg",
      alt: "Bulk sealed packages for weekly wholesale shipping",
    },
    {
      src: "/images/packages/6.jpeg",
      alt: "Bulk sealed packages for weekly wholesale shipping",
    },
    {
      src: "/images/packages/7.jpeg",
      alt: "Bulk sealed packages for weekly wholesale shipping",
    },
  ],
  products: [
    {
      src: "/images/products/1.jpeg",
      alt: "Raw nuts prepared for wholesale trade",
    },
    {
      src: "/images/products/2.jpeg",
      alt: "Roasted nuts for wholesale supply and redistribution",
    },
    {
      src: "/images/products/3.jpeg",
      alt: "Dried fruits packed for bulk wholesale distribution",
    },
    {
      src: "/images/products/4.jpeg",
      alt: "Seeds suitable for wholesale trade and resale",
    },
    {
      src: "/images/products/5.jpeg",
      alt: "Seeds suitable for wholesale trade and resale",
    },
    {
      src: "/images/products/6.jpeg",
      alt: "Seeds suitable for wholesale trade and resale",
    },
    {
      src: "/images/products/7.jpeg",
      alt: "Seeds suitable for wholesale trade and resale",
    },
    {
      src: "/images/products/8.jpeg",
      alt: "Seeds suitable for wholesale trade and resale",
    },
    {
      src: "/images/products/9.jpeg",
      alt: "Seeds suitable for wholesale trade and resale",
    },
    {
      src: "/images/products/10.jpeg",
      alt: "Seeds suitable for wholesale trade and resale",
    },
    {
      src: "/images/products/11.jpeg",
      alt: "Seeds suitable for wholesale trade and resale",
    },
  ],
  clients: [
    {
      src: "/images/clients/1.jpg",
      alt: "Wholesale delivery services for restaurants and hotels",
    },
  ],
  "why-us": [
    {
      src: "/images/why-us/23.jpeg",
      alt: "Trusted partner for EU-wide wholesale delivery",
    },
    {
      src: "/images/why-us/25.jpeg",
      alt: "Professional logistics support with secure package handling",
    },
    {
      src: "/images/why-us/26.jpeg",
      alt: "Reliable weekly transport with trusted courier partners",
    },
    {
      src: "/images/why-us/27.jpeg",
      alt: "Efficient wholesale logistics across the European Union",
    },
  ],
  contact: [
    {
      src: "/images/contact/1.jpg",
      alt: "Wholesale order and quote contact information",
    },
  ],
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
    images: SECTION_IMAGES.about,
    layout: SECTION_LAYOUT.about,
    rows: SITE_SECTIONS.about.rows,
  },
  {
    id: SITE_SECTIONS.offer.id,
    navLabel: "What We Offer",
    heading: SITE_SECTIONS.offer.heading,
    images: SECTION_IMAGES.offer,
    layout: SECTION_LAYOUT.offer,
    rows: SITE_SECTIONS.offer.rows,
  },
  {
    id: SITE_SECTIONS.packages.id,
    navLabel: "Package Sizes",
    heading: SITE_SECTIONS.packages.heading,
    images: SECTION_IMAGES.packages,
    layout: SECTION_LAYOUT.packages,
    rows: SITE_SECTIONS.packages.rows,
  },
  {
    id: SITE_SECTIONS.products.id,
    navLabel: "Product Categories",
    heading: SITE_SECTIONS.products.heading,
    images: SECTION_IMAGES.products,
    layout: SECTION_LAYOUT.products,
    rows: SITE_SECTIONS.products.rows,
  },
  {
    id: SITE_SECTIONS.clients.id,
    navLabel: "Who We Deliver To",
    heading: SITE_SECTIONS.clients.heading,
    images: SECTION_IMAGES.clients,
    layout: SECTION_LAYOUT.clients,
    rows: SITE_SECTIONS.clients.rows,
  },
  {
    id: SITE_SECTIONS.whyUs.id,
    navLabel: "Why Choose Us",
    heading: SITE_SECTIONS.whyUs.heading,
    images: SECTION_IMAGES["why-us"],
    layout: SECTION_LAYOUT["why-us"],
    rows: SITE_SECTIONS.whyUs.rows,
  },
  {
    id: SITE_SECTIONS.contact.id,
    navLabel: "Contact",
    heading: SITE_SECTIONS.contact.heading,
    images: SECTION_IMAGES.contact,
    layout: SECTION_LAYOUT.contact,
    rows: SITE_SECTIONS.contact.rows,
    button: true,
  },
];

export const SITE_NAV_ITEMS = NAV_ITEMS.filter((item) => item.id !== "home");

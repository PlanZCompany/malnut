export type NavItem = {
  id: string;
  label: string;
};

export type ContactInfo = {
  email: string;
};

export type PackageSize = {
  label: string;
  weightKg: number;
};

export type ProductCategory = {
  label: string;
};

export type DeliveryTarget = {
  label: string;
};

export type ValueItem = {
  label: string;
};

export type SectionRow =
  | {
      type: "text";
      value: string;
    }
  | {
      type: "list";
      title?: string;
      items: string[];
      columns?: 2;
    };

export const COMPANY_NAME = "Malnut";

export const CONTACT_INFO: ContactInfo = {
  email: "mtltd@gmail.com",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "offer", label: "What We Offer" },
  { id: "packages", label: "Package Sizes" },
  { id: "products", label: "Product Categories" },
  { id: "clients", label: "Who We Deliver To" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "contact", label: "Contact" },
];

export const HERO_CONTENT = {
  sectionId: "home",
  title: "EU-WIDE WHOLESALE DELIVERY COMPANY",
  subtitle:
    "Fast, reliable, and secure weekly wholesale delivery across the entire European Union.",
  ctaLabel: "Contact Us",
  ctaHref: `mailto:${CONTACT_INFO.email}`,
} as const;

export const ABOUT_US_ROWS: SectionRow[] = [
  {
    type: "text",
    value:
      "We are a Europe-based wholesale delivery company specializing in weekly distribution across the entire European Union.",
  },
  {
    type: "text",
    value:
      "Our mission is to provide fast, reliable, and secure transportation of packaged goods to businesses and private clients without quantity limitations.",
  },
  {
    type: "text",
    value:
      "We operate with established logistics networks and official contracts with European courier and transport companies, ensuring smooth, efficient, and on-time deliveries every week.",
  },
];

export const WHAT_WE_OFFER_ITEMS: ValueItem[] = [
  { label: "Weekly deliveries across all EU countries" },
  { label: "No quantity limits" },
  { label: "Secure courier and freight transportation" },
  { label: "Fast and reliable logistics partners" },
  { label: "Wholesale supply solutions" },
  { label: "Long-term B2B partnerships" },
];

export const WHAT_WE_OFFER_ROWS: SectionRow[] = [
  {
    type: "list",
    items: WHAT_WE_OFFER_ITEMS.map((item) => item.label),
  },
  {
    type: "text",
    value: "All goods are transported without breaking package integrity.",
  },
  {
    type: "text",
    value: "Packages are not opened, repacked, or altered during transport.",
  },
];

export const PACKAGE_SIZES: PackageSize[] = [
  { label: "5 kg", weightKg: 5 },
  { label: "10 kg", weightKg: 10 },
  { label: "11.34 kg", weightKg: 11.34 },
  { label: "13.61 kg", weightKg: 13.61 },
  { label: "22.68 kg", weightKg: 22.68 },
  { label: "25 kg", weightKg: 25 },
  { label: "30 kg", weightKg: 30 },
  { label: "50 kg", weightKg: 50 },
];

export const PACKAGE_SIZES_ROWS: SectionRow[] = [
  {
    type: "text",
    value: "We distribute sealed packages in the following standard weights:",
  },
  {
    type: "list",
    items: PACKAGE_SIZES.map((size) => size.label),
    columns: 2,
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { label: "Raw Nuts" },
  { label: "Roasted Nuts" },
  { label: "Dried Fruits" },
  { label: "Seeds" },
];

export const PRODUCT_CATEGORIES_ROWS: SectionRow[] = [
  {
    type: "list",
    items: PRODUCT_CATEGORIES.map((category) => category.label),
  },
  {
    type: "text",
    value: "All products are suitable for wholesale trade and redistribution.",
  },
];

export const DELIVERY_TARGETS: DeliveryTarget[] = [
  { label: "Private individuals" },
  { label: "Restaurants" },
  { label: "Hotels" },
  { label: "Cafés" },
  { label: "Nightclubs & bars" },
  { label: "Retail stores" },
  { label: "Wholesale markets" },
  { label: "Production facilities" },
  { label: "Resellers & distributors" },
];

export const WHO_WE_DELIVER_TO_ROWS: SectionRow[] = [
  {
    type: "text",
    value: "We supply and deliver to:",
  },
  {
    type: "list",
    items: DELIVERY_TARGETS.map((target) => target.label),
  },
  {
    type: "text",
    value:
      "We specialize in bulk and wholesale orders and aim to build long-term business relationships with our partners.",
  },
];

export const WHY_CHOOSE_US_ITEMS: ValueItem[] = [
  { label: "EU-wide coverage" },
  { label: "Weekly scheduled transport" },
  { label: "Trusted courier partners" },
  { label: "Wholesale focus" },
  { label: "Secure sealed packaging handling" },
  { label: "Flexible order volumes" },
  { label: "Professional customer support" },
];

export const WHY_CHOOSE_US_ROWS: SectionRow[] = [
  {
    type: "list",
    items: WHY_CHOOSE_US_ITEMS.map((item) => item.label),
  },
  {
    type: "text",
    value:
      "We are committed to delivering quality, reliability, and efficiency to every client across Europe.",
  },
];

export const CONTACT_ROWS: SectionRow[] = [
  {
    type: "text",
    value: "You can place your order or request a quote via:",
  },
  {
    type: "text",
    value: `Email: ${CONTACT_INFO.email}`,
  },
  {
    type: "text",
    value:
      "Our team will respond quickly with delivery details, pricing, and scheduling information.",
  },
  {
    type: "text",
    value: "Contact us today to start your wholesale partnership.",
  },
];

export const SITE_SECTIONS = {
  about: {
    id: "about",
    heading: "About Us",
    rows: ABOUT_US_ROWS,
  },
  offer: {
    id: "offer",
    heading: "What We Offer",
    rows: WHAT_WE_OFFER_ROWS,
  },
  packages: {
    id: "packages",
    heading: "Package Sizes",
    rows: PACKAGE_SIZES_ROWS,
  },
  products: {
    id: "products",
    heading: "Our Main Product Categories",
    rows: PRODUCT_CATEGORIES_ROWS,
  },
  clients: {
    id: "clients",
    heading: "Who We Deliver To",
    rows: WHO_WE_DELIVER_TO_ROWS,
  },
  whyUs: {
    id: "why-us",
    heading: "Why Choose Us",
    rows: WHY_CHOOSE_US_ROWS,
  },
  contact: {
    id: "contact",
    heading: "Orders & Contact",
    rows: CONTACT_ROWS,
  },
} as const;

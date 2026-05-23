export const siteConfig = {
  name: "Dopest Media Production",
  tagline: "High Quality Images",
  description:
    "Premium photography studio in South Africa offering studio sessions, house calls, creative direction, and bespoke styling for portraits, families, events, and editorial shoots.",
  phone: "065 806 6697",
  internationalPhone: "+27658066697",
  phoneLink: "tel:+27658066697",
  whatsappLink:
    "https://wa.me/27658066697?text=Hi%2C%20I'd%20like%20to%20get%20a%20quote%20for%20a%20photoshoot",
  url: "https://dopestmedia.co.za",
  locale: "en_ZA",
  region: "South Africa",
  lastModified: "2026-05-23",
  ogImage: "/images/hero-bg.jpg",
  keywords: [
    "Dopest Media Production",
    "photography studio South Africa",
    "studio photography",
    "portrait photography",
    "family photography",
    "event photography",
    "house call photographer",
    "creative direction photography",
  ],
} as const;

export const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "Studio Sessions",
    description:
      "White-background perfection for headshots, product photography, and portfolio builds. Our controlled environment ensures consistent, magazine-quality results every time.",
  },
  {
    title: "House Calls",
    description:
      "We bring the studio to you. Whether it's your home, office, or favourite outdoor location — we set up, shoot, and deliver without you lifting a finger.",
  },
  {
    title: "Props & Décor",
    description:
      "Elevate your shoot with our curated collection of backdrops, furniture, and styling accessories. From minimalist to maximalist — we set the scene.",
  },
  {
    title: "Creative Direction",
    description:
      "From concept to final edit, our team guides the entire creative process. Mood boards, styling advice, and art direction included.",
  },
] as const;

export const portfolioLandscape = [
  { src: "/images/portfolio-1.jpg", alt: "Studio portrait session", label: "Studio Portrait" },
  { src: "/images/portfolio-2.jpg", alt: "Family session photography", label: "Family Session" },
  { src: "/images/portfolio-7.jpg", alt: "Creative editorial shoot", label: "Creative Editorial" },
] as const;

export const portfolioPortrait = [
  { src: "/images/portfolio-3.jpg", alt: "Event coverage photography", label: "Event Coverage" },
  { src: "/images/portfolio-4.jpg", alt: "Intimate moments captured", label: "Intimate Moments" },
  { src: "/images/portfolio-6.jpg", alt: "Natural light photography", label: "Natural Light" },
] as const;

export const allPortfolioImages = [
  { src: "/images/portfolio-1.jpg", alt: "Studio portrait session", label: "Studio Portrait", category: "PORTRAIT · STUDIO SESSION" },
  { src: "/images/portfolio-2.jpg", alt: "Family session photography", label: "Family Session", category: "FAMILY · STUDIO SESSION" },
  { src: "/images/portfolio-7.jpg", alt: "Creative editorial shoot", label: "Creative Editorial", category: "EDITORIAL · ON LOCATION" },
  { src: "/images/portfolio-3.jpg", alt: "Event coverage photography", label: "Event Coverage", category: "EVENT · ON LOCATION" },
  { src: "/images/portfolio-4.jpg", alt: "Intimate moments captured", label: "Intimate Moments", category: "PORTRAIT · HOUSE CALL" },
  { src: "/images/portfolio-6.jpg", alt: "Natural light photography", label: "Natural Light", category: "PORTRAIT · NATURAL LIGHT" },
  { src: "/images/portfolio-5.jpg", alt: "Behind the scenes", label: "Behind the Scenes", category: "BTS · STUDIO SESSION" },
  { src: "/images/portfolio-8.jpg", alt: "On location photography", label: "On Location", category: "PORTRAIT · ON LOCATION" },
  { src: "/images/portfolio-9.jpg", alt: "Studio lighting setup", label: "Studio Lighting", category: "PORTRAIT · STUDIO SESSION" },
] as const;
